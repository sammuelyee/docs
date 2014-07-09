---
layout: tutorials_item
title: 'Query by distance'
short_description: 'Display data in a map depending on the position of the user'
level: medium
time_needed: '20 minutes'
embed_url: 'http://cartodb.github.com/cartodb.js/examples/tutorials/tutorial-query_by_distance.html'
cartodbjs: true
---

## Summary

This tutorial is going to build off many things you have seen in other tutorials, including geospatial SQL functions, CartDB.js techniques, and some basic CartoCSS techniques. In the end, we will build a simple map that finds the viewers location using a browser based Location API, and then queries for the closest big cities to that user. There is also a simple user-interface that lets the user select how many nearbye cities they want to see. Some features of this tutorial will rely on a modern browser.

## Getting started

We will use a template for making the process quicker and easier for you. [Download this file](http://cartodb.github.io/cartodb.js/examples/tutorials/tutorial-query_by_distance-template.html), make a copy of it and call it as you want.

Open this file in your web browser. You should see a blank map and some buttons. Success! You can play around, but you should notice that the buttons don't do anything! Yet. That is fine. Now, open it in your code editor and let's get started.

For this tutorial we are going to use the Populated Places dataset from [Natural Earth](http://www.naturalearthdata.com). It is the same dataset we have used in the previous tutorials, so you can use the same table again if you already have it. To get it, all you have to do is log into CartoDB and click <span class="ui_element" data-element="common_data">Common data</span>. Now look for `Populated places` entry and click the <span class="ui_element" data-element="add_public_table">plus symbol</span>. CartoDB will build your new table and take you to it when finished.

## Adding your first CartoDB layer

You should now be comfortable with the method of adding layers to your CartoDB map. You will need the API URL for your map in CartoDB. You can find it by navigating in your CartoDB account to the `Populated places` table you just created, selecting the <span class="ui_element" data-element="map_view">Map view</span>, then clicking <span class="ui_element" data-element="share">Share</span> and finally clicking <span class="ui_element" data-element="share_api">API</span>. Copy this link and paste it as the `layerUrl` value in the code below:

{% highlight javascript %}
var layerUrl = 'http://documentation.cartodb.com/api/v2/viz/9af23dd8-ea10-11e2-b5ac-5404a6a683d5/viz.json';

var sublayers = [];

cartodb.createLayer(map, layerUrl)
  .addTo(map)
  .on('done', function(layer) {
    // change the query for the first layer
    var subLayerOptions = {
      sql: "SELECT * FROM ne_10m_populated_p_2 LIMIT 2000",
      cartocss: "#ne_10m_populated_p_2{marker-fill: #F84F40; marker-width: 8; marker-line-color: white; marker-line-width: 2; marker-clip: false; marker-allow-overlap: true;}"
    }

    var sublayer = layer.getSubLayer(0);

    sublayer.set(subLayerOptions);

    sublayers.push(sublayer);
  }).on('error', function() {
    //log the error
  });
{% endhighlight %}

Paste this entire block into your HTML file below where the MapBox layer is added to the map, but before the final closing curly braces, and save your file. Open it in your browser. You should now see the points of all the populated places in the world.

## Detecting a user's location

This feature is not part of CartoDB, but instead is supported by most modern browsers. You may find it useful in some of your development, so we thought we would show you some basic functionality here.

We are going to add the following block of code to our JavaScript:

{% highlight javascript %}
// credit: http://html5doctor.com/finding-your-position-with-geolocation/
function detectUserLocation(){
  if (navigator.geolocation) {
    var timeoutVal = 10 * 1000 * 1000;
    navigator.geolocation.watchPosition(
      mapToPosition, 
      alertError,
      { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
    );
  }
  else {
    alert("Geolocation is not supported by this browser");
  }
  
  function alertError(error) {
    var errors = { 
      1: 'Permission denied',
      2: 'Position unavailable',
      3: 'Request timeout'
    };
    alert("Error: " + errors[error.code]);
  }
}
{% endhighlight %}

This function is going to first ask the user permission to get their location, and then if successful run a new function `mapToPosition` with the results. So we need a `mapToPosition` function. Above the `detectUserLocation` function add this:

{% highlight javascript %}
function mapToPosition(position) {
  lon = position.coords.longitude;
  lat = position.coords.latitude;
  map.setView(new L.LatLng(lat,lon), 7);
  new L.CircleMarker([lat,lon],{radius: 4}).addTo(map);
}
{% endhighlight %}

The final thing we need to do to make this work is run the `detectUserLocation` function. We can run it after the layer first loads. So we will change our layer loading function as follows:

{% highlight javascript %}
cartodb.createLayer(map, layerUrl)
  .addTo(map)
  .on('done', function(layer) {
    // change the query for the first layer
    var subLayerOptions = {
      sql: "SELECT * FROM ne_10m_populated_p_2 LIMIT 2000",
      cartocss: "#ne_10m_populated_p_2{marker-fill: #F84F40; marker-width: 8; marker-line-color: white; marker-line-width: 2; marker-clip: false; marker-allow-overlap: true;}"
    }

    var sublayer = layer.getSubLayer(0);

    sublayer.set(subLayerOptions);

    sublayers.push(sublayer);
    detectUserLocation();
  }).on('error', function() {
    //log the error
  });
{% endhighlight %}

Save your  file and reload your browser. It should now ask your permission to track your location. After you accept it should draw a small marker where you are located and zoom in a bit. You may have to wait some seconds until the geolocation process is finished. Please note there is a known issue running this as a local file in your Chrome browser.

## Updating our visualization with new data

Next we are going to do something interesting with the user's location data; query for the nearest N populated places to the user. Add the following function:

{% highlight javascript %}
var lon,
    lat,
    total = 10;

function updateQuery() {
  sublayers[0].set({
    sql: "WITH cities AS (SELECT cartodb_id, the_geom, the_geom_webmercator, name FROM ne_10m_populated_p_2 ORDER BY the_geom <-> ST_SetSRID(ST_MakePoint("+lon+","+lat+"),4326) ASC LIMIT "+total+") SELECT null as cartodb_id, ST_MakeLine(ST_Transform(ST_SetSRID(ST_MakePoint("+lon+","+lat+"),4326),3857),the_geom_webmercator) as the_geom_webmercator, null as name FROM cities UNION ALL SELECT cartodb_id, the_geom_webmercator, name FROM cities",
    cartocss: "#ne_10m_populated_p_2{[mapnik-geometry-type = 1]{text-name: [name]; text-face-name: 'DejaVu Sans Book'; text-size: 12; text-fill: #000; text-allow-overlap: false; text-halo-fill: #FFF; text-halo-radius: 2;} [mapnik-geometry-type = 2]{line-color: white; line-opacity: 0.5;} } "
  });
}
{% endhighlight %}

This new function is going to do a few things for us. First of all, it is going to update the query being run on the dataset, asking for only the nearest 10 populated places to the person. That is done with this portion of the query:

{% highlight sql %}
SELECT
 cartodb_id, the_geom, the_geom_webmercator, name
FROM ne_10m_populated_p_2
ORDER BY the_geom <-> ST_SetSRID(ST_MakePoint(lon,lat),4326) ASC
LIMIT total
{% endhighlight %}

The `lon` & `lat` variables are being set by the function that locates the user, and `total` variable defaults to 10. We are also adding a few stylistic flares. We add a bit of SQL that creates a line from the user location to the populated place:

{% highlight sql %}
ST_MakeLine(ST_Transform(ST_SetSRID(ST_MakePoint(lon, lat), 4326), 3857), the_geom_webmercator) as the_geom_webmercator
{% endhighlight %}

Now we'll have both the location of the city and a nice line to connect it to our center location. In our CartoCSS we use two different styles, one for markers and one for lines, so we can draw it all on the same map.

We still need to run the `updateQuery` function. To do so, let's update `mapToPosition` to run `updateQuery` when new coordinates are determined. Rewrite it as follows:

{% highlight javascript %}
function mapToPosition(position){
  lon = position.coords.longitude;
  lat = position.coords.latitude;
  updateQuery();
  map.setView(new L.LatLng(lat,lon), 7);
  new L.CircleMarker([lat,lon],{radius: 4}).addTo(map);
}
{% endhighlight %}

## Wiring up click events

Now we want to create actions for the buttons on our map. To do so, we are going to use [jQuery](http://www.jquery.com/). CartoDB.js uses it already, and when it detects that you haven't loaded it, it makes it available for your use. That way there is no need to duplicate library imports. But don't worry: it will respect any jQuery version you optionally load elsewhere.

We only need to do two things: update our total variable based on the button clicked and then run `updateQuery` to change the number of populated places displayed on the map. Copy and paste the below code into your code.


{% highlight javascript %}
$('.button').click(function() {
  $('.button').removeClass('selected'); $(this).addClass('selected');
  total = $(this).attr('id');
  updateQuery();
})
{% endhighlight %}

That's it! Save your file again and refresh your browser. You should now find that your four buttons are active. If you click 100 you will find the nearest 100 populated places to you.
