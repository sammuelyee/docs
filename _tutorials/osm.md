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
CartoDB is setup to easily handle the import of OpenStreetMap data. Simply navigate to the Datasets section of your dashboard, select "Connect Dataset" and upload the downloaded file. Once the data is imported, you will be able to view it from the Data View of the CartoDB Editor.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/osm/img2.png' | prepend: site.baseurl }}" alt="Uploading data" /></p>

Once your data is uploaded, don't forget to cite the source of the data back to OpenStreetMap in the descripton of your dataset. As part of using OpenStreetMap data, you must give credit to OpenStreetMap per their [Copyright and License agreement](http://www.openstreetmap.org/copyright).

{% highlight html %}
Data © OpenStreetMap contributors
{% endhighlight %}

You can add attribution to OpenStreetMap by editing the metadata associated with your dataset by selecting the "Edit metadata" link in the upper left corner of your dataset in the Data View of the CartoDB Editor. 

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/osm/img3.png' | prepend: site.baseurl }}" alt="Uploading data" /></p>

Add the attribution tag to the metadata description.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/osm/img5.png' | prepend: site.baseurl }}" alt="Uploading data" /></p>

Attribution will automatically be added and linked to [OpenStreetMap's copyright page](http://www.openstreetmap.org/copyright) in the lower right corner of your map! View the attribution by switching to Map View in the CartoDB Editor.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/osm/img4.png' | prepend: site.baseurl }}" alt="Uploading data" /></p>

That's it! Now you can easily use OpenStreetMap data in any of your maps from within the CartoDB Editor.

Interested in learning more? Check out our [Overpass Turbo](http://docs.cartodb.com/tutorials/overpassturbo.html) tutorial, which allows you to search for and download OSM map features. The [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Using_OpenStreetMap) also has detailed information on using OSM.

