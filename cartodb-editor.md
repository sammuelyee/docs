---
layout: platform_item
title: CartoDB Editor
slug: cartodb-editor
js_assets:
  - "editor"
---

## One-minute introduction

Your dashboard has two main sections: **tables** and **visualizations**. The steps to create a visualization of your data are simple:

1. Create a new **table** by importing data
2. Create a new **visualization** from your table
3. Share it (public or privately)

_You may stop at step two if you don't need to share your visualization. Keeping visualizations private can be useful for internal data analysis and gaining data insights._

CartoDB lets you easily import your data in many different formats (Excel, CSV, XML, SHP, GeoJSON, [see all](#supported-data-formats)) and from different sources (see all possibilities in [Importing data](#importing-data)). CartoDB includes interactive wizards that make it easy to show your data on a map. Our wizards enable you to select what type of visualization you want to create, define legends and infowindows ([What is an infowindow?](#infowindows)) and select which information from your database you want to show.

After you have created your visualization with our web interface, you may keep it private, share it with your colleagues, or publish it to the web either by sharing its URL or embedding it in your blog or CMS.

In this guide we'll walk through many of the features available in the CartoDB web interface. If you are ready to experiment with our powerful APIs then go to [CartoDB.js]({{ '/cartodb-platform/cartodb-js.html' | prepend: site.baseurl }}) and [SQL API]({{ '/cartodb-platform/sql-api.html' | prepend: site.baseurl }}).

## Tables

CartoDB features a geospatial database which is a database capable of storing geospatial information such as geometry. When you import data into CartoDB, you are importing data into a standard database. Under the hood PostgreSQL is running with the geospatial extension PostGIS. If you've never heard of these open-source tools don't worry. Just remember (or tell your technical people) that CartoDB is fully compatible with these technologies.

### Importing data

![Adding a new table]({{ '/img/layout/cartodb-editor/addtable.png' | prepend: site.baseurl }})

Importing your data is easy, and you have several ways of doing it. Pick your favorite!

1. **Create an empty table**
2. **Upload a local file**
3. **Import directly from a public URL**
4. **Sync using Google Drive**
5. **Sync using Dropbox**

If you plan to insert data by hand or programmatically you can create a new blank table with the default CartoDB columns and indexes in place.

However, the most common method is to upload a local file or to pull data from a public URL. To upload a file, navigate to your Dashboard and click **New Table**. In the window that pops up, click on **Select a File** and navigate to the data you want to upload. You may paste a URL in this field, and CartoDB will upload that data. With larger paid accounts the interface will give you an option to Sync your data here. You may also import data from Dropbox or Google Drive.

### Syncing tables

![Using sync tables]({{ '/img/layout/cartodb-editor/synctable.png' | prepend: site.baseurl }})

Users subscribed to the John Snow or bigger paid plans can benefit from the Sync tables feature. In order to sync your tables via Google Drive or Dropbox click "New Table" from your Dashboard, and then click on the tab for Google Drive data or Dropbox, depending on which one you want to use.

Next you will need to allow CartoDB to access your data so that we can display it for you. Once you select the file that you want to work with, you may choose how often CartoDB should sync the table. For example you may tell CartoDB to sync it every hour, day, week or month. If you would rather never sync your data you may also select that option.

Once you've selected data and sync option click "Create Table" and our importer will start building your CartoDB table. Typically this should be a speedy import, but if your data is a large file size give it a few minutes to load.

### Supported data formats

CartoDB supports a growing number of data-types and file formats.

We encourage you to compress all your files before importing them. Supported compression and archiving formats are currently .ZIP and .GZ (also .TAR.GZ and .TGZ). Files will be decompressed and then imported based on the following table of supported file types. If the file you are importing does not match one of these types the import will fail.

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
    <tr>
      <td>.SQL</td>
      <td>Experimental SQL format dumped from CartoDB</td>
    </tr>
  </tbody>
</table>

_For tables, our preferred format is using a comma as separator and including column headers. We will only import first Sheet and the structure must be tabular, with first row being the column headers._

*For Shapefiles, we require that the whole .zip file contains the .SHP, .DBF, .SHX and .PRJ files, all prefixed with same name. (For example a `ne_10m_populated_places.zip` file would contain `ne_10m_populated_places.shp`, `ne_10m_populated_places.dbf`, `ne_10m_populated_places.shx` and `ne_10m_populated_places.prj`).*

_XLS and XSLX may take longer than .csv files. We highly recommend that you export Excel files to .csv before importing in CartoDB._

### Manage your tables

You view the list of tables you have uploaded to your CartoDB account on the dashboard's landing page. You may then search, order by the date modified or created, or tag them to organize them in a way that suits you. Each table has its own privacy settings, which you may change individually.

#### Tables privacy settings

![Tables privacy]({{ '/img/layout/cartodb-editor/privacy-dialog.png' | prepend: site.baseurl }})

To change the privacy setting of a table click the colored label right next to the table's name. You may then choose "Private," "Anyone with a link," or "Public on the web". If a table is set to Private, no one but you will be able to see the table. If it requires a link, only those who have the link will be able to find it. If it's public on the web, anyone may find it on your Public Page or roaming around the internet!

You can also change the privacy setting of a table inside the table view, by using on the 'Options' menu and selecting 'Change privacy', or by clicking on the colored lock button that appears on the top right section of the page.

Take into account that different privacy options will appear depending on the current plan you have.

### Viewing tables

Once you've clicked on a table, there are two ways for you two view your table's data: Table and Map View. You may toggle between the two views on the top left under the table name.

![Viewing tables]({{ '/img/layout/cartodb-editor/switch.png' | prepend: site.baseurl }})

#### Table

Table view allows you to inspect, filter, and query your data and see the results in a spread sheet format. The pull out pane on the right of the screen allows you to write SQL queries, apply basic filters, merge two uploaded tables, and add rows and columns.

#### Map view

The map view allows you to inspect your data as a layer over a base map. You may apply SQL queries or filters on the view, style the data's symbology using our wizards or by writing your own CartoCSS, and create infowindows.

Even though in the Map View you may style and filter your data **but** the Map View is not the same as a shareable visualization. In order to create a visualization, click "Visualize" in the top right corner. Keep on reading to learn what you may do from there!

## Visualizations

### What is a visualization?

![Visualizations]({{ '/img/layout/cartodb-editor/visualizations.png' | prepend: site.baseurl }})

Vizualizations are the method CartoDB uses for publishing maps to the web. They are the combination of one or more tables as layers in a single map. Visualizations may be created after you have imported at least one table to your CartoDB account. You may create a new visualization by one of two ways: either navigate to the "Visualizations" section of your CartoDB dashboard, click "Create new visualization" and then select one or more tables to add to the visualization as layers. The other method to create a visualization is to do the following: from within the tables page in the dashboard, click on a table and then click on the "Visualize" button in the upper right corner.

From this point you may start customizing how your visualization will look: changing the type of basemap, layer colors, creating infowindows, or animating your data over a timeline with Torque. All stylistic customizations made to a visualization are automatically saved (hey, we are on the cloud!), so you don't have to worry about losing your work. If you ever want to save a visualization in one state and keep working on a new version, you may duplicate it. Note that stylistic changes made in one view will not but reflected in the other (_i.e._ changing styles in table view will not change the styles in a visualization and vice versa).

### What are private maps?

We've decoupled table privacy from visualization privacy.

This way, you can create visualizations from private tables and make them public, so the map (and any information selected on the infowindows) can be shared without anyone being able to download the whole data from your table.

### Visualization metadata

![Visualization editor header]({{ '/img/layout/cartodb-editor/vizheader.png' | prepend: site.baseurl }})

For each visualization you may edit the name, add a description, and add tags to keep them organized and discoverable. You may use the description section to talk about your data sources, or to clarify the content and purpose of your map. Use tags to unite projects or themes.

### Visualization privacy options

![Privacy settings in your visualization]({{ '/img/layout/cartodb-editor/privacyoptions.png' | prepend: site.baseurl }})

When you are sharing your CartoDB visualization, you may also edit who is able to access the visualization. In order to edit these settings, click on "Share" from the Visualization Editor. In the window that appears, you will see four options for your privacy settings:

- **Public on the web**  
  When selected, this setting means that your map will be publically available, and will be displayed in your [CartoDB Public Profile](http://blog.cartodb.com/post/82193209466/interesting-cartodb-profiles).

- **Anyone with a link**  
  With this setting, only users who have the visualization URL will be able to find your map visualization. These visualizations will not appear in your CartoDB Public Profile.

- **Anyone with a password**  
  These visualizations will require a password entry from anyone visiting the visualization URL before they are able to view the visualization. These visualizations will not appear in your CartoDB Public Profile.

- **Private**  
  When this setting is selected, only you are able to view your visualization. It will not appear in your Public Profile.

### Basemaps

#### What is a basemap?

A basemap is a graphical representation of the world showing natural and cultural features such as water bodies, topography, park areas, points of interest, geopolitical borders, roads, streets and sometimes buildings. CartoDB provides you with a selection of basemap options and providers (such as Google and Nokia). You may import your own custom basemap (from MapBox, an XYZ tileset (e.g. Stamen maps), or WMS.)  or use a solid background color, repeating image or pattern. With the easy-to-use basemap selector, you can focus on the an aesthetically pleasing way of visualizing your data. 

#### Selecting your basemap

![Select a basemap]({{ '/img/layout/cartodb-editor/basemapselect.png' | prepend: site.baseurl }})

When you first create a visualization, it will be given a default "Nokia Day" basemap. To change your basemap simply click on "Basemap" in the upper left of the Map View and select an available style from the dropdown. You may add your own custom basemap in the "Add yours" option and then by linking to the URL for that basemap from MapBox, XYZ, or WMS. Finally, there are options for adding a solid color or a repeating image pattern instead of a basemap. All of these features give you a high level of customization when creating a map visualization.

CartoDB offers you a variety of basemaps you may use in your visualization. You may select any one of them, and the change will be applied immediately. You may change your basemap anytime and the rest of your layers will remain unchanged. Take some time to explore our different available basemaps. You'll be able to see that some of them have more detail (such as depicting borders, roads, mountains) while others are more minimalistic. Thus you may choose one that's best suited for the purpose of your visualization.

#### Including an external basemap

![Add your own NASA basemap]({{ '/img/layout/cartodb-editor/addbasemap.png' | prepend: site.baseurl }})

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

![Add your own NASA basemap]({{ '/img/layout/cartodb-editor/nasabase.png' | prepend: site.baseurl }})

#### About map projections

The earth has a three-dimensional ellipsoid like shape, but maps are two-dimensional representations of the earth. This means that some distortion must be applied in order to visualize the earth on a two-dimensional plane. During this process several types of distortions may occur which impacts how map features are represented. The methods used to distort the three-dimensional form of the earth into a two-dimensional representation is referred to as [map projections](http://en.wikipedia.org/wiki/Map_projection). There are many types of projections used to represent the earth at various scales. Some depict the whole world, others a continent or country, and still others a region or state / province. Each type of projection attempts to preserve certain properties at the expense of others such as area, direction, shape and distance.

The majority of maps used in the web are using a variant of the [Mercator Projection](https://en.wikipedia.org/wiki/Mercator_projection) that is commonly referred to as the Web-Mercator. That is the projection you will be using when you create your visualizations in CartoDB. Changing the map projection is currently not feasible, as it would imply changing all the basemaps and all the information of how your data is stored in CartoDB.

You can learn more about map projections in Wikipedia, and read up on all the details about how CartoDB handles [projections internally]({{ '/tutorials/projections.html' | prepend: site.baseurl }}).

### CartoDB Sidebar

![CartoDB Sidebar]({{ '/img/layout/cartodb-editor/sidebar.png' | prepend: site.baseurl }})

The CartoDB sidebar is where are all the action is. From here you may access all the tools that enable you to customize how the data is displayed on your maps. The CartoDB sidebar minimizes to the right, so you have the maximum space to view your map and data. If you want to use any tool in the sidebar simply click on the sidebar to expand it.

In the sidebar you will see all the layers that you have created for a visualization. By default you will have one layer and you may add layers to accomodate more data as necessary. For each layer, you will have the same tools to customize how your data will be displayed.

Next each feature in the sidebar will be explained:

#### Custom SQL

[SQL](https://en.wikipedia.org/wiki/SQL) (Structured Query Language) is the way that many applications ask for data from a database. They can ask simple queries (*i.e.* "give me all records from this table"), queries that match certain conditions (*i.e.*  "give me all records in which this field equals a certain value"), or more complex queries that combine data from two or more tables. As mentioned earlier, when you create a visualization and link a table to it by default all data in that table will be displayed. You may then write a custom SQL query or use our filters to only show certain parts of the data.

In the SQL window you will be shown which query is currently being applied to your data and you have the ability to modify it. When using our filters you will be able to see the query that has been produced from the applied filter (also a fun way to learn SQL!).

#### Wizards

![Wizards]({{ '/img/layout/cartodb-editor/wizards.png' | prepend: site.baseurl }})

CartoDB gives you full control over the style and presentation of your data. Some of the basic controls include coloring and line-width controls. You may access these by clicking on the "Wizards" section of the CartoDB sidebar.

The wizards window lets you choose how your data is styled. Before we go further, we'd like to give a little introduction to each type of visualization.

- **Simple**  
  The Simple visualization is exaclty what it sounds like, a basic display of your data. You may add lables, adjust the size and color of your points, and change the color and outline of your polygons, but there will be no conditional formatting. This is good for displaying basic data or for exploring your data.

- **Cluster**  
  The Cluster visualization works with point files to display "clusters" of points that are close in proximity. This is useful if you have a lot of points that are close to each other, and you want to simplify the way they display on a map. When you use this visualization, a circle will be drawn containing a number that represents how many points are in that general area.

- **Choropleth**  
  This changes the color of each feature based on a secondary numeric value from a column in your table that you choose. This is often most useful with polygon data, and you can use it to compare characteristics of regions, and areas. For example, choropleth mapping is often used to display variables such as income level by neighborhood or other geographic area within a city.

- **Category**  
  Category visualizations display your data points and polygons in different colors based on a qualitative characteristic (not numeric value) in your table. For example, if your data is showing multiple kinds of a certain characteristic (*i.e.* landuse zoning such as residential, commercial or manufacturing), you would use the category wizard to change the color or style of each category you're interested in showing. 
  
- **Bubble**  
  The Bubble visualization scales the radius of points in your data based on a numeric value from a column in your table that you choose. This is good if you want to compare numerical values associated with a certain point, like population size of cities. Remember that it is not a useful visualization type if your data is in polygon form.

- **Intensity**  
  The Intensity visualization approximates the density of your points by making areas where there are many points, or points overlap darker in color than areas with fewer points. This is useful when you have a point dataset with a large number of points, and when you want to show areas of higher "intensity" as opposed to those with lower intensity. One of the main advantages of this versus a heatmap is that if you start zooming, you can click on your points and get details in your infowindows.

- **Density**  
  The Density visualization aggregates your data in hexagons and colors them based on the amount of data you have within each unit. Areas with more data points will be darker than those with fewer points. Note that when using a Density map, your infowindows will be disabled. If you want to show an approximation of density, but maintain infowindows, check out the Intensity visualization above.

- **Torque**  
  Torque displays data with a temporal characteristic associated with it. Torque will take your points, and visualize them through time based on a column containing the time stamp. The full standard format of the date column is `YYYY-DD-MMThh:mm:ss`, but you can still visualize data that has just year, year/month, or year/month/day characteristics using Torque.

When using the UI beware that different types of data enables or disables certain wizards. Play around a little bit and check how your data displays for each type of visualization, and how the tools to customize each visualization change.

Let's dig a little deeper in each of the available visualization wizards:

#### Simple

![Simple Wizard]({{ '/img/layout/cartodb-editor/simple.png' | prepend: site.baseurl }})

- **Marker fill**  
  Here you may adjust three properties: the size of the marker (a numberical value between 0-40), the color of the marker (using Hex codes or by selecting from the color palette), and the opacity of your point (a value between 0-1).

- **Marker stroke**  
  The marker stroke allows you to edit the width of your marker stroke, a.k.a. border or outline (a value between 0-40), the color of your marker stroke (using Hex codes or by selecting from the color palettex), and the opacity of your point (a value between 0-1).

- **Composite operation**  
  Change how the colors of overlapping geometries will interact with one another. You can select from: multiply, screen, overlay, darken, and lighten. Each of these operations has a different effect on how the overlapping sections of markers are diplayed. You can explore some them [here](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

- **Label text**  
  Select the field which you would like to act as a label (if any).

- **Label font**  
  Once you select a field to use as a label, here you can change its font.

- **Label halo**  
  Change the color and width of the outline around your text. This can be helpful in increasing readability.

- **Label offset**  
  Change how far from the marker you wish to have the label. If set to "0," markers will appear directly under their corresponding label. A negative value will bring the label above the marker, and a positive value will bring it below.

- **Label overlap**  
  When set to true, this allows labels to overlap one another. When set to false, not all labels will show in order to make sure that there are no overlaps.

- **Label placement**  
  - _Point_ The label aligns to the center of the feature.  
  - _Interior_ Like Point, aligns to center of the feature but will also ensure that if the center of feature is not inside the geometry, the label is still shifted to stay inside.  
  - _Vertex_ Will label the vertex along a line or polygon; this will repeat the label.  
  - _Line_ Will align the label to a line or to the border of a polygon; this will repeat the label.

#### Cluster

![Cluster Wizard]({{ '/img/layout/cartodb-editor/cluster.png' | prepend: site.baseurl }})

- **Buckets**  
  Define how many groupings you wish to have your data split into. Fewer buckets means that the data will be displayed at less granular level.

- **Described in earlier section**  
  - Marker fill
  - Marker stroke
  - Marker size
  - Label font
  - Label halo

#### Choropleth

![Choropleth Wizard]({{ '/img/layout/cartodb-editor/choro.png' | prepend: site.baseurl }})

- **Column**  
  Select the column which you would like to display. It must be a number type in order to use the Choropleth visualization.
 
- **Quantification**   
  Choose the way that data is broken up in to buckets. Each one of the choices will change how your data is visualized and grouped. You can select from: Jenks, Equal Interval, Heads/Tails, and Quantile. You can read more [here](http://blog.cartographica.com/blog/2010/8/16/gis-data-classifications-in-cartographica.html), or take a look at the descriptions below.

  - The **Jenks** method aims to increase the standard deviation between each group of data, while decreasing the standard deviation within each group. In other words, it tries to make each group more similar to itself and very different from each of the others. The Jenks method does this by shuffling data across each group until it detects an optimization.
  - **Equal interval** is probably the easiest to conceptualize, it simply takes the range of your data and divides the total range into equally sized subranges for your desired number of groups.  
  - The **Quantile** method creates groups with an equal number of discrete units for each group. The discrete units are gathered from the distinct possible values from your data.
  - **Heads/Tails** breaks can be very powerful for data with a long-tail distribution. The Heads/Tails method will create a break-point at the mean of your data, remove all data below the break-point and create the next break-point from the data above the first break-point. It will repeat the process until either only a single value is left above the break-point or if it reaches the desired number of breaks.

- **Color Ramp**  
  Select the colors you would like to display your data. You can customize these using CartoCSS, which we cover more in depth later, but you can take a quick look [here](https://www.mapbox.com/tilemill/docs/manual/carto/).

- **Described in earlier section**  
  - Buckets
  - Marker width
  - Marker stroke
  - Composite operation
  - Label text

#### Category

![Category Wizard]({{ '/img/layout/cartodb-editor/category.png' | prepend: site.baseurl }})

- **Map/Legend Items**  
  Under Marker Stroke appears a list of the different categories that will appear on your map and in your legend. Here, you can edit their color or add an image marker instead.
 
- **Described in earlier section**  
  - Column
  - Marker fill
  - Marker stroke
  
#### Bubble

![Bubble Wizard]({{ '/img/layout/cartodb-editor/bubble.png' | prepend: site.baseurl }})
 
- **Radius (min-max)**  
  Set the sizes of the smallest and largest markers (bubbles) on your map.

- **Bubble Fill**  
  Set the color and opacity with which to fill your bubble markers.

- **Bubble stroke**  
  Edits multiple values: the width of your bubble stroke, a.k.a. border or outline (a value between 0-40); the color of your bubble stroke (using Hex codes or by selecting from the color palette), and the opacity of your point (a value between 0-1).

- **Described in earlier section**  
  - Column
  - Quantification
  - Composite Operation

#### Intensity

![Intensity Wizard]({{ '/img/layout/cartodb-editor/intensity.png' | prepend: site.baseurl }})

- **Described in earlier section**  
  - Marker fill
  - Marker stroke

#### Density

![Density Wizard]({{ '/img/layout/cartodb-editor/density.png' | prepend: site.baseurl }})

- **Method**  
  Choose whether density is displayed using hexagonal or rectangular shapes.

- **Polygon Stroke**  
  Edits multiple values: the width of your polygon stroke, a.k.a. border or outline (a value between 0-40); the color of your polygon stroke (using Hex codes or by selecting from the color palette), and the opacity of your polygon (a value between 0-1).

- **Polygon Size**  
  Adjust the size of the polygons on your map.

- **Described in earlier section**  
  - Buckets
  - Color ramp
  - Composite operation
 
#### Torque

![Torque Wizard]({{ '/img/layout/cartodb-editor/torque.png' | prepend: site.baseurl }})

- **Cumulative**  
  Determines whether points stay on the map throughout the visualization or fade away.

- **Column**  
  Select the column which you would like to display. The column must contain either date-type data, or numerical data (as long as the numerical data reflects the passage of time) to be used in the Torque visualization.

- **Marker Type**  
  Select whether you'd like to display the points as rectangles or ellipses.

- **Marker Fill**  
  Here you can adjust three properties: the size of the marker (a numberical value between 0-40), the color of the marker (using Hex codes or by selecting from the color palette), and the opacity of your point (a value between 0-1).

- **Marker Stroke**  
  The marker stroke allows you to edit the width of your marker stroke, a.k.a. border or outline (a value between 0-40), the color of your marker stroke (using Hex codes or by selecting from the color palette), and the opacity of your point (a value between 0-1).

- **Duration**  
  Edit the total length of your visualization.

- **Steps**  
  Edit the number of animation groupings in which your data is displayed. Fewer steps will create a more step-by-step or choppy visualization with more data in each "step." Greater number of steps will look smoother. This can relate to whether your data is being displayed by day, week, month, etc.

- **Blend Mode**  
  This is related to composite operations (see above descriptions), and affects how layered data is displayed visually.

- **Trails**  
  Select whether data points display a "trail," or faded image, after they disappear from the map. Choose a value between 0 and 5, where 5 will display a longer, more-lasting trail and 0 will not show a trail.

- **Resolution**  
  Defines the grid resolution that bins your data. (Behind the scenes, torque visualizations put data in to bins according to screen pixels. So, resolution of 2 would bin your data into 2x2 pixel cells.)

#### Infowindows

![Infowindows]({{ '/img/layout/cartodb-editor/infowindows.png' | prepend: site.baseurl }})

##### On-click infowindows

On-click infowindows will appear when a point or polygon is clicked on. They can display data of your choosing, and you may define many different visual aspects of the window.

From the dropdown, you may select from many pre-set color combination options such as light, dark, header blue, etc. To the right, you have a number selector where you can set the width (in pixels) of the infowindow.

To choose which data columns display in the infowindow, toggle the slider to the right of each column name. Once you toggle it on, you may select whether or not the column title is displayed using the checkbox. You may drag columns above/below one another to adjust the display order. You may also change the display name of each column (or item in your infowindow) by selecting the icon at the top of the list of column names. Finally, you may edit your own Custom HTML by clicking on the "</>" button. See the image below for reference.

![On-click infowindows]({{ '/img/layout/cartodb-editor/infowindow.png' | prepend: site.baseurl }})

##### On-hover infowindows

On-hover infowindows display when a polygon or point is hovered over. They display data of your choosing, and can be edited in the same way as the on-click infowindows above. 

#### CartoCSS

![CartoCSS]({{ '/img/layout/cartodb-editor/cartocss.png' | prepend: site.baseurl }})

CartoCSS is the syntax language that CartoDB uses to allow users greater control over how their data is visualized. When you customize the CartoCSS, you're able to control things like marker size, marker color, line stroke, text display, and much more at a granualar level then when using the Wizards. If you have used Cascading Style Sheets for styling webpages CartoCSS will be quite familiar, but there are some differences to take note of.

CartoDB uses a flavor of CartoCSS developed by [Mapbox](https://www.mapbox.com/). You can check out some of their excellent documentation in the following links:

- [CartoCSS manual](https://www.mapbox.com/tilemill/docs/manual/carto/)
- [CartoCSS API](https://www.mapbox.com/carto/api/2.3.0/)

Learn the basics of CartoCSS and designing data for your maps with our [Introduction to map design]({{ '/courses/02-design-for-beginners.html' | prepend: site.academy-baseurl }}) course.

#### Legends

![Legends]({{ '/img/layout/cartodb-editor/legends.png' | prepend: site.baseurl }})

The Legends section of the editor allows you to add and edit your map legend. Legends are most meaningful for maps that use wizards other than Simple, as they are best used to explain what different data symbology indicates. You can edit the following elements:

- **Template**  
  Select the template you would like to use for the legend. The default legend will be named after the wizard, or you can select custom to create your own using HTML.

- **Title**  
  Set the title of your legend.

- **Left Label**  
  This option appears when using wizards except for Density, Category, and Torque. Use it to set the label on the left of your legend.

- **Right Label**  
  This option appears when using wizards except for Density, Category, and Torque. Use it to set the label on the right of your legend.

- **Colors**  
  Set the colors of the individual items in your legend. You should make sure these align with the colors being displayed by your map markers.

##### Legends HTML styling

If you select to create a custom legend from the "Template" field described above, you can create your own legend from scratch using HTML. Alternatively, you can edit an existing template with HTML. This is helpful if you want even more precise and customizable control over different legend elements.

#### Filters

![Filters]({{ '/img/layout/cartodb-editor/filter.png' | prepend: site.baseurl }})

Use the filters section of the editor to select certain ranges of data to display. When working with numerical data, the Filter options allow you to see the distribution of your data and select a range to include. To get started, you pick the column by which you would like to filter data. If you're working with string (text) data, you can search text to include/exclude. Finally, when you have date data, you can also see a distribution of your data, to get an idea of trends over time and include or exclude certain periods. You can also combine different filters (on the same or on different columns) to include the exact data you would like to include.

In the background for all of these types, CartoDB is using SQL to pull different data sets from your data table. If you click on the SQL section of the editor (near the top of the pull-out tray), you can see exactly what SQL queries were applied. You can also edit and create your own.

For a quick video primer, take a look at our [filter tutorial]({{ '/tutorials/filters.html' | prepend: site.baseurl }}).

### Options

![Options]({{ '/img/layout/cartodb-editor/options.png' | prepend: site.baseurl }})

You can access your map options at the top right of your screen. When you're in the Table view, you have many options:

- **Export**  
  Allows you to export your data as a .csv, .shp, .kml, .svg and .geojson

- **Georeference**  
  Select this to begin georeferencing your data. You may also get an idea of how many of your georeferencing credits you have used.

- **Duplicate Table**  
  Create a new table with the identical information as your current table.

- **Merge Table**  
  Merge your current table with another existing one, using either a column join (joins two tables based off of a shared column) or a spatial join (joins two tables based off of their spatial overlaps). For more info, take a look [here]({{ '/tutorials/merging_data.html' | prepend: site.baseurl }}).

- **Change Privacy**  
  Edit who may view your table of data.

- **Delete this table**  
  Entirely delete your data table. Note that this will also delete any visualizations that rely on the current table!

### Share your visualization

Once you have created a visualization, it's time to share it with the world! Take a look at our [written tutorial]({{ '/tutorials/sharing_maps.html' | prepend: site.baseurl }}) or [video tutorial](http://vimeo.com/80472123) for a guide to publishing and sharing your visualizations. Read on for a description of the CartoDB sharing interface!

#### Title and description

![Title and description]({{ '/img/layout/cartodb-editor/title.png' | prepend: site.baseurl }})

Before you share your visualization, you can edit the title and description of your map in the upper left-hand corner of your visualization editor. Keep the title concise and you can be more descriptive in the subtitle or description of your map.

#### Sharing & privacy options

Once you create a visualization from your table of data, click the Share button at the top right of your screen to pull up your publishing options. Take a look at the image below to get an idea of the parts you can customize.

![Sharing & privacy options]({{ '/img/layout/cartodb-editor/sharesettings.png' | prepend: site.baseurl }})

Each of these options has a simple toggle on/off functionality. If you wish for the feature to be shown, toggle it on so that the blue shows. If you would like it off, toggle it off so it turns grey. You can control the following items:

- **Map title**
  Whether or not the title appears. 
- **Description**
  Whether or not the map description appears.
- **Shareable**
  Whether quick links for sharing appear.
- **Search box**
  Turn the appearance of a search box on/off.
- **Layer selector**
  Allow viewers to toggle different layers on/off.
- **Scroll wheel zoom**
  Enable or disable zoom using a mouse scroll wheel.
- **Legends**
  Turn the appearance of legends on/off.
- **Fullscreen**
  Enable or disable the ability of viewers to enter fullscreen mode.
- **Logo**
  Include or exclude the CartoDB logo on your map. 

From the share window, you can also edit privacy settings, which you can view in the screenshot below.

![privacy settings]({{ '/img/layout/cartodb-editor/privacy.png' | prepend: site.baseurl }})

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

There are many ways to manage and edit your data once you have imported it in to CartoDB. In earlier sections, we discussed using Filters on your data, and Merging tables. Below is a quick intro on just a few more techniques CartDB gives you to manage your data!

### Geocoding data

![Geocoding data]({{ '/img/layout/cartodb-editor/georeference-data.png' | prepend: site.baseurl }})

One crucial step to managing your data is geocoding it. CartoDB gives you three main ways to do this. The first is to import your data with latitude and longitude coordinates already included. If these are in clearly labeled columns, CartoDB will automatically display your markers and polygons in accordance to the coordinates in the table.

Second, you can georeference by administrative regions. To get started, click on "Options" and "Georeference." Select to georeference by administrative regions, and line up the data in your table to the type and location of administrative region you would like to use. CartoDB will automatically load polygons for administrative regions like states, municipalities, and postal codes!

Finally, you can georeference by address. To do this, you will need columns with parts of the address like "address" (which would contain the building number and street name), "city," and "state." Check out our [tutorial on georeferencing addresses]({{ '/tutorials/georeference.html' | prepend: site.baseurl }}) for an in-depth look on how to use this function.

### Running SQL queries

![Running SQL queries]({{ '/img/layout/cartodb-editor/sql-queries.png' | prepend: site.baseurl }})

CartoDB enables you to query your data using the Structured Query Language (SQL), in particularly the PostGIS SQL commands which allow you to filter your data spatially. Some examples of common uses of PostGIS SQL queries would be to answer questions such as "how many points from one dataset are located within a polygon from another dataset?" or "give me all my data within 50 kilometers of a certain latitude longitude coordinate." 

Since CartoDB is built on PostgreSQL you can look at their [documentation](http://www.postgresql.org/docs/9.3/interactive/sql.html) for how to use PostgreSQL flavored SQL as well as the [PostGIS documentation](http://postgis.net/documentation/) for information on writing spatial queries. Additionally CartoDB has some useful tutorials on how to run SQL queries. 

To run an SQL query in the CartoDB dashboard open a table or visualization. In the sidebar to the right click the SQL icon. The sidebar will expand and by default you will see the following query:

~~~sql
SELECT * FROM table_name
~~~

You can modify this query and then hit the "Apply query" button or press `cmd + s` on a Mac OS or `ctrl + s` on a Windows OS. An example of a modified query might look like the following:

~~~sql
SELECT * FROM ne_10m_populated_places_simple WHERE featurecla = 'Admin-0 capital'
~~~

This query will select all rows that have a "featurecla" column value of "Admin-0 capital" from the table "ne_10m_populated_places_simple." Only the rows that match this SQL query will appear in the table and map view for this dataset. Additionally when applying SQL queries to Visualizations, only the queried data will be shown in the Visualization.

### Table from query

If you would like to create a new table from an SQL query you may do so. After applying your modified SQL query click "options" in the upper right corner, then in the drop down menu select "Table from query." You will then be asked to name your new table from the query. After naming the table CartoDB will save and load it for you.

### Merging data

Whether you are using data from public repositories or your own datasets, sometimes it is nice to be able to join two tables together. Of course you can always do it on your own using SQL, but CartoDB makes it very easy to do with the merging tool for tables. The most basic way to join two tables is by a shared unique value, we call this a Regular Join. For example, country ISO codes can often be used to merge, say, the_geom from one table and population count from a second. Regular Joins are also very useful for things like, shared IDs, country names, or dates.

#### Merge by Regular Join

Regular Joins are useful if you have two datasets that share a common value in rows. For example, country level datasets often contain an ISO code for each row. If you have two of these datasets and want to join all or some of their values into a single table, this option is for you. Simply,

1. From the table you have created, click options in the upper right corner.
2. Select Merge tables.
3. Click the radio Regular join.
4. In the left-hand menu is your first table, you can toggle on or off the columns you want to include in the join.
5. The right-hand menu is for loading your second table. Click the drop down menu and select, or begin typing, the name of your second table.
6. In the second table, toggle on or off the columns from the second table you want to join to the first.
7. Use the radio to the left of column names in both the first table and the second. Use the radio to select the column in the first table that corresponds to a value in the second table. Do the same for the correct column name in the second table menu.
8. Finally, hit Next, enter your new table name, and wait for the table to be processed.

#### Merge by Spatial Join

Spatial join calculate the intersecting geospatial records between two tables (ex. points in polygons). You'll need to decide the operation to perform: **COUNT** calculates the number of intersecting records, SUM sums of a column value for all intersecting records, AVG provides the average value of a column for all intersecting records.

### Export data

After you have created, updated, or deleted data from your CartoDB tables, you may want to export them for sharing or use offline. We make that easy for you by providing one-click data export.

1. From any table you have created, click Options in the upper right corner.
2. Select Export.
3. From there, you should see a menu of export formats that CartoDB supports, including Comma separated (CSV), KML, ESRI Shape Files (SHP), and SQL.
4. Click the format you would like to download.

#### Download by URL

There is a pro-tip for accessing downloads directly using your table URL. You can make use of the SQL API to run any query and ask for the results to be retrieved in different formats. For example:
DOWNLOAD BY URL

{% highlight bash %}
http://{USERNAME}.cartodb.com/api/v2/sql?format=csv&q=SELECT+*+FROM+tm_world_borders_sim
{% endhighlight %}

### Creating indexes

For advanced users, you can sometimes squeeze better performance out of your Visualizations and SQL API requests if you add custom indexes on your columns. In general, you should only do this if you: 

1. Are filtering a visualization by values in one or a few columns. 
2. If you are regularly querying up data through the SQL API and filtering by one or a few columns. 
3. If you are creating Torque Visualizations on very large datasets. 

In most cases, a single column index is a safe way to go. For Torque Visualizations, a single column index on the column used to play the data (e.g. the Date or Numeric column) is the best way to go. To create a single column index, use this SQL pattern

{% highlight sql %}
CREATE INDEX idx_{TABLE NAME}_{COLUMN_NAME} ON {TABLE_NAME} ({COLUMN_NAME})
{% endhighlight %}

There are more advanced indexes you can use in CartoDB. Including multi-column indexes. However, they are not a magic wand, so we recommend you read the full documentation on [PostgreSQL Indexes](http://www.postgresql.org/docs/9.1/static/sql-createindex.html) before proceeding. Indexes will take space from your quota. CartoDB adds some of its own indexes, that are not counted against your quota, so there is no need to index the automatically generated columns in CartoDB (e.g. the_geom and cartodb_id).

### Common data

![Common data]({{ '/img/layout/cartodb-editor/commondata.png' | prepend: site.baseurl }})

From your dashboard, you may also access the Common Data page which gives you access to public datasets. Examples of data you may find there includes World Borders, European Countries, Urban Areas, and Populated Places. From the list you may directly add a table to your dashboard and start mapping it! 

## Error codes and solutions

### Importer error codes

We try to predict and provide solutions for as many problems as we can, but that still leaves some cases where your CartoDB import is not going to work. For all these cases, we try to categorize your error and report the full error back to you at time of import. In those cases where you are not able to resolve the issue yourself, please give us the full description on our [support platform]({{ '/docs#support' | prepend: site.cartodb-baseurl }}).

Here we provide a set of errors and some common solutions.

<table>
  <tbody>
    <tr>
      <td>1000</td>
      <td>File I/O error</td>
    </tr>
    <tr>
      <td>1002</td>
      <td>Unsupported file type - Check our list of supported files. see if you can convert your file to one of these file types.</td>
    </tr>
    <tr>
      <td>1003</td>
      <td>Decompression error - Try decompressing and regenerating your compressed file on your own computer. if that fails, find the original file and make a new compressed version of it.</td>
    </tr>
    <tr>
      <td>1004</td>
      <td>File encoding error - Sometimes we have difficulty with non UTF-8 files, try converting your file to UTF-8. You can do this in Excel by exporting your data as Unicode Text.</td>
    </tr>
    <tr>
      <td>2000</td>
      <td>File conversion errors.</td>
    </tr>
    <tr>
      <td>2001</td>
      <td>Unable to parse data - Please contact support and we will help you to sanitize it.</td>
    </tr>
    <tr>
      <td>3000</td>
      <td>Geometry error.</td>
    </tr>
    <tr>
      <td>3004</td>
      <td>Unable to read SHP file - Try opening your SHP file in a local program such as QGIS. Does it open and display correctly? If so, try exporting it as a new SHP file and uploading to CartoDB.</td>
    </tr>
    <tr>
      <td>3005</td>
      <td>SHP to PGSQL error.</td>
    </tr>
    <tr>
      <td>3100</td>
      <td>Projection error - CartoDB supports many projection, but sometimes your file will have one we don't recognize. In these cases, please try reprojecting your file in QGIS or ArcGIS first. Or if you want to use this projection many times, submit a query to the support pages about getting it supported.</td>
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
      <td>Geometry Collection not supported - Geometry Collections are not supported in CartoDB. In most cases we can deal with these during import, except with KML and GeoJSON import. In those cases, an intermediate step during import will fail if given geometry collections. To avoid this, try to export your data from the source in another format.</td>
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
      <td>Empty table - If you upload a file that results in an empty table, we assume there was an error. If this in fact was not an error, please just use the user interface or send an SQL command to create a table. If it was in fact an error, check that your file is formatted correctly and that it contains data.</td>
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
      <td>Over account storage limit - please upgrade, The file you tried to upload is putting you over your storage quota. You can upgrade your account easily using your account settings page to make your file work.</td>
    </tr>
    <tr>
      <td>8002</td>
      <td>Over account table limit - please upgrade, The file you tried to upload is putting you over your table quota. You can upgrade your account easily using your account settings page to make your file work. Alternatively, you may be able to delete some unused tables to make room.</td>
    </tr>
    <tr>
      <td>9999</td>
      <td>Unknown, Please report your error to <a href="{{ '/docs#support' | prepend: site.cartodb-baseurl }}">support</a> so we can figure it out!</td>
    </tr>
  </tbody>
</table>

### SQL errors

When executing SQL either in the user interface or through the SQL API, you may encounter errors. We report back to you the full error provided by PostgreSQL. One of the easiest ways to figure out what is going on is to search for your error on Google to find out what it means.

### CartoCSS errors

CartoCSS styling is generally very simple, but still it can be easy to include typos or forget quotations. In cases when you are editing CartoCSS through the user interface, errors are reported back the the CartoCSS input window. From there, it is typically not too difficult to figure out what is going on. More often than not, make sure you have ended your lines with semi-colons, use quotes when needed, and closed all your brackets and braces.

## Your account

###API Key

The API key offers the simplest way to access private data or perform writes and updates to your public data. Remember that your API key protects access to your data, so keep it confidential and only share it if you want others to have this access. If necessary, you can reset your API key in your admin dashboard.

Find your API key:

Go to your dashboard.
Click on your username in the top right corner, and select “Your API keys.”
Here, you can copy your API key, see use examples, and reset your API key.

### Quotas and billing

We offer a wide range of plans to fit every user's needs. Each plan comes with different features and storage quotas. Take a look at our [pricing plans]({{ '/pricing' | prepend: site.cartodb-baseurl }}) to pick the best plan for you.

Once you upgrade from a free plan to a paid plan, a monthly billing period will be set for your account. Each month, you will receive the corresponding invoice via email with the description of all services that will be charged for that billing period.

If you upgrade from one paid plan to another, your new billing period will start the same day of the month that your old plan started. This means that your first invoice will be prorated and you will be only charged for the days remaining in your billing period. 

You may experience extra charges besides the monthly cost of your plan if you exceed the free quota for geocodings or mapviews, as defined in our Terms of Service. 

### Free trial and upgrading

All of our plans have a fourteen-day free trial, during which time you may try out one of our plans to see if it fits your needs. Once you create an account, you may choose to change your plan from the "Account Settings," accessed from your dashboard.

In the Account Settings screen, you may view your current plan, and may easily click "Change your current plan" to choose a new plan. Note that the charges will be pro-rated, so you may change your account type whenever you like. No need to wait for the beginning of a month.

### Deleting your account

If you need to delete your account, you may do so from Account Settings. Just navigate there and scroll to the bottom of the page where you will see a link to "Delete my account." If you have any questions or concerns that you would like to address, feel free to contact our support team at <support@cartodb.com> before deleting your account.
