---
layout: print
title: CartoDB Documentation Print
---

{% include introduction.html %}
<<<<<<< HEAD
## CartoDB.js

CartoDB offers a simple unified JavaScript library called CartoDB.js that lets you interact with the CartoDB service. This library allows you to connect to your stored visualizations, create new visualizations, add custom interaction, and access or query your raw data from a web browser; meaning, your applications just got a whole lot more powerful with a lot less code.

When you add CartoDB.js to your websites you get some great new tools to make maps or power your content with data. Let’s take a look.


## Getting started

The simplest way to use a visualization created in CartoDB on an external site is as follows:

<div class="code-title">Create a simple visualization</div>
{% highlight html %}
<link rel="stylesheet" href="http://libs.cartocdn.com/cartodb.js/v3/3.15/themes/css/cartodb.css" />

...

<div id="map"></div>

...

<script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.js"></script>
<script>
// get the viz.json url from the CartoDB Editor
// - click on visualize
// - create new visualization
// - make visualization public
// - click on publish
// - go to API tab

window.onload = function() {
  cartodb.createVis('map', 'http://documentation.cartodb.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json');
}
</script>
{% endhighlight %}

[Grab the complete example source code](https://github.com/CartoDB/cartodb.js/blob/develop/examples/easy.html)


## Using the library

CartoDB.js can be used when you want to embed and use a visualization you have designed using CartoDB's user interface, or to dynamically create visualizations from scratch using your data. If you want to create new maps on your webpage, jump to [Creating a visualization from scratch](#creating-a-visualization-from-scratch). If you already have maps on your webpage and want to add CartoDB visualizations to them, read [Adding CartoDB layers to an existing map](#adding-cartodb-layers-to-an-existing-map).

You can also use the CartoDB API to create visualizations programmatically. This can be useful when the visualizations react to user interactions. To read more about it jump to [Creating visualizations at runtime](#creating-visualizations-at-runtime).

We’ve also made it easier than ever for you to build maps using the mapping library of your choice. Whether you are using Leaflet or something else, our CartoDB.js code remains the same. This makes our API documentation simple and straightforward. It also makes it easy for you to remember and be consistent if you develop or maintain multiple maps online.

To start using CartoDB.js just paste this piece of code within the HEAD tags of your HTML:

<div class="code-title">Linking cartodb.js on your html file</div>
{% highlight html %}
<link rel="stylesheet" href="http://libs.cartocdn.com/cartodb.js/v3/3.15/themes/css/cartodb.css" />
<script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.js"></script>
{% endhighlight %}

### Creating a visualization from scratch

The easiest way to quickly get a CartoDB map onto your webpage. Use this when there is no map in your application and you want to add the visualization to hack over it. With this method, CartoDB.js handles all the details of loading a map interface, basemap, and your CartoDB visualization.

You can start by giving cartodb.js the DIV ID from your HTML where you want to place your map, and the viz.json URL of your visualization, which you can get from the share window.

<div class="code-title">Simplest way to add your map to a webpage ever!</div>
{% highlight javascript %}
cartodb.createVis('map', 'http://documentation.cartodb.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json');
{% endhighlight %}

That’s it! No need to create the map instance, insert controls, or load layers. CartoDB.js takes care of this for you. If you want to modify the result after instantiating your map with this method, take a look at the CartoDB.js API [available methods](#api-methods). For example, you can also use the returned layer to build more functionality (show/hide, click, hover, custom infowindows):

<div class="code-title">Simplest way to add your map to a webpage ever!</div>
{% highlight javascript %}
cartodb.createVis('map', 'http://documentation.cartodb.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json')
  .done(function(vis, layers) {
    // layer 0 is the base layer, layer 1 is cartodb layer
    // when setInteraction is disabled featureOver is triggered
    layers[1].setInteraction(true);
    layers[1].on('featureOver', function(e, latlng, pos, data, layerNumber) {
      console.log(e, latlng, pos, data, layerNumber);
    });

    // you can get the native map to work with it
    var map = vis.getNativeMap();

    // now, perform any operations you need, e.g. assuming map is a L.Map object:
    // map.setZoom(3);
    // map.panTo([50.5, 30.5]);
  });
{% endhighlight %}

### Adding CartoDB layers to an existing map

In case you already have a map instantiated on your page, you can simply use the [createLayer](#cartodbcreatelayermap-layersource--options--callback) method to add new CartoDB layers to it. This is particullary useful when you have more things on your map apart from CartoDB layers or you have an application where you want to integrate CartoDB layers.

Below, you have an example using a previously instatiated Leaflet map.

<div class="code-title">Adding cartodb layers to an existing map</div>
{% highlight html %}
<div id="map_canvas"></div>

<script>
  var map = new L.Map('map_canvas', {
    center: [0,0],
    zoom: 2
  });

  cartodb.createLayer(map, 'http://documentation.cartodb.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json')
    .addTo(map)
    .on('done', function(layer) {
      //do stuff
    })
    .on('error', function(err) {
      alert("some error occurred: " + err);
    });
</script>
{% endhighlight %}

[Grab the complete example source code](https://github.com/CartoDB/cartodb.js/blob/develop/examples/leaflet.html)

### Creating visualizations at runtime

All CartoDB services are available through the API, which basically means that you can create a new visualization without doing it before through the CartoDB UI. This is particularly useful when you are modifying the visualization depending on user interactions that change the SQL to get the data or CartoCSS to style it. Although this method requires more programming skills, it provides all the flexibility you might need to create more dynamic visualizations.

When you create a visualization using the CartoDB website, you automatically get a viz.json URL that defines it. When you want to create the visualization via JavaScript, you don't always have a viz.json. You will need to pass all the required parameters to the library so that it can create the visualization at runtime and display it on your map. It is pretty simple.

<div class="code-title">Creating visualizations at runtime</div>
{% highlight javascript %}
// create a layer with 1 sublayer
cartodb.createLayer(map, {
  user_name: 'mycartodbuser',
  type: 'cartodb',
  sublayers: [{
    sql: "SELECT * FROM table_name",
    cartocss: '#table_name {marker-fill: #F0F0F0;}'
  }]
})
.addTo(map) // add the layer to our map which already contains 1 sublayer
.done(function(layer) {

  // create and add a new sublayer
  layer.createSubLayer({
    sql: "SELECT * FROM table_name limit 200",
    cartocss: '#table_name {marker-fill: #F0F0F0;}'
  });

  // change the query for the first layer
  layer.getSubLayer(0).setSQL("SELECT * FROM table_name limit 10");
});
{% endhighlight %}

Want further information? [Check out the complete list of API methods](#api-methods).


## Usage examples

The best way to start learning about the library is by taking a look at some of the examples below:

+ An easy example using the library - ([view live](http://cartodb.github.com/cartodb.js/examples/easy.html) / [source code](https://github.com/CartoDB/cartodb.js/blob/develop/examples/easy.html)).
+ Leaflet integration - ([view live](http://cartodb.github.com/cartodb.js/examples/leaflet.html) / [source code](https://github.com/CartoDB/cartodb.js/blob/develop/examples/leaflet.html)).
+ Customizing infowindow data - ([view live](http://cartodb.github.com/cartodb.js/examples/custom_infowindow.html) / [source code](https://github.com/CartoDB/cartodb.js/blob/develop/examples/custom_infowindow.html)).
+ An example using a layer selector - ([view live](http://cartodb.github.com/cartodb.js/examples/layer_selector.html) / [source code](https://github.com/CartoDB/cartodb.js/blob/develop/examples/layer_selector.html)).
+ The Hobbit map done with the library - ([view live](http://cartodb.github.com/cartodb.js/examples/TheHobbitLocations/) / [source code](https://github.com/CartoDB/cartodb.js/tree/develop/examples/TheHobbitLocations)).


## API methods

The documentation below refers to CartoDB.js v3. For major changes in the library we will update the documentation here. This documentation is meant to help developers find specific methods from the CartoDB.js library.

### Visualization

#### cartodb.createVis(_map_id, vizjson_url[, options] [, callback]_)

Creates a visualization inside the map_id DOM object.

<div class="code-title">cartodb.createVis</div>
{% highlight javascript %}
var url = 'http://documentation.cartodb.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json';

cartodb.createVis('map', url)
  .done(function(vis, layers) {
  });
{% endhighlight %}

##### Arguments

- **map_id**: a DOM object, for example `$('#map')` or a DOM id.
- **vizjson_url**: url of the vizjson object.
- **options**:
  - **shareable**: add facebook and twitter share buttons.
  - **title**: adds a header with the title of the visualization.
  - **description**: adds description to the header (as you set in the UI).
  - **search**: adds a search control (default: true).
  - **zoomControl**: adds zoom control (default: true).
  - **loaderControl**: adds loading control (default: true).
  - **center_lat**: latitude where the map is initializated.
  - **center_lon**: longitude where the map is initializated.
  - **zoom**: initial zoom.
  - **cartodb_logo**: default to true, set to false if you want to remove the cartodb logo.
  - **infowindow**: set to false if you want to disable the infowindow (enabled by default).
  - **time_slider**: show time slider with torque layers (enabled by default)
  - **layer_selector**: show layer selector (default: false)
  - **legends**: if it's true legends are shown in the map.
  - **https**: if true, it makes sure that basemaps are converted to https when possible. If explicitly false, converts https maps to http when possible. If undefined, the basemap template is left as declared at `urlTemplate` in the viz.json.
  - **scrollwheel**: enable/disable the ability of zooming using scrollwheel (default enabled)
  - **fullscreen**: if true adds a button to toggle the map fullscreen
  - **mobile_layout**: if true enables a custom layout for mobile devices (default: false)
  - **force_mobile**: forces enabling/disabling the mobile layout (it has priority over mobile_layout argument)
  - **gmaps_base_type**: Use Google Maps as map provider whatever is the one specified in the viz.json". Available types: 'roadmap', 'gray_roadmap', 'dark_roadmap', 'hybrid', 'satellite', 'terrain'.
  - **gmaps_style**: Google Maps styled maps. See [documentation](https://developers.google.com/maps/documentation/javascript/styling).
  - **no_cdn**: true to disable CDN when fetching tiles
- **callback(vis,layers)**: if a function is specified, it is called once the visualization is created, passing vis and layers as arguments

##### Returns

A promise object. You can listen for the following events:

+ **done**: triggered when the visualization is created, `vis` is passed as the first argument and `layers` is passed as the second argument. Each layer type has different options, see layers section.
+ **error**: triggered when the layer couldn't be created. The error string is the first argument.

### cartodb.Vis

#### vis.getLayers()

Returns an array of layers in the map. The first is the base layer.

#### vis.addOverlay(_options_)

Adds an overlay to the map that can be either a zoom control, a tooltip or an infobox.

##### Arguments

- **options**  
  - **layer** layer from the visualization where the overlay should be applied (optional)
  - **type** zoom / tooltip / infobox

If no layer is provided, the overlay will be added to the first layer of the visualization. Extra options are available based on the specific UI component.

##### Returns

An overlay object, see [vis.Overlays](#visoverlays).

#### vis.getOverlay(_type_)

Returns the first overlay with the specified **type**.

<div class="code-title">vis.getOverlay</div>
{% highlight javascript %}
var zoom = vis.getOverlay('zoom');
zoom.clean() // remove it from the screen
{% endhighlight %}

#### vis.getOverlays()

Returns a list of the overlays that are currently on the screen (see overlays description).

#### vis.getNativeMap()

Returns the native map object being used (e.g. a L.Map object for Leaflet).

#### vis.Overlays

An overlay is a control shown on top of the map.

Overlay objects are always created using the **addOverlay** method of a cartodb.Vis object.

An overlay is internally a [**Backbone.View**](http://backbonejs.org/#View) so if you know how Backbone works you can use it. If you want to use plain DOM objects you can access **overlay.el** (**overlay.$el** for jQuery object).

#### vis.addInfowindow(_map, layer, fields [, options]_)

Adds an infowindow to the map controlled by layer events. It enables interaction and overrides the layer interactivity.

##### Arguments

  - **map**: native map object or leaflet
  - **layer**: cartodb layer (or sublayer)
  - **fields**: array of column names

##### Returns

An infowindow object, see [sublayer.infowindow](#sublayerinfowindow)

#### cartodb.createLayer(_map, layerSource [, options] [, callback]_)

With visualizations already created through the CartoDB console, you can simply use the **createLayer** function to add them into your web pages. Unlike **createVis**, this method requires an already activated **map** object and it does not load a basemap for you.

##### Arguments

- **map**: Leaflet L.Map object. The map should be initialized before calling this function.

- **layerSource**: contains information about the layer. It can be specified in 2 ways:

<div class="code-title">Passing the url where the layer data is located</div>
{% highlight javascript %}
cartodb.createLayer(map, 'http://myserver.com/layerdata.json')
{% endhighlight %}

<div class="code-title">passing the data directly</div>
{% highlight javascript %}
cartodb.createLayer(map, { layermetadata })
{% endhighlight %}

- **options**:
  - **https**: force https
  - **refreshTime**: if is set, the layer is refreshed each refreshTime milliseconds.
  - **infowindow**: set to false if you want to disable the infowindow (enabled by default).
  - **tooltip**: set to false if you want to disable the tooltip (enabled by default).
  - **legends**: if it's true legends are shown in the map.
  - **time_slider**: show time slider with torque layers (enabled by default)
  - **layerIndex**: when the visualization contains more than one layer this index allows you to select
    what layer is created. Take into account that `layerIndex == 0` is the base layer and that
    all the tiled layers (non animated ones) are merged into a single one. The default value for
    this option is 1 (usually tiled layers).
  - **filter**: a string or array of strings to specify the type(s) of sublayers that will be rendered (eg: `['http', 'mapnik']`). All non-torque layers (http and mapnik) will be rendered if this option is not present.

- **callback(_layer_)**: if a function is specified, it will be invoked after the layer has been created. The layer will be passed as an argument.

##### Returns

A promise object. You can listen for the following events:

+ **done**: triggered when the layer is created, the layer is passed as first argument. Each layer type has different options, see layers section.
+ **error**: triggered when the layer couldn't be created. The error string is the first argument.

You can call to `addTo(map[, position])` in the promise so when the layer is ready it will be added to the map.

##### Example

<div class="code-title">cartodb.createLayer using a url</div>

{% highlight javascript %}
var map;
var mapOptions = {
  zoom: 5,
  center: [43, 0]
};
map = new L.Map('map', mapOptions);

cartodb.createLayer(map, 'http://documentation.cartodb.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json')
  .addTo(map)
  .on('done', function(layer) {
    layer
      .on('featureOver', function(e, latlng, pos, data) {
        console.log(e, latlng, pos, data);
      })
      .on('error', function(err) {
        console.log('error: ' + err);
      });
  }).on('error', function(err) {
    console.log("some error occurred: " + err);
  });
{% endhighlight %}

Layer metadata must take one of the following forms:

#### Standard Layer Source Object (`type: 'cartodb'`)

Used for most maps with tables that are set to public or public with link.

{% highlight javascript %}
{
  user_name: 'your_user_name', // Required
  type: 'cartodb', // Required
  sublayers: [{
      sql: "SELECT * FROM table_name", // Required
      cartocss: '#table_name {marker-fill: #F0F0F0;}', // Required
      interactivity: "column1, column2, ...", // Optional
  },
  {
      sql: "SELECT * FROM table_name", // Required
      cartocss: '#table_name {marker-fill: #F0F0F0;}', // Required
      interactivity: "column1, column2, ...", // Optional
   },
   ...
  ]
}
{% endhighlight %}

#### Torque Layer Source Object (`type: 'torque'`)

Used for [Torque maps](https://github.com/CartoDB/torque). Note that it does not allow sublayers.

{% highlight javascript %}
{
  type: 'torque', // Required
  order: 1, // Optional
  options: {
    query: "SQL statement", 	// Required if table_name is not given
    table_name: "table_name", 	// Required if query is not given
    user_name: "your_user_name", // Required
    cartocss: "CartoCSS styles" // Required
  }
}
{% endhighlight %}

#### Named Maps Layer Source Object (`type: 'namedmap'`)

Used for making public maps with private data. See [Named Maps](http://docs.cartodb.com/cartodb-platform/maps-api.html#named-maps-1) for more information.


{% highlight javascript %}
{
  user_name: 'your_user_name', // Required
  type: 'namedmap', // Required
  named_map: {
      name: 'name_of_map', // Required
      // Optional
      layers: [{
            layer_name: "sublayer0", // Optional
            interactivity: "column1, column2, ..." // Optional
        },
        {
            layer_name: "sublayer1",
            interactivity: "column1, column2, ..."
        },
        ...
    ],
    // Optional
    params: {
        color: "hex_value",
        num: 2
    }
  }
}
{% endhighlight %}

##### Example

<div class="code-title">cartodb.createLayer combining multiple types of layers and setting a filter</div>

{% highlight javascript %}
cartodb.createLayer(map, {
  user_name: 'examples',
  type: 'cartodb',
  sublayers: [
    {
      type: "http",
      urlTemplate: "http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
      subdomains: [ "a", "b", "c" ]
    },
    {
       sql: 'select * from country_boundaries',
       cartocss: '#layer { polygon-fill: #F00; polygon-opacity: 0.3; line-color: #F00; }'
    },
  ],
}, { filter: ['http', 'mapnik'] })
{% endhighlight %}

### cartodb.CartoDBLayer

CartoDBLayer allows you to manage tiled layers from CartoDB. It manages the sublayers.

#### layer.clear()

Clears the layer. It should be invoked after removing the layer from the map.

#### layer.hide()

Hides the layer from the map.

#### layer.show()

Shows the layer in the map if it was previously added.

#### layer.toggle()

Toggles the visibility of the layer and returns a boolean that indicates the new status (true if the layer is shown, false if it is hidden)

#### layer.setOpacity(_opacity_)

Changes the opacity of the layer.

##### Arguments

+ **opacity**: value in range [0, 1]

#### layer.getSubLayer(_layerIndex_)

Gets a previously created sublayer. And exception is raised if no sublayer exists.

##### Arguments

+ **layerIndex**: 0 based index of the sublayer to get. Should be within [0, getSubLayerCount())

##### Returns

A SubLayer object.

##### Example

<div class="code-title">layer.getSubLayer</div>
{% highlight javascript %}
layer.getSubLayer(1).hide();

var sublayer = layer.getSubLayer(0);

sublayer.setSQL('SELECT * FROM table_name limit 10');
{% endhighlight %}

#### layer.getSubLayerCount()

Gets the number of sublayers in layer.

##### Returns

The number of sublayers.

##### Example

<div class="code-title">Hide layers using layer.getSubLayerCount</div>
{% highlight javascript %}
var num_sublayers = layer.getSubLayerCount();

for (var i = 0; i < num_sublayers; i++) {
  layer.getSubLayer(i).hide();
}
{% endhighlight %}

#### layer.createSubLayer(_layerDefinition_)

Adds a new data to the current layer. With this method, data from multiple tables can be easily visualized. New in V3.

##### Arguments

- **layerDefinition**: an object with the sql and cartocss that defines the data, should be like:

<div class="code-title">layerDefinition</div>
{% highlight javascript %}
{
  sql: "SELECT * FROM table_name",
  cartocss: "#layer { marker-fill: red; }",
  interactivity: 'cartodb_id, area, column' // optional
}
{% endhighlight %}

`sql` and `cartocss` are mandatory. An exception is raised if either of them are not present. If the interactivity is not set, there is no interactivity enabled for that layer (better performance). SQL and CartoCSS syntax should be correct. Look at the documentation for  [PostgreSQL](http://www.postgresql.org/docs/9.3/interactive/sql-syntax.html) and [CartoCSS](https://github.com/mapbox/carto/blob/master/docs/latest.md) for more information. There are some restrictions in the SQL queries:

- Must not write. INSERT, DELETE, UPDATE, ALTER and so on are not allowed (the query will fail)
- Must not contain trialing semicolon

##### Returns

A SubLayer object.

##### Example

<div class="code-title">layer.createSubLayer</div>
{% highlight javascript %}
cartodb.createLayer(map, 'http://examples.cartodb.com/api/v2/viz/european_countries_e/viz.json', function(layer) {
  // add populated places points over the countries layer
  layer.createSubLayer({
    sql: 'SELECT * FROM ne_10m_populated_places_simple',
    cartocss: '#layer { marker-fill: red; }'
  });
}).addTo(map);
{% endhighlight %}

#### layer.invalidate()

Refreshes the data. If the data has been changed in the CartoDB server those changes will be displayed. Nothing happens otherwise. Every time a parameter is changed in a sublayer, the layer is refreshed automatically, so there's no need to call this method manually. New in V3.

#### layer.setAuthToken(_auth_token_)

Sets the auth token that will be used to create the layer. Only available for private visualizations. An exception is
raised if the layer is not being loaded with HTTPS. See [Named Maps](http://docs.cartodb.com/cartodb-platform/maps-api.html#named-maps-1) for more information.

##### Returns

The layer itself.

##### Arguments

- **auth_token:** string

#### layer.setParams(_key, value_)

Sets the configuration of a layer when using [named maps](http://docs.cartodb.com/cartodb-platform/maps-api.html#named-maps-1). It can be invoked in different ways:

<div class="code-title">layer.setParams</div>
{% highlight javascript %}
layer.setParams('test', 10); // sets test = 10
layer.setParams('test', null); // unset test
layer.setParams({'test': 1, 'color': '#F00'}); // set more than one parameter at once
{% endhighlight %}

##### Arguments

- **key:** string
- **value:** string or number

##### Returns

The layer itself.

### cartodb.CartoDBLayer.SubLayer

#### sublayer.set(_layerDefinition_)

Sets sublayer parameters. Useful when more than one parameter needs to be changed.

##### Arguments

- **layerDefinition**: an object with the sql and cartocss that defines the data, like:

<div class="code-title">layerDefinition</div>
{% highlight javascript %}
{
  sql: "SELECT * FROM table_name",
  cartocss: "#layer { marker-fill: red; }",
  interactivity: 'cartodb_id, area, column' // optional
}
{% endhighlight %}

##### Returns

The layer itself.

##### Example

<div class="code-title">sublayer.set</div>
{% highlight javascript %}
sublayer.set({
  sql: "SELECT * FROM table_name WHERE cartodb_id < 100",
  cartocss: "#layer { marker-fill: red }",
  interactivity: "cartodb_id, the_geom, magnitude"
});
{% endhighlight %}

#### sublayer.get(_attr_)

Gets the attribute for the sublayer, for example 'sql', 'cartocss'.

##### Returns

The requested attribute or undefined if it's not present.

#### sublayer.remove()

Removes the sublayer. An exception will be thrown if a method is called and the layer has been removed.

#### sublayer.show()

Shows a previously hidden sublayer. The layer is refreshed after calling this function.

#### sublayer.hide()

Removes the sublayer from the layer temporarily. The layer is refreshed after calling this function.

#### sublayer.toggle()

Toggles the visibility of the sublayer and returns a boolean that indicates the new status (true if the sublayer is visible, false if it is hidden)

#### sublayer.isVisible()

It returns `true`  if the sublayer is visible.

### cartodb.CartoDBLayer.CartoDBSubLayer

#### sublayer.getSQL()

Shortcut for `get('sql')`

#### sublayer.getCartoCSS()

Shortcut for `get('cartocss')`

#### sublayer.setSQL(sql)

Shortcut for `set({'sql': 'SELECT * FROM table_name'})`

#### sublayer.setCartoCSS(css)

Shortcut for `set({'cartocss': '#layer {...}' })`

#### sublayer.setInteractivity('cartodb_id, name, ...')

Shortcut for `set({'interactivity': 'cartodb_id, name, ...' })`

Sets the columns which data will be available via the interaction with the sublayer.

#### sublayer.setInteraction(_true_)

Enables (true) or disables (false) the interaction of the layer. When disabled, **featureOver**, **featureClick**, **featureOut**, **mouseover** and **mouseout** are **not** triggered.

##### Arguments

+ **enable**: true if the interaction needs to be enabled.

#### sublayer.infowindow

**sublayer.infowindow** is a Backbone model where we modify the parameters of the infowindow.

##### Attributes

- **template**: Custom HTML template for the infowindow. You can write simple HTML or use [Mustache templates](http://mustache.github.com/).
- **sanitizeTemplate**: By default all templates are sanitized from unsafe tags/attrs (e.g. `<script>`), set this to `false`
to skip sanitization, or a function to provide your own sanitization (e.g. `function(inputHtml) { return inputHtml })`).
- **width**: Width of the infowindow (value must be a number).
- **maxHeight**: Max height of the scrolled content (value must be a number).

<div class="code-title">sublayer.infowindow.set</div>
{% highlight html %}
<div id="map"></div>

<script>
  sublayer.infowindow.set({
    template: $('#infowindow_template').html(),
    width: 218,
    maxHeight: 100
  });
</script>

<script type="infowindow/html" id="infowindow_template">
  <span> custom </span>
  <div class="cartodb-popup">
    <a href="#close" class="cartodb-popup-close-button close">x</a>

     <div class="cartodb-popup-content-wrapper">
       <div class="cartodb-popup-content">
         <img style="width: 100%" src="http://rambo.webcindario.com/images/18447755.jpg"></src>
         <!-- content.data contains the field info -->
         <h4>{% raw %}{{content.data.name}}{% endraw %}</h4>
       </div>
     </div>
     <div class="cartodb-popup-tip-container"></div>
  </div>
</script>
{% endhighlight %}

[Grab the complete example source code](https://github.com/CartoDB/cartodb.js/blob/develop/examples/custom_infowindow.html)

### cartodb.CartoDBLayer.HttpSubLayer

#### sublayer.setURLTemplate(urlTemplate)

Shortcut for `set({'urlTemplate': 'http://{s}.example.com/{z}/{x}/{y}.png' })`

#### sublayer.setSubdomains(subdomains)

Shortcut for `set({'subdomains': ['a', 'b', '...'] })`

#### sublayer.setTms(tms)

Shortcut for `set({'tms': true|false })`

#### sublayer.getURLTemplate

Shortcut for `get('urlTemplate')`

#### sublayer.getSubdomains

Shortcut for `get('subdomains')`

#### sublayer.getTms

Shortcut for `get('tms')`

#### sublayer.legend

**sublayer.legend** is a Backbone model with the information about the legend.

##### Attributes

- **template**: Custom HTML template for the legend. You can write simple HTML.
- **title**: Title of the legend.
- **show_title**: Set this to `false` if you don't want the title to be displayed.
- **items**: An array with the items that are displayed in the legend.
- **visible**: Set this to `false` if you want to hide the legend.

## Events

You can bind custom functions to layer events. This is useful for integrating your website with your maps, adding events for mouseovers and click events.

### layer

#### layer.featureOver(_event, latlng, pos, data, layerIndex_)

Triggered when the user hovers on any feature.

##### Callback arguments

- **event**: Browser mouse event object.
- **latlng**: Array with the LatLng ([lat,lng]) where the layer was clicked.
- **pos**: Object with x and y position in the DOM map element.
- **data**: The CartoDB data of the clicked feature with the **interactivity** param.
- **layerIndex**: the layerIndex where the event happened.

##### Example

<div class="code-title">layer.on</div>
{% highlight javascript %}
layer.on('featureOver', function(e, latlng, pos, data, subLayerIndex) {
  console.log("mouse over polygon with data: " + data);
});
{% endhighlight %}

#### layer.featureOut(_layerIndex_)

Triggered when the user hovers out any feature.

#### layer.featureClick(_event, latlng, pos, data, layerIndex_)

Triggered when when the user clicks on a feature of a layer.

##### callback arguments

Same as `featureOver`.

#### layer.mouseover()

Triggered when the mouse enters in **any** feature. Useful to change the cursor while hovering.

#### layer.mouseout()

Triggered when the mouse leaves all the features. Useful to revert the cursor after hovering.

##### Example

<div class="code-title">sublayer.on</div>
{% highlight javascript %}
layer.on('mouseover', function() {
  cursor.set('hand')
});

layer.on('mouseout', function() {
  cursor.set('auto')
});
{% endhighlight %}

#### layer.loading()

Triggered when the layer or any of its sublayers are about to be loaded. This is also triggered when any properties are changed but not yet visible.

##### Example

<div class="code-title">layer.on</div>
{% highlight javascript %}
layer.on("loading", function() {
  console.log("layer about to load");
});
layer.getSubLayer(0).set({
  cartocss: "#export { polygon-opacity: 0; }"
});
{% endhighlight %}

#### layer.load()

Triggered when the layer or its sublayers have been loaded. This is also triggered when any properties are changed and visible.

##### Example

<div class="code-title">layer.on</div>
{% highlight javascript %}
layer.on("load", function() {
  console.log("layer loaded");
});
layer.getSubLayer(0).set({
  cartocss: "#export { polygon-opacity: 0; }"
});
{% endhighlight %}

### subLayer

#### sublayer.featureOver(_event, latlng, pos, data, layerIndex_)

Same as `layer.featureOver()` but sublayer specific.

##### callback arguments

Same as `layer.featureOver()`.

#### sublayer.featureClick(_event, latlng, pos, data, layerIndex_)

Same as `layer.featureClick()` but sublayer specific.

##### callback arguments

Same as `layer.featureClick()`.

#### sublayer.mouseover()

Same as `layer.mouseover()` but sublayer specific.

#### sublayer.mouseout()

Same as `layer.mouseover()` but sublayer specific.


## Specific UI functions

There are a few functions in CartoDB.js for creating, enabling, and disabling pieces of the user interface.

### cartodb.geo.ui.Tooltip

Shows a small tooltip on hover:

<div class="code-title">cartodb.geo.ui.Tooltip</div>
{% highlight javascript %}
var tooltip = vis.addOverlay({
  type: 'tooltip',
  template: '<p>{% raw %}{{variable}}{% endraw %}</p>' // mustache template
});
{% endhighlight %}

#### cartodb.geo.ui.Tooltip.enable()

The tooltip is shown when hover on feature when is called.

#### cartodb.geo.ui.Tooltip.disable()

The tooltip is not shown when hover on feature.

### cartodb.geo.ui.InfoBox

Shows a small box when the user hovers on a map feature. The position is fixed:

<div class="code-title">cartodb.geo.ui.InfoBox</div>
{% highlight javascript %}
var box = vis.addOverlay({
  type: 'infobox',
  template: '<p>{% raw %}{{name_to_display}}{% endraw %}</p>',
  width: 200, // width of the box
  position: 'bottom|right' // top, bottom, left and right are available
});
{% endhighlight %}

#### cartodb.geo.ui.InfoBox.enable()

The tooltip is shown when hover on feature.

#### cartodb.geo.ui.InfoBox.disable()

The tooltip is not shown when hover on feature.

### cartodb.geo.ui.Zoom

Shows the zoom control:

<div class="code-title">cartodb.geo.ui.Zoom</div>
{% highlight javascript %}
vis.addOverlay({ type: 'zoom' });
{% endhighlight %}

#### cartodb.geo.ui.Zoom.show()

#### cartodb.geo.ui.Zoom.hide()


## Getting data with SQL

CartoDB offers a powerful SQL API for you to query and retreive data from your CartoDB tables. CartoDB.js offers a simple to use wrapper for sending those requests and using the results.

### cartodb.SQL

**cartodb.SQL** is the tool you will use to access data you store in your CartoDB tables. This is a really powerful technique for returning things like: **items closest to a point**, **items ordered by date**, or **GeoJSON vector geometries**. It’s all powered with SQL and our tutorials will show you how easy it is to begin with SQL.

<div class="code-title">cartodb.SQL</div>
{% highlight javascript %}
var sql = new cartodb.SQL({ user: 'cartodb_user' });
sql.execute("SELECT * FROM table_name WHERE id > {% raw %}{{id}}{% endraw %}", { id: 3 })
  .done(function(data) {
    console.log(data.rows);
  })
  .error(function(errors) {
    // errors contains a list of errors
    console.log("errors:" + errors);
  })
{% endhighlight %}

It accepts the following options:

+ **format**: should be geoJSON.
+ **dp**: float precision.
+ **jsonp**: if jsonp should be used instead of CORS. This param is enabled if the browser does not support CORS.

These arguments will be applied to all the queries performed by this object. If you want to override them for one query see **execute** options.

#### sql.execute(_sql [,vars][, options][, callback]_)

It executes a sql query.

##### Arguments

+ **sql**: a string with the sql query to be executed. You can specify template variables like {% raw %}{{variable}}{% endraw %} which will be filled with **vars** object.
+ **vars**: a map with the variables to be interpolated in the sql query.
+ **options**: accepts **format**, **dp** and **jsonp**. This object also overrides the params passed to $.ajax.

##### Returns

A promise object. You can listen for the following events:

+ **done**: triggered when the data arrives.
+ **error**: triggered when something failed.

You can also use done and error methods:

<div class="code-title">sql.execute</div>
{% highlight javascript %}
sql.execute('SELECT * FROM table_name')
  .done(fn)
  .error(fnError)
{% endhighlight %}

#### sql.getBounds(_sql [,vars][, options][, callback]_)

Returns the bounds [ [sw_lat, sw_lon], [ne_lat, ne_lon ] ] for the geometry resulting of specified query.

<div class="code-title">sql.getBounds</div>
{% highlight javascript %}
sql.getBounds('select * from table').done(function(bounds) {
    console.log(bounds);
});
{% endhighlight %}

##### Arguments

+ **sql**: a string with the sql query to calculate the bounds from.

##### Application of getBounds in Leaflet

You can use the results from `getBounds` to center data on your maps using Leaflet.

- **getBounds and Leaflet**

<div class="code-title">sql.getBounds</div>
{% highlight javascript %}
sql.getBounds('select * from table').done(function(bounds) {
  map.setBounds(bounds);
  // or map.fitBounds(bounds, mapView.getSize());
});
{% endhighlight %}

## Static Maps

Static views of CartoDB maps can be generated using the [Static Maps API](http://docs.cartodb.com/cartodb-platform/maps-api.html#static-maps-api) within CartoDB.js. The map's style, including the zoom and bounding box, follows from what was set in the viz.json file, but you can change the zoom, center, and size of your image with a few lines of code. You can also change your basemap Images can be placed in specified DOM elements on your page, or you can generate a URL for the image.

### Quick Start

The easiest way to generate an image is by using the following piece of code, which generates is replaced by an `img` tag once run in an HTML file:

{% highlight javascript %}
<script>
var vizjson_url = 'https://documentation.cartodb.com/api/v2/viz/008b3ec6-02c3-11e4-b687-0edbca4b5057/viz.json';

cartodb.Image(vizjson_url)
  .size(600, 400)
  .center([-3.4, 44.2])
  .zoom(4)
  .write({ class: "thumb", id: "AwesomeMap" });
</script>
{% endhighlight %}

#### Result
{% highlight html %}
<img id="AwesomeMap" src="https://cartocdn-ashbu.global.ssl.fastly.net/documentation/api/v1/map/static/center/04430594691ff84a3fdac56259e5180b:1419270587670/4/-3.4/44.2/600/400.png" class="thumb">
{% endhighlight %}

#### cartodb.Image(_layerSource_[, options])

##### Arguments

- **layerSource**: can be either a viz.json object or a [layer source object](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#standard-layer-source-object-type-cartodb)

##### Options

Options take the form of a JavaScript object.

- **options**:
    - **basemap**: change the basemap specified in the layer definition. Type: Object defining base map properties (see example below).
    - **no_cdn**: Disable CDN usage. Type: Boolean. Default: `false` (use CDN)
    - **override_bbox**: Override default of using the bounding box of the visualization. This is needed to use `Image.center` and `Image.zoom`. Type: Boolean. Default: `false` (use bounding box)

{% highlight javascript %}
<script>
var vizjson_url = 'https://documentation.cartodb.com/api/v2/viz/008b3ec6-02c3-11e4-b687-0edbca4b5057/viz.json';
var basemap = {
        type: "http",
        options: {
          urlTemplate: "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
          subdomains: ["a", "b", "c"]
        }
      };

cartodb.Image(vizjson_url, {basemap: basemap})
  .size(600, 400)
  .center([0,0])
  .write({ class: "thumb", id: "AwesomeMap" });
</script>
{% endhighlight %}

##### Returns
An _Image_ object

### cartodb.Image

#### Image.size(_width_,_height_)

Sets the size of the image.

##### Arguments

- **width**: the width of the resulting image in pixels
- **height**: the height of the resulting image in pixels

##### Returns
An _Image_ object

#### Image.center(_latLng_)

Sets the center of the map.

##### Arguments

- **latLng**: an array of the latitude and longitude of the center of the map. Example: `[40.4378271,-3.6795367]`

##### Returns

An _Image_ object

#### Image.zoom(zoomLevel)

Sets the zoom level of the static map. Must be used with the option `override_bbox: true` if not using `Image.center` or `Image.bbox`.

##### Arguments

- **zoomLevel**: the zoom of the resulting static map. `zoomLevel` must be an integer in the range [0,24].

##### Returns

An _Image_ object

#### Image.bbox(_boundingBox_)

If you set `bbox`, `center` and `zoom` will be overridden.

##### Arguments

- **boundingBox**: an array of coordinates making up the bounding box for your map. `boundingBox` takes the form: `[sw_lat, sw_lon, ne_lat, ne_lon]`.

##### Returns

An _Image_ object

#### Image.into(HTMLImageElement)

Inserts the image into the HTML DOM element specified.

##### Arguments

- **HTMLImageElement**: the DOM element where your image is to be located.

##### Returns

An _Image_ object

<div class="image-into">Image.into</div>
{% highlight javascript %}
cartodb.Image(vizjson_url).into(document.getElementById('map_preview'))
{% endhighlight %}

#### Image.write(_attributes_)

Adds an `img` tag in the same place script is executed. It's possible to specify a class name (`class`) and/or an id attribute (`id`) for the resulting image:

<div class="image-write">Image.write</div>
{% highlight javascript %}
<script>
cartodb.Image(vizjson_url)
  .size(600, 400)
  .center([-3.4, 44.2])
  .zoom(10)
  .write({ class: "thumb", id: "ImageHeader", src: 'spinner.gif' });
</script>
{% endhighlight %}

##### Arguments

- **attributes**:
    + **class**: the DOM class applied to the resulting `img` tag
    + **id**: the DOM id applied to the resulting `img` tag
    + **src**: path to a temporary image that acts as a placeholder while the static map is retrieved

##### Returns

An _Image_ object


#### Image.getUrl(_callback(err, url)_)

Gets the URL for the image requested.

<div class="image-geturl">Image.getUrl</div>
{% highlight javascript %}
<script>
cartodb.Image(vizjson_url)
  .size(600, 400)
  .getUrl(function(err, url) {
      console.log('image url',url);
  })
</script>
{% endhighlight %}

##### Callback Arguments

- **err**: error associated with the image request, if any
- **url**: URL of the generated image

##### Returns

An _Image_ object

#### Image.format(_format_)

Gets the URL for the image requested.

##### Argument

- **format**: image format of resulting image. One of `png` (default) or `jpg` (which have a quality of 85 dpi)

##### Returns

An _Image_ object

## Core API functionality

In case you are not using Leaflet, or you want to implement your own layer object, CartoDB provides a way to get the tiles url for a layer definition.

If you want to use this functionality, you only need to load cartodb.core.js from our cdn. No CSS is needed:

<div class="code-title">Core API functionallity</div>
{% highlight html %}
<script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.core.js"></script>
{% endhighlight %}

An example using this funcionality can be found in a ModestMaps example: [view live](http://cartodb.github.com/cartodb.js/examples/modestmaps.html) / [source code](https://github.com/CartoDB/cartodb.js/blob/develop/examples/modestmaps.html).

Notice that cartodb.SQL is also included in that JavaScript file

### cartodb.Tiles

#### cartodb.Tiles.getTiles(_layerOptions, callback_)

Fetch the tile template for the layer definition.

##### Arguments

+ **layerOptions**: the data that defines the layer. It should contain at least user_name and sublayer list. These are the available options:

<div class="code-title">cartodb.Tiles.getTiles</div>
{% highlight javascript %}
{
  user_name: 'mycartodbuser',
  sublayers: [{
    sql: "SELECT * FROM table_name";
    cartocss: '#layer { marker-fill: #F0F0F0; }'
  }],
  maps_api_template: 'https://{user}.cartodb.com' // Optional
}
{% endhighlight %}

+ **callback(tilesUrl, error)**: a function that recieves the tiles templates. In case of an error, the first param is null and the second one will be an object with an errors attribute that contains the list of errors. The tilesUrl object contains url template for tiles and interactivity grids:

<div class="code-title">cartodb.Tiles.getTiles</div>
{% highlight javascript %}
{
  tiles: [
    "http://{s}.cartodb.com/HASH/{z}/{x}/{y}.png",
    ...
  ],
  grids: [
    // for each sublayer there is one entry on this array
    [
      "http://{s}.cartodb.com/HASH/0/{z}/{x}/{y}.grid.json"
    ],
    [
      "http://{s}.cartodb.com/HASH/1/{z}/{x}/{y}.grid.json"
    ],
    ...
  ]
}
{% endhighlight %}

##### Example

In this example, a layer with one sublayer is created. The sublayer renders all the content from a table.

<div class="code-title">cartodb.Tiles.getTiles</div>
{% highlight javascript %}
var layerData = {
  user_name: 'mycartodbuser',
  sublayers: [{
    sql: "SELECT * FROM table_name";
    cartocss: '#layer { marker-fill: #F0F0F0; }'
  }]
};
cartodb.Tiles.getTiles(layerData, function(tiles, err) {
  if(tiler == null) {
    console.log("error: ", err.errors.join('\n'));
    return;
  }
  console.log("url template is ", tiles.tiles[0]);
}
{% endhighlight %}


## Versions

Keep in mind the version of CartoDB.js you are using for development. For any live code, we recommend you to link directly to the tested CartoDB.js version from your development environment. You can check the version of CartoDB.js as follows:

### cartodb.VERSION

Returns the version of the library. It should be something like `3.0.1`.


## Other important stuff

CartoDB.js has many great features for you to use in your applications. Let’s take a look at some of the most important ones:

### Viz JSON support

The Viz.JSON document tells CartoDB.js all the information about your map, including the style you want to use for your data and the filters you want to apply with SQL. The Viz JSON file is served with each map you create in your CartoDB account.

Although the Viz JSON file stores all your map settings, all these settings can be easily customized with CartoDB.js. For example, if you want to do something completely different than what you initially designed it for. Loading the Viz JSON is as simple as:

<div class="code-title">Viz JSON support</div>
{% highlight javascript %}
cartodb.createVis('map', 'http://examples.cartodb.com/api/v2/viz/ne_10m_populated_p_1/viz.json')
{% endhighlight %}

### How to set a different host than cartodb.com
CartoDB.js sends all requests to the cartodb.com domain by default. If you are running your own
instance of CartoDB you can change the URLs to specify a different host.

A different host can be configured by using ``sql_api_template`` and ``maps_api_template`` in the ``options`` parameter
for any ``cartodb`` function call.

The format of these templates is as follows:

{% highlight javascript %}
sql_api_template: 'https://{user}.test.com'
{% endhighlight %}

CartoDB.js will replace ``{user}``.

Notice that you don't need to set the path to the endpoint, CartoDB.js will set it automatically.

### Bounds wrapper

We have added an easy method to get the bounding box for any dataset or filtered query using the CartoDB.js library. The **getBounds** function can be useful for guiding users to the right location on a map or for loading only the right data at the right time based on user actions.

<div class="code-title">Bounds wrapper</div>
{% highlight javascript %}
var sql = new cartodb.SQL({ user: 'cartodb_user' });

sql.getBounds('SELECT * FROM table_name').done(function(bounds) {
  console.log(bounds);
});
{% endhighlight %}

### Event listener support

CartoDB.js is highly asynchronous. Your application can get on with what it needs to do while the library efficiently does what you request in the background. This is useful for loading maps or getting query results. At the same time, we have made it very simple to add listeners and callbacks to the async portions of the library.

#### Loading events

The **createLayer** and **createVis** functions trigger two important events for you to take advantage of. The first one is **done**, which will let your code know that the library has successfully read the information from the Viz JSON and loaded the layer you requested. The second is **error**, which lets you know that something did not go as expected when trying to load the requested layer:

<div class="code-title">Loading events</div>
{% highlight javascript %}
cartodb.createLayer(map, 'http://examples.cartodb.com/api/v1/viz/0001/viz.json')
  .addTo(map)
  .on('done', function(layer) {
    alert(‘CartoDB layer loaded!’);
  }).on('error', function(err) {
    alert("some error occurred: " + err);
  });
{% endhighlight %}

#### Active layer events

The next important set of events for you to use happen on those layers that are already loaded (returned by the **done** event above). Three events are triggered by layers on your webpage, each requires the layer to include an **interactivity** layer. The first event is **featureClick**, which lets you set up events after the user clicks anything that you have mapped.

<div class="code-title">featureClick</div>
{% highlight javascript %}
layer.on('featureClick', function(e, latlng, pos, data, layer) {
  console.log("mouse clicked polygon with data: " + data);
});
{% endhighlight %}

The second event is the **featureOver** event, which lets you listen for mouse hovers on any feature. Be careful, as these functions can get costly if you have a lot of features on a map.

<div class="code-title">featureOver</div>
{% highlight javascript %}
layer.on('featureOver', function(e, latlng, pos, data, layer) {
  console.log("mouse over polygon with data: " + data);
});
{% endhighlight %}

Finally, there is the **featureOut** event. This is best used if you do things like highlighting polygons on mouseover and need a way to know when to remove the highlighting after the mouse has left.

<div class="code-title">featureOut</div>
{% highlight javascript %}
layer.on('featureOut', function(e, latlng, pos, data, layer) {
  console.log("mouse left polygon with data: " + data);
});
{% endhighlight %}

#### Leaflet integration

If you want to use [Leaflet](http://leafletjs.com) it gets even easier. CartoDB.js handles loading all the necessary libraries for you! Just include CartoDB.js and CartoDB.css in the HEAD of your website and you are ready to go! The CartoDB.css document isn’t mandatory. However, if you are making a map and are not familiar with writing your own CSS for the various needed elements, it can help you jumpstart the process. Using Leaflet is as simple as adding the main JavaScript library:

<div class="code-title">Leaflet integration</div>
{% highlight html %}
<link rel="stylesheet" href="http://libs.cartocdn.com/cartodb.js/v3/3.15/themes/css/cartodb.css" />
<script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.js"></script>
{% endhighlight %}

#### HTTPS support

You can use all the functionality of CartoDB.js with HTTPs support. Be sure to use https when importing both the JS library and the CSS file. You will also need to use HTTPs in the Viz.JSON URL you pass to **createVis**.

<div class="code-title">HTTPS support</div>
{% highlight html %}
<div id="map"></div>

<link rel="stylesheet" href="https://cartodb-libs.global.ssl.fastly.net/cartodb.js/v3/3.15/themes/css/cartodb.css" />
<script src="https://cartodb-libs.global.ssl.fastly.net/cartodb.js/v3/3.15/cartodb.js"></script>

<script>
  var map = new L.Map('map', {
    center: [0,0],
    zoom: 2
  })
  cartodb.createLayer(map, 'https://examples.cartodb.com/api/v1/viz/15589/viz.json', { https: true })
    .addTo(map)
    .on('error', function(err) {
      alert("some error occurred: " + err);
    });
</script>
{% endhighlight %}

#### Persistent version hosting

We are committed to making sure your website works as intended no matter what changes in the future. We may find more efficient or more useful features to add to the library as time progresses. But we never want to break things you have already developed. For this reason, we make versioned CartoDB.js libraries available to you. The way they function will never unexpectedly change on you.

We recommend that you always develop against the most recent version of CartoDB.js:

{% highlight html %}
<script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.js"></script>
{% endhighlight %}

Anytime you wish to push a stable version of your site to the web though, you can find the version of CartoDB.js you are using by looking at the first line of the library or running the following in your code:

{% highlight javascript %}
alert(cartodb.VERSION)
{% endhighlight %}

Once you know which version of CartoDB.js you're using, you can point your site to that release. If the current version of CartoDB.js is 3.15.5, the URL would be:

{% highlight html %}
<script src="http://libs.cartocdn.com/cartodb.js/v3/3.15.5/cartodb.js"></script>
{% endhighlight %}

You can do the same for the CSS documents we provide:

{% highlight html %}
<link rel="stylesheet" href="http://libs.cartocdn.com/cartodb.js/v3/3.12.3/themes/css/cartodb.css" />
{% endhighlight %}
## Maps API

The CartoDB Maps API allows you to generate maps based on data hosted in your CartoDB account and you can apply custom SQL and CartoCSS to the data. The API generates a XYZ-based URL to fetch Web Mercator projected tiles using web clients such as [Leaflet](http://leafletjs.com), [Google Maps](https://developers.google.com/maps/), or [OpenLayers](http://openlayers.org/).

You can create two types of maps with the Maps API:

- **Anonymous maps**  
  You can create maps using your CartoDB public data. Any client can change the read-only SQL and CartoCSS parameters that generate the map tiles. These maps can be created from a JavaScript application alone and no authenticated calls are needed. See [this CartoDB.js example]({{ '/cartodb-platform/cartodb-js.html' | prepend: site.baseurl }}).

- **Named maps**  
  There are also maps that have access to your private data. These maps require an owner to setup and modify any SQL and CartoCSS parameters and are not modifiable without new setup calls. 

## Quickstart

### Anonymous maps

Here is an example of how to create an anonymous map with JavaScript:

{% highlight javascript %}
var mapconfig = {
  "version": "1.3.1",
  "layers": [{
    "type": "cartodb",
    "options": {
      "cartocss_version": "2.1.1",
      "cartocss": "#layer { polygon-fill: #FFF; }",
      "sql": "select * from european_countries_e"
    }
  }]
}

$.ajax({
  crossOrigin: true,
  type: 'POST',
  dataType: 'json',
  contentType: 'application/json',
  url: 'https://documentation.cartodb.com/api/v1/map',
  data: JSON.stringify(mapconfig),
  success: function(data) {
    var templateUrl = 'https://documentation.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png'
    console.log(templateUrl);
  }
})
{% endhighlight %}

### Named maps

Let's create a named map using some private tables in a CartoDB account.
The following map config sets up a map of European countries that have a white fill color:

{% highlight javascript %}
{
  "version": "0.0.1",
  "name": "test",
  "auth": {
    "method": "open"
  },
  "layergroup": {
    "layers": [{
      "type": "mapnik",
      "options": {
        "cartocss_version": "2.1.1",
        "cartocss": "#layer { polygon-fill: #FFF; }",
        "sql": "select * from european_countries_e"
      }
    }]
  }
}
{% endhighlight %}

The map config needs to be sent to CartoDB's Map API using an authenticated call. Here we will use a command line tool called `curl`. For more info about this tool, see [this blog post](http://quickleft.com/blog/command-line-tutorials-curl), or type ``man curl`` in bash. Using `curl`, and storing the config from above in a file `mapconfig.json`, the call would look like:

<div class="code-title notitle code-request"></div>
{% highlight bash %}
curl 'https://{account}.cartodb.com/api/v1/map/named?api_key=APIKEY' -H 'Content-Type: application/json' -d @mapconfig.json
{% endhighlight %}

To get the `URL` to fetch the tiles you need to instantiate the map, where `template_id` is the template name from the previous response.

<div class="code-title notitle code-request"></div>
{% highlight bash %}
curl -X POST 'https://{account}.cartodb.com/api/v1/map/named/:template_id' -H 'Content-Type: application/json'
{% endhighlight %}

The response will return JSON with properties for the `layergroupid`, the timestamp (`last_updated`) of the last data modification and some key/value pairs with `metadata` for the `layers`.
Note: all `layers` in `metadata` will always have a `type` string and a `meta` dictionary with the key/value pairs.

Here is an example response:

{% highlight javascript %}
{
  "layergroupid": "c01a54877c62831bb51720263f91fb33:0",
  "last_updated": "1970-01-01T00:00:00.000Z",
  "metadata": {
    "layers": [
      {
        "type": "mapnik",
        "meta": {}
      }
    ]
  }
}
{% endhighlight %}

You can use the `layergroupid` to instantiate a URL template for accessing tiles on the client. Here we use the `layergroupid` from the example response above in this URL template:

{% highlight bash %}
https://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/{z}/{x}/{y}.png
{% endhighlight %}

## General Concepts

The following concepts are the same for every endpoint in the API except when it's noted explicitly.

### Auth

By default, users do not have access to private tables in CartoDB. In order to instantiate a map from private table data an API Key is required. Additionally, to include some endpoints, an API Key must be included (e.g. creating a named map).

To execute an authorized request, `api_key=YOURAPIKEY` should be added to the request URL. The param can be also passed as POST param. Using HTTPS is mandatory when you are performing requests that include your `api_key`.

### Errors

Errors are reported using standard HTTP codes and extended information encoded in JSON with this format:

{% highlight javascript %}
{
  "errors": [
    "access forbidden to table TABLE"
  ]
}
{% endhighlight %}

If you use JSONP, the 200 HTTP code is always returned so the JavaScript client can receive errors from the JSON object.

### CORS support

All the endpoints, which might be accessed using a web browser, add CORS headers and allow OPTIONS method.

## Anonymous Maps

Anonymous maps allows you to instantiate a map given SQL and CartoCSS. It also allows you to add interaction capabilities using [UTF Grid.](https://github.com/mapbox/utfgrid-spec)

### Instantiate

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
POST /api/v1/map
{% endhighlight %}

#### Params

{% highlight javascript %}
{
  "version": "1.3.0",
  "layers": [{
    "type": "mapnik",
    "options": {
      "cartocss_version": "2.1.1", 
      "cartocss": "#layer { polygon-fill: #FFF; }",
      "sql": "select * from european_countries_e",
      "interactivity": ["cartodb_id", "iso3"]
    }
  }]
}
{% endhighlight %}

Should be a [Mapconfig](https://github.com/CartoDB/Windshaft/blob/0.44.1/doc/MapConfig-1.3.0.md).

#### Response

The response includes:

- **layergroupid**  
  The ID for that map, used to compose the URL for the tiles. The final URL is:

  ```html
  https://{account}.cartodb.com/api/v1/map/:layergroupid/{z}/{x}/{y}.png
  ```

- **updated_at**  
  The ISO date of the last time the data involved in the query was updated.

- **metadata**
  Includes information about the layers.
  -

- **cdn_url**  
  URLs to fetch the data using the best CDN for your zone.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl 'https://documentation.cartodb.com/api/v1/map' -H 'Content-Type: application/json' -d @mapconfig.json
{% endhighlight %}

<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "layergroupid": "c01a54877c62831bb51720263f91fb33:0",
  "last_updated": "1970-01-01T00:00:00.000Z",
  "metadata": {
    "layers": [
      {
        "type": "mapnik",
        "meta": {}
      }
    ]
  },
  "cdn_url": {
    "http": "http://cdb.com",
    "https": "https://cdb.com"
  }
}
{% endhighlight %}

##### Retrieve resources from the layergroup

###### Mapnik tiles can be accessed using:

These tiles will get just the mapnik layers. To get individual layers see next section.

{% highlight bash %}
https://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/{z}/{x}/{y}.png
{% endhighlight %}

###### Individual layers

The MapConfig specification holds the layers definition in a 0-based index. Layers can be requested individually in different formats depending on the layer type.

Individual layers can be accessed using that 0-based index. For UTF grid tiles:

{% highlight bash %}
https://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/:layer/{z}/{x}/{y}.grid.json
{% endhighlight %}

In this case, `:layer` as 0 returns the UTF grid tiles/attributes for layer 0, the only layer in the example MapConfig.

If the MapConfig had a Torque layer at index 1 it could be possible to request it with:

{% highlight bash %}
https://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/1/{z}/{x}/{y}.torque.json
{% endhighlight %}

###### Attributes defined in `attributes` section:

{% highlight bash %}
https://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/:layer/attributes/:feature_id
{% endhighlight %}

Which returns JSON with the attributes defined, like:

{% highlight javascript %}
{ "c": 1, "d": 2 }
{% endhighlight %}

###### Blending and layer selection

{% highlight bash %}
https://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/:layer_filter/{z}/{x}/{y}.png
{% endhighlight %}

Note: currently format is limited to `png`.

`:layer_filter` can be used to select some layers to be rendered together. `:layer_filter` supports two formats:

- `all` alias

Using `all` as `:layer_filter` will blend all layers in the layergroup

{% highlight bash %}
https://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/all/{z}/{x}/{y}.png
{% endhighlight %}

- Filter by layer index

A list of comma separated layer indexes can be used to just render a subset of layers. For example `0,3,4` will filter and blend layers with indexes 0, 3, and 4.

{% highlight bash %}
https://documentation.cartodb.com/api/v1/map/c01a54877c62831bb51720263f91fb33:0/0,3,4/{z}/{x}/{y}.png
{% endhighlight %}

Some notes about filtering:

  - Invalid index values or out of bounds indexes will end in `Invalid layer filtering` errors.
  - Once a mapnik layer is selected, all mapnik layers will get blended. As this may change in the future **it is
  recommended** to always select all mapnik layers if you want to select at least one so you will get a consistent
  behavior in the future.
  - Ordering is not considered. So right now filtering layers 0,3,4 is the very same thing as filtering 3,4,0. As this
  may change in the future **it is recommended** to always select the layers in ascending order so you will get a
  consistent behavior in the future.

### Create JSONP

The JSONP endpoint is provided in order to allow web browsers access which don't support CORS.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/map?callback=method
{% endhighlight %}

#### Params

- **config**
  Encoded JSON with the params for creating named maps (the variables defined in the template).

- **lmza**  
  This attribute contains the same as config but LZMA compressed. It cannot be used at the same time as `config`.

- **callback**  
  JSON callback name.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl "https://documentation.cartodb.com/api/v1/map?callback=callback&config=%7B%22version%22%3A%221.0.1%22%2C%22layers%22%3A%5B%7B%22type%22%3A%22cartodb%22%2C%22options%22%3A%7B%22sql%22%3A%22select+%2A+from+european_countries_e%22%2C%22cartocss%22%3A%22%23european_countries_e%7B+polygon-fill%3A+%23FF6600%3B+%7D%22%2C%22cartocss_version%22%3A%222.3.0%22%2C%22interactivity%22%3A%5B%22cartodb_id%22%5D%7D%7D%5D%7D"
{% endhighlight %}

<div class="code-title">RESPONSE</div>
{% highlight javascript %}
callback({
    layergroupid: "d9034c133262dfb90285cea26c5c7ad7:0",
    cdn_url: {
        "http": "http://cdb.com",
        "https": "https://cdb.com"
    },
    last_updated: "1970-01-01T00:00:00.000Z"
})
{% endhighlight %}

### Remove

Anonymous maps cannot be removed by an API call. They will expire after about five minutes but sometimes longer. If an anonymous map expires and tiles are requested from it, an error will be raised. This could happen if a user leaves a map open and after time, returns to the map and attempts to interact with it in a way that requires new tiles (e.g. zoom). The client will need to go through the steps of creating the map again to fix the problem.


## Named Maps

Named maps are essentially the same as anonymous maps except the MapConfig is stored on the server and the map is given a unique name. Two other big differences are: you can create named maps from private data and that users without an API Key can see them even though they are from that private data.

The main two differences compared to anonymous maps are:

- **auth layer**  
  This allows you to control who is able to see the map based on a token auth

- **templates**  
  Since the MapConfig is static it can contain some variables so the client can modify the map's appearance using those variables.

Template maps are persistent with no preset expiration. They can only be created or deleted by a CartoDB user with a valid API_KEY (see auth section).

### Create

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
POST /api/v1/map/named
{% endhighlight %}

#### Params

- **api_key** is required

<div class="code-title">template.json</div>
{% highlight javascript %}
{
  "version": "0.0.1",
  "name": "template_name",
  "auth": {
    "method": "token",
    "valid_tokens": [
      "auth_token1",
      "auth_token2"
    ]
  },
  "placeholders": {
    "color": {
      "type": "css_color",
      "default": "red"
    },
    "cartodb_id": {
      "type": "number",
      "default": 1
    }
  },
  "layergroup": {
    "version": "1.0.1",
    "layers": [
      {
        "type": "cartodb",
        "options": {
          "cartocss_version": "2.1.1",
          "cartocss": "#layer { polygon-fill: <%= color %>; }",
          "sql": "select * from european_countries_e WHERE cartodb_id = <%= cartodb_id %>"
        }
      }
    ]
  },
  "view": {
    "zoom": 4,
    "center": {
      "lng": 0,
      "lat": 0
    },
    "bounds": {
      "west": -45,
      "south": -45,
      "east": 45,
      "north": 45
    }
  }
}
{% endhighlight %}

##### Arguments

- **name**: There can be at most _one_ template with the same name for any user. Valid names start with a letter or a number, and only contain letters, numbers, dashes (-) or underscores (_).
- **auth**:
  - **method** `"token"` or `"open"` (the default if no `"method"` is given).
  - **valid_tokens** when `"method"` is set to `"token"`, the values listed here allow you to instantiate the named map.
- **placeholders**: Variables not listed here are not substituted. Variables not provided at instantiation time trigger an error. A default is required for optional variables. Type specification is used for quoting, to avoid injections see template format section below.
- **layergroup**: the layer list definition. This is the MapConfig explained in anonymous maps. See [MapConfig documentation](https://github.com/CartoDB/Windshaft/blob/0.44.1/doc/MapConfig-1.3.0.md) for more info.
- **view** (optional): extra keys to specify the compelling area for the map. It can be used to have a static preview of a named map without having to instantiate it. It is possible to specify it with `center` + `zoom` or with a bounding box `bbox`. Center+zoom takes precedence over bounding box.
  - **zoom** The zoom level to use
  - **center**
    - **lng** The longitude to use for the center
    - **lat** The latitude to use for the center
  - **bounds**
    - **west**: LowerCorner longitude for the bounding box, in decimal degrees (aka most western)
    - **south**: LowerCorner latitude for the bounding box, in decimal degrees (aka most southern)
    - **east**: UpperCorner longitude for the bounding box, in decimal degrees (aka most eastern)
    - **north**: UpperCorner latitude for the bounding box, in decimal degrees (aka most northern)

#### Template Format

A templated `layergroup` allows the use of placeholders in the "cartocss" and "sql" elements of the "option" object in any "layer" of a `layergroup` configuration

Valid placeholder names start with a letter and can only contain letters, numbers, or underscores. They have to be written between the `<%=` and `%>` strings in order to be replaced.

##### Example

{% highlight javascript %}
<%= my_color %>
{% endhighlight %}

The set of supported placeholders for a template will need to be explicitly defined with a specific type and default value for each.

#### Placeholder Types

The placeholder type will determine the kind of escaping for the associated value. Supported types are:

- **sql_literal** internal single-quotes will be sql-escaped
- **sql_ident** internal double-quotes will be sql-escaped
- **number** can only contain numerical representation
- **css_color** can only contain color names or hex-values

Placeholder default values will be used whenever new values are not provided as options at the time of creation on the client. They can also be used to test the template by creating a default version with new options provided.

When using templates, be very careful about your selections as they can give broad access to your data if they are defined losely.

<div class="code-title code-request with-result">REQUEST</div>
{% highlight html %}
curl -X POST \
   -H 'Content-Type: application/json' \
   -d @template.json \
   'https://documentation.cartodb.com/api/v1/map/named?api_key=APIKEY'
{% endhighlight %}

<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "template_id":"name",
}
{% endhighlight %}

### Instantiate

Instantiating a map allows you to get the information needed to fetch tiles. That temporal map is an anonymous map.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
POST /api/v1/map/named/:template_name
{% endhighlight %}

#### Param

- **auth_token** optional, but required when `"method"` is set to `"token"`

{% highlight javascript %}
// params.json
{
 "color": "#ff0000",
 "cartodb_id": 3
}
{% endhighlight %}

The fields you pass as `params.json` depend on the variables allowed by the named map. If there are variables missing it will raise an error (HTTP 400)

- **auth_token** *optional* if the named map needs auth

#### Example

You can initialize a template map by passing all of the required parameters in a POST to `/api/v1/map/named/:template_name`.

Valid credentials will be needed if required by the template.

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -X POST \
  -H 'Content-Type: application/json' \
  -d @params.json \
  'https://documentation.cartodb.com/api/v1/map/named/@template_name?auth_token=AUTH_TOKEN'
{% endhighlight %}

<div class="code-title">Response</div>
{% highlight javascript %}
{
  "layergroupid": "docs@fd2861af@c01a54877c62831bb51720263f91fb33:123456788",
  "last_updated": "2013-11-14T11:20:15.000Z"
}
{% endhighlight %}

<div class="code-title">Error</div>
{% highlight javascript %}
{
  "errors" : ["Some error string here"]
}
{% endhighlight %}

You can then use the `layergroupid` for fetching tiles and grids as you would normally (see anonymous map section).  However you'll need to show the `auth_token`, if required by the template.

### Using JSONP

There is also a special endpoint to be able to initialize a map using JSONP (for old browsers).

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/map/named/:template_name/jsonp
{% endhighlight %}

#### Params

- **auth_token** optional, but required when `"method"` is set to `"token"`
- **config** Encoded JSON with the params for creating named maps (the variables defined in the template)
- **lmza** This attribute contains the same as config but LZMA compressed. It cannot be used at the same time than `config`.
- **callback:** JSON callback name

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl 'https://documentation.cartodb.com/api/v1/map/named/:template_name/jsonp?auth_token=AUTH_TOKEN&callback=callback&config=template_params_json'
{% endhighlight %}

<div class="code-title">RESPONSE</div>
{% highlight javascript %}
callback({
  "layergroupid":"c01a54877c62831bb51720263f91fb33:0",
  "last_updated":"1970-01-01T00:00:00.000Z"
  "cdn_url": {
    "http": "http://cdb.com",
    "https": "https://cdb.com"
  }
})
{% endhighlight %}

This takes the `callback` function (required), `auth_token` if the template needs auth, and `config` which is the variable for the template (in cases where it has variables). 

{% highlight javascript %}
url += "config=" + encodeURIComponent(
JSON.stringify({ color: 'red' });
{% endhighlight %}

The response is in this format:

{% highlight javascript %}
callback({
  layergroupid: "dev@744bd0ed9b047f953fae673d56a47b4d:1390844463021.1401",
  last_updated: "2014-01-27T17:41:03.021Z"
})
{% endhighlight %}

### Update

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
PUT /api/v1/map/named/:template_name
{% endhighlight %}

#### Params

- **api_key** is required

#### Response

Same as updating a map.

#### Other Info

Updating a named map removes all the named map instances so they need to be initialized again.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -X PUT \
  -H 'Content-Type: application/json' \
  -d @template.json \
  'https://documentation.cartodb.com/api/v1/map/named/:template_name?api_key=APIKEY'
{% endhighlight %}

<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "template_id": "@template_name"
}
{% endhighlight %}

If any template has the same name, it will be updated.

If a template with the same name does NOT exist, a 400 HTTP response is generated with an error in this format:

{% highlight javascript %}
{
  "errors" : ["error string here"]
}
{% endhighlight %}

### Delete 

Delete the specified template map from the server and it disables any previously initialized versions of the map.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
DELETE /api/v1/map/named/:template_name
{% endhighlight %}

#### Params

- **api_key** is required

#### Example

<div class="code-title code-request">REQUEST</div>
{% highlight bash %}
curl -X DELETE 'https://documentation.cartodb.com/api/v1/map/named/:template_name?api_key=APIKEY'
{% endhighlight %}

<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "errors" : ["Some error string here"]
}
{% endhighlight %}

On success, a 204 (No Content) response will be issued. Otherwise a 4xx response with an error will be returned.

### Listing Available Templates

This allows you to get a list of all available templates. 

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/map/named/
{% endhighlight %}

#### Params

- **api_key** is required

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -X GET 'https://documentation.cartodb.com/api/v1/map/named?api_key=APIKEY'
{% endhighlight %}

<div class="code-title with-result">RESPONSE</div>
{% highlight javascript %}
{
   "template_ids": ["@template_name1","@template_name2"]
}
{% endhighlight %}

<div class="code-title">ERROR</div>
{% highlight javascript %}
{
   "errors" : ["Some error string here"]
}
{% endhighlight %}

### Getting a Specific Template

This gets the definition of a template.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/map/named/:template_name
{% endhighlight %}

#### Params

- **api_key** is required

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -X GET 'https://documentation.cartodb.com/api/v1/map/named/:template_name?api_key=APIKEY'
{% endhighlight %}

<div class="code-title with-result">RESPONSE</div>
{% highlight javascript %}
{
  "template": {...} // see template.json above
}
{% endhighlight %}

<div class="code-title">ERROR</div>
{% highlight javascript %}
{
  "errors" : ["Some error string here"]
}
{% endhighlight %}

### Use with CartoDB.js
Named maps can be used with CartoDB.js by specifying a named map in a layer source as follows. Named maps are treated almost the same as other layer source types in most other ways.

{% highlight js %}
var layerSource = {
  user_name: '{your_user_name}', 
  type: 'namedmap', 
  named_map: { 
    name: '{template_name}', 
	layers: [{ 
	  layer_name: "layer1", 
      interactivity: "column1, column2, ..." 
	}] 
  } 
}

cartodb.createLayer('map_dom_id',layerSource)
  .addTo(map_object);

{% endhighlight %}

[CartoDB.js](http://docs.cartodb.com/cartodb-platform/cartodb-js.html) has methods for accessing your named maps.

1. [layer.setParams()](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#layersetparamskey-value) allows you to change the template variables (in the placeholders object) via JavaScript 
2. [layer.setAuthToken()](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#layersetauthtokenauthtoken) allows you to set the auth tokens to create the layer

## Static Maps API

The Static Maps API can be initiated using both named and anonymous maps using the 'layergroupid' token. The API can be used to create static images of parts of maps and thumbnails for use in web design, graphic design, print, field work, and many other applications that require standard image formats.

### Maps API endpoints

Begin by instantiating either a named or anonymous map using the `layergroupid token` as demonstrated in the Maps API documentation above. The `layergroupid` token calls to the map and allows for parameters in the definition to generate static images.

#### Zoom + center

##### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/map/static/center/:token/:z/:lat/:lng/:width/:height.:format
{% endhighlight %}

##### Params

* **:token**: the layergroupid token from the map instantiation
* **:z**: the zoom level of the map
* **:lat**: the latitude for the center of the map
* **:lng**: the longitude for the center of the map
* **:width**: the width in pixels for the output image
* **:height**: the height in pixels for the output image
* **:format**: the format for the image, supported types: `png`, `jpg`
  * **jpg** will have a default quality of 85.

#### Bounding Box

##### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/map/static/bbox/:token/:bbox/:width/:height.:format`
{% endhighlight %}

##### Params

* **:token**: the layergroupid token from the map instantiation
* **:bbox**: the bounding box in WGS 84 (EPSG:4326), comma separated values for:
    - LowerCorner longitude, in decimal degrees (aka most western)
    - LowerCorner latitude, in decimal degrees (aka most southern)
    - UpperCorner longitude, in decimal degrees (aka most eastern)
    - UpperCorner latitude, in decimal degrees (aka most northern)
* **:width**: the width in pixels for the output image
* **:height**: the height in pixels for the output image
* **:format**: the format for the image, supported types: `png`, `jpg`
  * **jpg** will have a default quality of 85.

Note: you can see this endpoint as:

{% highlight bash %}
GET /api/v1/map/static/bbox/:token/:west,:south,:east,:north/:width/:height.:format`
{% endhighlight %}

#### Named map

##### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/map/static/named/:name/:width/:height.:format
{% endhighlight %}

##### Params

* **:name**: the name of the named map
* **:width**: the width in pixels for the output image
* **:height**: the height in pixels for the output image
* **:format**: the format for the image, supported types: `png`, `jpg`
  * **jpg** will have a default quality of 85.

A named maps static image will get its constraints from the [view in the template](#Arguments), if `view` is not present it will estimate the extent based on the involved tables otherwise it fallback to `"zoom": 1`, `"lng": 0` and `"lat": 0`.

####Layers

The Static Maps API allows for multiple layers of incorporation into the `MapConfig` to allow for maximum versatility in creating a static map. The examples below were used to generate the static image example in the next section, and appear in the specific order designated.

**Basemaps**

{% highlight javascript %}
    {
      "type": "http",
      "options": {
        "urlTemplate": "http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
        "subdomains": [
          "a",
          "b",
          "c"
        ]
      }
    },
{% endhighlight %}

By manipulating the `"urlTemplate"` custom basemaps can be used in generating static images. Supported map types for the Static Maps API are:

          'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
          'http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
          'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
          'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',

**Mapnik**

{% highlight javascript %}
    {
      "type": "mapnik",
      "options": {
        "sql": "select null::geometry the_geom_webmercator",
        "cartocss": "#layer {\n\tpolygon-fill: #FF3300;\n\tpolygon-opacity: 0;\n\tline-color: #333;\n\tline-width: 0;\n\tline-opacity: 0;\n}",
        "cartocss_version": "2.2.0"
      }
    },
{% endhighlight %}

**CartoDB**

As described in the [Mapconfig documentation](https://github.com/CartoDB/Windshaft/blob/0.44.1/doc/MapConfig-1.3.0.md), a "cartodb" type layer is now just an alias to a "mapnik" type layer as above, intended for backwards compatibility.

{% highlight javascript %}
    {
      "type": "cartodb",
      "options": {
        "sql": "select * from park",
        "cartocss": "/** simple visualization */\n\n#park{\n  polygon-fill: #229A00;\n  polygon-opacity: 0.7;\n  line-color: #FFF;\n  line-width: 0;\n  line-opacity: 1;\n}",
        "cartocss_version": "2.1.1"
      }
    },
{% endhighlight %}

Additionally, static images from Torque maps and other map layers can be used together to generate highly customizable and versatile static maps.


#### Caching

It is important to note that generated images are cached from the live data referenced with the `layergroupid token` on the specified CartoDB account. This means that if the data changes, the cached image will also change. When linking dynamically, it is important to take into consideration the state of the data and longevity of the static image to avoid broken images or changes in how the image is displayed. To obtain a static snapshot of the map as it is today and preserve the image long-term regardless of changes in data, the image must be saved and stored locally.

#### Limits

* While images can encompass an entirety of a map, the default limit for pixel range is 8192 x 8192.
* Image resolution by default is set to 72 DPI
* JPEG quality by default is 85% 
* Timeout limits for generating static maps are the same across the CartoDB Editor and Platform. It is important to ensure timely processing of queries.


### Examples

After instantiating a map from a CartoDB account:

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
 GET /api/v1/map/static/center/4b615ff367e498e770e7d05e99181873:1420231989550.8699/14/40.71502926732618/-73.96039009094238/600/400.png
{% endhighlight %}

#### Response

<p class="wrap-border"><img src="https://raw.githubusercontent.com/namessanti/Pictures/master/static_api.png" alt="static-api"/></p>

#### MapConfig

For this map, the multiple layers, order, and stylings are defined by the MapConfig.

{% highlight javascript %}
{
  "version": "1.3.0",
  "layers": [
    {
      "type": "http",
      "options": {
        "urlTemplate": "http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
        "subdomains": [
          "a",
          "b",
          "c"
        ]
      }
    },
    {
      "type": "mapnik",
      "options": {
        "sql": "select null::geometry the_geom_webmercator",
        "cartocss": "#layer {\n\tpolygon-fill: #FF3300;\n\tpolygon-opacity: 0;\n\tline-color: #333;\n\tline-width: 0;\n\tline-opacity: 0;\n}",
        "cartocss_version": "2.2.0"
      }
    },
    {
      "type": "cartodb",
      "options": {
        "sql": "select * from park",
        "cartocss": "/** simple visualization */\n\n#park{\n  polygon-fill: #229A00;\n  polygon-opacity: 0.7;\n  line-color: #FFF;\n  line-width: 0;\n  line-opacity: 1;\n}",
        "cartocss_version": "2.1.1"
      }
    },
    {
      "type": "cartodb",
      "options": {
        "sql": "select * from residential_zoning_2009",
        "cartocss": "/** simple visualization */\n\n#residential_zoning_2009{\n  polygon-fill: #c7eae5;\n  polygon-opacity: 1;\n  line-color: #FFF;\n  line-width: 0.2;\n  line-opacity: 0.5;\n}",
        "cartocss_version": "2.1.1"
      }
    },
    {
      "type": "cartodb",
      "options": {
        "sql": "select * from nycha_developments_july2011",
        "cartocss": "/** simple visualization */\n\n#nycha_developments_july2011{\n  polygon-fill: #ef3b2c;\n  polygon-opacity: 0.7;\n  line-color: #FFF;\n  line-width: 0;\n  line-opacity: 1;\n}",
        "cartocss_version": "2.1.1"
      }
    }
  ]
}
{% endhighlight %}
=======
>>>>>>> master
## Import API

A standard import stores the data, uploaded from files with the valid formats, as specified.

The CartoDB Import API allows you to upload files to a CartoDB account, check on their current upload status, as well as deleting and listing importing processes on the given account. This API consists of several HTTP requests targeted at a set of CartoDB endpoints that deal with the conversion and import of the sent files. CartoDB tables can be classified into two categories:

- **standard tables**  
  The default tables used to store the data of the uploaded files that will be used to create datasets and maps. Any CartoDB user may create, manipulate, and delete such datasets.

- **Sync Tables**  
  Available to certain CartoDB plans, these tables store data from a remote file and refresh their contents during periodic intervals specified by the user. The base files from which the sync tables retrieve their contents may come from Google Drive, Dropbox, or a public URL. In this document we will deal with the simplest case: public URLs.

Additionally, CartoDB offers a set of connectors to import specific types of datasets:

- **ArcGIS Server&trade;**  
  Allows to import ArcGIS&trade; layers into a CartoDB account as tables from ArcGIS Server&trade; (version 10.1 or higher is required). Note that **this connector is disabled by default** in the CartoDB importer options. If you are interested in enabling it, please contact [support@cartodb.com](mailto:support@cartodb.com) to gain further details.


## Quickstart

For this example (and the rest of the ones illustrated in this document) we will be using a command-line tool known as `cURL`. For more info about this tool see [this blog post](http://quickleft.com/blog/command-line-tutorials-curl) or type `man curl` in bash.

### Uploading a local file

Suppose we have a CartoDB account whose username is *documentation* and we want to upload a local file named *prism_tour.csv* located in the *Documents* folder. Doing so would require executing the following command on a Terminal window:

<div class="code-title code-request">REQUEST</div>
{% highlight bash %}
curl -v -F file=@/home/documentation/Documents/prism_tour.csv
"https://documentation.cartodb.com/api/v1/imports/?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64"
{% endhighlight %}

Note that the *api_key* element has an alphanumeric value that is exclusive to the *documentation* CartoDB account.

The response to this request appears in the following format, where a successful value indicates that the import process is enqueued:

<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "efa9925c-31dd-11e4-a95e-0edbca4b5057",
  "success": true
}
{% endhighlight %}

The `item_queue_id` value is a unique identifier that references the import process. Once this process has started, its information can be obtained doing a request to the imports endpoint as explained in the ["Check the status of an import process](http://docs.cartodb.com/cartodb-platform/import-api.html#check-the-status-of-an-import-process) section.

### Uploading from a remote URL

Suppose we have a server at the hostname *examplehost.com* with a csv named *sample.csv* already uploaded. Creating a table from it requires executing the following command on a Terminal window:

<div class="code-title code-request">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"url":"https://examplehost.com/sample.csv"}'
"https://documentation.cartodb.com/api/v1/imports/?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64"`
{% endhighlight %}

The response to this request would have the following format, yielding a success import:

<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "efa9925c-31dd-11e4-a95e-0edbca4b5057",
  "success": true
}
{% endhighlight %}


## General Concepts

The following concepts are the same for every endpoint in the API except when it's noted explicitly.

### Auth

Manipulating data on a CartoDB account requires prior authentication using a unique identifier as a password. For the import API, a special identifier known as the API Key is used as a proof of authentication for each user account to authorize access to its data.  

To execute an authorized request, api_key=YOURAPIKEY should be added to the request URL. The param can be also passed as POST param. We **strongly advise** using HTTPS when you are performing requests that include your `api_key`.

### Errors

Errors are reported using standard HTTP codes and extended information encoded in HTML language as in the following example:

{% highlight html %}
<html>
  <head>
    <title>411 Length Required</title>
  </head>
  <body bgcolor="white">
    <center>
      <h1>411 Length Required</h1>
    </center>
    <hr>
    <center>nginx</center>
  </body>
</html>
{% endhighlight %}

Depending on the specific case, additional information regarding the errors may be presented.


## Standard Tables

A standard import stores the data you upload from files with [valid formats](http://docs.cartodb.com/cartodb-editor.html#supported-file-formats), creating tables at CartoDB.

### Upload file

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
POST api/v1/imports 
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

- **Local file upload**  
  When importing local files, you need to perform a POST with a file (see below an example call with CURL).

- **url**  
  When importing remote files, the full URL to the publicly accessible file.

- **type_guessing**  
  If set to *false* disables field type guessing (for Excel and CSVs). Optional. Default is *true*.

- **quoted_fields_guessing**  
  If set to *false* disables type guessing of CSV fields that come inside double quotes. Optional. Default is *true*.

- **content_guessing**  
  Set it to *true* to enable content guessing and automatic geocoding based on results. Currently it only implements geocoding of countries. Optional. Default is *false*.

- **create_vis**  
  Set it to *true* to flag the import so that when it finishes, it creates a Map automatically after importing the Dataset. Optional. Default is *false* for API calls or old dashboard imports. If importing from the new dashboard it will automatically set this parameter to *true*.
  
- **privacy**  
  Used to set the privacy settings of the table or tables resulting from the import. If **create_vis** is set to true, the resulting visualization privacy settings will also be determined by this parameter. **privacy** can be set to:
  * **public** The resulting table or visualization can be viewed by anyone
  * **private** The resulting table or visualization can only be viewed by the uploader
  * **link** The resulting table or visualization can only be viewed through a private link shared by the uploader

- **table_name**  
  Used to duplicate one of your existing tables. **Do not mix with File/URL imports**.

- **table_copy**  
  Similar to *table_name*, internally used for table copying. **Do not set**.

- **table_id**  
  Internal usage for table migrations. **Do not set**.

- **append**  
  Reserved for future usage. **Do not set**.

- **sql**  
  Used to create a new table from a SQL query applied to one of your tables. **Do not mix with File/URL imports**.

- **service_name**  
  Used to upload from datasources, indicates which datasource to use. Check [here](https://github.com/CartoDB/cartodb/tree/master/services/datasources/lib/datasources) for an updated list of available datasources to use. **Initially intended for CartoDB Web Editor usage**.

- **service_item_id**  
  Used to upload from datasources and indicates data of the datasource. Check [here](https://github.com/CartoDB/cartodb/tree/master/services/datasources/lib/datasources) for an updated list of available datasources to use. **Initially intended for CartoDB Web Editor usage**.


#### Response

The response includes:

- **item_queue_id**  
  A unique alphanumeric identifier referencing the imported file in the targeted account.
  
- **success**  
  A boolean value indicating whether the file import succeeded or not.

#### Local File Upload Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -F file=@/path/to/local/file "https://{account}.cartodb.com/api/v1/imports/?api_key={account API Key}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "9906bce0-f1a3-4b07-be71-818f4bfd7673",
  "success": true
}
{% endhighlight %}

#### URL Upload Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"url":"https://remotehost.url/path/to/remotefile"}'
"https://{account}.cartodb.com/api/v1/imports/?api_key={account API Key}"`
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "9906bce0-f1a3-4b07-be71-818f4bfd7673",
  "success": true
}
{% endhighlight %}


### Check the status of an import process

When uploading a file for import, it may take some time due to the file's size and the additional processing on the CartoDB side. Using this request, an import process state can be retrieved.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/imports/<import_id>
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

- **The import identifer**  
  A unique alphanumeric element that identifies the import process to be retrieved. It is the *item_queue_id* element returned after running the upload request successfully.

#### Response

The response includes the following items:

- **id**  
  A unique identifier for the import process. It is the same as the *import id* provided in the request.

- **user_id**  
  A unique alphanumeric element that identifies the CartoDB account user in the internal database.
  
- **table_id**  
  A unique alphanumeric element that identifies the created table in the internal CartoDB database.

- **data_type**  
  This element is currently deprecated.
  
- **table_name**  
  The final name of the created table in the targeted CartoDB account. It usually has the same name as the uploaded file, unless there already exists a table with the same name (in this case, an integer number is appended to the table name).
  
- **state**  
  A string value indicating the current state of the importing process. It can have any of the following values: *uploading*, *importing*, *complete*, or *failure*.
  
- **error_code**  
  A string containing an error message to be outputted in case of a failure during the import process, that is, when the *success* item has a *false* value (see below).

- **tables_created_count**  
  This element is currently deprecated.
  
- **synchronization_id**  
  This element has a *null* value in this case.
  
- **service_name**  
  This element identifies the service type used to import the file. It can have any of these three values: *gdrive* for Google Drive imports, *dropbox* for Dropbox imports and *public_url* for URL or local file imports.
  
- **service_item_id**  
  A unique identifier that references the service item of the targeted import.
  
- **success**  
  A boolean value indicating whether the import process succeeded (*true* or 
 *false*).

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v "https://{account}.cartodb.com/api/v1/imports/1234abcd-1234-1a2b-3c4d-4321dcba5678?api_key={account API Key}
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "id": "1234abcd-1234-1a2b-3c4d-4321dcba5678",
  "user_id": "abcd1234-a5b6-c7d8-1a2b-efgh5678abcd",
  "table_id": "mnop5678-12cd-ab34-abc1-4321dcba2b4d",
  "data_type": "url",
  "table_name": "sample_file",
  "state": "complete",
  "error_code": null,
  "queue_id": "1234abcd-1234-1a2b-3c4d-4321dcba5678",
  "get_error_text": {
    "title": "Unknown",
    "what_about": "Sorry, something went wrong and we're not sure what. Try\n      uploading your file again, or <a href='mailto:support@cartodb.com?subject=Unknown error'>contact us</a> and we'll try to help you quickly."
  },
  "tables_created_count": null,
  "synchronization_id": null,
  "success": true
}
{% endhighlight %}

### Retrieving a list of all the current import processes

Lists the import identifiers of the files that are being imported in the targeted CartoDB account.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/imports/
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

#### Response

The response includes:

- **item_queue_id**  
  A unique alphanumeric identifier referencing the import process in the targeted CartoDB account.
  
- **success**  
  A boolean value indicating whether the file import succeeded or not.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v "https://{account}.cartodb.com/api/v1/imports/?api_key={account API Key}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "1234abcd-1234-1a2b-3c4d-4321dcba5678",
  "success": true
}
{% endhighlight %}


## Sync Tables

### List all the synchronized tables in a given account

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
GET /api/v1/synchronizations
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

#### Response

The response includes an **array** of items, each one containing the following elements:

- **id**  
  A unique alphanumeric identifier of the synced table.
  
- **name**  
  The actual name of the created sync table.
  
- **interval**  
  An integer value representing the number of seconds between synchronizations of the table contents.
  
- **url**  
  This element is currently deprecated.
  
- **created_at**  
  The date time at which the table was created in the CartoDB database.
  
- **updated_at**  
  The date time at which the table had its contents modified.
  
- **run_at**  
  The date time at which the table will get its contents synched with the source file.
  
- **ran_at**  
  The date time at which the table **had** its contents synched with the source file.
  
- **modified**  
  Not used as synced tables cannot be modified manually from CartoDB.
  
- **etag**  
  This element is currently deprecated.
  
- **checksum**  
  This element is currently deprecated.
  
- **retried_times**  
  An integer value indicating the number of attempts that were performed to sync the table.
  
- **service_name**  
  A string with the name of the datasource used to import the file. It can have any of the following values: *gdrive* for Google Drive, *dropbox* for Dropbox and *null* for URL imports.
  
- **log_id**  
  A unique alphanumeric identifier to locate the log traces of the given table.
  
- **error_code**  
  An integer value representing a unique error identifier.
  
- **error_message**  
  A string value indicating the message related to the *error_code* element.
  
- **service_item_id**  
  A unique identifier used by CartoDB to reference the sync table and its related datasource service.


Finally, the array includes a **total_entries** element that indicates the number of items contained in the response array.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v "https://{account}.cartodb.com/api/v1/synchronizations/?api_key={account API Key}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "synchronizations": [
    {
      "id": "1234abcd-1234-1a2b-3c4d-4321dcba5678",
      "name": "sample_file",
      "interval": 2592000,
      "url": "",
      "state": "success",
      "user_id": "abcd1234-a5b6-c7d8-1a2b-efgh5678abcd",
      "created_at": "2014-07-01T10:51:54+00:00",
      "updated_at": "2014-07-01T15:36:19+00:00",
      "run_at": "2014-08-01T15:36:19+00:00",
      "ran_at": "2014-07-01T15:24:54+00:00",
      "modified_at": null,
      "etag": null,
      "checksum": "",
      "log_id": "aaaabbbb-1234-5678-dcba-abcd1234efgh",
      "error_code": null,
      "error_message": null,
      "retried_times": 0,
      "service_name": "gdrive",
      "service_item_id": "1AbC2BcD3CdEf4eFg5eRgG3FaWaa3"
    }
  ],
  "total_entries": 1
}
{% endhighlight %}

### Syncing a file from a URL

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
POST /api/v1/synchronizations
{% endhighlight %}

#### Params

- **auth_token**  
  The targeted CartoDB account API key.
  
- **url**  
  The **public** URL address where the file to be imported is located.
  
- **interval**  
  The number of seconds for the synchronization period. CartoDB supports the following values: *3600* (sync each hour), *86400* (sync each day), *604800* (sync each week) or *2592000* (sync each month). *Note*: Sync interval must be at least 900 (15 minutes).

- **type_guessing**  
  If set to *false* disables field type guessing (for Excel and CSVs). Optional. Default is *true*.

- **quoted_fields_guessing**  
  If set to *false* disables type guessing of CSV fields that come inside double quotes. Optional. Default is *true*.

- **content_guessing**  
  Set it to *true* to enable content guessing and automatic geocoding based on results. Currently it only implements geocoding of countries. Optional. Default is *false*.

#### Response

The response includes the following items:

- **endpoint**  
  This item refers to the internal CartoDB controller code responsible for performing the import.
  
- **item_queue_id**  
  A unique alphanumeric identifier that refers to the import process. It can be used to retrieve data related to the created table.
  
- **id**  
  An alphanumeric identifier used internally by CartoDB as a reference to the import process.
  
- **name**  
  This item is currently deprecated.
  
- **interval**  
  An integer value that stores the number of seconds between synchronizations.
  
- **state**  
  A string value indicating the current condition of the importing process.
  
- **user_id**  
  A unique alphanumeric identifier to reference the user in the CartoDB platform.
  
- **created_at**  
  The date time at which the table was created in the CartoDB database.
  
- **updated_at**  
  The date time at which the table had its contents modified.
  
- **run_at**  
  The date time at which the table will get its contents synched with the source file.
  
- **ran_at**  
  The date time at which the table **had** its contents synched with the source file.
  
- **modified**  
  Not used as synced tables cannot be modified manually from CartoDB.
  
- **etag**  
  This element is currently deprecated.
  
- **checksum**  
  This element is currently deprecated.
  
- **log_id**  
  A unique alphanumeric identifier to locate the log traces of the given table.
  
- **error_code**  
  An integer value representing a unique error identifier.
  
- **error_message**  
  A string value indicating the message related to the *error_code* element.
  
- **retried_times**  
  An integer value indicating the number of attempts that were performed to sync the table.
  
- **service_name**  
  Null for public urls/file uploads, used by other datasources like Google Drive and Dropbox.

- **service_item_id**  
  Null for public urls/file uploads, used by other datasources like Google Drive and Dropbox.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"url":"https://public.url.to.file/sample_file", "interval":"3600"}' "https://{account}.cartodb.com/api/v1/synchronizations/?api_key={account API Key}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "data_import": {
    "endpoint": "/api/v1/imports",
    "item_queue_id": "1234abcd-1234-1a2b-3c4d-4321dcba5678"
  },
  "id": "abcd1234-a5b6-c7d8-1a2b-efgh5678abcd",
  "name": null,
  "interval": 3600,
  "url": "https://public.url.to.file/sample_file",
  "state": "created",
  "user_id": "aaaabbbb-1234-5678-dcba-abcd1234efgh",
  "created_at": "2014-08-05T13:39:15+00:00",
  "updated_at": "2014-08-05T13:39:15+00:00",
  "run_at": "2014-08-05T14:39:15+00:00",
  "ran_at": "2014-08-05T13:39:15+00:00",
  "modified_at": null,
  "etag": null,
  "checksum": "",
  "log_id": "06faf1b8-3502-11e4-9514-0e230854a1cb",
  "error_code": null,
  "error_message": null,
  "retried_times": 0,
  "service_name": null,
  "service_item_id": null
}
{% endhighlight %}

### Removing the synchronization feature from a given table

A sync table can be converted to a standard table (a table that never gets synced).

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
DELETE /api/v1/synchronizations/<import_id>
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

- **sync table import id**  
  The unique alphanumeric identifier of the target table.


#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -X "DELETE" https://{account}.cartodb.com/api/v1/synchronizations/<import-identifier>?api_key={account API Key}"
{% endhighlight %}


#### Response

An HTTP 204 response should result as a confirmation for the removal of the synchronization feature for the target table.


### Check whether a sync table is syncing or not

A large synced table may take some time to get fully synced. IN the meantime, it could be useful to check whether it finished refreshing its contents.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/synchronizations/<import_id>/sync_now
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.
  
- **Target table import id**  
  The unique alphanumeric identifier of the target sync table.

#### Response

The response includes the following items:

- **state**  
  A string value indicating whether the request succeeded or not.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -X "GET" "https://{account}.cartodb.com/api/v1/synchronizations/1234abcd-1234-1a2b-3c4d-4321dcba5678/sync_now?api_key={account API Key}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "state": "created"
}
{% endhighlight %}

### Force a synchronization action on a sync table

Sync tables have their contents synchronized with the source file in periodic time intervals as specified by the user during the creation process. However, a table can be synchronized at an arbitrary moment in time if desired.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
PUT /api/v1/synchronizations/<import_id>/sync_now
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.
  
- **Target table import id**  
  The unique alphanumeric identifier of the target sync table.

#### Response

The response includes the following items:

- **enqueued**  
  A boolean value indicating whether the request has been successfully appended to the processing queue.
  
- **synchronization_id**  
  A unique alphanumeric identifier referring to the queue element just added.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v --request "PUT" "https://{account}.cartodb.com/api/v1/synchronizations/<import_id>/sync_now?api_key={account API Key}" --header "Content-Length:0"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight bash %}
{
  "enqueued": true,
  "synchronization_id": "1234abcd-aaaa-2222-4444-dcba4321a1b2"
}
{% endhighlight %}


## The ArcGIS&trade; Connector

### Import an ArcGIS&trade; layer

ArcGIS&trade; layers stored in ArcGIS Server&trade; can get imported as CartoDB tables. Such layers must be accessible via an **ArcGIS&trade; API REST URL** whose structure is as follows:

{% highlight html %}
http://<host>/<site>/rest/services/<folder>/<serviceName>/<serviceType>/<layer_ID>
{% endhighlight %}

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
POST   api/v1/imports 
{% endhighlight %}

#### Params

- **interval**  
  This value **MUST** be set to *0*. **Different values do not guarantee correct imports**.

- **service_item_id**  
  The ArcGIS&trade; API REST URL where the ArcGIS&trade; layer is located.

- **service_name**  
  This value **MUST** be set to *arcgis* to make use of this connector.

- **value**  
  Same URL as specified in the *service_item_id* parameter

#### Response

The response includes:

- **item_queue_id**  
  A unique alphanumeric identifier referencing the imported file in the targeted account.
  
- **success**  
  A boolean value indicating whether the file import succeeded or not.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"interval":"0","service_item_id": "http://url.to.arcgis.server.layer", "service_name": "arcgis", "value": "http://url.to.arcgis.server.layer"}' "https://{account}.cartodb.com/api/v1/imports?api_key={API_KEY}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "d676fd50-b774-4052-a4f1-e56ac6a4300e",
  "success": true
}
{% endhighlight %}


### Syncing an ArcGIS&trade; layer

An ArcGIS&trade; layer can get imported to a CartoDB account as a synchronized table. The target ArcGIS&trade; layer must be accessible via an ArcGIS&trade; API REST URL with the following structure:
{% highlight html %}
http://<host>/<site>/rest/services/<folder>/<serviceName>/<serviceType>/<layer_ID>
{% endhighlight %}

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
POST /api/v1/synchronizations
{% endhighlight %}

#### Params

- **interval**  
  The number of seconds for the synchronization period. CartoDB supports the following values: *3600* (sync each hour), *86400* (sync each day), *604800* (sync each week) or *2592000* (sync each month). *Note*: Sync interval must be at least 900 (15 minutes).

- **service_item_id**  
  The ArcGIS&trade; API REST URL where the ArcGIS&trade; dataset is located.

- **service_name**  
  This value **MUST** be set to *arcgis* to make use of this connector.

- **url**  
  This value **MUST** be empty.

#### Response

The response includes the following items:

- **endpoint**  
  This item refers to the internal CartoDB controller code responsible for performing the import.
  
- **item_queue_id**  
  A unique alphanumeric identifier that refers to the import process. It can be used to retrieve data related to the created table.
  
- **id**  
  An alphanumeric identifier used internally by CartoDB as a reference to the import process.
  
- **name**  
  This item is currently deprecated.
  
- **interval**  
  An integer value that stores the number of seconds between synchronizations.

- **url**  
  This value is empty in this case.

- **state**  
  A string value indicating the current condition of the importing process.
  
- **user_id**  
  A unique alphanumeric identifier to reference the user in the CartoDB platform.
  
- **created_at**  
  The date time at which the table was created in the CartoDB database.
  
- **updated_at**  
  The date time at which the table had its contents modified.
  
- **run_at**  
  The date time at which the table will get its contents synched with the source file.
  
- **ran_at**  
  The date time at which the table **had** its contents synched with the source file.
  
- **modified**  
  Not used as synced tables cannot be modified manually from CartoDB.
  
- **etag**  
  This element is currently deprecated.
  
- **checksum**  
  This element is currently deprecated.
  
- **log_id**  
  A unique alphanumeric identifier to locate the log traces of the given table.
  
- **error_code**  
  An integer value representing a unique error identifier.
  
- **error_message**  
  A string value indicating the message related to the *error_code* element.
  
- **retried_times**  
  An integer value indicating the number of attempts that were performed to sync the table.
  
- **service_name**  
  This value is set to *arcgis*.

- **service_item_id**  
  This item contains the ArcGIS&trade; API REST URL targeting the imported ArcGIS&trade; layer.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"interval":"604800","service_item_id": "http://url.to.arcgis.server.layer", "service_name": "arcgis", "url":""}' "https://{account}.cartodb.com/api/v1/synchronizations?api_key={API_KEY}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "data_import":{
    "endpoint":"/api/v1/imports",
    "item_queue_id":"4ff4abdd-9d37-4b7a-8e13-fb00376e2a58"
    },
  "id":"d4bc05e8-5063-11e4-9886-0e018d66dc29",
  "name":null,
  "interval":604800,
  "url":"",
  "state":"created",
  "user_id":"4884b545-07f4-4ce4-a62f-fe9e2412098f",
  "created_at":"2014-10-10T09:57:22+00:00",
  "updated_at":"2014-10-10T09:57:22+00:00",
  "run_at":"2014-10-17T09:57:22+00:00",
  "ran_at":"2014-10-10T09:57:22+00:00",
  "modified_at":null,
  "etag":null,
  "checksum":"",
  "log_id":"6aa19bf6-42db-477a-9b69-2c4f74fd8c31",
  "error_code":null,
  "error_message":null,
  "retried_times":0,
  "service_name":"arcgis",
  "service_item_id":"http://url.to.arcgis.layer"
}
{% endhighlight %}


### Import an ArcGIS&trade; dataset

This option allows you to import **at once** a complete set of layers belonging to an ArcGIS&trade; dataset. Such a dataset must be accessible via an ArcGIS&trade; API REST URL with the following structure:
{% highlight html %}
http://<host>/<site>/rest/services/<folder>/<serviceName>/<serviceType>/
{% endhighlight %}

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
POST   api/v1/imports 
{% endhighlight %}

#### Params

- **interval**  
  This value **MUST** be set to *0*. **Different values do not guarantee correct imports**.

- **service_item_id**  
  The ArcGIS&trade; API REST URL where the ArcGIS&trade; dataset is located.

- **service_name**  
  This value **MUST** be set to *arcgis* to make use of this connector.

- **value**  
  Same URL as specified in the *service_item_id* parameter

#### Response

The response includes:

- **item_queue_id**  
  A unique alphanumeric identifier referencing the imported file in the targeted account.
  
- **success**  
  A boolean value indicating whether the file import succeeded or not.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"interval":"0","service_item_id": "http://url.to.arcgis.server.dataset", "service_name": "arcgis", "value": "http://url.to.arcgis.server.dataset"}' "https://{account}.cartodb.com/api/v1/imports?api_key={API_KEY}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "c478fd50-f984-4091-d1f2-e72ac6c4333e",
  "success": true
}
{% endhighlight %}
