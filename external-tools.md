---
layout: platform_item
title: External Tools
slug: external-tools
js_asset: "editor"
redirect_from:
- "/documentation/external-tools.html"
---
<!-- GOOD PRACTICE: If you're adding a tool, add it in alphabetical order for ease of navigation! -->

## ArcGIS Connector

It is easy to import ArcGIS layers stored in an ArcGIS Server as CartoDB tables using CartoDB's [Import API](http://docs.cartodb.com/cartodb-platform/import-api.html#import-api). Such layers must be accessible via an ArcGIS API REST URL. Please refer to the full [ArcGIS Connector documentation](http://docs.cartodb.com/cartodb-platform/import-api.html#the-arcgis-connector) located on our main [documentation page](http://docs.cartodb.com/) for complete overview.

## Cesium

[Cesium](http://cesiumjs.org/) is an Open Source JavaScript library for creating 3D globes and 2D maps in a web browser.  Our [CartoDB Cesium Plugin](https://github.com/CartoDB/cesium-cartodb) allows you to wrap tiles served from CartoDB onto the 3D globe.  Take a look at [this blog post](http://blog.cartodb.com/cesium_cartodb/) to see it in aciton.

## FIWARE Connector

The [Fi-Ware](https://www.fiware.org/) Development team at Telefonica has recently built a connector for CartoDB. The python script parses data from a Fi-Ware “Context Broker” (A service which allows for easy publishing of/subscribing to frequently updated data). By leveraging CartoDB’s SQL API, the connector updates rows in a CartoDB table with the latest data from the context broker, keeping the map’s underlying data as fresh as possible. [Check out the connector on github](https://github.com/telefonicaid/fiware-orion2cartodb).

##oEmbed

CartoDB now has an oEmbed API endpoint. This allows an embedded representation of a CartoDB public map URL on oEmbed enabled third party sites. The oEmbed API allows a website to display embedded maps when a user posts a link to that resource, without having to parse the resource directly, or where an iframe embed is not supported user-side.

###How It Works

oEmbed dictates a standard format where you send a URL and the host site provides the embed code. The host site, where the url intended for embed is posted such as [Twitter](https://twitter.com/) or [Medium](https://medium.com/), processes the entered URL and then queries the originating service’s API to get back any additional info needed to generate embed content.

As an example, A user enter a CartoDB URL such as `https://osm2.cartodb.com/viz/08aef918-94da-11e4-ad83-0e0c41326911/public_map` the service then sends a request to cartoDB's oEmbed API endpoint as `http://services.cartodb.com/oembed?url=https://osm2.cartodb.com/viz/08aef918-94da-11e4-ad83-0e0c41326911/public_map`. The source site then sends back all the necessary information in JSON format for the host site to embed the image automatically. In this case the return is:
```json
{
  "type": "rich",
  "version": "1.0",
  "width": "100%",
  "height": "520px",
  "title": null,
  "html": "<iframe width='100%' height='520px' frameborder='0' src='https://osm2.cartodb.com/viz/08aef918-94da-11e4-ad83-0e0c41326911/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>",
  "author_name": "osm2",
  "author_url": "https://osm2.cartodb.com",
  "provider_name": "CartoDB",
  "provider_url": "https://www.cartodb.com/"
}
```
###Embeds In 2 Steps: Copy & Paste

From CartoDB, any publicly accessible map can be easily embeded by simply copying a public view URL...

<p class="wrap-border"><img src="/img/layout/external-tools/oembed_link.gif" alt="copy link" /></p>

...and pasting the URL into a supported host.

<p class="wrap-border"><img src="/img/layout/external-tools/oembed_paste.gif" alt="paste link" /></p>


## OGR
The release of [GDAL/OGR 2.0.0](http://www.gdal.org/) now includes an easy to use cartoDB driver, fully supporting CartoDB table imports, exports, custom queries, and data synchronization direct from your local command line. 

## Microsoft Sharepoint

It is easy to embed CartoDB maps in Microsoft Sharepoint sites. Please check out [our tutorial on Sharepoint](http://docs.cartodb.com/tutorials/sharepoint.html) in the Tutorials section.

## QGIS Plugin

The team at [Kudos](http://gkudos.com/) has released a plugin for QGIS that enables users to view, create, edit or delete data from their CartoDB accounts right from the QGIS desktop application.  Check out the [code on github](https://github.com/gkudos/qgis-cartodb), and see this blog post for a quick [overview](http://gkudos.com/blog/2014/09/23/Edit--CartoDB-Data-Using-QGIS/).
