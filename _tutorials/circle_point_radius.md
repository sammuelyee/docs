---
layout: tutorials_item
title: 'Drawing a circle from a point and radius'
short_description: 'See how to use basic SQL to draw a precisely sized circle on your maps.'
level: medium
time_needed: '10 minutes'
embed_url: '//player.vimeo.com/video/83693317?title=0&amp;byline=0&amp;portrait=0'
video: true
---

## Summary

See how to use basic SQL to draw a precisely sized circle on your maps
description: Use CartoDB to turn points into circles with precise centroid and meter radius. There is an introduction to basic SQL. Also note that you can use simple mathematical operators to draw by feet or miles.

<div class="code-title notitle with-result"></div>
{% highlight sql %}
UPDATE table_name SET the_geom = ST_Buffer(the_geom::geography, 100000)::geometry
{% endhighlight %}

{% highlight sql %}
UPDATE table_name SET the_geom = ST_Buffer(the_geom::geography, 100000)::geometry WHERE name = 'Frankfurt'
{% endhighlight %}
