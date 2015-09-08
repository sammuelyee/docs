---
layout: platform_item
title: FAQs
slug: faqs
js_asset: "editor"
---
## Tables and Data

### What databases are supported by CartoDB?

The CartoDB geospatial database is built on the [PostgreSQL](http://www.postgresql.org/docs/9.1/static/) platform and supports advanced  [PostGIS](http://postgis.net/docs/manual-2.0/) capabilities. All of our tables include `the_geom` column, which is a geometry field that indexes geometries in the EPSG:4326 (WGS 1984) coordinate system. All tables also automatically generate and update `the_geom_webmercator` column, which references the column internally to quickly create tiles for maps.  The CartoDB Platform connects your database with the Map API and the SQL APIs so that you can interact with data remotely and access the most recent data libraries.

Optionally, CartoDB offers an Enterprise solution enabling you to connect your own database to our platform. Contact [Sales](mailto:sales@cartodb.com) for more information.

### How to export datasets from CartoDB?

{% include export_dataset.html %}

### What licensing terms does CartoDB administrate for my uploaded data?

See the terms and conditions for Subscriber Content at  [http://cartodb.com/terms#subscriber](http://cartodb.com/terms#subscriber).

### Why isn't my single lat/long column appearing as georeferenced data?

Ensure that your longitude and latitude coordinates appear in separate columns. If both your lat/long coordinates are contained in the same column, your data will not be georeferenced. For details about how to georeference data with the CartoDB Editor, see [Georeference Data](cartodb-editor.html#georeference-data).

You can split lat/long coordinates into separate columns by applying an SQL query:

1. Create two new columns in your table, of type string, with names "latitude" and "longitude".

2. Apply the following SQL queries to split your unique coordinates column into two separate columns:

{% highlight sql %}
UPDATE _tablename_ SET _latitude_ = split_part(_coordinates_, ', ', 1)

UPDATE _tablename_ SET _longitude_ = split_part(_coordinates_, ', ', 2)
{% endhighlight %}

**Note:** The SQL function defines the value of the coordinates column to be *lat, long*. If you use a different separator, or your coordinates are in a different order, apply this example format to your specific syntax. To learn more about SQL, see The Map Academy course about [SQL and PostGIS in CartoDB](http://academy.cartodb.com/courses/04-sql-postgis.html).

### What format does CartoDB use for geographic coordinates?

CartoDB utilizes geographic coordinates written as [decimal degrees](http://en.wikipedia.org/wiki/Decimal_degrees). Applying a latitude and longitude format is an alternative to using degrees, minutes and seconds. Decimal degrees is the most common georgraphic coordinate format used for web mapping applications.

### Why has my dataset size increased after uploading to CartoDB?

 A database table has a lot more storage considerations than a CSV file. For example, an uploaded dataset contains indexes and data types. It is also important to recognize that data stored on a disk is optimized for lookup and retrieval speed over storage space. 

### Can I synchronize my datasets in real time?

{% include sync_datasets.html %}

### I have a synced dataset, how can I modify the column types?

When working with a synced dataset, your data is not editable while your dataset is connected to the source. If you need your columns to have a specific data type, you can apply the following query. (It selects only the columns you need from your original dataset by changing the column type with the `CAST (column_name as type)` syntax).

**Note:** Different cast column types are *text, int, date*, or *boolean*.

{% highlight sql %} 
SELECT cartodb_id, the_geom_webmercator, the_geom, CAST (_number_column_name_ AS _text__), CAST (_text_column_ as _int_) FROM tablename
{% endhighlight %}

Alternatively, you can also apply the `column_name::type` syntax, which is especially useful when casting date columns, as shown in the following example.

{% highlight sql %} 
SELECT cartodb_id, the_geom_webmercator, the_geom, my_date_column::timestamp FROM tablename
{% endhighlight %}

###How do I geocode IP addresses that are included in my data?

CartoDB requires that IP addresses are in an isolated column in order recognized and geocoded.  You can run an SQL query to store values in a new column and isolate IP addresses. For example:

{% highlight sql %}UPDATE tablename SET new_ip_column = substring(old_ip_address_column_name, '(?:\d{1,3}\.){3}\d{1,3}'){% endhighlight %} 

Optionally, from your datasets dashboard of the CartoDB Editor, click [*Georeference*](cartodb-editor.html#georeference-data) from the Edit menu and select *IP Addresses* to select where your IP Addresses are stored.

### How can I lock a dataset/map?

To prevent your data from undesired changes, you can lock your datasets and maps. Locking a dataset or map hides it from your dashboard.

**Locking a Dataset/Map**

There are several methods to lock a dataset or map. 

***Note:** The following example describes how to lock a dataset, but the same procedure applies to maps. Options are applicable based on the selected dashboard.*

1. Click *Your datasets* from your dashboard drop-down menu
	
	The datasets view appears, displaying all of your datasets. 
	
	You can access the lock options directly from the dashboard, or from a selected view.  
	
2. From the dashboard:
	 - Select a dataset so that it is highlighted. A toolbar shortcut to the dataset options appears. This enables you to select dataset options without viewing it
	 
	 - Click *Lock dataset...* from the toolbar shortcuts
	 
	 <p class="wrap-border"><img src="{{ '/img/layout/faqs/lock_dataset_toolbar.png' | prepend: site.baseurl }}" alt="Dataset Edit Options" /></p>
	 
	 A confirmation dialog box appears.
	 
	 - Click *OK,LOCK*
	 
	 The dashboard refreshes, hiding the locked dataset from the view.
	 
3. From a selected view:

	- Click the name of a dataset
	
	The selected dataset opens in the Data View.
	
	- Select *Lock dataset* from the Edit menu
	
	<p class="wrap-border"><img src="{{ '/img/layout/faqs/lock_dataset_edit_menu.png' | prepend: site.baseurl }}" alt="Lock dataset edit menu" /></p>

**Viewing Locked Datasets/Maps:**

Once your dataset is locked, you can access it from the Datasets menu options, or from the link showing your locked datasets on the bottom of your dashboard. If you attempt to view a locked dataset, a confirmation dialog appears. You are prompted to unlock your dataset before viewing it.

The following image displays the *Your locked datasets* option, and the *Show your # locked dataset* option from the Datasets dashboard.

<p class="wrap-border"><img src="{{ '/img/layout/faqs/show_locked_datasets.png' | prepend: site.baseurl }}" alt="Show locked datasets" /></p>

### Why isn’t my Shapefile importing?

CartoDB creates datasets from shapefiles by importing a single zipped file. If your shapefile is not importing, make sure that:

1. You are uploading a zipped file, and not just one of the files it contains, such as a .shp file.
2. Your zipped file contains .shp, .dbf, .shx, and .prj files.
3. Your file names all have the same prefix. For example, myshapefile.zip, myshapefile.shp, myshapefile.dbf, myshapefile.shx, and myshapefile.prj.

View the [How to Import a Shapefile in CartoDB](http://docs.cartodb.com/tutorials/import_shapefile_in_cartodb.html) tutorial for more details.

### Why isn't my geodatabase file importing?

If you are uploading a file geodatabase, our importer assumes only one layer per upload. As a workaround, you can unzip your geodatabase file, and re-zip each individual shapefile's components together.

- For example, unzip the geodatabase zip file containing buildings.cpg, buildings.dbf, buildings.prj, buildings.shp, buildings.shx, streets.cpg, streets.dbf, streets.prj, streets.shp, streets.shx 

You can either:

 - Zip buildings.cpg, buildings.dbf, buildings.prj, buildings.shp, buildings.shx together and name it buildings.shp; 
 
 or
 
 -  Zip streets.cpg, streets.dbf, streets.prj, streets.shp, streets.shx as streets.shp; 
 
Once you determine how to zip the shapefile layers, import both shapefiles individually to your CartoDB account.

### Why is my URL-imported dataset empty?

When you create a dataset in the CartoDB Editor by importing data from a public URL, an empty dataset is generated if the proper files are not imported from that data.  Download the URL file and check that it contains information. If the URL provides you with a .zip containing more than one file, CartoDB only uploads one of them. 

To create your dataset properly, import only the data file you need. See a list of the [supported file formats](http://docs.cartodb.com/cartodb-editor.html#supported-file-formats) that CartoDB accepts.

**Note:** If you are working with a [shapefile](http://docs.cartodb.com/tutorials/import_shapefile_in_cartodb.html), its components must be uploaded in a single zip file. 
		
**Tip:**  View the [Common Data](https://common-data.cartodb.com/maps) section to see if your public URL's data is already available through CartoDB.

### How can I export my dataset without georeferenced data?

In some cases, you might want to export your dataset without the location information (georeferenced data). While you are not able to manually delete `the_geom` column from your dataset, you can apply an SQL query to create a new dataset and specify which data to include in your export. From the CartoDB Editor, click *SQL* from the CartoDB sidebar to open the Custom SQL query. Enter the following request:

	{% highlight sql %}
SELECT {column name}, {another column name} FROM {tablename}
{% endhighlight %}

- Replace `column name` and `another column name` with the names of columns to include in your export
	
	**Tip:** You can add more columns to your result by adding more comma-separated column names. 
- Replace `tablename` with the name of your current dataset
- Click *Apply query*

	The data view refreshes, excluding your georeferenced data.
	
- Click *Export* from the Edit menu to export your dataset

### How can I export latitude and longitude values?

CartoDB point datasets contain *the_geom* column with latitude and longitude coordinates. Exporting *the_geom* renders a column in WellKnownBinary format, or WKB. For example, a field containing "-73.9696, 40.6754" appears in a CSV as "0101000020E6100000000000800D7E52C0E128A68274564440". You can export *the_geom* as latitude and longitude instead by modifying your dataset with an SQL query.

1. Create a new number type column for latitude, and one for longitude  
2. With the CartoDB Editor, [Custom SQL query option](cartodb-editor.html#custom-sql), enter:  
	{% highlight sql %} 
	UPDATE my_dataset
	SET lon_column = ST_X(the_geom), lat_column = ST_Y(the_geom)
	{% endhighlight %}
	
- Replace your datasets name for `my_dataset`  
- Replace your new blank longitude column for `lon_column`  
- Replace your new blank latitude column for `lat_column`  

Click *Apply query* , *the_geom* coordinates are split into the appropriate latitude and longitude columns. If you export your dataset as a CSV, the values appear as numbers.

## Maps

### How to add my own images to infowindows?

To use your own images for customizing your infowindows at CartoDB:

1. Select [*infowindow*](cartodb-editor.html#infowindows) from the CartoDB sidebar of your maps dashboard

2. Select *image header* 

3. Ensure that you have a 'string' column in your dataset and define the column with the URL of the image you want to show in the image header

4. From the infowindow panel, a list of all the dataset columns appear. Click and drag this defined URL column to be the first column in the infowindow list and activate the column (with the slider button)

<p class="wrap-border"><img src="{{ '/img/layout/faqs/image-infowindow.png' | prepend: site.baseurl }}" alt="How to add my own images to infowindows" /></p>

### How to customize infowindows?

The map infowindows panel enables you to toggle the view with the *Change HTML* option. You can edit the layout, write static content, and embed external resources directly in the HTML code. Click *Apply* to apply your custom HTML code to the infowindow. 

<p class="wrap-border"><img src="{{ '/img/layout/faqs/infowindow_changehtml.png' | prepend: site.baseurl }}" alt="Infowindow Change HTML" /></p>

**Tip:** For more information, see the [Full editing of infowindow HTML](http://blog.cartodb.com/post/61664564416/full-editing-of-infowindow-html) blogpost.

### How can I delete legends or combine them?

The legends option is available from the CartoDB sidebar. You can disable a legend from a layer by selecting *none* as the Template option. If you want to merge the legends, apply *custom* from the Template drop-down menu. This option enables you to build a custom legend.

<p class="wrap-border"><img src="{{ '/img/layout/faqs/delete-legends.png' | prepend: site.baseurl }}" alt="How can I delete legends" /></p>

### How to modify the size of the marker in a non-bubble map?

​From the CartoDB Editor, select *wizards* from the CartoDB sidebar and select *Category* as the map type (or select another non-bubble map type). Customize your map to correspond to your categories.
​

​With respect to size, add the `marker-width` property by applying CartoCSS parameters. Click *cartocss* from the CartoDB sidebar and apply the following style with the CartoCSS editor:
​
	{% highlight scss %}
#your_table_name {
  marker-width: [your_number_column]/1000;
}
{% endhighlight %}
​
**Note:** The code is divided by 1000 because the values of the column are very big. You can adjust this to your data by applying divisions or multiplications, depending on how you want to visualize the points.

### How to create custom filters for a map?

You can create custom filters for interacting with your maps by using the CartoDB.js (JavaSscript) API. Learn more about CartoDB.js from the [CartoDB.js](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html) Map Academy course.

**Tip:** The following links display examples of [custom filters](http://cartodb.github.io/cartodb.js/examples/filters-template/) and sample [source code](https://github.com/CartoDB/cartodb.js/tree/develop/examples/filters-template).

### How many layers can my map have?

The maximum number of layers per map depends on your CartoDB account. All plans contain at least four layers and increase up to six layers, depending on your [account type](https://cartodb.com/pricing/). Please [contact us](mailto:sales@cartodb.com) if you need a custom number of map layers for your account.

### How to create dotted lines in CartoDB?

Apply the `line-dasharray` CartoCSS property, as shown in the following example:

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

### How can I get rid of the white border around the points on the map?

Apply the zero value to the `marker-line-width` CartoCSS property, as shown in the following example:

{% highlight scss %}
#your_table_name {
  marker-line-width: 0;
}
{% endhighlight %}

### Can I have different geometries in the same layer?
No. Each layer is related to a geometry. For example, if you need to map polygons and points on the same map, apply two different layers for each geometry.

### How can I set different colors for my icon markers?

You can set icons as markers for map points with the map wizard options (Click *wizards* from the CartoDB sidebar).  Additionally, if you are using SVG images (and/or any of the icons available through the map wizard options), you can apply different colors for a single icon. Click *cartocss* from the CartoDB sidebar to apply custom CartoCSS styling options to your map.

The following example displays how to combine the CartoCSS properties for `marker-file` and `marker-fill`: 

{% highlight scss %}
#dataset {
   marker-fill-opacity: 0.9;
   marker-file: url(http://com.cartodb.users-assets.production.s3.amazonaws.com/simpleicon/map43.svg);
   marker-width: 10;
   marker-fill: #F11810;
}
{% endhighlight %}

### How can I add an hyperlink in a text element?

If you have a text element in your map and you want to include a link, apply Markdown syntax to the text element. Hyperlink text is delimited by square brackets. The following example displays markdown syntax for adding a hyperlink to a text element:

{% highlight bash %}
You can check an example [here](http://www.cartodb.com).
{% endhighlight %}

- Enter a set of regular parentheses ``( )`` immediately following the closing square bracket of the text element ``[ ]`` 
- Inside the parentheses, enter the URL of the hyperlink

### How do I remove the CartoDB logo from my map?

You can remove the "POWERED BY CARTODB" text and the CartoDB logo from your maps by using the [Map Options](cartodb-editor.html#displaying-map-options).

- From a selected map, click the *Options* selector to view the Map Options
- Click the *CartoDB Logo* slider button to display or remove the CartoDB brand on the map

<p class="wrap-border"><img src="/img/layout/faqs/options_cartodb_logo.png" alt="Remove CartoDB Logo" /></p>

**Note:** This feature is only available for certain account types that include the *Removable brand* feature. Contact [Sales](mailto:sales@cartodb.com) if you are interested in this feature.

### Why is my infowindow showing an error?

If you are working on your map through a connection that is behind a firewall or proxy, some requests may be blocked. If requests are blocked, some parts of your map will not load. In some cases, this indicates that information you are trying to display in your infowindow will not appear.

As a workaround, use an HTTPS connection. HTTPS encrypts your data so that your firewall or proxy will not block these specific CartoDB requests.

### Why are my map labels cut off?

If some of your labels have words that appear cut off at the tile edges, the buffer area in your map is too small. You can fix this by increasing the value of the `buffer-size` CartoCSS property. Click *cartocss* from the CartoDB sidebar and apply custom CartoCSS styling options to your map, as shown in the following example:

{% highlight scss %}
Map {
  buffer-size:128;
}
{% endhighlight %}

**Note:** The buffer-size value needs to be a power of two in order to be valid.

## Manipulating Your Data

### How do I create an animated map?

If you have a dataset that contains a column that describes the date when an event occurred, you can map this dynamically by using the Torque map option. 

- From the Maps view of a selected map, click *wizards* from the CartoDB sidebar
- Select *Torque* as the map type
- Ensure that *Time* is selected for the respective column

<p class="wrap-border"><img src="{{ '/img/layout/faqs/torque.png' | prepend: site.baseurl }}" alt="Torque" /></p>

### How can I show only one country/area/region on a map?

If you would like to have a map featuring only one region or a given set of boundaries, you can define this with a custom SQL query. From the CartoDB Editor, click *SQL* and apply the following statement: 

{% highlight sql %} 
SELECT * FROM tablename WHERE name = 'country/region/area'
{% endhighlight %}

<p class="wrap-border"><img src="{{ '/img/layout/faqs/isolatecountry.png' | prepend: site.baseurl }}" alt="How to isolate country" /></p>

Create a new dataset from the query results and choose a solid color as your basemap. This ensures that only your selected area is displayed. 

**Tip:** If you are comfortable working with the viz.json object, you can add custom code to your js file to set the zoom level and disable panning. For example, see [Blocking panning with createVis](http://bl.ocks.org/iriberri/3c1b32c58a5fe4f4a886). For more details about SQL and PostGIS in CartoDB
Queries to visualizations, see [The Map Academy](http://academy.cartodb.com/courses/04-sql-postgis.html) course.

### How can I have interactivity in a Torque layer?

Currently, Torque layers do not have interactivity options. However, you can add two Torque layers on a map to stimulate interactivity.

<p class="wrap-border"><img src="{{ '/img/layout/faqs/torque-interactivity.png' | prepend: site.baseurl }}" alt="How can I have interactivity in a torque layer" /></p>


- Add one static layer where the marker opacity is very low (almost invisible) and enable infowindows for the layer
- Add one Torque layer
- In order to keep all points on the map, apply the cumulative option

### Can I calculate from/to routes with CartoDB?

CartoDB does not include routing functionality between different locations, or retrieving real distances for driving routes. If you need to include or construct this detail of information for your spatial application, we recommend you use external APIs and integrate the results with your CartoDB dataset. 

**Tip:** Some examples of external routing APIs are [Project OSM](http://project-osrm.org/) or [Developer.nokia.com](http://developer.nokia.com/community/wiki/HERE_Maps_API_-_Advanced_Routing).

## Basemaps

### How can I use NASA imagery?

You can add NASA imagery as an external resource with the Change basemap option on a selected map. For details, see [Including an external basemap](cartodb-editor.html#including-an-external-basemap).

### I have topographical maps in JPG and pdf formats. How can I convert these and add them as base layers on my map?

You can use code to apply CartoDB.js, in combination with Leaflet, to create overlays with images. Learn more about CartoDB.js from [The Map Academy](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html) course and this [Leaflet](http://leafletjs.com/reference.html#imageoverlay) example.

## Sharing Maps

{% include sharingmaps.html %}

### How to print maps in CartoDB?

From the Maps View of a selected map, you can [export the map image](cartodb-editor.html#export-image) and print it.  If you are publishing your map as a static image, ensure to add attributions for your map.

**Tip:**  For more information about working with static maps, see the [Introducing CartoDB static maps](http://blog.cartodb.com/static-maps/) blogpost.

### How can I set the position of an embedded map?

In order to set the initial position of a map that you want to embed, adjust the position and the zoom value in the map itself. Once you share it, the map appears identical to how it appears in the CartoDB Editor. If you want to edit the positioning options after sharing your map, you can add the zoom, latitude, and longitude parameters to the URL code, as follows:

{% highlight bash %}
http://<username>.cartodb.com/viz/<viz_id>/embed_map?zoom=3&center_lat=0&center_lon=0
{% endhighlight %}

You can also apply the same workaround in the HTML code of your embedded map.

If you are using [CartoDB.js](http://docs.cartodb.com/cartodb-platform/cartodb-js.html), include these values in the options of the createVis method:

{% highlight javascript %}
cartodb.createVis('map', 'http://documentation.cartodb.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json', {
  center_lat: 43.90,
  center_lon: -97.55,
  zoom: 5
});
{% endhighlight %}

## Your Account

### What are geocoding credits?

Geocoding credits are geocoding matches allocated to your account. With our geoocoding service, you can translate addresses into coordinates for points that will be shown in your map. Each geocoding match equals one geocoding credit, so if you geocode a dataset with 100 rows, 100 geocoding credits are allocated from your account. You are notified if you reach the maximum quota of geocoding credits for the month. 

**Note:** Geocoding credits are allocated to your account and are different from the georeference feature. [Georeferencing data](cartodb-editor.html#georeference-data) converts ZIP codes, IP addresses, counties, countries, and cities as coordinated data. Georeferencing data does not use any of your geocoding credits.

### What does the map view number indicate?

Map views count how many times your map has been visited, regardless if it was shown in your public CartoDB profile page, in the CartoDB Editor, or if the map was embedded in your own site.

<p class="wrap-border"><img src="{{ '/img/layout/faqs/mapviews.png' | prepend: site.baseurl }}" alt="map views from public profile" /></p>

### I am a student/researcher, do you offer discounts for education?

We offer special pricing for academic purposes, including a FREE Academy plan that allows you to have unlimited datasets, as well as a discount of 20% on the rest of our plans. The pricing page for education is available [here]({{ '/industries/education-and-research/' | prepend: site.cartodb-baseurl }}).

### Are there special plans for journalist and news media on CartoDB?

If you are a journalist and you have special needs for CartoDB, please contact [Sales](mailto:sales@cartodb.com) to discuss the available options.

### What does the "Removable brand" Account feature mean?

The Removable brand feature, included for certain [account types](https://cartodb.com/pricing/), enables you to remove the "POWERED BY CARTODB" text from your maps and removes the CartoDB brand from your maps. See the [How do I remove the CartoDB logo from my map?](#how-do-i-remove-the-cartodb-logo-from-my-map) procedure for details.

**Note:** This feature is only available for certain account types. Contact [Sales](mailto:sales@cartodb.com) if you are interested in this feature.

### I used my Google account to log into CartoDB, how can I change my login account email and disconnect my Google account?

If you are logged into CartoDB through your Google account and you want to unlink your account, edit your *Account settings* and "Disconnect your Google+ account." You are automatically prompted to set a new password, as you will need it to access your CartoDB account once you disconnect it from your Google session.

## GDrive

### How can I unlink my GDrive account from CartoDB?

In order to unlink your Google Drive account from the importing tool of CartoDB, you will have to deny the permissions in the account settings of your Google account.

### "There was an error trying to get your service token or you didn't finish the oAuth process. Try again please." error

That error is caused by the permission configuration of your GDrive Google account. 

* Make sure that pop-up windows are enabled in your browser and the authorization window is opened. Your browser will raise a warning about this if you have pop-ups blocked: enabling them temporarily for the CartoDB site will solve the issue.
* If you are using a corporate account:
  * Please check with your administrator that you have Drive enabled.
  * Ask your administrator whether "Allow users to install Google Drive apps" is enabled at "Google Apps > Settings for Drive".

### "Token is not present" errors

This error occurs because Google gives one token per application. If you connect your CartoDB account with Google Drive, it remains connected, so if you try to connect another CartoDB account with the same Google Drive account, you will get an error. This happens because Google Drive considers CartoDB a single application, and is not able to differentiate that requests are coming from two separate accounts within that application. 

To connect Google Drive to a second CartoDB account, you can either revoke access to the first CartoDB account, or create another Google Drive account to add your dataset from.

## Other Technical Questions

### Can CartoDB display real time data from a SQL database connection?

Unfortunately, CartoDB does not allow reading data from a SQL connection in real time. Nevertheless, you can use the SQL API for writing data into CartoDB.

### How can I use CartoDB.js and Mapbox.js together?

If you want to use all the features of CartoDB (infowindows, legends, dynamic layers) with Mapbox basemaps, view the  following example:

- [http://bl.ocks.org/javisantana/7200781](http://bl.ocks.org/javisantana/7200781)

If you want to use Mapbox.js features, and show a CartoDB layer (without any CartoDB feature), view the following example:

- [http://bl.ocks.org/javisantana/f485d193884983820cd3](http://bl.ocks.org/javisantana/f485d193884983820cd3)

### I have a column with a GeoJSON, how can I set the_geom value to this?

Modify the following query with your values:

{% highlight sql %}
UPDATE your_table SET the_geom = st_setsrid(ST_GeomFromGeoJSON(your_GeoJSON_column), 4326)
{% endhighlight %}

### Does CartoDB work offline?

No, CartoDB needs an internet connection. The application uses several services and libraries that cannot be hosted locally.  We recommend you install the software, as it is open source.

### What are the supported browsers?

A modern browser is required in order to use the authoring tool to perform the map functions.  Published maps are maps that people consume. In most cases, published maps are rendered through a minimum of IE7. 

### Does CartoDB have multi-user functionalities?

If you are interested in multi-user accounts, our Enterprise plans offer team options for multi-user functionality. Contact [Sales](mailto:sales@cartodb.com) for more information.

### Do Torque maps move polygons/polylines?

No, Torque does not work with polygons. The Torque wizard is only available for **points**.  Alternatively, there are other options that you could use to show different polygons with respect of time:

- The JavaScript API, [CartoDB.js](http://docs.cartodb.com/cartodb-platform/cartodb-js.html), enables you to add interactivity to your maps. Learn the basics of CartoDB.js from [The Map Academy](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html) course
- In combination with our [SQL API](http://docs.cartodb.com/cartodb-platform/sql-api.html), you can build a time-slider and show different polygons depending on how they evolve with respect to time

	**Tip:** See an example of this [time slider](https://github.com/CartoDB/cartodb.js/blob/develop/examples/time_slider.html) workaround.

### My heatmap does not work in IE9?

In order for a heatmap to work, the browser it is being viewed from needs to support cross domain requests for images. Internet Explorer 9 supports cross domain requests for documents, but not images. However, cross domain requests for images are supported in IE10 and up.


