---
layout: tutorials_item
title: 'Importing OpenStreetMap Data'
short_description: 'Export OpenStreetMap data, and import to CartoDB Editor'
level: basic
time_needed: '10 minutes'
---

## Summary
This tutorial will walk you through the basics of exporting [OpenStreetMap](http://www.openstreetmap.org) data for use in the CartoDB Editor. This is a good introductory tutorial if you are unfamiliar with OpenStreetMap data. For a more advanced tutorial on downloading and using OpenStreetMap data, check out our tutorial on using [Overpass Turbo](http://docs.cartodb.com/tutorials/overpassturbo.html).

## What is OpenStreetMap?
OpenStreetMap allows us to export data on many of the features that make up our cities, including polygons for neighborhoods and cities, roads, and even lampposts. OpenStreetMap data is contributed by a diverse community. It is rich with local knowledge and frequently updated. 

## Getting OpenStreetMap Data
OpenStreetMap data can be exported directly from the [OpenStreetMap website](http://www.openstreetmap.org).  

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/osm/img1.png' | prepend: site.baseurl }}" alt="Exporting OSM Data" /></p>

After loading the website, move the map to an area from which you wish to download data. Click on the Export menu option located on the top left side of the website. This will bring up a second export menu button in the left sidebar. You can confirm the area you wish to download by checking the bounding box in the sidebar before clicking Export in the sidebar. Your OSM data will automatically begin to download.

Quick Tip: OSM data can be quite large, make sure you are zoomed in enough to limit the size of the dataset you download.

## Using OpenStreetMap Data in CartoDB
CartoDB is setup to easily handle the import of OpenStreetMap data. Simply navigate to the Datasets section of your dashboard, select "Connect Dataset" and upload the downloaded file.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/osm/img2.png' | prepend: site.baseurl }}" alt="Uploading data" /></p>

That's it! Once the data is imported, you will be able to view it from the Data View of the CartoDB Editor. Now you can easily use OpenStreetMap data in any of your maps from within the CartoDB Editor.

Interested in learning more? Check out our [Overpass Turbo](http://docs.cartodb.com/tutorials/overpassturbo.html) tutorial, which allows you to search for and download OSM map features. The [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Using_OpenStreetMap) also has detailed information on using OSM.

