---
layout: platform_item
title: CartoDB Editor
slug: cartodb-editor
js_asset: "editor"
redirect_from:
- "/documentation/using-cartodb.html"
---

## One Minute Introduction

<p class="wrap-border"><img src="/img/layout/cartodb-editor/editor.png" alt="Using sync data" /></p>

Your dashboard is your baseline. It has two main sections: **datasets** and **maps**. To get started, you can create a map from your dataset by following these simple steps:

1. Connect **dataset**. You can import a dataset or "start from scratch" by selecting "Empty dataset."
2. Create a new **map** from your dataset.
3. Share it (publicly or privately).

CartoDB accepts data in different formats (Excel, CSV, XML, SHP, GeoJSON, [see all](#supported-file-formats)) and from different sources (see all possibilities for [importing data](#importing-data)). Our interactive wizards make it easy and fun to map your data. Choose a basemap, define legends and infowindows ([what is an infowindow?](#infowindows)), and select how to show your data with custom display options.

_XML files are not directly supported, we support KML and GPX files instead._

When your map is complete, you may keep it private, share it with your colleagues, or publish it to the web by circulating its custom URL or embedding it in your blog.

In this guide, we'll walk through many features of the CartoDB web interface. Our [Map Academy](http://academy.cartodb.com/) lessons will get you started with the basics of map creation. If you are ready to experiment with our powerful APIs, then go to [CartoDB.js]({{ '/cartodb-platform/cartodb-js.html' | prepend: site.baseurl }}) and [SQL API]({{ '/cartodb-platform/sql-api.html' | prepend: site.baseurl }}).

## Datasets

CartoDB operates a database that is capable of storing geospatial information, or geometry. When you import data into CartoDB, you are sending it to a standard database. Under the hood, PostgreSQL is running with the PostGIS extension. Don't worry if you've never heard of these tools - CartoDB takes care of the technical details so that you can get busy making awesome maps.

### Connect Dataset

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/connectdataset.png' | prepend: site.baseurl }}" alt="Adding a new dataset" /></p>

Importing your data to CartoDB is a seamless and flexible process. Pick your preferred method from the following options:

1. **Upload a local file** or **import directly from a public URL**
2. **Sync using Google Drive**
3. **Sync using Dropbox**
4. **Import directly from Twitter**
5. **Create an empty dataset**

The most common import method is to upload a local file or pull data from a public URL. To upload a file, navigate to your dashboard and click **Connect Dataset**. In the automatic overlay window click **Select a File** and navigate to the data you want to upload. Alternatively, you may paste a URL in this field and CartoDB will upload that data. For larger, paid accounts our interface offers an option to sync your data here. You may also import directly from Dropbox or Google Drive.

If you plan to insert data by hand or programmatically, create a blank dataset with the default CartoDB columns and indexes already in place.

CartoDB streamlines mapping tweets with direct access to Twitter API data. Highlights of this feature:

* Go to the source for high-quality data, no third party solutions or scraping techniques necessary
* Search by term or hashtag
* Analyze tweets in a defined timeframe or real-time

To use Twitter data in a map, select the Twitter icon in the upload window. Next, you will be prompted to search for data you want within a specific time period. Remember that your number of available Twitter credits will update automatically and you can always add more.

**You also have the option to import from:**

1. **ArcGIS Server (10.1 or higher)**
2. **Salesforce**
3. **MailChimp**

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/connectdataset2.png' | prepend: site.baseurl }}" alt="Adding datasets from other sources" /></p>

Select the arrow icons to view these options.

### Syncing Datasets

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/syncdataset.png' | prepend: site.baseurl }}" alt="Using sync datasets" /></p>

Users subscribed to "John Snow" or larger paid plans can benefit from CartoDB's sync datasets feature. In order to sync your datasets via Google Drive or Dropbox, click "Connect Dataset" from your dashboard and select the tab for Google Drive or Dropbox, depending on which one you want to use.

Once you select the file that you want to work with, you will need to allow CartoDB access. After, you may choose how often CartoDB should sync your data with your hosted dataset - from never to every hour, day, week, or month.

Following import and sync selection, you will click "Create Dataset", and our importer will start building your database. We pride ourselves on speediness but bigger files sometimes require a little patience.

### Data Library

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/datalibrary.png' | prepend: site.baseurl }}" alt="Common data" /></p>

From your dashboard, you may also access our Data Library, which gives you access to public datasets. Examples of data in the Data Library include World Borders, European Countries, Urban Areas, and Populated Places. Add a dataset from the list to your dashboard and start mapping it.

### Supported File Formats

CartoDB supports an ever-growing number of data types and file formats.

We encourage you to compress your files before importing them. Currently, supported compression and archiving formats include .ZIP and .GZ (also .TAR.GZ and .TGZ). Below are the data file types that CartoDB supports. If the file you are importing does not match one of these types, then the import will fail.

<table>
  <tbody>
    <tr>
      <td>.CSV .TAB *</td>
      <td>Comma-separated values and Tab delimited file</td>
    </tr>
    <tr>
      <td>.SHP **</td>
      <td>ESRI shapefiles</td>
    </tr>
    <tr>
      <td>.KML, .KMZ</td>
      <td>Google Earth Format</td>
    </tr>
    <tr>
      <td>.XLS, .XLSX ***</td>
      <td>Excel Spreadsheet</td>
    </tr>
    <tr>
      <td>.GEOJSON</td>
      <td>GeoJSON</td>
    </tr>
    <tr>
      <td>.GPX</td>
      <td>GPS Exchange Format</td>
    </tr>
    <tr>
      <td>.OSM, .BZ2</td>
      <td>Open Street Map dump</td>
    </tr>
    <tr>
      <td>.ODS</td>
      <td>OpenDocument Spreadsheet</td>
    </tr>
  </tbody>
</table>

_CartoDB prefers datasets that use comma separators. Also, we are only able to import first sheets with tabular formats, and the first row must contain your column headers._

*For Shapefiles, we require that the whole .ZIP file contains the .SHP, .DBF, .SHX and .PRJ files, all prefixed with same name. (For example a `ne_10m_populated_places.zip` file would contain `ne_10m_populated_places.shp`, `ne_10m_populated_places.dbf`, `ne_10m_populated_places.shx` and `ne_10m_populated_places.prj`).*

_XLS and XSLX may take longer than .CSV files. We highly recommend that you export Excel files to .CSV before importing in CartoDB._

### Manage Your Datasets

You may view all of your uploaded datasets on your dashboard's landing page. Feel free to order them by the date modified or created, size, most visited, or most liked.

#### Dataset Privacy Settings

To change the privacy settings of a dataset, click the colored label option on the left hand side of options. Or, select the dataset to reveal a second menu bar and choose the "Change privacy" menu option.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/deletedataset.png' | prepend: site.baseurl }}" alt="Dataset privacy" /></p>

You may choose "Public," "With Link," or "Private". If a dataset is set to public, anyone may find it on your Public Page or roaming the internet. If it requires a link, only those who have the link will be able to find it. If it's private, no one but you will be able to see the dataset.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/datasetprivacy.png' | prepend: site.baseurl }}" alt="Dataset privacy" /></p>

You can also change the privacy settings of a dataset at any time within the data view. From the 'Options' menu, select "Change privacy" or click the colored lock button that appears on the top-left section of the page.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/privacy-dialog.png' | prepend: site.baseurl }}" alt="Dataset privacy" /></p>

Keep in mind that different privacy options will appear depending on your account plan.

#### Delete Dataset
To delete a dataset from the Dashboard, navigate to the Dataset page. Select the dataset you wish to delete, which will reveal a second menu with the option to "Delete dataset." You can also delete a dataset from the Data view page, within the Options menu located in the top-right menu.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/deletetable.png' | prepend: site.baseurl }}" alt="Dataset privacy" /></p>

Keep in mind that deleted datasets cannot be recovered and are permanently removed.

### Viewing Datasets

Once you've clicked on a dataset, there are two ways for you to view your data: Data View and Map View. You may toggle between the two views next to the dataset name.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/dataview.png' | prepend: site.baseurl }}" alt="Viewing Datasets" /></p>

#### Data View

Data View allows you to inspect, filter, and query your data and see the results in a spreadsheet format. The pull out panel on the right of the screen allows you to write SQL queries, apply basic filters, merge two uploaded datasets, and add rows and columns.

#### Map View

Map View allows you to inspect your data as a layer over a basemap. You may apply SQL queries or filters on the view, style the data's symbology using our wizards or by writing your own CartoCSS, and create infowindows.

In the Map View, you may style and filter your data **but** this view is not the same as a shareable map. In order to create a shareable map, click "Visualize" in the top right corner. Keep on reading to learn what you may do from there!

### Supported Data Types

When you upload your data to CartoDB, it will automatically assign a data type to your data such as string, number, date, or boolean. It's important to check that the correct data type is assigned. It is especially important to make sure CartoDB knows if a column is a date type so maps that rely on temporal information such as Torque, animate correctly.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/datetype.png' | prepend: site.baseurl }}" alt="Visualizations" /></p>

The date type is located under the column name. It can be changed by clicking on the date type name under the column name to open a secondary navigation window from which you can select the correct data type.

### Options

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/options.png' | prepend: site.baseurl }}" alt="Options" /></p>

You can perform the following administrative actions in the Options menu:

- **Export**  
  Allows you to export your data as a .CSV, .SHP, .KML, .SVG and .GEOJSON

- **Georeference**  
  Select this to begin georeferencing your data. You may also get an idea of how many of georeferencing credits you have used. Remember, you can always upgrade for more!

- **Duplicate Dataset**  
  Create a new dataset with identical information to your current dataset.

- **Merge Dataset**  
  Merge your current dataset with another existing dataset using either a "column join" (joins two datasets based off of a shared column) or a "spatial join" (joins two datasets based off of their spatial overlaps). For more on how to perform this function, take a look [here]({{ '/tutorials/merging_data.html' | prepend: site.baseurl }}).

- **Change Privacy**  
  Allows you to edit who is able to access the dataset.

- **Delete this Dataset**  
  Entirely delete your dataset. But note that this will also delete any maps that rely on the dataset!

## Maps

### What is a Map Visualization?

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/mapdash.png' | prepend: site.baseurl }}" alt="Visualizations" /></p>

Map visualizations are a combination of one or more datasets that function as layers within a map. Map visualizations can be created after you have imported at least one dataset to your account. Make a new map by navigating to the "Maps" section of your CartoDB dashboard, and select "New Map." Step one of creating a new map is selecting a template for your map. In step two, you select the datasets associated with your map or create an empty dataset for your data. You can also create a new map by selecting a dataset from the "Datasets" section of your dashboard.

After selecting what data you want to visualize, you're ready to start styling it. Change your basemap style and zoom level, layer colors, add custom infowindows, or animate your data over a timeline with our Torque maps. All of your changes are automatically saved (behold, the beauty of the cloud!), so you don't have to worry about losing your work. 

Sidenote: If you need to save a prior draft while working on a newer version, simply duplicate your map, but remember that stylistic changes made in one will not be reflected in the other.

### What are Private Maps?

We've decoupled dataset privacy from map privacy to give you ultimate control over what aspects of your projects are shareable. This way your map (and any information selected on its infowindows) can be viewable while your data remains protected.

### Map Privacy Options

When you are creating your CartoDB visualization you may also edit who has access to it. In order to edit these settings, click on the padlock from the map created on the "Visualizations" section of your CartoDB Dashboard. Here you will also be able to delete your visualization or lock it to prevent any accidental changes in the future.

When you create a map with CartoDB, you can customize who can access it. You can edit the privacy settings for your map from a few places. In the "Maps" section of the dashboard, edit the privacy settings of individual maps by selecting the privacy link in the lower left-hand corner of each listed map.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/mapdash.png' | prepend: site.baseurl }}" alt="Privacy settings in your map" /></p>

You can also edit the privacy settings from the Map View dashboard of each map by selecting the padlock in the top-left corner. Every map is editable. You can change titles, update descriptions to clarify the content and purpose of your maps, or add tags to keep your projects organized and discoverable.

There are four options for map privacy settings.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/privacyoptions.png' | prepend: site.baseurl }}" alt="Privacy settings in your map" /></p>

- **Public**  
  When selected, this setting means that your map will be publicly available and will be displayed in your [CartoDB Public Profile](http://blog.cartodb.com/post/82193209466/interesting-cartodb-profiles).

- **Only People with the Link**  
  With this setting, only users who have the map URL will be able to find your map. These maps will not appear in your CartoDB Public Profile.

- **Password Protected**  
  These maps require a password entry from anyone visiting the map URL before they are able to view the map. These maps will not appear in your CartoDB Public Profile.

- **Private**  
  You alone are able to view your map and it will not appear on your CartoDB Public Profile.

### Map Metadata

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/vizheader.png' | prepend: site.baseurl }}" alt="Map Metadata" /></p>

For each map you may edit the name, add a description, data sources, license, and tags to keep them organized and discoverable. You will find the "Edit Metadata" option under the map title.

You can use the description section to clarify the content and purpose of your map. Use tags to unite projects or themes. You can also add license information as needed.

###Toolbars

The toolbar is located at the top of the map editor, directly beneath your visualization name and metadata visualization option.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/toolbar.png" alt="The toolbar" /></p>

From this toolbar, you can accomplish a variety of visualization tasks such as add title, text, image overlays, configure your default views in the browser and for portable devices, and export static images of your map.

#### Add Element

In Add Element, it is easy to add overlays on top of your map that help to better showcase your map and clarify the design. With this function you can quickly add fully customizable titles, texts, annotations, and images.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/addelement.png' | prepend: site.baseurl }}" alt="Map" /></p>

- **Add Title Item**
 When you add this item, a text box with a title format will appear on your map. You can place the title box wherever you want and edit the style.

- **Add Text Item**
 Similar to titles, text boxes will give you control over the position of a block of text on your map. You can place text boxes anywhere in your visualization and edit them.

 For annotation, title, and text box overlays, double clicking an element allows you to change the content. Clicking on the element opens the overlay customization toolbar. From here, the text size, colors, fonts, alignment, and box properties can be tailored to fit your map. The toolbar also allows for additional actions with your overlays such as bringing a layer forward or backward, duplicating a layer, or deleting an element entirely.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/edittext.png" alt="Text Edit Toolbar" /></p><br>

 - **Add Annotation Item**
 Annotations are text overlays linked to a coordinate and a zoom range. They allow users to explain and point to specific map elements. These overlays will remain fixed on a position on the map, and are excellent for annotating information, telling stories, or highlighting interesting information.

 Similar to the title and text overlays, clicking an annotation element brings up the customization toolbar. You will notcie that a **Zoom (min-max)** option has been added. This allows for dynamic annotations and zoom-dependent labeling of map items.

 <p class="wrap-border"><img src="/img/layout/cartodb-editor/annotation.png" alt="The toolbar" /></p><br>

- **Add Image Item**
 An image can give extra value to your visualization. You will only need to add the image link to the box and it will pop up on your map. You can edit the box style color, the position, and also change the width with the customization toolbar.

####Preview Map

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/canvas.png' | prepend: site.baseurl }}" alt="Map" /></p>

We use our portable devices frequently to consume content, so there is a chance that many people will visit your maps using a mobile device. And that means a small screen in which not many elements will fit right. That's why we let you create responsive maps: you can design your map for desktop and mobile devices. We offer two canvases so you can design your map for each type of screen.

By default you are in Desktop view. If you switch to the Mobile view, you'll see that we crop the viewable area. If you include elements for the Desktop view, you'll see that they are not present when you switch to Mobile. You can create specific elements for this new view, and vice versa.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/mobile.png" alt="mobile" /></p>

####Export Image

The Export Image option allows for users to export a static image of a map in .PNG format. From the 'Configure Export Options' screen you can select the width and height in pixels for your export. make sure your pop-up blocker is disabled!

<p class="wrap-border"><img src="/img/layout/cartodb-editor/export-image.png" alt="The toolbar" /></p>

### CartoDB Sidebar

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sidebar.png' | prepend: site.baseurl }}" alt="CartoDB Sidebar" /></p>

The CartoDB sidebar is a toolkit that enables you to customize how data is displayed on your maps. Expand it to access your tools, and retract it to view your progress. Upon opening the sidebar, you'll notice a default data layer that syncs to your dataset. Add more layers to show more datasets at once.

#### Custom SQL

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sqlquery.png' | prepend: site.baseurl }}" alt="SQL Query" /></p>

[SQL](https://en.wikipedia.org/wiki/SQL) (Structured Query Language) is the way that many applications request data from a database. They can ask simple queries (*i.e.* "give me all records from this dataset"), queries that match certain conditions (*i.e.*  "give me all records in which this field equals a certain value"), or more complex queries that combine data from two or more datasets.

CartoDB is built on a database called [PostgreSQL](http://www.postgresql.org/), and the geospatial extension called [PostGIS](http://postgis.net/). PostGIS allows you to perform geospatial queries such as finding data points within a given radius, the area of polygons in your dataset, etc. The available queries and documentation can be found on the reference pages of [PostgreSQL](http://www.postgresql.org/docs/9.2/static/reference.html) and [PostGIS](http://postgis.net/docs/manual-2.0/reference.html).

When you create a map and link a dataset to it, all of the data in that dataset will be displayed. To curate what data is shown, you may write a custom SQL query or use our filter functions.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/filters.png' | prepend: site.baseurl }}" alt="Filters" /></p>

In the SQL window, you are shown which query is being applied to your data and given the ability to modify it. Automatically, you will see the query that has been produced from the applied filter (Sidenote: this is also a fun way to learn SQL! We also have an SQL course in our [Map Academy](http://academy.cartodb.com/courses/04-sql-postgis.html)).

#### Map Wizards

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/wizards.png' | prepend: site.baseurl }}" alt="Wizards" /></p>

CartoDB's Wizards give you magic powers to style your data layers. Various map styles provide different ways of presenting your data:

- **Simple**  
The Simple map is exactly what it sounds like. You may add labels, adjust the size and color of your points, and change the appearance of your polygons, but there's no conditional formatting. We recommend this level for those beginning to explore their data.

- **Cluster**  
The Cluster map works with point files to display "clusters" of points that are close in proximity. It works by rendering a numbered circle that represents how many points are in a given area.

- **Choropleth**  
This map changes the color of each feature based on a secondary numeric value from a column in your dataset. It is often used with polygon data to compare characteristics of regions and areas, such as income levels by neighborhood.

- **Category**  
Category maps display your points and polygons in different colors based on a qualitative characteristic in your dataset. For example, if your data shows multiple kinds of a certain characteristic (*i.e.* land-use zones), you would use the Category wizard to change the color of each characteristic (*i.e.* blue for residential, red for commercial, and purple for mixed-use districts).

- **Bubble**  
The Bubble map scales the radius of points in your data based on a numeric value from a column in your dataset. This is useful for comparing numeric values associated with a certain point, like population sizes of cities. Remember that this tool is not designed to work with polygons.

- **Intensity**  
The Intensity map measures the density of your points by darkening areas with many points in contrast to those with fewer points. This is useful when you have a dataset with a large number of points and want to stratify their occurrence. With the addition of the infowindow function, this tool can be understood as a more dynamic heatmap.

- **Density**  
The Density map aggregates your data in hexagons and colors them based on the amount of data contained within each unit. Areas with more data points will be darker than those with fewer points. However, use of a Density map disables infowindows. If those are important to you, then opt for the Intensity map.

- **Torque**  
Torque is ideal for the display of temporal data. This tool animates a progression of points based on a data column containing the time stamp. The standard format of the date column is `YYYY-DD-MMThh:mm:ss`, but Torque also visualizes data that contains a year, year/month, or year/month/day characteristics.

- **Torque Heat**  
Torque Heat is a variation of Torque to create interactive heatmaps or animated heatmaps when you have temporal data. Areas of greater color intensity indicate greater density of data.

- **Torque Category**  
In addition to Torque and Torque Heat, Torque Category displays data points in different colors based on qualitative characteristics in your dataset. If your data shows different characteristics (such as land-use zones), use this wizard to customize the color of each characteristic.

Beware that different types of data enable and disable certain wizards. Experiment with your data to discover the optimal tools for your map.

#### Simple
Display data as simple marker points.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/simple.png' | prepend: site.baseurl }}" alt="Simple Wizard" /></p>

- **Marker Fill**  
This tool adjusts three point properties: the size of the marker (a numeric value between 0-40), the color of the marker (using Hex codes or by selecting from the color palette), and the opacity of your point (a value between 0-1).

- **Marker Stroke**  
The Marker Stroke allows you to edit the width of your points' border or outline (a value between 0-40), their color (using Hex codes or by selecting from the color palettex), and their opacity (a value between 0-1).

- **Composite Operation**  
Change how the colors of overlapping geometries will interact with one another. You can select from: multiply, screen, overlay, darken, lighten, color-dodge and color-burn. Each of these operations has a different effect on how the overlapping sections of markers are displayed. Refer to [Composite Operations](http://docs.cartodb.com/cartodb-editor.html#composite-operations) for a deeper overview on how blend modes work. You can explore the options available [here](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

- **Label Text**  
Select the field that you would like to act as a label (if any).

- **Label Font**  
Change your label's font.

- **Label Halo**  
Change the color and width of the outline around your text. This can be helpful for increasing readability.

- **Label Offset**  
Change how far the label sits from its marker. If set to "0," markers will appear directly under their corresponding label. A negative value will bring the label above the marker, and a positive value will bring it below.

- **Label Overlap**  
When set to "true", labels may overlap one another. When set to "false", not all labels will show to prevent overlap.

- **Label Placement**  
  - _Point_ The label aligns to the center of the feature.
  - _Interior_ Like Point aligns to the center of the feature and ensures that the label remains in place even if the center of the feature is outside of the geometry.
  - _Vertex_ will label the vertex along a line or polygon; this will repeat the label.
  - _Line_ will align the label to a line or to the border of a polygon; this will repeat the label.

#### Cluster
Group data into clusters.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/cluster.png' | prepend: site.baseurl }}" alt="Cluster Wizard" /></p>

- **Buckets**  
Define how many groupings your data will have. Fewer buckets means that data shows at less granular levels.

- **Label Font**  
Change your label's font.

- **Label Halo**  
Change the color and width of the outline around your text. This can be helpful for increasing readability.

Refer to [CartoCSS documentation](http://docs.cartodb.com/cartodb-editor.html#cartocss) for an explanation of marker fill, marker size, and marker stroke.

#### Choropleth
Thematic map with regions in different colors in proportion to the data.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/choro.png' | prepend: site.baseurl }}" alt="Choropleth Wizard" /></p>

- **Column**  
Select the numeric value column(s) that you want to display.

- **Buckets**  
Define how many groupings your data will have. Fewer buckets means that data shows at less granular levels.

- **Quantification**  
Choose the way that data is divided into buckets. You can select from: Jenks, Equal Interval, Heads/Tails, and Quantile. Read more [here](http://blog.cartographica.com/blog/2010/8/16/gis-data-classifications-in-cartographica.html), or take a look at the descriptions below.

  - **Jenks** method aims to increase the standard deviation between each group of data while decreasing the standard deviation within each group. In other words, it increases the similarity within a given group in conjunction with the differences from each of the other groups. The Jenks method does this by shuffling data across each group until it detects an optimization.
  - **Equal interval** calculates the range of your data and divides the total into equally-sized subranges for your desired number of groups.
  - **Quantile** creates each group with an equal number of discrete units. The discrete units are gathered from the distinct possible values of your data.
  - **Heads/Tails** breaks can be powerful for data with a long-tail distribution. The Heads/Tails method will create a break-point at the mean of your data, remove all data below the break-point, and create the next break-point from the data above the first break-point. It will repeat the process until either a single value is left above the break-point or if it reaches the desired number of breaks.

- **Color Ramp**  
Select the colors of your dataset. You can customize these using CartoCSS, which we will cover more in-depth, but take a quick look [here](https://www.mapbox.com/tilemill/docs/manual/carto/) in the meantime.

- **Described under [Simple](http://docs.cartodb.com/cartodb-editor.html#simple)**  
  - Composite Operation
  - Label Text

Refer to [CartoCSS documentation](http://docs.cartodb.com/cartodb-editor.html#cartocss) for an explanation of marker width, and marker stroke.

#### Category
Display data in different colors based on categories.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/category.png' | prepend: site.baseurl }}" alt="Category Wizard" /></p>

- **Map/Legend Items**  
A list of the different categories that will appear on your map and in your legend can be found under Marker Stroke. Here, you can edit their color or add an image marker.

- **Column**  
Select the numeric value column(s) that you want to display.

Refer to [CartoCSS documentation](http://docs.cartodb.com/cartodb-editor.html#cartocss) for an explanation of marker fill, and marker stroke.

#### Bubble
Scale radius of markers based on numeric data in your dataset.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/bubble.png' | prepend: site.baseurl }}" alt="Bubble Wizard" /></p>

- **Radius (min-max)**  
Set the sizes of the smallest and largest markers, or bubbles, on your map.

- **Bubble Fill**  
Set the color and opacity of bubble markers.

- **Bubble Stroke**  
Edits multiple values: the width of your bubble stroke, a.k.a. its border or outline (a value between 0-40); the color (using Hex codes or by selecting from the color palette), and the opacity (a value between 0-1).

- **Composite Operation**  
Change how the colors of overlapping geometries will interact with one another. You can select from: multiply, screen, overlay, darken, lighten, color-dodge and color-burn. Each of these operations has a different effect on how the overlapping sections of markers are displayed. Refer to [Composite Operations](http://docs.cartodb.com/cartodb-editor.html#composite-operations) for a deeper overview on how blend modes work. You can explore the options available [here](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

- **Described under [Choropleth](http://docs.cartodb.com/cartodb-editor.html#choropleth)**
  - Column
  - Quantification

#### Intensity
Show density of points much like a heatmap.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/intensity.png' | prepend: site.baseurl }}" alt="Intensity Wizard" /></p>

Refer to [CartoCSS documentation](http://docs.cartodb.com/cartodb-editor.html#cartocss) for an explanation of marker fill and marker stroke.

#### Density
Data is aggregated into hexagons colored based on intensity of data in each cell. Infowindows will be disabled.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/density.png' | prepend: site.baseurl }}" alt="Density Wizard" /></p>

- **Method**  
Choose whether density is displayed using hexagonal or rectangular shapes.

- **Polygon Stroke**  
Edit multiple values: the width of your polygon stroke, a.k.a. its border or outline (a value between 0-40); the color (using Hex codes or by selecting from the color palette), and the opacity (a value between 0-1).

- **Polygon Size**  
  Adjust the size of the polygons on your map.

- **Composite Operation**  
Change how the colors of overlapping geometries will interact with one another. You can select from: multiply, screen, overlay, darken, lighten, color-dodge and color-burn. Each of these operations has a different effect on how the overlapping sections of markers are displayed. Refer to [Composite Operations](http://docs.cartodb.com/cartodb-editor.html#composite-operations) for a deeper overview on how blend modes work. You can explore the options available [here](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

- **Described under [Choropleth](http://docs.cartodb.com/cartodb-editor.html#choropleth)**
  - Buckets
  - Color Ramp

#### Torque
Data animation of a progression of points, requires time-series data.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torque1.png' | prepend: site.baseurl }}" alt="Torque Wizard" /></p>

- **Cumulative**  
Determines whether points stay on your map throughout the animation or fade away.

- **Time Column**  
Select the date column that you would like to display. The column must contain either date-type or numerical data (so long as it reflects the passage of time) to be used in the Torque map. Refer to the [Supported Data Types](http://docs.cartodb.com/cartodb-editor.html#supported-data-types) documentation on how to change the data type for columns. Refer to the [PostgreSQL documentation](http://www.postgresql.org/docs/9.2/static/datatype-datetime.html) for more information on the date and time data types supported by CartoDB.

- **Marker Type**  
Select whether you'd like to display points as rectangles or ellipses.

- **Marker Fill**  
Adjust three properties: the size of the marker (a numerical value between 0-40), the color (using Hex codes or by selecting from the color palette), and the opacity (a value between 0-1).

- **Marker Stroke**  
The marker stroke allows you to edit the width of your point, a.k.a. its border or outline (a value between 0-40), the color (using Hex codes or by selecting from the color palette), and the opacity (a value between 0-1).

- **Duration (secs)**  
Set the total length of your map visualization.

- **Steps**  
Edit the number of animation groupings. Fewer steps will create a more step-by-step or choppy data animation with more data in each "step." A greater number of steps will look smoother. This correlates to whether your data is being displayed by day, week, month, etc.

- **Blend Mode**  
Style effects for how layered data is blended during the animation. Blend modes use color composite operations. Available modes include lighter, multiply, source-over, and xor. Refer to [Composite Operations](http://docs.cartodb.com/cartodb-editor.html#composite-operations) for a deeper overview on how blend modes work. You can explore the options available [here](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

- **Trails**  
Select whether data points display a "trail," or faded image after they disappear from your map. Choose a value between 0 and 5: 5 will display a longer, more-lasting trail and 0 will not show a trail.

- **Resolution**  
Torque creates a grid of your data and aggregates data to each cell of that grid. The resolution parameter determines the width and height of each cell. Larger numbers will make your data more gridded.

Torque maps also have [Torque CartoCSS](http://docs.cartodb.com/cartodb-editor.html#cartocss) options to further customize the look of your map.

#### Torque Heat
A variation of Torque allowing for an animated heatmap of temporal data where areas of greater color intensity indicate greater density of data.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torqueheat.png' | prepend: site.baseurl }}" alt="Torque Heat Wizard" /></p>

Much of the interface options for Torque Heat are the same for Torque and are explained in the [Torque documentation](http://docs.cartodb.com/cartodb-editor.html#torque).

Options that are unique to Torque Heat:

- **Marker Size**  
Choose the size of your markers.

- **Threshold**  
Set the transparency of the heatmap markers.

- **Animated**  
Activate this slider to turn your temporal data into a linear Torque animation.

Torque maps also have [Torque CartoCSS](http://docs.cartodb.com/cartodb-editor.html#cartocss) options to further customize the look of your map.

#### Torque Category
A variation of Torque, which allows for an animation of points whose color relates to categories in your dataset

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecategory.png' | prepend: site.baseurl }}" alt="Torque Category Wizard" /></p>

Much of the interface options for Torque Category are the same for Torque and are explained in the Torque documentation.

Options that are unique to Torque Category:

- **Category Column**  
Choose data from your dataset you would like to appear as categories on your map and in your legend. You can edit their color or add an image marker underneath the Resolution menu option.

Torque maps also have [Torque CartoCSS](http://docs.cartodb.com/cartodb-editor.html#cartocss) options to further customize the look of your map.

#### Infowindows

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/infowindows.png' | prepend: site.baseurl }}" alt="Infowindows" /></p>

##### On-click infowindows

On-click infowindows will appear when a point or polygon is clicked. They display data of your choosing and you may customize the way your windows appear by selecting from a variety of color combinations via the drop-down menu. To the right, you will notice a numeric selector that allows you to adjust the width (in pixels) of your infowindows.

To choose which data columns to display, toggle the slider to the right of each column title. Once your column is "on", you may select to show the column title on your map by checking the box.

Further customization features include display order adjustments via column drags, changing column names by selecting the icon above the list, and the option to use Custom HTML by clicking on the "</>" button. See the image below for reference.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/infowindow.png' | prepend: site.baseurl }}" alt="On-click infowindows" /></p>

##### On-hover infowindows

On-hover infowindows display when your cursor is "hovering" above an infowindow. They display data of your choosing and can be edited in the same ways as on-click infowindows.

#### CartoCSS

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/cartocss.png' | prepend: site.baseurl }}" alt="CartoCSS" /></p>

CartoCSS is the syntax language that allows users greater control over how their data appear on their maps. When you customize CartoCSS, you're able to control style settings like marker size, marker color, line stroke, and text display at a more granular level than the wizards permit. If you have used Cascading Style Sheets for styling webpages, then CartoCSS will be familiar, but there are key differences to note.

CartoDB uses a flavor of CartoCSS developed by [Mapbox](https://www.mapbox.com/). Follow the links to check out some of their excellent documentation:

- [CartoCSS API](https://www.mapbox.com/carto/api/2.3.0/)

Learn the basics of CartoCSS and designing data for your maps with our [Introduction to map design]({{ '/courses/02-design-for-beginners.html' | prepend: site.academy-baseurl }}) course.

CartoCSS options available to edit from the CartoDB Editor wizards include:

- __Marker-fill:__ choose the color of your markers, the size of your markers and the transparency level of your markers (from 0 to 1)

- __Marker-size:__ adjust the size of your markers

- __Marker-stroke:__ adjust the border color of your markers, thickness of the border, and transparency (from 0 to 1)

#### Torque CartoCSS
In addition to being able to customize the look of your maps using CartoCSS, Torque maps have specific options you can change.

##### Torque

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSS.png' | prepend: site.baseurl }}" alt="Torque CartoCSS" /></p>

- __Torque Frame Count:__ the number of steps in your torque animation.

- __Torque Animation Duration:__ the length of your animation.

- __Torque Time Attribute:__ the name of the date column in your dataset.

- __Torque Aggregation Function:__ Torque renders your data in clusters, choose what value to show such as max values only, or count how many values are in each cluster.

__Example functions:__ count(column_name), max(column_name), sum(column_name). Column data type must be numeric.

Learn more about [how spatial aggregation works](https://github.com/CartoDB/torque/wiki/How-spatial-aggregation-works).

- __Torque Resolution:__ Torque creates a grid from your data and aggregates data to each cell of that grid. Torque resolution determines width and height of each cell. Larger numbers will make your data more gridded.

- __Torque Data Aggregation:__ two options, linear which does not leave a trace of past data, and cumulative which draws data markers cumulatively to show past data.

##### Torque Category

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSScat.png' | prepend: site.baseurl }}" alt="Torque Category CartoCSS" /></p>

Torque Category has much of the same Torque CartoCSS in addition to a few different options available for customization.

- __Torque Aggregation Function:__ Torque renders your data in clusters. Torque Category uses a PostgreSQL command, CDB_Math_Mode(torque_category) to find the values that appear most often in your data in order to cluster your data accordingly.

Learn more about [how spatial aggregation works](https://github.com/CartoDB/torque/wiki/How-spatial-aggregation-works).

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSSframeoffset.png' | prepend: site.baseurl }}" alt="Torque CartoCSS Frame Offset" /></p>

Once your data is aggregated, you can further customize your Torque animation options by changing the marker styles for each frame of your animation by customizing the options found under the frame-offsets and adding additional frame-offsets.

You can also select each cluster value to change marker styles based on your data categories. For instance, if you want to style the maximum value in your dataset to have different marker styles, you would change the marker styles for the maximum value in your animation, which you will find by looking at the values in your CartoCSS.

##### Torque Heat

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSSheat.png' | prepend: site.baseurl }}" alt="Torque Heat CartoCSS" /></p>

Torque Heat has much of the same Torque CartoCSS in addition to a few different options available for customization.

- __Image Filters:__ this option lets you determine the color stop for your heatmap.

- __Marker File:__ CartoDB provides marker files for you, this option can’t be changed.

- __Marker Fill Opacity:__ Change the opacity of the markers.

- __Marker Width:__ Change the width of the markers.

#### Composite Operations

Composite operations style the way colors of overlapping markers interact with each other. You can think of them as blend modes or filters, similar to blend operations in Photoshop. Composite operations are available in the Simple, Choropleth, Bubble, Density, and Torque maps.

The available options within the wizards interface include multiply, screen, overlay, darken, lighten, color-dodge, and color-burn. In addition, blend modes specific to Torque include lighter, multiply, source-over, and xor. For more information on the different options available, refer to the documentation on [Mapbox](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/markercompop.png' | prepend: site.baseurl }}" alt="Marker CartoCSS Composite Operations" /></p>

Customize the marker composite operations within the CartoCSS by editing the marker-comp-op option.

#### Legends

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/legends.png' | prepend: site.baseurl }}" alt="Legends" /></p>

The Legends section of the Editor allows you to access and design your map's legend. Legends are most meaningful for maps that use wizards other than Simple, as they are best used to explain what different data symbology indicates. You can edit the following elements:

- **Template**  
Select the template that you would like to use for the legend. The default legend will be named after the wizard, or you can select "custom" to create your own using HTML.

- **Title**  
Set the title of your legend.

- **Left Label**  
This option appears when using wizards except for Density, Category, and Torque. Use it to set the label on the left of your legend.

- **Right Label**  
This option appears when using wizards with the exceptions of Density, Category, and Torque. Use it to set the label on the right of your legend.

- **Colors**  
Set the colors of the individual items in your legend and be sure that they synchronize with the colors of  your map markers.

##### Legends HTML Styling

If you opt to create a custom legend from the "Template" field described above, then you can create your own legend from scratch using HTML. Alternatively, you can edit an existing template with HTML. HTML gives you the most precise control over legend elements.

#### Filters

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/filter.png' | prepend: site.baseurl }}" alt="Filters" /></p>

Use the Filters section of the editor to select certain ranges of data to display. When working with numerical data, the Filter allows you to see the distribution of your data and select what range to include. To get started, pick the column from which you want to source data. If you're working with string (or text) data, you can search text to include/exclude. When you have date (or numeric) data, include or exclude certain periods of time. If you need to get more creative, different filters (on the same or on different columns) may be combined to feature unique data combinations of your choice.

CartoDB uses SQL to pull different data from your datasets. Click on the SQL section of the Editor (near the top of the pull-out tray) to see what SQL queries were applied. You can also edit and create your own.

For a quick video primer, take a look at our [filter tutorial]({{ '/tutorials/filters.html' | prepend: site.baseurl }}).

### Options

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/optionvisualization.png' | prepend: site.baseurl }}" alt="Options" /></p>

- **Duplicate Map**  
  Create a new map with identical information to your current map.

- **Delete Map**  
  Entirely delete your map. This will not remove any dataset linked to this map.

### Basemaps

#### What is a basemap?

A basemap is a graphical representation of the world showing natural and cultural features such as water bodies, topography, park areas, points of interest, geopolitical borders, roads, streets, and sometimes buildings. CartoDB provides you with a selection of basemap options and providers (such as Stamen or Here). You may import your own custom basemap (from Mapbox, an XYZ tileset (e.g. Stamen maps), or WMS.) or use a solid background color, repeating image, or pattern. With the easy-to-use basemap selector, you can focus on an aesthetically pleasing way of visualizing your data.

#### Selecting your basemap

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/basemapselect.png' | prepend: site.baseurl }}" alt="Select a basemap" /></p>

When you first create a map, it will be given a default "Nokia Day" basemap. To change your basemap simply click on "Nokia Day" below left of the Map View and select an available style. You may add your own custom basemap in the "yours" option and then by linking to the URL for that basemap from Mapbox, XYZ, or WMS. Finally, there are options for adding a solid color or a repeating image pattern instead of a basemap. All of these features give you a high level of customization when creating a map visualization.

CartoDB offers you a variety of basemaps you may use in your maps. You may select any one of them and the change will be applied immediately. You may change your basemap anytime and the rest of your layers will remain unchanged. Take some time to explore our different available basemaps. You'll be able to see that some of them have more detail (such as depicting borders, roads, and mountains) while others are more minimalistic. Thus you may choose one that's best suited for the purpose of your map.

#### Including an external basemap

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/addbasemap.png' | prepend: site.baseurl }}" alt="Add your own NASA basemap" /></p>

Apart from the default basemaps offered in CartoDB, you may integrate third-party basemaps to customize your maps even further. You have four options (we're always striving to add more):

1. **Mapbox**  
  Mapbox is a service which lets you customize the design of a basemap with colors and elements you choose, and integrate easily to CartoDB. Just select the URL from your Mapbox map and paste it in the configuration window.

2. **XYZ Template**  
  XYZ Templates allow you to access many other basemaps, including those from OpenStreetMap and Stamen. In order to use these basemaps, you need their tile URLs. Give it a try with these:
  - **Stamen Toner:** `http://{s}.stamen.com/toner/{z}/{x}/{y}.jpg`
  - **Stamen Terrain:** `http://{s}.stamen.com/terrain/{z}/{x}/{y}.jpg`
  - **Stamen Watercolor:** `http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg`
  - **OSM:** `http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`

3. **WMS Base URL**  
  A WMS, or Web Map Service, allows you to connect to map images generated online by a map server using data from a GIS database. You may use these as basemaps, and they can often contain very interesting information that could be harder to find with other basemaps. You can find URLs for different WMS online, but you often have to look closely to make sure you're getting what you want. Take a look at these WMS URLs, if you want to see what kinds of things you can do with a [WMS baselayer](http://nationalatlas.gov/infodocs/wms_intro.html).

  Currently, we're only supporting WMS files that contain data that uses [EPSG:900913 (Web Mercator)](https://en.wikipedia.org/wiki/Web_Mercator) or [EPSG:3857](http://en.wikipedia.org/wiki/Web_Mercator#EPSG:3857) coordinates.

4. **NASA**  
  With this option, you can easily use NASA Global Imagery Browse Services satellite imagery as a basemap. Just select the date you're interested in, and whether you'd like a day map (which changes based on the day selected) or a night map, and add it to your map.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/nasabase.png' | prepend: site.baseurl }}" alt="Add your own NASA basemap" /></p>

#### About Map Projections

We all know by now that the earth isn't flat. Maps, however, are. As 2D representations of the globe, maps are inevitably distorted. The methods used to digitally render the earth are called  [map projections](http://en.wikipedia.org/wiki/Map_projection). Different types of projections are used to represent the earth at various scales. From the continents to a single region or state / province, each projection type must preserve certain properties at the expense of others such as area, direction, shape, and distance.

The majority of online maps are a variant of the [Mercator Projection](https://en.wikipedia.org/wiki/Mercator_projection), commonly referred to as the Web-Mercator. Currently, CartoDB relies on this projection.

You can learn more about [map projections on Wikipedia](http://en.wikipedia.org/wiki/Map_projection), and read up on all the details about how CartoDB handles [projections internally]({{ '/tutorials/projections.html' | prepend: site.baseurl }}).

### Options

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/vizz_options.png' | prepend: site.baseurl }}" alt="Options for your maps" /></p>

Besides the Basemap selector, you have an Options selector which will give you access to control what elements are shown on your map:

* **Fixed Title:** whether or not the title appears.
* **Fixed Description:** whether or not the description appears.
* **Search Box:** turn the appearance of a search box on/off.
* **Share Options:** whether quick links for sharing appear.
* **Zoom Controls**
* **Scroll Wheel Zoom:** enable or disable zoom using a mouse scroll wheel.
* **Layer Selector:** allow viewers to toggle different layers on/off.
* **Legends:** turn the appearance of legends on/off.
* **Fullscreen:** enable or disable the ability of viewers to enter fullscreen mode.
* **CartoDB Logo:** include or exclude the CartoDB logo on your map.

### Share Your Map

Once you have created a map, it's time to share it with the world! Take a look at our [written tutorial]({{ '/tutorials/sharing_maps.html' | prepend: site.baseurl }}) or [video tutorial](http://vimeo.com/80472123) for a guide to publishing and sharing your maps. Read on for a description of the CartoDB sharing interface!

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sharevisualization.png' | prepend: site.baseurl }}" alt="Share your map" /></p>

You have the following options to share your map:

- **Get the Link**  
You will find here the URL to share your map via Twitter, email, or anywhere else. When you share that link, viewers will only be able to explore it on the map, they will not be able to edit any of your data.

- **Embed It**
You will find here the embed code to get your map into your blog, website, or simple application.

- **CartoDB.js**
This URL will allow you to add your map to your applications. Read the [documentation here](http://docs.cartodb.com/cartodb-platform/cartodb-js.html), or learn about it in our [Map Academy](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html).

### Supported Fonts

- **DejaVu Sans**  
Oblique, Bold, Oblique, Bold Oblique, Condensed, Condensed Oblique, Condensed Bold Oblique

- **DejaVu Sans Serif**  
Condensed, Condensed Italic, Book, Condensed Bold Italic, Italic

- **Unifont**  
Medium

- **Open Sans**  
Regular, Bold, Semibold, Light, Italic, Bold Italic, Semibold Italic, Light Italic

## Managing Your Data

Whew, you're almost a CartoDB expert! As you know by now, there are a variety of methods for managing and visualizing your data with our Editor, Wizards, and SQL tools -- to name a few. In earlier sections, we discussed using filters on your data and merging datasets. Below is a quick introduction to a few more techniques that we host for your creative convenience.

### Geocoding Data

CartoDB is more than a styler - we're also a behind-the-scenes geocoder. We understand that geocoding is essential to data management and facilitate six methods for this process. To begin, click "Options" and "Georeference" and then select one of the alternatives that allow you to georeference your data in the best possible way.


**By Lon/Lat Columns**

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo1.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>

Importing your data with latitude and longitude coordinates already included renders a map that automatically displays your markers and polygons from the coordinates uploaded to your dataset. To georeference, just select the longitude and latitude columns in your dataset and click continue.

**By City Names**

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo2.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>

Alternatively, you may georeference by City Names. Select the column that contains the city names and also select the country to which the cities belong to if you want to be more accurate.


**By Admin. Regions**

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo3.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>


You may also georeference by Administrative Regions. Select to georeference by Admin. Regions, and line up the data in your dataset to the type and location of whatever administrative region you like. CartoDB will access our comprehensive cloud databases to automatically load polygons for regions like states and municipalities.

**By Postal Codes**

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo4.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>

Postal code systems have been set up in many countries and these often provide a high level of spatial precision. On CartoDB you have the option to georeference your data by postal codes. Just select the column where your information is stored and the country where the zip codes are from and immediately press continue.

**By IP Addresses**

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo5.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>

IP Georeferencing is an important toolbox item in today's web environment. If you select this option, CartoDB will take your IP address column and convert it into location points on your map.


**By Street Addresses**

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo6.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>


Finally, you may georeference by address. To do this, your columns will need to be organized into categories such as "address" (which would contain the building number and street name), "state" and "country," if its known.

Matching addresses with geographic coordinates consumes geocoding credits. Every time geocoding is done in string format, geocoding credit is used (for example, if you geocode a dataset with 20 records, 20 geocoding credits are used). All CartoDB plans include a number of geocoding credits that can be used every month. After exceeding the geocoding limits, a fixed fee is charged per 1000 credits.

On the upper-left side of the window, you will see the operation cost and you must accept the price to be able to continue.

CartoDB may use a third party to provide geocoding and reverse geocoding services. Geocoding services are subject to the third parties [terms and conditions](http://developer.here.com/terms-conditions).


### Running SQL Queries

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sql-queries.png' | prepend: site.baseurl }}" alt="Running SQL queries" /></p>

CartoDB enables you to query data using the Structured Query Language (SQL). We provide particular support for PostGIS SQL commands, which allows you to filter data spatially. Some common uses of PostGIS SQL queries are to answer questions such as, "How many points from one dataset are located within a polygon from another dataset?" Or commands such as, "Give me all my data within 50 kilometers of a certain latitude longitude coordinate."

Review the PostgreSQL [documentation](http://www.postgresql.org/docs/9.3/interactive/sql.html) for how to use PostgreSQL flavored SQL, as well as the [PostGIS documentation](http://postgis.net/documentation/) for tips on writing spatial queries. Additionally, CartoDB has tutorials on how to run SQL queries.

To run a SQL query in the CartoDB dashboard, open a dataset or map. In the righthand sidebar, click the SQL icon. The sidebar will expand and by default you will see the following query:

{% highlight sql %}
SELECT * FROM dataset_name
{% endhighlight %}

You can modify this query and then hit the "Apply query" button or press `cmd + s` on a Mac OS or `ctrl + s` on a Windows OS. An example of a modified query might look like the following:

{% highlight sql %}
SELECT * FROM ne_10m_populated_places_simple WHERE featurecla = 'Admin-0 capital'
{% endhighlight %}

This query will select all rows that have a "featurecla" column value of "Admin-0 capital" from the dataset "ne_10m_populated_places_simple." Only the rows that match this SQL query will appear in the dataset and map view for this dataset. Remember that when applying SQL queries to maps, only the queried data will be shown.

### Dataset from Query

It is possible to create a new dataset from a SQL query. After applying your modified SQL query, click "options" in the upper-right corner, and select "Dataset from query" within the drop-down menu. You will be asked to name your new dataset from the query. After naming the dataset, CartoDB will save and load it for you.

### Merging Data

Whether you are using data from public repositories or your own datasets, sometimes it is useful to join information from two datasets. You can always do this via your own SQL but CartoDB makes it easier with our merge tool.

The most basic way to join two datasets is by a shared unique value or a "Regular Join." For example, country ISO codes are often used to merge the_geom from one dataset and population count from another. Regular Joins are also very useful for attributes like shared IDs, country names, or dates.

#### Merge by Regular Join

Regular Joins are useful if you have two datasets that share a common value in rows. For example, country level datasets often contain an ISO code for each row. If you have two of these datasets and want to join all or some of their values into a single dataset, then this option is for you. Follow the steps below:

1. From the dataset you have created, click "options" in the upper right corner.
2. Select "Merge datasets."
3. Click the radio "Regular Join."
4. The left-hand menu contains your first dataset. Toggle on or off the columns you want to include in the join.
5. The right-hand menu is for loading your second dataset. Click the drop-down menu and select or begin typing the name of your second dataset.
6. In the second dataset, toggle on or off the columns from the second dataset you want to join to the first.
7. Use the radio to the left of the column names in both the first dataset and the second to select the column in the first dataset that corresponds to a value in the second dataset. Do the same for the correct column name in the second dataset menu.
8. Finally, hit "Next," enter your new dataset name and wait for the dataset to be processed.

#### Merge by Spatial Join

Spatial Join calculates the intersecting geospatial records between two datasets (ex. points in polygons). You'll need to decide the operation to perform.

Similar to Excel, **COUNT** calculates the number of intersecting records, **SUM** adds together a column value for all intersecting records, and **AVG** provides the average value of a column for all intersecting records.

### Export data

After you have created, updated, or deleted data from your CartoDB datasets, you may want to export them for sharing or offline use. Our one-click data export makes that decision easy.

1. From your data view, click "options" in the upper right corner.
2. Select "Export."
3. A menu of export formats that CartoDB supports, including comma-separated (CSV), KML, ESRI Shape Files (SHP), and SQL will appear.
4. Click the format you would like to download.

#### Download by URL

There is a pro-tip for accessing downloads by using your direct dataset URL. You can make use of the SQL API to run any query and ask for the results to be retrieved in different formats. For example:
DOWNLOAD BY URL

{% highlight bash %}
https://{USERNAME}.cartodb.com/api/v2/sql?format=csv&q=SELECT+*+FROM+tm_world_borders_sim
{% endhighlight %}

### Creating Indexes

Advanced users can squeeze better performance out of their maps and SQL API requests by adding custom indexes onto columns. In general, you should seek this functionality if you:

1. Are filtering a dataset by values in one or a few columns
2. If you are regularly querying up data through the SQL API and filtering by one or a few columns
3. If you are creating Torque maps on very large datasets

In most cases, a single column index is the safe way to go. For Torque maps, a single column index on the column used to play the data (e.g. the date or numeric column) is optimal. To create a single column index, use this SQL pattern:

{% highlight sql %}
CREATE INDEX idx_{DATASET NAME}_{COLUMN_NAME} ON {DATASET_NAME} ({COLUMN_NAME})
{% endhighlight %}

There are more advanced indexes you can use in CartoDB, such as multi-column indexes. However, they are not a magic wand (our Wizard maintains that glory), so we recommend that you read the full documentation on [PostgreSQL Indexes](http://www.postgresql.org/docs/9.1/static/sql-createindex.html) before proceeding.

Indexes will take space from your quota. But CartoDB adds some of our own indexes that are not counted against your quota, so there is no need to index the automatically generated columns in CartoDB (e.g. the_geom and cartodb_id).

## Error Codes and Solutions

### Importer Error Codes

We try to predict and provide solutions for as many problems as we can, but we're not omniscient...yet. For rare cases when we're caught off-guard, we categorize your error and report back to you at the time of import. Please reach out to us for assistance on our [support platform]({{ '/docs#support' | prepend: site.cartodb-baseurl }}).

Here, we try to anticipate your needs and provide a set of errors with possible solutions.

<table>
  <tbody>
    <tr>
      <td>1000</td>
      <td>File I/O error.</td>
    </tr>
    <tr>
      <td>1001</td>
      <td>Download error - The remote URL returned an error. Please verify your file is available at that URL.</td>
    </tr>
    <tr>
      <td>1002</td>
      <td>Unsupported file type - Check our list of supported files. See if you can convert your file to one of these file types.</td>
    </tr>
    <tr>
      <td>1003</td>
      <td>Decompression error - Try decompressing and regenerating your compressed file on your computer. If that fails, then locate the original file and make a new compressed version.</td>
    </tr>
    <tr>
      <td>1004</td>
      <td>File encoding error - Sometimes we have difficulty with non UTF-8 files, so try converting your file to UTF-8. You can do this in Excel by exporting your data as Unicode Text.</td>
    </tr>
    <tr>
      <td>1005</td>
      <td>Zero byte file - The file appears to have no information. Double check using a local tool such as QGIS that the file is indeed correct.</td>
    </tr>
    <tr>
      <td>1006</td>
      <td>Invalid SHP file - Your file appears broken. Double check that all the necessary parts of the file are included in your ZIP archive (including .SHP, .PRJ, etc.). Also, try opening the file locally using QGIS or another tool.</td>
    </tr>
    <tr>
      <td>1007</td>
      <td>Too many nodes - You requested too many nodes. Either request a smaller area, or use planet.osm.</td>
    </tr>
    <tr>
      <td>1010</td>
      <td>Private Google Spreadsheet - This spreadsheet seems to be private. Please check your Google Spreadsheet sharing options and that the file is public or accessible for those who know the link.</td>
    </tr>
    <tr>
      <td>1020</td>
      <td>Data download timed out. Check the source is not running slow and/or try again.</td>
    </tr>
    <tr>
      <td>2000</td>
      <td>File conversion errors.</td>
    </tr>
    <tr>
      <td>2001</td>
      <td>Unable to parse data - Please contact support and we will help you sanitize it.</td>
    </tr>
    <tr>
      <td>3000</td>
      <td>Geometry error.</td>
    </tr>
    <tr>
      <td>3004</td>
      <td>Unable to read SHP file - Try opening your SHP file in a local program, such as QGIS. Does it open and display correctly? If so, then try exporting it as a new SHP file and uploading to CartoDB.</td>
    </tr>
    <tr>
      <td>3005</td>
      <td>SHP to PGSQL error.</td>
    </tr>
    <tr>
      <td>3100</td>
      <td>Projection error - CartoDB supports many projections, but sometimes your file will have one we don't recognize. In these cases, please try re-projecting your file in QGIS or ArcGIS. Or, if you want to use this projection many times, submit a query to the support page.</td>
    </tr>
    <tr>
      <td>3101</td>
      <td>Unsupported or missing projection - see 3100 above.</td>
    </tr>
    <tr>
      <td>3102</td>
      <td>Unable to force geometry to 2-dimensions.</td>
    </tr>
    <tr>
      <td>3200</td>
      <td>Unsupported geometry type.</td>
    </tr>
    <tr>
      <td>3201</td>
      <td>Geometry Collection not supported - Geometry Collections are not supported in CartoDB. In most cases, we can deal with these during import, except with KML and GeoJSON import. In those cases, an intermediate step during import will fail if given geometry collections. To avoid this, try to export your data from the source in another format.</td>
    </tr>
    <tr>
      <td>4000</td>
      <td>Raster errors.</td>
    </tr>
    <tr>
      <td>4001</td>
      <td>Raster import error.</td>
    </tr>
    <tr>
      <td>5000</td>
      <td>Database import error.</td>
    </tr>
    <tr>
      <td>5001</td>
      <td>Empty dataset - If you upload a file that results in an empty dataset, we assume there was an error. If this in fact was not an error, please revisit the user interface or send an SQL command to create a dataset. If it was in fact an error, check that your file is formatted correctly and that it contains data.</td>
    </tr>
    <tr>
      <td>5002</td>
      <td>Reserved column names - Try changing the name of your column to a new name. Often you can add an underscore, "_", to the beginning of the column name to make it work.</td>
    </tr>
    <tr>
      <td>6000</td>
      <td>OSM data import error.</td>
    </tr>
    <tr>
      <td>8000</td>
      <td>CartoDB account error.</td>
    </tr>
    <tr>
      <td>8001</td>
      <td>Over account storage limit - The file you tried to upload is putting you over your storage quota. You can upgrade your account easily by accessing your account settings page.</td>
    </tr>
    <tr>
      <td>8002</td>
      <td>Over account dataset limit - The file you tried to upload is putting you over your dataset quota. You can upgrade your account easily by accessing your account settings page. Alternatively, you may be able to delete some unused datasets to make room.</td>
    </tr>
    <tr>
      <td>9999</td>
      <td>Unknown, Please report your error to <a href="{{ '/docs#support' | prepend: site.cartodb-baseurl }}">support</a> so we can figure it out!</td>
    </tr>
  </tbody>
</table>

### SQL Errors

When executing SQL either in the user interface or through the SQL API, you may encounter errors. We report back to you the full error provided by PostgreSQL. One of the easiest ways to figure out what is going on is to search for your error on Google and perform independent troubleshooting.

### CartoCSS Errors

CartoCSS styling is generally simple, making typos or forgetting quotations are common oversights. In cases when you are editing CartoCSS through the user interface, errors are reported back via the CartoCSS input window. From there, it is typically not difficult to discover where you messed up. More often than not, users forget to end lines with semi-colons, use quotes, and close brackets and braces. Simple proofreading is best practice.

## Your Account

### API Key

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/apikey.png' | prepend: site.baseurl }}" alt="API" /></p>

The API key offers the simplest way to access private data or perform writes and updates to your public data. Remember that your API key protects access to your data, so keep it confidential and only share it if you want others to have this access. If necessary, you can reset your API key in your admin dashboard.

#### Find your API key

1. Go to your dashboard.
2. Click on your avatar in the top right corner, and select "Your API keys."
3. Here, you can copy your API key, see use examples, and reset your API key.

### Profile

Edit your public profile settings incuding your name, website, description, avatar, and Twitter handle. To navigate to this window in your dashboard, click on your avatar in the top right corner, select "Account settings" from the menu options and within the second sub-menu on the left, select "Profile."

### Account Settings

Change your account preferences including username, email, and password. To navigate to this window in your dashboard, click on your avatar in the top right corner and select "Account settings."

### OAuth Credentials

OAuth is an authentication protocol that allows users to approve an application to act on their behalf without sharing their password. To navigate to this section in your dashboard, click on your avatar in the top right corner, select "Account Settings" and within the second sub-menu on the left, select "Your OAuth credentials."

### Quotas and Billing

We offer a wide range of plans to fit every user's needs. Each plan comes with different features and storage quotas. Take a look at our [pricing plans]({{ '/pricing' | prepend: site.cartodb-baseurl }}) to pick the best plan for you.

Once you upgrade from a free plan to a paid plan, a monthly billing period will be set for your account. Each month, you will receive the corresponding invoice via email with the description of services that will be charged for that billing period.

If you upgrade from one paid plan to another, your new billing period will start the same day of the month that your old plan started. This means that your first invoice will be pro-rated, and you will only be charged for the days remaining in your billing period.

You may experience extra charges besides the monthly cost of your plan if you exceed the free quota for geocodings or mapviews, as defined in our Terms of Service.

### Free Trial and Upgrading

All of our plans have a fourteen-day free trial, during which you may experiment with one of our plans to see if it's a good fit. Once you create an account, you may choose to change your plan from "Account Settings," accessed from your dashboard.

In the Account Settings window, you may view your current plan and click "Change your current plan" to choose a new one. Note that the charges will be pro-rated, so you may change your account type whenever you like.

### Deleting Your Account

Navigate to Account Settings, and scroll to the bottom of the page where you will see a link to "Delete my account." If you have any questions or concerns (we enjoy compliments, too!), please reach out to our support team at <support@cartodb.com> before deleting your account.

## **CartoDB Enterprise**

#### About Multiuser Enterprise

CartoDB designed the Multiuser (MU) Enterprise to enhance the scale and scope of collaboration on our platform. The service provides multiuser environments that allow users to upload and manipulate datasets securely, and share them with specific team members or publish them directly on the web.

With CartoDB MU, no custom software installation is necessary to access high-performance GIS capabilities. Take advantage of this web-based feature to work alongside colleagues on projects in real-time from a central, 24/7 accessible database - the cloud! Here is an overview of the Multiuser features.

#### Users, Owners, and Organizations

CartoDB Enterprise works as a hub for many users or teams working together. An "organization" refers to the name of the group of collaborators that will be interacting on Enterprise. For instance, the name of your business or project team. A user is the individual that is part of a given organization.

If you have been using a normal CartoDB account and are starting to use CartoDB Enterprise with Multiuser, you will notice that you are using the same CartoDB Editor with some new options. These new options are what we'll cover in the following sections. For general documentation about the CartoDB Editor please refer to the [corresponding sections in docs.cartodb.com](http://docs.cartodb.com/cartodb-editor.html)

An "Owner" of an organization has privileges to perform admin-related tasks of the organization (i.e. create users, assign quotas, etc.).

### **Users**

#### Dashboard

After login, the Enterprise mainpage allows you to quickly and easily navigate team activity. The dashboard is your homebase, a.k.a. the page where you are able to view and monitor your own activity maps and data, as well as access datasets and visualizations published or shared with you by team members.

####Your Maps
On the left side of your browser you can search for maps by tag or name, view maps you have created, view maps that have been made public to the organization or shared with you for collaboration, or see maps you have liked from the community. The icons on the left allow you to order personal or shared maps by date, number of visits, number of likes, or create a new map from scratch. You can also access your own or shared datasets by selecting the drop down menu in the upper left.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_00.png" alt="dash" /></p>

####Your Datasets
Similar to your Maps Dashboard, your Datasets Dashboard allows you to easily search for datasets by name or tag, view your own and shared datasets, see datasets you have liked, and access our ever growing and free to use **Data Library**. You can also order your datasets by size, or add new datasets from your computer, the web, or from scratch.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_01.png" alt="data dash" /></p>

#### Creating Datasets and Maps

The workflow to create datasets and maps is the same as in the normal edition of the CartoDB Editor.

#### Datasets: General and Team Privacy Settings

With your Enterprise account, once you have created a new dataset, you have new privacy options compared to the stand alone version of the CartoDB Editor.

There are many ways of managing your privacy settings. From your maps or datasets dashboard, you can quickly change privacy by clicking the privacy icon on a map or dataset, or by selecting a map or dataset and chosing "Change Privacy" in the upper right hand corner. From here you can also lock or delete a selected entry.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_privacy_1.png" alt="map privacy" /></p>

The privacy pop-up window then allows you to share and collaborate with people in the organization by selecting the "Share it with your colleagues" button at the bottom.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_privacy_2.png" alt="map privacy" /></p>

You can also manage privacy directly from a data view, map view, or visualization by using the lock in the upper left corner of any map or data view.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_02.png" alt="lock" /></p>

By choosing any of these options, a modal window will appear:

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_03.png" alt="modal window" /></p>

You have two sections in this window:

1. **General privacy**: Similiar to the standalone CartoDB Editor, by default a dataset will only be available to you when you import it. You can choose to make it **only visible to people with the link**, or **public** (it will be available to anyone on your Public Page).

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_04.png" alt="privacy modal" /></p>

2. **Team Privacy**: In the lower part of this modal window you will see a list of your Organization's teammates. With the control in the right you can give read access to this dataset (the dataset will appear in those person's dashboards and they will be able to open it and create visualizations with it, but only in read mode; that is, they won't be able to modify the content of this dataset). If you also want to give write access, you can select the corresponding checkbox. Grant write and/or read access to all members of your Organization with the top controls.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_05.png" alt="users" /></p>

#### Maps: General and Team Privacy Settings

As well as with tables, the interface for creating visualizations is the same as in the stand-alone CartoDB Editor, with some extra options to manage how you collaborate with your teammates.

Once you are editing a visualization, you can also use the lock in the upper-left corner to view the privacy settings.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_06.png" alt="Using sync tables" /></p>

You have two sections in this window:

1. **General Privacy**: As well as in the stand-alone CartoDB Editor, by default, a visualization will be accessible to **people with the link**. You can select it to be **Private** (only accessible to you), **Password Protected** (you'll be able to set a password), or **Public** (it will be listed on your Public Page)**.**

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_07.png" alt="map privacy" /></p>

2. **Team Privacy**: In the lower part of this modal window, you will see a list of your organization's teammates. You can give read access to this visualization so it appears in their dashboard. If the general privacy of the visualization is set to Public, then they will be able to access it from the Public Page (the same as any other user).

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_08.png" alt="map privacy" /></p>

### **Owners**

As the owner of an organization, you will be able to perform all admin-related tasks of a team account: manage users, assign quotas, customize the organization's Public Page, update account details, etc. When you login, you will see a normal CartoDB dashboard with a list of tables. You can access the admin area by clicking on the drop-down menu located in the upper-right corner and selecting "Your Organization".

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_09.png" alt="Using sync tables" /></p>

#### Organization Administrator Area

Once in the organization admin area you'll be able to change your **Organization Settings**, **Manage your seats**, and review or update **Your Plan**.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_010.png" alt="admin" /></p>

#### Manage Your Seats

A seat is an available slot for a user. You'll be able to give access to as many users and seats that you have in your contract. You may expand the number of seats at any time by contacting our Customer Support.

#### Adding a User

Once your organization's multiple user account has been created, you have the option to add new team members. From your organization dashboard, you can click in the **Create new user** button at the bottom right of the **Manage Your Seats** page. From here, fill in the user's information, which includes a name for log-in, an email address to associate with the account, and a password. You can also assign and update a user's data quota here and select whether to allow geo-referencing capability.

At any time, you may change the storage availability for your team members by upgrading your plan. The activity of your team members is accessible via clicking on their respective profile pages.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_011.png" alt="adding user" /></p>

#### Organization Settings

In this section, you can customize how your Public Page will look by choosing your website URL, a company logo, a description, and your Twitter username.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_012.png" alt="Org settings" /></p>

#### Your Plan

On the "Your Plan" page, you can see information about your company, users, data storage, and resources. You can also contact us with questions or changes to your account.

## **Official Twitter Datasource**

#### About the Twitter Datasource

CartoDB has access to the complete Twitter firehose, providing it with official Twitter data. For our users, it is really easy to obtain Twitter data and map it. Once the user clicks on "Connect dataset" within the Datasets section of their dashboard, the menu that you see in this screenshot, will open.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/twitter_0.png" alt="New import dialog" /></p>

After you click on the Twitter icon, you will be able to see the following window:

<p class="wrap-border"><img src="/img/layout/cartodb-editor/twitter.png" alt="New import dialog" /></p>

You can begin your search by jotting down different hashtags or keywords separated by a comma under each category (they will work as an OR, e.g. "santa,xmas" would work like "santa OR xmas"). You can use the valid character # should you choose to for hashtags. Spaces before and after commas are removed, but if you put a multi-sentence word it will perform a search (e.g. "cars, bikes motorbikes, planes" is a 3 term search, do not mistake with "cars, bikes, motorbikes, planes"). You will be able to see how many Twitter credits you have remaining.

The total number of search terms you can have is 29 per category. The maximum number of categories is 4 per search request. You can also select the time frame you want your request to cover under the category column. By default it will search the last 30 days.

The search results will only contain tweets where the location was either explicitly turned on by the user, or the user has filled his/her Twitter profile location field. Otherwise, the tweets cannot be plotted on a map as there is no location element in them. Approximately 5% of the tweets are geolocated. However, we have introduced geo-enrichment capabilities bringing the sample up to 15% to 20% making the results much richer.

### Three Official Twitter APIs:

* **Search API**: The search API is the one the user has direct access to as shown above. This API allows the user to pull geolocated Twitter data from the past 30 days. Once you do the search, the tweets will be imported straight to your CartoDB account. You can then go directly to map view and work on customizing your map.

* **Streaming**: CartoDB has access to Twitter's streaming API allowing you to retrieve data up to the last minute in which you performed your search. At the moment this is only available on request. Contact sales@cartodb.com to get more info.

* **Historical API**: This API gives access to tweets beyond 30 days going all the way back to 2006. Contact sales@cartodb.com for further details.

The real-time tweets feature is coming soon and will be added to CartoDB for user's to access it. It will allow for maps to be updated automatically with live tweets as they are posted.

### Knowing Your Data

Which information does a tweet include? The most important data retrieved from Twitter is listed as follows:

* `id`: Tweet id.
* `verb`: Lets you know if a tweet has been directly posted or if it's a retweet.
* `link`: Direct link to the tweet.
* `body`: Content of the tweet.
* `postedtime`: Time at which the tweet was posted. (UTC).
* `favoritescount`: Number of times the tweet has been favorited.
* `twitter_lang`: Language of the tweet.
* `retweetcount`: Number of times the tweet has been retweeted.
* `actor_link`: Direct URL to user profile.
* `actor_displayname`: Name of the user.
* `actor_image`: Direct URL to a minimized version of the avatar.
* `actor_summary`: Description of the Twitter user.
* `actor_languages`: Language configured by the Twitter user.
* `actor_verified`: Flag for verified users.
* `generator_displayname`: Client from which the tweet was sent.
* `geo`: Information of the geolocated tweet.
* `category_name`: Number of the category described in the search.
* `category_terms`: Terms which have been searched inside the corresponding category.

Besides the previous parameters, you'll also obtain: `objecttype`, `twitter_filter_level`, `actor_objecttype`, `actor_id`, `actor_postedtime`, `actor_links`, `actor_location`, `actor_utcoffset`, `actor_preferredusername`, `actor_twittertimezone`, `actor_friendscount`, `actor_followerscount`, `actor_listedcount`, `actor_statusescount`, `generator_link`, `provider_objecttype`, `provider_displayname`, `provider_link`, `inreplyto_link`, `twitter_entities`, `object_objecttype`, `object_id`, `object_summary`, `object_postedtime`, `object_link`, `location_objecttype`, `location_displayname`, `location_link`, `location_geo`, `location_streetaddress` and `location_name`.

### Analyzing and Querying Your Data

Your tweets dataset has been finally created. Let's take a look at some tricks that will allow you to get the insights you are looking for.

You can use the CartoDB Editor filter tool in order to get easy queries, for example:

To solve the question "Which tweets have been written by a famous (verified) person?" you just need to apply a filter to the `actor_verified` column. This process will be similar to generating the following query:

{% highlight sql %}
SELECT * FROM dataset_twitter WHERE actor_verified is true
{% endhighlight %}

Another one: "Which tweets have got the largest number of retweets?"

{% highlight sql %}
SELECT * FROM dataset_twitter ORDER BY retweetcount DESC
{% endhighlight %}

Creating a simple category map will give you a better idea about your data. For example, you can use the column `twitter_lang` to compare tweet languages with their locations, or you can use the `postedtime` column to perform a dynamic Torque map.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/twitter_2.png" alt="Retweets map" /></p>

Let's write some slightly advanced queries now:

Imagine you have 2 categories, one is "Vector", the second is "Raster". What if you want to know which tweets are saying "Vector yes", or "Vector no"? This is easy:

{% highlight sql %}
SELECT * FROM dataset_twitter WHERE body ilike ‘%yes%’ AND category_name = 1
{% endhighlight %}

Or, correspondingly, for “Vector no”:

{% highlight sql %}
SELECT * FROM dataset_twitter WHERE body ilike ‘%no%’ AND category_name = 1
{% endhighlight %}

Let's go further: imagine that now you want to create two new categories in your dataset based on the obtained results. One will be for those results that say "Vector yes", the other one will be for “Vector no”. You just need to apply the previous queries, but this time you'll include some updates in the dataset.

The following query will search all the tweets which include "Vector yes" and will update the category to be '3'.

{% highlight sql %}
UPDATE dataset_twitter SET category_name = 3 where body ilike ‘%yes%’ AND category_name = 1
{% endhighlight %}

In the same way, we could build category number 4 to “Vector no”:

{% highlight sql %}
UPDATE dataset_twitter SET category_name = 4 where body ilike ‘%no%’ AND category_name = 1
{% endhighlight %}

But...what if the results are not so straightforward? You can add a new constraint and create a new category by this query which searches "yes" and "no" in the same tweet.

{% highlight sql %}
UPDATE dataset_twitter SET category_name = 5 where body ilike ‘%no%’ AND body ilike ‘%yes%’ AND category_name = 1
{% endhighlight %}

If we follow this approach with the "Raster" option, we'll have several categories that will allow us to conclude if a tweet was supporting a topic or not. This is a very simple example, but remember that CartoDB runs over the power of PostgreSQL, in which you can insert more advanced queries on the text of the tweets to better understand the data and gain insights.

_Remember: perform a duplicate of the dataset prior to modifying it with statements like UPDATE, INSERT or DELETE. This way your original data will always be safe._

### Tips and Tricks

* Ensure that you select the right time frame that suits your needs. You can save on Twitter credits by not importing extra data.
* Search terms are treated like full words: "car" won't match tweets with "cars," you should add both terms if you want both cases.
* Search terms are not case-sensitive. e.g. "Cars" equals "cars" and "CARS"
* You can search by hashtags or account names. e.g. "gis, @cartodb, #mapping."
* Once the search starts you cannot stop the import. Be careful to not search for really broad terms (e.g. "love") as hundreds of thousands or even millions of geolocalized tweets might end up being retrieved.
* For security, the search will stop if you run out of credits, returning all the tweets that the system was able to retrieve before the credits finished.
* Enterprise multi-accounts share the same organization-wide pool of Twitter credits.
