---
layout: tutorials_item
title: 'How to Import a Shapefile in CartoDB'
short_description: 'Add polygons to your maps with shapefiles.'
level: basic
time_needed: '10 minutes'
---

The CartoDB platform is designed for maps of all shapes and sizes. While we appreciate linearity, we understand that many visualizations tell stories that don't follow a straight path. The following tutorial will explain how to introduce complex shapes into your projects with shapefiles.

### What are shapefiles and what do they contain?

A shapefile is the standard format for translating geographic data that you see online. Shapefiles can contain three or more files that represent vector features, such as points, lines, and polygons, each with descriptive attributes like "name" or "temperature". When imported into CartoDB, those attributes will comprise your table. No matter how complex your visualization may appear, this simple format stores the geometric location and attribute information of your map features on the backend.

### Types of shapefiles include:

- **.shp:**  
  This file contains the primary geographic reference data and records of various shape types included, such as points, polygons, or multipatches.

- **.dbf:**  
  The dBase format stores attributes for each shape, and its size cannot exceed 2GB.

- **.shx:**  
  The shapefile index format does what its name suggests, which is to organize the records of a shapefile for reference. Using this index, it is possible to review the contents of your shapefile backwards or forwards, as it links to the primary .shp file.

- **.prj:**  
  The projection format is essential because it contains coordinate system and projection information. As a plain text file, it describes your data using markup language, which allows it to sync with many applications.

### What if I'm missing a .prj file?

Sometimes, projection files don't show up where they should. Usually, they have simply been mislabeled. [Check out our video](http://vimeo.com/100105202) to problem-solve locating and replacing a .prj for use in CartoDB.

### How to import

The CartoDB interface requires the compression of shapefiles into a .zip file, all prefixed with the same name. For example, a `ne_10m_populated_places.zip` file would contain `ne_10m_populated_places.shp`, `ne_10m_populated_places.dbf`, `ne_10m_populated_places.shx`, and `ne_10m_populated_places.prj`.

There are different methods for zipping your shapefiles- some more complicated than others.

To streamline the process, you may consider downloading a plug-in (such as 7-Zip for Windows) that is compatible with your operating system. Otherwise, Mac allows you to Ctrl-click shapefiles inside Finder and select "Compress" [filename]. The `.zip` archive is created in the same location as the original file and is named `[originalfilename].zip`. You can also choose File → Compress. Your file is now ready to take shape on CartoDB via drag and drop to the window pictured below:

<p class="wrap-border"><img src="{{ '/img/layout/tutorials/import_shapefile_in_cartodb/img1.png' | prepend: site.baseurl }}" alt="Shapefile" /></p>

Regardless of your preferred zip method, you will need to be mindful of selecting the complete components of your shapefile from whichever folder they are stored.
