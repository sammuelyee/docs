---
layout: tutorials_item
title: 'Merging data from two tables'
short_description: 'Walk through a simplified process to combine data from multiple datasets creating new tables'
level: basic
time_needed: '10 minutes'
embed_url: 'http://documentation.cartodb.com/viz/81d928bc-e9c9-11e2-b5ac-5404a6a683d5/embed_map?title=false&description=false&search=false&shareable=false&cartodb_logo=true&layer_selector=false&scrollwheel=false&sql=&zoom=2&center_lat=20.96143961409684&center_lon=-19.335937499999996&height=300&id=cartodb-1373506565633'
---

## Summary

It is a common scenario when creating maps that you'll want to combine data from two different files. In CartoDB there are a few ways to do this, including using SQL to do it on the fly or to create new tables from multiple datasets. If your SQL skills are still coming along, don't worry, we have simplified the process to help you out. In this tutorial, we are going to walk you through the process of creating two tables, then merging select data from those two tables into a third table. We are going to use something called an aggregate, where data from the second table is summarized based on which geometries from the first it intersects (e.g. count all the points in a polygon, sum an attribute of all the points in a polygon, etc.).

## Preparing the data

For this tutorial, we will use two datasets from the Common Data menu. If you are not familiar with Common Data, it is a list of datasets we host on CartoDB to make import into your account very simple.

From your account dashboard, click the link in the upper right, <span class="ui_element" data-element="common_data">Common Data</span>. Next, click the <span class="ui_element" data-element="add_public_table">plus sign</span> beside the dataset called 'World Borders'. After CartoDB has imported this dataset into your account, let's change the name to make the tutorial easier. Click the name in the upper left, change it to `world_borders` and click 'Save'. Go back to your main account dashboard by clicking the <span class="ui_element" data-element="back_to_dashboard">return arrow</span> right beside the table name.

From your account dashboard, we are going to upload a second dataset from the Common Data menu. Go to <span class="ui_element" data-element="common_data">Common Data</span>. Next, click the <span class="ui_element" data-element="add_public_table">plus</span> beside the dataset called 'Populated Places'. CartoDB will import the dataset and direct you to the table when it is complete. Let's change the name of this table to `populated_places`.

Great, those are the two datasets we are now going to merge.

## Merge types

Go back to your dashboard again and enter your `world_borders` dataset. From the `world_borders` table, select the <span class="ui_element" data-element="options_menu">options menu</span> in the upper right. From there you are going to select the option <span class="ui_element" data-element="merge_tables_menu">Merge tables</span>. CartoDB is now going to give you two options for your merge, 'Column Join' and 'Spatial Join'.

### Column Join

A column join is useful in cases where you have two tables, each with the rows describing the same thing (e.g. `countries`) and you want to merge them row by row. It requires that a column in your first table contains values that match a column in your second table (e.g. `country names`, `iso codes`, etc).

### Spatial Join

A spatial join allows you to create a new table where values from your second table are merged together based on the geometry they intersect in your first table. This is great when you want to summarize all the points within a polygon.

## Customizing your merge

For this example, we are going to select 'Spatial Join'. You will now see your table, `world_borders` and a list of all the columns. Deselect all the columns by clicking the <span class="ui_element" data-element="merge_switch">switch</span> below the list of columns. Next, go through the list of columns and select only the columns we want in our final, merged, table. Let's select `area` and `name`.

Next, click the drop down to the right of the `world_borders` box. This should be a list of all other tables in your account. Since you just created the `populated_places` table, it should be near the top. Go ahead and select `populated_places`. Now, below the list of columns for `populated_places` is a list set of merge methods.

### COUNT

The `COUNT` method simply counts all the geometries in your second table that intersect a geometry in your first. For example, in our two tables, for `Spain`, it would count all the Spanish populated places and return the number for that row.


### SUM

The `SUM` method works a bit different. With `SUM` you will select a single column in your second table, it must be numeric. Next, CartoDB will add up all the values in that column from the second table where they intersect a geometry in the first table. Again, in our example, for `Spain` in the first table, it would add up all the values from `pop_max` in the second table and return that value.

### AVG

The `AVG` method works very similar to `SUM`, but instead measures the average value in the column from the second table.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/merging_data/img1.png' | prepend: site.baseurl }}" alt="spatial join" /></p>

Go ahead and select `SUM`. You'll see that your list of columns changed to now only let you select numerical columns, that is fine. Select the radio for `pop_max` in the list of `populated_places` columns.

  <h3 id="merging_tables">Merging your tables</h3>
Finally, press <span class="ui_element" data-element="merge_tables">Merge tables</span>. Create a name for your new table, for example <span class="code_variable">tutorial_merge</span>. When CartoDB is finished, you'll be taken to your new table. You'll notice it only has the columns from our first table that we selected and a new column, <span class="code_variable">intersect_sum</span>. That new column is the result of adding up all the `pop_max` for points that intersected geometries in our first table. The geometries for this new table will be the exact same as those from our first table, `world_borders`.

Congratulations, you successfully merged tables in CartoDB. For fun, go ahead and try mapping the values, try creating a choropleth from the <span class="code_variable">intersect_sum</span> column with the <span class="ui_element" data-element="style_option">Style option</span> on the right hand side and customize the look & feel of the map.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/merging_data/img2.png' | prepend: site.baseurl }}" alt="cloropeth" /></p>
