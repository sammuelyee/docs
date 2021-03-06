<!--<div style="font-size:12pt;color:magenta;">Writer Note_csobier: This include file is used in CartoDB Editor/Customizing Maps with CartoCSS/CartoCSS Best Practices
</div>-->

While there are many ways to apply the same visual effects with CartoCSS properties, this section describes the most efficient and intuitive methods for structuring your CartoCSS syntax.

You can apply CartoCSS properties to the overall map style, or to specific map symbolizers (such as markers and points).  Sometimes, applying properties to a symbolizer is not the most effective workflow for enhancing your overall map style.  Other times, applying a style to the overall map is not rendered if there is no default value defined, and thus, not needed.  For example, see how  [composite operations](cartodb-editor.html#composite-operation-effects) can be used for color blending, based on style or symbolizer.

When applying CartoCSS syntax, it helps to understand how values are applied to your map:

- The source is where the style is applied (either as a value or as a symbolizer property)
- The destination is the effect on the rest of the map, underneath the source
- Any layers that appear above the source are unaffected by the applied style and are rendered normally 
- Typically, you apply CartoCSS properties to different layers on a map. You can add multiple styles and values for each layer

- Alternatively, you can apply CartoCSS by nesting categories and values. Categories contain multiple values listed under the same, single category using brackets { }. This enables you visualize all of the styling elements applied to the overall map or to individual symbolizers, and avoid adding any redundant or unnecessary parameters. This is the suggested method if you are applying styles to a multi-scale map.

**Note:** Be mindful when applying styles to a map with multiple layers. Instead of applying an overall style to each map layer, apply the style to one layer on the map using this nested structure. *For example, suppose you have a map with four layers, you can define zoom dependent styling as a nested value in one map layer. You do not have to go through each layer of the map to apply a zoom style.* Using the nested structure allows you to apply all of the styling inside the brackets { }. This is a more efficient method of applying overall map styling.

Each of the examples below produces the same visual effect. Note how the CartoCSS syntax is structured.

**Example 1: CartoCSS syntax structured by point** 

Marker fill values are applied to the overall style of the map.  Each map point is labeled `#continent_points[continent="name"] {` and contains its own marker-fill style.

{% highlight bash %}
	#continent_points {
		   marker-fill-opacity: 0.9;
		   marker-line-color: #FFF;
		   marker-line-width: 1;
		   marker-line-opacity: 1;
		   marker-placement: point;
		   marker-type: ellipse;
		   marker-width: 10;
		   marker-allow-overlap: true;
		}

		#continent_points[continent="Africa"] {
		   marker-fill: #A6CEE3;
		}
		#continent_points[continent="Antarctica"] {
		   marker-fill: #1F78B4;
		}
		#continent_points[continent="Asia"] {
		   marker-fill: #B2DF8A;
		}
		#continent_points[continent="Australia"] {
		   marker-fill: #33A02C;
		}
		#continent_points[continent="Europe"] {
		   marker-fill: #FB9A99;
		}
		#continent_points[continent="North America"] {
		   marker-fill: #E31A1C;
		}
		#continent_points[continent="Oceania"] {
		   marker-fill: #FDBF6F;
		}
		#continent_points[continent="South America"] {
		   marker-fill: #FF7F00;
	}
	{% endhighlight %}

**Example 2: CartoCSS syntax structured by category** 

Marker fill values are applied to the overall style of the map.  `marker-line-opacity`, `marker-placement`, and `marker-type` are removed from the overall map style, since the default values for these properties do not render any styling effects, they are not necessary.

**Tip:** In some cases, default values for CartoCSS properties render no styling effects on your map. If you apply CartoCSS syntax with the default values `none``undefined`, the map appears the same with or without these properties. Ensure to define values for properties that apply no default styling. 

Each point is categorized as `[continent="name"] {` and contains its own marker-fill style. 
*You do not need to preface each point with the `#continent_points` label.*  Note how syntax highlighting is applied to clearly indicate the category.

{% highlight bash %}
	#continent_points {
	   marker-fill-opacity: 0.9;
	   marker-line-color: #FFF;
	   marker-line-width: 1;
	   marker-width: 10;
	   marker-allow-overlap: true;

	   [continent="Africa"] {
	    marker-fill: #A6CEE3;
	   }
	   [continent="Antarctica"] {
	      marker-fill: #1F78B4;
	   }
	   [continent="Asia"] {
	      marker-fill: #B2DF8A;
	   }
	   [continent="Australia"] {
	      marker-fill: #33A02C;
	   }
	   [continent="Europe"] {
	      marker-fill: #FB9A99;
	   }
	   [continent="North America"] {
	      marker-fill: #E31A1C;
	   }
	   [continent="Oceania"] {
	      marker-fill: #FDBF6F;
	   }
	   [continent="South America"] {
	      marker-fill: #FF7F00;
	}
	{% endhighlight %}


**Example 3: CartoCSS syntax structured by @ values** 

Apply the @ symbol to lists of all the color values for your categories.  The CartoCSS syntax is structured so that you can apply all your color changes in one section `@name: color;` and reference the point style within the category label `marker-fill: @name;`. This enables you to visualize exactly where your marker-fill values are located, in addition to the overall map styles.

{% highlight bash %}
	@africa: #A6CEE3;
	@antarctica: #1F78B4;
	@asia: #B2DF8A;
	@australia: #33A02C;
	@europe: #FB9A99;
	@northamerica: #E31A1C;
	@oceania: #FDBF6F;
	@southamerica:#FF7F00; 
	
#continent_points {
   marker-fill-opacity: 0.9;
   marker-line-color: #FFF;
   marker-line-width: 1;
   marker-width: 10;
   marker-allow-overlap: true;

   [continent="Africa"] {
    marker-fill: @africa;
   }
   [continent="Antarctica"] {
      marker-fill: @antarctica;
   }
   [continent="Asia"] {
      marker-fill: @asia;
   }
   [continent="Australia"] {
      marker-fill: @australia;
   }
   [continent="Europe"] {
      marker-fill: @europe;
   }
   [continent="North America"] {
      marker-fill: @northamerica;
   }
   [continent="Oceania"] {
      marker-fill: @oceania;
   }
   [continent="South America"] {
      marker-fill: @southamerica;
   }
}
	{% endhighlight %}
	