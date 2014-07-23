---
layout: tutorials_item
title: 'Map election results'
short_description: 'Create and style a map to show variation in voting in a presidential election'
level: basic
time_needed: '10 minutes'
embed_url: '//documentation.cartodb.com/viz/912cdb94-e986-11e2-958c-5404a6a683d5/embed_map?title=false&description=true&search=false&shareable=true&cartodb_logo=false&layer_selector=false&legends=true&scrollwheel=false&fullscreen=true&sublayer_options=1&sw_lat=42.89206418807337&sw_lon=-72.36968994140624&ne_lat=43.26120612479979&ne_lon=-70.74920654296875'
materials:
  -
    url: 'http://projects.iq.harvard.edu/eda/data?dvn_subpage=/faces/study/StudyPage.xhtml?globalId=hdl:1902.1/16219&studyListingIndex=12_3643e60d8277429cf0ef2e3af640'
    title: 'New Hampshire electoral data'
  -
    url: 'http://colorbrewer2.org'
    title: 'Color Brewer 2'
---

## Summary

This tutorial will walk you through a set of basic steps that can help you build fairly advanced maps with CartoDB.

## Data sources

We are going to build this map with data from a great website of United States elections: [the Harvard Election Data Archive](http://projects.iq.harvard.edu/eda/). Although there is a lot available, let's focus on the [New Hampshire data](http://projects.iq.harvard.edu/eda/data?dvn_subpage=/faces/study/StudyPage.xhtml?globalId=hdl:1902.1/16219&studyListingIndex=12_3643e60d8277429cf0ef2e3af640). In particular, download the `nh_shapefile.zip` available under 'Data & Analysis' tab.

To understand the data it is often helpful to look at metadata. In this case, [go back to the website](http://projects.iq.harvard.edu/eda/data?dvn_subpage=/faces/study/StudyPage.xhtml?globalId=hdl:1902.1/16219&studyListingIndex=12_3643e60d8277429cf0ef2e3af640), download the `NH-Notes.rtf` file and have a look in a text-editor. The metadata file will tell you about all the columns and information contained in the downloaded file. It tells us is that the column `p_08` is the Democratic vote share for the presidential race in 2008. This is what we need to make an interesting map.

## Map the average Democrat share

After `nh_shapefile.zip` file is downloaded, drag and drop it on to your CartoDB dashboard for upload. After some seconds CartoDB will show you the <span class="ui_element" data-element="table_view">Table view</span> of the data. Check the column `p_08`, the one that contains the Democratic vote share.

<p class="wrap-border"><img src="{{ '/img/layout/electoral_map/img1.png' | prepend: site.baseurl }}" alt="Table view" /></p>

Click on <span class="ui_element" data-element="map_view">Map view</span> and you should see basic outlines of the New Hampshire counties.

<p class="wrap-border"><img src="{{ '/img/layout/electoral_map/img2.png' | prepend: site.baseurl }}" alt="Map view" /></p>

## Thematic map of results

Let's create a simple choropleth of this data. Click the <span class="ui_element" data-element="style_option">Style option</span> on the right. Scroll through the thematic map previews, you'll see the one for <span class="ui_element" data-element="cloropeth">Choropleth</span> (shapes filled with varying colors). Click it.

Below the box you clicked, change Column to `p_08`. For Buckets, choose '5 Buckets', and don't change the quantification method for the moment. For a color ramp, choose any for now. Take a look at your map. Getting closer!

<p class="wrap-border"><img src="{{ '/img/layout/electoral_map/img3.png' | prepend: site.baseurl }}" alt="Cloropeth view" /></p>

## Customizing thematic maps

Although CartoDB makes it simple to create thematic maps, we also give you the flexibility to tweak those styles after you have selected them. The map we have created looks okay, but a linear color ramp isn't normal for this data. What the data is showing is anything greater than 0.5 in the `p_08` column was primarily Democrat votes, less than 0.5 indicates mostly Republican votes. Ideally, we could have a diverging scale using the more familiar Red/Blues.

One great source for finding basic color scales good for mapping is [Color Brewer 2](http://colorbrewer2.org/). From ColorBrewer, I've selected a diverging ramp of 5 colors. From red to blue, `#0571B0`, `#92C5DE`, `#F7F7F7`, `#F4A582` and `#CA0020`

### Manually Editing CartoCSS

Click the <span class="ui_element" data-element="carto_tab">CartoCSS option</span> in the toolbar. This takes you to your CartoCSS editor. Notice the <span class="ui_element" data-element="undo_redo">Undo/Redo buttons</span>  in the lower left. Feel free to play around. Colors on the map are coded in hexidecimal, so `#FFFFFF` is white and `#000000` is black. If you aren't familar with this, we recommend you do a bit of playing around and reading online. We are going to just paste in the cited 5 new colors to start, replacing each hex with the ones we got from ColorBrewer above, and then press <span class="ui_element" data-element="apply_style">Apply style</span> button.

<p class="wrap-border"><img src="{{ '/img/layout/electoral_map/img4.png' | prepend: site.baseurl }}" alt="Customized colors" /></p>

This is still wrong, we have incorrect bins. You'll notice that our colors don't include the far ends of the spectrum, near 1. So, lets edit the bins to be <=1, <=0.6, <=0.52, <=0.48 and <=0.4 (most red), and hit  <span class="ui_element" data-element="apply_style">Apply style</span>.

<p class="wrap-border"><img src="{{ '/img/layout/electoral_map/img5.png' | prepend: site.baseurl }}" alt="Fixed buckets" /></p>

Not perfect yet: the white in the areas that are split is too bright compared to the rest. Change the color after `<=0.52` to `#EEEEEE`.

<p class="wrap-border"><img src="{{ '/img/layout/electoral_map/img6.png' | prepend: site.baseurl }}" alt="Fixed middle bucket" /></p>

Great, now you have a nice looking election map!
