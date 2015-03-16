---
layout: platform_item
title: CartoDB Editor
slug: cartodb-editor
js_asset: "editor"
redirect_from:
- "/documentation/using-cartodb.html"
---

## One-minute introduction

<p class="wrap-border"><img src="/img/layout/cartodb-editor/editor.png" alt="Using sync tables" /></p>

Your dashboard is your baseline. It has two main sections: **tables** and **visualizations**. To get started, you will need to create a visualization from your data by following these simple steps:

1. Add a new **table** 
2. Import a dataset (or "Start from scratch" by selecting "Create empty table")
3. Create a new **visualization** from your table
4. Share it (publicly or privately)

CartoDB accepts data in different formats (Excel, CSV, XML, SHP, GeoJSON, [see all](#supported-file-formats)) and from different sources (see all possibilities for [Importing data](#importing-data)). Our interactive wizards make it easy and fun to map your data. Choose a basemap, define legends and infowindows ([What is an infowindow?](#infowindows)), and select how to show your data with custom display options.

_XML files are not directly supported, we support KML and GPX files instead._

When your visualization is complete, you may keep it private, share it with your colleagues, or publish it to the web by circulating its custom URL or embedding it in your blog.

In this guide, we'll walk through many features of the CartoDB web interface. If you are ready to experiment with our powerful APIs, then go to [CartoDB.js]({{ '/cartodb-platform/cartodb-js.html' | prepend: site.baseurl }}) and [SQL API]({{ '/cartodb-platform/sql-api.html' | prepend: site.baseurl }}).

## Tables

CartoDB operates a database that is capable of storing geospatial information, or geometry. When you import data into CartoDB, you are sending it to a standard database. Under the hood, PostgreSQL is running with the PostGIS extension. Don't worry if you've never heard of these tools- CartoDB takes care of the technical details so that you can get busy making awesome maps.

### Importing data

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/addtable.png' | prepend: site.baseurl }}" alt="Adding a new table" /></p>

Importing your data to CartoDB is a seamless and flexible process. Pick your preferred method from the following options:

1. **Upload a local file** or **import directly from a public URL**
2. **Sync using Google Drive**
3. **Sync using Dropbox**
4. **Import directly from Twitter**
5. **Create an empty table**

The most common import method is to upload a local file or pull data from a public URL. To upload a file, navigate to your Dashboard and click **New Table**. In the automatic pop-up window, click **Select a File** and navigate to the data you want to upload. Alternatively, you may paste a URL in this field, and CartoDB will upload that data. For larger, paid accounts, our interface offers an option to sync your data here. You may also import directly from Dropbox or Google Drive.

If you plan to insert data by hand or programmatically, then create a blank table with the default CartoDB columns and indexes already in-place.

CartoDB streamlines mapping tweets with direct access to Twitter API data. Highlights of this feature:

* Go to the source for high-quality data—no third party solutions or scraping techniques necessary
* Search by term or hashtag
* Analyze tweets in a defined timeframe or real-time

To use Twitter data in a visualization, select the Twitter icon in the upload window. Next, you will be prompted to search for data you want within a specific time period.  Remember that your number of available Twitter credits will update automatically and you can always add more.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/addtable_2.png' | prepend: site.baseurl }}" alt="Adding tables from other sources" /></p>

You also have to option to import from:

1. **ArcGIS online**
2. **Salesforce**
3. **Mailchimp**

### Syncing tables

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/synctable.png' | prepend: site.baseurl }}" alt="Using sync tables" /></p>

Users subscribed to "John Snow" or larger, paid plans can benefit from CartoDB's sync tables feature. In order to sync your tables via Google Drive or Dropbox, click "New Table" from your Dashboard followed by the tab for Google Drive or Dropbox, depending on which one you want to use.

Once you select the file that you want to work with, you will need to allow CartoDB access. After, you may choose how often CartoDB should sync your data with your hosted table- from never to every hour, day, week or month. 

Following import and sync selection, you will click "Create Table", and our importer will start building your database. We pride ourselves on speediness, but bigger files sometimes require a little patience.

### Supported file formats

CartoDB supports an ever-growing number of data types and file formats.

We encourage you to compress your files before importing them. Currently, supported compression and archiving formats include .ZIP and .GZ (also .TAR.GZ and .TGZ). Files will be decompressed and then imported based on the following table of supported file types. If the file you are importing does not match one of these types, then the import will fail.

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
      <td>Google Earth format</td>
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
      <td>GPS eXchange Format</td>
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

_CartoDB prefers tables that use comma separators. Also, we are only able to import first sheets with tabular formats, and the first row must contain your column headers._

*For Shapefiles, we require that the whole .zip file contains the .SHP, .DBF, .SHX and .PRJ files, all prefixed with same name. (For example a `ne_10m_populated_places.zip` file would contain `ne_10m_populated_places.shp`, `ne_10m_populated_places.dbf`, `ne_10m_populated_places.shx` and `ne_10m_populated_places.prj`).*

_XLS and XSLX may take longer than .csv files. We highly recommend that you export Excel files to .csv before importing in CartoDB._

### Manage your tables

You may view all of your uploaded tables on your dashboard's landing page. Feel free to order them by the date modified or created, or go your own way with custom tagging. 

#### Table privacy settings

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/privacy-dialog.png' | prepend: site.baseurl }}" alt="Tables privacy" /></p>

To change the privacy setting of a table click the colored label right next to the table's name. You may then choose "Public," "Only people with the link," or "Private". If a table is set to public, anyone may find it on your Public Page or roaming around the internet. If it requires a link, only those who have the link will be able to find it. If it's Private no one but you will be able to see the table.

Change the privacy settings of a table at any time within table view. From the 'Options' menu, select 'Change privacy' or click the colored lock button that appears on the top-right section of the page.

Keep in mind that different privacy options will appear depending on your account plan.

### Viewing tables

Once you've clicked on a table, there are two ways for you to view your table's data: Data view and Map view. You may toggle between the two views next to the table name.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/switch.png' | prepend: site.baseurl }}" alt="Viewing tables" /></p>

#### Data view

Data view allows you to inspect, filter, and query your data and see the results in a spread sheet format. The pull out pane on the right of the screen allows you to write SQL queries, apply basic filters, merge two uploaded tables, and add rows and columns.

#### Map view

Map view allows you to inspect your data as a layer over a base map. You may apply SQL queries or filters on the view, style the data's symbology using our wizards or by writing your own CartoCSS, and create infowindows.

Even though in the map view you may style and filter your data **but** this view is not the same as a shareable visualization. In order to create a visualization, click "Visualize" in the top right corner. Keep on reading to learn what you may do from there!

### Supported Data Types

When you upload your data to CartoDB, it will automatically assign a data type to your data such as string, number, date or boolean. It's important to check the correct data type was assigned. It is especially important to make sure CartoDB knows if a column is a date type so visualizations that rely on temporal information such as Torque animate correctly.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/datetype.png' | prepend: site.baseurl }}" alt="Visualizations" /></p>

The date type is located under the column name. It can be changed by clicking on the date type name under the column name to open a secondary navigation window from which you can select the correct data type.

### Options

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/options.png' | prepend: site.baseurl }}" alt="Options" /></p>

You can perform the following administrative actions in the Options menu: 

- **Export**  
  Allows you to export your data as a .csv, .shp, .kml, .svg and .geojson

- **Georeference**  
  Select this to begin georeferencing your data. You may also get an idea of how many of georeferencing credits you have used. Remember, you can always upgrade for more!

- **Duplicate Table**  
  Create a new table with identical information to your current table.

- **Merge Table**  
  Merge your current table with another existing table using either a "column join" (joins two tables based off of a shared column) or a "spatial join" (joins two tables based off of their spatial overlaps). For more on how to perform this function, take a look [here]({{ '/tutorials/merging_data.html' | prepend: site.baseurl }}).

- **Change privacy**  
  Allows you to edit who is able to access the table. 

- **Delete this table**  
  Entirely delete your table. But note that this will also delete any visualizations that rely on the table!

## Visualizations

### What is a visualization?

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/visualizations.png' | prepend: site.baseurl }}" alt="Visualizations" /></p>

Visualizations are the form in which CartoDB publishes your maps to the web. Specifically, they are the combination of one or more tables that function as layers within a map. Visualizations may be created after you have imported at least one table to your account. Make a new one by navigating to the "Visualizations" section of your CartoDB dashboard, clicking "Create new visualization", and selecting one or more tables to add as layers. For simpler datasets, access the tables page in your dashboard, select a table, and click on the "Visualize" button in the upper right corner.

After selecting what data you want to visualize, you're ready to start styling it.  Change your basemap shade and zoom, layer colors, generate infowindows, or animate your data over a timeline with Torque. All of your changes are automatically saved (behold, the beauty of the cloud!), so you don't have to worry about losing your work. (Sidenote: If you need to save a prior draft while working on a newer version, simply duplicate your visualization, but remember that stylistic changes made in one will not be reflected in the other).

### What are private maps?

We've decoupled table privacy from visualization privacy to give you ultimate control over what aspects of your projects are shareable. This way, your map (and any information selected on its infowindows) can be viewable while your data remains protected.

### Visualization privacy options

When you are creating your CartoDB visualization, you may also edit who is able to access to it. In order to edit these settings, click on the padlock from the map created on the “Visualizations” section of your CartoDB dashboard. Here you will also be able to delete your visualization or lock it to prevent any accidentally change in the future. 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/padlock.png' | prepend: site.baseurl }}" alt="Privacy settings in your visualization" /></p>

Every visualization is editable. At any time, you may change titles, update descriptions to clarify the content and purpose of your maps, or add tags to keep your projects organized and discoverable. 


In the window that appears, you will see four options for your privacy settings:

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/privacyoptions.png' | prepend: site.baseurl }}" alt="Privacy settings in your visualization" /></p>

When you share a visualization, you may also edit who is able to access it and update these settings as needed. To do so, click "Share" on the Editor. The subsequent window will give you four privacy options to choose from:

- **Public**  
  When selected, this setting means that your map will be publically available, and will be displayed in your [CartoDB Public Profile](http://blog.cartodb.com/post/82193209466/interesting-cartodb-profiles).

- **Only people with a link**  
  With this setting, only users who have the visualization URL will be able to find your map visualization. These visualizations will not appear in your CartoDB Public Profile.

- **Password protected**  
  These visualizations will require a password entry from anyone visiting the visualization URL before they are able to view the visualization. These visualizations will not appear in your CartoDB Public Profile.

- **Private**  
  You alone are able to view your visualization, and it will not appear on your public profile.

### Visualization metadata

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/vizheader.png' | prepend: site.baseurl }}" alt="Visualization Metadata" /></p>

For each visualization you may edit the name, add a description, source, license, and add tags to keep them organized and discoverable. You will find the "Edit metadata" option under the visualization title. 

You may use the description section to clarify the content and purpose of your map. Use tags to unite projects or themes. Remember to add the data sources. Also there is a space to insert the license information in case you needed. 

### Add Element

You are able to customize your visualization in just a few clicks. Under the "Edit metadata" option, there is the possibility to add an element on your map whether is a title, text or an image item.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/addelement.png' | prepend: site.baseurl }}" alt="Visualization" /></p>

- **Add title item**
 When you add this item, a text box with a title format will appear on your map. You can place the title box wherever you want and edit the style.

- **Add text item**
 Text boxes will give you control over the position of a block of text on your map. You can place text boxes anywhere in your visualization and edit them. You can change the text align, style, width, font and even the box style.

 - **Add annotation item**
 Annotations are text overlays linked to a coordinate and a zoom range. They allow users to explain and point to specific map elements. You can change the orientation and the text alignment, color, style and width, plus the box and line styles.

- **Add image item**
 An image can give extra value to your visualization. You will only need to add the image link to the box and it will pop up on your visualization. You can edit the box style color, the position, and also change the width.

### Configure Canvas

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/canvas.png' | prepend: site.baseurl }}" alt="Visualization" /></p>

We use our mobiles frequently to consume content, so there is chance that many people visits your visualizations using a mobile device. And that means a small screen in which not many elements will fit right. That's why we let you create responsive maps: you can design your visualization for desktop and mobiles. We offer you two canvases so you can design your visualization for each type of screen. 

By default you are in Desktop view; if you switch to the Mobile view, you'll see that we crop the viewable area. If you include elements for the Desktop view, you'll see that they are not present when you switch to Mobile, so that you can create specific elements for this new view, and viceversa. 

### CartoDB Sidebar

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sidebar.png' | prepend: site.baseurl }}" alt="CartoDB Sidebar" /></p>

The CartoDB sidebar is a toolkit that enables you to customize how data is displayed on your maps. Expand it to access your tools, and retract it to view your progress. Upon opening the sidebar, you'll notice a default data layer that syncs to your table. Add more layers to reveal more of your data at will.  

#### Custom SQL

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sqlquery.png' | prepend: site.baseurl }}" alt="SQL Query" /></p>

[SQL](https://en.wikipedia.org/wiki/SQL) (Structured Query Language) is the way that many applications request data from a database. They can ask simple queries (*i.e.* "give me all records from this table"), queries that match certain conditions (*i.e.*  "give me all records in which this field equals a certain value"), or more complex queries that combine data from two or more tables. 

CartoDB is built on a database called [PostgreSQL](http://www.postgresql.org/), and the geospatial extension called [PostGIS](http://postgis.net/). PostGIS allows you to perform geospatial queries such as finding data points within a given radius, the area of polygons in your table, etc. The available queries and documentation can be found on the reference pages of [PostgreSQL](http://www.postgresql.org/docs/9.2/static/reference.html) and [PostGIS](http://postgis.net/docs/manual-2.0/reference.html). 

When you create a visualization and link a table to it, all of the data in that table will be displayed. To curate what data is shown, you may write a custom SQL query or use our filter functions. 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/filters.png' | prepend: site.baseurl }}" alt="Filters" /></p>

In the SQL window, you are shown which query is being applied to your data and given the ability to modify it. Automatically, you will see the query that has been produced from the applied filter (sidenote: this is also a fun way to learn SQL!).

#### Wizards

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/wizards.png' | prepend: site.baseurl }}" alt="Wizards" /></p>

CartoDB's Wizards give you magic powers to style your data. Various visualization levels provide different sets of tricks for presentation:

- **Simple**  
The Simple visualization is exactly what it sounds like. You may add labels, adjust the size and color of your points, and change the appearance of your polygons, but there's no conditional formatting. We recommend this level for those beginning to explore their data.

- **Cluster**  
The Cluster visualization works with point files to display "clusters" of points that are close in proximity. It works by rendering a numbered circle that represents how many points are in a given area.

- **Choropleth**  
This tool changes the color of each feature based on a secondary numeric value from a column in your table. It is often used with polygon data to compare characteristics of regions and areas, such as income levels by neighborhood.

- **Category**  
Category visualizations display your points and polygons in different colors based on a qualitative characteristic in your table. For example, if your data shows multiple kinds of a certain characteristic (*i.e.* land-use zones), you would use the category wizard to change the color of each characteristic (*i.e.* blue for residential, red for commercial, and purple for mixed-use districts).

- **Bubble**  
The Bubble visualization scales the radius of points in your data based on a numeric value from a column in your table. This is useful for comparing numeric values associated with a certain point, like population sizes of cities. Remember that this tool is not designed to work with polygons. 

- **Intensity**  
The Intensity visualization measures the density of your points by darkening areas with many points in contrast to those with fewer points. This is useful when you have a dataset with a large number of points and want to stratify their occurrence. With the addition of the infowindow function, this tool can be understood as a more dynamic heatmap.

- **Density**  
The Density visualization aggregates your data in hexagons and colors them based on the amount of data contained within each unit. Areas with more data points will be darker than those with fewer points. However, use of a Density map disables infowindows. If those are important to you, then opt for the Intensity map.

- **Torque**  
Torque is ideal for the display of temporal data. This tool animates a progression of points based on a table column containing the time stamp. The standard format of the date column is `YYYY-DD-MMThh:mm:ss`, but Torque also visualizes data that contains a year, year/month, or year/month/day characteristics.

- **Torque Heat**  
Torque heat is a variation of Torque to create interactive heat maps or animated heatmaps when you have temporal data. Areas of greater color intensity indicate greater density of data. 

- **Torque Category**  
In addition to Torque and Torque Heat, Torque Category displays data points in different colors based on qualitative characteristics in your table. If your data shows different characteristics (such as land-use zones), use this wizard to customize the color of each characteristic.

Beware that different types of data enable and disable certain wizards. Experiment with your data to discover the optimal tools for your visualization.

#### Simple
Display data as simple marker points 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/simple.png' | prepend: site.baseurl }}" alt="Simple Wizard" /></p>

- **Marker fill**  
This tool adjusts three point properties: the size of the marker (a numeric value between 0-40), the color of the marker (using Hex codes or by selecting from the color palette), and the opacity of your point (a value between 0-1).

- **Marker stroke**  
The marker stroke allows you to edit the width of your points' border or outline (a value between 0-40), their color (using Hex codes or by selecting from the color palettex), and their opacity (a value between 0-1).

- **Composite operation**  
Change how the colors of overlapping geometries will interact with one another. You can select from: multiply, screen, overlay, darken, lighten, color-dodge and color-burn. Each of these operations has a different effect on how the overlapping sections of markers are displayed. Refer to [Composite Operations](http://docs.cartodb.com/cartodb-editor.html#composite-operations) for a deeper overview on how blend modes work. You can explore the options available [here](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

- **Label text**  
Select the field that you would like to act as a label (if any).

- **Label font**  
Change your label's font.

- **Label halo**  
Change the color and width of the outline around your text. This can be helpful for increasing readability.

- **Label offset**  
Change how far the label sits from its marker. If set to "0," markers will appear directly under their corresponding label. A negative value will bring the label above the marker, and a positive value will bring it below.

- **Label overlap**  
When set to "true", labels may overlap one another. When set to "false", not all labels will show to prevent overlap.

- **Label placement**  
  - _Point_ The label aligns to the center of the feature.
  - _Interior_ Like Point aligns to the center of the feature and ensures that the label remains in place even if the center of the feature is outside of the geometry.
  - _Vertex_ will label the vertex along a line or polygon; this will repeat the label.
  - _Line_ will align the label to a line or to the border of a polygon; this will repeat the label.

#### Cluster
Group data into clusters

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/cluster.png' | prepend: site.baseurl }}" alt="Cluster Wizard" /></p>

- **Buckets**  
Define how many groupings your data will have. Fewer buckets means that data shows at less granular levels.

- **Label font**  
Change your label's font.

- **Label halo**  
Change the color and width of the outline around your text. This can be helpful for increasing readability.

Refer to [CartoCSS documentation](http://docs.cartodb.com/cartodb-editor.html#cartocss) for an explanation of marker fill, marker size and marker stroke.

#### Choropleth
Thematic map with regions different colors in proportion to the data 

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
  - Composite operation
  - Label text

Refer to [CartoCSS documentation](http://docs.cartodb.com/cartodb-editor.html#cartocss) for an explanation of marker width, and marker stroke.

#### Category
Display data in different colors based on categories 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/category.png' | prepend: site.baseurl }}" alt="Category Wizard" /></p>

- **Map/Legend Items**  
A list of the different categories that will appear on your map and in your legend can be found under Marker Stroke. Here, you can edit their color or add an image marker.

- **Column**  
Select the numeric value column(s) that you want to display.

Refer to [CartoCSS documentation](http://docs.cartodb.com/cartodb-editor.html#cartocss) for an explanation of marker fill, and marker stroke.

#### Bubble
Scale radius of markers based on numeric data in your table

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/bubble.png' | prepend: site.baseurl }}" alt="Bubble Wizard" /></p>

- **Radius (min-max)**  
Set the sizes of the smallest and largest markers, or bubbles, on your map.

- **Bubble Fill**  
Set the color and opacity of bubble markers.

- **Bubble stroke**  
Edits multiple values: the width of your bubble stroke, a.k.a. its border or outline (a value between 0-40); the color (using Hex codes or by selecting from the color palette), and the opacity (a value between 0-1).

- **Composite operation**  
Change how the colors of overlapping geometries will interact with one another. You can select from: multiply, screen, overlay, darken, lighten, color-dodge and color-burn. Each of these operations has a different effect on how the overlapping sections of markers are displayed. Refer to [Composite Operations](http://docs.cartodb.com/cartodb-editor.html#composite-operations) for a deeper overview on how blend modes work. You can explore the options available [here](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

- **Described under [Choropleth](http://docs.cartodb.com/cartodb-editor.html#choropleth)**
  - Column
  - Quantification

#### Intensity
Show density of points much like a heatmap

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/intensity.png' | prepend: site.baseurl }}" alt="Intensity Wizard" /></p>

Refer to [CartoCSS documentation](http://docs.cartodb.com/cartodb-editor.html#cartocss) for an explanation of marker fill, and marker stroke.

#### Density
Data is aggregated into hexagons colored based on intensity of data in each cell. Infowindows will be disabled.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/density.png' | prepend: site.baseurl }}" alt="Density Wizard" /></p>

- **Method**  
Choose whether density is displayed using hexagonal or rectangular shapes.

- **Polygon Stroke**  
Edits multiple values: the width of your polygon stroke, a.k.a. its border or outline (a value between 0-40); the color (using Hex codes or by selecting from the color palette), and the opacity (a value between 0-1).

- **Polygon Size**  
  Adjust the size of the polygons on your map.

- **Composite operation**  
Change how the colors of overlapping geometries will interact with one another. You can select from: multiply, screen, overlay, darken, lighten, color-dodge and color-burn. Each of these operations has a different effect on how the overlapping sections of markers are displayed. Refer to [Composite Operations](http://docs.cartodb.com/cartodb-editor.html#composite-operations) for a deeper overview on how blend modes work. You can explore the options available [here](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

- **Described under [Choropleth](http://docs.cartodb.com/cartodb-editor.html#choropleth)**
  - Buckets
  - Color Ramp

#### Torque
Data animation of a progression of points, requires time-series data

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torque1.png' | prepend: site.baseurl }}" alt="Torque Wizard" /></p>

- **Cumulative**  
Determines whether points stay on your map throughout the animation or fade away.

- **Time Column**  
Select the date column that you would like to display. The column must contain either date-type or numerical data (so long as it reflects the passage of time) to be used in the Torque visualization. Refer to the [Supported Data Types](http://docs.cartodb.com/cartodb-editor.html#supported-data-types) documentation on how to change the data type for columns. Refer to the [PostgreSQL documentation](http://www.postgresql.org/docs/9.2/static/datatype-datetime.html) for more information on the date and time data types supported by CartoDB.

- **Marker Type**  
Select whether you'd like to display points as rectangles or ellipses.

- **Marker Fill**  
Adjust three properties: the size of the marker (a numberical value between 0-40), the color (using Hex codes or by selecting from the color palette), and the opacity (a value between 0-1).

- **Marker Stroke**  
The marker stroke allows you to edit the width of your point, a.k.a. its border or outline (a value between 0-40), the color (using Hex codes or by selecting from the color palette), and the opacity (a value between 0-1).

- **Duration (secs)**  
Set the total length of your visualization.

- **Steps**  
Edit the number of animation groupings. Fewer steps will create a more step-by-step or choppy visualization with more data in each "step." A greater number of steps will look smoother. This correlates to whether your data is being displayed by day, week, month, etc.

- **Blend Mode**  
Style effects for how layered data is blended during the animation. Blend modes use color composite operations. Available modes include lighter, multiply, source-over, and xor. Refer to [Composite Operations](http://docs.cartodb.com/cartodb-editor.html#composite-operations) for a deeper overview on how blend modes work. You can explore the options available [here](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

- **Trails**  
Select whether data points display a "trail," or faded image after they disappear from your map. Choose a value between 0 and 5: 5 will display a longer, more-lasting trail and 0 will not show a trail.

- **Resolution**  
Torque creates a grid of your data and aggregates data to each cell of that grid. The resolution parameter determines the width and height of each cell. Larger numbers will make your data more gridded. 

Torque visualizations also have [Torque CartoCSS](http://docs.cartodb.com/cartodb-editor.html#cartocss) options to further customize the look of your visualization.

#### Torque Heat
A variation of Torque allowing for an animated heatmap of temporal data where areas of greater color intensity indicate greater density of data. 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torqueheat.png' | prepend: site.baseurl }}" alt="Torque Heat Wizard" /></p>

Much of the interface options for Torque Heat are the same for Torque and are explained in the [Torque documentation](http://docs.cartodb.com/cartodb-editor.html#torque).

Options that are unique to Torque Heat:

- **Marker Size**  
Choose the size of your markers.

- **Threshold**  
Set the transparency of the heat map markers.

- **Animated**  
Activate this slider to turn your temporal data into a linear torque animation.

Torque visualizations also have [Torque CartoCSS](http://docs.cartodb.com/cartodb-editor.html#cartocss) options to further customize the look of your visualization.

#### Torque Category
A variation of Torque, which allows for an animation of points whose color relates to categories in your dataset

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecategory.png' | prepend: site.baseurl }}" alt="Torque Category Wizard" /></p>

Much of the interface options for Torque Category are the same for Torque and are explained in the Torque documentation.

Options that are unique to Torque Category:

- **Category Column**  
Choose data from your table you would like to appear as categories on your map and in your legend. You can edit their color or add an image marker underneath the Resolution menu option.

Torque visualizations also have [Torque CartoCSS](http://docs.cartodb.com/cartodb-editor.html#cartocss) options to further customize the look of your visualization.

#### Info-windows

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/infowindows.png' | prepend: site.baseurl }}" alt="Infowindows" /></p>

##### On-click info-windows

On-click info-windows will appear when a point or polygon is clicked. They display data of your choosing, and you may customize the way your windows appear by selecting from a variety of color combinations via the drop-down menu. To the right, you will notice a numeric selector that allows you to adjust the width (in pixels) of your info-windows.

To choose which data columns to display, toggle the slider to the right of each column title. Once your column is "on", you may select to show the column title on your visualization by checking the box. 

Further customization features include display order adjustments via column drags, changing column names by selecting the icon above the list, and the option to use Custom HTML by clicking on the "</>" button. See the image below for reference.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/infowindow.png' | prepend: site.baseurl }}" alt="On-click infowindows" /></p>

##### On-hover info-windows

On-hover info-windows display when your cursor is "hovering" above an info-window. They display data of your choosing and can be edited in the same ways as on-click info-windows.

#### CartoCSS

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/cartocss.png' | prepend: site.baseurl }}" alt="CartoCSS" /></p>

CartoCSS is the syntax language that CartoDB uses to allow users greater control over how their data is visualized. When you customize CartoCSS, you're able to control things like marker size, marker color, line stroke, and text display at a more granular level than the Wizards permit. If you have used Cascading Style Sheets for styling webpages, then CartoCSS will be familiar, but there are key differences to note.

CartoDB uses a flavor of CartoCSS developed by [Mapbox](https://www.mapbox.com/). Follow the links to check out some of their excellent documentation:

- [CartoCSS API](https://www.mapbox.com/carto/api/2.3.0/)

Learn the basics of CartoCSS and designing data for your maps with our [Introduction to map design]({{ '/courses/02-design-for-beginners.html' | prepend: site.academy-baseurl }}) course.

CartoCSS options available to edit from the CartoDB editor wizards include:

- __Marker-fill:__ choose the color of your markers, the size of your markers and the transparency level of your markers (from 0 to 1)

- __Marker-size:__ adjust the size of your markers

- __Marker-stroke:__ adjust the border color of your markers, thickness of the border, and transparency (from 0 to 1)

#### Torque CartoCSS
In addition to being able to customize the look of your visualizations using CartoCSS, torque visualizations have specific options you can change.

##### Torque

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSS.png' | prepend: site.baseurl }}" alt="Torque CartoCSS" /></p>

- __Torque Frame Count:__ the number of steps in your torque animation.

- __Torque Animation Duration:__ the length of your animation.

- __Torque Time Attribute:__ the name of the date column in your table.

- __Torque Aggregation Function:__ Torque renders your data in clusters, choose what value to show such as max values only, or count how many values are in each cluster.

__Example functions:__ count(column_name), max(column_name), sum(column_name). Column data type must be numeric. 

Learn more about [how spatial aggregation works](https://github.com/CartoDB/torque/wiki/How-spatial-aggregation-works).

- __Torque Resolution:__ Torque creates a grid from your data and aggregates data to each cell of that grid. Torque resolution determines width and height of each cell. Larger numbers will make your data more gridded.  

- __Torque Data Aggregation:__ two options, linear which does not leave a trace of past data, and cumulative which draws data markers cumulatively to show past data.

##### Torque Category

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSScat.png' | prepend: site.baseurl }}" alt="Torque Category CartoCSS" /></p>

Torque Category has much of the same Torque CartoCSS in addition to a few different options available for customization.

- __Torque Aggregation Function:__ Torque renders your data in clusters. Torque Category uses a postgreSQL command, CDB_Math_Mode(torque_category) to find the values that appear most often in your data in order to cluster your data accordingly.

Learn more about [how spatial aggregation works](https://github.com/CartoDB/torque/wiki/How-spatial-aggregation-works).

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSSframeoffset.png' | prepend: site.baseurl }}" alt="Torque CartoCSS Frame Offset" /></p>

Once your data is aggregated, you can further customize your torque animation options by changing the marker styles for each frame of your animation by customizing the options found under the frame-offsets and adding additional frame-offsets.

You can also select each cluster value to change marker styles based on your data categories. For instance, if you want to style the maximum value in your dataset to have different marker styles, you would change the marker styles for the maximum value in your animation, which you will find by looking at the values in your CartoCSS.

##### Torque Heat

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSSheat.png' | prepend: site.baseurl }}" alt="Torque Heat CartoCSS" /></p>

Torque Heat has much of the same Torque CartoCSS in addition to a few different options available for customization.

- __Image Filters:__ this option lets you determine the color stop for your heat map visualization.

- __Marker File:__ CartoDB provides marker files for you, this option can’t be changed.

- __Marker Fill Opacity:__ Change the opacity of the markers.

- __Marker Width:__ Change the width of the markers.

#### Composite Operations

Composite operations style the way colors of overlapping markers interact with each other. You can think of them as blend modes or filters, similar to blend operations in Photoshop. Composite operations are available in the Simple, Choropleth, Bubble, Density and Torque visualizations. 

The available options within the wizards interface include multiply, screen, overlay, darken, lighten, color-dodge and color-burn. In addition, blend modes specific to Torque include lighter, multiply, source-over, and xor. For more information on the different options available, refer to the documentation on [Mapbox](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

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

##### Legends HTML styling

If you opt to create a custom legend from the "Template" field described above, then you can create your own legend from scratch using HTML. Alternatively, you can edit an existing template with HTML. HTML gives you the most precise control over legend elements.

#### Filters

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/filter.png' | prepend: site.baseurl }}" alt="Filters" /></p>

Use the Filters section of the editor to select certain ranges of data to display. When working with numerical data, the Filter allows you to see the distribution of your data and select what range to include. To get started, pick the column from which you want to source data. If you're working with string (or text) data, you can search text to include/exclude. When you have date (or numeric) data, include or exclude certain periods of time. If you need to get more creative, different filters (on the same or on different columns) may be combined to feature unique data combinations of your choice.

CartoDB uses SQL to pull different data sets from your data table. Click on the SQL section of the Editor (near the top of the pull-out tray) to see what SQL queries were applied. You can also edit and create your own.

For a quick video primer, take a look at our [filter tutorial]({{ '/tutorials/filters.html' | prepend: site.baseurl }}).

### Options

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/optionvisualization.png' | prepend: site.baseurl }}" alt="Options" /></p>

- **Duplicate Visualization**  
  Create a new visualization with identical information to your current visualization.

- **Delete Visualization**  
  Entirely delete your visualization. This will not remove any table linked to this visualization.

### Basemaps

#### What is a basemap?

A basemap is a graphical representation of the world showing natural and cultural features such as water bodies, topography, park areas, points of interest, geopolitical borders, roads, streets and sometimes buildings. CartoDB provides you with a selection of basemap options and providers (such as Stamen or Here). You may import your own custom basemap (from MapBox, an XYZ tileset (e.g. Stamen maps), or WMS.)  or use a solid background color, repeating image or pattern. With the easy-to-use basemap selector, you can focus on the an aesthetically pleasing way of visualizing your data.

#### Selecting your basemap

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/basemapselect.png' | prepend: site.baseurl }}" alt="Select a basemap" /></p>

When you first create a visualization, it will be given a default “Nokia Day” basemap. To change your basemap simply click on “Nokia Day” below left of the Visualization view and select an available style. You may add your own custom basemap in the “yours” option and then by linking to the URL for that basemap from MapBox, XYZ, or WMS. Finally, there are options for adding a solid color or a repeating image pattern instead of a basemap. All of these features give you a high level of customization when creating a map visualization.

CartoDB offers you a variety of basemaps you may use in your visualization. You may select any one of them, and the change will be applied immediately. You may change your basemap anytime and the rest of your layers will remain unchanged. Take some time to explore our different available basemaps. You'll be able to see that some of them have more detail (such as depicting borders, roads, mountains) while others are more minimalistic. Thus you may choose one that's best suited for the purpose of your visualization.

#### Including an external basemap

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/addbasemap.png' | prepend: site.baseurl }}" alt="Add your own NASA basemap" /></p>

Apart from the default basemaps offered in CartoDB, you may integrate third-party basemaps to customize your visualizations even further. You have four options (we're always striving to add more):

1. **MapBox**  
  MapBox is a service which lets you customize the design of a basemap with colors and elements you choose, and integrate easily to CartoDB. Just select the URL from your MapBox map and paste it in the configuration window.

2. **XYZ Template**  
  XYZ Templates allow you to access many other basemaps, including those from OpenStreetMap and Stamen. In order to use these basemaps, you need their tile URLs. Give it a try with these:
  - **Stamen Toner:** `http://{s}.stamen.com/toner/{z}/{x}/{y}.jpg`
  - **Stamen Terrain:** `http://{s}.stamen.com/terrain/{z}/{x}/{y}.jpg`
  - **Stamen Watercolor:** `http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg`
  - **OSM:** `http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`

3. **WMS Base URL**  
  A WMS, or Web Map Service, allows you to connect to map images generated online by a map server using data from a GIS database. You may use these as basemaps, and they can often contain very interesting information that could be harder to find with other basemaps. You can find URLs for different WMS online, but you often have to look closely to make sure you're getting what  you want. Take a look at these WMS URLs, if you want to see what kinds of things you can do with a [WMS baselayer](http://nationalatlas.gov/infodocs/wms_intro.html).

4. **NASA**  
  With this option, you may easily use  NASA Global Imagery Browse Services satellite imagery as a basemap for your visualizations. Just select the date you're interested in, and whether you'd like a day map (which changes based on the day selected) or a night map, and add it to your visualization.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/nasabase.png' | prepend: site.baseurl }}" alt="Add your own NASA basemap" /></p>

#### About map projections

We all know by now that the earth isn't flat. Maps, however, are. As 2D representations of the globe, visualizations are inevitably distorted. The methods used to digitally render the earth are called  [map projections](http://en.wikipedia.org/wiki/Map_projection). Different types of projections are used to represent the earth at various scales. From the continents to a single region or state / province, each projection type must preserve certain properties at the expense of others such as area, direction, shape, and distance.

The majority of online maps are a variant of the [Mercator Projection](https://en.wikipedia.org/wiki/Mercator_projection), commonly referred to as the Web-Mercator. Currently, CartoDB relies on this projection.

You can learn more about [map projections in Wikipedia](http://en.wikipedia.org/wiki/Map_projection), and read up on all the details about how CartoDB handles [projections internally]({{ '/tutorials/projections.html' | prepend: site.baseurl }}).

### Options

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/vizz_options.png' | prepend: site.baseurl }}" alt="Options for your visualization" /></p>

Besides the Basemap selector, you have an Options selector which will give you access to control what elements are shown in your visualization: 

* **Fixed title** Whether or not the title appears.
* **Fixed description** Whether or not the description appears.
* **Search box** Turn the appearance of a search box on/off.
* **Share options** Whether quick links for sharing appear.
* **Zoom controls**
* **Scroll wheel zoom** Enable or disable zoom using a mouse scroll wheel.
* **Layer selector** Allow viewers to toggle different layers on/off.
* **Legends** Turn the appearance of legends on/off.
* **Fullscreen** Enable or disable the ability of viewers to enter fullscreen mode.
* **CartoDB Logo** Include or exclude the CartoDB logo on your map.

### Share your visualization

Once you have created a visualization, it's time to share it with the world! Take a look at our [written tutorial]({{ '/tutorials/sharing_maps.html' | prepend: site.baseurl }}) or [video tutorial](http://vimeo.com/80472123) for a guide to publishing and sharing your visualizations. Read on for a description of the CartoDB sharing interface!

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sharevisualization.png' | prepend: site.baseurl }}" alt="Share your visualization" /></p>

You have the following options to share your visualization:

- **Get the link**
You will find here the URL to share your Visualization via Twitter, email, or anywhere else. When you share that link, viewers will only be able to explore it on the map, they will not be able to edit any of your data.

- **Embed it**
You will find here the embed code to get your map into your blog, website or simple application.

- **CartoDB.js**
This URL will allow you to add your map to your applications. Read more [here](http://docs.cartodb.com/cartodb-platform/cartodb-js.html).

### Supported fonts

- **DejaVu Sans**  
Oblique, Bold, Oblique, Bold Oblique, Condensed, Condensed Oblique, Condensed Bold Oblique

- **DejaVu Sans Serif**  
Condensed, Condensed Italic, Book, Condensed Bold Italic, Italic

- **unifont**  
Medium

- **Open Sans**  
Regular, Bold, Semibold, Light, Italic, Bold Italic, Semibold Italic, Light Italic

## Managing your data

Whew, you're almost a CartoDB expert! As you know by now, there are a variety of methods for managing and visualizing your data with our Editor, Wizards, and SQL tools-- to name a few. In earlier sections, we discussed using filters on your data and merging tables. Below is a quick introduction to a few more techniques that we host for your creative convenience. 

### Geocoding data

CartoDB is more than a styler- we're also a behind-the-scenes geocoder. We understand that geocoding is essential to data management and facilitate six methods for this process. To begin, click  "Options" and "Georeference" and then select one of the alternatives that allow you to georeference your data in the best possible way.


**By Lon/Lat columns**

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo1.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>

Importing your data with latitude and longitude coordinates already included renders a map that automatically displays your markers and polygons from the coordinates uploaded to your table.  To georeference, just select the longitude and latitude columns in your table and click continue. 

**By City Names** 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo2.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>
 
Alternatively, you may georeference by City Names. Select the column that contains the city names and also select the country to which the cities belong to if you want to be more accurate.


**By Admin. Regions** 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo3.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>


You may also georeference by Administrative Regions. Select to georeference by Admin. Regions, and line up the data in your table to the type and location of whatever administrative region you like. CartoDB will access our comprehensive cloud databases to automatically load polygons for regions like states and municipalities.

**By Postal Codes**

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo4.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>

Postal code systems have been set up in many countries and these often provide a high level of spatial precision. On CartoDB you have the option to georeference your data by postal codes. Just select the column where your information is stored and the country where the zip codes are from and immediately press continue. 

**By IP Addresses** 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo5.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>

IP Georeferencing is an important toolbox item on today's web environment. If you select this option, CartoDB will take your IP address column and convert it into location points on your map.


**By Street Addresses** 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/geo6.png' | prepend: site.baseurl }}" alt="Geocoding data" /></p>


Finally, you may georeference by address. To do this, your columns will need to be organized into categories such as "address" (which would contain the building number and street name), "state" and "country," if its known.

Matching addresses with geographic coordinates consumes geocoding credits. Every time geocoding is done in string format, geocoding credit is used (for example, if you geocode a table with 20 records, 20 geocoding credits are used). All CartoDB plans include a number of geocoding credits that can be used every month. After exceeding the geocoding limits, a fixed fee is charged per 1000 credits. 

On the upper left side of the window, you will see the operation cost and you must accept the price to be able to continue.

CartoDB may use a third party to provide geocoding and reverse geocoding services. Geocoding Services are subject to the third parties [terms and conditions](http://developer.here.com/terms-conditions).


### Running SQL queries

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sql-queries.png' | prepend: site.baseurl }}" alt="Running SQL queries" /></p>

CartoDB enables you to query data using the Structured Query Language (SQL). We provide particular support for PostGIS SQL commands, which allow you to filter data spatially. Some common uses of PostGIS SQL queries are to answer questions such as, "How many points from one dataset are located within a polygon from another dataset?" Or commands such as, "Give me all my data within 50 kilometers of a certain latitude longitude coordinate."

Review the PostgreSQL  [documentation](http://www.postgresql.org/docs/9.3/interactive/sql.html) for how to use PostgreSQL flavored SQL, as well as the [PostGIS documentation](http://postgis.net/documentation/) for tips on writing spatial queries. Additionally, CartoDB has tutorials on how to run SQL queries.

To run an SQL query in the CartoDB dashboard, open a table or visualization. In the righthand sidebar, click the SQL icon. The sidebar will expand, and by default you will see the following query:

{% highlight sql %}
SELECT * FROM table_name
{% endhighlight %}

You can modify this query and then hit the "Apply query" button or press `cmd + s` on a Mac OS or `ctrl + s` on a Windows OS. An example of a modified query might look like the following:

{% highlight sql %}
SELECT * FROM ne_10m_populated_places_simple WHERE featurecla = 'Admin-0 capital'
{% endhighlight %}

This query will select all rows that have a "featurecla" column value of "Admin-0 capital" from the table "ne_10m_populated_places_simple." Only the rows that match this SQL query will appear in the table and map view for this dataset. Remember that when applying SQL queries to visualizations, only the queried data will be shown.

### Table from query

It is possible to create a new table from an SQL query. After applying your modified SQL query, click "options" in the upper right corner, and select "Table from query" within the drop-down menu. You will be asked to name your new table from the query. After naming the table, CartoDB will save and load it for you.

### Merging data

Whether you are using data from public repositories or your own datasets, sometimes it is useful to join information from two tables. You can always do this via your own SQL, but CartoDB makes it easier with our merge tool. 

The most basic way to join two tables is by a shared unique value, or a "Regular Join." For example, country ISO codes are often used to merge the_geom from one table and population count from another. Regular Joins are also very useful for attributes like, shared IDs, country names, or dates.

#### Merge by Regular Join

Regular Joins are useful if you have two datasets that share a common value in rows. For example, country level datasets often contain an ISO code for each row. If you have two of these datasets and want to join all or some of their values into a single table, then this option is for you. Follow the steps below:

1. From the table you have created, click "options" in the upper right corner.
2. Select "Merge tables."
3. Click the radio "Regular Join."
4. The left-hand menu contains your first table. Toggle on or off the columns you want to include in the join.
5. The right-hand menu is for loading your second table. Click the drop-down menu and select or begin typing the name of your second table.
6. In the second table, toggle on or off the columns from the second table you want to join to the first.
7. Use the radio to the left of the column names in both the first table and the second to select the column in the first table that corresponds to a value in the second table. Do the same for the correct column name in the second table menu.
8. Finally, hit "Next," enter your new table name, and wait for the table to be processed.

#### Merge by Spatial Join

Spatial Join calculates the intersecting geospatial records between two tables (ex. points in polygons). You'll need to decide the operation to perform. 

Similar to Excel, **COUNT** calculates the number of intersecting records, **SUM** adds together a column value for all intersecting records, and **AVG** provides the average value of a column for all intersecting records.

### Export data

After you have created, updated, or deleted data from your CartoDB tables, you may want to export them for sharing or offline use. Our one-click data export makes that decision easy.

1. From your table view, click "options" in the upper right corner.
2. Select "Export."
3. A menu of export formats that CartoDB supports, including Comma separated (CSV), KML, ESRI Shape Files (SHP), and SQL will appear.
4. Click the format you would like to download.

#### Download by URL

There is a pro-tip for accessing downloads by using your direct table URL. You can make use of the SQL API to run any query and ask for the results to be retrieved in different formats. For example:
DOWNLOAD BY URL

{% highlight bash %}
https://{USERNAME}.cartodb.com/api/v2/sql?format=csv&q=SELECT+*+FROM+tm_world_borders_sim
{% endhighlight %}

### Creating indexes

Advanced users can squeeze better performance out of your visualizations and SQL API requests by adding custom indexes onto columns. In general, you should seek this functionality if you:

1. Are filtering a visualization by values in one or a few columns.
2. If you are regularly querying up data through the SQL API and filtering by one or a few columns.
3. If you are creating Torque visualizations on very large datasets.

In most cases, a single column index is the safe way to go. For Torque visualizations, a single column index on the column used to play the data (e.g. the date or numeric column) is optimal. To create a single column index, use this SQL pattern:

{% highlight sql %}
CREATE INDEX idx_{TABLE NAME}_{COLUMN_NAME} ON {TABLE_NAME} ({COLUMN_NAME})
{% endhighlight %}

There are more advanced indexes you can use in CartoDB, such as multi-column indexes. However, they are not a magic wand (our Wizard maintains that glory), so we recommend that you read the full documentation on [PostgreSQL Indexes](http://www.postgresql.org/docs/9.1/static/sql-createindex.html) before proceeding. 

Indexes will take space from your quota. But CartoDB adds some of our own indexes that are not counted against your quota, so there is no need to index the automatically generated columns in CartoDB (e.g. the_geom and cartodb_id).

### Common data

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/commondata.png' | prepend: site.baseurl }}" alt="Common data" /></p>

From your dashboard, you may also access the Common Data page, which gives you access to public datasets. Examples of data you may find there include World Borders, European Countries, Urban Areas, and Populated Places. Add a table from the list to your dashboard and start mapping it.

## Error codes and solutions

### Importer error codes

We try to predict and provide solutions for as many problems as we can, but we're not omniscient...yet. For rare cases when we're caught off-guard, we categorize your error and report back to you at the time of import. Please reach out to us for assistance on our [support platform]({{ '/docs#support' | prepend: site.cartodb-baseurl }}).

Here, we try to anticipate your needs and provide a set of errors with possible solutions.

<table>
  <tbody>
    <tr>
      <td>1000</td>
      <td>File I/O error</td>
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
      <td>Empty table - If you upload a file that results in an empty table, we assume there was an error. If this in fact was not an error, please revisit the user interface or send an SQL command to create a table. If it was in fact an error, check that your file is formatted correctly and that it contains data.</td>
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
      <td>Over account table limit - The file you tried to upload is putting you over your table quota. You can upgrade your account easily by accessing your account settings page. Alternatively, you may be able to delete some unused tables to make room.</td>
    </tr>
    <tr>
      <td>9999</td>
      <td>Unknown, Please report your error to <a href="{{ '/docs#support' | prepend: site.cartodb-baseurl }}">support</a> so we can figure it out!</td>
    </tr>
  </tbody>
</table>

### SQL errors

When executing SQL either in the user interface or through the SQL API, you may encounter errors. We report back to you the full error provided by PostgreSQL. One of the easiest ways to figure out what is going on is to search for your error on Google and perform independent troubleshooting.

### CartoCSS errors

CartoCSS styling is generally simple, making typos or forgetting quotations are common oversights. In cases when you are editing CartoCSS through the user interface, errors are reported back the the CartoCSS input window. From there, it is typically not difficult to discover where you messed up. More often than not, users forget to end lines with semi-colons, use quotes, and close brackets and braces. Simple proof-reading is best practice. 

## Your account

### API Key

The API key offers the simplest way to access private data or perform writes and updates to your public data. Remember that your API key protects access to your data, so keep it confidential and only share it if you want others to have this access. If necessary, you can reset your API key in your admin dashboard.

#### Find your API key

1. Go to your dashboard.
2. Click on your username in the top right corner, and select “Your API keys.”
3. Here, you can copy your API key, see use examples, and reset your API key.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/API.png' | prepend: site.baseurl }}" alt="API" /></p>

### Quotas and billing

We offer a wide range of plans to fit every user's needs. Each plan comes with different features and storage quotas. Take a look at our [pricing plans]({{ '/pricing' | prepend: site.cartodb-baseurl }}) to pick the best plan for you.

Once you upgrade from a free plan to a paid plan, a monthly billing period will be set for your account. Each month, you will receive the corresponding invoice via email with the description of services that will be charged for that billing period.

If you upgrade from one paid plan to another, your new billing period will start the same day of the month that your old plan started. This means that your first invoice will be pro-rated, and you will only be charged for the days remaining in your billing period.

You may experience extra charges besides the monthly cost of your plan if you exceed the free quota for geocodings or mapviews, as defined in our Terms of Service.

### Free trial and upgrading

All of our plans have a fourteen-day free trial, during which you may experiment with one of our plans to see if it's a good fit. Once you create an account, you may choose to change your plan from "Account Settings," accessed from your dashboard.

In the Account Settings window, you may view your current plan and click "Change your current plan" to choose a new one. Note that the charges will be pro-rated, so you may change your account type whenever you like. 

### Deleting your account

Navigate to Account Settings, and scroll to the bottom of the page where you will see a link to "Delete my account." If you have any questions or concerns (we enjoy compliments, too!), please reach out to our support team at <support@cartodb.com> before deleting your account.

## **CartoDB Enterprise**

#### About Multiuser Enterprise

CartoDB designed the Multiuser (MU) Enterprise to enhance the scale and scope of collaboration on our platform. The service provides multiuser environments that allow users to upload and manipulate datasets securely, and share them with specific team members or publish them directly on the web.

With CartoDB MU, no custom software installation is necessary to access high-performance GIS capabilities. Take advantage of this web-based feature to work alongside colleagues on projects in real-time from a central, 24/7 accessible database- the cloud! Here is an overview of the Multiuser features.

#### Users, Owners, and Organizations

CartoDB Enterprise works as a hub for many users or teams working together. An "organization" refers to the name of the group of collaborators that will be interacting on Enterprise, for instance the name of your business or project team. A user is the individual that is part of a given organization. 

If you have been using a normal CartoDB account and are starting to use CartoDB Enterprise with Multiuser, you will see that you are using the same CartoDB Editor with some new options. These new options is what we'll cover in the following sections. For general documentation about the CartoDB Editor please refer to the [corresponding sections in docs.cartodb.com](http://docs.cartodb.com/cartodb-editor.html)

An "Owner" of an organization has privileges to perform admin-related tasks of the organization (i.e. create users, assign quotas, etc.).

### **Users**

#### Dashboard

After login, the Enterprise main-page is a mosaic of team activity. This is your home-base, a.k.a. the page where you are able to view and access data sets and visualizations published by team members in addition to monitoring your own activity and quota availability. Order by "modified" or “created” to see what’s been added by either latest edit or the date of original posting. If you’re feeling inspired, click the “New table” icon to add your own map. 

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_0.png" alt="Using sync tables" /></p>

Also, you may filter your view to see only the tables you have created or to search by table name or tag.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_1.png" alt="Using sync tables" /></p>

When you are in the Visualizations section of your dashboard you will also be able to filter between **All visualizations** and **Your visualizations**. **All visualizations** will list your visualizations plus all the visualizations that your Organization teammates have selected to share with you. 

#### Creating tables and visualizations

The workflow to create tables and visualizations is the same as in the normal edition of the CartoDB Editor. 

#### Tables: General and Team privacy settings

Once you have created a new table, you have new privacy options compared to the standalone version of the CartoDB Editor. You can manage them from the same place, with the lock in the upper left corner of any table.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_2.png" alt="Using sync tables" /></p>

By clicking in the lock, a modal window will appear: 

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_3.png" alt="Using sync tables" /></p>

You have two sections in this window: 

1. **General privacy**: As well as in the standalone CartoDB Editor, by default a table will be only accessible by yourself. You can choose it to be **only visible to people with the link**, or make it **public** (it will get listed on your Public Page).

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_4.png" alt="Using sync tables" /></p>

2. **Team privacy**: In the lower part of this modal window you will see a list of your Organization's teammates. With the control in the right you can give read access to this table (the table will appear in those person's dashboards and they will be able to open it and create visualizations with it, but only in read mode; that is, they won't be able to modify the content of this table). If you also want to give write access, you can select the corresponding checkbox. Grant write and/or read access to all members of your Organization with the top controls.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_5.png" alt="Using sync tables" /></p>

#### Visualizations: General and Team privacy settings

As well as with tables, the interface for creating visualizations is the same as in the standalone CartoDB Editor, with some extra options to manage how you collaborate with your teammates. 

Once you are editing a visualization, you can also use the lock in the upper left corner to view the privacy settings.  

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_6.png" alt="Using sync tables" /></p>

You have two sections in this window: 

1. **General privacy**: As well as in the standalone CartoDB Editor, by default, a visualization will be accessible to **people with the link**. You can select it to be **Private** (only accessible to you), **Password protected** (you'll be able to set a password), or **Public** (it will be listed on your Public Page)**.**

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_7.png" alt="Using sync tables" /></p>

2. **Team privacy**: In the lower part of this modal window, you will see a list of your Organization's teammates. You can give read access to this visualization so it appears in their dashboard. If the general privacy of the visualization is set to Public, then they will be able to access it from the Public Page (the same as any other user).

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_8.png" alt="Using sync tables" /></p>

### **Owners**

As the Owner of an Organization, you will be able to perform all admin-related tasks of a team account: manage users, assign quotas, customize the Organization's Public Page, update account details, etc. When you login, you will see a normal CartoDB dashboard with a list of tables. You can access the admin area by clicking on the drop-down menu located in the upper-right corner, and selecting "Organization".

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_9.png" alt="Using sync tables" /></p>

#### Organization admin area

Once in the Organization admin area you'll be able to **Manage your seats**, the **Public Dashboard**, and **Account Details.**

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_10.png" alt="Using sync tables" /></p>

#### Manage your seats

A seat is an available slot for a user. You'll be able to give access to as many users and seats that you have in your contract. You may expand the number of seats at any time by contacting our Customer Support. 

#### Adding a user

Once your organization’s MU account has been created, you have the option to add new team members. From your Organization admin page, you can click in the **Create new user** button. From here, fill in the user’s information, which includes a name for log-in, an email address to associate with the account, and a password. You can also assign and update a user’s data quota here and select whether to allow geo-referencing capability.

At any time, you may change the storage availability for your team members by upgrading your plan. The activity of your team members is accessible via clicking on their respective profile pages.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_11.png" alt="Using sync tables" /></p>

#### Public dashboard

In this section, you can customize how your Public Dashboard will look by choosing your website URL, a company logo, a description, and your Twitter username.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_12.png" alt="Using sync tables" /></p>

#### Account settings

On the Account Settings page, you can update settings regarding your administrative user (the owner of the account).

## **Official Twitter Datasource**

#### About the Twitter Datasource

CartoDB has access to the complete Twitter firehose providing it with official Twitter data. For our users, it is really easy to obtain the data and map it. Once the user clicks on +new table, the menu, which you can also see in this screenshot, will open. 

<p class="wrap-border"><img src="/img/layout/cartodb-editor/twitter_0.png" alt="New import dialog" /></p>

After you click on the Twitter icon, you will be able to see the following window:

<p class="wrap-border"><img src="/img/layout/cartodb-editor/twitter_1.png" alt="Twitter feature" /></p>

You can begin your search by jotting down different hashtags or keywords separated by a comma under each category (they will work as an OR, e.g. “santa,xmas” would work like “santa OR xmas”). You can use the valid character #should you choose to for hashtags. Spaces before and after commas are removed, but if you put a multi-sentence word it will perform a  search (e.g. “cars, bikes motorbikes, planes” is a 3 term search, do not mistake with “cars, bikes, motorbikes, planes”). You will be able to see how many Twitter credits you have remaining.

The total number of search terms you can have is 29 per category. The maximum number of categories is 4 per search request. You can also select the time frame you want your request to cover under the category column. By default it will search the last 30 days.

The search results will only contain tweets where the location was either explicitly turned on by the user, or the user has filled his/her Twitter profile Location field. Otherwise, the tweets cannot be plotted on a map as there is no location element in them. Approximately 5% of the tweets are geolocated. However, we have introduced geo-enrichment capabilities bringing the sample up to 15% to 20% making the results much more richer.

### Three Official Twitter API's:

* **Search API**: The search API is the one the user has direct access to as shown above.This API allows the user to pull geolocated Twitter data from the past 30 days. Once you do the search, the tweets will be imported straight to your CartoDB account. You can then go directly to map view and work on customising your map.

* **Streaming**: CartoDB has access to Twitter’s streaming API  allowing you to retrieve data up to the last minute in which you performed your search. This at the moment is only available on request. Contact sales@cartodb.com to get more info.

* **Historical API**: This API gives access to tweets beyond 30 days going all the way back to 2006. Contact sales@cartodb.com for further details. 

The real time tweets feature is coming soon and will be added to CartoDB for the user’s to access it. It will allow for the map to be updated automatically with live tweets as they are posted.

### Knowing your data

Which information does a tweet include? The most important data retrieved from Twitter is listed as follows:

* `id`: Tweet id.
* `verb`: Lets you know if a tweet has been directly posted or if it’s a retweet.
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

Besides the previous parameters, you’ll also obtain: `objecttype`, `twitter_filter_level`, `actor_objecttype`, `actor_id`, `actor_postedtime`, `actor_links`, `actor_location`, `actor_utcoffset`, `actor_preferredusername`, `actor_twittertimezone`, `actor_friendscount`, `actor_followerscount`, `actor_listedcount`, `actor_statusescount`, `generator_link`, `provider_objecttype`, `provider_displayname`, `provider_link`, `inreplyto_link`, `twitter_entities`, `object_objecttype`, `object_id`, `object_summary`, `object_postedtime`, `object_link`, `location_objecttype`, `location_displayname`, `location_link`, `location_geo`, `location_streetaddress` and `location_name`.

### Analyzing and querying your data

Your tweets table has been finally created. Let’s take a look at some tricks that will allow you to get the insights you are looking for.

You can use the CartoDB Editor filter tool in order to get easy queries, for example: 

To solve the question “Which tweets have been written by a famous (verified) person?” you just need to apply a filter to the `actor_verified` column. This process will be similar to generating the following query:

{% highlight sql %}
SELECT * FROM table_twitter WHERE actor_verified is true
{% endhighlight %}

Another one: “Which tweets have got the largest number of retweets?”

{% highlight sql %}
SELECT * FROM table_twitter ORDER BY retweetcount DESC
{% endhighlight %}

Creating a simple category map will give you a better idea about your data. For example, you can use the column `twitter_lang` to compare tweet languages with their locations, or you can use the `postedtime` column to perform a dynamic Torque map.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/twitter_2.png" alt="Retweets map" /></p>

Let’s write some slightly advanced queries now:

Imagine you have 2 categories, one is “Vector”, the second is “Raster”. What if you want to know which tweets are saying “Vector yes”, or “Vector no”? This is easy:

{% highlight sql %}
SELECT * FROM table_twitter WHERE body ilike ‘%yes%’ AND category_name = 1
{% endhighlight %}

Or, correspondingly, for “Vector no”:

{% highlight sql %}
SELECT * FROM table_twitter WHERE body ilike ‘%no%’ AND category_name = 1
{% endhighlight %}

Let’s go further: imagine that now you want to create two new categories in your table based on the obtained results. One will be for those results that say “Vector yes”, the other one will be for “Vector no”. You just need to apply the previous queries, but this time you’ll include some updates in the table.

The following query will search all the tweets which include “Vector yes” and will update the category to be ‘3’.

{% highlight sql %}
UPDATE table_twitter SET category_name = 3 where body ilike ‘%yes%’ AND category_name = 1
{% endhighlight %}

In the same way, we could build category number 4 to “Vector no”:

{% highlight sql %}
UPDATE table_twitter SET category_name = 4 where body ilike ‘%no%’ AND category_name = 1
{% endhighlight %}

But… what if the results are not so straightforward? You can add a new constraint and create a new category by this query which searches “yes” and “no” in the same tweet.

{% highlight sql %}
UPDATE table_twitter SET category_name = 5 where body ilike ‘%no%’ AND body ilike ‘%yes%’ AND category_name = 1
{% endhighlight %}

If we follow this approach with the “Raster” option, we’ll have several categories that will allow us to conclude if a tweet was supporting a topic or not. This is a very simple example, but remember that CartoDB runs over the power of PostgreSQL, in which you can insert more advanced queries on the text of the tweets to better understand the data and gain insights.

_Remember: perform a duplicate of the table prior to modifying it with statements like UPDATE, INSERT or DELETE. This way your original data will always be safe._

### Tips and tricks

* Ensure that you select the right time frame which suits your needs. You can save on Twitter credits by not importing extra data.
* Search terms are treated like full words: “car” won’t match tweets with “cars”, you should add both terms if you want both cases.
* Search terms are not case-sensitive. e.g. “Cars” equals “cars” and “CARS”
* You can search by hashtags or account names. e.g. “gis, @cartodb, #mapping”.
* Once the search starts you cannot stop the import. Be careful to not search for really broad terms (e.g. “love”) as hundreds of thousands or even millions of geolocalized tweets might end up being retrieved.
* For security, the search will stop if you run out of credits, returning you all the tweets that the system was able to retrieve before the credits finished.
* Enterprise multi-accounts share the same organization-wide pool of Twitter credits.
