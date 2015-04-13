---
layout: tutorials_item
title: 'Create your first map with CartoDB.js'
short_description: 'Learn how to use CartoDB.js to build your first client-side map'
level: medium
time_needed: '10 minutes'
embed_url: '//cartodb.github.com/cartodb.js/examples/tutorials/tutorial-1.html'
---

## Summary

In this tutorial, we are going to show you how to create a basic map of your CartoDB data using cartodb.js. We'll walk you through creating a map, using the Viz JSON link to your table, and customizing SQL and CartoCSS for your maps.

CartoDB.js tutorials will require some knowledge about HTML, and Javascript. If you haven't had a chance to start learning some of these prerequisites, we recommend you browse [StackOverflow](http://www.stackoverflow.com) for some suggested reading and tutorials.

## Getting started

Let's start with a sample HTML document. [Download the zipfile](http://cartodb.s3.amazonaws.com/static/tutorial_files/cartodbjs_tutorial_create_map.zip), unzip it, make a copy of `template.html` and call it `tutorial-1.html`. Now open this file in your web browser. You should see is a blank, black, canvas. Success!

Now, open `tutorial-1.html` in your code editor. Let's take a look at a couple important things.

## Adding your first CartoDB layer

Using the new CartoDB.js library makes adding layers a breeze. The first thing we are going to need is the layer Viz JSON URL. For the moment we will use one from a demo. Add a variable containing the URL beneath the map initializer on line 17.

{% highlight javascript %}
var layerUrl = 'http://documentation.cartodb.com/api/v2/viz/836e37ca-085a-11e4-8834-0edbca4b5057/viz.json';
{% endhighlight %}

Now, our Javascript code within `tutorial-1.html` should look like this:

{% highlight javascript %}
var map;
function init(){
  // initiate leaflet map
  map = new L.Map('cartodb-map', {
    center: [0,0],
    zoom: 2
  })

  var layerUrl = 'http://documentation.cartodb.com/api/v2/viz/836e37ca-085a-11e4-8834-0edbca4b5057/viz.json';
}
{% endhighlight %}

Next, we need to tell CartoDB.js to load the layer on the map. We do this using the `createLayer` method:

{% highlight javascript %}
cartodb.createLayer(map, layerUrl)
  .addTo(map)
  .on('done', function(layer) {
  }).on('error', function() {
    //log the error
  });
{% endhighlight %}

Go ahead and add this below the line where you create the `layerUrl` variable. So now, the complete Javascript portion of your file should look like this:

{% highlight javascript %}
var map;
function init(){
  // initiate leaflet map
  map = new L.Map('cartodb-map', {
    center: [0,0],
    zoom: 2
  })

  var layerUrl = 'http://documentation.cartodb.com/api/v2/viz/836e37ca-085a-11e4-8834-0edbca4b5057/viz.json';

  cartodb.createLayer(map, layerUrl)
    .addTo(map)
    .on('done', function(layer) {

    }).on('error', function() {
      //log the error
    });
}
{% endhighlight %}

Save your `tutorial-1.html` file. Open it, or refresh it in your browser. You should be greeted by a great big green go light!

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/create_map_cartodbjs/img1.png' | prepend: site.baseurl }}" alt="First map" /></p>

## Using your own layer

### Data

For this tutorial, we are going to use the Populated Places dataset from [Natural Earth Data](http://www.naturalearthdata.com). To get it, all you have to do is log into your CartoDB account. Click <span class="ui_element" data-element="common_data">Common data</span> in the right-hand column. In the window that pops up, click `Populated places`. CartoDB will build a new table with this data for you, and take you to it when finished.

### Getting your map Viz JSON link

Now that we have our data, it is time to swap out the big green go light with your own data.

From your new table, click the orange <span class="ui_element" data-element="visualize">Visualize</span> button on the top right of the page to create a visualization, and then click the green <span class="ui_element" data-element="publish">Publish</span> button in the top right of the page. If your table is private it will ask you to make it public, do so and then click Make viz public and share. Then, click the <span class="ui_element" data-element="share_api">API link</span> at the window that pops up. Click the <span class="ui_element" data-element="copy_to_clipboard">clipboard icon</span> to the right to copy your Viz JSON URL.

Head back over to your code editor and replace `layerUrl` value with your new link. Save your changes and refresh the `tutorial-1.html` page in your browser. You should see all markers from your populated places table in your own map:

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/create_map_cartodbjs/img2.png' | prepend: site.baseurl }}" alt="Populated places map" /></p>

## Adding client side SQL and CartoCSS

### SQL

You can define SQL from within your CartoDB account UI for tables, but often it is handy to completely control the SQL from within the code you are writing. Doing it with CartoDB.js is simple: we are just going to pass options to CartoDB.js when we initiate our layer.

A nice and clean way to do it is to create a `subLayerOptions` object, just like we created our `layerUrl`. Add this below the line where we create `layerUrl`:

{% highlight javascript %}
var subLayerOptions = {
  sql: "SELECT * FROM example_cartodbjs_1 where adm0_a3 = 'USA'"
}
{% endhighlight %}

You will notice a few things. One, inside the `subLayerOptions` we are passing a `query` value. This is going to be the query run against the table when the map is loaded. If you aren't yet familiar with SQL you should take a look at some of the [main CartoDB tutorials]({{ '/tutorials' | prepend: site.baseurl }}).

After adding the above to your code, you also need to pass it to the subLayer when we add the layer to our new map. Change the empty line under:

{% highlight javascript %}
.on('done', function(layer) {

}).on('error', function() {
{% endhighlight %}

to now look like:

{% highlight javascript %}
.on('done', function(layer) {
  layer.getSubLayer(0).set(subLayerOptions);
}).on('error', function() {
{% endhighlight %}

Save your `tutorial-1.html` file and refresh your browser. Your map should now only show populated places in the United States.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/create_map_cartodbjs/img3.png' | prepend: site.baseurl }}" alt="USA map" /></p>

### CartoCSS

Next, let's change our CartoCSS style a bit. Just like SQL, you can set CartoCSS in the CartoDB UI and have it show up here on the map. But we want to set it from the code though. To do so, let's modify our `layerOptions` object as follows:

{% highlight javascript %}
var subLayerOptions = {
  sql: "SELECT * FROM example_cartodbjs_1 where adm0_a3 = 'USA'",
  cartocss: "#example_cartodbjs_1{marker-fill: #109DCD; marker-width: 5; marker-line-color: white; marker-line-width: 0;}"
}
{% endhighlight %}

Here, we are just going to set the markers to generic red color. Save your `template-1.html` and reload it in the browser.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/create_map_cartodbjs/img4.png' | prepend: site.baseurl }}" alt="USA map styled" /></p>

## Adding a baselayer

The black background looks okay, but if you want to add more context to your data, it helps to add a baselayer. If you've used [Google Maps](http://maps.google.com), you are probably familiar with Street View, Terrain and the Satellite layer. Since we are using [Leaflet](http://leafletjs.com/) for our map here, we will instead use one of the baselayers provided by [Mapbox](http://mapbox.com/). To do so, just add the following before the line where you assign the `layerUrl`.

{% highlight javascript %}
L.tileLayer('https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png', {
  attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
}).addTo(map);
{% endhighlight %}

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/create_map_cartodbjs/img5.png' | prepend: site.baseurl }}" alt="USA map styled with baselayer" /></p>

Save your file. Now when you refresh your map, you should see Mapbox's street map rendered beneith your data.

Congratulations, you now have the basics for creating maps in your webpages. Check out the other tutorials for information on infowindows, click handlers, and some more advanced methods for using CartoDB.js.

## A note on CartoDB.js and the content delivery network (CDNs)

We've made CartoDB.js available through a CDN for you to use. Linking to the CDN version of the library means you'll never have to host it locally and your site visitors will be able to load these files the fastest way possible. You can see these libraries being loaded:

{% highlight html %}
<link rel="stylesheet" href="http://libs.cartocdn.com/cartodb.js/v3/themes/css/cartodb.css" />
<script src="http://libs.cartocdn.com/cartodb.js/v3/cartodb.js"></script>
{% endhighlight %}

The first is a CSS file that will help you render both the map and other things, such as infowindows. The second file is the library itself. Here, we are loading its most recent available version. You can find what that version is by visiting the [GitHub code repository](https://github.com/CartoDB/cartodb.js/) or by reading the first line in the [uncompressed library](http://libs.cartocdn.com/cartodb.js/v3/cartodb.uncompressed.js).

If you are using the CartoDB.js library on live and tested code, we recommend to link directly the version your code has been tested on. This will ensure that no changes we make in the future will disrupt your project. To do so, you simply add the specific version number to the URLs, as in:

{% highlight html %}
<link rel="stylesheet" href="http://libs.cartocdn.com/cartodb.js/v2/2.0.10/themes/css/cartodb.css" />
<script src="http://libs.cartocdn.com/cartodb.js/v2/2.0.10/cartodb.js"></script>
{% endhighlight %}
