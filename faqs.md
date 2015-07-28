---
layout: platform_item
title: FAQs
slug: faqs
js_asset: "editor"
---
## Tables and data

### Which databases are supported by CartoDB?

One of the main components of CartoDB is its geospatial database built on PostgreSQL and PostGIS. This means that by default the CartoDB platform works over PostgreSQL due to making heavy use of PostGIS advanced capabilities. This way, if the CartoDB built-in features are not enough to perform your analysis, you can take advantage of the full power of PostGIS.

We offer the option of connecting your own database to CartoDB as part of our Enterprise features in order to adapt the platform to your specific needs. If you are interested, let us know at sales@cartodb.com.

### How to Export Datasets from CartoDB?

You can export any of your datasets for use offline. The Export option is available from the Edit menu of your Data View.
  
1. Click *Your Dataset* from the dashboard drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/Select_Your_Dataset.png' | prepend: site.baseurl }}" alt="Select Dataset" /></p>

    The page refreshes displaying a list of your datasets. 

2. Select the name of the dataset to view  

    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/export_selectdatasetname.png' | prepend: site.baseurl }}" alt="Select Name of Dataset" /></p>

    The page refreshes displaying the Data View for the selected dataset. 

3. Select *Export* from the Edit drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/export_dataset_menu_option.png' | prepend: site.baseurl }}" alt="Export Option from Edit Menu" /></p>

    The export dataset options appear. 

3. Select the preferred file format  

    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/export_dataset.png' | prepend: site.baseurl }}" alt="Export Dataset File Type" /></p>

    **Note:** CartoDB supports the following [Supported File Formats.](http://docs.cartodb.com/cartodb-editor.html?__hstc=181257784.3dc04f00a6e2b270f27ca62681fe59f6.1437747025723.1438089650929.1438108963825.5&__hssc=181257784.33.1438108963825&__hsfp=1878368218#supported-file-formats)

    The dataset is downloaded. 

**Tip:** If you are using the SQL API, you can access downloads directly using your table URL by...

There is a pro-tip for accessing downloads directly using your table URL. You can make use of the SQL API to run any query and ask for the results to be retrieved in different formats. For example:

<div class="code-title notitle code-request"></div>
{% highlight bash %}
http://{USERNAME}.cartodb.com/api/v2/sql?format=csv&q=SELECT+*+FROM+tm_world_borders_sim
{% endhighlight %}

For more background on SQL, see the [Map Academy](http://academy.cartodb.com/courses/04-sql-postgis.html) course.

### Are there any licenses on the data I upload to CartoDB?

For general rights on content, see: [http://cartodb.com/terms#subscriber](http://cartodb.com/terms#subscriber).

### I have a column with the coordinates but my data is not georeferenced

​This may be happening because you have both coordinates in the same column, and as you see in the wizard for georeferencing, it asks about two columns, one with longitude and another with the latitude.
​
​If you split this unique coordinates column in two, and apply again the georeferencing process by taking into account both columns, your data will be georeferenced.

You can achieve this easily by following these steps:

1. Create two new columns in your table, of type string, with names "latitude" and "longitude".

2. Use the following SQL queries that will split your unique coordinates column into two:

{% highlight sql %}
UPDATE _tablename_ SET _latitude_ = split_part(_coordinates_, ', ', 1)

UPDATE _tablename_ SET _longitude_ = split_part(_coordinates_, ', ', 2)
{% endhighlight %}

Notice that these SQL functions are expecting the value of the coordinates column to be similar to: "lat, long". If you use a different separator or your coordinates are in different order, you will have to adapt the previous queries to your specific syntax. To learn more about SQL check out this [Map Academy](http://academy.cartodb.com/courses/04-sql-postgis.html) course.

### Which format uses CartoDB for the coordinates?

CartoDB understands and utilizes the geographic coordinates written as [decimal degrees](http://en.wikipedia.org/wiki/Decimal_degrees). This is a way to express the latitude and the longitude as an alternative to using degrees, minutes and seconds. It's used in most of the web mapping applications nowadays.

### Why have the size of my tables increased after uploading them to CartoDB?

This happens for several reasons. First and foremost, a database table has a lot more storage considerations than a CSV. For example, indexes. It is also important to consider that the actual way that data is stored on disks is optimized for lookup and retrieval speed over storage space. A CSV is made so you can optimally store data - you open it, load it all into a program for a limited amout of time while you edit it, then save it, and be done. The database has things like data types, etc. 

### Can I synchronize my tables in real-time?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/force-sync.png' | prepend: site.baseurl }}" alt="Can I synchronize my tables in real time" /></p>

By using the feature of sync tables, the shortest automatic syncing interval is 1 hour, but you can force a manual synchronization each 15 minutes.

### I have a sync table, how can I modify the column types?

When you are working with a sync table, your data is not editable while your table is still connected to the source. If you need your columns to have some specific data type, you can achieve that by using an SQL query that casts your columns to the type you need to use.

The following query works by selecting all the columns you need and casting the ones you need to change the type using the syntax: `CAST (column_name as type)`. 

Notice that the different types that you can use to cast your columns are: text, int, date, or boolean.

{% highlight sql %} 
SELECT cartodb_id, the_geom_webmercator, the_geom, CAST (number_column AS text), CAST (text_column as int) FROM tablename
{% endhighlight %}

Alternativelly, you can also use the syntax `column_name::type`, which could be specially useful when casting date columns:

{% highlight sql %} 
SELECT cartodb_id, the_geom_webmercator, the_geom, my_date_column::timestamp FROM tablename
{% endhighlight %}

###How do I geocode IP addresses that are included in my data?

CartoDB requires that IP addresses are in an isolated column in order to be able to recognize and geocode them.

A simple way to isolate IPs is to run a couple of SQL queries and store the values in a new column.

You can use a query like:

{% highlight sql %}UPDATE tablename SET new_ip_column = substring(old_ip_address_column_name, '(?:\d{1,3}\.){3}\d{1,3}'){% endhighlight %} 

While still in table view, you will then click on Edit and then choose Georeference layer. You will then choose by IP Addresses and select the column where your IP Addresses are located. 

### How can I lock a dataset/map?

To prevent your data from undesired changes you can lock your datasets and maps. To lock a them, just go to your dashboard, select the element and click on the "Lock map" or "Lock dataset" options that will appear in the top menu. Once a map or dataset is locked, you will find it in the sections "Your locked maps" or "Your locked datasets", respectively.

### Why isn’t my shapefile importing?

CartoDB creates tables from shapefiles by importing a single zipped file. If your shapefile is not importing, make sure that:

1. You’re uploading a zipped file and not just one of the files it contains, such as a .shp file.
2. Your zipped file contains .shp, .dbf, .shx, and .prj files.
3. Your file names all have the same prefix, for example myshapefile.zip, myshapefile.shp, myshapefile.dbf, myshapefile.shx, and myshapefile.prj.

You can check this tutorial about importing shapefiles for more detail: [http://docs.cartodb.com/tutorials/import_shapefile_in_cartodb.html](http://docs.cartodb.com/tutorials/import_shapefile_in_cartodb.html).

### Why isn’t my file geodatabase importing?

If you are uploading a file geodatabase, our importer assumes only one layer per upload. To work around this you can unzip your file geodatabase, and re-zip each individual shapefile's components together. For example, a file geodatabase zip containing buildings.cpg, buildings.dbf, buildings.prj, buildings.shp, buildings.shx, streets.cpg, streets.dbf, streets.prj, streets.shp, streets.shx should be unzipped, then you can (1) zip up buildings.cpg, buildings.dbf, buildings.prj, buildings.shp, buildings.shx together and name it buildings.shp; (2) zip up streets.cpg, streets.dbf, streets.prj, streets.shp, streets.shx as streets.shp; and (3) import both shapefiles individually to your CartoDB account.

### Why is my URL-imported table empty?

When you create a table in the CartoDB Editor by importing data from a public URL, in some cases an empty table will be generated if the proper files are not imported from that data.

Download the URL file and check that it contains information. If the URL provides you with a .zip containing more than one file, CartoDB will only upload one of them. To create your table properly you can import only the data file you need via CartoDB’s Import window (keep in mind that if you’re working with a shapefile it’s components must be uploaded in one [zip](http://docs.cartodb.com/tutorials/import_shapefile_in_cartodb.html). A list of data file formats that CartoDB accepts for upload is [here](http://docs.cartodb.com/cartodb-editor.html#supported-file-formats). We also recommend checking our [Common Data](http://docs.cartodb.com/cartodb-editor.html#common-data) section to see if your public URL’s data is already easily available through our site.

### How can I export latitude and longitude values?

CartoDB point datasets contain the_geom column with latitude and longitude coordinates. Exporting the_geom will render a column in WellKnownBinary format, or WKB. For example a field containing "-73.9696, 40.6754" will show in a CSV as "0101000020E6100000000000800D7E52C0E128A68274564440". You can export the_geom as latitude and longitude instead by modifying your dataset with SQL first. Create a new number type column for latitude, and one for longitude. In the Editor's Custom SQL query panel, type:

{% highlight sql %} 
UPDATE my_dataset
SET lon_column = ST_X(the_geom), lat_column = ST_Y(the_geom)
{% endhighlight %}

Substitute your dataset's name for my_dataset, your new blank longitude column for lon_column, and your new blank latitude column for lat_column. When you apply that query, the_geom's coordinates will be split into the appropriate latitude and longitude columns. If you export your dataset now as a CSV their values will appear as numbers.

## Maps

### How to add my own images to infowindows?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/image-infowindow.png' | prepend: site.baseurl }}" alt="How to add my own images to infowindows" /></p>

In order to use your own images for customizing your infowindows at CartoDB, go to the infowindow preferences menu and select "image header" in the Design option. Now you have to be sure you have a column in your dataset of type 'string' whose content must be the URL of the image you want to show in the header. Then, you have to place this column at first place in the infowindow preferences and, of course, you should also activate the specific column of the URL to be shown.

### How to customize infowindows?

The HTML code of the infowindows can be edited directly in the "Custom HTML" option. This allows you to tweak content layout, write static content, and embed external resources. 

You can check our blogpost about this topic here: http://blog.cartodb.com/post/61664564416/full-editing-of-infowindow-html

### How can I delete legends or combine them?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/delete-legends.png' | prepend: site.baseurl }}" alt="How can I delete legends" /></p>

You can just disable a legend from a layer by applying to it the "none" template. If you want to merge the legends, you will have to perform a "Custom legend". This option is available in the Template selector of the legends wizard.

### How to modify the size of the marker in a non-bubble map?

​First, select in the wizard the Category map or the one you are interested in and customize it to correspond to what you want to do referring categories.
​
​With respect to size, you should add this line to the CartoCSS window inside the general parameters of your table:
​
{% highlight scss %}
#your_table_name {
  marker-width: [your_number_column]/1000;
}
{% endhighlight %}
​
​Notice that in the code it is divided by 1000 because the values of the column are very big. You can adjust this to your data by applying divisions or multiplications depending on how you want to visualize the points.

### How to create custom filters for a map?

In order to create your own filter for interacting with your maps you would need to use our CartoDB.js JavaScript API. Learn more about CartoDB.js in our [Map Academy course](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html).

You can find an example [here](http://cartodb.github.io/cartodb.js/examples/filters-template/) ([source code](https://github.com/CartoDB/cartodb.js/tree/develop/examples/filters-template))

### How many layers can my map have?

The maximum number of layers per map depends on your CartoDB plan. For Magellan plan, this maximum is 4. You can get up to 5 layers with the John Snow and Coronelli plans, and 6 with the Mercator plan. 

If you have special needs for layers, contact us at support@cartodb.com and we'll see how we can help you.

### How to create dotted lines in CartoDB?

It is possible with the property 'line-dasharray', example:

{% highlight scss %}
#your_table_name {
  polygon-opacity: 0;
  line-color: #FF6600;
  line-width: 1;
  line-opacity: 0.8;
  line-dasharray: 10,4;
}
{% endhighlight %}

[Documentation](https://www.mapbox.com/carto/api/2.3.0/#line-dasharray)

### How can I get rid of the white border of the points in the map?

Just go to the CartoCSS tag and look for this line:

{% highlight scss %}
#your_table_name {
  marker-line-width: 0;
}
{% endhighlight %}

​In your case, it will have a value different than 0, so you should only give to it a zero-value. 

### Can I have different geometries in the same layer?

No. Each layer is related to some kind of geometry, so if you need to map polygons and points in the same map, you should use two different layers for each one of them.

### How can I set different colors for my icon markers?

By using the CartoDB wizards you'll be able to set icons as the markers for your points. If you're using SVG images and/or any of the icons we offer in the icon set, you can also select different colors for a single icon by combining the CartoCSS options `marker-file` and `marker-fill` in the CartoCSS tab. 

{% highlight scss %}
#dataset {
   marker-fill-opacity: 0.9;
   marker-file: url(http://com.cartodb.users-assets.production.s3.amazonaws.com/simpleicon/map43.svg);
   marker-width: 10;
   marker-fill: #F11810;
}
{% endhighlight %}

### How can I add an hyperlink in a text element?

If you have added a text element in your map and you want to include a link on it you need to use the Markdown syntax. The link text will be delimited by square brackets. To create a link, use a set of regular parentheses immediately after the closing square bracket. Inside the parentheses, put the URL where you want the link to point, as follows:

{% highlight bash %}
You can check an example [here](http://www.cartodb.com).
{% endhighlight %}

### How do I remove the CartoDB logo from my map?

All maps created with CartoDB have our “Powered by CartoDB” logo in the bottom-left corner by default. If your account uses our Coronelli, Mercator, or Enterprise plans, you have the option to remove this branding. Just click on the Options button in your Map View and toggle CartoDB Logo to it's gray OFF state. "Powered by CartoDB" will no longer appear on your map.

<p class="wrap-border"><img src="{{ '/img/layout/faqs/remove-logo.png' | prepend: site.baseurl }}" alt="Remove CartoDB logo" /></p>

### Why is my infowindow showing an error?

If you're working on your map through a connection which is behind a firewall or proxy, some requests may be blocked by it. If requests are blocked some parts of your map will not load. In some cases this can mean that the information you're trying to show in your infowindow will not appear.

A solution for this is to use an HTTPS connection. HTTPS will encrypt your data, so that your firewall or proxy won't block those specific CartoDB requests.

### Why are my map labels cut off?

If some of your label's words are appearing cut off at tile edges, this can be caused by too small of a buffer area in your map. To fix this you need to increase the buffer-size value. Click on the CartoCSS button in Map View at the top of the CartoCSS code include:

{% highlight scss %}
Map {
  buffer-size:128;
}
{% endhighlight %}

Take into account that in order to be valid, the buffer-size value needs to be a power of 2.

## Manipulating your data

### How do I create an animated map?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/torque.png' | prepend: site.baseurl }}" alt="Torque" /></p>

If you have a dataset that contains a column that describes the date when an event occured, you can map this dynamically by using the Torque option that appears in the wizard of the map. Just make sure that in the configuration of the Torque map you select the correct column with respect to the map you want to change over time.

### How can I show only one country/area/region on a map?

If you would like to have a map featuring only one region or a given set of boundaries, the easiest place to start is by using the SQL wizard in your editor. You could use a SQL statement like: 

{% highlight sql %} 
SELECT * FROM tablename WHERE name = 'country/region/area'
{% endhighlight %}

<p class="wrap-border"><img src="{{ '/img/layout/faqs/isolatecountry.png' | prepend: site.baseurl }}" alt="How to isolate country" /></p>

You would then create a new dataset from query and choose a solid color as your base map so that only your selected area will be displayed. 

If you are comfortable working with the viz.json object, you can add some custom code to your JS file to set the zoom level and disable panning. An example of this can be found [here.](http://bl.ocks.org/iriberri/3c1b32c58a5fe4f4a886) For more background on SQL, check out our [Map Academy](http://academy.cartodb.com/courses/04-sql-postgis.html) course.

### How can I have interactivity in a Torque layer?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/torque-interactivity.png' | prepend: site.baseurl }}" alt="How can I have interactivity in a torque layer" /></p>

For the moment, Torque layers have no interactivity. The trick is to have two layers:

- One static layer where the marker opacity is really low (almost invisible) with infowindow enabled.
- One Torque layer

In order to keep all points on the map, just use the cumulative option.

### Can I calculate from/to routes with CartoDB?

CartoDB doesn't include a functionality for performing routing between different locations nor getting real driving distances for those routes. If you need to include or construct that kind of information for your spatial application, we recommend you to use external APIs as the ones from [Project OSM](http://project-osrm.org/) or [HERE Maps](http://developer.nokia.com/community/wiki/HERE_Maps_API_-_Advanced_Routing) and integrate their results with CartoDB.

## Basemaps

### How can I use NASA imagery?

Using NASA imagery as your basemap is as simple as any other feature on CartoDB. It will take you just seconds to be up and running. In Map View, click on the basemap selector, select "Add yours", and there you'll see a NASA tab. In this tab you will have a date selector, where you will be able to choose the day you want to use, as well as a day/night option.

### I have topographical maps in JPG and pdf formats. How can I convert these to add as base layers on the map?

There is not a direct or easy way to do that from CartoDB. I recommend you use CartoDB.js in combination with Leaflet to create overlays with images. You can learn more about CartoDB.js in our [Map Academy course](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html).

Here you can find an example:

- [Leaflet](http://leafletjs.com/reference.html#imageoverlay)

## Sharing maps

### How do I share a map?

Once you have created and customized your map, you should click on the "Share" option.

There are different ways of sharing a map:

- **Get the link**
  Used in order to share your map directly as it appears in your CartoDB public profile.

- **Embed it**
  HTML code to embed the map in your site. This is very useful for putting interactive maps of your data on your website or blog.

- **Get a simple URL**
  Used in order to share the map itself.

- **API**  
  Gives you a link to your viz.json. You will need this URL if you are working on a more advanced way of using CartoDB.js.

### How do I embed a map in my site/blog?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/share-site.png' | prepend: site.baseurl }}" alt="How do I embed a map in my site/blog" /></p>

The easiest way is embedding a map by means of copying the HTML code that is provided in the "Share" option. 

You will be able to insert CartoDB maps in WordPress, Joomla, Drupal, etc. if you just include the iframe in a HTML code editor.

### How to print maps in CartoDB?

In the map view of your map, the option "Export image" will allow you to get a .png image from your map. Don't forget to add proper attributions if you publish your map as an image! You can find more information about our Static Maps in [this blogpost](http://blog.cartodb.com/static-maps/).

### How can I set the position of an embedded map?

In order to set the initial position of a map that you want to embed, you need to adjust this position and the zoom value in the map itself: once you share it, the map will be shown in the same position that it is in your Editor. If you want to edit the way that your links and embed maps are centered/zoomed after sharing, you can add the zoom, latitude, and longitude parameters to the simple URL as follows:

{% highlight bash %}
http://<username>.cartodb.com/viz/<viz_id>/embed_map?zoom=3&center_lat=0&center_lon=0
{% endhighlight %}

You can also use the same trick in the HTML code that is given to embed your maps.

In case you're using [CartoDB.js](http://docs.cartodb.com/cartodb-platform/cartodb-js.html), you can include these values in the options of the createVis method:

{% highlight javascript %}
cartodb.createVis('map', 'http://documentation.cartodb.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json', {
  center_lat: 43.90,
  center_lon: -97.55,
  zoom: 5
});
{% endhighlight %}

## Your account

### What are the geocoding credits?

The geocoding credits are the quota for performing geocodings. With our geoocoding service you can translate addresses into coordinates for points that will be shown in your map. Each geocoding wastes one geocoding credit, so if you geocode a table with 100 rows, 100 credits will be wasted.

You should take into account that the georeference tool that converts ZIP codes, IP addresses, counties, countries or cities doesn't count as geocoding but as georeferencing, so this way, you will be able to georeference your data in the map without using the credits.

Each one of our plans include a free quota of geocodings, but extra charges will be applied if this quota exceeds according to our Terms of Service.

### What is a map view?

A new map view happens everytime a map is shown. In a very simple way: map views count how many times your map has been visited, regardless of if it was shown in your public CartoDB page, in the CartoDB Editor, or if the map was embedded in your own site.

### How can I know how many map views has a specific map?

In the "Maps" page you can find graphs of the individual map views for each of your published maps. You're also able to see the number of likes your map has next to its heart icon. The datasets your map uses also show their number of likes when viewed in your "Datasets" page. From there you can also sort your datasets by number of visits by clicking on the jagged line icon near the "New Dataset" button.

### I'm a student/researcher, do you offer discounts for education?

In CartoDB we have a special pricing for academic purposes. We offer a FREE Academy plan that allows you to have unlimited tables, as well as a discount of 20% on the rest of our plans. Pricing page for education can be found [here]({{ '/industries/education-and-research/' | prepend: site.cartodb-baseurl }}).

### Which are the special plans for journalism of CartoDB?

If you are a journalist and you have special needs for CartoDB, let us know at sales@cartodb.com

### What does the "Removable brand" feature mean?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/share-logo.png' | prepend: site.baseurl }}" alt="What does the Removable brand" /></p>

From the Coronelli plan you will be able to remove the CartoDB logo and the "Create your own custom maps with CartoDB" text will not appear below your embedded maps if you don't want it to. For removing the logo, just deselect the option "Logo" in the sharing wizard. Take into account that this option will only be available if your current plan includes the "Removable brand" feature.

### How to disconnect my Google account that I logged into CartoDB with?

If you are logged into CartoDB through your Google account and you want to unlink your accounts you can do it from your Account Settings by clicking the option "Disconnect your Google+ account." You'll be automatically prompted to set a new password as you will need it to access to your CartoDB account once you disconnect it from your Google session.

## GDrive

### How can I unlink my GDrive account from CartoDB?

In order to unlink your Google Drive account from the importing tool of CartoDB, you will have to deny the permissions in the account settings of your Google account.

### I'm getting "There was an error trying to get your service token or you didn't finish the oAuth process. Try again please." errors

That error is caused by the permission configuration of your GDrive Google account. Try this:

* Make sure that pop-up windows are enabled in your browser and the authorization window is opened. Your browser will raise a warning about this if you have pop-ups blocked: enabling them temporarily for the CartoDB site will solve the issue.
* If you're using a corporate account:
  * Please check with your administrator that you have Drive enabled.
  * Ask your administrator whether "Allow users to install Google Drive apps" is enabled at "Google Apps > Settings for Drive".

### I'm getting "Token is not present" errors

This error happens because Google gives one token per application. If you connect your CartoDB account with Google Drive, it remains connected, so if you try to connect another CartoDB account with the same Google Drive account you will get an error. This is happening because Google Drive considers CartoDB a single application, and is not able to differentiate that requests are coming from two separate accounts within that application. 

To connect Google Drive to a second CartoDB account, you can either revoke access to the first CartoDB account, or create another Google Drive account to add your dataset from.

## Other technical questions

### Can CartoDB display real time data from a SQL database connection?

Unfortunately, CartoDB doesn't allow reading data from a SQL connection in real time. Nevertheless, you can use the SQL API for writing data into CartoDB.

### How can I use CartoDB.js and Mapbox.js together

If you want to use all the features of CartoDB (infowindows, legends, dynamic layers) with Mapbox basemaps take a look at the following example:

- [http://bl.ocks.org/javisantana/7200781](http://bl.ocks.org/javisantana/7200781)

If you want to use Mapbox.js features and show a CartoDB layer (without any CartoDB feature) take a look at the following example:

- [http://bl.ocks.org/javisantana/f485d193884983820cd3](http://bl.ocks.org/javisantana/f485d193884983820cd3)

### I have a column with a GeoJSON, how can I set the_geom value to this?

Just modify the following query with your values:

{% highlight sql %}
UPDATE your_table SET the_geom = st_setsrid(ST_GeomFromGeoJSON(your_GeoJSON_column), 4326)
{% endhighlight %}

### Does CartoDB work offline?

Right now CartoDB cannot work without connection to the internet. The application uses several services and libraries that cannot be hosted locally.

We recommend you install the software yourself as it is open source.

### Which are the supported browsers?

You have to differentiate between the authoring tool, which is the place where you perform the maps, which requires modern browsers, and the published maps, which people consume. Those maps actually work down to IE7 in most cases. 

### Has CartoDB multi-user functionalities?

If you are interested in multi-user accounts, we offer Teams through our enterprise plans, just let us know at sales@cartodb.com.

### Do Torque maps move polygons/polylines?

The Torque wizard is only available for **points**. So, Torque doesn't work with polygons. 

But, fortunately, there are other options that you could use to show different polygons with respect of time:
We offer a JavaScript API, [CartoDB.js](http://docs.cartodb.com/cartodb-platform/cartodb-js.html), that you can use to add interactivity to your maps. Learn the basics of CartoDB.js in our [Map Academy course](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html). In combination with our [SQL API](http://docs.cartodb.com/cartodb-platform/sql-api.html), you could build a time-slider and show different polygons depending on how they evolve with respect to time.
You can check an example in this [link](https://github.com/CartoDB/cartodb.js/blob/develop/examples/time_slider.html).

### Why won't my heatmap work in IE9?

In order for a heatmap to work, the browser it's being viewed in needs to support cross domain requests for images. Internet Explorer 9 supports cross domain requests for documents, but not images. However, cross domain requests for images are supported in IE10 and up. Therefore, heatmaps will work from that version of Internet Explorer up.


