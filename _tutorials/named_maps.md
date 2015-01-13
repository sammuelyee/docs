---
layout: tutorials_item
title: 'Named Maps'
short_description: 'Make public maps with private data'
level: hard
time_needed: '20 minutes'
embed_url: 'http://bl.ocks.org/ohasselblad/raw/d1a45b8ff5e7bd90cd68/'
cartodbjs: true
---

## Summary

_Named maps_ allow you to make public maps out of private data. Unlike other maps created through our APIs, named maps need to be pre-configured; you set the SQL and CartoCSS ahead of time on the server, not in the browser as in normal CartoDB.js usage. Updates to and deletions of the map need to be run with future API calls. On the surface, named maps look the same as other maps created through CartoDB.js, but if you inspect how your browser interacts with the server, you will see that it only pulls the information that you pre-configure.

### Lesson goal 
By the end of this lesson, you will be able to create a public map with private data that has user interaction enabled on select columns of your data table. The map at the top of this page is a named map.

There are four steps:

1. Load data, make private
2. Construct config file
3. Create map
4. Manage map

### Objectives

1. Create a named map that allows for user interaction with infowindows
2. Manage named maps (create, update, list, and delete)

### Data
[Populated places dataset](https://common-data.cartodb.com/api/v2/sql?q=select%20*%20from%20ne_10m_populated_places_simple&filename=ne_10m_populated_places_simple&format=shp) accessible from CartoDB's [Common Data](http://docs.cartodb.com/cartodb-editor.html#common-data), which is pulled from [Natural Earth Data](http://www.naturalearthdata.com/downloads/10m-cultural-vectors/).

### Documentation

Named maps are part of CartoDB's [Maps API](http://docs.cartodb.com/cartodb-platform/maps-api.html#named-maps-1).

## Loading data, making table private

To get started, we'll be using the Populated Places data found in Common Data. Copy the following link and import it into your account:

{% highlight html %}
https://common-data.cartodb.com/api/v2/sql?q=select%20*%20from%20ne_10m_populated_places_simple&filename=ne_10m_populated_places_simple&format=shp
{% endhighlight %}

_Not sure how to import your data? You can import using the [Editor](http://docs.cartodb.com/cartodb-editor.html#importing-data) or the [SQL API](http://docs.cartodb.com/cartodb-platform/sql-api.html)._

Once the data is imported, set it to `private` (see [privacy setting](http://docs.cartodb.com/cartodb-editor.html#table-privacy-settings) for more information).

## Constructing a config file

Now that we have a private table to work from, we will style the data in the Editor and copy the CartoCSS code to use for the configuration file we will send to the server to setup the named map. You can use any style you would like, but I am using the following settings, and then copying them to the config file.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/named_maps/img1.png' | prepend: site.baseurl }}" alt="map stylings used for named map" /></p>

By clicking on the CartoCSS tab, you can see the stylings applied to the map. We will be needing this later.

Now open a text editor and paste the following text into it. Call the file `config.json`.

{% highlight javascript %}
{
  "version": "0.0.1",
  "name": "namedmap_tutorial",
  "auth": {
    "method": "open"
  },
  "layergroup": {
    "layers": [{
      "type": "named",
      "options": {
        "cartocss_version": "2.1.1",
        "cartocss": "#ne_10m_populated_places_simple{ marker-fill-opacity: 0.5; marker-line-color: #FFF; marker-line-width: 0; marker-line-opacity: 1; marker-placement: point; marker-type: ellipse; marker-width: 10; marker-fill: #FFCC00; marker-allow-overlap: true; marker-comp-op: multiply; }",
        "sql": "select * from namedmap_ex",
        "interactivity": ["cartodb_id", "mag"]
      }
    }]
  }
}
{% endhighlight %}

If you're familiar with the `cartodb.createLayer(...)` method from CartoDB.js, this JSON object will [look somewhat familiar](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#creating-visualizations-at-runtime).


## Making basic named map

## Making interactive named map

## Managing named maps

## Moving foward

### Files used in this tutorial

### See also

+ Named maps documentation is in the [Maps API documentation page](http://docs.cartodb.com/cartodb-platform/maps-api.html)
+ Need more info about CartoDB.js? Check out the [docs](http://docs.cartodb.com/cartodb-platform/cartodb-js.html), [tutorials](http://docs.cartodb.com/tutorials.html), and [Map Academy lessons](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html)
+ More info about [curl](http://curl.haxx.se/)

### Improving our resources

Have suggestions on how to improve this lesson? Find typos, broken links, etc.  Open a ticket in the [docs repository](https://github.com/CartoDB/docs) or fork the repo and submit a pull request. Not familiar with GitHub, check out [this StackExchange thread](http://stackoverflow.com/questions/3748272/introduction-to-git-and-practical-usage-patterns) for resources on how to get going.
