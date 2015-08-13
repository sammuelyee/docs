---
layout: index
title: CartoDB Documentation
js_asset: "index"
---

## What is CartoDB?

CartoDB is a cloud storage, geospatial database, that enables you to create map-based visualizations. This documenation describes how to use *CartoDB Editor* for end-users, or the *CartoDB Platform* for developers.  

- [CartoDB Editor](/cartodb-editor.html), typically used by end-users, is a graphical user interface that guides you through the process of connecting a dataset and creating a map.  A user-friendly dashboard enables you to manage your datasets and apply advanced styling features to your map visualizations 

- [CartoDB Platform](/cartodb-platform.html), typically used by developers, is an open source tool to that enables you to use several APIs to build advanced, dynamic geospatial datasets and scalable maps for your own applications

<!-- TODO: link to 'Use cases' and 'Industries' -->
<!-- Writer Note_csobier: I am not sure who wrote the comment above?' -->
<!-- Writer Note_andrewxhill: i do not remember' -->

### CartoDB Editor

The CartoDB Editor provides an interface where you can upload geospatial data (such as CSVs, ERSI Shapefiles, and so on), directly into your browser and create an interactive map within 30 seconds. There are no download or installation steps required.

The following image is an example of the CartoDB Editor, displaying a split screen between a selected map and the connected dataset. You can filter data and add custom styling to your map.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/cartodb-editor.png" alt="CartoDB Editor" /></p>

The Editor also enables you to share and publish your map as public URLs, password protected visualizations for collaborations, embeddable maps, or even API endpoints (enabling you to build CartoDB delivered maps directly into your own websites). The CartoDB platform supports enhanced scalability so that your maps can be viewed by any size target audience (such as few close friends or colleagues), or a larger public audience (such as Twitter or Reddit feeds).

See the [CartoDB Editor](http://docs.cartodb.com/cartodb-editor.html) documentation for more details.

### CartoDB Platform

If you are interested in enhancing the complexity of your map-based visualizations, you can use the CartoDB Editor in combination with the CartoDB Platform. This environment enables you to prototype new ideas and quickly build geospatial data by switching between the Editor and Platform simultaneously.

The CartoDB database is built on the [PostgreSQL](http://www.postgresql.org/docs/9.1/static/) platform and supports advanced [PostGIS](http://postgis.net/docs/manual-2.0/) capabilities. The CartoDB Platform connects your database with the [MAPs API](http://docs.cartodb.com/cartodb-platform/maps-api.html) and the [SQL API](http://docs.cartodb.com/cartodb-platform/sql-api.html) so that you can interact with data remotely and access the most recent data libraries. This allows you to edit, query and update you geospatial datasets and maps in real-time.

For example, the following list describes some advanced geospatial visualization projects that the CartoDB Platform is capable of supporting:

- Build a mobile data-collection tool and view the results
- Build the next-generation dashboard for the city of the future and view the results
- Monitor real-time vehicle location and view the results

See the [CartoDB Platform](http://docs.cartodb.com/cartodb-platform.html) documentation for more details.
