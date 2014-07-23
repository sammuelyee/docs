---
layout: tutorials_item
title: 'Visualizing and styling a GPS track'
short_description: 'See a couple of interesting ways to visualize and filter line data for a great map'
level: hard
time_needed: '30 minutes'
embed_url: 'http://documentation.cartodb.com/viz/b3053236-ff55-11e2-8a59-5404a6a683d5/embed_map?title=false&description=false&search=false&shareable=false&cartodb_logo=false&layer_selector=false&scrollwheel=false&sublayer_options=1&sql=SELECT%20cartodb_id%2Cthe_geom_webmercator%2Ctrack_fid%2C%27first%27%20as%20layer%0AFROM%20kachemakbaysp_track_lines%0A%0AUNION%20ALL%0A%0ASELECT%20cartodb_id%2Cthe_geom_webmercator%2Ctrack_fid%2C%27second%27%20as%20layer%0AFROM%20kachemakbaysp_track_points%0AWHERE%20track_se_1%20%3D%201%0A%0AUNION%20ALL%0A%0ASELECT%20cartodb_id%2Cthe_geom_webmercator%2Ctrack_fid%2C%27third%27%20as%20layer%0AFROM%20kachemakbaysp_track_points%0AWHERE%20track_se_1%20%25%20120%20%3D%200&sw_lat=59.544760718165584&sw_lon=-151.29100799560547&ne_lat=59.576764875587706&ne_lon=-151.08844757080078'
materials:
  -
    url: 'http://cartodb.s3.amazonaws.com/static/kachemakbaysp.gpx'
    title: 'GPX data for Kachemak Bay State Park'
related:
  -
    url: "{{ '/tutorials/projections' | prepend: site.baseurl }}"
    title: 'Projections, the_geom, and the_geom_webmercator'
---

## Summary

We are going to show you how to visualize and style some of your GPS data. A common format for data collected with GPS devices is a GPX file. Right now CartoDB turns GPX data into a three tables: points, lines, and waypoints. For this tutorial we will focus on the points table (usually ends in '_track'). In the points table, every point contains an order number and segment number to tell you how they were collected. In this tutorial, we will see you how to turn those points back to line segments, and then how to combine the two to make a neat map!

## Example data

If you have a GPX file from some of your biking, hiking, or general moving around, you can actually just drag it onto your CartoDB dashboard and start playing with it. For this tutorial we will be using some data from the [Alaska Department of Natural Resources](http://dnr.alaska.gov/parks/aktrails/explore/trailgpsfiles.htm).

We are going to work with [the GPX data for Kachemak Bay State Park](http://cartodb.s3.amazonaws.com/static/kachemakbaysp.gpx). You can import the data into CartoDB in two different ways:

- Download the file to your computer and drag & drop it into the CartoDB dashboard
- Click <span class="ui_element" data-element="new_table">Create new table</span> in your dashboard and paste the file URL.

GPX files are a bit different than say, a CSV file, in CartoDB as importing GPXs results three different tables in CartoDB. We are going to use `kachemakbaysp_track_points`, so you can delete the other two if you want to keep you account tidy. After upload, click on the `kachemakbaysp_track_points` table name to start our new GPS map.

## GPX data in CartoDB

Take a look at the <span class="ui_element" data-element="map_view">Map View</span>, zooming in to see some of the individual points. You can now see how the GPX data is in fact points, and not long lines. We'll actually use the points to create lines later in the tutorial.

<p class="wrap-border"><img src="{{ '/img/layout/gps_track/img1.png' | prepend: site.baseurl }}" alt="Tracks as points" /></p>

If you switch back to the <span class="ui_element" data-element="table_view">Table View</span> you can poke around at some of the columns contained in the data. You'll notice that not many of them have data for this table. A couple that we are interested in are, `track_fid` and `track_se_1`. The column `track_fid` is how we can identify which linestring a point belongs to, while `track_se_1` tells us how to order the points within a line.

## Linking points back into lines

Okay, it is time to use a little SQL now. For this query, we want to:

- Collect points by their `track_fid`
- Order them by their `track_se_1` within each group
- Link those points together into linestrings

Let's take it one step at at a time. First, try running this:

{% highlight sql %}
SELECT ST_Collect(the_geom) as the_geom, track_fid
FROM kachemakbaysp_track_points
GROUP BY track_fid
{% endhighlight %}

Great, this accomplishes our first goal, grouping points by their `track_fid`. We won't be able to see them on the map because we are using `the_geom` here, not `the_geom_webmercator`. We don't want a collection of points though, we want a linestring. To do that, we need to do this instead:

{% highlight sql %}
SELECT ST_MakeLine(the_geom) AS the_geom, track_fid
FROM kachemakbaysp_track_points
GROUP BY track_fid
{% endhighlight %}

Okay! Even closer now. In many cases, this would actually be enough because the order the points stored in our table is likely to be the same order they occur in the linestrings, but we can't always know. So to be totally certain we join them in the right order, let's tell the SQL to order them by our `track_se_1` column:

{% highlight sql %}
SELECT
  ST_MakeLine(the_geom ORDER BY track_se_1 ASC) AS the_geom,
  track_fid
FROM kachemakbaysp_track_points
GROUP BY track_fid
{% endhighlight %}

While `ORDER BY` is often found at the end of the SQL query, in this case we actually put it into our aggregating funcion, `ST_MakeLine`. This orders the points within each line independantly. Great, almost there.

Now we want to create a new table from our query. As we cover in the tutorial about projections, when you want to see the results of a query on the map, you must include `the_geom_webmercator`. When you want to create a new table though, you need to work with `the_geom`, as it is what everything will be based on. So we will switch that now, and as always, we want to alias our new linestring as `the_geom` to ensure that CartoDB knows what this new column is.

{% highlight sql %}
SELECT
  ST_MakeLine(the_geom ORDER BY track_se_1 ASC) AS the_geom,
  track_fid
FROM kachemakbaysp_track_points
GROUP BY track_fid
{% endhighlight %}

After you run this query click <span class="ui_element" data-element="options_menu">Options</span> and then <span class="ui_element" data-element="table_from_query">Table from query</span>. In the next window call your new table `kachemakbaysp_track_lines`. After that, take a look at the <span class="ui_element" data-element="map_view">Map View</span>, zoom in enough to see your data, and you should see that we have lines now! Congratulations! The table you just created is the same as another file created at GPX upload time, which stores the lines of each track. Still, it was a good exercise to learn how to do it on your own.

<p class="wrap-border"><img src="{{ '/img/layout/gps_track/img2.png' | prepend: site.baseurl }}" alt="Tracks" /></p>

### Bonus

You can do some neat things really quickly now. For example, say you wanted to see only a map of the longer trails in you table. You could assume that the longer trails had more GPS points taken for them, so try this while looking at the <span class="ui_element" data-element="map_view">Map View</span>:

{% highlight sql %}
SELECT *
FROM kachemakbaysp_track_lines
WHERE 1000 &lt; ST_NPoints(the_geom)
{% endhighlight %}

## Styling GPX data

Let's start by styling the lines we just created. First, open the <span class="ui_element" data-element="style_option">Style option</span> on the right menu of the <span class="ui_element" data-element="map_view">Map view</span>. Scroll through the options until you see Line Stroke, set its value to 1 and then make the line color green.

<p class="wrap-border"><img src="{{ '/img/layout/gps_track/img3.png' | prepend: site.baseurl }}" alt="Styling tracks" /></p>

Alternatively, you can scroll through the options of preset styles and find the one for <span class="ui_element" data-element="lines_cloropeth">Choropleth</span>. A choropleth will color your features by binning them by the value of some column. Here, if you create a choropleth for 7 bins on the `track_fid` column, you get some nice separation in individual trails! Great stuff! I used the red tone color ramp for my choropleth.

<p class="wrap-border"><img src="{{ '/img/layout/gps_track/img4.png' | prepend: site.baseurl }}" alt="Color ramp" /></p>

## Joining two tables

Okay, now we can get a bit more creative. Let's join our points back on top of our lines. To do so, start by opening your <span class="ui_element" data-element="sql_option">SQL option</span> again. You should have a basic query already:

{% highlight sql %}
SELECT *
FROM kachemakbaysp_track_lines
{% endhighlight %}

Let's make it explicit which columns we want:

{% highlight sql %}
SELECT cartodb_id,the_geom_webmercator,track_fid
FROM kachemakbaysp_track_lines
{% endhighlight %}

With that, we can use a `UNION`to get the points as well. Try this:

{% highlight sql %}
SELECT cartodb_id,the_geom_webmercator,track_fid
FROM kachemakbaysp_track_lines

UNION ALL

SELECT cartodb_id,the_geom_webmercator,track_fid
FROM kachemakbaysp_track_points
{% endhighlight %}

Well, the data came back without errors, but our map hasn't changed. That is because we need to add a style for our points. Open the <span class="ui_element" data-element="style_option">Style option</span> and this time click <span class="ui_element" data-element="carto_tab">CartoCSS option</span>. You'll see a lot going on there, in short though, this is how the colors are being chosen for the lines. We now need to add some styles for points. Add the following at the very bottom:

{% highlight scss %}
#kachemakbaysp_track_lines::points {
  marker-fill:transparent;
  marker-width:5;
  marker-line-color:#555;
  marker-line-width:1;
  marker-opacity:1;
  marker-line-opacity:1;
  marker-placement:point;
  marker-type:ellipse;
  marker-allow-overlap:true;
}
{% endhighlight %}

Now you should have this statement plus all the other lines that were there already. Click <span class="ui_element" data-element="apply_style">Apply style</span> and take a look at the map.

<p class="wrap-border"><img src="{{ '/img/layout/gps_track/img5.png' | prepend: site.baseurl }}" alt="Line plus points" /></p>

The first thing you'll notice is that all your lines turned black! Well... they didn't, what is happening is that we just have too many points so they are cluttering things up. Let's change our SQL to fix that.

{% highlight sql %}
SELECT cartodb_id,the_geom_webmercator,track_fid
FROM kachemakbaysp_track_lines

UNION ALL

SELECT cartodb_id,the_geom_webmercator,track_fid
FROM kachemakbaysp_track_points
WHERE track_se_1 = 1
{% endhighlight %}

Nice, now we only have the points at the start of lines. We want more though. Lets add a third layer to grab every 120th point.

{% highlight sql %}
SELECT cartodb_id,the_geom_webmercator,track_fid
FROM kachemakbaysp_track_lines

UNION ALL

SELECT cartodb_id,the_geom_webmercator,track_fid
FROM kachemakbaysp_track_points
WHERE track_se_1 = 1

UNION ALL

SELECT cartodb_id,the_geom_webmercator,track_fid
FROM kachemakbaysp_track_points
WHERE track_se_1 % 120 = 0
{% endhighlight %}

Nice, now we have 3 different things to work with. The `x % y` opperators gets the remainder from x/y. We use it to only get points that are increment by 120. Okay, now a trick we use often to style these three dynamic layers is to add a fake column that tells us from which SQL statement the data is coming.

{% highlight sql %}
SELECT cartodb_id,the_geom_webmercator,track_fid,'first' as layer
FROM kachemakbaysp_track_lines

UNION ALL

SELECT cartodb_id,the_geom_webmercator,track_fid,'second' as layer
FROM kachemakbaysp_track_points
WHERE track_se_1 = 1

UNION ALL

SELECT cartodb_id,the_geom_webmercator,track_fid,'third' as layer
FROM kachemakbaysp_track_points
WHERE track_se_1 % 120 = 0
{% endhighlight %}

Our SQL says, that for every row returned in the first statment, add a column called `layer` with a value `first`. We do the same for the `second` and `third` statements. If you now run that statement, your map won't change. But let's open our <span class="ui_element" data-element="style_option">Style option</span> again and click the <span class="ui_element" data-element="carto_tab">CartoCSS option</span>. Modify the part at the end that we updated earlier to now look like this:

{% highlight scss %}
#kachemakbaysp_track_lines::points {
  marker-fill:transparent;
  marker-width:5;
  marker-line-color:#555;
  marker-line-width:1;
  marker-opacity:1;
  marker-line-opacity:1;
  marker-placement:point;
  marker-type:ellipse;
  marker-allow-overlap:true;
  [layer='second']{
    marker-width:18;
    marker-line-width:2;
    marker-line-color:#669900;
  }
}
{% endhighlight %}

Now you will notice that there are waypoints along the trails. There are also nice big green waypoints at the beginning of each trail.

<p class="wrap-border"><img src="{{ '/img/layout/gps_track/img6.png' | prepend: site.baseurl }}" alt="Final map" /></p>

Be sure to make both `kachemakbaysp_track_points` and `kachemakbaysp_track_lines` public and then click Make viz public and share to publish your map.

<p class="wrap-border"><img src="{{ '/img/layout/gps_track/img7.png' | prepend: site.baseurl }}" alt="Share" /></p>
