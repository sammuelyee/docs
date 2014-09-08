---
layout: platform
title: CartoDB Platform
slug: cartodb-platform
js_asset: "index"
redirect_from:
- "/documentation/apis-overview.html"
---

## CartoDB Platform

CartoDB is heavily API driven. Most users will design their visualizations from within the CartoDB website, and then embed those visualizations using our API into their own websites or applications.

Additionally, we provide a SQL API to interact with your data, so that you can query your tables, insert, update or delete records, and CartoDB.js a javascript library that helps you to develop your spatial applications.

<ul class="platform-list">
  {% for platform_item in site.cartodb-platform %}
  <li>
    <div class="platform-lst-inner">
      <h2><a href="{{ platform_item.url }}">{{ platform_item.title }}</a></h2>
      <p class="platform-lst-content">{{ platform_item.description }}</p>

      <p>
        <a href="{{ platform_item.url }}" class="btn btn-medium btn-blue btn-background button"><span class="btn-border">Learn more</span></a>
      </p>
    </div>
  </li>
  {% endfor %}
</ul>

The combination of these APIs gives you a powerful geospatial engine for your applications. Discover methods and functions of these APIs in the following sections or head to the [Advanced analysis]({{ '/tips-and-tricks.html#advanced-analysis' | prepend: site.baseurl }}) section which talks about sophisticated queries for analysis on data management.

If you have any questions using these APIs or using CartoDB in general, you can always send us a message to our [support service]({{ '/docs#support' | prepend: site.cartodb-baseurl }}).
