---
layout: tutorials_item
title: 'Named Maps'
short_description: 'Make public maps with private data'
level: hard
time_needed: '30 minutes'
embed_url: 'http://cartodb.github.com/cartodb.js/examples/tutorials/named-maps-example.html'
cartodbjs: true
---


## Summary

_Named maps_ allow you to make public maps out of private data. Unlike other maps created through our APIs, named maps need to be pre-configured; you set the SQL and CartoCSS ahead of time on the server, not in the browser as in normal CartoDB.js usage. Updates to and deletions of the map need to be run with future authenticated API calls. On the surface, named maps look the same as other maps created through CartoDB.js, but if you inspect how your browser interacts with the server, you will see that it only pulls the information that you pre-configure so you can control which data remains private.

If you're a developer who is working with data to which you don't own the license or for which you don't have the license to distribute publicly, or if you want to protect your data from misuse and modification, this tutorial is for you.

**This tutorial only works for users with paid accounts.** Check out [our plans](http://cartodb.com/pricing) for upgrade options.

#### Lesson goal 

By the end of this lesson, you will be able to create a public map with private data that has user interaction enabled on select columns of your data table. The map at the top of this page is an example of the named map we will be creating.

There are four main steps:

1. Loading data, making table private
2. Constructing a config file, sending it to the server
3. Creating named maps
4. Managing named maps

#### Objectives

1. Create a named map that allows for user interaction with infowindows that show pre-selected data from your table
2. Manage named maps (create, update, list, and delete)

#### Data

[Populated places dataset](https://common-data.cartodb.com/api/v2/sql?q=select%20*%20from%20ne_10m_populated_places_simple&filename=named_map_tutorial_table&format=shp) (which we'll import later) is accessible from CartoDB's [Common Data](http://docs.cartodb.com/cartodb-editor.html#common-data), and is originally pulled from [Natural Earth Data](http://www.naturalearthdata.com/downloads/10m-cultural-vectors/).

#### HTML Template

[HTML template](https://github.com/CartoDB/cartodb.js/blob/gh-pages/examples/tutorials/named-maps-template.html) used in this tutorial.

#### Tools

+ [curl commandline utility](http://curl.haxx.se/) -- installed by default on most Linux and OS X machines, accessible through [Cygwin](https://www.cygwin.com/) on PCs
+ [POSTMAN REST client](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en) -- a Chrome extension that allows for easy API calls

#### Documentation

Named maps are part of CartoDB's [Maps API](http://docs.cartodb.com/cartodb-platform/maps-api.html#named-maps-1).

## 1. Loading data, making table private

To get started, we'll be using the _Populated Places_ data found in [Common Data](http://docs.cartodb.com/cartodb-editor.html#common-data). Copy the following link and import it into your account:

{% highlight html %}
https://common-data.cartodb.com/api/v2/sql?q=select%20*%20from%20ne_10m_populated_places_simple&filename=named_map_tutorial_table&format=shp
{% endhighlight %}

_Not sure how to import your data? You can import using the [Editor](http://docs.cartodb.com/cartodb-editor.html#importing-data) or the [Import API](http://docs.cartodb.com/cartodb-platform/import-api.html)._

Once the data is imported, set it to "private" (see [Table Privacy Settings](http://docs.cartodb.com/cartodb-editor.html#table-privacy-settings) for more information). Also make sure that the table name is `named_map_tutorial_table`. You can change the name of your table by clicking on the table name in the upper left-hand corner and entering the new name.

## 2. Constructing a config file, sending it to the server

Now that we have a private table to work from, we will style the data in the [Editor](http://docs.cartodb.com/cartodb-editor.html) and copy the [CartoCSS](https://www.mapbox.com/tilemill/docs/manual/carto/) code to use for the configuration file we will send to the server to setup the named map. You can use any style you would like, but I am using the following settings.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/named_maps/img1.png' | prepend: site.baseurl }}" alt="map stylings used for named map" /></p>

By clicking on the [CartoCSS tab](http://docs.cartodb.com/cartodb-editor.html#cartocss), you can see the stylings that you chose by using the Visualization Wizard.


<a name="config-script"></a>
Now open a text editor and paste the following text into it. Notice the CartoCSS corresponds to what was done in the Editor above. Name the file `config.json`.

{% highlight javascript %}
{
  "version": "0.0.1",
  "name": "namedmap_tutorial",
  "auth": {
    "method": "open"
  },
  "layergroup": {
    "layers": [{
      "type": "cartodb",
      "options": {
        "cartocss_version": "2.1.1",
        "cartocss": "#named_map_tutorial_table{ marker-fill-opacity: 0.5; marker-line-color: #FFF; marker-line-width: 0; marker-line-opacity: 1; marker-placement: point; marker-type: ellipse; marker-width: 10; marker-fill: #FFCC00; marker-allow-overlap: true; marker-comp-op: multiply; }",
        "sql": "SELECT * FROM named_map_tutorial_table",
        "interactivity": ["cartodb_id", "name", "pop_max"]
      }
    }]
  }
}
{% endhighlight %}

If you're familiar with the `cartodb.createLayer(...)` method from CartoDB.js, this JSON object will [look somewhat familiar](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#creating-visualizations-at-runtime). A layer source JSON object was also discussed in the [Map Academy course on CartoDB.js](http://academy.cartodb.com/courses/03-cartodbjs-ground-up/lesson-2.html#adding-multiple-layers-from-different-visualizations).

A major difference between what was previously seen in createLayer and the object above is the presence of the `"name"` key. This is where the term "named maps" comes from. The name of your map can be changed to whatever you want, but here we will just use `namedmap_tutorial`.

**Before moving on,** make sure that:

+ there is a table in your account named `named_map_tutorial_table`
+ the table is set to "private"
+ you have a file named `config.json` with the [JSON object above](#config-script) in it

Now that we have our private table and a config file that says how we want that data to be visualized, we need to send the information to the server. Make sure you have your API key on hand. You can get your API key through your [account dashboard](http://docs.cartodb.com/cartodb-editor.html#find-your-api-key).

Using the command line tool [curl](http://curl.haxx.se/), we create the map using an authenticated call. Scroll horizontally to see the full command. Also make sure that your working directory in your terminal is the same place where you stored `config.json`.

{% highlight sh %}
curl 'https://{your_account_name}.cartodb.com/api/v1/map/named?api_key={your_api_key}' -H 'Content-Type: application/json' -d @config.json
{% endhighlight %}

For instance, your API call might look like this:
{% highlight sh %}
curl 'https://documentation.cartodb.com/api/v1/map/named?api_key=01a418d3a45d1137699a4ee05297cb92aecce3f4' -H 'Content-Type: application/json' -d @config.json
{% endhighlight %}

A successful call will result in the following response from the server:
{% highlight javascript %}
{
  "template_id":"documentation@namedmap_tutorial"
}
{% endhighlight %}

This indicates that your map has been successfully created. The name after the &#64; symbol is referred to as the `template_name`.

Now we have the information from the server response needed to construct our public maps out of the private table `named_map_tutorial_table`. 

## 3. Creating named maps

Having already created a named map, we will now look at how to use the CartoDB.js library to bring the map's tiles to a webpage.

To create a basic version that has a basemap and interactivity on the data layer, we will use [createLayer](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#cartodbcartodblayer) along with the [Leaflet library](http://leafletjs.com) similar to what was done in the [second Map Academy lesson](http://academy.cartodb.com/courses/03-cartodbjs-ground-up/lesson-2.html) on CartoDB.js.

This is the recommended way to use named maps because the maps are instantiated on the fly so you do not need to worry about temporal URLs.

To get started, start with the [HTML template](https://github.com/CartoDB/cartodb.js/blob/gh-pages/examples/tutorials/named-maps-template.html) again, and place the following code between the `<script>` tags:

{% highlight javascript %}
function main() {
  // create leaflet map
  var map = L.map('map', { 
    zoomControl: false,
    scrollWheelZoom: false,
    center: [0, 0],
    zoomControl: true,
    zoom: 3
   });

  // add a base layer
  L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Stamen'
  }).addTo(map);

  // add cartodb layer with one sublayer
  cartodb.createLayer(map, {
    user_name: '{your_user_name}',
    type: 'namedmap',
    named_map: {
      name: "namedmap_tutorial",
      layers: [{
        layer_name: "t",
        interactivity: "cartodb_id, name, pop_max"
       }]
     }
    })
    .addTo(map)
    .done(function(layer) {
      layer.getSubLayer(0).setInteraction(true);

      // on mouseover
      layer.getSubLayer(0).on('featureOver', function(e, pos, pixel, data) {
        // print data to console log
        console.log("Event #" + data.cartodb_id + ", name " + data.name + ", max population: " + data.pop_max);
      });
 
      // show infowindows on click
      cdb.vis.Vis.addInfowindow(map, layer.getSubLayer(0), ['cartodb_id','name', 'pop_max']);
    });
}

window.onload = main; 
{% endhighlight %}

The only information you need to replace is the `user_name` value. Other than that, the layer source object already contains the name for map we created. Save the file and open it in your browser (File > Open...). It should look like the map at the <a href="#">top of this tutorial</a> and the code is [here](https://github.com/CartoDB/cartodb.js/blob/gh-pages/examples/tutorials/named-maps-example.html).


## 4. Managing named maps

Named maps can be created, instantiated, updated, and deleted. You can also list the named maps already created in your account. We already covered creating and instantiating a named map, so now we will look at the remaining options.

#### List named maps

{% highlight sh %}
curl -X GET 'https://{your_account_name}.cartodb.com/api/v1/map/named?api_key={your_api_key}'
{% endhighlight %}

**Example reponse**

{% highlight javascript %}
{
  "template_ids": [
    "documentation@namedmap_tutorial",
    "documentation@named_map_test",
    "documentation@other_data_table",
    "documentation@private_data"
    ]
}
{% endhighlight %}

Notice that the entries in the response are in the format `account_name`&#64;`template_name`.

#### Updating named maps

You can update a map as easily as you can create one. Just run the following command with the new config file.

{% highlight sh %}
curl -X PUT \
  'https://{your_account_name}.cartodb.com/api/v1/map/named/{template_name}?api_key={your_api_key}' \
  -H 'Content-Type: application/json' \
  -d @new_config.json
{% endhighlight %}

This would be useful if you later want to update your map with a different CartoCSS style or SQL statement. 

Copy your previous configuration file into a new file called `new_config.json`. Now change your `cartocss` key to the following instead, but use all other options previously used.

{% highlight css %}
#named_map_tutorial_table{ marker-fill-opacity: 0.5; marker-line-color: #c994c7; marker-line-width: 0; marker-line-opacity: 1; marker-placement: point; marker-type: ellipse; marker-width: 10; marker-fill: #dd1c77; marker-allow-overlap: true; marker-comp-op: multiply; }
{% endhighlight %}

Send your new config file to the server to update your map.

#### Deleting named maps

{% highlight sh %}
curl -X DELETE 'https://{your_account_name}.cartodb.com/api/v1/map/named/{template_name}?api_key={your_api_key}'
{% endhighlight %}

## Summary

#### Files used in this tutorial
1. [HTML template](https://github.com/CartoDB/cartodb.js/blob/gh-pages/examples/tutorials/named-maps-template.html)
2. [Named map example](https://github.com/CartoDB/cartodb.js/blob/gh-pages/examples/tutorials/named-maps-example.html)

## Moving forward

#### See also

+ Named maps documentation is in the [Maps API documentation page](http://docs.cartodb.com/cartodb-platform/maps-api.html)
+ [Anonymous maps](http://docs.cartodb.com/cartodb-platform/maps-api.html#anonymous-maps-1) are a similar type of map, but not from private data
+ Take your named maps further with [CartoDB.js's](http://docs.cartodb.com/cartodb-platform/cartodb-js.html) related methods:
    1. [layer.setAuthToken()](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#layersetauthtokenauthtoken)
	2. [layer.setParams()](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#layersetparamskey-value)
+ Need more info about CartoDB.js? Check out the [docs](http://docs.cartodb.com/cartodb-platform/cartodb-js.html), [tutorials](http://docs.cartodb.com/tutorials.html), and [Map Academy lessons](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html)
+ More info about [curl](http://curl.haxx.se/)

#### Improving our resources

Have suggestions on how to improve this lesson? Find typos or broken links?  Open an [issue](https://github.com/CartoDB/docs/issues) in the [docs repository](https://github.com/CartoDB/docs) or fork the repo and submit a pull request. Not familiar with GitHub? Check out [this StackExchange thread](http://stackoverflow.com/questions/3748272/introduction-to-git-and-practical-usage-patterns) for resources on how to get going.
