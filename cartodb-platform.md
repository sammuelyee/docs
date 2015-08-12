---
layout: platform
title: CartoDB Platform
slug: cartodb-platform
js_asset: "index"
redirect_from:
- "/documentation/apis-overview.html"
---
## CartoDB Platform

The CartoDB Platform is an open source tool to that enables you to build advanced, dynamic geospatial datasets and scalable maps. You can design maps with the CartoDB Editor and use the CartoDB APIs to embed these maps into your own website. The CartoDB SQL API interacts with your data so that you can query your datasets and insert, update, or delete records. Additionally, the CartoDB.JS (a JavaScript library) is available to help you develop and enhance your spatial applications.

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

The CartoDB Platform APIs, in collaboration with the CartoDB Editor, allows you to build a powerful geospatial engine for your map visualization. View the [Advanced analysis]({{ '/tips-and-tricks.html#advanced-analysis' | prepend: site.baseurl }}) Tips & Tricks, which contain some sophisticated examples of data management queries.

Contact [Sales](mailto:sales@cartodb.com) if you would like more information about using these APIs.
