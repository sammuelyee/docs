---
layout: tutorials_item
title: 'Create an intensity map from point data'
short_description: 'Vizualize point intensity on a map playing with colors, transparency and multi-styling'
level: medium
time_needed: '10 minutes'
embed_url: 'http://documentation.cartodb.com/viz/75b90cd6-e9cf-11e2-8be0-5404a6a683d5/embed_map?title=false&description=false&search=false&shareable=false&cartodb_logo=false&layer_selector=false&scrollwheel=false&sql=&sw_lat=41.71598029940931&sw_lon=-88.516845703125&ne_lat=42.09210825254959&ne_lon=-86.8963623046875&height=300&id=cartodb-1373508816889'
---

## Summary

In this tutorial we are going to show you how to use some advanced styling techniques to view your data in a new way. The outcome will be an intensity map of points data. We will then show you how to change your baselayer style to better view this new style.

## Getting the data

We are going to use data from 2007-2009 bicycle crash reports in Chicago. This is a really interesting dataset that can be used for a lot of reasons. The data was originally collected by the Illinois Department of Transportation and the most up-to-date datasets can be found over at [Chicago Crashes](http://chicagocrashes.org). We have a version of it available for you [here](http://cartodb.s3.amazonaws.com/static/crashes_2007_2009.zip).

Start by uploading the data to your CartoDB account. After it has uploaded you should have a table called, `crashes_2007_2009`. Click the <span class="ui_element" data-element="table_name">table name</span> and change it to `crashes_2007_2009_intensity`.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/intensity_map/img1.png' | prepend: site.baseurl }}" alt="Basic map" /></p>

## Changing your baselayer

For this map we are going to want a darker basemap. We will just use one of the existing basemaps: the dark map from Google Maps. To change the basemap of your current map just open the <span class="ui_element" data-element="map_view">Map View</span>, then click the <span class="ui_element" data-element="change_baselayer">Baselayer Selector</span> and select `GMaps Dark`.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/intensity_map/img2.png' | prepend: site.baseurl }}" alt="Dark baselayer" /></p>

## Styling the data

If you take a look at the map now you should just see a big cloud of points over the Chicago streets. Each point represents a cycling accident over the 2 year span starting in 2007.

What we want instead is to show some representation of intensity. Click the <span class="ui_element" data-element="style_option">Style option</span> on the right of the map. Here you can see some preset style methods, we are going to make something of our own. To do this open the <span class="ui_element" data-element="carto_tab">CartoCSS option</span>. The default style that you see on the map is the one you see written here:

{% highlight scss %}
#crashes_2007_2009_intensity {
  marker-fill: #FF6600;
  marker-opacity: 1;
  marker-width: 8;
  marker-line-color: white;
  marker-line-width: 3;
  marker-line-opacity: 0.9;
  marker-placement: point;
  marker-type: ellipse;
  marker-allow-overlap: true;
}
{% endhighlight %}

We are now going to change our style to this:

{% highlight scss %}
#crashes_2007_2009_intensity {
  marker-fill: #11ff66;
  marker-opacity: 0.04;
  marker-width:18;
  marker-line-color: white;
  marker-line-width: 0;
  marker-line-opacity: 0.0;
  marker-placement: point;
  marker-type: ellipse;
  marker-allow-overlap: true;
}
{% endhighlight %}

Hit <span class="ui_element" data-element="apply_style">Apply style</span>. We've done a few things here. First, we changed our color to a green color. Second, we increased the size and decreased the opacity of the marker. We also removed the border line.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/intensity_map/img3.png' | prepend: site.baseurl }}" alt="First styling" /></p>

### Multiple styles

Already we can see some of the intensity of the data on our map. Now, let's add two styles to each point. You can do this by telling CartoDB two different styles but naming one something different. There are two ways you can do this, each useful under different circumstances. Using the first method, you can add a name to your style by adding `::name` after the namespace declaration, like this:

{% highlight scss %}
#crashes_2007_2009_intensity::green {
  marker-fill: #11ff66;
  marker-opacity: 0.04;
  marker-width:18;
  marker-line-color: white;
  marker-line-width: 0;
  marker-line-opacity: 0.0;
  marker-placement: point;
  marker-type: ellipse;
  marker-allow-overlap: true;
}
{% endhighlight %}

Now I've named our first style `green`. Next, let's add a second style above it like this:

{% highlight scss %}
#crashes_2007_2009_intensity {
  marker-fill: transparent;
  marker-opacity: 1.0;
  marker-width: 27;
  marker-line-color: #00f6ff;
  marker-line-width: 24;
  marker-line-opacity: 0.02;
  marker-placement: point;
  marker-type: ellipse;
  marker-allow-overlap: true;
}

#crashes_2007_2009_intensity::green {
  marker-fill: #11ff66;
  marker-opacity: 0.04;
  marker-width:18;
  marker-line-color: white;
  marker-line-width: 0;
  marker-line-opacity: 0.0;
  marker-placement: point;
  marker-type: ellipse;
  marker-allow-overlap: true;
}
{% endhighlight %}

This is a very useful way for applying multiple styles for the same features. However, it requires the server to draw the layer twice, once for the top style and again for all features using the second style. There is another way to combine multiple styles that allows the server to apply the multiple styles in a single pass over your data. To do this, you would instead use style instances, for each parameter, as in `instance_name/marker-fill`. Let's an example with our data:

{% highlight scss %}
#crashes_2007_2009_intensity {
  first/marker-fill: #0011cc;
  first/marker-opacity: 0.01;
  first/marker-width: 80;
  first/marker-line-width: 0;
  first/marker-placement: point;
  first/marker-allow-overlap: true;
  first/marker-comp-op: lighten;

  second/marker-fill: #00cc11;
  second/marker-opacity: 0.02;
  second/marker-width:50;
  second/marker-line-width: 0;
  second/marker-placement: point;
  second/marker-allow-overlap: true;
  second/marker-comp-op: lighten ;
}
{% endhighlight %}

Hit <span class="ui_element" data-element="apply_style">Apply style</span>. Great, now you have two distinct styles being applied at the same time for each point on your map. The map should be getting more interesting now. You can actually add more than two styles at a time to the same point (same goes for polygons and linestrings). Using the first method, you could add another namespace, such as `::second`. For the method we are now using, you just come up with a third instance name. Let's add a third by adding a new style to the bottom of the list:

{% highlight scss %}
#crashes_2007_2009_intensity {
  first/marker-fill: #0011cc;
  first/marker-opacity: 0.01;
  first/marker-width: 80;
  first/marker-line-width: 0;
  first/marker-placement: point;
  first/marker-allow-overlap: true;
  first/marker-comp-op: lighten;

  second/marker-fill: #00cc11;
  second/marker-opacity: 0.02;
  second/marker-width:50;
  second/marker-line-width: 0;
  second/marker-placement: point;
  second/marker-allow-overlap: true;
  second/marker-comp-op: lighten ;

  third/marker-fill: #00ff00;
  third/marker-opacity: 0.04;
  third/marker-width:20;
  third/marker-line-width: 0;
  third/marker-placement: point;
  third/marker-allow-overlap: true;
  third/marker-comp-op: lighten ;
}
{% endhighlight %}

Hit <span class="ui_element" data-element="apply_style">Apply style</span>. Great! you should now be seeing an interesting intensity cloud in your map!

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/intensity_map/img4.png' | prepend: site.baseurl }}" alt="Final styling" /></p>
