---
layout: tutorials_item
title: 'Real-time map with CartoDB sync tables'
short_description: 'Learn how to create a real-time map by syncing shapefiles'
level: medium
time_needed: '10 minutes'
embed_url: '//player.vimeo.com/video/78298157?title=0&amp;byline=0&amp;portrait=0'
video: true

## Summary

In this tutorial we’ll show you how to create a map that stays updated with live data. Synced tables let you import data that lives online in any of our [supported file formats](http://docs.cartodb.com/cartodb-editor.html#supported-file-formats) via a URL, including files from DropBox or Google Drive. Once the dataset has been created in your CartoDB account it syncs with its datasource periodically. You specify whether it updates every hour, day, week or month (or never). When the data changes on the external site, your CartoDB map will update to show those changes live!

## Tips
+ To have synced tables automatically geocoded, make sure they contain either a country column, a latitude column and a separate longitude column, or a column of IP addresses.

+ Synced tables can only be directly edited while disconnected from their datasource, but you can use SQL to manipulate the dataset while it’s connected. For example, you can write a SQL statement that changes a column’s data type from string to number, so it can be used to create a Choropleth map.

+ You can either create synced tables through the CartoDB Editor, or through our import API.
---
