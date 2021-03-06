<!--<div style="font-size:12pt;color:magenta;">Writer Note_csobier: H2- Torque tilecube release, issue #4015
</div>-->
<!--<div style="font-size:12pt;color:magenta;">Writer Note_csobier: Docs/issue#4012
</div>-->
While you can use CartoCSS to customize your maps, CartoDB provides additional CartoCSS properties that you can apply to Torque style maps. Torque maps are typically used to display temporal data. You can add CartoCSS properties to [Torque](#cartocss---torque-maps), [Torque Heatmaps](#cartocss---torque-heatmaps), and [Torque Category](#cartocss---torque-category-maps) maps.

####CartoCSS - Torque Maps

The following CartoCSS properties can be applied to Torque style maps.  Note that some values vary, depending on the type of Torque map you are creating.

[-torque-frame-count](#torque-frame-count-number) | [-torque-animation-duration](#torque-animation-duration-number) | [-torque-time-attribute](#torque-time-attribute-string)
[-torque-aggregation-function](#torque-aggregation-function-keyword) | [-torque-resolution](#torque-resolution-float) | [-torque-data-aggregation](#torque-data-aggregation-keyword)

_**Note:** All Torque CartoCSS syntax is prefaced with a hypen._


##### -torque-frame-count `number`

--- | ---
Description | Specifies the number of steps in your torque animation.
Sample CartoCSS Code | `-torque-frame-count:512;`
Default Value | undefined
Available Values | See [numbers](#numbers).

**Tip** This is the *Steps* option from the Torque wizard.
	
##### -torque-animation-duration `number`

--- | ---
Description | Specifies the length of time for your animation, in seconds.
Sample CartoCSS Code | `-torque-animation-duration:30;`
Default Value | undefined
Available Values | See [numbers](#numbers). *This can also be a decimal - see [float](#float).*

**Tip** This is the *Duration (secs)* option from the Torque map wizard.


##### -torque-time-attribute `string`

--- | ---
Description | Defines the name of the date column in your dataset. This column can be an integer *or* a date.
Sample CartoCSS Code | `-torque-time-attribute:"cartodb_id";`
Default Value | undefined
Available Values | See [string](#string).

**Tip** This is the *Time Column* option from the Torque map wizard.

	
##### -torque-aggregation-function `keyword`

**Note:** Please note the different available values that should be applied if you are using a [Torque Category](#-torque-aggregation-function-keyword-torque-category-only) map.

--- | ---
Description | Since Torque maps renders data in clusters, this property defines how values are displayed in each cluster of the map. Column data must be numeric. For example, you can define: a maximum value, a count, or the total number of values in each cluster.
Sample CartoCSS Code | `-torque-aggregation-function: "count(cartodb_id)";`
Default Value | `"count(cartodb_id)"`
Available Values | `count(column_name), max(column_name), sum(column_name)`
Related Example | Wiki page about [how spatial aggregation works](https://github.com/CartoDB/torque/wiki/How-spatial-aggregation-works).

**Note:** Since the CartoDB geospatial database is built on the PostgreSQL platform and supports advanced PostGIS capabilities, see [PostgreSQL Aggregate Functions](http://www.postgresql.org/docs/9.3/static/functions-aggregate.html) for additional supported values.

**Tip:** Functions can also be combinations of functions and operations. For example, `log(1 + max(column_name))`


##### -torque-resolution `float`

--- | ---
Description | Since Torque maps create a grid from your data and aggregates data to each cell of that grid, this property defines the width and height of each cell, in pixels. 
Sample CartoCSS Code | `-torque-resolution:2;`
Default Value | undefined
Available Values | Resolution values should be applied in powers of 2 (for example, `2` `4` `8` and so on). The maximum value is `256`.

**Note:** Defining a larger number applies a larger grid to your data.

**Tip:** This is the *Resolution* option from the Torque map wizard.


##### -torque-data-aggregation `keyword`

--- | ---
Description | Defines how Torque maps display past data. By default, linear data aggregation is applied, where no traces of past data appears. Optionally, you can show past data markers cumulatively.
Sample CartoCSS Code | `-torque-data-aggregation:linear;`
Default Value | `linear`, does not leave any trace of past data.
Available Values | `linear` `cumulative`

**Tip** This is the *Cumulative* option from the Torque map wizard.

Once your data is aggregated, you can further customize your Torque animation options by changing the marker styles for each frame of your animation. Customize the options found under the `[frame-offset=number]` section to add more styling properties and values.  **Tip:** `[frame-offset]` is set with the *Trails* option from the Torque map wizard.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSSframeoffset.png' | prepend: site.baseurl }}" alt="Torque CartoCSS Frame Offset" /></p>

**Tip:** You can also select each cluster value and apply custom marker styles, based on the data category. For example, suppose you want to apply a unique style only to the maximum value in your dataset, change the marker style for the maximum value in your animation. These values are located in your CartoCSS properties.

The following example displays CartoCSS properties with a Torque map.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSS.png' | prepend: site.baseurl }}" alt="Torque CartoCSS" /></p>

####CartoCSS - Torque Heatmaps

While any of the [Torque CartoCSS properties](#cartocss---torque-maps) can be applied to a Torque Heatmap, the following CartoCSS properties can also be applied to Torque Heatmaps.

- [image-filters `functions`](cartodb-editor.html#image-filters-functions), enables you to define the color stop for your heatmap.

- [marker-file `uri`](cartodb-editor.html#marker-file-uri), when creating a Torque Heatmap with CartoDB, marker files are automatically provided. You cannot change these options.

- [marker-fill-opacity `float`](cartodb-editor.html#marker-fill-opacity-float)

- [marker-width `expression`](cartodb-editor.html#marker-width-expression)

**Note:** It is a [known issue](http://gis.stackexchange.com/questions/137384/marker-file-for-torque-cartodb) that certain marker properties are not supported when applied to Torque and Torque Category maps. Specifically, when the [marker-file](cartodb-editor.html#marker-file-uri) and [marker-fill](cartodb-editor.html#marker-fill-color) CartoCSS properties are applied, you cannot color a sprite using the marker-fill value. You must create a sprite per color when applying these properties to Torque map.  Optionally, change the map type to a Torque Heatmap as a workaround.

The following example displays CartoCSS properties with a Torque Heatmap.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSSheat.png' | prepend: site.baseurl }}" alt="Torque Heat CartoCSS" /></p>

####CartoCSS - Torque Category Maps

While any of the [Torque CartoCSS properties](#cartocss---torque-maps) can be applied to a Torque Category map, the `-torque-aggregration-function` contains different available values that are specific for Torque Category maps.

##### -torque-aggregation-function `keyword` (Torque Category only)

--- | ---
Description | Torque Category applies a PostgreSQL command to find the values that appear most often in your data (in order to cluster your data accordingly).
Sample CartoCSS Code | `-torque-aggregation-function:"CDB_Math_Mode (torque_category)";`
Default Value | `"CDB_Math_Mode(torque_category)"`
Available Values | `count(column_name), max(column_name), sum(column_name)`
Related Example | Wiki page about [how spatial aggregation works](https://github.com/CartoDB/torque/wiki/How-spatial-aggregation-works).

The following example displays CartoCSS properties with a Torque Category map.
<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSScat.png' | prepend: site.baseurl }}" alt="Torque Category CartoCSS" /></p>
