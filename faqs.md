---
layout: platform_item
title: FAQs
slug: faqs
js_assets:
  - "editor"
---

## CartoDB technical questions

### How to add my own images to infowindows?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/image-infowindow.png' | prepend: site.baseurl }}" alt="How to add my own images to infowindows" /></p>

In order to use your own images for customizing your infowindows at CartoDB, go to the infowindow preferences menu and select "image header" in the Design option. Now you have to be sure you have a column in your dataset of type 'string' whose content must be the URL of the image you want to show in the header. Then, you have to place this column at first place in the infowindow preferences and, of course, you should also activate the specific column of the URL to be shown.

### How to customize infowindows?

The HMTL code of the infowindows can be edited directly in the "Custom HTML" option.  This let you tweak content layout, write static content, and embed external resources. 

You can check our blogpost about this topic here: http://blog.cartodb.com/post/61664564416/full-editing-of-infowindow-html

### How to print maps in CartoDB?

There is no direct way to get printed maps from CartoDB besides just grabbing a screenshot. You can do that pretty easily on a Mac or PC with a keyboard shortcut (cmd shift 3 in mac). Or, if you are looking at a public map you can just it 'print' in your browser and should be able to get it in a PDF.

### How can I delete legends or combine them?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/delete-legends.png' | prepend: site.baseurl }}" alt="How can I delete legends" /></p>

You can just disable a legend from a layer by applying to it the "none" template. If you want to merge the legends, you will have to perform a "Custom legend". This option is available in the Template selector of the legends wizard.

### I have a column with the coordinates but my data is not georeferenced

​This is happening because you have both coordinates in the same column, and as you see in the wizard for georeferencing, it asks about two columns, one with longitude and another with the latitude.
​
​If you split this unique coordinates column in two, and apply again the georeferencing process by taking into account the both columns, your data will be georeferenced.

### How can I export my data from CartoDB?

After you have created, updated, or deleted data from your CartoDB tables, you may want to export them for sharing or use offline. We make that easy for you by providing one-click data export.

<p class="wrap-border"><img src="{{ '/img/layout/faqs/export-data.png' | prepend: site.baseurl }}" alt="How can I export my data from CartoDB" /></p>

1. From any table you have created, click **Options** in the upper right corner.
2. Select **Export**  
  From there, you should see a menu of export formats that CartoDB supports, including Comma separated (CSV), KML, ESRI Shape Files (SHP), and SQL.

3. Click the format you would like to download.

There is a pro-tip for accessing downloads directly using your table URL. You can make use of the SQL API to run any query and ask for the results to be retrieved in different formats. For example:

<div class="code-title notitle code-request"></div>
{% highlight bash %}
http://{USERNAME}.cartodb.com/api/v2/sql?format=csv&q=SELECT+*+FROM+tm_world_borders_sim
{% endhighlight %}

### What does the table quota mean for the different plans?

Several tiers of usage are available for CartoDB, ranging from a free account to a fully dedicated instance. The difference between these accounts is in their physical storage size, memory size, and several CartoDB features. You can find full details on these differences over on the [pricing](http://cartodb.com/pricing) page.

### How can I change the privacy of my tables without using the UI?

In order to change the privacy of an existing visualization to "With Link"/"Private"/"Public", you need to use our internal REST API, which is undocumented, but for now the only way to do programmatically this feature.

This is an example CURL call to do it (for setting "With link" privacy, see constants below for the case of Public or Private):

<div class="code-title notitle code-request"></div>
{% highlight bash %}
curl -H 'Content-Type: application/json' -H 'Accept: application/json' -X PUT -d '{"privacy":"LINK"}' "http://{USERNAME}.cartodb.com/api/v1/viz/{VISUALIZATIONID}?api_key={APIKEY}"
{% endhighlight %}

It is pretty self-explanatory, but basically you need to execute a PUT http call and set, using JSON, the "privacy" visualization field to the literal "LINK" (careful, it's case-sensitive).

The call will return a JSON containing all current visualization fields so you can check that indeed the privacy changed to "LINK".

Available values to use from the API:

- PUBLIC

- LINK

- PRIVATE

### How can I have interactivity in a torque layer?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/torque-interactivity.png' | prepend: site.baseurl }}" alt="How can I have interactivity in a torque layer" /></p>

For the moment, torque layers have no interactivity. The trick that you can do is to have two layers:

- One static layer where the marker opacity is really low (almost invisible) with infowindow enabled.
- One torque layer

In order to keep all points on the map, just use the cumulative option.

### How many layers can my visualization have?

The maximum number of layers per map depends on your CartoDB plan. For Magellan plan, this maximum is 4. You can get up to 5 layers with the John Snow and Coronelli plans, and 6 with the Mercator plan. 

If you have special needs for layers, contact us at support@cartodb.com and we'll see how we can help you.

### What are the geocoding credits?

The geocoding credits are the quota for performing geocodings. With our geoocoding service you can translate addresses into coordinates for points that will be shown in your map. Each geocoding wastes one geocoding credit, so if you geocode a table with 100 rows, 100 credits will be wasted.

You should take into account that the georeference tool that converts ZIP codes, IP addresses, counties, countries or cities doesn't count as geocoding but as georeferencing, so this way, you will be able to georeference your data in the map without using the credits.

Each one of our plans include a free quota of geocodings, but extra charges will be applied if this quota is exceeded according to our Terms of Service.

### How do I embed a map in my site/blog?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/share-site.png' | prepend: site.baseurl }}" alt="How do I embed a map in my site/blog" /></p>

The easiest way is embedding a visualization by means of copying the HTML code that is provided in the "Share" option. 

You will be able to insert CartoDB maps in WordPress, Joomla, Drupal, etc. if you just include the iframe in a HTML code editor.

### Which are the supported browsers?

You have to differentiate between the authoring tool which is the place where you perform the maps, which requires modern browsers, and the published maps, which people consume. Those maps actually work down to IE7 in most cases. 

### Which databases are supported by CartoDB?

One of the main components of CartoDB is its geospatial database built on PostgreSQL and PostGIS. This means that by default, the CartoDB platform works over PostgreSQL due to making heavy use of PostGIS advanced capabilities. This way, if the CartoDB built-in features are not enough to perform your analysis, you can take advantage of the full power of PostGIS.

We offer the option of connecting your own database to CartoDB as part of our Enterprise features in order to adapt the platform to your specific needs. If you are interested, let us know at sales@cartodb.com.

### Can I calculate from/to routes with CartoDB?

CartoDB doesn't include a functionality for performing routing between different locations nor getting real driving distances for those routes. If you need to include or construct that kind of information for your spatial application, we recommend you to use external APIs as the ones from [Project OSM](http://project-osrm.org/) or [HERE Maps](http://developer.nokia.com/community/wiki/HERE_Maps_API_-_Advanced_Routing) and integrate their results with CartoDB.

### Why the size of my tables has increased after uploading them to CartoDB?

This has a couple reasons. First and foremost is simply that a database table has a lot more storage considerations than a CSV. For example, indexes. On top of that though, the actual way that data is stored on disk is optimized for lookup and retrieval speed over storage space. This makes sense because a CSV is made so you can optimally store data and if you open it load it all into a program for a limited amout of time while you edit it, then save it and be done. The database has things like data types etc. 

### Has CartoDB multi-user functionalities?

If you are interested in multi-user accounts, we offer Teams through our enterprise plans, just let us know at sales@cartodb.com.

### I have a column with a GeoJSON, how can I set the_geom value to this?

Just modify the following query with your values:

{% highlight sql %}
UPDATE your_table SET the_geom = st_setsrid(ST_GeomFromGeoJSON(your_GeoJSON_column), 4326)
{% endhighlight %}

### Can I synchronize my tables in real time?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/force-sync.png' | prepend: site.baseurl }}" alt="Can I synchronize my tables in real time" /></p>

By using the feature of sync tables, the shortest automatic syncing interval is 1 hour, but you can force manually a synchronization each 15 minutes.

### I have topographical maps in JPG and pdf formats. How can I convert these to add as base layers on the map?

there is not a direct or easy way to do that from CartoDB. What I recommend you is to use CartoDB.js in combination with GMaps or Leaflet to create overlays with images.

Here you can find examples in both options:

- [Leaflet](http://leafletjs.com/reference.html#imageoverlay)
- [GMaps](https://developers.google.com/maps/documentation/javascript/examples/overlay-simple)

### What about the rights of the data I upload to CartoDB?

For general rights on content see: http://cartodb.com/terms#subscriber.

### Does CartoDB work offline?

Right now CartoDB cannot work without connection to the internet. The application uses several services and libraries that cannot be hosted locally.

All we can recommend you regarding this is to install the software yourself as it is open source.

### Can CartoDB display real time data from a SQL database connection?

Unfortunately, CartoDB doesn't allow reading data from a SQL connection in real time. Nevertheless, you can use the SQL API for writing data into CartoDB.

### How do I perform a map with information that changes in time?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/torque.png' | prepend: site.baseurl }}" alt="Torque" /></p>

If you have a table that contains a column which describes the date when an event occured, you can map this dinamically by using the Torque option that appears in the wizard of the visualization. Just make sure that in the configuration of the Torque map you select the correct column with respect to which you want the map to be changing over time.

### Can I have different geometries in the same layer?

No. Each layer is related to some kind of geometry, so if you need to map polygons and points in the same map, you should use two different layers for each one of them.

### How do I share a visualization?

Once you have created and customized your visualization, you just should click on the "Share" option.

There are different ways of sharing a visualization:

- **Public URL**
  Used in order to share directly your map as it appears in your CartoDB profile.

- **Embed URL**
  Gives you an embeddable map. This is very useful for putting interactive maps of your data in your website or blog.

- **Iframe**
  HTML code to embed the map in your site.

- **API**  
  Gives you a link to your viz.json. You will need this URL if you are working on a more advanced way using CartoDB.js.

### how can I use CartoDB.js and Mapbox.js together

if you want to use all the features of cartodb (infowindows, legends, dynamic layers) with mapbox basemaps

- [http://bl.ocks.org/javisantana/7200781](http://bl.ocks.org/javisantana/7200781)

If you want to use Mapbox.js features and show a CartoDB layer (without any cartodb feature)

- [http://bl.ocks.org/javisantana/f485d193884983820cd3](http://bl.ocks.org/javisantana/f485d193884983820cd3)

## Styling your maps

### How can I use NASA imagery?

Using NASA imagery as your basemap is as simple as any other feature on CartoDB. It will take you just seconds to be up and running. In Map View, click on the basemap selector, select “Add yours”, and there you’ll see a NASA tab. In this tab you will have a date selector, where you will be able to choose the day you want to use, as well as a day/night option.

### How can I customize a CartoDB visualization?

We have a Javascript API that you can use to embed maps on your site and play with their interactivity, and also a very powerful SQL API that lets you modify the information on your map and see it refreshed in real time, or do geospatial queries against the that information to find what you want to show.

Check this at [APIs overview]({{ '/cartodb-platform.html' | prepend: site.baseurl }}).

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

​In your case, it will have a value different than 0, so you should just only give to it a zero-value. 

### How to modify the size of the marker in a non-bubble map?

​First of all, select on the wizard the Category map or the one you are interested in, and customize it to correspond to what you want to do referring categories.
​
​With respect of the size, you just should add this line to the CartoCSS window inside the general parameters of your table:
​
{% highlight scss %}
#your_table_name {
  marker-width: [your_number_column]/1000;
}
{% endhighlight %}
​
​Notice that in the code it is divided by 1000 because the values of the column are very big. You can adjust this to your data by applying divisions or multiplications depending on how you want to visualize the points.

### How to create custom filters for a visualization?

In order to create your own filter for interacting with your visualizations you would need to use our cartoDB.js API.

You can find an example [here](http://cartodb.github.io/cartodb.js/examples/filters-template/) ([source code](https://github.com/CartoDB/cartodb.js/tree/develop/examples/filters-template))

### How can I set the position of an embedded visualization?

In order to set the initial position of a map that you want to embed, you just need to adjust this position and the zoom value in the preview map that appears in the sharing option. The URLs that appear for sharing will show the map just as it is shown in the preview.

## Other CartoDB related questions

### I'm a student/researcher, do you offer discounts for education?

In CartoDB we have a special pricing for academic purposes. We offer a FREE Academy plan that allows you to have , as well as a discount of 20% in the rest of our plans. Pricing page for education can be found [here]({{ '/industries/education-and-research/' | prepend: site.cartodb-baseurl }}).

### Which are the special plans for journalism of CartoDB?

If you are a journalist and you have special needs about CartoDB, let us know at sales@cartodb.com

### How can I unlink my GDrive account from CartoDB?

In order to unlink your Google Drive account from the importing tool of CartoDB, you will have to deny the permissions in the account settings of your Google account.

### What does the "Removable brand" feature mean?

<p class="wrap-border"><img src="{{ '/img/layout/faqs/share-logo.png' | prepend: site.baseurl }}" alt="What does the Removable brand" /></p>

From the Coronelli plan you will be able to remove CartoDB logo and the "Create your own custom maps with CartoDB" text will not appear below your embedded visualizations if you don't want to. For removing the logo, just deselect the option "Logo" in the sharing wizard. Take into account that this option will be only available if your current plan includes the "Removable brand" feature.

### How can I know how many map views has a specific visualization?

In the "Visualizations" page you can find graphs of the individual map views for each of your visualizations. If you hover the graph, a popup will appear showing the total map views of the month and of the day for a specific visualization. 
