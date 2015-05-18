---
layout: platform
title: CartoDB Platform
slug: cartodb-platform
js_asset: "index"
redirect_from:
- "/documentation/apis-overview.html"
---

## CartoDB Platform

CartoDB is a very API driven platform. In fact the CartoDB Editor is just one application built on top of the CartoDB Platform giving you an indication of all the power of CartoDB when building geospatial applications. 

CartoDB is created to help you visualize and analyze your geospatial data. In this diagram you can see where CartoDB Platform sits on the stack of a full mapping application.

IMAGE

### CartoDB Geospatial database

Internally CartoDB uses PostgreSQL and PostGIS to host the data and perform geospatial operations. The database is only exposed through the CartoDB Platform APIs unless an ingress connection to the database is set up.

### LBS

Usually CartoDB is used together with a Location Base Service Provider such as Google Maps API, HERE services or OpenStreetMaps. Those services provides basemaps to use for overlaying your data. CartoDB also offers some free basemaps based on OpenStreetMaps, but some clients decide to use their API keys from other commercial providers to use it togteher with CartoDB.

### CartoDB Platform APIs

A set of APIs and libraries to help you create maps, manage your data, run geospatial analysis and other functions through REST services or with client libraries. You build your application using these services.

### CartoDB Editor

The editor is a tool to help people with no experience create maps. It provides a nice User Interface to perform most functionalities when authoring maps and publishing them on the web as embeds. Think of it as a very elaborated application built on top of CartoDB Platform. The editor is also often used to manage data manually allowing non-experts to edit metadata and perform simple operations with no programming skills.
As a developer you will often use the editor to prototype maps or create database schemas.

### Your geo-app

This is the part you build yourself. This could be from a store locator to a dashboard or any other application that requires maps, data visualizations or geospatial analysis.

## Common workflows 

We built CartoDB to be as flexible as possible to let developers realize their applications in different ways. Most geo-apps developed on CartoDB make use of several APIs, but here we are defined 4 typical workflows developer work.

### What to do with CartoDB Platform

| Create maps with your data to overlay them on basemaps for websites or mobile apps. | Manage your data programmatically | Run geoprocessing queries using SQL | Create entire geospatial apps and dashboards |
|:---:|:---:|:---:|:---:|
| Create a dynamic map with our API | Updating your data with the SQL API and see your map update | Get the 10 closest coffee shops to a location | Create a city dashboard |

## Data Location and Types of data

In CartoDB you can store all sort of data, geospatial or not. Most commonly you will have your OWN data you want to visualize and sometimes you will want to combine it with external Open Source data or from commercial providers.

IMAGE

You can import most common structured data formats, refer to the import API for more details. When accessing Open Data there is multiple sources on the web and CartoDB support most common formats for Open Data. Inside the CartoDB platform we provide a few services from commercial providers for your convenience, for example Twitter data.

Refer for the Data Services page to find data already available on the platform, and if for some reason the data you are looking for is not already available let us know and we will help you.

### Types of data

We provide support for handling vector and raster geospatial data, but any structured data that can fit on a database is usually possible to connect it too.

### From a technical perspective

In CartoDB all user data is stored on PostgreSQL on its own database. There are two different modes depending if you are using CartoDB as a single user or on an enterprise account. 

On basic accounts a user has its own database on all is data is stored on a schema within the database called “public”. On an enterprise account multiple users within an organization share the same database so that they can share data, and each user has its own data on a different schema with its username.

IMAGE

In this mode all data is stored on CartoDB server, refer to the section about linking external data sources if your data needs to live on an external server and CartoDB federates to it. CartoDB can synchronize from data in a public URL or using Foreign Data Wrappers to connect directly to external databases.

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

If you have any questions using these APIs or using CartoDB in general, you can always send a message to our [support service]({{ '/docs#support' | prepend: site.cartodb-baseurl }}).
