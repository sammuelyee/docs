---
layout: tutorials_item
title: 'Named Maps'
short_description: 'Make public maps with private data'
level: hard
time_needed: '20 minutes'
embed_url: ''
cartodbjs: true
---

## Summary

Named maps allow you to make public maps out of private data.

Named maps are made from a config file that is stored on the server and private data in your account.

## Loading data, making table private

To get started, we'll be using the Populated Places data found in Common Data. Copy the following link and [import it](http://docs.cartodb.com/cartodb-editor.html#importing-data) into your account:

{% highlight html %}
https://common-data.cartodb.com/api/v2/sql?q=select%20*%20from%20ne_10m_populated_places_simple&filename=ne_10m_populated_places_simple&format=shp
{% endhighlight %}

Once the data is imported, set it to `private` (see [privacy setting](http://docs.cartodb.com/cartodb-editor.html#table-privacy-settings) for more information).

Now that we have a private table to work from, we will create a map for it. It is easy to use the editor to quickly create a map, so I will create a map with the following configuration.

## Constructing config file

## Making basic named map

## Making interactive named map

## Managing named maps