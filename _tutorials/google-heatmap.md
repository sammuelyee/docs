---
layout: tutorials_item
title: 'Google Heatmap Visualization'
short_description: 'Create a Google heatmap visualization'
level: hard
time_needed: '30 minutes'
---

## Summary
This tutorial will show you how to create a Google heatmap visualization using CartoDB, and the [Google Visualization Library](https://developers.google.com/maps/documentation/javascript/visualization) (which is part of the [Google Maps JavaScript API v3.](https://developers.google.com/maps/documentation/javascript/tutorial)) A heatmap visualization shows intensity of data with areas of greater color intensity indicating greater density of data. Google's heatmap layer adds a colored overlay to a map. By default, areas of greater intensity are colored red and areas of lower intensity are green.

This tutorial is for users who are familiar with JavaScript and have mastered the basics of creating a map with CartoDB.js. If you're not familiar with CartoDB.js, checkout the [documentation](http://docs.cartodb.com/cartodb-platform/cartodb-js.html), [Map Academy course](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html) on CartoDB.js, or a basic [tutorial](http://docs.cartodb.com/tutorials/create_map_cartodbjs.html).

You can also create heatmaps using CartoDB. Check out this tutorial on how to use the [CartoDB Editor to create heatmaps](http://docs.cartodb.com/tutorials/heatmap.html).

## The Data
This tutorial uses a dataset containing coordinates for bike trips made in New York City. The final map will generate a Google heatmap layer using our bike trip data. If you want to work from your own account, [import the data](https://documentation.cartodb.com/viz/d5b846c0-da31-11e4-b74f-0e4fddd5de28/table), style it to your liking, and grab the viz.json file for later. Alternatively, you can use the viz.json files we link to below as an example.

## Resources
* [Google Developer Console Help](https://developers.google.com/console/help/new)
* [Google Maps JavaScript API v3](https://developers.google.com/maps/documentation/javascript/tutorial)
* [Google Visualization Library](https://developers.google.com/maps/documentation/javascript/visualization)
* [Google Heatmap Documentation](https://developers.google.com/maps/documentation/javascript/heatmaplayer)

## Google's Terms of Service
When using Google's APIs, you agree to abide by their [Terms of Service](https://developers.google.com/maps/terms). Also refer to Google Maps JavaScript API v3 documentation on [Usage Limits and Billing](https://developers.google.com/maps/documentation/javascript/usage).

## Getting Started 
First, copy the html example code stored here to a file in the text editor of your choice. 

In order to use Google’s APIs, you will need a Google account, and to register your project in the [Google Developers Console](https://console.developers.google.com/). 

Once you have created a Google account and are logged in to the [Google Developers Console](https://console.developers.google.com/), you will need to create a new project, enable the Google Maps JavaScript API v3 for your new project, and grab your API key. For detailed steps, check out [Google's documentation on how to activate APIs](https://developers.google.com/console/help/new/#activatingapis) following steps 1-5.

Once you have your API key, refer to the html file you copied earlier. The Google maps library is included after the style tags within the body of the page.

{% highlight html %}
<body>
<div id="map"></div>

<!-- include google maps library -->
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=INSERTYOURKEYHERE"></script>

<!-- include cartodb.js library -->
<script src="http://libs.cartocdn.com/cartodb.js/v3/3.13/cartodb.js"></script>
{% endhighlight %}

Within the script tag for the google maps library, replace “INSERTYOURKEYHERE” with your API key.

## The Heatmap
Let’s walk through the code. 

Within the head tag of the body, we have included some basic CSS styles for our map to render it as full screen, and we
also include the CartoDB stylesheet.

{% highlight html %}
<style>
  html, body, #map {
    height: 100%;
    padding: 0;
    margin: 0;
  }
</style>
{% endhighlight %}

Within the body of the page, we have an empty div element with an id of “map,” which we will use to store our map. 

{% highlight html %}
<div id="map"></div>
{% endhighlight %}

The Google Heatmap layer is part of the Google Visualization library which is not loaded by default with the Google Maps JavaScript API. The Google Visualization library must be included in addition to the Google Maps JavaScript API. 

{% highlight html %}
<!-- include google maps library -->
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=INSERTYOURAPIKEYHERE"></script>

<!-- include google visualization library -->
<script type="text/javascript"
  src="https://maps.googleapis.com/maps/api/js?libraries=visualization&sensor=true_or_false"></script>

<!-- include cartodb.js library -->
<script src="http://libs.cartocdn.com.s3.amazonaws.com/cartodb.js/v3/3.12/cartodb.js"></script>
{% endhighlight %}

Within the last script tag, we create our heatmap using our New York City bike trip data. A variable called map stores our map as an object so we can apply methods to it. The function main() will generate our map and driving directions and is called when the page is loaded.

This line of code creates our new Google map:

{% highlight html %}
map = new google.maps.Map(document.getElementById("map"), myOptions); 
{% endhighlight %}

It takes our div element “map” and the options stored in the variable “myOptions,” such as the coordinates that center our map, the zoom level and the type of Google Map we want, in this case a Google satellite map.

CartoDB has a SQL API to query and retrieve data from a CartoDB dataset. [CartoDB.js provides a wrapper](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#getting-data-with-sql) to make SQL queries for data from a CartoDB dataset. 

cartoDB.SQL is a class that allows us to access data stored in a CartoDB table. You will need to provide the user name associated with the account that contains your CartoDB dataset and the format for the dataset (geoJSON). In the example code, we are using CartoDB's documentation account.

We use sql.execute() to run a SQL query that allows us to select the cartodb_id and the_geom data from our New York City bike trips dataset. Sql.execute returns our data as a JavaScript geoJSON object.

{% highlight html %}
var sql = cartodb.SQL({ user: 'documentation', format: 'geojson'});

sql.execute("SELECT cartodb_id, the_geom FROM cleveland_spring_points_281_29").done(function(data) {

data = data.features.map(function(r) {
    return new google.maps.LatLng(r.geometry.coordinates[1], r.geometry.coordinates[0]) 
});

var pointArray = new google.maps.MVCArray(data);

heatmap = new google.maps.visualization.HeatmapLayer({
data: pointArray
});

heatmap.set('radius', heatmap.get('radius') ? null : 20);
heatmap.set('opacity', heatmap.get('opacity') ? null : .8);

heatmap.setMap(map);
});
{% endhighlight %}

Let's break the above code down further. 

Once our SQL query is done executing and we have our data, we pull out the coordinates from the geoJSON object, and store as an array of [LatLng](https://developers.google.com/maps/documentation/javascript/reference#LatLng) objects using the [Google Maps LatLng class](https://developers.google.com/maps/documentation/javascript/reference#LatLng). To add a Heatmap layer to our map, we go a step further and turn our array into an MVCArray.

{% highlight html %}
data = data.features.map(function(r) {
    return new google.maps.LatLng(r.geometry.coordinates[1], r.geometry.coordinates[0]) 
});

var pointArray = new google.maps.MVCArray(data);
{% endhighlight %}

Lastly, we create a new HeatmapLayer object and pass it our data in the form of the MVCArray. The heatmap can be further customized by setting the [HeatmapLayerOptions](https://developers.google.com/maps/documentation/javascript/reference#HeatmapLayerOptions).

{% highlight html %}
heatmap = new google.maps.visualization.HeatmapLayer({
data: pointArray
});

heatmap.set('radius', heatmap.get('radius') ? null : 20);
heatmap.set('opacity', heatmap.get('opacity') ? null : .8);

heatmap.setMap(map);
{% endhighlight %}

That's it! For more information on Google's Heatmaps, check out [Google's detailed documentation](https://developers.google.com/maps/documentation/javascript/heatmaplayer#overview).
