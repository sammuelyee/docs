---
layout: tutorials_item
title: 'Using SQL to Project Your Map Using Albers Projection'
short_description: 'Quickly change map projections using SQL in the CartoDB editor'
level: medium
time_needed: '20 minutes'
embed_url: 'https://documentation.cartodb.com/viz/2a1b745a-e219-11e4-a4f2-0e018d66dc29/embed_map'
---

## Summary
By default, maps created in CartoDB use the Web Mercator projection. All maps are projections - a way to represent the spherical Earth as a flat representation in a browser. The [Albers projection](http://en.wikipedia.org/wiki/Albers_projection) is a popular map projection for the US because it creates minimal distortion of the US. This tutorial will show you how to project your map in CartoDB using the Albers projection.

In CartoDB, we store your geometries in a projection called WGS84 using the_geom column. When we need to show your data we use the Web Mercator projection which makes it easy to quickly transform your data into pixels on a map. We prestore Web Mercator versions of your data in a hidden column called the_geom_webmercator. 

This tutorial will show you how to quickly project your map and data with the Albers projection instead of Web Mercator. All you need to get started is a CartoDB account and some familiarity with the CartoDB Editor.

## Getting Started
For this tutorial, we will be using a dataset provided in the CartoDB Data Library to create a map of US counties projected in Albers. 

Within your CartoDB dashboard in the Datasets view, navigate to the "Data Library."

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/albers/img1.png' | prepend: site.baseurl }}" alt="Import Data" /></p>

Select the "USA Counties" dataset and in the upper right corner, click on "Create map" in the secondary navigation bar. 

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/albers/img2.png' | prepend: site.baseurl }}" alt="Import Data" /></p>

Once your dataset is done importing, you will be taken to the Map View of your map visualization. Manually move and zoom your map so the US is in the center.

When using a different projection in CartoDB other than Web Mercator, we cannot use the basemaps provided. We recommend selecting a color as your basemap and using a dataset that has state borders, for instance, to provide context for your data. In this case, we are using the US counties dataset to provide context.

In the lower left corner, select "Change basemap," choose "Custom" and select a color for your background. We are using black.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/albers/img3.png' | prepend: site.baseurl }}" alt="Import Data" /></p>

In the right hand sidebar, select the "SQL" panel so we can run a SQL query to change the projection we are using to Albers. 

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/albers/img4.png' | prepend: site.baseurl }}" alt="Import Data" /></p>

Copy and paste the below SQL query in the SQL wizard.

{% highlight sql %}

SELECT ST_Transform(the_geom, 2163) 
as the_geom_webmercator,cartodb_id,affgeoid,cd113fp,countyfp,geoid,statefp,created_at,updated_at 
FROM cb_2013_us_county_500k

{% endhighlight %} 

Select "Apply query" in the lower right corner to run the SQL query and re-project the map using the Albers projection. You may need to reposition your map once the SQL query is finished to bring the US back to the center.

Our SQL query uses a PostGIS function called [ST_Transform](http://postgis.org/docs/ST_Transform.html), which returns our geometry with coordinates transformed to the Albers projection. ST_Transform takes the_geom column and the ID number for the Spatial Reference System we want to use, in this case, the Albers projection, which we know has a SRID of 2163. We update our hidden colum, the_geom_webmercator, to our newly transformed geometry.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/albers/img5.png' | prepend: site.baseurl }}" alt="Import Data" /></p>

That's it! All you need to use different projections in CartoDB is a simple SQL query. Happy mapping!




