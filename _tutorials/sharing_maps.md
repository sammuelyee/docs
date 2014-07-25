---
layout: tutorials_item
title: 'Customizing, sharing, and embedding your maps'
short_description: 'An overview of infowindows, map descriptions, basemaps and map publishing.'
level: basic
time_needed: '10 minutes'
embed_url: 'http://documentation.cartodb.com/viz/ef933ce8-e9ca-11e2-98b0-5404a6a683d5/embed_map?title=false&description=false&search=false&shareable=false&cartodb_logo=false&layer_selector=false&scrollwheel=false&sql=&zoom=3&center_lat=50.064191736659104&center_lon=21.62109375&height=300&id=cartodb-1373506926952'
---

## Summary

This tutorial will walk you through many basics of publishing data with CartoDB. It is meant for beginners looking to get started using the platform but are uncertain where to begin. It is also a good tutorial to read through if you just want to know some basic functionality when you are getting started.

After you have finished creating your map it is time to share it. This is one of the best things about CartoDB, we make it very easy. Here we are going to show you how you can rename your maps, add descriptions, create visualizations, customize infowindows, and share your maps with the world.

## Example data

For this tutorial, we are going to use a dataset of populated places.

To load the data into your account, go to your CartoDB dashboard and select <span class="ui_element" data-element="common_data">Common data</span> in the top menu. In the dataset list, scroll down to the entry `Populated places` and click the <span class="ui_element" data-element="add_public_table">plus symbol</span> to the right of this element. The table will load and you should be redirected to the newly loaded data in your account. Click <span class="ui_element" data-element="map_view">Map view</span> to check the look of the dataset in the map.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharing_maps/img1.png' | prepend: site.baseurl }}" alt="Basic map" /></p>

## Changing the name of your map

Right now, your table should be named something similar to `ne_10m_populated_pla` To change the name of your table in CartoDB, make sure you are in the <span class="ui_element" data-element="table_view">Table View</span> and click <span class="ui_element" data-element="table_name">the table name</span>. You should be given an input field where you can modify the name. Change it to `Populated places`, click 'Save' and read and accept the dialog that pops-up. Your table should now be updated.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharing_maps/img2.png' | prepend: site.baseurl }}" alt="Changing name" /></p>

You'll notice though that it has changed from what you entered, it will now be called `populated_places`. This is because CartoDB table names must be in lowercase and spaces will be replaced by underscores (as will many non-alphanumeric characters). This is fine but worth remembering. The new name will change the way your SQL statements, URLs, and Maps API calls will be made, so try to settle on a name for new tables early in your development process.

## Adding a description

It can be very helpful to add a description to your tables, both for your own use and for displaying to others. You can add a description to any table by clicking <span class="ui_element" data-element="add_description">Add a description for this table...</span> link found besides the table name. Try it on your new `Populated places` table by clicking the link and entering `Populated places of the world for CartoDB tutorial`.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharing_maps/img3.png' | prepend: site.baseurl }}" alt="Change description" /></p>

Great, you should now have a description for your table, we'll see this again when we start working with embedded maps.

## Adding tags

Tags are really useful ways for organizing and searching data on your CartoDB account. As the number of tables in your account grows, you can use tags to find all the tables in a project you are working on, or in some cases you can tag tables in a way so you know not to modify them (e.g. `published`) or where they are live (e.g. `blog.cartodb.com`)

To add tags to this table click <span class="ui_element" data-element="add_tags">Add tags</span> directly below your table description. You can add any number of tags here by placing a comma between each tag. Try adding `tutorial`, `adding tags`, `cupcakes`, and hit 'Save'. You'll see that each time you hit comma the new tag will be made into a unit that you can delete at any time.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharing_maps/img4.png' | prepend: site.baseurl }}" alt="Adding tags" /></p>

In your CartoDB dashboard, tags will be listed to the right of your table names, and by clicking any one of these tags you can filter tables to show only the ones that have been tagged in the same way.

## Customizing your infowindow pop-ups

In your `Populated places` table, click <span class="ui_element" data-element="map_view">Map view</span>. This is where you can customize the look and feel of your data. If you click any of the points on your map, you should see a basic infowindow. We can now tell CartoDB which fields from the table we want displayed.

On the right side of the map you will see three icons. From top down they are the <span class="ui_element" data-element="sql_option">SQL option</span>, the <span class="ui_element" data-element="style_option">Style option</span>, and the <span class="ui_element" data-element="infowindow_option">Infowindow option</span>. Click the third one. CartoDB gives you several options for the general look of your infowindows. You can explore these by clicking the <span class="ui_element" data-element="infowindows_theme">Theme dropdown</span>. Go ahead and select 'Header orange'. At the bottom of the list of fields, click the toggle to turn all fields off. Next, click the toggle beside <span class="code_variable">name</span> and `pop_max` to turn them on. You can check or uncheck <span class="code_variable">title</span>. If it is checked, a label is given for the field. If not, just the value is given.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharing_maps/img4b.png' | prepend: site.baseurl }}" alt="Customizing infowindow" /></p>

## Changing the baselayer

The baselayer is an important component of all of your maps. We offer several default layers for you to choose from or if you host your own elsewhere you can add it to your account. Here we will use one of the default baselayers. Let's use a darker background. Click the <span class="ui_element" data-element="change_baselayer">baselayer selector</span> above the map to see previews of the available baselayers. Select the one named `GMaps Dark`. Your map will be updated to use this layer as the basemap. It will be included in all shared and embedded versions of your map. You can add your own basemaps, too.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharing_maps/img5.png' | prepend: site.baseurl }}" alt="Changing baselayer" /></p>

## Visualize your map

When you want to visualize different datasets or just share the map, you must create a visualization. Visualizations are where you will set and store all the filters and styles that you want to use in your published maps. Visualizations also let you add layers from multiple maps, mixing the data without having to write any complex code or queries. They also let you reuse data from the same tables in multiple visualizations without any difficulty. To get started with visualizations, click the orange <span class="ui_element" data-element="visualize">Visualize</span> button on the top right of the page. You will be prompted to add a name for your visualization, don't worry, you will be able to change it later.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharing_maps/img7.png' | prepend: site.baseurl }}" alt="visualize map" /></p>

Visualizations are similar to tables, you can quickly tell them apart by looking at the icon beside the <span class="ui_element" data-element="table_name">table name</span> and the <span class="ui_element" data-element="visualization_name">visualization name</span> in the <span class="ui_element" data-element="table_view">Table View</span>. Now that you have created your visualization, it will be available on your dashboard.

## Publish your map

Now that you have a Visualization just the way you want it, let's share it with some friends. Click the green <span class="ui_element" data-element="publish">Publish</span> button in the top right of the page. From here you can customize how your published map is presented, including zoom and center, which interface elements to display, toggling layers, social media links, etc. At the bottom you will find a URL to share your Visualization via Twitter, email, or anywhere else. When you share that link, viewers will only be able to explore it on the map, they will not be able to edit any of your data. For more details, take a look at next tutorial.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharing_maps/img6.png' | prepend: site.baseurl }}" alt="Shared map" /></p>

One thing you'll notice is that the name and description you entered earlier are now displayed above the map. This is great because it means the people you share the link with can read about the map they are viewing. If you want to change these options, you can toggle them on/off in the Embed dialog. Play with the different options to check the effect in your public map: show or hide elements, add search and sharing features, customize scrollwheel zooming, etc.

## Embedding your map in a webpage

If you want to embed the map in a blog post or web page, you can also use the embed option CartoDB provides. In the same Publish window, click <span class="ui_element" data-element="share_embed">Embed</span>.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharing_maps/img7.png' | prepend: site.baseurl }}" alt="Embed map" /></p>

Now click the <span class="ui_element" data-element="copy_to_clipboard">clipboard icon</span> at the right. The string is now copied to your clipboard. You only have to paste it in your blog or website HTML code, inside the `BODY` tag. That's all!
