---
layout: tutorials_item
title: 'Toggle map view'
short_description: 'How to toggle the information being shown in your map with CartoDB.js'
level: medium
time_needed: '20 minutes'
embed_url: 'http://cartodb.github.com/cartodb.js/examples/tutorials/tutorial-toggle_map_view.html'
cartodbjs: true
---

## Summary

Here we are going to show you how to toggle different map states based on user actions, like clicking buttons. This tutorial will help you get familiar with integrating your CartoDB hosted data into your websites in a more dynamic way than just single layer maps. We will map a single dataset and then toggle on and off various portions of the data based on clicking a button.

## Getting started

We will use a template for making the process quicker and easier for you. [Download this file](http://cartodb.github.io/cartodb.js/examples/tutorials/tutorial-toggle_map_view-template.html), make a copy of it and call it as you want.

Open this file in your web browser. You should see a blank map and some buttons. Success! You can play around, but you should notice that the buttons don't do anything! Yet. That is fine. Now, open it in your code editor and let's get started.

For this tutorial we are going to use the Populated Places dataset from [Natural Earth](http://www.naturalearthdata.com). It is the same dataset we have used in the previous tutorials, so you can use the same table again if you already have it. To get it, all you have to do is log into CartoDB and click <span class="ui_element" data-element="common_data">Common data</span>. Now look for `Populated places` entry and click the <span class="ui_element" data-element="add_public_table">plus symbol</span>. CartoDB will build your new table and take you to it when finished.

## Adding your first CartoDB layer

You should now be comfortable with the method of adding layers to your CartoDB map. You will need the API URL for your map in CartoDB. You can find it by navigating in your CartoDB account to the `Populated places` table you just created, click the orange <span class="ui_element" data-element="visualize">Visualize</span> button on the top right of the page to create a visualization, and then click the green <span class="ui_element" data-element="publish">Publish</span> button in the top right of the page. If your table is private it will ask you to make it public, do so and then click Make viz public and share. Then, click the <span class="ui_element" data-element="share_api">API link</span> at the window that pops up. Click the <span class="ui_element" data-element="copy_to_clipboard">clipboard icon</span> to the right to copy your Viz JSON URL.

Head back over to your code editor and replace `layerUrl` value in the code below:

{% highlight javascript %}
var layerUrl = 'http://documentation.cartodb.com/api/v2/viz/9af23dd8-ea10-11e2-b5ac-5404a6a683d5/viz.json';

var sublayers = [];

cartodb.createLayer(map, layerUrl)
  .addTo(map)
  .on('done', function(layer) {
    // change the query for the first layer
    var subLayerOptions = {
      sql: "SELECT * FROM ne_10m_populated_places_simple",
      cartocss: "#ne_10m_populated_places_simple{marker-fill: #F84F40; marker-width: 8; marker-line-color: white; marker-line-width: 2; marker-clip: false; marker-allow-overlap: true;}"
    }

    var sublayer = layer.getSubLayer(0);

    sublayer.set(subLayerOptions);

    sublayers.push(sublayer);
  }).on('error', function() {
    //log the error
  });
{% endhighlight %}

Paste this entire block into your HTML file below where the MapBox layer is added to the map, but before the final closing curly braces, and save your file. Open it in your browser. You should now see the points of all the populated places in the world.

## Wiring up buttons

Now we want to create actions for the buttons on our map. To do so, we are going to use a little [jQuery](http://www.jquery.com/). CartoDB.js uses jQuery already, and when it detects that you haven't loaded it it makes it available for your use. That way there is no need to duplicate library imports. But don't worry, it will respect any JQuery version you optionally load elsewhere.

Next we are going to create a function to run everytime one of our buttons is pushed. Copy and paste the code below into your file, right beneath where we created our CartoDB layers.

{% highlight javascript %}
$('.button').click(function() {
  $('.button').removeClass('selected');
  $(this).addClass('selected');
  LayerActions[$(this).attr('id')]();
});
{% endhighlight %}

If you save your file and refresh your map, you'll notice only a small change: our buttons should now change style when you click them, indicating which is selected. This is a start. Now pay attention to this line:

{% highlight javascript %}
LayerActions[$(this).attr('id')]();
{% endhighlight %}

It is looking for an object with elements named the same as our button <span class="code_variable">id</span>. This is a handy way for storing our instructions for each button. Let's add the `LayerActions` object:

{% highlight javascript %}
var LayerActions = {
  all: function(){
    sublayers[0].setSQL("SELECT * FROM ne_10m_populated_places_simple");
    return true;
  },
  capitals: function(){
    sublayers[0].setSQL("SELECT * FROM ne_10m_populated_places_simple WHERE featurecla = 'Admin-0 capital'");
    return true;
  },
  megacities: function(){
    sublayers[0].setSQL("SELECT * FROM ne_10m_populated_places_simple WHERE megacity = 1");
    return true;
  }
}
{% endhighlight %}

Add the above lines somewhere before the line where `LayerActions` is used, as you will need to define the function LayerActions before using it in our buttons code. Save it and refresh your map. You should now see that the buttons are working to update your map. But why?

## Toggling functions

There are a few ways to toggle data using CartoDB.js. If you are using a single table, one of the easiest ways is to just update the SQL or CartoCSS of the layer already in view. That is what we do with the `LayerActions` functions above. When the button `Megacities` is clicked, we run the following:

{% highlight javascript %}
sublayers[0].setSQL("SELECT * FROM ne_10m_populated_places_simple WHERE megacity = 1");
{% endhighlight %}

The above updates our layer with a new SQL query, asking only for points where `megacity` equals 1. We could also use `setCartoCSS` to update a style, or if we need to update both at the same time we could do something like the following:

{% highlight javascript %}
sublayers[0].set({
  sql: "SELECT * FROM ne_10m_populated_places_simple WHERE megacity = 1",
  cartocss: "#ne_10m_populated_places_simple{ marker-fill: black; }"
});
{% endhighlight %}

Another way to toggle sublayers is to load two sublayers at the same time and then use `sublayers.show()` and `sublayers.hide()` functions to add and remove them from the map. This is best used if you have multiple datasets on the same visualization.

The code inside your script tags should finally look like this: 

{% highlight javascript %}
  var map;
    function init(){
  // initiate leaflet map
  map = new L.Map('map', { 
    center: [20,-20],
    zoom: 3
  })

  L.tileLayer('https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png', {
    attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
  }).addTo(map);

  var layerUrl = 'http://documentation.cartodb.com/api/v2/viz/9af23dd8-ea10-11e2-b5ac-5404a6a683d5/viz.json';

  var sublayers = [];

  cartodb.createLayer(map, layerUrl)
  .addTo(map)
  .on('done', function(layer) {
    // change the query for the first layer
    var subLayerOptions = {
      sql: "SELECT * FROM ne_10m_populated_places_simple",
      cartocss: "#ne_10m_populated_places_simple{marker-fill: #F84F40; marker-width: 8; marker-line-color: white; marker-line-width: 2; marker-clip: false; marker-allow-overlap: true;}"
    }

    var sublayer = layer.getSubLayer(0);

    sublayer.set(subLayerOptions);

    sublayers.push(sublayer);
  }).on('error', function() {
    //log the error
  });

  //we define the queries that will be performed when we click on the buttons, by modifying the SQL of our layer
  var LayerActions = {
    all: function(){
      sublayers[0].setSQL("SELECT * FROM ne_10m_populated_places_simple");
      return true;
    },
    capitals: function(){
      sublayers[0].setSQL("SELECT * FROM ne_10m_populated_places_simple WHERE featurecla = 'Admin-0 capital'");
      return true;
    },
    megacities: function() {
      sublayers[0].set({
        sql: "SELECT * FROM ne_10m_populated_places_simple WHERE megacity = 1",
        //as it is said, you can also add some CartoCSS code to make your points look like you want for the different queries
       // cartocss: "#ne_10m_populated_places_simple{ marker-fill: black; }"
      });
      return true;
    }
  }

  $('.button').click(function() {
    $('.button').removeClass('selected');
    $(this).addClass('selected');
    //this gets the id of the different buttons and calls to LayerActions which responds according to the selected id
    LayerActions[$(this).attr('id')]();
  });
}
{% endhighlight %}
