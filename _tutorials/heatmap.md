---
layout: tutorials_item
title: 'Create a torque heatmap'
short_description: 'Upload data, and create a torque heatmap in the CartoDB Editor '
level: basic
time_needed: '15 minutes'
embed_url: 'http://team.cartodb.com/u/chandra/viz/c7910524-b2cb-11e4-9ac4-0e4fddd5de28/embed_map'
---

## Summary
Learn how to quickly create a Torque heatmap in the CartoDB Editor. You will learn how to create an animated heatmap of temporal data where areas of greater color intensity indicate greater density of data. This tutorial will show you how to download a temporal dataset, upload your dataset to CartoDB and turn your data into an animated heatmap using the CartoDB Wizard. 

## Download the Data 
For this tutorial, we will be using FCC data in order to create a torque heatmap of Low Power FM radio stations going on the air - tracking the expansion of LPFM service from 2000 - March 2011 with data provided by the [FCC](https://github.com/FCC/lpfmpoints).

The data is hosted by the FCC on CartoDB and can be downloaded from this [link](https://fccmaps.cartodb.com/u/fcc/tables/lpfm_point/public?redirected=true) by selecting one of the file formats from the download menu in the lower left corner.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/heatmap/img1.png' | prepend: site.baseurl }}" alt="FCC Data" /></p>

## Upload the Data to CartoDB
<p class="wrap-border"><img src="{{ '/img/layout/tutorials/heatmap/img3.png' | prepend: site.baseurl }}" alt="Connect Dataset" /></p>

Uploading your data to CartoDB is easy. From your account dashboard, navigate to the "Datasets" section, and select "Connect Dataset" in the upper right corner.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/heatmap/img2.png' | prepend: site.baseurl }}" alt="Import Data" /></p>

In the overlay window that opens, select "Upload file," navigate to the FCC dataset you downloaded earlier and then "Connect Dataset" to import the dataset to your account.

## Creating a Torque Heatmap
Once your data has been imported to your account, you will be taken to the "Map View" to view your mapped data.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/heatmap/img4.png' | prepend: site.baseurl }}" alt="Map View" /></p>

Click on the right sidebar and select the "wizards" menu option to reveal various options for styling your map and data. 

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/heatmap/img5.png' | prepend: site.baseurl }}" alt="Map Wizard" /></p>

Use the arrow button to navigate through the various map style options and select "Torque Heat."

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/heatmap/img6.png' | prepend: site.baseurl }}" alt="Torque Heat" /></p>

## Style Your Map
Once you select "Torque Heat," automatic styles will be applied to your data. You can change menu options such as the "Marker Size," which is the size of your data points, and "Opacity," which is the level of transparency (how much of the basemap can be seen through your marker points.) Select the icon next to "Animated" in order to animate your data. Automatically, style options related to animated heatmaps will be revealed.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/heatmap/img7.png' | prepend: site.baseurl }}" alt="Animated Torque Menu" /></p>

In the "Time Column," select the column in your dataset that contains temporal data, in this case, select the column called "service_da." Your animation will now be based on the date the Low Power FM Station came into service. 

Additional menu options you can change include the length of your animation by changing the number of seconds under the "Duration" menu option, the number of "Steps" of your animation, and whether your data points should accumulate over time by turning on the "Cumulated" menu option.

For more information on the menu options associated with Torque animations, review the [CartoDB documentation](http://docs.cartodb.com/cartodb-editor.html#torque) on Torque maps.

## Share Your Map
<p class="wrap-border"><img src="{{ '/img/layout/tutorials/heatmap/img8.png' | prepend: site.baseurl }}" alt="Privacy Menu" /></p>

Once you have your map styled, you can share it with the world. In order to share your visualization with others, you will need to change your privacy settings from "Private." You can change the privacy settings for your map by selecting the padlock menu option located next to your map name in the upper left corner.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/heatmap/img9.png' | prepend: site.baseurl }}" alt="Privacy Settings" /></p>

Once you have selected the appropriate privacy level, select the "Share" menu option in the upper right corner.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/heatmap/img10.png' | prepend: site.baseurl }}" alt="Share Menu" /></p>

There are three options for sharing your visualization. You can "Get the link" in order to share the map directly with friends and colleagues on social media, you can "Embed it" on your blog or website by grabbing the iframe code provided, or use your map with our Map APIs by grabbing the viz.json link for use with [CartoDB.js](http://docs.cartodb.com/cartodb-platform/cartodb-js.html).

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/heatmap/img11.png' | prepend: site.baseurl }}" alt="publish map" /></p>

That's it! Happy Mapping!
