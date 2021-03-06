<!--<div style="font-size:12pt;color:magenta;">Writer Note_csobier: There are several include files for the CartoCSS topic: I am leaving as a comment so that I can apply to new file structure, when the Docs repo is updated. For now, everything is dumped as an include file in the bottom on the cartodb-editor.md file.
*cartocss.html - This include file contains an overview of CartoCSS and how to access the CartoCSS Editor.

* cartocss_properties.html - This include file contains all the mapbox parameters for cartocss. This will be the living document for CartoCSS parameters. I also notified product to update the link in the UI (issue#1234). The UI should point to this section as a reference for CartoCSS.

* cartocss_torque.html - This include file contains all the CartoCSS torque specific content.

* cartodb-editor.md, I removed the old heading "Torque CartoCSS" and added a note at the end of the include file, (cartocss_properties.html) to link to the Torque CartoCSS content.

* faq.md, under the heading=
- Create links/include files for existing content in cartodb-platform / home page (IF cartocss.md file structure  happens. Should this be an .md file, not an html file?)
- Create links/include files for existing content in cartodb-platform / cartodb.js page
- Create links/include files for existing content in cartodb-platform / maps api page

Other original resource materials:
https://github.com/mapbox/carto/blob/master/docs/latest.md
http://ebrelsford.github.io/talks/2014/Methods3/week7/materials/cartocss-reference.pdf
https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Transformations
</div-->

<!--<div style="font-size:12pt;color:magenta;">Writer Note_csobier: Docs/issue#3959, ##### Styling Maps with CartoCSS
</div>-->

#####Apply CartoCSS with the CartoCSS Editor
The CartoCSS option is available from the CartoDB sidebar, and opens the CartoCSS Editor. The CartoCSS Editor enables you to apply CartoCSS styling directly from the selected map view.

1. Click *Your maps* from your dashboard drop-down menu

	<p class="wrap-border"><img src="/img/layout/common/dashboard_yourmaps.png" alt="Select your maps from your dashboard" /></p>
	
	The page refreshes, displaying a list of your maps.

2. Select the name of the map to view, or click the Edit icon on a map

	The page refreshes, displaying the Map View for the selected map.

3. Select *CartoCSS* from the CartoDB Sidebar

	**Note:** This CartoCSS option may be disabled, based on your data.
	
	<p class="wrap-border"><img src="{{ '/img/layout/common/cartodb_sidebar_cartocss_button.png' | prepend: site.baseurl }}" alt="CartoCSS from CartoDB Editor" /></p>
	
	The sidebar expands, displaying the CartoCSS Editor.
	
4. Enter CartoCSS properties for styling your map
		
	**Note:** See [CartoCSS Properties](#cartocss-properties) for a description of the available CartoCSS properties and values.
	
 5. Click *Apply style*
	
	<p class="wrap-border"><img src="{{ '/img/layout/common/cartocss_editor.png' | prepend: site.baseurl }}" alt="CartoCSS Editor" /></p>
	
	You are notified if there are any [errors](http://docs.cartodb.com/cartodb-editor.html#cartocss-errors) in the CartoCSS code. You can also click the *undo* and *redo* arrow buttons after entering code changes in the CartoCSS Editor.
	<p class="wrap-border"><img src="{{ '/img/layout/common/undo_redo_buttons.png' | prepend: site.baseurl }}" alt="Undo Redo CartoCSS Editor buttons" /></p>
	
The map refreshes, displaying the CartoCSS styling changes that you applied.

**Note:** While you can apply CartoCSS styles to different layers on a map, it is highly recommended that you view the suggested [best practices](#cartocss-best-practices) for applying CartoCSS syntax more effectively.