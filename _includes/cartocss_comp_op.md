Composite operations style the way colors of overlapping geometries interact with each other. Similar to blend operations in Photoshop, these composite operations style the blend modes on your map. 

- You can select basic composite operations and blend modes directly from the [Map Wizard](cartodb-editor.html#composite-operation---map-wizard) style options

- You can also enter [CartoCSS syntax](cartodb-editor.html#composite-operation---cartocss) to apply the `comp-op` property with additional values

This section describes the composite operation values, effects, and how to apply them with the CartoDB Editor.

##### Composite Operation - Map Wizard
There is a shortcut for selecting a composite operation value, directly from the Map Wizard of the CartoDB Editor. 

1.  From the Map View of a selected map, click *wizards* from the CartoDB sidebar

	The sidebar expands, displaying a list of style options based on your data.
	
2. Select a composite operation value

	**Note:** Composite operation values can only be applied to select map types:
	
	Map Type | Available Composite Operation Values
	--- | ---
	Simple, Choropleth, Bubble, Density | `none``multiply``screen``overlay``darken``lighten``color-dodge``color-burn`<br><br>**Note:** These options appear in the *Composite operation* drop-down list.
	Torque, Torque Category | `lighter``multiply``source-over``xor`<br><br>**Note:** These options appear in the *Blend Mode* drop-down list.
	
	See [CartoCSS `comp-op` Values](cartodb-editor.html#cartocss-comp-op-values) for a complete description of these composite operation effects.
	
The following example shows the composite operation *multiply* option, set through the map wizard options of the CartoDB Editor.

<p class="wrap-border"><img src="{{ '/img/layout/common/comp_op_wizard.png' | prepend: site.baseurl }}" alt="Map Wizard Composite Operations" /></p>

**Tip:** If you want to apply any other composite operation value, you can enter CartoCSS syntax with the CartoCSS Editor.

##### Composite Operation - CartoCSS

You can enter CartoCSS syntax to apply additional composite operation values. The CartoCSS option is available from the CartoDB sidebar, and opens the CartoCSS Editor.  For details, see how to [Apply CartoCSS with the CartoCSS Editor](cartodb-editor.html#apply-cartocss-with-the-cartocss-editor).

The following example shows the composite operations *multiply* option, set through the CartoCSS Editor of the CartoDB Editor.

<p class="wrap-border"><img src="{{ '/img/layout/common/comp_op_cartocss.png' | prepend: site.baseurl }}" alt="CartoCSS Composite Operations" /></p>

#### Composite Operation Effects

The `comp-op` value can be applied as an overall style effect, or it can be applied to the specific symbolizer property, depending on the color blending operation you are trying to achieve.

- The source is where the composite operation is applied (either as a style value or as a symbolizer value) on a map
- The destination is the effect on the rest of the map, underneath the source

**Note:** Any layers that appear above the source are unaffected by the `comp-op` value and are rendered normally.

#### CartoCSS `comp-op` Values

{% include cartocss_comp_op_values.md %}
