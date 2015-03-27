---
layout: tutorials_item
title: 'Export OpenStreetMap Data with Overpass Turbo'
short_description: 'Export OpenStreetMap data using Overpass Turbo'
level: medium
time_needed: '15-20 minutes'
---

## Summary
This tutorial will walk you through the basics of exporting [OpenStreetMap](http://www.openstreetmap.org/) data using [Overpass Turbo](http://overpass-turbo.eu/). This tutorial is for users who are familiar with OpenStreetMap data and interested in learning how to run more advanced queries to extract specific map features tagged in OpenStreetMap. If you are new to OpenStreetMap, check out our introductory tutorial on [Importing OpenStreetMap Data](http://docs.cartodb.com/tutorials/osm.html) first.

## What is Overpass Turbo?
<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img1.png' | prepend: site.baseurl }}" alt="Exporting OSM Data" /></p>

The Overpass Turbo web interface allows us to run queries on OpenStreetMap data in order to extract map features that might be of interest including waterways, commercial businesses, fountains and much more. The [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features) contains a full write up on all the map features tagged in OpenStreetMap. Take a look to become familiar with the map features tagged by OpenStreetMap users.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img2.png' | prepend: site.baseurl }}" alt="Exporting OSM Data" /></p>

The Overpass Turbo web interface should be used for queries in which a small dataset is being extracted. It is best to be well zoomed in to limit the size of the dataset that is exported. Users interested in downloading larger datasets should use the [Overpass API](http://wiki.openstreetmap.org/wiki/Overpass_API) instead.

However, Overpass Turbo is a great web interface for testing Overpass API queries, and immediately seeing the results mapped. The [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Overpass_turbo) contains more information on use-cases for Overpass Turbo.

## The Overpass Turbo Web Interface
You can run queries directly from [Overpass Turbo](http://overpass-turbo.eu/) by navigating to the website.   

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img1.png' | prepend: site.baseurl }}" alt="Exporting OSM Data" /></p>

From the left sidebar, you can write queries, which you can run and instantly see mapped. After writing an Overpass query, select the "Run" menu option in the upper left menu to see the results of your query. 

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img3.png' | prepend: site.baseurl }}" alt="Exporting OSM Data" /></p>

Additional menu options of note include "Export" for downloading your OpenStreetMap data, and the "Wizard" which will help you in writing queries. 

If you are unfamiliar with Overpass Turbo queries, you can run sample queries by selecting the "Load" menu option. 

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img4.png' | prepend: site.baseurl }}" alt="Exporting OSM Data" /></p>

There are several ways in which you can move the map to the area you are interested in extracting data from. You can search for a location using the search bar in the upper left corner of the map. You can zoom in and out using the plus and minus icons. You can also move the map to your current location using the "locate me" menu option.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img5.png' | prepend: site.baseurl }}" alt="Exporting OSM Data" /></p>

## Running Queries in Overpass Turbo
Let's take a look at the sample query pre-loaded in the left sidebar when you arrive on the site. 

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img6.png' | prepend: site.baseurl }}" alt="Exporting OSM Data" /></p>

The query searches for features that are of the type node. You can find out the different data types assigned to various map features on the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). 

The query searches for map features that have the key "amenity" that equal the value "drinking_water." The {{bbox}} variable uses the map's bounding box to run the search against.

You can use the "Wizard" menu option to search for map features, and automatically build and run queries. 

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img7.png' | prepend: site.baseurl }}" alt="Exporting OSM Data" /></p>

## Using OpenStreetMap Data in CartoDB
Once you have the OpenStreetMap data you wish to use in CartoDB, select the "Export" menu option. You will be prompted to choose a file format for your data. CartoDB supports many file formats including GeoJSON, KML, and GPX. Once you select a file format supported by CartoDB, your data will be immediately downloaded.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img8.png' | prepend: site.baseurl }}" alt="Exporting OSM Data" /></p>

CartoDB is setup to easily handle the import of data. Simply navigate to the Datasets section of your dashboard, select "Connect Dataset" and upload the downloaded file. Once the data is imported, you will be able to view it from the Data View of the CartoDB Editor.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img11.png' | prepend: site.baseurl }}" alt="Uploading data" /></p>

Once your data is uploaded, don't forget to cite the source of the data back to OpenStreetMap and Overpass Turbo in the descripton of your dataset. As part of using OpenStreetMap data, you must give credit to OpenStreetMap per their [Copyright and License agreement](http://www.openstreetmap.org/copyright). You should add an OpenStreetMap link and credit if you don't plan on using an OSM basemap where the credit is already included by CartoDB. 

{% highlight html %}
Data © [OpenStreetMap](http://www.openstreetmap.org/copyright) contributors
Data mining by [Overpass API](http://overpass-api.de/)
{% endhighlight %}

You can add attribution to OpenStreetMap by editing the metadata associated with your dataset by selecting the "Edit metadata" link in the upper left corner of your dataset in the Data View of the CartoDB Editor. 

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img9.png' | prepend: site.baseurl }}" alt="Uploading data" /></p>

Add the attribution tag to the metadata description.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/overpassturbo/img12.png' | prepend: site.baseurl }}" alt="Uploading data" /></p>

That's it! Now you can easily use OpenStreetMap data in any of your maps from within the CartoDB Editor.
