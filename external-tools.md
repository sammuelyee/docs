---
layout: platform_item
title: External Tools
slug: external-tools
js_asset: "editor"
redirect_from:
- "/documentation/external-tools.html"
---

## Cesium

todo

## QGIS Plugin

todo

## OGR

The release of [GDAL/OGR 2.0.0](http://www.gdal.org/) now includes an easy to use cartoDB driver, fully supporting CartoDB table imports, exports, custom queries, and data synchronization. OGR can connect to services implementing [CartoDB APIs](http://docs.cartodb.com/cartodb-platform.html). GDAL/OGR must be built with Curl support in order for the CartoDB driver to be compiled properly.

The CartoDB driver is supported the same as other formats in OGR, and allows for users to use OGR and it's tools with the full range of available features.

### Syntax and Public Data Basics


The minimal syntax required to interact with public data in a CartoDB account is

```
CartoDB:{cartodb username}
```

For single-user accounts, the CartoDB username is the same as account name. For multi-user Enterprise accounts, be sure to use the username, _not_ the Enterprise account name.

As an example:
```
$ ogrinfo "cartodb:{CartoDb username}"
```
Returns a list of publicly available tables from the specific user:

```
$ ogrinfo "cartodb:namessanti"
INFO: Open of `cartodb:namessanti'
      using driver `CartoDB' successful.
1: test1
2: graffiti_locations
3: nycc_1_merge
4: base_20de_20datos_berlin_oktoberzwei2014_20
```

Optional parameters can be specified after the ':' sign. Currently the following one is supported :

```
tables={table_name_in_CartoDB}
```
 This is necessary for obtaining specific table information from a CartoDB account or for working with specific datasets. If several parameters are specified, they must be separated by a space.

For example:
 ```
 $ ogrinfo -ro "CartoDB:santiagoa tables=ne_10m_railroads"
 ```
 Returns:
 ```
INFO: Open of `CartoDB:santiagoa tables=ne_10m_railroads'
      using driver `CartoDB' successful.
1: ne_10m_railroads
 ```
 Which is the most basic level of information from a specific CartoDB table. Using this syntax, CartoDB tables can be viewed modified, and generated just like any other supported format in OGR.

 ####SQL in OGR

 For obtaining more complex information, creating new tables from other tables, and to get the most out of OGR's tools, you'll often need to give a SQL query to a command with the `-sql` flag. In the example below, we're going to use `ogrinfo` on the count the number of features in a CartoDB table by selecting all (*) from our table. The `-so` tag allows us to see a _summary of_ the data, including feature count, projection, and columns, but not the data itself.

 ```
 $ ogrinfo -so "cartodb:santiagoa tables=ne_10m_railroads" \
 -sql "SELECT * FROM ne_10m_railroads" -fid 0
 ```
 Returns:
 ```
INFO: Open of `cartodb:santiagoa tables=ne_10m_railroads'
      using driver `CartoDB' successful.

Layer name: result
Geometry: Unknown (any)
Feature Count: 1116
Extent: (-122.581389, -46.414130) - (176.237170, 69.383334)
Layer SRS WKT:
GEOGCS["WGS 84",
    DATUM["WGS_1984",
        SPHEROID["WGS 84",6378137,298.257223563,
            AUTHORITY["EPSG","7030"]],
        AUTHORITY["EPSG","6326"]],
    PRIMEM["Greenwich",0,
        AUTHORITY["EPSG","8901"]],
    UNIT["degree",0.0174532925199433,
        AUTHORITY["EPSG","9122"]],
    AUTHORITY["EPSG","4326"]]
FID Column = cartodb_id
Geometry Column = the_geom
rwdb_rr_id: Real (0.0)
mult_track: Real (0.0)
electric: Real (0.0)
other_code: Real (0.0)
category: Real (0.0)
disp_scale: String (0.0)
add: Real (0.0)
featurecla: String (0.0)
scalerank: Real (0.0)
natlscale: Real (0.0)
part: String (0.0)
continent: String (0.0)
```
###Exporting Data

Just like any other supported format, the OGR tool [OGR2OGR](http://www.gdal.org/ogr2ogr.html) allows users export data from CartoDB locally in any OGR supported format. It is also possible to query specific columns and data using the `-sql` tag.

For example:
```
$ ogr2ogr new_railroad.shp "cartodb:santiagoa tables=ne_10m_railroads" \
-sql "SELECT the_geom, mult_track AS Multiple_Tracks, electric FROM ne_10m_railroads WHERE continent = 'Europe'"
```
Creates a local ESRI Shapefile from the CartoDB table 'ne_10m_railroads' and renamed it 'new_railroads.shp' with all the necessary dependencies within the directory specified on the commandline. This new file only contains the columns specified in the SQL query following the `-sql` tag where the column continent is equal to 'Europe'. We can see the results with the following command:

```
$ ogrinfo -q new_railroad.shp -sql "SELECT * FROM new_railroad WHERE FID = 0"
```
This returns:

```
Layer name: new_railroad
OGRFeature(new_railroad):0
  multiple_t (Real) = 1.000000000000000
  electric (Real) = 1.000000000000000
  LINESTRING (45.964722499999979 58.354999722222203,45.960279444444424 58.348333611111094,45.958609444444434 58.341387777777761)
```

###Importing Data into CartoDB

It is also possible to write new data tables into a CartoDB account using OGR2OGR. Importing to CartoDB requires the users **unique API Key**. Your API key can be found by selecting it from the drop-down menu located in the upper-right corner of your dashboard.

<p class="wrap-border"><img src="/img/layout/external-tools/api_key.png" alt="ogr api key" /></p>

Using our newly created 'new_railroad.shp' file, we will use OGR2OGR to add this table back into CartoDB. Make sure to `cd` into the folder where your .shp file is located.

```
ogr2ogr \
  --config CARTODB_API_KEY {Unique API Key goes here} \
  -t_srs EPSG:4326 \
  -f CartoDB \
  "CartoDB:{Your CartoDB username}" \
  new_railroad.shp
```
The commandline syntax of ogr2ogr is not the most obvious thing in the world.

* The API key is required to allow write access into the database.
* The ``-t_srs EPSG:4326` option tells OGR2OGR reproject the data to geographic coordinates, which is **required** for data to be published via the CartoDB Editor.
* The `-f CartoDB` option tells OGR2OGR to use the CartoDB driver for writing.
* The `CartoDB:santiagoa` entry is the destination CartoDB account
* `new_railroad.shp` entry is the source data.

Once the command has run though, the data are available in the CartoDB dashboard, ready for mapping.

<p class="wrap-border"><img src="/img/layout/external-tools/import.png" alt="ogr import" /></p>

###Data Synchronization With OGR

The CartoDB editor has the ability to easily and regularly [sync tables](http://blog.cartodb.com/synced-tables-create-real-time-maps-from-data-anywhere/) to create real-time maps. However, synced tables require the data to be publicly available so CartoDB can read it, and that the destination table get over-written at each update.

It’s easy to create your own live data tables in CartoDB, updated on your own schedule, from your private data, using the ogr2ogr tool.

First the user must remove all the existing data from their CartoDB table by sending the `TRUNCATE` command directly to the SQL API. Let's use the new_railroad data set we recently imported.

```
  key={Unique API key}
  sql=`echo "TRUNCATE TABLE g250" | tr ' ' +`
  curl "http://{CartoDB username}.cartodb.com:80/api/v2/sql?api_key=${key}&q=${sql}"
```
Then, load new data into the table. Now that the table is empty, we can run ogr2ogr in -append mode to put the new records in place.

```
  ogr2ogr \
      --config CARTODB_API_KEY {Unique API key} \
      -append \
      -t_srs EPSG:4326 \
      -f CartoDB \
      "CartoDB:{CartoDB username}" \
      new_railroad.shp
```

It is important to note tha we are using `-append` as opposed to `-overwrite`. This is because `-overwrite` will delete the CartoDB table and create a new one in it's place - removing any styles, legends, infowindows, or SQL queries made in the editor.

Now your table (and all the maps that depend on it) is full of the latest data, without placing the raw data on a public URL.

#### Append New Data to Existing Data

To add to an exisitng dataset without deleting the previous data, simply `-append` without sending the `TRUNCATE` command prior. Doing this causes tables to grow indefinetely. If your raw data has a time stamp, you can use that as a key to delete old data. If it doesn’t, you can alter your table after import, to include a timestamp field that holds the date the data was loaded.

First, load your initial raw data.

```
  ogr2ogr \
      --config CARTODB_API_KEY {Unique API key} \
      -t_srs EPSG:4326 \
      -f CartoDB \
      "CartoDB:{CartoDB username}" new_railroad.shp
```

Then, add a time column with a default value, so that it gets filled in automatically when new data are inserted.

```
  key={Unique API key}
  sql=`echo "ALTER TABLE new_railroad ADD COLUMN ts TIMESTAMP DEFAULT now()" | tr ' ' +`
  curl "http://{CartoDB username}.cartodb.com:80/api/v2/sql?api_key=${key}&q=${sql}"
```

Then, run your import in -append mode to see that new columns are timestamped with the time of import.

```
  ogr2ogr \
      --config CARTODB_API_KEY {Unique API key} \
      -append \
      -t_srs EPSG:4326 \
      -f CartoDB \
      "CartoDB:{CartoDB username}" new_railroad.shp
```

Finally, run a scheduled job to delete all records you consider too old to map. For example, 1 week old.

```
  key={Unique API key}
  sql=`echo "DELETE FROM new_railroad WHERE ts < now() - '1 week'::interval" | tr ' ' +`
  curl "http://{CartoDB username}.cartodb.com:80/api/v2/sql?api_key=${key}&q=${sql}"
```

### Configuration Options

The following configuration options are available in OGR:
* CARTODB_API_URL: defaults to https://{CartoDB username}.cartodb.com/api/v2/sql. Can be used to point to another server.
* CARTODB_HTTPS: can be set to NO to use http:// protocol instead of https:// (only if CARTODB_API_URL is not defined).
* CARTODB_API_KEY: Most operations, in particular write operations, require an authenticated access.
* CARTODB_PAGE_SIZE: Features are retrieved from the server by chunks of 500 by default.

####Additional Layer Creation Options

* OVERWRITE=YES/NO: Whether to overwrite an existing table with the layer name to be created. Defaults to NO.
* GEOMETRY_NULLABLE=YES/NO: Whether the values of the geometry column can be NULL. Defaults to YES.
* CARTODBFY=YES/NO: Whether the created layer should be "CartoDBifi'ed" (i.e. registered in dashboard). Defaults to YES.
* LAUNDER=YES/NO: This may be "YES" to force new fields created on this layer to have their field names "laundered" into a form more compatible with PostgreSQL. This converts to lower case and converts some special characters like "-" and "#" to "_". If "NO" exact names are preserved. The default value is "YES". If enabled the table (layer) name will also be laundered.
