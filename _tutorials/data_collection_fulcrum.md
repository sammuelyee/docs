---
layout: tutorials_item
title: 'Mobile data collection and visualization with Fulcrum and CartoDB'
short_description: 'Create custom mobile apps for data collection on the ground, and sync to CartoDB to have a real time visualization'
level: medium
time_needed: '15 minutes'
embed_url: '//player.vimeo.com/video/102835991?title=0&amp;byline=0&amp;portrait=0'
video: true
---
## Why mobile data collection?
There are many instances in which you may not have the data you need already neatly collected. You need to go out in to the field and collect geospatial data that you wish to map later. This could be locations of potholes or stores, individual surveys, or routine recordings of weather conditions in different areas. Everyone from aid workers interested in the needs of a community, to surfers sharing surf conditions in different locations can leverage this kind of live data collection and recording. [Fulcrum](http://fulcrumapp.com/features/) is a platform that allows you to collect data in exactly this way. It enables you to create a survey, take it in to the field, record conditions, take photos, and input many data types. You can then use Fulcrum with CartoDB to create powerful, live-updating visualizations.

## What is Fulcrum?

[Fulcrum](http://fulcrumapp.com/features/) is a powerful mobile data-collection platform. Once you create an account, Fulcrum allows you to design detailed custom Apps (a.k.a. forms or surveys) to use in your data collection. In the [Fulcrum app designer](http://fulcrumapp.com/manual/app-designer/), you can select from many different field/question types in order to create the specific app you need. Fulcrum supports the collection of geospatial information and pictures, in addition to standard data types like numbers, dates, and strings. Once you have created an app you are happy with, Fulcrum allows you to input data from the field directly in to your iPhone or Android mobile device.

Data collected using Fulcrum can be used in CartoDB to make dynamic maps with a wealth of data, and even images. This tutorial will show you how!

## Creating a survey
To get started, create an an app in your Fulcrum account. The Fulcrum interface is easy to get a hang of, and they have a wealth of resources to help you. Check out the [guide to using the app builder](http://fulcrumapp.com/guides/using-the-app-builder/), or read [the app-designer manual](http://fulcrumapp.com/manual/app-designer/).

You can select any topic you wish to map, and Fulcrum has a number of interesting examples for you to take a look at. For our example, we created an app to document graffiti around the Lower East Side in New York City. To do this, we created an app with a text field, date field, picture upload, and multiple choice field, like you see below:

![Imgur](http://i.imgur.com/I0fZ8Zn.png)

As you select your fields, questions, and App structure, think about how the data will be used in your CartoDB visualization. Each question will have its own column in your data table, and every data record you enter will populate its own row.

## Adding Data to your App
In order to populate your App with field-collected data, it's time to take it to the field. Go ahead and [download the Fulcrum smartphone app](http://fulcrumapp.com/mobile/getting-started/) and log-in with your Fulcrum account. If you have any questions as you get started on your mobile phone, Fulcrum as documentation for [iPhone](http://fulcrumapp.com/mobile/ios/) and [Android](http://fulcrumapp.com/mobile/android/) devices.

Once you log in to the app, you will be able to view the Fulcrum Apps you have created. You can navigate to the App you are populating with data, and click on the fields to input your information. Fulcrum will automatically associate a GPS location with the data, but you can edit this by clicking the crosshair icon. Leanr more about how to do this by reading their location documentation for [iPhone](http://fulcrumapp.com/mobile/ios/record-location/#postclick) and [Android](http://fulcrumapp.com/mobile/android/record-location/#postclick) devices.

To gather our data, we took a walking tour of the Lower East Side, a neighborhood in New York City, creating a new record for every graffiti piece we saw. We added photos to each record, and double-checked the location information as we went along.

## Data Shares & Linking to CartoDB
Once you have your data in to Fulcrum, you have a few options to start using your data outside of Fulcrum. The first we will discuss is the data share functionality.

Data shares allow you to link your Fulcrum app (and therefore the data it collects) with your CartoDB account very easily. You can read more about what Fulcrum's data shares by checking out the [data shares manual information](http://fulcrumapp.com/manual/data-shares/) or by checking out the documentation for [developers using data shares](http://fulcrumapp.com/developers/data-shares/). To get started, you will need to make sure that your account in Fulcrum has data shares enabled (read more about [enabling data shares here](http://fulcrumapp.com/manual/data-shares-enable-share/)).

Once you have built your app, collected data, and have data shares all set up, you can start using data shares for the specific app you want by navigating to your list of apps and clicking the globe icon to the right of the app name.

![Imgur](http://i.imgur.com/KpOeW9s.png)

On the screen that appears, click "Enable Data Share." The URL on the next screen is a live link to the data collected by that particular app. You can use it with CartoDB's sync feature to have a real-time map of your data.

Take a look at [this tutorial example](http://docs.cartodb.com/tutorials/realtime_maps_sync.html) to learn more about the sync option in CartoDB. For now, to set up the sync, navigate to your tables dashboard in CartoDB and click the "+" to create a new table. In the field that appears, paste the URL from  the Fulcrum app for which you enabled data share. You can choose how often your data syncs, and then can get started in customizing your map vizualization.(Note that each time you disable and re-enable your data share, it will generate a new link. This is important if you have the sync set up and would like to keep it live.)

## Downloading your data
If you do not have the sync function on your CartoDB account, or if you don't need your data to automatically sync, you also have the option to export your data from Fulcrum and upload it to CartoDB manually. To do this, just click the down arrow and download your data in your file of choice.

![Imgur](http://i.imgur.com/u7RPLe2.png)

Once your data downloads, you can upload to CartoDB from your tables dashboard by clicking the "+" to create a new table and upload your file; you can also drag and drop your file in to your dashboard window.

## Creating your Visualization

For this next segment, we will show you how to take data you've collected with Fulcrum and map it using CartoDB. If you haven't collected any data yet, or if you haven't set up the data share, go ahead and upload our our dataset on Graffiti in the Lower East Side in New York to your CartoDB dashboard. You can find the data here: [Data](https://osm2.cartodb.com/api/v2/sql?q=SELECT%20*%20FROM%20graffiti_on_the_les&format=CSV)

For our visualization, we were most interested in displaying the images that our dataset collected. To do this, we set up infowindows that display the pictures of graffiti that we collected. Follow along with the video or text below to learn how.

The way Fulcrum works with pictures, is that it gives each photo a unique picture ID. This can be found in the "picture" column in our data. In order to call or reach a picture, you need the data share URL with "/photos/" appended to it (in the place of the file ending), and then the photo ID. Therefore, each unique picture URL would look something like this:

```
https://web.fulcrumapp.com/shares/{{your share ID}}/photos/{{unique picture ID}}
```

With this in mind, we went ahead and created infowindows that feature each picture we took. Since the table is read-only (as it is syncing with Fulcrum), the easiest way to link directly to the picture is to build a custom infowindow in our infowindow wizard. We kept it simple, and built it so that each on-click infowindow featured our picture, and a click of the image would take you to the image in a separate window. Our HTML looked like this:

{% highlight html %}
<div class="cartodb-popup v2">
  <a href="#close" class="cartodb-popup-close-button close">x</a>
  <div class="cartodb-popup-content-wrapper">
    <div class="cartodb-popup-content">
      <p><a href="https://web.fulcrumapp.com/shares/ac8d04babb8279c0/photos/{{picture}}" target="_blank" title="Click to view full size"><img width="226px" src="https://web.fulcrumapp.com/shares/ac8d04babb8279c0/photos/{{picture}}"></a></p>
    </div>
  </div>
  <div class="cartodb-popup-tip-container"></div>
</div>
{% endhighlight %}

Notice that the HTML above is based on a simple infowindow, and that it builds the picture URL inline using {{picture}} to call the column containing each unique picture ID. Our URL, then, looks like this:
```
https://web.fulcrumapp.com/shares/ac8d04babb8279c0/photos/{{picture}}
```

Once you click "Apply," this will work so that each pop-up infowindow contains a picture and links to a full-size version. Check it out below.
![Final Version](http://i.imgur.com/UBmxKdG.png?1)

This is just one quick example of what Fulcrum and CartoDB can be used to create. We would love to see the examples you come up with!
