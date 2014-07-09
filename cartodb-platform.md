---
layout: platform
title: CartoDB Platform
slug: cartodb-platform
js_assets:
  - "index"
---

## CartoDB Platform

CartoDB is heavily API driven. Most users will design their visualizations from within the CartoDB website, and then embed those visualizations using our API into their own websites or applications.

Additionally, we provide a SQL API to interact with your data, so that you can query your tables, insert, update or delete records, and CartoDB.js a javascript library that helps you to develop your spatial applications.

<ul class="platform-list">
  <li>
    <div class="platform-lst-inner">
      <h2><a href="{{ '/cartodb-platform/cartodb-js.html' | prepend: site.baseurl }}">CartoDB.js</a></h2>
      <p class="platform-lst-content">This Javascript library is the main tool to extend your existing visualizations or create new ones from within your website. All from the client, not backend needed.</p>

      <p>
        <a href="{{ '/cartodb-platform/cartodb-js.html' | prepend: site.baseurl }}" class="btn btn-medium btn-blue btn-background button"><span class="btn-border">Learn more</span></a>
      </p>
    </div>
  </li>

  <li>
    <div class="platform-lst-inner">
      <h2><a href="{{ '/cartodb-platform/sql-api.html' | prepend: site.baseurl }}">SQL API</a></h2>
      <p class="platform-lst-content">Lets you perform queries and retrieve your data. It also lets you authenticate with your account so you can write, update, and delete data programmatically, or import it.</p>

      <p>
        <a href="{{ '/cartodb-platform/sql-api.html' | prepend: site.baseurl }}" class="btn btn-medium btn-blue btn-background button"><span class="btn-border">Learn more</span></a>
      </p>
    </div>
  </li>

  <li>
    <div class="platform-lst-inner">
      <h2><a href="{{ '/cartodb-platform/maps-api.html' | prepend: site.baseurl }}">Maps API</a></h2>
      <p class="platform-lst-content">The CartoDB Maps API allows you to generate maps based on data hosted in your CartoDB account and style them using CartoCSS.</p>

      <p>
        <a href="{{ '/cartodb-platform/maps-api.html' | prepend: site.baseurl }}" class="btn btn-medium btn-blue btn-background button"><span class="btn-border">Learn more</span></a>
      </p>
    </div>
  </li>
</ul>

The combination of these APIs gives you a powerful geospatial engine for your applications. Discover methods and functions of these APIs in the following sections or head to the [Advanced analysis]({{ '/tips-and-tricks.html#advanced-analysis' | prepend: site.baseurl }}) section which talks about sophisticated queries for analysis on data management.

If you have any questions using these APIs or using CartoDB in general, you can always send us a message to our [support service]({{ '/docs#support' | prepend: site.cartodb-baseurl }}).
