---
layout: tutorials_item
title: 'Add CartoDB maps to Microsoft Sharepoint sites'
short_description: 'Put a CartoDB visualization on your Sharepoint site in just a few seconds.'
level: basic
time_needed: '10 minutes'
video: false
---

## Summary

Maps can be important to your business and convey key information like the locations of employees, suppliers, or business activities. For many businesses, Microsoft Sharepoint is also a key location for business information. This tutorial shows how you can easily put a published CartoDB visualization on your Sharepoint site.

First, create a CartoDB visualization you want to embed in your Sharepoint website and copy its embed code.

Then, [login to Sharepoint](https://portal.office.com/Home) and go to the Sharepoint site you'd like to add your a map to. This might be a URL like https://yourOrgName-public.sharepoint.com/. Hit the "Page" tab, and hit the "Edit" button on the far left to enable editing mode and the editing tab.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharepoint/img1.png' | prepend: site.baseurl }}" alt="Edit button" /></p>

Place your cursor at the point in the page where you would like the map to appear. Then go to the "Insert" tab, and hit the "Embed Code" button on the far right of the tab.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharepoint/img2.png' | prepend: site.baseurl }}" alt="Insert tab" /></p>

A popup will appear with a place to paste the Embed code from your CartoDB visualization. You should paste your visualization's embed code in this box.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharepoint/img3.png' | prepend: site.baseurl }}" alt="Embed box" /></p>

However, because most Sharepoint websites use HTTPS, take care to change the 'src' URL of your visualization's embed code to HTTPS. If you publish your new Sharepoint page and notice the map is not there, you likely forgot to make this change. Also, you may want to consider changing the 'width' and 'height' attributes of your visualization's embed code from their defaults. We found a width of 600 and a height of 520 to work well in the body of the Sharepoint page template we had enabled. You should see a preview of your embedded map below the embed box. When it looks good, hit the "Insert" button to embed your CartoDB visualization in the page.

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharepoint/img4.png' | prepend: site.baseurl }}" alt="HTTPS fix and preview" /></p>

When you're ready to publish your Sharepoint page with your new map, go back to the "Format Text" tab and hit the "Save and Publish" button. Now all your colleagues can see the new CartoDB map you created on your Sharepoint page!

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/sharepoint/img5.png' | prepend: site.baseurl }}" alt="Save and publish" /></p>

