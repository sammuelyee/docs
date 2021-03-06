<!--<div style="font-size:12pt;color:magenta;">Writer Note_csobier: This include file is shared between the following two files:
* cartodb-editor.md (under the Heading=### Publish and Share Your Map)
* faqs.md. (under the Heading=## Sharing Maps)
</div>-->

#### How do I publish a map?
Once you visualize and publish a map, you can get a link to share the map, embed it to a website or blog, or add your map to another application. The Publish button is available from the Data View or Map View of your dashboard when a map is selected, and displays the following options.

<p class="wrap-border"><img src="{{ '/img/layout/common/publishbutton.png' | prepend: site.baseurl }}" alt="Publish button" /></p>

<p class="wrap-border"><img src="{{ '/img/layout/common/publishoptions.png' | prepend: site.baseurl }}" alt="How do I embed a map in my site/blog" /></p>

**Note:** You cannot publish a private map.  

- **Get the link**  
  Provides a URL to the map as it appears in your CartoDB public profile. 
  1. Select the URL from the *Get the link* field
  2. Copy and paste the link anywhere (email, social media, blog posts) to share the link
  
- **Embed it**  
  Provides HTML code to embed the map. 
  1. Select the embed code from the *Embed it* input field
  2. Click *Go to your map* to view how the embedded map appears and customize any of your iframe parameters as needed
 
  **Tip:** This is very useful for publishing interactive maps of your data on your website or blog. For example, you can insert CartoDB maps by including the iframe in the HTML code editor of WordPress, Joomla, and Drupal.
  
- **CartoDB.js**  
  Provides a URL to your viz.json file, which is required if you are using the CartoDB JavaScript library [CartoDB.js](http://docs.cartodb.com/cartodb-platform/cartodb-js.html) to publish maps in an external application.
  1. Select the URL from the "CartoDB.js" input field
  2. Copy and paste the link to your external application
  Optionally, click [Read More](http://docs.cartodb.com/cartodb-platform/cartodb-js.html) to view the CartoDB.js documentation.
  
#### How do I share a map?
You can enable the *Share options* icon to display on a published map. When your map is viewed from your public profile page, clicking the share icon enables you to share you map on social, media, get a link to the map, or embed it using HTML code. 

- Select *Share options* from the Options selector on a map. For more information about the Options selector, see [Displaying Map Options](http://docs.cartodb.com/cartodb-editor.html#displaying-map-options)

The following image displays an example of the share icon, and available options, from a public map.
  
  <p class="wrap-border"><img src="{{ '/img/layout/common/share_button_on_map.png' | prepend: site.baseurl }}" alt="Share options" /></p>