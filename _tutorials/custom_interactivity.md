---
layout: tutorials_item
title: 'Custom interactivity'
short_description: 'Basics of adding infowindows to your client-side maps with CartoDB.js'
level: medium
time_needed: '10 minutes'
embed_url: 'http://cartodb.github.io/cartodb.js/examples/tutorials/tutorial-2.html'
cartodbjs: true
---

## Summary

If you have mastered the [basics of making maps with CartoDB.js]({{ '/tutorials/create_map_cartodbjs.html' | prepend: site.baseurl }}), it's now time to start doing more interesting things. Here we will show you how to register click events to data on your maps, and then how to create infowindows using click-events and data contained in your CartoDB tables.

## Getting started

[In the basic CartoDB.js tutorial]({{ '/tutorials/create_map_cartodbjs.html' | prepend: site.baseurl }}) we built a basic point map. You can continue this tutorial using the same file we developed last time. If you skipped that tutorial, you can use the `tutorial-1-finished.html` file contained in the [tutorial zip file](http://cartodb.s3.amazonaws.com/static/tutorial_files/cartodbjs_tutorial_create_map.zip). Whichever way you get started, make a copy of your file and call it `tutorial-2.html`. This new file will be the one we use for the rest of this tutorial.

## Custom infowindows

If you click on any of the dots on your map, you may find that infowindows are already drawn. Infowindows can be set in your CartoDB dashboard and are passed through the Viz JSON. If you don't want the ones set on CartoDB you can easily create custom ones. The CartoDB.js library comes with shortcuts to help you design your own infowindows painlessly. Once you have the basic HTML for the content of your infowindow defined, the rest is a breeze.

## Infowindow templates

A common way to define the content is through the use of templates. For a discussion of how or why these are used, we suggest reading over [this StackOverflow thread](http://stackoverflow.com/questions/4912586/explanation-of-script-type-text-template-script) and some of the links within the post. For now, you'll need to add a template to your `tutorial-2.html` file. Add the following directly below the closing style tag:

{% highlight html %}
<script type="infowindow/html" id="infowindow_template">
  <div class="cartodb-popup">
    <a href="#close" class="cartodb-popup-close-button close">x</a>
     <div class="cartodb-popup-content-wrapper">
       <div class="cartodb-popup-header">
         <img style="width: 100%" src="http://cartodb.com/assets/logos/logos_full_cartodb_light-5ef5e4ff558f4f8d178ab2c8faa231c1.png"></src>
       </div>
       <div class="cartodb-popup-content">
         <!-- content.data contains the field info -->
         <h4>City: </h4>
         <p>{{content.data.name}}</p>
       </div>
     </div>
     <div class="cartodb-popup-tip-container"></div>
  </div>
</script>
{% endhighlight %}

This is basically HTML stored in a script tag. It also has a template value, `{% raw %}{{content.data.name}}{% endraw %}`. Just like how we used `{% raw %}{{table_name}}{% endraw %}` in the previous tutorial, this value will be swapped out by values from the objects we click in our maps. You can use any HTML markup for your infowindows, but you'll have to define the CSS for how it will look. The HTML used here is designed to use CSS contained inside the `cartodb.css` file we include.

## Passing templates to CartoDB.js layers

Next we'll need to tell our layer to use our custom template for infowindows. Within the code where we define our CartoDB layer, locate the line where we add the layer. Directly below that line add the following:

{% highlight javascript %}
var sublayer = layer.getSubLayer(0);

sublayer.infowindow.set('template', $('#infowindow_template').html());
{% endhighlight %}

This is pulling the HTML template we created above and passing it to the sublayer for use. Save your `tutorial-2.html` file and refresh the page, you should see your new infowindows.

{% highlight javascript %}
cartodb.createLayer(map, layerUrl, layerOptions)
.addTo(map)
.on('done', function(layer) {
  // get sublayer 0 and set the infowindow template
  var sublayer = layer.getSubLayer(0);

  sublayer.infowindow.set('template', $('#infowindow_template').html());
}).on('error', function() {
  console.log("some error occurred");
});
{% endhighlight %}

## Registering click events

With CartoDB maps and many others mapping tools, interactivity is very important. In CartoDB maps we handle it by using click events, so when a object on your map is clicked we perform an action. In CartoDB.js you can add click events at the same time you create your new CartoDB layer. Change the `createLayer` portion of the code to look like this:

{% highlight javascript %}
cartodb.createLayer(map, layerUrl, layerOptions)
  .on('done', function(layer) {
  // get sublayer 0 and set the infowindow template
  var sublayer = layer.getSubLayer(0);

  sublayer.infowindow.set('template', $('#infowindow_template').html());

  sublayer.on('featureClick', function(e, pos, latlng, data) {
    alert("Hey! You clicked " + data.cartodb_id);
  });
}).on('error', function() {
  //log the error
});
{% endhighlight %}

Save the file and refresh your map. You should find that an alert is issued if you click one of the markers. You might also notice that an infowindow is drawn after you close the alert. Instead of loading an alert you could load new page content, redirect a user to a different page, or add any range of functions.
