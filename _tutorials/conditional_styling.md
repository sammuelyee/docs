---
layout: tutorials_item
title: 'Style maps based values in your table'
short_description: 'Features on your map can be displayed differently based on their values, learn how to do it'
level: medium
time_needed: '20 minutes'
embed_url: "//documentation.cartodb.com/viz/b206463e-ea44-11e2-8ee7-5404a6a683d5/embed_map?title=false&description=true&search=false&shareable=true&cartodb_logo=false&layer_selector=false&legends=true&scrollwheel=false&fullscreen=true&sublayer_options=1&sql=SELECT%20cartodb_id%2C%20the_geom_webmercator%2C%20count%2C%20'cholera'%20as%20layer%0AFROM%20cholera_deaths%0A%0AUNION%20ALL%0A%0ASELECT%20cartodb_id%2C%20the_geom_webmercator%2C%20NULL%20as%20count%2C%20'pump'%20as%20layer%0AFROM%20pumps&sw_lat=51.51063885098415&sw_lon=-0.14483928680419922&ne_lat=51.51606049455287&ne_lon=-0.1279306411743164"
materials:
  -
    url: 'http://www.r-bloggers.com/john-snow%E2%80%99s-famous-cholera-analysis-data-in-modern-gis-formats/'
    title: 'John Snow story in R-bloggers'
  -
    url: 'http://blog.rtwilson.com/updated-snow-gis-data/'
    title: "John Snow datasets in Robin's blog"
---

## Summary

At CartoDB we obviously love maps and nobody that really loves map can't tell you the story of John Snow. If you haven't heard of him, we highly recomment [reading a bit about his story](http://en.wikipedia.org/wiki/John_Snow_(physician)#Cholera) and how he changed maps and science. In a nutshell, he helped map an 1800s cholera outbreak that took place in London. By mapping the outbreak, he was able to identify a water pump that was the source of the bacteria causing the outbreak.

The data that is contained in his original map was recently coverted into digital formats; making it simple to get them into CartoDB. So let's try and create a CartoDB version of John Snow's famous map!

### Getting the data

We suggest you read the [blog post about the data](http://www.r-bloggers.com/john-snow%E2%80%99s-famous-cholera-analysis-data-in-modern-gis-formats/). Next, download the updated dataset [over here](http://blog.rtwilson.com/updated-snow-gis-data/) and unzip the file.

### Uploading shapefiles

We are going to upload two datasets from the John Snow data directory. The first is all the pumps in the neighborhood. The second is all the deaths reported due to cholera in the neigborhood. When you upload shapefiles, you need to be sure to upload all associated files at once, this can be done by creating a ZIP that contains each of them.

So, for the pumps, create a zipfile containing each of the following:

- `pumps.shp`
- `pumps.prj`
- `pumps.sbx`
- `pumps.shx`
- `pumps.dbf`
- `pumps.sbn`

Call the new zip file `pumps.zip`, for example.

Now, we will do the same with the cholera deaths. Select and create a zip of the following files:

- `cholera_deaths.shp`
- `cholera_deaths.prj`
- `cholera_deaths.sbx`
- `cholera_deaths.shx`
- `cholera_deaths.dbf`
- `cholera_deaths.sbn`

Again, call it something simple, like `cholera.zip` for example.

Let's start by dragging our `pumps.zip` file to your dashboard. You should end up with a table simply called `pumps`. Next, go back to your dashboard by clicking the <span class="ui_element" data-element="back_to_dashboard">back arrow</span> at the upper left of the screen. Now, drag your `cholera.zip` file to your dashboard. Great! You should now have a table called `cholera_deaths`.


## Mapping the cholera outbreak

You can start by looking through your new `cholera_deaths` table. You should see that we have a point geometry. Each point represents a household in the 1854 Soho neighborhood of London. If you look at your map, they may not match the modern day streets exactly, but still pretty neat! If you go back to your `cholera_deaths` <span class="ui_element" data-element="table_view">Table View</span>, you'll see also a column called `count`. This tells us how badly the outbreak it hit each household. This will be the value we want to use to style the map of our data.

Head back to your <span class="ui_element" data-element="map_view">Map View</span>. To make this data communicate the intensity of cholera in each household, let's make a thematic map. Click the <span class="ui_element" data-element="style_option">Style option</span> on the right of the screen. Take a look at the styles provided, if you mouse over them, you'll find one named <span class="ui_element" data-element="bubbles">Bubbles</span>, that's the one we'll use. Click it. Next, change the 'Column' drop down and select `count`. The map should update immediately as you click it. It still doesn't look the best. Improve it by doing each of the following:

- Change the Radius (min-max) to 1 to 8.
- Change the color, I choose one of the Red tones to help convey that these were bad!
- Change the opacity (the decimal number to the right of the color) to be 1, fully opaque.
- Changed the bubble stroke to 0.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/conditional_styling/img1.png' | prepend: site.baseurl }}" alt="cholera" /></p>

Cool, now we have the intensity of the outbreak mapped. What John Snow did that was so critical to this story, was he mapped the location of water pump stations as well. This gave him the ability to quickly identify a shared source and make the hypothesis that a pump was the source of the outbreak.

## Combining two layers with SQL

If you have done any of the other tutorials, you'll be familiar with this already. We are going combine the data from our `pumps` table and our `cholera_deaths` table in a single SQL statement. Try the following query:

{% highlight sql %}
SELECT cartodb_id, the_geom_webmercator, count, 'cholera' as layer
FROM cholera_deaths

UNION ALL

SELECT cartodb_id, the_geom_webmercator, NULL as count, 'pump' as layer
FROM pumps
{% endhighlight %}

After you run this, you will notice a difference in your map. What we are doing is selecting `the_geom_webmercator` from each table. From the `cholera_deaths` table we are selecting count so that we can base our bubble size on the value. When we `UNION` tables we must have the same columns in each table, so for the `pumps` table we have to include a fake `count` column with a value of `NULL` in every row. Finally, We included a column in the results for both tables that indicates a name for the layer the row belongs to. This technique is useful for CartoCSS styles, as you'll see now.

## Styling multiple layers at once

Now that we have our SQL running, we can edit our CartoCSS manually to show our pumps in an interesting way. Click the <span class="ui_element" data-element="style_option">Style option</span> again and then click on the <span class="ui_element" data-element="carto_tab">CartoCSS tab</span>. You'll see the style that CartoDB is using to create your bubble map. Now we can add a couple things to it to make it show our pumps data at the same time.

Scroll all the way to the bottom of the existing CartoCSS style. At the end, you are going to add these lines.

{% highlight scss %}
#cholera_deaths [layer='pump'] {
  marker-width: 15.0;
  marker-fill: #3399FF;
  marker-line-color: black;
  marker-line-width: 0;
  marker-opacity: 1;
  marker-placement: point;
  marker-type: ellipse;
  marker-allow-overlap: true;
}
{% endhighlight %}

What this does is, if the layer column (the one we created in the SQL statement above) contains the value `pump`, we are going to style it differently. After adding that to the very end of your CartoCSS style, hit <span class="ui_element" data-element="apply_style">Apply Style</span> and take a look!

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/conditional_styling/img2.png' | prepend: site.baseurl }}" alt="cholera & pumps" /></p>

## Sharing your map

Now you'll want to share your map. Like always, be sure that both your `pumps` table and your `cholera_deaths` table are public. From the current view on the map, click <span class="ui_element" data-element="share">Share</span>. At the bottom of the Share window click <span class="ui_element" data-element="share_url">URL</span>, then click the <span class="ui_element" data-element="copy_to_clipboard">clipboard icon</span>, head on over to Twitter and tell people about the awesome maps you are making!
