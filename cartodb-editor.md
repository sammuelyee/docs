---
layout: platform_item
title: CartoDB Editor
slug: cartodb-editor
js_asset: "editor"
redirect_from:
- "/documentation/using-cartodb.html"
---

## CartoDB Editor Overview

The CartoDB Editor is a dashboard that contains your datasets and your maps. The following workflow highlights how you can create a map from your dashboard in 30 seconds.

Workflow | Details
------------ | -------------
Create a new dataset | You can upload your dataset using any of the [supported file formats](#supported-file-formats), connect to a public dataset from the [Data Library](#data-library), or create an [empty dataset](#create-an-empty-dataset). 
| For details, see [Connect Dataset](#connect-dataset).
Visualize your data and create a map | The CartoDB Editor contains many features that guide you through the process of creating a map and selecting how your data appears. You can also customize the style of your map.
| For details about some of the CartoDB Editor features, see [Data Visualization](#data-visualization), [Edit Maps](#edit-map-options), [Wizards](#wizards), and [Managing Your Data](#managing-your-data).
Publish and share your map | Once you visualize and publish a map, you can get a link to share the map, embed it to a website or blog, or add your map to another application.
| For details, see [Publish and Share Your Map](#publish-and-share-your-map)

**Tip:** You can also view guided lessons of the map workflow from [The Map Academy](http://academy.cartodb.com/), or begin using our [open source APIs](http://docs.cartodb.com/cartodb-platform.html).

## Datasets

Behind the scenes, the CartoDB geospatial database is built on the [PostgreSQL](http://www.postgresql.org/docs/9.1/static/) platform and supports advanced  [PostGIS](http://postgis.net/docs/manual-2.0/) capabilities.  When you import data with the CartoDB Editor, you are connecting a dataset to a standard database.

### Connect Dataset

You can import data from a local file (or public URL), connect to an external dataset, or create an empty dataset.

1. Click *Your datasets* from the dashboard drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/common/select_your_dataset.png' | prepend: site.baseurl }}" alt="Select Dataset" /></p>

    The page refreshes displaying a list of your datasets. 

2. Click NEW DATASET  

	<p class="wrap-border"><img src="{{ '/img/layout/common/new_dataset_button.png'}}" alt="NEW DATASET Button Dataset" /></p>
	
	The Connect dataset options appear.

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/connectdataset.png' | prepend: site.baseurl }}" alt="Connect a dataset" /></p>

3.  Click the type of dataset you want to connect to

	**Tip:** Use the arrow buttons to scroll for more options.
	
    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/connectdataset2.png' | prepend: site.baseurl }}" alt="View more options on Connect Dataset dialog" /></p>
	
	The following connect dataset options are available.

	Connect Dataset | Description
	------------ | -------------
	Data file | Drag and drop a file directly onto the Connect dataset dialog to add it, or click *BROWSE* to select a local file to upload. You can also enter and submit a public URL to upload data from.
	| **Tip:** See a list of [Supported File Formats](#supported-file-formats).
	Google Drive | Connect a dataset by syncing to an external Google Drive. For details, see [Syncing Datasets](#syncing-datasets).
	Dropbox | Connect to a dataset by syncing to a external Dropbox. For details, see [Syncing Datasets](#syncing-datasets).
		| **Note:** Some file formats are not supported with Dropbox. Select *Dropbox* to view which file formats are available (CSV, XLS).
	Twitter | Connect to a Twitter datasource by enabling the Twitter Connector. For details, see [Use Case: Connecting to an External Data Source (Twitter)](#use-case--connecting-to-an-external-data-source-twitter).
	MailChimp | Connect to external MailChimp campaigns with the MailChimp connector. You can access your MailChimp account and create maps and datasets based on the data stored from your mailing lists.
	Instagram | Connect to your Instagram photos or videos with the Instagram connector. 
	ArcGIS Server&trade; | Import your data from an ArcGIS Server&trade; instance by submitting your ArcGIS Server table URL.
	|  **Note:** Ensure that you are using ArcGIS Server&trade; version 10.1 or higher.
	Salesforce | Connect to you Salesforce data by enabling the Salesforce Connector and import your data from a Salesforce URL.
	
4. For any external services, you must enable these connectors before you can connect to an external dataset. 

	**Note:** This one-time step requires that you [contact CartoDB](mailto:sales@cartodb.com) for assistance. Once your external connectors have been enabled for your account, connect your external service and link it to your account. 
	
5. From your account settings in CartoDB, *Connect* the external data sources.
	
	**Tip:** Ensure that your browser pop-up blocker is disabled when connecting.

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/account_connect_services.png' | prepend: site.baseurl }}" alt="Select Dataset" /></p>

	After your external connectors are enabled and connected, the connect dataset options allow you to import external data and activates the *CONNECT DATASET* button.

6. Click *CONNECT DATASET*

	**Tip:** There is a shortcut to set the dataset privacy option. By default, your dataset is private. Click the icon to [toggle](#edit-the-dataset-privacy-settings-when-connecting-a-dataset) between public and private, before connecting your dataset.

    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/connect_dataset_button.png' | prepend: site.baseurl }}" alt="Connect Dataset button" /></p>
		
	Your data (or external dataset) is imported and uploaded to your datasets dashboard.

#### Create an Empty Dataset

Optionally, you can add data manually or programmatically, with the Connect Dataset option.  

1. Click *Your datasets* from the dashboard drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/common/select_your_dataset.png' | prepend: site.baseurl }}" alt="Select Dataset" /></p>

    The page refreshes displaying a list of your datasets. 

2. Click NEW DATASET  

	<p class="wrap-border"><img src="{{ '/img/layout/common/new_dataset_button.png'}}" alt="NEW DATASET Button Dataset" /></p>
	
	The Connect dataset options appear.

3. Click *Create empty dataset*
	
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/create_empty_dataset.png' | prepend: site.baseurl }}" alt="Connect Dataset_Create Empty Dataset option" /></p>
	
	A blank dataset containing the default CartoDB columns and indexes are created and formatted. 
	
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/create_empty_dataset_addrows.png' | prepend: site.baseurl }}" alt="Add rows and columns to an empty dataset" /></p>
	
4. Add rows and columns to your dataset with the [CartoDB sidebar](#cartodb-sidebar) options, or by using the context menu items

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/emptydataset_addcolumn.png' | prepend: site.baseurl }}" alt="Add column to an empty dataset" /></p>
	
	For example, the following options display how to add a row
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/emptydataset_addrow.png' | prepend: site.baseurl }}" alt="Add row to an empty dataset" /></p>
	
Additionally, you can add coordinates to your dataset with the Add Feature option, available from the Map View of the CartoDB sidebar. For details, see [Add Feature](#add-feature).

#### Use Case:  Connecting to an External Data Source (Twitter)

CartoDB has broker access to [Twitter Firehose](https://dev.twitter.com/streaming/reference/get/statuses/firehose), which enables us to provide official Twitter data through CartoDB. The following procedures describe how to enable the Twitter Connector for your account so that you can connect external Twitter data to a dataset and create a map.

#####Enabling the Twitter Connector

The following procedure describes how to enable the Twitter Connector.

1. Click *Your datasets* from the dashboard drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/common/select_your_dataset.png' | prepend: site.baseurl }}" alt="Select Dataset" /></p>

    The page refreshes displaying a list of your datasets. 

2. Click NEW DATASET  

	<p class="wrap-border"><img src="{{ '/img/layout/common/new_dataset_button.png'}}" alt="NEW DATASET Button Dataset" /></p>
	
	The Connect dataset options appear.

3. Click *Twitter* as the external service   	 

	**Note:** The first time you click on an option from this screen, a tip appears. Click *Got It* to close this tip.
		 
	Selecting Twitter as your external service indicates that you must enable the Twitter Connector before connecting your dataset. This one-time step requires that you contact CartoDB for assistance.

	<p class="wrap-border"><img src="/img/layout/cartodb-editor/twitter_connector.png" alt="Select Twitter to Connect a Dataset" /></p>

4. Click *ASK FOR A DEMO* to request the Twitter Connector for your account  

	Once the Twitter Connector is enabled for your account, a CartoDB sales representative sends you a confirmation email. This indicates that tweets are enabled for your account and you can continue the process of [(connecting](#how-to-connect-twitter-data-to-a-dataset)) a dataset to Twitter.

#####Connecting Twitter Data to a Dataset

The following procedure describes how to connect  twitter data to a dataset after the Twitter Connector has been enabled by your account representative.

1. After the Twitter Connector is [(enabled](#how-to-enable-the-twitter-connector)), select *Twitter* as the external service  

	The following Twitter Trend options appear.  
	<p class="wrap-border"><img src="/img/layout/cartodb-editor/twitter.png" alt="New import dialog" /></p>
	
	These options enable you to enter different trend options for your Twitter data.   
	
	Twitter Trend Options | Description
	------------ | -------------
	Category 1-4 | Represents search terms for different hashtags or keywords separated by commas. You can enter up to four search terms using the Category fields
	From / to | Displays the from and to time range for your requested data. By default, it is set to search for the last 30 days
	| Depending on your account settings, you can click the calendar icon to open the calendar and select a different date range. Additionally, you can indicate the hour and minute for the selected date range
	| <img src="/img/layout/cartodb-editor/twitter_calendarpopup.png" alt="Twitter Date Range" />
	Use | Displays the amount of Twitter credits allocated to your account. You can use the slider to increase or decrease the percentage of credits to use
			     | 	**Note:** You can [contact CartoDB](mailto:sales@cartodbcom) to update your Twitter credits at any time  
	
	**Tip:** Note the following [(tips and tricks](#tips-and-tricks-for-using-twitter-data)) when entering category search terms and selecting Twitter trends.
		 
2. Click CONNECT DATASET  
	
	You must enter at least one category search term in order to activate the CONNECT DATASET button.

	The page refreshes and displays the connected Twitter dataset. You can edit any of the dataset options as usual and create a map.  

	<p class="wrap-border"><img src="/img/layout/cartodb-editor/twitter_dataset_created.png" alt="New import dialog" /></p>

**Note:** While CartoDB can retrieve geotagged tweets, we cannot retrieve data when the Twitter post has not specified a location element. For example, the Twitter user must explicitly turn on their location, or indicate their location in their profile location field.
*Approximately 5% of tweets typically contain geolocation elements. However, CartoDB has applied geo-enrichment enhancements to our code, increasing the Twitter search results up to 15% to 20%.*

#####Twitter API Data Options
There are several TWitter API's that CartoDB can provide broker access to.  Your account representative can help you select the appropriate type of data plan when you are [(enabling the Twitter Connector](#enabling-the-twitter-connector)).

* **Search API**: The Search API is implemented by default when enabling the Twitter Connector. It allows you to pull geolocated Twitter data from the past 30 days. Once a search is executed, the tweets are imported directly to your CartoDB account so that you can customize your map directly from the Map View of your dashboard.

* **Streaming**: CartoDB has access to Twitter's streaming API, enabling you to retrieve up-to-the-minute search results. This feature is *by request* only. Contact [Sales](mailto:sales@cartodb.com) for details about using streaming Twitter data.

* **Historical API**: The Historical API returns older search results of tweets, beyond 30 days. It can retrieve data as far back as 2006. Contact [Sales](mailto:sales@cartodb.com) for details about using Historical Twitter data.

**Note:** CartoDB is developing a feature to support real time tweets, which automatically updates your map when live tweets are posted. This feature is a work in progress.

#####Understanding Twitter Data

After connecting to a Twitter dataset, unique columns are available from your dataset view. The following list displays the most important Twitter information. You may need this information in order to filter or plot Twitter data points.

* `id`: Tweet id
* `verb`: Lets you know if a tweet has been directly posted or if it's a retweet
* `link`: Direct link to the tweet
* `body`: Content of the tweet
* `postedtime`: Time at which the tweet was posted. (UTC)
* `favoritescount`: Number of times the tweet has been favorited
* `twitter_lang`: Language of the tweet
* `retweetcount`: Number of times the tweet has been retweeted
* `actor_link`: Direct URL to user profile
* `actor_displayname`: Name of the user
* `actor_image`: Direct URL to a minimized version of the avatar
* `actor_summary`: Description of the Twitter user
* `actor_languages`: Language configured by the Twitter user
* `actor_verified`: Flag for verified users
* `generator_displayname`: Client from which the tweet was sent
* `geo`: Information of the geolocated tweet
* `category_name`: Number of the category described in the search
* `category_terms`: Terms which have been searched inside the corresponding category

In addition to the more important parameters listed above, you can also obtain the following Twitter data for your maps by searching for these columns in your connected Twitter dataset: `objecttype`, `twitter_filter_level`, `actor_objecttype`, `actor_id`, `actor_postedtime`, `actor_links`, `actor_location`, `actor_utcoffset`, `actor_preferredusername`, `actor_twittertimezone`, `actor_friendscount`, `actor_followerscount`, `actor_listedcount`, `actor_statusescount`, `generator_link`, `provider_objecttype`, `provider_displayname`, `provider_link`, `inreplyto_link`, `twitter_entities`, `object_objecttype`, `object_id`, `object_summary`, `object_postedtime`, `object_link`, `location_objecttype`, `location_displayname`, `location_link`, `location_geo`, `location_streetaddress` and `location_name`.

##### Analyzing and Querying Twitter Data

Once your tweets dataset is connected, the following insights may help you analyze your Twitter data. The CartodDB Editor *SQL* query panel enables you to search for queries on a dataset. The SQL query panel is available from the sidebar of the Data View when a dataset is selected, as is associated with the [SQL API](http://docs.cartodb.com/cartodb-platform/sql-api.html) CartoDB platform.  

The following image is an example of the SQL query panel from a Twitter dataset.
<p class="wrap-border"><img src="/img/layout/cartodb-editor/twitter_sqlquerypanel.png" alt="Query Twitter Data" /></p>

Simple Query Examples:

"Which tweets have been written by a famous (verified) person?". Apply an SQL query to the `actor_verified` column. This process is similar to generating the following query:

{% highlight sql %}
SELECT * FROM dataset_twitter WHERE actor_verified is true
{% endhighlight %}

"Which tweets have generated the largest number of retweets?"

{% highlight sql %}
SELECT * FROM dataset_twitter ORDER BY retweetcount DESC
{% endhighlight %}

Creating a simple category map gives you a better analysis about your Twitter data. You can use the column `twitter_lang` to compare tweet languages with their locations, or you can use the `postedtime` column to perform a dynamic Torque map.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/twitter_2.png" alt="Retweets map" /></p>

More Advanced Query Examples:

Imagine you have two categories, one is "Vector", the second is "Raster". What if you want to know which tweets are saying "Vector yes", or "Vector no"? Apply the following SQL query:

{% highlight sql %}
SELECT * FROM dataset_twitter WHERE body ilike ‘%yes%’ AND category_name = 1
{% endhighlight %}

Or, correspondingly, for “Vector no”:

{% highlight sql %}
SELECT * FROM dataset_twitter WHERE body ilike ‘%no%’ AND category_name = 1
{% endhighlight %}

Suppose you want to create two new categories in your dataset based on the obtained results. One will be for those results that say "Vector yes", the other one will be for “Vector no”. Just apply the previous queries, but this time, include some some updates in the dataset.

The following query searches all the tweets which include "Vector yes" and update the category to be '3'.

{% highlight sql %}
UPDATE dataset_twitter SET category_name = 3 where body ilike ‘%yes%’ AND category_name = 1
{% endhighlight %}

In the same way, build category number 4 to “Vector no”:

{% highlight sql %}
UPDATE dataset_twitter SET category_name = 4 where body ilike ‘%no%’ AND category_name = 1
{% endhighlight %}

If the results are not so obvious, you can add a new constraint and create a new category which searches "yes" and "no" in the same tweet, as shown with the query below:

{% highlight sql %}
UPDATE dataset_twitter SET category_name = 5 where body ilike ‘%no%’ AND body ilike ‘%yes%’ AND category_name = 1
{% endhighlight %}

Following this approach with the "Raster" option, running a query creates several categories that enables you to analyze if a tweet is supporting a specific topic or search term. If you need more advanced queries beyond these examples, CartoDB supports advanced PostgreSQL capabilities so that you can insert more advanced queries on the text of tweets.

***Tip:** It is suggested to create a duplicate copy of your dataset prior to modifying it with UPDATE, INSERT or DELETE SQL query statements, in order to avoid overwriting your original data.*

##### Tips and Tricks for Using Twitter Data
Note the following tips an tricks when using twitter data for your maps.

######Twitter Categories and Search Terms
* You can enter OR as an alternative to using the comma. For example, "santa, xmas" is the same as "santa OR xmas"
* Spaces before and after commas are removed
* Enter commas between multi-sentence words as a best practice. For example, if you enter a multi-word search term, such as "cars, bikes motorbikes, planes", the category is parsed as three search terms.  Not "cars, bikes, motorbikes, planes"
* Use Singular and plural search terms. For example, "car" does not match tweets with the plural of "cars". Add both the singular and plural forms of the word to match both search results
* Search terms are not case-sensitive. For example, "Cars" is the same as "cars" and "CARS"
* The maximum number of search terms per category is 29
* You can search by hashtags or account names. For example, "gis, @cartodb, #mapping"

######Twitter Credits
* Ensure that you select the right time frame that suits your needs. You can save on Twitter credits by not importing extra data
* Enterprise multi-accounts share the same organization-wide pool of Twitter credits
* If you run out of credits, the the search stops and returns all the tweets that the system was able to retrieve up until the credits were used

######Retrieving Twitter Data
* Once the search starts you cannot stop the import. Be mindful to avoid broad search terms. For example, "love" may retrieve hundreds of thousands, or even millions, of geolocalized tweets

### Syncing Datasets

Depending on your account type, you can sync datasets by connecting to an external Google Drive or Dropbox. This high-level overview describes the workflow for syncing datasets.

**Tip:** For details about these steps, see the [Connect Dataset](#connect-dataset) procedure.

- Create a new dataset and select *Google Drive* or *Dropbox* as the external service
- After your external connectors are enabled and connected, the connect dataset options display a list of your Google Drive or Dropbox files	
- Choose which external files you want to import and select the *Sync my data* options
	
    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sync_my_data.png' | prepend: site.baseurl }}" alt="Sync my data options when connecting a dataset" /></p>
	
- Click *CONNECT DATASET*

	**Tip:** There is a shortcut to set the dataset privacy option. By default, your dataset is private. Click the icon to [toggle](#edit-the-dataset-privacy-settings-when-connecting-a-dataset) between public and private before, connecting your dataset.

- Optionally, you can change these [sync dataset options](#sync-dataset-options) at anytime

**Note:** Contact [Sales](mailto:sales@cartodb.com) if you need help enabling this feature for your account.

#### Sync Dataset Options
{% include sync_datasets.html %}

### Data Library

The CartoDB Data Library, available from your datasets dashboard, provides a list of public data libraries. You can connect to these public datasets and create a map. Examples of data in the Data Library include World Borders, European Countries, Urban Areas, and Populated Places. 

- From your datasets dashboard, click *Data library* to view a list of all the data libraries. Private data libraries appear in red. Scroll to the bottom of the data library to navigate to other pages

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/datalibrary.png' | prepend: site.baseurl }}" alt="Data Library data" /></p>

- From a selected public dataset, click *Connect dataset* or *create map* to add it to your dashboard
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/datalibrary_connect.png' | prepend: site.baseurl }}" alt="Connect dataset from Data Library" /></p>


### Supported File Formats

CartoDB supports a large number of data types and file formats. The following table lists the supported data file formats. 

**Tip:** It is high recommended that you compress your files before importing them. CartoDB supports .ZIP and .GZ (which includes .TAR.GZ and .TGZ) for compressing and archiving files.

Supported File Format | Description
------------ | -------------
.CSV, .TSV | Comma-separated values and tab-separated values.  This is the preferred file format when importing datasets to CartoDB
| **Note:** When importing sheets with tabular formats, the first row must contain your column headers.
.SHP | ESRI shapefiles
| **Note:** For shapefiles, the .ZIP file must contain the .SHP, .DBF, .SHX and .PRJ files, all prefixed with same name. For example: a `ne_10m_populated_places.zip` file would contain `ne_10m_populated_places.shp`, `ne_10m_populated_places.dbf`, `ne_10m_populated_places.shx` and `ne_10m_populated_places.prj`).*
.KML, .KMZ | Google Earth Format
.XLS, .XLSX | Excel Spreadsheet
|**Note:** It is a known issue that uploading Excel files takes significantly longer to import to CartoDB. It is recommended to save your .XLS or .XLSX files as .CSV files, for the best performance.
.GEOJSON | GeoJSON
.GPX | GPS Exchange Format
.OSM, .BZ2 | Open Street Map dump
.ODB | OpenDocument Spreadsheet

**Note:**  If you are importing a non-supported file type, the import will fail.

###Data Visualization

You can visualize your data once one or more datasets are added to your dashboard. In order to visualize a dataset, you must create a map from your dataset. This procedure describes how to visualize your data and create a map.

1. Click *Your datasets* from your dashboard drop-down menu 

	The datasets view appears, displaying all of your datasets.
	
2. Click the name of a dataset

	The selected dataset opens in the Data View.
	
	**Tip:** You can edit the [(privacy settings](#dataset-privacy)) for your dataset.

3. Click *VISUALIZE* to view the connected dataset

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/visualize.png' | prepend: site.baseurl }}" alt="Visualize a Dataset" /></p>

	A confirmation dialog appears, indicating that you must publish a map in order to visualize your data.
	
4. Click *OK,CREATE MAP* to visualize your dataset in a map 

5. A map is automatically generated based on the name of your dataset

	The map is connected to the dataset and you can edit any of the map or data details. You can also [(publish](#publish-and-share-your-map)) your map. 

**Note:** If you need to save a draft of your map while applying changes to a newer version, it is suggested to duplicate your map so that you have a backup copy of it. The *Duplicate map* option is available from the [(Edit](#edit-dataset-options)) drop-down menu of the Data View or Map View of a selected map. Note that style changes applied to a duplicate map are not applied to the original.

### Manage Your Datasets

You can manage all of your datasets from your Datasets dashboard and change how the datasets are ordered, edit the privacy settings for your datasets, or delete a dataset.

####Changing the Sort Order of your Datasets
The following procedure describes how to change the sort order of your datasets from your datasets dashboard.

1. Click *Your datasets* from your dashboard drop-down menu

	The datasets view appears, displaying all your datasets ordered by date.
	
2. Use the datasets toolbar to change how your datasets appear

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/dataset_dashboard_orderby.png' | prepend: site.baseurl }}" alt="Dataset Toolbar" /></p>

The following sort options are available from the datasets toolbar.

Sort Options | Description
------------ | -------------
<img src="{{ '/img/layout/cartodb-editor/orderbydate.png' | prepend: site.baseurl }}" alt="Order by date" />| Order by date. This is the default setting and indicates the date that the dataset was created or imported
<img src="{{ '/img/layout/cartodb-editor/orderbyvisits.png' | prepend: site.baseurl }}" alt="Order by visits" /> | Order by visits. This is only applicable for your public shared maps
<img src="{{ '/img/layout/cartodb-editor/orderbylikes.png' | prepend: site.baseurl }}" alt="Order by likes" /> | Order by likes
<img src="{{ '/img/layout/cartodb-editor/orderbysize.png' | prepend: site.baseurl }}" alt="Order by sizez" /> | Order by size. This is the size of your dataset
	
Your dashboard refreshes, changing the sort order of how your datasets appear.

#### Dataset Privacy

You can protect your dataset and identify the privacy option as *Public*, *With link*, or *Private*. The dataset privacy options are managed through the dataset metadata.

**Note:** Dataset privacy is stored separately from [(Map privacy](#map-privacy)). This enables you to protect each layer of data within a map.

The following image, and table, display the available dataset privacy options.
<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/privacy_datasetprivacyoptions.png' | prepend: site.baseurl }}" alt="Dataset Privacy Options" /></p>

Dataset Privacy Option | Description
------------ | -------------
Public | Available to anyone on the internet and viewable from your public profile page on CartoDB
With link | Indicates that only people who have a link to the dataset are able to access it
Private | A private dataset that is only visible to you

There are multiple ways to access these dataset privacy options.

**Note:** Different privacy options may appear, depending on your account settings.

#####Edit the Dataset Privacy Settings when Connecting a Dataset
There is a shortcut to set the dataset privacy while connecting a new dataset.  See the [Connect Dataset](#connect-dataset) procedure for complete details about how to connect a dataset.

- From the connect dataset options, click the privacy icon to toggle between the public and private option

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/connectdataset_toggleprivate.png' | prepend: site.baseurl }}" alt="Toggle privacy icon" /></p>

	**Note** Datasets are private by default. 
	
- Click the privacy icon to change the dataset to public

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/connectdataset_togglepublic.png' | prepend: site.baseurl }}" alt="Toggle privacy icon" /></p>

Once you connect a dataset, you can change the privacy at any time by using the dashboard or dataset options, as described in the this section.	

#####Edit the Dataset Privacy Settings from your Dashboard
The following procedure describes how to edit the dataset privacy settings from your datasets dashboard.

1. Click *Your datasets* from your dashboard drop-down menu

	The datasets view appears, displaying all your datasets.
	
2. Select the privacy setting for a dataset

	You can click *Change privacy* from the shortcut options that appear when a dataset is selected, or click the privacy setting directly from a named dataset.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/privacy_fromdatasetdashboard.png' | prepend: site.baseurl }}" alt="Dataset Privacy from Dashboard" /></p>

The privacy options appear, from which you can change and save your settings.

#####Edit the Dataset Privacy Settings from a Selected Dataset
There are several ways to edit the privacy settings within the Data View or Map view for a selected dataset.

1. Click *Your datasets* from your dashboard drop-down menu

	The datasets view appears, displaying all your datasets.
	
2. Click the name of a dataset

	The selected dataset opens in the Data View. You can open the privacy options from the Edit menu and from the lock icon. Additionally, you can access the privacy options from within the Edit metadata options.
	
	2a. Click *Change privacy* from the Edit menu.

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/changeprivacy_editmenu.png' | prepend: site.baseurl }}" alt="Change Privacy Option" /></p>

	The privacy options appear, from which you can change and save the privacy setting.

	2b. Click the lock icon, next to the name of the dataset.
	
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/lockicon_dataview.png' | prepend: site.baseurl }}" alt="Lock icon" /></p>
	
	The privacy options appear, from which you can change and save the privacy setting.
	
	2c. Click *Edit metadata*

	The [(Dataset metadata](#dataset-metadata)) options appear, from which you can click the privacy setting to open the privacy options to change and save your settings.

#### Dataset Metadata

You can edit the attributes for each dataset and add metadata for your data. This is useful for keeping your datasets organized and discoverable in a search, as your repository of datasets increases.  You can edit dataset metadata from the your datasets dashboard.

**Note:** The dataset metadata is stored separately from your [map metadata](#map-metadata). 

#####Editing Metadata for a Dataset

1. Click *Your datasets* from your dashboard drop-down menu

	The datasets view appears, displaying a list of your datasets.

2. Click the name of a dataset

	The selected dataset opens in the Data View.

3.  Click *Edit metadata*  

    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/dataset_edit_metadata.png' | prepend: site.baseurl }}" alt="Edit Dataset Metadata" /></p>

    The Dataset metadata options appear.

4. Edit the dataset name, description, source, attributions. license, and tags for the selected map. You can also change your dataset privacy settings  

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/dataset_metadata.png' | prepend: site.baseurl }}" alt="Privacy option from Edit Dataset Metadata" /></p>
	
	The following dataset metadata options are available.
	
	Map Attribute | Description
	------------ | -------------
	Dataset name | The name of the dataset. Note to be as specific as possible if your dataset is public
	Description | Describe the content and purpose of your dataset
	Source | Enter any details about the original source of the data
	Attributions | Enter any [attribution](https://cartodb.com/attributions) information about the data layer
	License | Add license information about sharing or using this dataset
	Tags | Tags enable you to group your datasets by project or theme
	Privacy | Datasets can be Private, Public or Links. Click the current status to change the privacy settings for the selected map
	
5. Click *SAVE* to close and save the dataset metadata attributes  

**Tip:** You can add a description, add tags, or edit the dataset privacy setting directly from the your Datasets dashboard. Once an initial dataset description and tag is entered using this shortcut, you must click *Edit metadata* from the selected dataset if you need to update these attributes again.
<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/edit_dataset_from_dashboard.png' | prepend: site.baseurl }}" alt="Edit Dataset Metadata from Dashboard" /></p>

#### Delete Dataset

There are multiple ways to delete a dataset with the CartoDB Editor. You can delete a dataset from your [(dashboard](#to-delete-a-dataset-from-your-dashboard)) or directly from your [(Data View](#to-delete-a-dataset-from-your-data-view)).

#####To Delete a Dataset from your Dashboard

1. Click *Your datasets* from the dashboard drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/common/select_your_dataset.png' | prepend: site.baseurl }}" alt="Select Dataset" /></p>

    The page refreshes, displaying a list of your datasets.

2. Select a dataset so that is it highlighted.  
    **Tip:** You can select multiple datasets to be deleted.

    The dataset options appear at the top of the list.

3. Click *Delete dataset* from the datasets options  
 
    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/dashboard_delete_dataset.png' | prepend: site.baseurl }}" alt="Delete Dataset" /></p>

    A confirmation dialog appears, indicating the number and/or name of the dataset(s) that you are deleting.

    <p class="wrap-border"><img src="{{ '/img/layout/common/delete_dataset_confirmation.png' | prepend: site.baseurl }}" alt="Delete Dataset Confirmation" /></p>

4. Click *OK,DELETE*  

    The dataset(s) is deleted and removed from your dashboard.

    **Note:** Deleted datasets cannot be recovered and are permanently removed.  It is recommended to [export](/faqs.html#how-to-export-datasets-from-cartodb) your dataset before deleting it if is important to you.

#####To Delete a Dataset from your Data View

1. Click *Your datasets* from the dashboard drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/common/select_your_dataset.png' | prepend: site.baseurl }}" alt="Select Dataset" /></p>

    The page refreshes displaying a list of your datasets. 

2. Select the name of the dataset to view  

    <p class="wrap-border"><img src="{{ '/img/layout/common/selected_dataset_name.png' | prepend: site.baseurl }}" alt="Select Name of Dataset" /></p>

    The page refreshes displaying the Data View for the selected dataset. 

3. Select *Delete this dataset* from the Edit drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/edit_delete_this_dataset.png' | prepend: site.baseurl }}" alt="Delete this Dataset" /></p>

    A confirmation dialog appears, indicating the name of the selected dataset that you are deleting.

    <p class="wrap-border"><img src="{{ '/img/layout/common/delete_dataset_confirmation.png' | prepend: site.baseurl }}" alt="Delete Dataset Confirmation" /></p>

4. Click *OK,DELETE*  

    The dataset is deleted and the page refreshes, displaying your datasets dashboard.

### Viewing Datasets

Once you've clicked on a dataset, there are two ways for you to view your data: Data View and Map View. You may toggle between the two views next to the dataset name.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/dataview.png' | prepend: site.baseurl }}" alt="Viewing Datasets" /></p>

#### Data View

Data View allows you to inspect, filter, and query your data and see the results in a spreadsheet format. The pull out panel on the right of the screen allows you to write SQL queries, apply basic filters, merge two uploaded datasets, and add rows and columns.

#### Map View

Map View allows you to inspect your data as a layer over a basemap. You may apply SQL queries or filters on the view, style the data's symbology using our wizards or by writing your own CartoCSS, and create infowindows.

In the Map View, you may style and filter your data **but** this view is not the same as a shareable map. In order to create a shareable map, click "Visualize" in the top right corner. Keep on reading to learn what you may do from there!

### Supported Data Types

When you upload your data to CartoDB, it will automatically assign a data type to your data such as string, number, date, or boolean. It's important to check that the correct data type is assigned. It is especially important to make sure CartoDB knows if a column is a date type so maps that rely on temporal information such as Torque, animate correctly.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/datetype.png' | prepend: site.baseurl }}" alt="Visualizations" /></p>

The date type is located under the column name. It can be changed by clicking on the date type name under the column name to open a secondary navigation window from which you can select the correct data type.

### Edit Dataset Options

The following options are available from the *Edit* menu of the Data View or Map View of a selected dataset.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/dataset_edit_menu.png' | prepend: site.baseurl }}" alt="Dataset Edit Options" /></p>

Dataset Edit Menu Option | Description
------------ | -------------
Export | Export your dataset for use offline. For details, see how to [(Export Data](#export-data))
Georeference |  Edit your dataset and apply georeferencing coordinates to transform your data. For details, see [(Georeference Data](#georeference-data))
Duplicate dataset |  Creates a duplicate of your dataset so that you have a backup copy of it. Note that changes applied to a duplicate dataset are not applied to the original
Merge with dataset |  Merge your current dataset with another existing dataset by performing a *column join* (merges two datasets based on a shared value) or a *spatial join* (merges two datasets based on a number of intersecting records). For details, see [(Merging Data](#merging-data))
Change privacy | You can protect your dataset and identify the privacy setting. For details, see [(Dataset Privacy Settings](#dataset-privacy))
Lock dataset | To prevent your data from undesired changes, you can lock a dataset and hide it from your dashboard. For details, see the Frequently Asked Questions about [how to lock a dataset or map](http://docs.cartodb.com/faqs.html#how-can-i-lock-a-datasetmap)
Delete this dataset | Delete the selected dataset. For details, see [(Delete Dataset](#delete-dataset))
| **Note:** Deleting a dataset also deletes any connected maps to the dataset

## Maps

### Map Privacy

When you create a map with CartoDB, you can protect your map and identify the privacy options as *Public*, *With link*, *Password protected*, or *Private*. These map privacy settings are managed through the map metadata and enable you to determine how your maps are accessed.

**Note:** Map metadata is stored separately from your [dataset metadata](#dataset-privacy). This enables you to share maps while protecting each layer of data. 

The following image, and table, display the available map privacy options.
<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/privacy_mapprivacyoptions.png' | prepend: site.baseurl }}" alt="Map privacy options" /></p>

Map Privacy Option | Description
------------ | -------------
Public | Available to anyone on the internet and viewable from your public profile page on CartoDB
With link | Indicates that only people who have a URL to the map are able to access it. This type of map is not viewable from your public profile
Password protected |  Indicates that map is password protected. When selecting this option, type a password and click *SAVE SETTINGS*. This type of map is not viewable without the password and does not appear from your public profile
Private | A private map that is only visible to you

You can access the map privacy options through your maps dashboard or through the Data View and Map View for a selected map.

**Note:** Different privacy options may appear, depending on your account settings.

### Map Metadata

You can edit the attributes for each map to add metadata for your map. This is useful for keeping your maps organized and discoverable in a search, as your repository of maps increases.  You can edit map metadata from the Map View of a selected map (or from a Data View of a selected map to edit the dataset layer in a map).

**Note:** Map metadata is stored separately from [(Dataset metadata](#dataset-metadata)). Each dataset contains its own metadata, however, once you connect a dataset to a map, you can edit the dataset metadata as a layer within the map.

####Editing Metadata for a Map

The following procedure describes how to edit metadata for a map.

1. Click *Your maps* from your dashboard drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/common/dashboard_yourmaps.png' | prepend: site.baseurl }}" alt="Select Your Maps from Dashboard" /></p>

	The page refreshes, displaying a list of your maps.

2. Select the name of the map to view, or click the Edit icon on a map

    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/selectmap.png' | prepend: site.baseurl }}" alt="Select Map" /></p>

	The page refreshes, displaying the Map View for the selected map.

3. Click *Edit metadata* from the selected map  

	**Note:** You can edit metadata from the *Data View* or *Map View* of a selected map.  The Data View contains the connected dataset as a layer within the map.

    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/editmetadata_link.png' | prepend: site.baseurl }}" alt="Edit Metadata" /></p>
		
	The Map metadata options appear.

4. Edit the map name, description, and tags for the selected map. You can also change your map privacy settings  

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/mapmetadata_options.png' | prepend: site.baseurl }}" alt="Map Metadata" /></p>
	
	The following map metadata options are available.
	
	Map Attribute | Description
	------------ | -------------
	Map name | The name of the map. Note to be as specific as possible if this is a public map
	Description | Describe the content and purpose of your map. You can also add license information in this field if you are sharing your map
	Tags | Tags enable you to group your maps by project or theme
	Privacy | Options may vary depending on your account settings. Click the current status to change the [(privacy settings](#map-privacy)) for the selected map
	
5. Click *SAVE* to close and save the map metadata attributes  

6. Click *Search* to search your repository of maps by name or tag

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/search_metadata.png' | prepend: site.baseurl }}" alt="Search by metadata" /></p>

	Note how applying metadata enables you to identify and search for map attributes.

**Tip:** You can add a description, add tags, or edit the map privacy setting directly from your maps dashboard. Once an initial map description and map tag is entered using this shortcut, you must click *Edit metadata* from the selected map if you need to update these attributes again.
<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/editmapmetadata_dashboard.png' | prepend: site.baseurl }}" alt="Edit Map Metadata from Dashboard" /></p>

###Map Toolbar

The map toolbar includes options to add map elements (such as title, text, annotation, and image items), preview the map to configure it for desktop or mobile applications, and export a static image of your map. This toolbar appears above your map, from the Map View of a selected map.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/toolbar.png" alt="The toolbar" /></p>

#### Add Element

In Add Element, it is easy to add overlays on top of your map that help to better showcase your map and clarify the design. With this function you can quickly add fully customizable titles, texts, annotations, and images.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/addelement.png' | prepend: site.baseurl }}" alt="Map" /></p>

- **Add Title Item**
 When you add this item, a text box with a title format will appear on your map. You can place the title box wherever you want and edit the style.

- **Add Text Item**
 Similar to titles, text boxes will give you control over the position of a block of text on your map. You can place text boxes anywhere in your visualization and edit them.

 For annotation, title, and text box overlays, double clicking an element allows you to change the content. Clicking on the element opens the overlay customization toolbar. From here, the text size, colors, fonts, alignment, and box properties can be tailored to fit your map. The toolbar also allows for additional actions with your overlays such as bringing a layer forward or backward, duplicating a layer, or deleting an element entirely.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/edittext.png" alt="Text Edit Toolbar" /></p><br>

 - **Add Annotation Item**
 Annotations are text overlays linked to a coordinate and a zoom range. They allow users to explain and point to specific map elements. These overlays will remain fixed on a position on the map, and are excellent for annotating information, telling stories, or highlighting interesting information.

 Similar to the title and text overlays, clicking an annotation element brings up the customization toolbar. You will notice that a **Zoom (min-max)** option has been added. This allows for dynamic annotations and zoom-dependent labeling of map items.

 <p class="wrap-border"><img src="/img/layout/cartodb-editor/annotation.png" alt="The toolbar" /></p><br>

- **Add Image Item**
 An image can give extra value to your visualization. You will only need to add the image link to the box and it will pop up on your map. You can edit the box style color, the position, and also change the width with the customization toolbar.

####Preview Map

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/canvas.png' | prepend: site.baseurl }}" alt="Map" /></p>

We use our portable devices frequently to consume content, so there is a chance that many people will visit your maps using a mobile device. And that means a small screen in which not many elements will fit right. That's why we let you create responsive maps: you can design your map for desktop and mobile devices. We offer two canvases so you can design your map for each type of screen.

By default you are in Desktop view. If you switch to the Mobile view, you'll see that we crop the viewable area. If you include elements for the Desktop view, you'll see that they are not present when you switch to Mobile. You can create specific elements for this new view, and vice versa.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/mobile.png" alt="mobile" /></p>

####Export Image

The Export Image option enables you to export a static image of a map in .PNG format. You can adjust the zoom level and the size of the map before exporting it as an image. Once your map image is exported, you can print it and share it.

1. From the Maps View of a selected map. click *Export Image*

	Your map is selected and the export image options appear.
	
	<p class="wrap-border"><img src="/img/layout/cartodb-editor/export_image_button.png" alt="Export Image" /></p>
	
2. Adjust the zoom level by using the + or - buttons

3. Adjust the size of the image by clicking and dragging the edges of the selection. 

	The width and height changes in displays in pixels

3. Click *Export*, located underneath the selected image

	<p class="wrap-border"><img src="/img/layout/cartodb-editor/export_image_updated.png" alt="Export the Image" /></p>

	A confirmation dialog appears, indicating that your image has been generated correctly. 
	
	<p class="wrap-border"><img src="/img/layout/cartodb-editor/export_image_generated.png" alt="Export Image Confirmation" /></p>

4. Click *VIEW IMAGE* to view the exported .PNG image in a new tab
	
	**Tip:** Ensure that your browser pop-up blocker is disabled.
	
	You can also share this map image by sharing the URL to the exported image.

**Note:** Once your map image is exported, you can [print it](faqs.html#how-to-print-maps-in-cartodb).
	

### Edit Map Options

The following options are available from the *Edit* menu of the Data View or Map View of a selected map. 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/maps_edit_menu.png' | prepend: site.baseurl }}" alt="Map Edit Options" /></p>

**Tip:** These edit options are separate from the [(map display options](#displaying-map-options)), accessible from the bottom of a selected map. 

Map Edit Menu Options | Description
------------ | -------------
Export layer | A dataset appears as a layer on your map. You can export the dataset layer for use offline. This process is identical to exporting a dataset once you select *Export layer* from the Edit menu. For details, see how to [(Export Data](#export-data))
Georeference layer |  Edit your map and apply georeferencing coordinates to transform your data. This process is identical to the georeferencing dataset options once you select *Georeference layer* from the Edit menu. For details, see [(Georeference Data](#georeference-data))
Duplicate map |  Creates a duplicate of your map so that you have a backup copy of it. Note that changes applied to a duplicate map are not applied to the original
Change privacy | You can protect your map and identify the privacy setting. For details, see [Map Privacy Settings](cartodb-editor.html#map-privacy).
Lock map | To prevent your map from undesired changes, you can lock a map and hide it from your dashboard. For details, see the Frequently Asked Questions about [how to lock a dataset or map](http://docs.cartodb.com/faqs.html#how-can-i-lock-a-datasetmap)
Delete map | Deletes the selected map

### CartoDB Sidebar

The CartoDB sidebar enables you to access additional tools to help you customize your map data. The sidebar appears minimized by default from the Maps View. Clicking a sidebar option expands the options over your map.  This section describes the options available from the CartoDB sidebar.

The CartoDB sidebar appears minimized by default. When an option is selected, the sidebar expands displaying the related options. You can switch between minimizing and maximizing the sidebar options. The following example displays a side-by-side view of the sidebar option minimized and maximized. 
	
<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sidebar.png' | prepend: site.baseurl }}" alt="CartoDB Sidebar" /></p>


#### SQL

[SQL](https://en.wikipedia.org/wiki/SQL) (Structured Query Language) is how applications request data from a database. The CartoDB geospatial database is built on the [PostgreSQL](http://www.postgresql.org/docs/9.1/static/) platform and supports advanced [PostGIS](http://postgis.net/docs/manual-2.0/) capabilities. PostGIS allows you to perform geospatial queries, such as finding data points within a given radius, the area of polygons in your dataset, and so on.

SQL queries enable  you to:

- Request simple queries (*i.e.* "request all records from this dataset")
- Request queries that match certain conditions (*i.e.*  "request all records in which this field equals a certain value")
- Request more complex queries that combine data from two or more datasets

The *SQL* option is available from the CartoDB sidebar and displays when an SQL query is applied.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sqlquery.png' | prepend: site.baseurl }}" alt="SQL Query" /></p>

When you connect a dataset and create a map, all of the data in the dataset is displayed by default. You can apply an custom SQL query, or use the [filters](#filters) option, to view specific data. 

**Tip:**  If you apply a filter, the related SQL code automatically appears in the custom SQL query. This enables you to view and modify what SQL queries are applied to your data.  See the [SQL and PostGIS in CartoDB](http://academy.cartodb.com/courses/04-sql-postgis.html) Map Academy course for more details about querying your data.

#### Wizards

The CartoDB map wizard is an interface that enables you to quickly style your data layers. The *wizards* option is accessible from the CartoDB sidebar of the Map View. This section describes how to access the map wizard and includes details of the available styling options, based on your data. 

**Note:** The wizards options vary, depending on the type of dataset that is connected to your map. 

1. Click *Your maps* from your dashboard drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/common/dashboard_yourmaps.png' | prepend: site.baseurl }}" alt="Select Your Maps from Dashboard" /></p>

	The page refreshes, displaying a list of your maps.

2. Select the name of the map to view, or click the Edit icon on a map

    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/selectmap.png' | prepend: site.baseurl }}" alt="Select Map" /></p>

	The page refreshes, displaying the Map View for the selected map.

3. Click *wizards* from the CartoDB sidebar  

	The sidebar expands, displaying a list of style options based on your data.
	
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/wizards.png' | prepend: site.baseurl }}" alt="Wizards" /></p>	
	
4. Click a map type from the ribbon options to view the applicable styling options
		
	**Note:**  The wizards options vary, depending on the type of dataset that is connected to your map. Selecting a map type displays the applicable styling options in the wizard. 
	
	The following map types are available, depending on your data.

	Map Type | Wizard Options
	------------ | -------------
	Simple | {% include descrip_simple.html %} For details about all Simple styling options available from the wizard, see [Simple](#simple).|
	Cluster | {% include descrip_cluster.html %} For details about all Cluster styling options available from the wizard, see [Cluster](#cluster).
	Choropleth | {% include descrip_choropleth.html %} For details about all Choropleth styling options available from the wizard, see [Choropleth](#choropleth).
	Category | {% include descrip_category.html %}  For details about all Category styling options available from the wizard, see [Category](#category).
	Bubble | {% include descrip_bubble.html %} For details about all Bubble styling options available from the wizard, see [Bubble](#bubble).
	Torque | {% include descrip_torque.html %} For details about all Torque styling options available from the wizard, see [Torque](#torque).
	Heatmap | {% include descrip_heatmap.html %} For details about all Heatmap styling options available from the wizard, see [Heatmap](#heatmap).
	Torque Cat | {% include descrip_torque_category.html %} For details about all Torque Category styling options available from the wizard, see [Torque Category](#torque-category).	
	Intensity | {% include descrip_intensity.html %} For details about all Intensity styling options available from the wizard, see [Intensity](#intensity).
	Density | {% include descrip_density.html %}  For details about all Density styling options available from the wizard, see [Density](#density).

5. When you choose options from the wizard, the selected styling is automatically applied to your map

##### Simple
 {% include descrip_simple.html %} The following style options are available for Simple maps.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/simple.png' | prepend: site.baseurl }}" alt="Simple Wizard" /></p>

**Note:** Depending on your data, options appear as marker or polygon.

Simple Wizard Options | Description
------------ | -------------
Marker Fill | Contains all fill options for the point (point size, point image/pattern, point color, and point opacity). 
| {% include descrip_marker_size.html %}
| {% include descrip_select_img.html %} 
| {% include descrip_select_color.html %} 
| {% include descrip_opacity.html %} 
Marker Stroke |  {% include descrip_marker_stroke.html %} 
| **Note:** This option appears as *Polygon Stroke* when polygon data is detected by the map wizard.
Composite operation | {% include descrip_comp_op.html %}
Label Text | {% include descrip_label_text.html %} 
| Label Offset - Change how far the label text sits from the marker. Positive values display the label below the marker, negative values display the label above the marker. If set to `0`, the marker appears directly under the corresponding label.
| Label Overlap - Shows or hides overlapping labels. `false`, does not allow labels to overlap. Overlapping labels are hidden.
| Label Placement - Places labels on top of points, along multiple line places, on the vertexes of points, or in the interior inside a point.

**Note:** Conditional formatting is not supported for Simple maps.

##### Cluster
{% include descrip_cluster.html %} 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/cluster.png' | prepend: site.baseurl }}" alt="Cluster Wizard" /></p>

Cluster Wizard Options | Description
------------ | -------------
Buckets | {% include descrip_buckets.html %} 
Marker Fill | Contains the fill options for the point (point color and point opacity). 
| {% include descrip_marker_fill_color.html %} 
| {% include descrip_opacity.html %} 
Marker Stroke | {% include descrip_marker_stroke.html %} 
Marker size | The size of your markers, in pixels.
Label Font | Select the label font and color. 
Label Halo | {% include descrip_label_halo.html %} 

##### Choropleth
{% include descrip_choropleth.html %}
 
<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/choro.png' | prepend: site.baseurl }}" alt="Choropleth Wizard" /></p>

**Note:** Depending on your data, options appear as marker or polygon.

Choropleth Wizard Options | Description
------------ | -------------
Column | {% include descrip_column.html %} 
Buckets | {% include descrip_buckets.html %}
Quantification | {% include descrip_quantification.html %}
Color Ramp | {% include descrip_color_ramp.html %}
Marker Width | The width of the marker.
Marker Stroke | {% include descrip_marker_stroke.html %} 
| **Note:** This option appears as *Polygon Stroke* when polygon data is detected by the map wizard.
Composite operation | {% include descrip_comp_op.html %}
Label Text | {% include descrip_label_text.html %} 
| Label Offset - Change how far the label text sits from the marker. Positive values display the label below the marker, negative values display the label above the marker. If set to `0`, the marker appears directly under the corresponding label.
| Label Overlap - Shows or hides overlapping labels. `false`, does not allow labels to overlap. Overlapping labels are hidden.
| Label Placement - Places labels on top of points, along multiple line places, on the vertexes of points, or in the interior inside a point.

##### Category
 {% include descrip_category.html %}
 
<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/category.png' | prepend: site.baseurl }}" alt="Category Wizard" /></p>

**Note:** Depending on your data, options appear as marker or polygon.

Category Wizard Options | Description
------------ | -------------
Column | {% include descrip_column.html %}
Marker Fill | Contains the fill options for the point size (a value between 0-40) and the point opacity (a value between 0-1).
| **Note:** This option appears as *Polygon Fill* when polygon data is detected by the map wizard.
Marker Stroke |  {% include descrip_marker_stroke.html %} 
| **Note:** This option appears as *Polygon Stroke* when polygon data is detected by the map wizard.
List of detected map/legend items |  {% include descrip_item_img_color.html %}

##### Bubble
{% include descrip_bubble.html %} 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/bubble.png' | prepend: site.baseurl }}" alt="Bubble Wizard" /></p>

Bubble Wizard Options | Description
------------ | -------------
Column | {% include descrip_column.html %} 
Quantification | {% include descrip_quantification.html %}
Radius (min-max) | Set the sizes of the smallest and largest markers, or bubbles, on your map.
Bubble fill | Set the color and opacity of bubble markers.
Bubble stroke | Edit the width of your points’ border or outline (a value between 0-40), the color (using Hex codes or by selecting a color from the color palette), and the opacity (a value between 0-1).
Composite operation | {% include descrip_comp_op.html %}

##### Torque
{% include descrip_torque.html %}

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torque1.png' | prepend: site.baseurl }}" alt="Torque Wizard" /></p>

Torque Wizard Options | Description
------------ | -------------
Cumulative | Determines whether points remain on your map throughout the animation, or fade away.
Time Column | {% include descrip_time_column.html %}
Marker type | {% include descrip_marker_type.html %}
Marker Fill | Contains the fill options for the point size (a numeric value between 0-40), point color, and point opacity (a value between 0-1). 
Marker Stroke | {% include descrip_marker_stroke.html %} 
Duration (sec) | {% include descrip_duration.html %}
Steps | {% include descrip_steps.html %}
Blend Mode | {% include descrip_blend_mode.html %}
Trails | {% include descrip_trails.html %}
Resolution | {% include descrip_resolution.html %}

##### Heatmap
{% include descrip_heatmap.html %}

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torqueheat.png' | prepend: site.baseurl }}" alt="Torque Heat Wizard" /></p>

Heatmap Wizard Options | Description
------------ | -------------
Marker size | Choose the size of your markers.
Opacity | Sets the opacity for the heatmap, a value between 0-1.
Animated | Displays temporal data into a linear Torque animation.
Resolution | {% include descrip_resolution.html %}

##### Torque Category
{% include descrip_torque_category.html %}

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecategory.png' | prepend: site.baseurl }}" alt="Torque Category Wizard" /></p>

Torque Cat Wizard Options | Description
------------ | -------------
Time Column | {% include descrip_time_column.html %}
| **Note**: If you select Torque Category as the map type, ensure your SQL query is not using `torque_category` as a column name, to prevent unexpected behaviors.
Marker type | {% include descrip_marker_type.html %}
Category Column | {% include descrip_column.html %}
Marker Fill |  Contains the fill options for the point size (a numeric value between 0-40), point color, and point opacity (a value between 0-1). 
Marker Stroke | {% include descrip_marker_stroke.html %} 
Duration (sec)|  {% include descrip_duration.html %}
Steps | {% include descrip_steps.html %}
Blend Mode | {% include descrip_blend_mode.html %}
Trails | {% include descrip_trails.html %}
Resolution | {% include descrip_resolution.html %}
List of detected map/legend items | {% include descrip_item_img_color.html %}

##### Intensity
{% include descrip_intensity.html %}

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/intensity.png' | prepend: site.baseurl }}" alt="Intensity Wizard" /></p>

Intensity Wizard Options | Description
------------ | -------------
Marker Fill | Contains the fill options for the point size (a numeric value between 0-40), point color, and point opacity (a value between 0-1). 
Marker Stroke |  {% include descrip_marker_stroke.html %} 

##### Density
{% include descrip_density.html %}

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/density.png' | prepend: site.baseurl }}" alt="Density Wizard" /></p>

**Tip:** When Density is selected as the map type, infowindow options are disabled. If you need to apply [infowindows](#infowindows) functionality, select *Intensity* as the map type instead.

Density Wizard Options | Description
------------ | -------------
Method | Displays density with either the hexagon or rectangle shape.
Buckets | {% include descrip_buckets.html %}
Color ramp | {% include descrip_color_ramp.html %}
Polygon Stroke | Edit the width of your points’ border or outline (a value between 0-40), the color (using Hex codes or by selecting a color from the color palette), and the opacity (a value between 0-1).
| <img src="{{ '/img/layout/cartodb-editor/polygon_stroke_color.png' | prepend: site.baseurl }}" alt="Select polygon stroke color" />
Polygon size |  Adjust the size of the polygons on your map.
Composite operation | {% include descrip_comp_op.html %}
  
#### Infowindows

You can add a pop-up information window over select points on your published map, either by clicking on the point or hovering your mouse over a point. You can choose which data points appear in the infowindow, style the infowindow color and width, display the default title of the points, or add custom title labels for each point. Additionally, you can create custom infowindows with HTML code directly from the CartoDB Editor. Infowindows is available from the CartoDB sidebar of the Map View.   

1. From the Map View of a selected map, click *infowindows* from the CartoDB sidebar  

	**Note:** infowindows are not supported for every map type. Depending on the map type selected from the [wizard](#wizards), the infowindow option may be disabled.
	
	The sidebar expands, displaying the infowindows options.
	
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/infowindows.png' | prepend: site.baseurl }}" alt="Infowindows" /></p>
	
2.  You can add infowindows for *Click* actions or for *Hover* actions 

	**Tip:** Click between the subtabs to style either the click infowindow or the hover infowinodow

	Infowindow Options | Description
	------------ | -------------
	infowindow style | The drop-down list displays infowindow style options.
	| **Tip:** You can apply a custom image header to an infowindow. For details, see [How to add my own images to infowindows?](faqs.html#how-to-add-custom-images-to-infowindows)
	infowindow width | The width field enables you to change the size of the infowindow, in pixels.
	Enable data points | Each of the data points on the map is listed, you can enable the data point to appear with the slider button
	Change the order of labels | You can change the order of the labels that appear. Left-click and drag a data label up or down in the infowindow options
	| <img src="{{ '/img/layout/cartodb-editor/infowindow_changeorder.png' | prepend: site.baseurl }}" alt="change the order of the infowindow data points" />
	Hide the label title | When a data point is enabled, and the title checkbox is selected, the default title of the data point appears in the infowindow. You can deselect the title checkbox to hide the title from the infowindow.  The data point value still appears when clicked (or hovered).
	Change title label | To create custom labels for infowindow data points, click *Change title labels* from the infowindow toolbar and type in your own label name. Click *Toggle fields and titles* to return to the original view.
	| <img src="{{ '/img/layout/cartodb-editor/infowindow_label.png' | prepend: site.baseurl }}" alt="change title label in infowindow" />
	Change HTML |  If you want to create your own custom infowindow, click *Change HTML* from the infowindow toolbar. Apply [custom HTML code](faqs.html#how-to-customize-infowindows) to create and style your own infowindow. 
	| <img src="{{ '/img/layout/common/infowindow_changehtml.png' | prepend: site.baseurl }}" alt="Infowindow Change HTML" />
	| There is a tip icon next the width field when *Change HTML* is selected from infowindows.
	| <img src="{{ '/img/layout/common/infowindow_htmltip.png' | prepend: site.baseurl }}" alt="Infowindow Change HTML tip icon" />
	| Click to view additional guidelines and examples for creating HTML infowindows.
	| <img src="{{ '/img/layout/common/infowindow_html_tipdialog.png' | prepend: site.baseurl }}" alt="Templating infowindows dialog" />

3. Click [*Publish*](#publish-and-share-your-map) to view your map and click (or hover) over points to view the infowindow

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/infowindow_published.png' | prepend: site.baseurl }}" alt="Infowindow on click" /></p>
	
**Tip** If you receive an error message while trying to view an infowindow, ensure that you have the correct connection setup. For details, see [Why is my infowindow showing an error?](faqs.html#why-is-my-infowindow-showing-an-error)

#### CartoCSS

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/cartocss.png' | prepend: site.baseurl }}" alt="CartoCSS" /></p>

CartoCSS is the syntax language that allows users greater control over how their data appear on their maps. When you customize CartoCSS, you're able to control style settings like marker size, marker color, line stroke, and text display at a more granular level than the wizards permit. If you have used Cascading Style Sheets for styling webpages, then CartoCSS will be familiar, but there are key differences to note.

CartoDB uses a flavor of CartoCSS developed by [Mapbox](https://www.mapbox.com/). Follow the links to check out some of their excellent documentation:

- [CartoCSS API](https://www.mapbox.com/carto/api/2.3.0/)

Learn the basics of CartoCSS and designing data for your maps with our [Introduction to map design]({{ '/courses/02-design-for-beginners.html' | prepend: site.academy-baseurl }}) course.

CartoCSS options available to edit from the CartoDB Editor wizards include:

- __Marker-fill:__ choose the color of your markers, the size of your markers and the transparency level of your markers (from 0 to 1)

- __Marker-size:__ adjust the size of your markers

- __Marker-stroke:__ adjust the border color of your markers, thickness of the border, and transparency (from 0 to 1)

#### Torque CartoCSS
In addition to being able to customize the look of your maps using CartoCSS, Torque maps have specific options you can change.

##### Torque

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSS.png' | prepend: site.baseurl }}" alt="Torque CartoCSS" /></p>

- __Torque Frame Count:__ the number of steps in your torque animation.

- __Torque Animation Duration:__ the length of your animation.

- __Torque Time Attribute:__ the name of the date column in your dataset.

- __Torque Aggregation Function:__ Torque renders your data in clusters, choose what value to show such as max values only, or count how many values are in each cluster.

__Example functions:__ count(column_name), max(column_name), sum(column_name). Column data type must be numeric.

Learn more about [how spatial aggregation works](https://github.com/CartoDB/torque/wiki/How-spatial-aggregation-works).

- __Torque Resolution:__ Torque creates a grid from your data and aggregates data to each cell of that grid. Torque resolution determines width and height of each cell. Larger numbers will make your data more gridded.

- __Torque Data Aggregation:__ two options, linear which does not leave a trace of past data, and cumulative which draws data markers cumulatively to show past data.

##### Torque Category

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSScat.png' | prepend: site.baseurl }}" alt="Torque Category CartoCSS" /></p>

Torque Category has much of the same Torque CartoCSS in addition to a few different options available for customization.

- __Torque Aggregation Function:__ Torque renders your data in clusters. Torque Category uses a PostgreSQL command, CDB_Math_Mode(torque_category) to find the values that appear most often in your data in order to cluster your data accordingly.

Learn more about [how spatial aggregation works](https://github.com/CartoDB/torque/wiki/How-spatial-aggregation-works).

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSSframeoffset.png' | prepend: site.baseurl }}" alt="Torque CartoCSS Frame Offset" /></p>

Once your data is aggregated, you can further customize your Torque animation options by changing the marker styles for each frame of your animation by customizing the options found under the frame-offsets and adding additional frame-offsets.

You can also select each cluster value to change marker styles based on your data categories. For instance, if you want to style the maximum value in your dataset to have different marker styles, you would change the marker styles for the maximum value in your animation, which you will find by looking at the values in your CartoCSS.

##### Torque Heat

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/torquecartoCSSheat.png' | prepend: site.baseurl }}" alt="Torque Heat CartoCSS" /></p>

Torque Heat has much of the same Torque CartoCSS in addition to a few different options available for customization.

- __Image Filters:__ this option lets you determine the color stop for your heatmap.

- __Marker File:__ CartoDB provides marker files for you, this option can’t be changed.

- __Marker Fill Opacity:__ Change the opacity of the markers.

- __Marker Width:__ Change the width of the markers.

#### Composite Operations

Composite operations style the way colors of overlapping markers interact with each other. You can think of them as blend modes or filters, similar to blend operations in Photoshop. Composite operations are available in the Simple, Choropleth, Bubble, Density, and Torque maps.

The available options within the wizards interface include multiply, screen, overlay, darken, lighten, color-dodge, and color-burn. In addition, blend modes specific to Torque include lighter, multiply, source-over, and xor. For more information on the different options available, refer to the documentation on [Mapbox](https://www.mapbox.com/tilemill/docs/guides/comp-op/).

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/markercompop.png' | prepend: site.baseurl }}" alt="Marker CartoCSS Composite Operations" /></p>

Customize the marker composite operations within the CartoCSS by editing the marker-comp-op option.

#### Legends
You can add and style a map legend for a published map. Map legends can be symbols and text that describe your map data.  You can add a legend title, apply label text for the legend and define how the label text appears. You can also customize the color of your legend elements.  Each map type has a default legend template that you can apply and personalize. Additionally, you can create custom legends with HTML code directly from the CartoDB Editor. Legends is available from the CartoDB sidebar of the Map View.   

1. From the Map View of a selected map, click *legends* from the CartoDB sidebar 

	The sidebar expands, displaying the legend template options.

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/legends.png' | prepend: site.baseurl }}" alt="Legends" /></p>
		
2.  Select a template from the drop-down list to enable your legend options

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/legend_template.png' | prepend: site.baseurl }}" alt="Legend Template drop-down list" /></p>
		
	- Click *none* to disable the legend for the map layer
	- Click *custom* to apply your own custom legend	
	- Click the legend template name based on your map type

	**Note:** The available legend templates are dependent on the map type. When you select a map type from the [wizard](#wizards), the corresponding template name is automatically applied in the legend section. 
	
3.  Select and style your legend options

	Legend options vary, depending on your map type. The following side-by-side example shows the *intensity* legend template options, and the *custom* legend template options.
	
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/legend_template_selected.png' | prepend: site.baseurl }}" alt="Legend Template selected" /></p>

	The following legend options may appear.

	Legend Options | Description
	------------ | -------------
	Template | Displays the template for the legend. The available legend template is based on your map type. Select *custom* to create your own legend.
	|  **Tip:** To disable a legend for a map layer, select *none* as the legend template.
	Title | Add a custom title for your legend, and show or hide the title.
	Left Label | Show the label text to the left of your legend. You can also edit the left label name.
	Right Label | Show the label text to the right of your legend. You can also edit the right label name.
	| **Tip:** Other legend labels may appear depending on your map type. You can customize the legend labels for each element. 
	|  <img src="{{ '/img/layout/cartodb-editor/legend_edittext.png' | prepend: site.baseurl }}" alt="Edit legend label text" />
	Colors | Set the colors of the individual items in your legend. You can also synchronize with your map marker colors, when applicable.  (Depending on your template, color options may vary).
	| <img src="{{ '/img/layout/cartodb-editor/legend_color.png' | prepend: site.baseurl }}" alt="Legend color selector" />
	| **Tip:** For some legend elements, you can also apply an image. Select *IMG* to select a symbol. You can also upload your own icons from this image option.
	Change HTML |  If you want to create your own custom legend, click *Change HTML* from the legends toolbar. Apply custom HTML code to create and style your own legend. 
	| **Note:** Select *custom* from the Template drop-down list to apply HTML code to a custom template.  *While you can change the HTML code for an existing template, we recommend that you create a custom template if you are going to change the HTML code.*
	| <img src="{{ '/img/layout/cartodb-editor/legend_changehtml.png' | prepend: site.baseurl }}" alt="Legent Change HTML" />
	|  Click *Toggle fields and titles* to return to the original legends view.
	| <img src="{{ '/img/layout/cartodb-editor/legend_toggle.png' | prepend: site.baseurl }}" alt="Legent Toggle fields and titles" />

4. Click [*Publish*](#publish-and-share-your-map) to view your legend on your map

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/legend_output.png' | prepend: site.baseurl }}" alt="Example Legend on a published map" /></p>
	
	**Tip:** To view other beautiful maps, see the CartoDB [Gallery](https://cartodb.com/gallery/) page.

#### Filters

When you connect a dataset and create a map, all of the data in the dataset is displayed by default. You can use the filters option to view specific data, or specify a range of data to include or exclude.  The filters option is available from the CartoDB sidebar from the Data View and Map View, for both maps and datasets.

**Note:**  If you apply a filter, the related SQL code automatically appears in the custom SQL query. This enables you to view and modify what SQL queries are applied to your data.  See the [SQL and PostGIS in CartoDB](http://academy.cartodb.com/courses/04-sql-postgis.html) Map Academy course for more details about querying your data.

1. From the Data View (or Map View), in CartoDB, click *filters* from the CartoDB sidebar 

	The sidebar expands, enabling you to start filtering your data.

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/filters.png' | prepend: site.baseurl }}" alt="Filters" /></p>

2. Select a column to filter to your data

	A list of columns from your dataset appears in the drop-down list.  
	
	**Tip:** The lettered box next to the column name indicates the type of value for the data. For example, *N* are number values, *S* are string values, and *D* are date values.
	
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/filter_selectcolumn.png' | prepend: site.baseurl }}" alt="Select column drop-down list" /></p>
	
	
	Optionally, if you are in the Data View, you can use the column context menu to filter by the selected column.
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/filter_by_this_column.png' | prepend: site.baseurl }}" alt="Data View_filter by this column" /></p>
	
3.  Include or exclude a specified range of results, as part of the filtered data  

	- For numerical data, select a range to include in your map.  Left-click the slider button and drag the edges to change the range of data
	<img src="{{ '/img/layout/cartodb-editor/filters_range.png' | prepend: site.baseurl }}" alt=" Select a range of data" />
	
	- For string (or text) data, enter a value to include or exclude, as part of the filtered data
	<img src="{{ '/img/layout/cartodb-editor/filter_bysearch.png' | prepend: site.baseurl }}" alt=" Filter by search value" />
	
	Your data refreshed as filters are applied.
	
You can apply multiple filters to your data and create a new dataset from your query, or clear your filtered data.  When you apply filters to published map, the filters are included in the map output. The following example displays multiple filters applied to a dataset.
<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/filters_multiple.png' | prepend: site.baseurl }}" alt="Multiple filters applied" /></p>

**Tip:** To view a video tutorial about filters, see [Introduction to data filters]({{ '/tutorials/filters.html' | prepend: site.baseurl }}).

#### Add Feature
Typically, you add rows and columns to your dataset from the Data View.  The *Add feature* option, available from the CartoDB sidebar, enables you to add points. lines, or polygons directly on your map and add new coordinates to your dataset. As opposed to importing data, you can add points (lines, polygons) as you visualize features on the map. 

1. From the Map View of a selected map, click *Add feature* from the CartoDB sidebar 

	**Note:** The sidebar does *not* expand. The add feature action appears on your map.
	
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sidebar_addfeature.png' | prepend: site.baseurl }}" alt="Add feature from CartoDB sidebar" /></p>
	
	**Tip:** If you are starting from an [empty dataset](#create-an-empty-dataset), a dialog appears, guiding you to add points, lines, or polygons.
	
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/addfeature.png' | prepend: site.baseurl }}" alt="Add feature dialog" /></p>
	
2. On your map, click where you would like to add the point, line, or polygon coordinates
	
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/addfeature_polygon.png' | prepend: site.baseurl }}" alt="Add feature polygon" /></p>

3. Click *done* to add the coordinates

	Your map updates, displaying the added coordinates.  
	
4. Edit details of the coordinate. You can select fields for the infowindow, edit the metadata, edit the geometry, or delete the feature.

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/addfeature_edit.png' | prepend: site.baseurl }}" alt="Add feature edit coordinates" /></p>
	
	**Tip:** The number that appears for the added feature displays the corresponding row in the dataset. You can also edit the details for the added coordinates directly from the Data View.
	
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/addfeature_dataview.png' | prepend: site.baseurl }}" alt="Add feature edit coordinates from Data View" /></p>

### Basemaps

A basemap is a graphical representation of the world showing natural and cultural features such as water bodies, topography, park areas, points of interest, geopolitical borders, roads, streets, and sometimes buildings. CartoDB provides you with a selection of basemap options and providers (such as Stamen or Here). You may import your own custom basemap (from Mapbox, an XYZ tileset (e.g. Stamen maps), or WMS.) or use a solid background color, repeating image, or pattern. With the easy-to-use basemap selector, you can focus on an aesthetically pleasing way of visualizing your data.

#### Changing your basemap

The default basemap for the *Here* layer of a map is *Nokia Day*. The *Change basemap* options enable you to change your basemap and style. You can link to an external URL basemap with the *Yours* option. Additionally, you can add a custom solid color, or a repeating image pattern, instead of a basemap with the *Change basemap* options.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/change_basemap_options.png' | prepend: site.baseurl }}" alt="Change Basemap" /></p>

**Note:** *Change basemap* options are applied immediately and do not alter any other layers in your map.

#### Including an external basemap

Apart from the default basemaps offered in CartoDB, you may integrate third-party basemaps to customize your maps even further. The following procedure describes how to add a custom basemap from an external resource.  

  1. Click *Change basemap*, located on the bottom left of a selected map  

  2. Expand *Yours* to add an external resource  
  
  <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/change_basemap_yours.png' | prepend: site.baseurl }}" alt="Add your own NASA basemap" /></p>  

  The following image, and table, display the available external resources to choose from.  

  <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/add_custom_basemap.png' | prepend: site.baseurl }}" alt="Add custom basemap option" /></p>  

  External Basemap Resource | Description  
  ------------ | -------------
  XYZ | XYZ Templates enable you to access many other basemaps, including those from OpenStreetMap and Stamen. Insert the basemap URLs and click *ADD BASEMAP*. For example:
  | **Stamen Toner:** `http://{s}.stamen.com/toner/{z}/{x}/{y}.jpg`
  | **Stamen Terrain:** `http://{s}.stamen.com/terrain/{z}/{x}/{y}.jpg`
  | **Stamen Watercolor:** `http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg`
  | **OSM:** `http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`
  WMS/WMTS | A WMS, or Web Map Service, enables you to connect to online generated map images by a map server using data from a GIS database. Insert your WMS/WMTS URL and click *GET LAYERS*. For example, [WMS baselayer](http://nationalatlas.gov/infodocs/wms_intro.html).
  | **Note:** Currently, CartoDB only supports WMS files containing data that uses [EPSG:900913 (Web Mercator)](https://en.wikipedia.org/wiki/Web_Mercator) or [EPSG:3857](http://en.wikipedia.org/wiki/Web_Mercator#EPSG:3857) coordinates.
  NASA | Enables you to select a basemap provided by NASA Worldview. Select a date from which you want a global basemap and indicate Day (a day map changes based on the day selected) or Night
  Mapbox | Mapbox is a service which lets you customize the design of a basemap with custom colors and elements. Insert your Mapbox URL and access token to add the basemap
  TileJSON | Enables you to insert an open platform, web map by inserting the TileJSON URL. A TileJSON map contains tiles, minzoom and maxzoom as mandatory fields  
    
  The map refreshes, displaying the external resource as a basemap layer.  

#### About Map Projections

We all know by now that the earth isn't flat. Maps, however, are. As 2D representations of the globe, maps are inevitably distorted. The methods used to digitally render the earth are called  [map projections](http://en.wikipedia.org/wiki/Map_projection). Different types of projections are used to represent the earth at various scales. From the continents to a single region or state / province, each projection type must preserve certain properties at the expense of others such as area, direction, shape, and distance.

The majority of online maps are a variant of the [Mercator Projection](https://en.wikipedia.org/wiki/Mercator_projection), commonly referred to as the Web-Mercator. Currently, CartoDB relies on this projection.

You can learn more about [map projections on Wikipedia](http://en.wikipedia.org/wiki/Map_projection), and read up on all the details about how CartoDB handles [projections internally]({{ '/tutorials/projections.html' | prepend: site.baseurl }}).

### Displaying Map Options

In addition to changing your basemap, you can also control which options are visible on your map by using the *Options* selector. Click the slider button to display the selected option as visible or hidden on the map. 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/map_display_options.png' | prepend: site.baseurl }}" alt="Map display options" /></p>

**Tip:** Some options are only active when viewing your map from your public profile page, not from the preview map of your dashboard.

Map Option | Description
------------ | -------------
Fixed tile | Displays your map title on the map
Fixed description | Displays your map description on the map
Search box | Displays a search box on the map, enabling you to search for data points
Share options | Displays an icon for sharing your map. You can share your maps on social media, get a link to the map, or embed it using HTML code. For details, see [(Sharing Maps](#how-do-i-share-a-map))
Scroll wheel zoom | Displays the ability to zoom with the scroll wheel of your mouse
Layer selector | Enables you to display the visible layers on the map
Legends | Displays any map legends. For details about how to create legends, see [(Legends](#legends))
Fullscreen | Enables you to view the map in fullscreen mode
CartoDB Logo | Enables you to include or hide the CartoDB logo on your map
| **Note:** Based on your [(account settings](faqs.html#how-do-i-remove-the-cartodb-logo-from-my-map)), this option may not be enabled.

### Publish and Share Your Map

{% include sharingmaps.html %}

### Supported Fonts

- **DejaVu Sans**  
Oblique, Bold, Oblique, Bold Oblique, Condensed, Condensed Oblique, Condensed Bold Oblique

- **DejaVu Sans Serif**  
Condensed, Condensed Italic, Book, Condensed Bold Italic, Italic

- **Unifont**  
Medium

- **Open Sans**  
Regular, Bold, Semibold, Light, Italic, Bold Italic, Semibold Italic, Light Italic

## Managing Your Data

While you can apply many styling options with the CartoDB Editor, you can also apply georeference data and run several types of queries to manage and visualize your data.

### Georeference Data

CartoDB understands that geocoding is essential to data management. You can edit your dataset (or map) and apply georeferencing coordinates to transform your data. This section describes the available georeference options.

#### Editing Georeference Data

1. Click *Your datasets* from the dashboard drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/common/select_your_dataset.png' | prepend: site.baseurl }}" alt="Select Dataset" /></p>

    The page refreshes, displaying a list of your datasets.

2. Select the name of the dataset to view  

    <p class="wrap-border"><img src="{{ '/img/layout/common/selected_dataset_name.png' | prepend: site.baseurl }}" alt="Select Name of Dataset" /></p>

    The page refreshes displaying the Data View for the selected dataset. 

3. Select *Georeference* from the Edit drop-down menu  

    <p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/dataset_edit_georeference.png' | prepend: site.baseurl }}" alt="Edit Georeference Data" /></p>
		
	**Tip:** If editing georeference data from a map, the georeference coordinates appear as a layer within a map. Select *Georeference layer* from the [(Edit map options](#edit-map-options)) of a selected map.
	
	The georeference options appear. 
   
4. Select the georeference data category
	
	The following table describes the available georeference data categories.
	
	Georeference Category | Description
	------------ | -------------
	Long/Lat Columns | When uploading a dataset, the map automatically renders the marker and polygon values as the latitude and longitude coordinates. To identify a georeference data point, select the specific longitude and latitude column from the drop-down menu
	| The following image displays the default georeference data options, with *Lon/Lat Columns* selected. 
	| <img src="{{ '/img/layout/cartodb-editor/georeference_lon_lat.png' | prepend: site.baseurl }}" alt="Georeference Longitude and Latitude Coordinates" />
	| **Tip:** Click the georeference category name to refresh the view and display the related options.
	City Name | Click *City Names* to view the georeference city name options, and select the column where your city names are stored in your dataset. To improve the accuracy of the georeference data, you can also indicate the administrative region and country (if known)
	Admin. Regions | Click *Admin. Regions* to view the georeference administrative region options, and select the column where your region names are stored in your dataset. If the selected region column is not country data, you can also indicate the column where this type of data is stored
	|  **Note:**  The CartoDB database automatically loads polygon region data for states and municipalities.
	Postal Codes |  Click *Postal Codes* to view the georeference postal code options, and select the column where your postal codes are stored in your dataset. To improve the accuracy of the georeference data, you can also indicate the country where the postal codes are located (if known)
	IP Addresses |  Click *IP Addresses* to view the georeference IP Address name options, and select the column where your IP Addresses are stored in your dataset. This enables you to convert IP Addresses into geographical locations on your map
	Street Addresses |  Click *Street Addresses* to view the georeference street address options, and select the column where your street addresses are stored in your dataset. To improve the accuracy of the georeference data, you can also indicate the state/province and country (if known)
	| **Note:** Street address data is allocated to your account and based on a permitted amount of credits per month. Any geocode matches to the indicated street address consumes credits from your account.
	
5. Click *CONTINUE* to save and apply the georeference data coordinates  

**Note:** CartoDB may use a third party to provide geocoding and reverse geocoding services. Geocoding services are subject to the third parties [terms and conditions](http://developer.here.com/terms-conditions).

### Running SQL Queries

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/sql-queries.png' | prepend: site.baseurl }}" alt="Running SQL queries" /></p>

CartoDB enables you to query data using the Structured Query Language (SQL). We provide particular support for PostGIS SQL commands, which allows you to filter data spatially. Some common uses of PostGIS SQL queries are to answer questions such as, "How many points from one dataset are located within a polygon from another dataset?" Or commands such as, "Give me all my data within 50 kilometers of a certain latitude longitude coordinate."

Review the PostgreSQL [documentation](http://www.postgresql.org/docs/9.3/interactive/sql.html) for how to use PostgreSQL flavored SQL, as well as the [PostGIS documentation](http://postgis.net/documentation/) for tips on writing spatial queries. Additionally, CartoDB has tutorials on how to run SQL queries.

To run a SQL query in the CartoDB dashboard, open a dataset or map. In the righthand sidebar, click the SQL icon. The sidebar will expand and by default you will see the following query:

{% highlight sql %}
SELECT * FROM dataset_name
{% endhighlight %}

You can modify this query and then hit the "Apply query" button or press `cmd + s` on a Mac OS or `ctrl + s` on a Windows OS. An example of a modified query might look like the following:

{% highlight sql %}
SELECT * FROM ne_10m_populated_places_simple WHERE featurecla = 'Admin-0 capital'
{% endhighlight %}

This query will select all rows that have a "featurecla" column value of "Admin-0 capital" from the dataset "ne_10m_populated_places_simple." Only the rows that match this SQL query will appear in the dataset and map view for this dataset. Remember that when applying SQL queries to maps, only the queried data will be shown.

### Dataset from Query

It is possible to create a new dataset from a SQL query. After applying your modified SQL query, click "options" in the upper-right corner, and select "Dataset from query" within the drop-down menu. You will be asked to name your new dataset from the query. After naming the dataset, CartoDB will save and load it for you.

### Merging Data

Whether you are using data from public repositories or your own datasets, sometimes it is useful to join information from two datasets. You can always do this via your own SQL but CartoDB makes it easier with our merge tool.

The most basic way to join two datasets is by a shared unique value or a "Regular Join." For example, country ISO codes are often used to merge the_geom from one dataset and population count from another. Regular Joins are also very useful for attributes like shared IDs, country names, or dates.

#### Merge by Regular Join

Regular Joins are useful if you have two datasets that share a common value in rows. For example, country level datasets often contain an ISO code for each row. If you have two of these datasets and want to join all or some of their values into a single dataset, then this option is for you. Follow the steps below:

1. From the dataset you have created, click "options" in the upper right corner.
2. Select "Merge datasets."
3. Click the radio "Regular Join."
4. The left-hand menu contains your first dataset. Toggle on or off the columns you want to include in the join.
5. The right-hand menu is for loading your second dataset. Click the drop-down menu and select or begin typing the name of your second dataset.
6. In the second dataset, toggle on or off the columns from the second dataset you want to join to the first.
7. Use the radio to the left of the column names in both the first dataset and the second to select the column in the first dataset that corresponds to a value in the second dataset. Do the same for the correct column name in the second dataset menu.
8. Finally, hit "Next," enter your new dataset name and wait for the dataset to be processed.

#### Merge by Spatial Join

Spatial Join calculates the intersecting geospatial records between two datasets (ex. points in polygons). You'll need to decide the operation to perform.

Similar to Excel, **COUNT** calculates the number of intersecting records, **SUM** adds together a column value for all intersecting records, and **AVG** provides the average value of a column for all intersecting records.

### Export data

{% include export_dataset.html %}

#### Download by URL

There is a pro-tip for accessing downloads by using your direct dataset URL. You can make use of the SQL API to run any query and ask for the results to be retrieved in different formats. For example:
DOWNLOAD BY URL

{% highlight bash %}
https://{USERNAME}.cartodb.com/api/v2/sql?format=csv&q=SELECT+*+FROM+tm_world_borders_sim
{% endhighlight %}

### Creating Indexes

Advanced users can squeeze better performance out of their maps and SQL API requests by adding custom indexes onto columns. In general, you should seek this functionality if you:

1. Are filtering a dataset by values in one or a few columns
2. If you are regularly querying up data through the SQL API and filtering by one or a few columns
3. If you are creating Torque maps on very large datasets

In most cases, a single column index is the safe way to go. For Torque maps, a single column index on the column used to play the data (e.g. the date or numeric column) is optimal. To create a single column index, use this SQL pattern:

{% highlight sql %}
CREATE INDEX idx_{DATASET NAME}_{COLUMN_NAME} ON {DATASET_NAME} ({COLUMN_NAME})
{% endhighlight %}

There are more advanced indexes you can use in CartoDB, such as multi-column indexes. However, they are not a magic wand (our Wizard maintains that glory), so we recommend that you read the full documentation on [PostgreSQL Indexes](http://www.postgresql.org/docs/9.1/static/sql-createindex.html) before proceeding.

Indexes will take space from your quota. But CartoDB adds some of our own indexes that are not counted against your quota, so there is no need to index the automatically generated columns in CartoDB (e.g. the_geom and cartodb_id).

## Error Codes and Solutions

### Importer Error Codes

We try to predict and provide solutions for as many problems as we can, but we're not omniscient...yet. For rare cases when we're caught off-guard, we categorize your error and report back to you at the time of import. Please reach out to us for assistance on our [support platform]({{ '/docs#support' | prepend: site.cartodb-baseurl }}).

Here, we try to anticipate your needs and provide a set of errors with possible solutions.

<table>
  <tbody>
    <tr>
      <td>1000</td>
      <td>File I/O error.</td>
    </tr>
    <tr>
      <td>1001</td>
      <td>Download error - The remote URL returned an error. Please verify your file is available at that URL.</td>
    </tr>
    <tr>
      <td>1002</td>
      <td>Unsupported file type - Check our list of supported files. See if you can convert your file to one of these file types.</td>
    </tr>
    <tr>
      <td>1003</td>
      <td>Decompression error - Try decompressing and regenerating your compressed file on your computer. If that fails, then locate the original file and make a new compressed version.</td>
    </tr>
    <tr>
      <td>1004</td>
      <td>File encoding error - Sometimes we have difficulty with non UTF-8 files, so try converting your file to UTF-8. You can do this in Excel by exporting your data as Unicode Text.</td>
    </tr>
    <tr>
      <td>1005</td>
      <td>Zero byte file - The file appears to have no information. Double check using a local tool such as QGIS that the file is indeed correct.</td>
    </tr>
    <tr>
      <td>1006</td>
      <td>Invalid SHP file - Your file appears broken. Double check that all the necessary parts of the file are included in your ZIP archive (including .SHP, .PRJ, etc.). Also, try opening the file locally using QGIS or another tool.</td>
    </tr>
    <tr>
      <td>1007</td>
      <td>Too many nodes - You requested too many nodes. Either request a smaller area, or use planet.osm.</td>
    </tr>
    <tr>
      <td>1010</td>
      <td>Private Google Spreadsheet - This spreadsheet seems to be private. Please check your Google Spreadsheet sharing options and that the file is public or accessible for those who know the link.</td>
    </tr>
    <tr>
      <td>1020</td>
      <td>Data download timed out. Check the source is not running slow and/or try again.</td>
    </tr>
    <tr>
      <td>2000</td>
      <td>File conversion errors.</td>
    </tr>
    <tr>
      <td>2001</td>
      <td>Unable to parse data - Please contact support and we will help you sanitize it.</td>
    </tr>
    <tr>
      <td>2002</td>
      <td>File encoding detection error - Try saving your file with encoding UTF-8 or contact support and we will help you to load your data.</td>
    </tr>    
    <tr>
      <td>2003</td>
      <td>The CSV or converted XLS/XLSX to CSV file contains malformed or invalid characters. Some reasons for this error can be for example multiline header fields or multiline cells at Excel files or unquoted CSV.</td>
    </tr>
    <tr>
      <td>2004</td>
      <td>Data has too many columns. You can only import up to 1600 columns. You can delete the columns you're not interested in, or split the file into smaller ones.</td>
    </tr>
    <tr>
      <td>2005</td>
      <td>File has the same header for two or more columns. Please make column names unique and try again.</td>
    </tr>
    <tr>
      <td>2006</td>
      <td>Problem reading the file. Encoding seems wrong, probably because there's a wrong character. In order to sort it out, open your file with a text editor, save it with encoding UTF-8 and try again.</td>
    </tr>
    <tr>
      <td>2007</td>
      <td>Import failed due to encoding issues. To fix this, force the encoding of your file using a text editor or a tool like QGis. You just need to export your files in UTF-8 format.</td>
    </tr>    
    <tr>
      <td>3000</td>
      <td>Geometry error.</td>
    </tr>
    <tr>
      <td>3004</td>
      <td>Unable to read SHP file - Try opening your SHP file in a local program, such as QGIS. Does it open and display correctly? If so, then try exporting it as a new SHP file and uploading to CartoDB.</td>
    </tr>
    <tr>
      <td>3005</td>
      <td>SHP to PGSQL error.</td>
    </tr>
    <tr>
      <td>3100</td>
      <td>Projection error - CartoDB supports many projections, but sometimes your file will have one we don't recognize. In these cases, please try re-projecting your file in QGIS or ArcGIS&trade;. Or, if you want to use this projection many times, submit a query to the support page.</td>
    </tr>
    <tr>
      <td>3101</td>
      <td>Unsupported or missing projection - see 3100 above.</td>
    </tr>
    <tr>
      <td>3102</td>
      <td>Unable to force geometry to 2-dimensions.</td>
    </tr>
    <tr>
      <td>3200</td>
      <td>Unsupported geometry type.</td>
    </tr>
    <tr>
      <td>3201</td>
      <td>Geometry Collection not supported - Geometry Collections are not supported in CartoDB. In most cases, we can deal with these during import, except with KML and GeoJSON import. In those cases, an intermediate step during import will fail if given geometry collections. To avoid this, try to export your data from the source in another format.</td>
    </tr>
    <tr>
      <td>4000</td>
      <td>Raster errors.</td>
    </tr>
    <tr>
      <td>4001</td>
      <td>Raster import error.</td>
    </tr>
    <tr>
      <td>5000</td>
      <td>Database import error.</td>
    </tr>
    <tr>
      <td>5001</td>
      <td>Empty dataset - If you upload a file that results in an empty dataset, we assume there was an error. If this in fact was not an error, please revisit the user interface or send an SQL command to create a dataset. If it was in fact an error, check that your file is formatted correctly and that it contains data.</td>
    </tr>
    <tr>
      <td>5002</td>
      <td>Reserved column names - Try changing the name of your column to a new name. Often you can add an underscore, "_", to the beginning of the column name to make it work.</td>
    </tr>
    <tr>
      <td>6000</td>
      <td>OSM data import error.</td>
    </tr>
    <tr>
      <td>8000</td>
      <td>CartoDB account error.</td>
    </tr>
    <tr>
      <td>8001</td>
      <td>Over account storage limit - The file you tried to upload is putting you over your storage quota. You can upgrade your account easily by accessing your account settings page.</td>
    </tr>
    <tr>
      <td>8002</td>
      <td>Over account dataset limit - The file you tried to upload is putting you over your dataset quota. You can upgrade your account easily by accessing your account settings page. Alternatively, you may be able to delete some unused datasets to make room.</td>
    </tr>
    <tr>
      <td>8003</td>
      <td>Error creating table from SQL query - Check it doesn't return duplicate column names, or contact support if you need help editing your query.</td>
    </tr>
    <tr>
      <td>8004</td>
      <td>Merge with unmatching column types - The columns chosen don't have the same column type in both tables. Please change the types so the columns will have the same type and try again.</td>
    </tr>
    <tr>
      <td>9999</td>
      <td>Unknown, Please report your error to <a href="{{ '/docs#support' | prepend: site.cartodb-baseurl }}">support</a> so we can figure it out!</td>
    </tr>
  </tbody>
</table>

### SQL Errors

When executing SQL either in the user interface or through the SQL API, you may encounter errors. We report back to you the full error provided by PostgreSQL. One of the easiest ways to figure out what is going on is to search for your error on Google and perform independent troubleshooting.

### CartoCSS Errors

CartoCSS styling is generally simple, making typos or forgetting quotations are common oversights. In cases when you are editing CartoCSS through the user interface, errors are reported back via the CartoCSS input window. From there, it is typically not difficult to discover where you messed up. More often than not, users forget to end lines with semi-colons, use quotes, and close brackets and braces. Simple proofreading is best practice.

## Your Account

Your CartoDB account options contain all of the information necessary for managing your account. You can view and edit your profile information, view the details of your account plan and connect to external data sources, request an API key to protect your data, generate tokens for consumer authentication of your map resources, and view the details of your billing invoices and data usage.

### How to Access your Account Options
You can access your account options from your dashboard, or from your public profile page, in CartoDB.

- From your dashboard, select *Your account* (or *Your API keys*) from your avatar drop-down menu

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/access_account_options.png' | prepend: 	site.baseurl }}" alt="Access account options from dashboard" /></p>

- Optionally, if you are on your public profile page, select *Account settings* (or *Your API keys*) from your avatar drop-down menu

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/account_access_from_public_profile.png' | prepend: 	site.baseurl }}" alt="Access account options from public profile" /></p>
	
	The page refreshes, displaying the account options to the left and your data usage on top.  

- Click the different options to refresh the view and display the related account settings 

	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/account_options.png' | prepend: 	site.baseurl }}" alt="Acount options" /></p>

Each of the available account options are described below.

### Profile

[Access](#how-to-access-your-account-options) your profile information to edit your public profile settings. 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/account_profile.png' | prepend: 	site.baseurl }}" alt="Acount profile options" /></p>

Profile options include the ability to:

- Change your avatar image
- Edit your public profile name
- Share any personal websites, your location, your Twitter Username, or your Disque Shortname
- Indicate that you are available for hire, which automatically includes a link to your email on your public profile page

Click *SAVE CHANGES* after editing any of your profile settings.

### Account

[Access](#how-to-access-your-account-options) your account settings to edit your account plan details. 

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/account_settings.png' | prepend: 	site.baseurl }}" alt="Acount settings" /></p>

Account options include the ability to:

- Edit your account username, associated email address, change your password
- View and edit your account type and billing plan
	
	**Note:** If you change your account plan, charges will be pro-rated.
	
	**Tip:** If you are using a free-trial, you can change or upgrade your account by viewing the details of your account (this redirects you to the [billing](#billing) options of your account). Once you create an account for evaluating a free-trial of CartoDB, you have fourteen days to experiment with different account types.
- Connect (or disconnect) to external data sources

	**Note:** The external data sources that appear are managed by CartoDB. Connect an external service to link it to your account. For details about how to connect to external data sources, see the [Connect Dataset](http://docs.cartodb.com/cartodb-editor.html#connect-dataset) procedure.

Click SAVE CHANGES after editing any of your account settings.

#### Delete your account

You can delete your account through the [account](#account) options page. [Contact us](mailto:sales@cartodb.com) if you have any questions before deleting your account.

***Note:** Deleting your account permanently removes all of your maps and datasets, they cannot be recovered.* 

### API Key

[Access](#how-to-access-your-account-options) your API key, which is uniquely generated for your account. When you use the [CartoDB Platform](cartodb-platform.html) to request data, you can manage how your data is updated (write access), or protected, (read-only access).

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/apikey.png' | prepend: site.baseurl }}" alt="API" /></p>

Your API key includes the ability to:

- View, and copy, your API key

	**Tip:**  Click the link icon, located inside the *Your API Key* field, to copy the API key to the clipboard. This is helpful if you need to paste your API key into a line of code of an API command.
- Request a new API key

	**Note:** When you click *Request a new API key*, a confirmation dialog appears. Click *REGENERATE API KEY* to continue. Note that you will have to update any of your deployed applications that call your API, to include the new API key.
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/regenerate_api.png' | prepend: site.baseurl }}" alt="Regenerate api" /></p>

- View example syntax of how your API key can be formatted to include write access to portions of your data 
- View example syntax of how your API key can be formatted to keep portions of your data read-only and private

**Note:** Your API key is confidential and should not be shared. Anyone who has access to your API key can apply changes to how your data is accessed.

### OAuth credentials

[Access](#how-to-access-your-account-options) the QAuth credentials to generate [SQL API](cartodb-platform/sql-api.html) tokens for consumer authentication of your map resources. These keys allow users to access private datasets, write to public datasets, and edit data (through an API) without sharing passwords.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/oauth_credentials.png' | prepend: site.baseurl }}" alt="OAuth credentials" /></p>

Your OAuth credentials include the ability to:

- View, and copy, a consumer key that authenticates them to access your API

	**Tip:**  Click the link icon, located inside the *Consumer Key* field, to copy the key to the clipboard. This is helpful if you need to paste a Consumer key into a line of code of an SQL API command.
- View, and copy, a consumer secret question to ensure authentication when they are calling your API
- Request Token  URL, to authenticate a request to a URL
- Access Token URL, to authenticate access to a URL
- Generate new keys and tokens

	**Note:** When you click *GENERATE NEW KEYS*, a confirmation dialog appears. Click *REGENERATE OAUTH CREDENTIALS* to continue. Note that you will have to update any of your deployed applications that call your API, to include the new OAuth credentials.
	<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/regenerate_oauth.png' | prepend: site.baseurl }}" alt="Regenerate OAuth" /></p>
	
**Tip:** Click the link icon, located inside any of the fields on this page, to copy the key/tokens to the clipboard. This is helpful if you need to paste these into a line of code of an SQL API command.

For more details about this feature, see [OAuth](cartodb-platform/sql-api.html#oauth), located in the SQL API documentation.

### Billing

[Access](#how-to-access-your-account-options) the billing information for your account.  (There is also a shortcut to your billing plan directly from the [Account](#account) settings). You can change or upgrade your plan, view past invoices, and edit payment information.

<p class="wrap-border"><img src="{{ '/img/layout/cartodb-editor/account_billing.png' | prepend: site.baseurl }}" alt="Billing Plan" /></p>

See our [Pricing Plans]({{ '/pricing' | prepend: site.cartodb-baseurl }}) for details about all of our plans. Each plan includes different features and storage quotas.

- Click *CHANGE PLAN* to view and change the account type for your plan

- View any invoices related to your account 

- Click *Edit payment data* to edit payment or billing details for your account

**Tip:** See the following general rules about changing or upgrading your account. For complete details, see our [Terms of Service](https://cartodb.com/terms#limits) or contact [Sales](mailto:sales@cartodb.com).

- If you change or upgrade your account, charges are pro-rated. Your first invoice only displays charges for the days remaining in the billing period.

- You may experience extra charges, besides the monthly cost of your plan, if you exceed the geocoding quota or map views allocated for your account type, as defined in our [Terms of Service](https://cartodb.com/terms#limits). Your data usage is displayed in every section of the account options.

- A free trial enables you to evaluate CartoDB for 14 days. Once you upgrade from a free plan to a paid plan, a monthly billing period is set for your account. Each month, you will receive an email invoice with a description of services, and the charges for that billing period.

## CartoDB Enterprise

#### About Multiuser Enterprise

CartoDB designed the Multiuser (MU) Enterprise to enhance the scale and scope of collaboration on our platform. This service provides multiuser environments, where users can upload and manipulate datasets securely, share them with specific team members, or publish them directly on the web.

With Enterprise accounts, no custom software installation is required. Your group can continue to access the web-based CartoDB Editor and work alongside colleagues. Since our database is managed on the cloud, you can access your projects from any location, in real time. The following multiuser (MU) features are available.

#### Users, Owners, and Organizations

CartoDB Enterprise works as a hub for many users or teams working together. An "organization" refers to the name of the group of collaborators that are interacting, such as the business or project team. A user is the individual that is part of a given organization.

If you have been using a standard CartoDB account and changed your plan to CartoDB Multiuser Enterprise, you will notice that the CartoDB Editor has some additional options. These options are specific to Enterprise plan users. For general documentation about the CartoDB Editor, please see the [CartoDB Editor documentation](http://docs.cartodb.com/cartodb-editor.html).

**Note:** An Enterprise user with "owner" privileges has administrative access to manage the organization account. For example, they can create users and assign quotas for their organization.  See [Owners](#owners) for more details about how to manage the organization settings.  Organization users have standard [Account](#your-account) options.

### Users

#### Dashboard

The organization dashboard enables you to navigate team activity. You can view and monitor your own maps and data, and access datasets and visualizations published or shared by you, or your team members.

####Your Maps
The maps dashboard enables you to search for maps by tag or name, view maps you have created, view maps that have been shared with you for collaboration, and view maps that you have liked from the community. You can change the sort order of your maps on your dashboard.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_00.png" alt="dash" /></p>

####Your Datasets
Similar to your maps dashboard, your datasets dashboard enables you to search for datasets by name or tag, view your own (and shared datasets), view datasets that you have liked from the community, and access public datasets from the [Data Library](#data-library). You can also [change the sort order of your datasets](#changing-the-sort-order-of-your-datasets).

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_01.png" alt="data dash" /></p>

#### Creating Datasets and Maps

For Enterprise account users, the workflow to create datasets and maps is identical to the standard [CartoDB Editor workflow](#cartodb-editor-overview).

#### Enterprise Privacy Settings for Datasets and Maps

All privacy options are available for Enterprise account users by default. This enables you to select how you would like to protect each dataset and map created by your organization.  Your organization administrator controls the privacy options that are enabled.

- For details about how to select privacy options for your dataset, see [(Dataset Privacy](#dataset-privacy))
- For details about how to select privacy options for your map, see [(Map Privacy](#map-privacy))

**Note:** Dataset privacy is stored separately from Map privacy. This enables you to protect each layer of data within a map, and also determine how you want to share the map.

### Owners

As the owner of an organization, you can perform all administrative tasks for your team account. You can manage users, assign quotas, customize the organization's public profile page, update account details, and so on.  These organization options are accessible from your avatar drop-down menu.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_09.png" alt="Using sync tables" /></p>

#### Organization Settings

Organization settings contain your organization profile information, the authentication settings for managing how users login to your Enterprise account, the list of users in your account, and the billing details for your organization.  *These options are only available to the Enterprise owner*.

<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_010.png" alt="admin" /></p>

- Click *Organization profile* to manage everything related to your organization's public profile. For example, you can add and organization logo, set the organization website, provide the internal support email address for your users, and set the default user quota

- Click *Auth settings* to set authentication settings for your organization's email domain and manage how users login to the Enterprise account
	<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_auth.png" alt="Auth settings" /></p>

- Click *#/# users* to view and manage the users in your organization. You can create new users and add them to your organization
	<p class="wrap-border"><img src="/img/layout/cartodb-editor/enterprise_users.png" alt="Organizaton users" /></p>

	**Note:** The number of seats available is the allowed number of users for your organization. This number is based on your Enterprise account details. 	
	
- Click *Billing* to view your organization's payment or billing details for your Enterprise account

This concludes the Enterprise account options.