---
layout: platform_item
title: Tips and tricks
slug: tips-and-tricks
js_asset: "editor"
redirect_from:
- "/documentation/advanced_concepts.html"
---

## The Power of CartoDB

Beyond storing and mapping your data, CartoDB provides you with highly sophisticated data analysis features. This section of the documentation provides some of these data tips and tricks for data analysis.

## CartoDB data types

### Geometry

CartoDB creates a geometry column called `the_geom` on every table you generate. The column is where you will store your geometry information, either POINTS, MULTILINESTRINGS, or MULTIPOLYGONS. PostGIS supports [many geometry types](http://postgis.net/docs/using_postgis_dbmanagement.html#Geography_Basics), but to simplify visualization and analysis, CartoDB turns all geometries into one of the three listed. For the time being, you can only have one geometry type per column.

### Number

A number column in CartoDB can contain any numeric value. In the backend we implement number using the [double precision type](http://www.postgresql.org/docs/9.1/static/datatype-numeric.html) in PostgreSQL.

#### Working with numbers

Where would any data analysis be without using numeric analysis? The first thing to remember in CartoDB is that every column has a type and sometimes during import, numbers are interpreted as strings. Be sure that the column you are trying to analyze is properly a number, and if it is not, change it. PostgreSQL has [comprehensive documentation](http://www.postgresql.org/docs/9.1/static/functions-math.html) for [all the analyses](http://www.postgresql.org/docs/9.1/static/functions.html) you want to do.

<div class="code-title">LOG VALUE</div>
{% highlight sql %}
SELECT * FROM {table_name} WHERE log(population) < 1000
{% endhighlight %}

### String

Strings are any combination of numbers and characters in UTF-8. There is no limit to the size of your string (just remember your storage quotas!). The CartoDB string type is implemented using a [text field](http://www.postgresql.org/docs/9.1/static/datatype-character.html) in PostgreSQL.

#### Working with strings

Strings can be very useful for categorizing, grouping, or excluding data from your SQL queries. The string columns in CartoDB are case-sensitive, meaning you can use them for precision queries. There are also ways to query them for less precise comparisons of data. See the following for an example of non-case-sensitive matching to only part of a string field.

If you are editing your datasets string column by deleting text from one of its fields, the field will stay blank instead of becoming “null”. To make it “null”, apply the following SQL query:

{% highlight sql %}
UPDATE table_name SET column_name = null WHERE column_name ilike 'indicate_null_field_name_here'
{% endhighlight %}

Replace the SQL request with your table name and your string field value.

<div class="code-title">PARTIAL MATCH</div>
{% highlight sql %}
SELECT * FROM {table_name} WHERE country_name ilike 'united%'
{% endhighlight %}

_ilike_ allows you to search partial matches without case-sensitivity. Alternatively, _like_ keeps case sensitivity. The `%` symbol indicates to stop evaluating string matching after that character.

### Date

We love dates for data analysis! Store all your dates in CartoDB using a date field, which stores precise information about date and time (based on server clock time, GMT + 1). CartoDB provides two automated datetime fields, `created_at` that stores the time a row was added to CartoDB, and `updated_at` that will update every time a row is changed. Checkout the PostgreSQL [documentation on date types](http://www.postgresql.org/docs/9.1/static/datatype-datetime.html) to learn how to extract data from and insert data to a date column.

#### Working with dates

CartoDB provides two default date fields for every row in your tables, `created_at` and `updated_at`. There are many ways that dates can be used to help you analyze data. Be sure to check out this [PostgreSQL documentation](http://www.postgresql.org/docs/9.1/static/functions-datetime.html) page. Here is an example for deleting all rows that were created since exactly one day ago.

<div class="code-title">ONE DAY LESS</div>
{% highlight sql %}
DELETE FROM {table_name} WHERE (NOW() - INTERVAL '1 day') < created_at
{% endhighlight %}

### Non-default data types

The above types, geometry, number, string, and date are the default data types we use in CartoDB. You may want to use more advanced types, such as [Arrays](http://www.postgresql.org/docs/9.1/static/arrays.html) or specific numeric types. Go ahead! We won't stop you, you'll just need to create those fields using SQL. For more background on SQL, check out our [Map Academy](http://academy.cartodb.com/courses/04-sql-postgis.html) course.

## Geospatial analysis

### Working with cartodb_id

The column, `cartodb_id`, is added to every CartoDB table. It is used internally and externally for mapping, infowindows, and a few other things. You can use this column also as a numeric key for every row in your table. Each number, within a table, is a unique reference to a row. If you drop a row, the `cartodb_id` for that row will not be used again. 

<div class="code-title">CARTODB_ID</div>
{% highlight sql %}
SELECT * FROM {table_name} WHERE cartodb_id = 1
{% endhighlight %}

### Working with the_geom

The primary geometry column in any CartoDB table is called, `the_geom`. When you upload a SHP file, or any other supported file, any geospatial data ends up in this column. The `the_geom` column is projected in WGS 84 (EPSG:4326), and is built with a spatial index for fast querying and sorting. Geometries are stored in the database in a format called well-known binary. This is useful for many things, but if you want to view your data, it is handy to convert `the_geom` using [ST_AsText](http://postgis.net/docs/ST_AsText.html) or [ST_AsGeoJSON](http://postgis.net/docs/ST_AsGeoJSON.html). Sometimes it can be useful to turn polygons into points or points into polygons. There are many ways to do this, here are a couple.

<div class="code-title">POLYGON CENTROID</div>
{% highlight sql %}
SELECT ST_Centroid(the_geom) FROM {table_name}
{% endhighlight %}

`ST_Centroid` finds the centroid of any PostGIS geometry, turning say, a POLYGON into a POINT.

<div class="code-title">POINT BUFFER</div>
{% highlight sql %}
SELECT ST_Buffer(the_geom,0.001) FROM {table_name}
{% endhighlight %}

`ST_Buffer` pads the outer edge of any geometry by some variable (in this case 0.001). If you add a buffer to POINT you will get a POLYGON.

### About the_geom_webmercator

CartoDB uses an invisible column called, `the_geom_webmercator`, to speed up the rendering of tiles for our mapping services. We are working to deprecate the use of this column, but it will take some time. For now, if you want to run an analysis on your data and then see the result in the Map tab, you need to have a column called `the_geom_webmercator` in the result. The `the_geom_webmercator` column is the same geometry as your `the_geom` column but projected in Web Mercator (EPSG:3857). Any operation you run on `the_geom`, can be wrapped in a [ST_Transform](http://postgis.net/docs/ST_Transform.html) function to reproject it. If you tell PostgreSQL to call the result of that reprojection, `the_geom_webmercator`, the Maps API and tiler will work perfectly.

<div class="code-title">THE_GEOM_WEBMERCATOR</div>
{% highlight sql %}
SELECT cartodb_id, ST_Transform(ST_Buffer(the_geom,0.001), 3857) as the_geom_webmercator FROM {table_name}
{% endhighlight %}

Here we buffer our point geometry, then translate the result to EPSG:3857 and finally, report it in a column called `the_geom_webmercator`.

### Creating a point from latitude and longitude

Often times you will want to turn a numerical latitude and longitude into a projected geometry in PostGIS. This can be handy for geospatial queries, or simply for storing and updating your data. To do this, you will first have to make a POINT and second, set its projection SRID.

<div class="code-title">CREATE POINT</div>
{% highlight sql %}
SELECT ST_SetSRID(ST_Point(-31.23543, 22.24244),4326) as the_geom FROM {table_name}
{% endhighlight %}

First, we created a point. Remember, PostGIS always expects longitude followed by latitude. Next, we use the ST_SetSRID function to apply EPSG:4326 to our new POINT.

### Calculate area of a polygon

Knowing the size of a polygon can be very useful. PostGIS works in coordinate systems, so anytime you calculate distances and sizes in PostGIS, be aware that it may be in the units of the coordinate system. You can use [geography types](http://postgis.net/docs/using_postgis_dbmanagement.html#Geography_Basics) to have PostGIS quickly convert those results into more familiar meters.

<div class="code-title">POLYGON SIZE</div>
{% highlight sql %}
SELECT ST_Area(the_geom::geography) as area FROM {table_name}
{% endhighlight %}

First, we recast the geometry to a geography type, this lets us calculate area in meters. Next, we run the ST_Area function to return the size of the polygon.

### Spatial intersection of two tables

Very similar to the JOIN performed above, spatial intersections can be used to join data based on spatial conditions such as overlap, exclusion, or contains.

<div class="code-title">GEOGRAPHIC JOINS</div>
{% highlight sql %}
SELECT {table_name_1}.cartodb_id, {table_name_2}.the_geom  FROM {table_name_1}, {table_name_2} WHERE ST_Intersects({table_name_1}.the_geom, {table_name_2}.the_geom)
{% endhighlight %}

This use of ST_Intersects allows you to JOIN the data from two tables at each point where the geometry of the first intersects the geometry of the second. This is a geometric variation of the common join in PostgreSQL.

### Measuring distance

Measuring distance has the same consideration as measuring size: knowing what units the measurement is in. You can use the same _geography_ typing trick as we used above to measure area. Then you just have to use a simple PostGIS function, [ST_Distance](http://postgis.net/docs/ST_Distance.html), to get a distance in meters.

<div class="code-title">DISTANCE</div>
{% highlight sql %}
SELECT ST_Distance(the_geom::geography, ST_SetSRID(ST_Point(-74.0064, 40.7142),4326)::geography) as area FROM {table_name}
{% endhighlight %}

Here, we measure the distance from our geometry, <i>the_geom</i>, and a geometry we make on the fly, in this case a point in New York City.

## Advanced analysis

### Get all records at a point

One of the most common geospatial queries web-services experience is one to find all records that occur at a given location. CartoDB makes this very simple, with just a few parameters and the SQL API, you can quickly build the results of these queries into your application. To learn more about SQL check out this [Map Academy](http://academy.cartodb.com/courses/04-sql-postgis.html) course.

<div class="code-title">RECORDS AT A POINT</div>
{% highlight sql %}
SELECT cartodb_id, the_geom, the_geom_webmercator FROM {table_name} WHERE ST_Intersects( the_geom, ST_SetSRID(ST_POINT(-73.9967118782795, 40.7248057566452) , 4326))
{% endhighlight %}

Here we get all records that intersect a point we create on the fly. We grab three columns here, take note that you can perform an query based on `the_geom` column, but still include `the_geom_webmercator` in the result so you can visualize it on the map easily.

### Query records in a bounding box

Like querying all records at a point, querying all records within a bounding box will be a fairly common task for many applications. It is another straight forward request using SQL.

<div class="code-title">BOUNDING BOX</div>
{% highlight sql %}
SELECT * FROM {table_name} WHERE the_geom && ST_SetSRID(ST_MakeBox2D(ST_Point(-73.9980, 40.726), ST_Point(-73.995, 40.723)), 4326)
{% endhighlight %}

Here, we use some of the same functions you have seen previously. The opperator, &&, always uses the bounding box of geometries, unlike `ST_Intersects` which uses the full shape of a geometry. This can greatly speed up your queries in cases where bounding box comparison is sufficient.

### Join data from two tables

Now that you have some SQL skills under your belt, let's do another advanced query that you will use all the time: the ability to join data from two different tables through one single query.

<div class="code-title">TABLE JOINS</div>
{% highlight sql %}
SELECT {table_name_1}.iso, {table_name_1}.value, {table_name_2}.the_geom  FROM {table_name_1}, {table_name_2} WHERE {table_name_1}.iso = {table_name_2}.iso
{% endhighlight %}

The above example will return the columns, iso and value from the first table with a geometry from the second, joining rows based on the column iso matching from one table to the other. We used <i>ISO</i> here because it is a common use case, where you join new values from one table with the geometries in a second based on the shared ISO code value.

### Sort records by distance to a point

Here is a really fun use-case for CartoDB: what are the 10 closest database entries to my current location? This is especially useful for mobile applications, but also for location-aware websites.

<div class="code-title">DISTANCE SORT</div>
{% highlight sql %}
SELECT ST_X(ST_Centroid(the_geom)) as longitude,ST_Y(ST_Centroid(the_geom)) as latitude, description, ST_Distance(the_geom::geography, ST_PointFromText('POINT(-73.999548 40.71954)', 4326)::geography) AS distance FROM {table_name} ORDER BY distance ASC LIMIT 10
{% endhighlight %}

In this statement, we extract the longitude and latitude from geometries using the `ST_X` and `ST_Y` functions respectively. Then we are calculating the `ST_Distance` of each record to a POINT that we define on the fly. Finally you can see that we are ordering the results by the calculated distance in ASC (ascendent) and LIMITing to the closest 10 points.

### Common Table Expression

The Common Table Expression (CTE) is a really useful tool for making SQL more readable. It has a drawback if you are not 100% sure what you are doing, it puts constraints on the query planner. Unlike nested queries, CTEs force the order of execution to follow the way you write you queries. 

We **strongly recommend not using CTE statements** in your CartoDB queries. This is especially true in maps, where the Maps API wraps your queries in further query statements to optimize the creation of tiles from your data. If the query planner cannot access the full statement, it cannot make it fast! 


## CartoDB functions

### Powerful SQL functions only on CartoDB

While developing CartoDB, we have run into many cases where we need specialized SQL functions to make the most of the CartoDB stack. In those cases, we have written the functions using [PL/pgSQL](http://www.postgresql.org/docs/9.1/static/plpgsql.html) and make them easily available for everyone to use. These functions act very much like all other PostgreSQL/PostGIS functions you have used, but they are specific to CartoDB.

### Basic functions

Sometimes we see SQL run so much that it seems to make sense to provide a simplified wrapper for the method.

<div class="code-title">WGS84 POINT GEOMETRY</div>
{% highlight sql %}
SELECT CDB_LatLng(float, float)
{% endhighlight %}

There are a few ways to make a WGS84 point geometry using PostGIS, all of them take a lot of keystrokes. We decided to wrap it up in a very simple function, where you provide very simply, a float latitude value and a float longitude value. The function returns a valid, projected, point geometry.

### Grid visualization functions

CartoDB makes use of several functions to create density grids of point data. Each of the functions below can be used as part of that workflow or independently.

<div class="code-title">MAKE A HEXAGON</div>
{% highlight sql %}
SELECT CDB_MakeHexagon(point, side)
{% endhighlight %}

Return an hexagon geometry from a given center (point) and side (or maximal radius) as a float.

<div class="code-title">A HEXAGON GRID</div>
{% highlight sql %}
SELECT CDB_HexagonGrid(polygon, side) AS the_geom FROM table_name
{% endhighlight %}

The CDB_HexagonGrid takes a geometry that describes the coverage area of your grid (a polygon) and the size of each hexagon cell. The size is in the same units of your projected geometry, so for example, if you use the_geom and so WGS84, your size will be in degrees. An optional third parameter can be passed to the function, a geometry for the origin of the grid to be placed.

<div class="code-title">A RECTANGLE GRID</div>
{% highlight sql %}
SELECT CDB_RectangleGrid(polygon, width, height)
{% endhighlight %}

Much like the CDB_HexagonGrid above, here you can create a mesh grid that covers an area. The function takes three parameters: the area you want your grid to cover (a polygon), the width of your cells, and height of your cells. An optional third parameter can be passed to the function, a geometry for the origin of the grid to be placed.


### Webmercator and TMS functions

Webmercator is the common projection of Leaflet, and a host of other online mapping tools. While those tools can pretty effortlessly handle latitude and longitude values, what you are actually seeing on map tiles is different. We manage several functions to make measuring and creating tiles simple.

<div class="code-title">TILE EXTENT</div>
{% highlight sql %}
SELECT CDB_XYZ_Extent(x, y, z)
{% endhighlight %}

Using the XYZ extent function, you can pass any tile coordinate in the form of integer x, y, and z values and receive back the extent of that tile in the form of a polygon. The extent is in webmercator.

<div class="code-title">TILE RESOLUTION</div>
{% highlight sql %}
SELECT CDB_XYZ_Resolution(z)
{% endhighlight %}

It can be useful to know the resolution of tiles presented on your maps. Internally, we use this function, which takes any Z value, and returns the pixel resolution of that tile.

<div class="code-title">SAFELY TRANSFORM TO WEBMERCATOR</div>
{% highlight sql %}
SELECT CDB_TransformToWebmercator(geometry)
{% endhighlight %}

Transformations happen all the time on CartoDB. In the process of developing the tool, it became apparent that the more common function, [ST_Transform](http://postgis.net/docs/ST_Transform.html), could result in errors. In the case of CartoDB, transformations happen on a copy of a user's data, so a lossy transformation was preferrable to an error producing function. The above function allows us to consistently transform geometries behind the scenes in CartoDB.

### Statistical functions

For the visualization of choropleths, CartoDB needed a few different ways to bin numerical data in a single column of a CartoDB table. The various binning methods are described below and implemented as part of the visualization wizard.

<div class="code-title">JENKS BINS</div>
{% highlight sql %}
SELECT CDB_JenksBins(array_agg(numeric), integer)
{% endhighlight %}

The [http://en.wikipedia.org/wiki/Jenks_natural_breaks_optimization](http://en.wikipedia.org/wiki/Jenks_natural_breaks_optimization) uses a method of reducing the deviations within each bin while increasing the average deviation between bins. This method is great for patchy or non-evenly distributed data. Here, we collect a numeric column into a single array using the array_agg method, and also declare the number of bins we want to create. The result is an array with the upper bound for each bin.

<div class="code-title">QUANTILE BINS</div>
{% highlight sql %}
SELECT CDB_QuantileBins(array_agg(numeric), integer)
{% endhighlight %}

Quantile bins very simply attempt to bin data into groups that each contain the same number of total records. Like the above, you provide an array of numerical values and an integer of the number of bins you wish to create. The result is an array with the upper bounds of each bin.

<div class="code-title">HEADS/TAILS BINS</div>
{% highlight sql %}
SELECT CDB_HeadsTailsBins(array_agg(numeric), integer)
{% endhighlight %}

The [Heads/Tails (PDF)](http://arxiv.org/pdf/1209.2801v1.pdf) method breaks data in a way to best visualize data falling along a long-tail distribution. Like the above, you provide an array of numerical values and an integer of the number of bins you wish to create.  The result is an array with the upper bounds of each bin.

## Mappable data

Finding data with mappable data can seem like a daunting task, but there are many resources for aspiring web mappers! Take a look at the list below to get started:

- [Global Administrative areas](http://gadm.org)
- [Natural Earth data](http://www.naturalearthdata.com/)
- [OSM Building footprints](http://overpass-turbo.eu/)
- [International Monetary Fund](http://elibrary-data.imf.org/DataExplorer.aspx)
- [World Bank](http://data.worldbank.org/)
- [United Nations](http://data.un.org/)
- [The Guardian Datablog](http://www.theguardian.com/news/datablog)
- [Data for development](http://aiddata.org/)
- [Land Matrix](http://www.landmatrix.org/en/get-the-detail/)
- [US Government](https://data.gov)
- [US Election data](http://projects.iq.harvard.edu/eda/data)
- [US Federal Reserve economic data](http://research.stlouisfed.org/fred2/)
- [US Climate Data](http://www.data.gov/climate/)
- [Buenos Aires Open Data Portal](http://data.buenosaires.gob.ar/)
- [New York City data](https://nycopendata.socrata.com/)
- [New York City polygons](http://www.nyc.gov/html/dcp/html/bytes/dwndistricts.shtml)
- [New York City Department of Transportation](http://www.nyc.gov/html/dot/html/about/datafeeds.shtml)
- [Organisation for Economic Co-operation and Development](http://www.oecd.org/)
- [Portal de Datos abiertos del Ayuntamiento de Madrid](http://datos.madrid.es/portal/site/egob/)
- [Open Data BCN](http://opendata.bcn.cat/opendata/en/)
- [Global Terrorism Database](http://www.start.umd.edu/gtd/)

## Charts & Graphs

It is definitely possible to create charts and graphs using CartoDB. For the time being, you'll need to use a combination of CartoDB.js and a third-party JavaScript library. You can learn more about CartoDB.js in our [Map Academy course](http://academy.cartodb.com/courses/03-cartodbjs-ground-up.html). If you are a fan of D3, you can definitely take advantage of the SQL API to query and format data to make graphs pretty easily. Another libary that we like is [Chart.js](http://www.chartjs.org/). Using [Chart.js](http://www.chartjs.org/) with the SQL API is as straight-forward as it gets. [Take a look](http://bl.ocks.org/andrewxhill/9134155).
