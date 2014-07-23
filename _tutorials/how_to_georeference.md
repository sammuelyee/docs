---
layout: tutorials_item
title: 'Georeferencing on CartoDB'
short_description: 'Learn how to turn text descriptions (addresses, cities or country names) into mappable coordinates.'
level: basic
time_needed: '10 minutes'
embed_url: '//documentation.cartodb.com/viz/bfed8944-e97f-11e2-958c-5404a6a683d5/embed_map?title=false&description=false&search=false&shareable=false&cartodb_logo=false&layer_selector=false&scrollwheel=false&sql=&zoom=3&sw_lat=41.064856932068835&sw_lon=-73.992919921875&ne_lat=41.44478523154319&ne_lon=-72.3724365234375&height=300&id=cartodb-1373474835704'
---

## Summary

Sometimes you will find data that you want to map but it doesn't contain coordinates; perhaps it only has street addresses or city names. In these cases, CartoDB can help you by turning the named places into best guess of latitude-longitude coordinates. The process of converting the textual descriptions into coordinates is called, georeferencing. Let's try it!

## Preparing the data

For this tutorial we are not going to use any external dataset, but instead are going to make one up. On your CartoDB dashboard, click <span class="ui_element" data-element="new_table">Create a new table</span>. Next, click 'Start from scratch'. Finally, click 'Create table'. After CartoDB has finished preparing your table you will be taken to it.

You'll notice that it is completely empty but has a few columns. Let's start by changing the names of two of the columns. Double-click the column name `description`. You will see that now it is editable. Change it to `state`. Next, double-click the column named `name` and change it to `city`. Great, now let's add some fake data.

<p class="wrap-border"><img src="{{ '/img/layout/how_to_georeference/img1.png' | prepend: site.baseurl }}" alt="Columns" /></p>

You can manually enter or update data in your CartoDB account very easily. First, click the <span class="ui_element" data-element="empty_row">empty row</span> below the column names. CartoDB will add an empty column for you. Next, double-click the empty cell directly below the column named `city`. You will be given an <span class="ui_element" data-element="input_dialog">input dialog</span> where you can change or insert a new string. Add `Bridgeport` and click 'Save'. Double-click the empty cell in the same row, underneith the column `state`. Add `CT` and click 'Save'.

<p class="wrap-border"><img src="{{ '/img/layout/how_to_georeference/img2.png' | prepend: site.baseurl }}" alt="Informed columns" /></p>

## Georeference your data

To turn this new row into a geometry, we will georeference it. To start, click the <span class="ui_element" data-element="georeference">Georeference</span> link in the dropdown under the options menu in the upper-right of the screen. The selected option is to turn longitude and latitude values into `the_geom`. You can use this if you import data where the columns weren't automatically detected and converted to `the_geom`. In this example though we are going to use the second option, 'I have one or more columns with the address'. After clicking the option, you will see an input dialog for telling CartoDB what to georeference.

<p class="wrap-border"><img src="{{ '/img/layout/how_to_georeference/img3.png' | prepend: site.baseurl }}" alt="Georeference dialog" /></p>

The dialog asks for a georeferencing pattern. CartoDB can take a combination of one or more column names and strings. You declare the column you want to use by putting the column name in curly brackets, like:

{% highlight sql %}
{address}
{% endhighlight %}

In our case, we will combine our two columns with a comma between them:

{% highlight sql %}
{city}, {state}
{% endhighlight %}

We can also be more specific by adding an unchanging sting, say the country:

{% highlight sql %}
{city}, {state}, USA
{% endhighlight %}

Now, CartoDB will go through each row in your table and create a string using the pattern you entered. So for the fake data we added to our table it would substitute the parts in `{}` for the values in the row. The result would be:

{% highlight sql %}
Bridgeport, CT, USA
{% endhighlight %}

Next it would try to find the coordinates of this location. With `{city}, {state}, USA` entered in the input field, click 'Georeference'. CartoDB will add a new column, `cartodb_georef_status`. This column is useful to keep track of the success and failure of the georeferencing job. A value of `false` will be entered for any row where coordinates could not be found. In our case, it should have succeeded without any problem and our single row will now have a valid `the_geom`. If you click <span class="ui_element" data-element="map_view">Map view</span> you can now see your point on the map!

<p class="wrap-border"><img src="{{ '/img/layout/how_to_georeference/img4.png' | prepend: site.baseurl }}" alt="Resulting map" /></p>

Try to repeat the process with several different rows in your table, or on a dataset without any geospatial information but a country name.
