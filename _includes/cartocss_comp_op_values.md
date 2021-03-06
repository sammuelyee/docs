CartoCSS contains configurable values for the composite operation property, and appears as `comp-op` in the syntax. This section describes the available composite operation values and color blending effects.

**Note:** CartoDB is currently maintaining this library of CartoCSS `comp-op` values. This content was adapted from the open source material provided by [Mapbox](https://www.mapbox.com/tilemill/docs/guides/comp-op/), who have ceased active development of CartoCSS documentation.*


##### CartoCSS Symbolizer Properties

The following CartoCSS properties can be used as a blending effect on a map layer. Alternatively, these properties can be applied to invoke a composite operation effect on a particular symbolizer. For details, see [Composite Operation Effects](cartodb-editor.html#composite-operation-effects).  Click a link to view the CartoCSS property description.
 
**CartoCSS Symbolizer Property:** | |
[line-comp-op](cartodb-editor.html#line-comp-op-keyword) | [line-pattern-comp-op](cartodb-editor.html#line-pattern-comp-op-keyword) | [marker-comp-op](cartodb-editor.html#marker-comp-op-keyword)
[point-comp-op](cartodb-editor.html#point-comp-op-keyword) | [polygon-comp-op](cartodb-editor.html#polygon-comp-op-keyword) | [polygon-pattern-comp-op](cartodb-editor.html#polygon-pattern-comp-op-keyword)
[raster-comp-op](cartodb-editor.html#raster-comp-op-keyword) | [shield-comp-op](cartodb-editor.html#shield-comp-op-keyword) | [text-comp-op](cartodb-editor.html#text-comp-op-keyword)


##### Composite Operation Color Blending Values

The following color blending operations can be applied with the `comp-op` property.

**Composite Operation Color Blending Values:** | |
--- | --- | ---
overlay | multiply | color-dodge
plus | minus | screen
darken | lighten | hard-light
soft-light | grain-merge | grain-extract
hue | saturation | color
value | color-burn | difference
exclusion | contrast | invert
invert-rgb | clear | 

##### Composite Operation Alpha Blending Values

The following alpha blending values can be applied with the `comp-op` property. These operations use the shape of the layer to show or hide the rest of the rendered map, as opposed to altering the color of a layer. 

**Tip:** Alpha values are useful when applying the `comp-op` property to the overall map style [effect](cartodb-editor.html#composite-operation-effects).  As an additional resource for working with alpha composition methods, see [Duff-Porter Alpha Composition Methods](http://www.imagemagick.org/Usage/compose/#duff-porter).

**Composite Operation Alpha Blending Values:** | |
src | dst | src-over
dst-over | src-in | dst-in
src-out | dst-out | src-atop
dst-atop | xor | 

**Note:** We are currently building a Map Academy course about color blending effects and will provide examples in the next documentation update.
