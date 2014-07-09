---
layout: tutorials_item
title: 'Creating a simple map of points'
short_description: 'Upload, map, and customize the visualization of some point data.'
level: basic
time_needed: '10 minutes'
embed_url: 'http://documentation.cartodb.com/viz/6bc17390-e96f-11e2-8be0-5404a6a683d5/embed_map?title=false&description=false&search=false&shareable=false&cartodb_logo=false&layer_selector=false&scrollwheel=false&sql=&zoom=3&center_lat=50.064191736659104&center_lon=21.62109375&height=300&id=cartodb-1373506926952'
---

## Summary

This tutorial will walk you through the basics of CartoDB. It is meant for beginners looking to get started using the platform but still uncertain where to begin. It is also a good tutorial to read through if you just want to know some basic functionality to get started.

## Finding Geospatial Data
Often people want to make maps with data but just don't know where to start. While ideally you can upload some of your own data to CartoDB to play with, maybe you don't have data yet or are not sure where you would find the data you want. In those cases, it can be good to know some sites online to get good geospatial data.

Here are a couple of our favorites:

- **[Natural Earth Data](http://www.naturalearthdata.com/)**:  
  data for borders, coastlines, cities, and many other useful collections!

- **[OpenStreetMap](http://www.openstreetmap.org/)**:  
  here you can get many of the features that make up our cities, including polygons for neighborhoods and cities, roads, and even lampposts.

- **[Harvard Election Data Archive](http://projects.iq.harvard.edu/eda/)**:  
  we use this resource a lot. They keep a fantastic collection of elections data for races around the United States.

- **[The Global Biodiversity Information Facility](http://data.gbif.org/welcome.htm)**:  
  GBIF provides a portal to thousands of collections and millions of biodiversity records. If you want to map nature, there is no better place to start.

## Creating a new table

Uploading your own data is easy. We accept many common data formats such as CSV, Excel, ESRI Shapefiles, and GPX files. If you use SHP files, be sure to create a ZIP archive of all associated files (.shp, .prj, .dbx, etc) and upload the zip with all the files at once. To upload any supported file, either drag it directly onto the dashboard page of your CartoDB account, or click the <span class="ui_element" data-element="create_table">Create your first table</span> button, click 'select a file' and locate the file on your system, finally click 'Create table'.

![Uploading data]({{ '/img/layout/tutorials/simple_points_map/img1.png' | prepend: site.baseurl }})

For this tutorial we are going to use some data from our common data directory. From your account dashboard, click <span class="ui_element" data-element="common_data">Common data</span> in the menu. It will show you the list of available datasets ready to be explored using CartoDB, available to all users. You can download this data or import it directly into your account. To import it, click <span class="ui_element" data-element="add_public_table">the plus symbol</span> on the right of your selected element. For this tutorial we will use `Populated places` dataset.

CartoDB will begin the process of creating a new copy of this table for you. When it is complete you will have your own copy of the table, feel free to add, delete, or modify the data it contains. Take a moment now to explore some of the features in this view. Some of the buttons available will allow you to <span class="ui_element" data-element="add_row">Add a row</span> or <span class="ui_element" data-element="add_column">Add a column</span>. Alternatively, you can run SQL to interact with the data. SQL is something we will cover in more depth throughout later tutorials, but for now it is good to know that the we rely on PostgreSQL and PostGIS, so you can use any of the SQL methods they allow.

## Creating a map

So now you have a dataset you are interested in mapping. Start by selecting the <span class="ui_element" data-element="map_view">Map view</span>, above your table. A map will appear, and your data will be rendered with the default styles. Okay! Points on a map, mission accomplished.

![Our first map]({{ '/img/layout/tutorials/simple_points_map/img2.png' | prepend: site.baseurl }})

Not so quick, let's look around. You can see above the map an option for <span class="ui_element" data-element="change_baselayer">changing the baselayer</span> of your map. This won't change your data, but it sure can change how your data looks. Click on it and test some of the basemaps we provide as options.

Now let's explore some more options for map customization. To the right of the map you can see a toolbar with several buttons.

Almost at the top is the <span class="ui_element" data-element="sql_option">SQL option</span> which allows you to perform SQL queries on your tables. We will see that in another tutorial.

The next button is the <span class="ui_element" data-element="style_option">Style option</span> which gives you a menu for controlling the look of your visualizations. In this example, we can use options in the menu to change the fill color, width, stroke, labelling, etc. Play around with some of the settings to see what they do. By clicking the button again, you can close the interface and go back to seeing just your map.

![Customization]({{ '/img/layout/tutorials/simple_points_map/img3.png' | prepend: site.baseurl }})

Next is the <span class="ui_element" data-element="infowindow_option">Infowindow option</span>, for customizing the contents of the infowindows that are shown when you click your data on the map. You can modify the style of the infowindow and the information that is shown. You can reorder the list of fields in your infowindows by simple drag & drop of the field names in the menu.

![infowindows settings]({{ '/img/layout/tutorials/simple_points_map/img4.png' | prepend: site.baseurl }})

Take your time playing with the options until you get familiar how map customization works in CartoDB.

## Visualize your map

When you want to visualize different datasets or just share the map, you must create a visualization. Visualizations are where you will set and store all the filters and styles that you want to use in your published maps. Visualizations also let you add layers from multiple maps, mixing the data without having to write any complex code or queries. They also let you reuse data from the same tables in multiple visualizations without any difficulty. To get started with visualizations, click the orange <span class="ui_element" data-element="visualize">Visualize</span> button on the top right of the page. You will be prompted to add a name for your visualization, don't worry, you will be able to change it later.

![visualize map]({{ '/img/layout/tutorials/simple_points_map/img7.png' | prepend: site.baseurl }})

Visualizations are similar to tables, you can quickly tell them apart by looking at the icon beside the <span class="ui_element" data-element="table_name">table name</span> and the <span class="ui_element" data-element="visualization_name">visualization name</span> in the <span class="ui_element" data-element="table_view">Table View</span>. Now that you have created your visualization, it will be available on your dashboard.

## Publish your map

Now that you have a Visualization just the way you want it, let's share it with some friends. Click the green <span class="ui_element" data-element="publish">Publish</span> button in the top right of the page. From here you can customize how your published map is presented, including zoom and center, which interface elements to display, toggling layers, social media links, etc. At the bottom you will find a URL to share your Visualization via Twitter, email, or anywhere else. When you share that link, viewers will only be able to explore it on the map, they will not be able to edit any of your data. For more details, take a look at next tutorial.

![publish map]({{ '/img/layout/tutorials/simple_points_map/img5.png' | prepend: site.baseurl }})

## Bonus: Most populated cities

If you are ready to start digging into some SQL, try this next step. Scroll to the right through your table until you find the column titled `pop_max`. This column lists the max population of each city. Let's see the cities in the world over 5 million people. Select the <span class="ui_element" data-element="sql_option">SQL option</span> and enter the SQL to find those cities:

{% highlight sql %}
SELECT *
FROM ne_10m_populated_places_simple
WHERE pop_max > 5000000
{% endhighlight %}

Paste it in the SQL window and push <span class="ui_element" data-element="apply_query">Apply query</span> to see the results. You will be able to create a table from that query or clear the view. You can check the results in both the <span class="ui_element" data-element="table_view">Table view</span> and in the <span class="ui_element" data-element="map_view">Map view</span>.

![Performed query]({{ '/img/layout/tutorials/simple_points_map/img5.png' | prepend: site.baseurl }})
