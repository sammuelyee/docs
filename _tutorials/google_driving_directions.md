---
layout: tutorials_item
title: 'Google Map Driving Directions Example'
short_description: 'Create a Google Map that generates driving directions from a point'
level: hard
time_needed: '30 minutes'
---

## Summary
This tutorial will show you how to use CartoDB, the [Google Maps JavaScript API v3](https://developers.google.com/maps/documentation/javascript/tutorial) and [Google Directions Service](https://developers.google.com/maps/documentation/javascript/directions) to create an interactive map that generates a driving direction route from a clicked point to a destination point. This tutorial is for users who are familiar with JavaScript and have mastered the basics of creating a map with CartoDB.js. If you're not familiar with CartoDB.js, checkout the [documentation](http://docs.cartodb.com/cartodb-platform/cartodb-js.html), [Map Academy course](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html) on CartoDB.js, or a basic [tutorial](http://docs.cartodb.com/tutorials/create_map_cartodbjs.html).

## The Data
We will be using a dataset of locations of public schools in San Francisco, California. The final map will generate a driving direction route to San Francisco’s Exploratorium museum from any public school location the user selects on the map by using Google's Directions API.

## Resources
* [Google Developer Console Help](https://developers.google.com/console/help/new)
* [Google Maps JavaScript API v3](https://developers.google.com/maps/documentation/javascript/tutorial)
* [Google Directions Service Docs](https://developers.google.com/maps/documentation/javascript/directions)

## Google's Terms of Service
Keep in mind that Google's Direction API has [usage limits](https://developers.google.com/maps/documentation/directions/#Limits) on the number of directions requests that can be made to the API. In addition, the Directions data must be used in conjunction with a Google map. For complete details on usage, refer to the [Maps API Terms of Service License Restrictions](https://developers.google.com/maps/terms#section_10_12).

## Getting Started 
First, copy the HTML example code stored here to a file in the text editor of your choice. 

In order to use Google's APIs, you will need a Google account, and to register your project in the [Google Developers Console](https://console.developers.google.com/). 

Once you have created a Google account and are logged in to the [Google Developers Console](https://console.developers.google.com/), you will need to create a new project, enable the Google Maps JavaScript API v3 for your new project, and grab your API key. For detailed steps, check out [Google's documentation on how to activate APIs](https://developers.google.com/console/help/new/#activatingapis) following steps 1-5.

Once you have your API key, refer to the HTML file you copied earlier. The Google Maps library is included after the style tags within the body of the page.

{% highlight html %}
  <body>
    <div id="map"></div>

    <!-- include google maps library -->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=INSERTYOURKEYHERE"></script>

    <!-- include cartodb.js library -->
    <script src="http://libs.cartocdn.com.s3.amazonaws.com/cartodb.js/v3/3.11/cartodb.js"></script>
{% endhighlight %}

Within the script tag for the Google Maps library, replace “INSERTYOURKEYHERE” with your API key.

## The Map
Let's walk through the code. 

Within the head tag of the HTML document, we have included some basic CSS styles for our map to render it as full screen, and we also included the CartoDB stylesheet.

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

We create our map and the JavaScript to generate the driving directions within the last script tag. A variable called `map` stores our map as an object so we can apply methods to it. The function `main()` will generate our map and driving directions and is called when the page is loaded.

This line of code creates our new Google Map:

{% highlight javascript %}
map = new google.maps.Map(document.getElementById("map"), myOptions); 
{% endhighlight %}

It takes our div element "map" and the options stored in the variable "myOptions," such as the coordinates that center our map, the zoom level and the type of Google Map we want.

Directions are calculated using a `DirectionsService` object, which makes requests to the Google Maps API Directions Service and returns completed results, which are handled via the `DirectionsRenderer` object.

{% highlight javascript %}
// Create services for later rendering of directions
var directionsDisplay = new google.maps.DirectionsRenderer();
directionsDisplay.setMap(map);
var directionsService = new google.maps.DirectionsService();
{% endhighlight %}

We will be generating directions to one location, the [Exploratorium](http://www.exploratorium.edu/).

{% highlight javascript %}
// The location of the Exploratorium
var exploratorium = new google.maps.LatLng(37.801434, -122.397561);
{% endhighlight %}

Our CartoDB data is stored within our viz.json data layer which we add to our map. Take a look at the JavaScript that generates our map and directions before we break this code down into it's smaller parts.

{% highlight javascript %}

// Our CartoDB visualization
var vizjson_url = "http://documentation.cartodb.com/api/v2/viz/4a885510-d6fb-11e4-aedb-0e4fddd5de28/viz.json";

cartodb.createLayer(map, vizjson_url)
       .addTo(map)
       .done(function(layers) {
              
          var subLayer = layers.getSubLayer(0);
                
        subLayer.setInteraction(true); // Interaction for that layer must be enabled
        cdb.vis.Vis.addCursorInteraction(map, subLayer); // undo with removeCursorInteraction

        // Setup our event when an object is clicked
        layers.on('featureClick', function(e, latlng, pos, data){

            var school = new google.maps.LatLng(latlng[0], latlng[1]);

            // our DirectionsRequest
            var request = {
                origin : school,
                destination : exploratorium,
                travelMode : google.maps.TravelMode.DRIVING
            };

            // use route method to generate directions
            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                }
            });
        );
    });
{% endhighlight %}

When a user selects a school location by clicking on one of the points on our map, we grab the coordinates generated by the `featureClick()` event and pass those coordinates to the Google Directions Service to generate the driving directions route. We enable interactivity for our CartoDB data layer and undo interaction for each data point when the user selects a new location. 

{% highlight javascript %}
subLayer.setInteraction(true); // Interaction for that layer must be enabled
cdb.vis.Vis.addCursorInteraction(map, subLayer); // undo with removeCursorInteraction

// Setup our event when an object is clicked
layers.on('featureClick', function(e, latlng, pos, data){
              
// store the location of the clicked school
var school = new google.maps.LatLng(latlng[0], latlng[1]);
{% endhighlight %}

In order to generate driving directions, we must send a request to the Google Directions Service using the `route()` method. Our request includes the origin of our trip, which is set to the clicked school, our destination which we set as the Exploratorium coordinates, and our [Travel Mode](https://developers.google.com/maps/documentation/javascript/directions#TravelModes). In this case, we want driving directions although Google provides other travel modes including bicycling and walking.

{% highlight javascript %}
// our DirectionsRequest
var request = {
    origin : school,
    destination : exploratorium,
    travelMode : google.maps.TravelMode.DRIVING
};
{% endhighlight %}

We pass our request to the Google `DirectionsService` object to generate the directions.

{% highlight javascript %}
// use route method to generate directions
directionsService.route(request, function(response, status) {
if (status == google.maps.DirectionsStatus.OK) {
directionsDisplay.setDirections(response);
    }
});
{% endhighlight %}

Earlier, we set the directionsDisplay to draw on our map using setMap(), which will draw the route once it is generated by Google Directions API.

{% highlight javascript %}
directionsDisplay.setMap(map);
{% endhighlight %}

This example works with private tables and generates directions based on the position the user clicks. If you need to generate directions from exact locations in your database, your dataset must be public. 

When a user selects a school location by clicking on one of the points on the map, we use a SQL query to get the latitude and longitude coordinates for the school from the CartoDB public dataset. We pass the coordinates to the Google Directions Service in order to generate the driving directions.

Here is the full code if you need directions generated from exact locations in your dataset.

{% highlight html %}
// Our CartoDB visualization
var vizjson_url = "http://documentation.cartodb.com/api/v2/viz/9f645d04-da1b-11e4-9cd9-0e0c41326911/viz.json";

cartodb.createLayer(map, vizjson_url)
       .addTo(map)
       .done(function(layers) {
          
    var subLayer = layers.getSubLayer(0);
            
    // Change our SQL applied to the layer to include Lat and Lon values in the response
    subLayer.set({"interactivity":"cartodb_id, lon, lat", "sql": "SELECT *, ST_X(the_geom) lon, ST_Y(the_geom) lat FROM schools_public_pt"})
            
    subLayer.setInteraction(true); // Interaction for that layer must be enabled
    cdb.vis.Vis.addCursorInteraction(map, subLayer); // undo with removeCursorInteraction

    // Setup our event when an object is clicked
    layers.on('featureClick', function(e, latlng, pos, data){
              
    // store the location of the clicked school
    var school = new google.maps.LatLng(data.lat, data.lon);

    // our DirectionsRequest
    var request = {
        origin : school,
        destination : exploratorium,
        travelMode : google.maps.TravelMode.DRIVING
    };

    // use route method to generate directions
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
              }
          });
        });
    });
{% endhighlight %}

That's it! For more information on Google's Directions Service, check out [Google's detailed documentation](https://developers.google.com/maps/documentation/javascript/directions).
