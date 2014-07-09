---
layout: tutorials_item
title: 'Counting points in polygons'
short_description: 'Use basic SQL to find the number of points that are inside of polygons'
level: medium
time_needed: '10 minutes'
embed_url: '//player.vimeo.com/video/83694844?title=0&amp;byline=0&amp;portrait=0'
video: true
---

## Summary

This tutorial uses data in two tables, one containing polygons and the second containing points. From there you will learn how to use spatial SQL to count the number of points that intersect each polygon and write the result to a new column.

## SQL Statement

{% highlight sql %}
UPDATE polygon_table SET point_count = (SELECT count(*)
FROM points_table WHERE ST_Intersects(points_table.the_geom, polygon_table.the_geom))
{% endhighlight %}

- [PostGIS ST_Intersects Documentation](http://postgis.refractions.net/docs/ST_Buffer.html)
