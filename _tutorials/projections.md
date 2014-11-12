---
layout: tutorials_item
title: 'Projections, the_geom and the_geom_webmercator'
short_description: 'Learn how to use the_geom and the_geom_webmercator to make your maps more dynamic!'
level: hard
time_needed: '30 minutes'
embed_url: 'http://documentation.cartodb.com/viz/008b3ec6-02c3-11e4-b687-0edbca4b5057/embed_map?title=false&description=false&search=false&shareable=false&cartodb_logo=false&layer_selector=false&scrollwheel=false&sql=SELECT%0A%09cartodb_id%2C%0A%09name%2C%0A%09ST_Transform(ST_SnapToGrid(the_geom%2C%204%2C%204)%2C%203857)%20%0AAS%20the_geom_webmercator%0AFROM%20ne_10m_populated_p_1&zoom=2&center_lat=10.14193168613103&center_lon=0.703125'
---

## Summary

Not all geospatial data is stored the same way. One of the more common differences is a data source's geospatial projection. A common way we are all most used to talking about geospatial data is latitude and longitude. Latitude-longitude describes a point on the closely spherical Earth. However, maps are often made that twist and distort the surface of the world in order to make it lie flat on paper or in the browser and show all the required parts of the world. So when we say, projection, we are talking about which of those distortions is being used in a dataset. In CartoDB, we store all your geometries in a single projection called WGS84 using `the_geom` column. No matter what projection your data is originally in, if we can, we convert it to this familiar Latitude and Longitude based system. It makes it easy and straight forward for you to manipulate your data as needed.

Something different goes on when we need to show your data on a map. For Leaflet, we use a different projection called Web Mercator. Web Mercator allows us to quickly turn your data into pixels on the map. To make it even faster, we prestore Web Mercator versions of all your data in a hidden column called, `the_geom_webmercator`. Any time you insert or update geometries in your `the_geom` column, we update the hidden `the_geom_webmercator` column behind the scenes.

By doing these transformations, we make it really simple for you to manage and display your data without thinking much about projections. It also adds a requirement for any custom queries you create where you want to show the result on a map: you must include `the_geom_webmercator` in your results. Doing so is easy, so let's take a look.

## Introduction to the_geom_webmercator

Start by loading in some sample data from CartDB. From your dashboard, go to <span class="ui_element" data-element="common_data">Common data</span> and add 'Populated places' to your dashboard by clicking the <span class="ui_element" data-element="add_public_table">plus symbol</span>. CartoDB will now load this data and take you to the result. Make sure your table is called `ne_10m_populated_p`.

Let's start by looking at the <span class="ui_element" data-element="map_view">Map View</span>. What you should see are hundreds of points all over the world. If you click on any of the points, you'll see an infowindow with the data associated with the point you clicked. Now, switch back to your <span class="ui_element" data-element="table_view">Table view</span>.

In your table, you should see `the_geom` column. If you double click one of the cells in this column, you'll see that it is stored in Longitude-Latitude pairs. Notice the order, in CartoDB everything works the same way that you commonly do in math X then Y. If you think about the X, Y of your coordinates it would be Longitude-Latitude, not the other way around. Scroll to the right through the table, you'll notice that we don't see `the_geom_webmercator` anyplace! This is fine, let's find it.

Click the <span class="ui_element" data-element="sql_option">SQL option</span> on the right. Replace the `*` with `the_geom_webmercator` as follows,

{% highlight sql %}
SELECT the_geom_webmercator
FROM ne_10m_populated_p
{% endhighlight %}

Click <span class="ui_element" data-element="apply_query">Apply query</span>. The result that comes back should be a long set of rows containing data. Great! So there is a column called `the_geom_webmercator` in your table, we just couldn't see it without asking for it explicitly.

Click <span class="ui_element" data-element="map_view">Map View</span> again. You'll notice that all your points are still there! This is because CartoDB is drawing your maps with the data in `the_geom_webmercator` column. Click the SQL button again and replace `the_geom_webmercator` with just, `the_geom`, and hit <span class="ui_element" data-element="apply_query">Apply query</span>.

{% highlight sql %}
SELECT
 the_geom
FROM ne_10m_populated_p
{% endhighlight %}

You'll notice that all your points disappear! Your query must have `the_geom_webmercator` in the result.

## Creating new the_geom_webmercator on the fly

Maybe you'll now be wondering, what good is `the_geom` if you need to have `the_geom_webmercator`? Well, often it is much easier when you are building applications and tools to be thinking in Longitude-Latitude and so querying the database using those values can be really helpful.

### ST_Transform

One way to perform a query on `the_geom` and get a `the_geom_webmercator` as a result is to use a function called `ST_Transform`. Here, try this while still in the Map View:

{% highlight sql %}
SELECT ST_Transform(the_geom, 3857)
AS the_geom_webmercator
FROM ne_10m_populated_p
{% endhighlight %}

After you click <span class="ui_element" data-element="apply_query">Apply query</span> you should see all your points come back to the map. So what we are doing here is simple. First, we are taking the value from `the_geom` and applying `ST_Transform` function to it. The number, 3857, is a useful one to remember, in CartoDB it represents the Web Mercator projection. So what we are really doing is telling `ST_Transform` to transform our WGS84 `the_geom` to a Web Mercator geometry. Finally, we use the `AS` command to name our column in the result, `the_geom_webmercator`. This allows our maps to know what they are looking at.

### Conversions with ST_Transform

We can use a whole host of cool functions and even your own custom operations on `the_geom` in combination with `ST_Transform` so we can see results at the end. For example, try this:

{% highlight sql %}
SELECT ST_Transform(ST_SnapToGrid(the_geom, 4, 4), 3857)
AS the_geom_webmercator
FROM ne_10m_populated_p
{% endhighlight %}

After you run this query, you'll see all your points have lined up into a neat little grid. The grid is 4 degrees by 4 degrees. If you click any of your points, no infowindow will come up. That is because infowindows need a `cartodb_id` to work, we'll fix that now.

## Transformation with working infowindows

The trick here is simple, ensure that the result from your query contains `cartodb_id`, and any other columns you wish to show on your map. Try this:

{% highlight sql %}
SELECT
  cartodb_id,
  name,
  ST_Transform(ST_SnapToGrid(the_geom, 4, 4), 3857)
AS the_geom_webmercator
FROM ne_10m_populated_p
{% endhighlight %}

After you run the query, click on one of the points and you should see an infowindow that contains the name of the populated place plus a name.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/projections/img1.png' | prepend: site.baseurl }}" alt="grid" /></p>

## Writing the_geom updates
Just to show you how this comes together if you are updating the table, let's try an update.

{% highlight sql %}
UPDATE ne_10m_populated_p
SET the_geom = ST_SnapToGrid(the_geom, 4, 4)
{% endhighlight %}

You'll notice in the above query that we no longer do the `ST_Transform` step. This is because we are now going to write the result back to `the_geom`, not map it live. Go ahead and click <span class="ui_element" data-element="apply_query">Apply query</span>. You'll notice that the points are now in the neat grid. This grid is writen directly to your table now!
