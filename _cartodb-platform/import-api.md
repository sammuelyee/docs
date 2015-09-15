---
title: Import API
description: The CartoDB Import API allows you to upload files to your CartoDB account and manipulate them by using a set of HTTP commands from a terminal window.
---

A standard import stores the data, uploaded from files with the valid formats, as specified.

## Import API

The CartoDB Import API allows you to upload files to a CartoDB account, check on their current upload status, as well as deleting and listing importing processes on the given account. This API consists of several HTTP requests targeted at a set of CartoDB endpoints that deal with the conversion and import of the sent files. CartoDB tables can be classified into two categories:

- **standard tables**  
  The default tables used to store the data of the uploaded files that will be used to create datasets and maps. Any CartoDB user may create, manipulate, and delete such datasets.

- **Sync Tables**  
  Available to certain CartoDB plans, these tables store data from a remote file and refresh their contents during periodic intervals specified by the user. The base files from which the sync tables retrieve their contents may come from Google Drive, Dropbox, or a public URL. In this document we will deal with the simplest case: public URLs.

Additionally, CartoDB offers a set of connectors to import specific types of datasets:

- **ArcGIS Server&trade;**  
  Allows to import ArcGIS&trade; layers into a CartoDB account as tables from ArcGIS Server&trade; (version 10.1 or higher is required). Note that **this connector is disabled by default** in the CartoDB importer options. If you are interested in enabling it, please contact [support@cartodb.com](mailto:support@cartodb.com) to gain further details.


## Quickstart

For this example (and the rest of the ones illustrated in this document) we will be using a command-line tool known as `cURL`. For more info about this tool see [this blog post](http://quickleft.com/blog/command-line-tutorials-curl) or type `man curl` in bash.

### Uploading a local file

Suppose we have a CartoDB account whose username is *documentation* and we want to upload a local file named *prism_tour.csv* located in the *Documents* folder. Doing so would require executing the following command on a Terminal window:

<div class="code-title code-request">REQUEST</div>
{% highlight bash %}
curl -v -F file=@/home/documentation/Documents/prism_tour.csv
"https://documentation.cartodb.com/api/v1/imports/?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64"
{% endhighlight %}

Note that the *api_key* element has an alphanumeric value that is exclusive to the *documentation* CartoDB account.

The response to this request appears in the following format, where a successful value indicates that the import process is enqueued:

<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "efa9925c-31dd-11e4-a95e-0edbca4b5057",
  "success": true
}
{% endhighlight %}

The `item_queue_id` value is a unique identifier that references the import process. Once this process has started, its information can be obtained doing a request to the imports endpoint as explained in the ["Check the status of an import process](http://docs.cartodb.com/cartodb-platform/import-api.html#check-the-status-of-an-import-process) section.

### Uploading from a remote URL

Suppose we have a server at the hostname *examplehost.com* with a csv named *sample.csv* already uploaded. Creating a table from it requires executing the following command on a Terminal window:

<div class="code-title code-request">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"url":"https://examplehost.com/sample.csv"}'
"https://documentation.cartodb.com/api/v1/imports/?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64"`
{% endhighlight %}

The response to this request would have the following format, yielding a success import:

<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "efa9925c-31dd-11e4-a95e-0edbca4b5057",
  "success": true
}
{% endhighlight %}


## General Concepts

The following concepts are the same for every endpoint in the API except when it's noted explicitly.

### Auth

Manipulating data on a CartoDB account requires prior authentication using a unique identifier as a password. For the import API, a special identifier known as the API Key is used as a proof of authentication for each user account to authorize access to its data.  

To execute an authorized request, api_key=YOURAPIKEY should be added to the request URL. The param can be also passed as POST param. We **strongly advise** using HTTPS when you are performing requests that include your `api_key`.

### Errors

Errors are reported using standard HTTP codes and extended information encoded in HTML language as in the following example:

{% highlight html %}
<html>
  <head>
    <title>411 Length Required</title>
  </head>
  <body bgcolor="white">
    <center>
      <h1>411 Length Required</h1>
    </center>
    <hr>
    <center>nginx</center>
  </body>
</html>
{% endhighlight %}

Depending on the specific case, additional information regarding the errors may be presented.


## Standard Tables

A standard import stores the data you upload from files with [valid formats](http://docs.cartodb.com/cartodb-editor.html#supported-file-formats), creating tables at CartoDB.

### Upload file

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
POST api/v1/imports 
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

- **Local file upload**  
  When importing local files, you need to perform a POST with a file (see below an example call with CURL).

- **url**  
  When importing remote files, the full URL to the publicly accessible file.

- **type_guessing**  
  If set to *false* disables field type guessing (for Excel and CSVs). Optional. Default is *true*.

- **quoted_fields_guessing**  
  If set to *false* disables type guessing of CSV fields that come inside double quotes. Optional. Default is *true*.

- **content_guessing**  
  Set it to *true* to enable content guessing and automatic geocoding based on results. Currently it only implements geocoding of countries. Optional. Default is *false*.

- **create_vis**  
  Set it to *true* to flag the import so that when it finishes, it creates a Map automatically after importing the Dataset. Optional. Default is *false* for API calls or old dashboard imports. If importing from the new dashboard it will automatically set this parameter to *true*.
  
- **privacy**  
  Used to set the privacy settings of the table or tables resulting from the import. If **create_vis** is set to true, the resulting visualization privacy settings will also be determined by this parameter. **privacy** can be set to:
  * **public** The resulting table or visualization can be viewed by anyone
  * **private** The resulting table or visualization can only be viewed by the uploader
  * **link** The resulting table or visualization can only be viewed through a private link shared by the uploader

- **table_name**  
  Used to duplicate one of your existing tables. **Do not mix with File/URL imports**.

- **table_copy**  
  Similar to *table_name*, internally used for table copying. **Do not set**.

- **table_id**  
  Internal usage for table migrations. **Do not set**.

- **append**  
  Reserved for future usage. **Do not set**.

- **sql**  
  Used to create a new table from a SQL query applied to one of your tables. **Do not mix with File/URL imports**.

- **service_name**  
  Used to upload from datasources, indicates which datasource to use. Check [here](https://github.com/CartoDB/cartodb/tree/master/services/datasources/lib/datasources) for an updated list of available datasources to use. **Initially intended for CartoDB Web Editor usage**.

- **service_item_id**  
  Used to upload from datasources and indicates data of the datasource. Check [here](https://github.com/CartoDB/cartodb/tree/master/services/datasources/lib/datasources) for an updated list of available datasources to use. **Initially intended for CartoDB Web Editor usage**.


#### Response

The response includes:

- **item_queue_id**  
  A unique alphanumeric identifier referencing the imported file in the targeted account.
  
- **success**  
  A boolean value indicating whether the file import succeeded or not.

#### Local File Upload Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -F file=@/path/to/local/file "https://{account}.cartodb.com/api/v1/imports/?api_key={account API Key}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "9906bce0-f1a3-4b07-be71-818f4bfd7673",
  "success": true
}
{% endhighlight %}

#### URL Upload Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"url":"https://remotehost.url/path/to/remotefile"}'
"https://{account}.cartodb.com/api/v1/imports/?api_key={account API Key}"`
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "9906bce0-f1a3-4b07-be71-818f4bfd7673",
  "success": true
}
{% endhighlight %}


### Check the status of an import process

When uploading a file for import, it may take some time due to the file's size and the additional processing on the CartoDB side. Using this request, an import process state can be retrieved.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/imports/<import_id>
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

- **The import identifer**  
  A unique alphanumeric element that identifies the import process to be retrieved. It is the *item_queue_id* element returned after running the upload request successfully.

#### Response

The response includes the following items:

- **id**  
  A unique identifier for the import process. It is the same as the *import id* provided in the request.

- **user_id**  
  A unique alphanumeric element that identifies the CartoDB account user in the internal database.
  
- **table_id**  
  A unique alphanumeric element that identifies the created table in the internal CartoDB database.

- **data_type**  
  This element is currently deprecated.
  
- **table_name**  
  The final name of the created table in the targeted CartoDB account. It usually has the same name as the uploaded file, unless there already exists a table with the same name (in this case, an integer number is appended to the table name).
  
- **state**  
  A string value indicating the current state of the importing process. It can have any of the following values: *uploading*, *importing*, *complete*, or *failure*.
  
- **error_code**  
  A string containing an error message to be outputted in case of a failure during the import process, that is, when the *success* item has a *false* value (see below).

- **tables_created_count**  
  This element is currently deprecated.
  
- **synchronization_id**  
  This element has a *null* value in this case.
  
- **service_name**  
  This element identifies the service type used to import the file. It can have any of these three values: *gdrive* for Google Drive imports, *dropbox* for Dropbox imports and *public_url* for URL or local file imports.
  
- **service_item_id**  
  A unique identifier that references the service item of the targeted import.
  
- **success**  
  A boolean value indicating whether the import process succeeded (*true* or 
 *false*).

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v "https://{account}.cartodb.com/api/v1/imports/1234abcd-1234-1a2b-3c4d-4321dcba5678?api_key={account API Key}
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "id": "1234abcd-1234-1a2b-3c4d-4321dcba5678",
  "user_id": "abcd1234-a5b6-c7d8-1a2b-efgh5678abcd",
  "table_id": "mnop5678-12cd-ab34-abc1-4321dcba2b4d",
  "data_type": "url",
  "table_name": "sample_file",
  "state": "complete",
  "error_code": null,
  "queue_id": "1234abcd-1234-1a2b-3c4d-4321dcba5678",
  "get_error_text": {
    "title": "Unknown",
    "what_about": "Sorry, something went wrong and we're not sure what. Try\n      uploading your file again, or <a href='mailto:support@cartodb.com?subject=Unknown error'>contact us</a> and we'll try to help you quickly."
  },
  "tables_created_count": null,
  "synchronization_id": null,
  "success": true
}
{% endhighlight %}

### Retrieving a list of all the current import processes

Lists the import identifiers of the files that are being imported in the targeted CartoDB account.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/imports/
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

#### Response

The response includes:

- **item_queue_id**  
  A unique alphanumeric identifier referencing the import process in the targeted CartoDB account.
  
- **success**  
  A boolean value indicating whether the file import succeeded or not.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v "https://{account}.cartodb.com/api/v1/imports/?api_key={account API Key}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "1234abcd-1234-1a2b-3c4d-4321dcba5678",
  "success": true
}
{% endhighlight %}


## Sync Tables

### List all the synchronized tables in a given account

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
GET /api/v1/synchronizations
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

#### Response

The response includes an **array** of items, each one containing the following elements:

- **id**  
  A unique alphanumeric identifier of the synced table.
  
- **name**  
  The actual name of the created sync table.
  
- **interval**  
  An integer value representing the number of seconds between synchronizations of the table contents.
  
- **url**  
  This element is currently deprecated.
  
- **created_at**  
  The date time at which the table was created in the CartoDB database.
  
- **updated_at**  
  The date time at which the table had its contents modified.
  
- **run_at**  
  The date time at which the table will get its contents synched with the source file.
  
- **ran_at**  
  The date time at which the table **had** its contents synched with the source file.
  
- **modified**  
  Not used as synced tables cannot be modified manually from CartoDB.
  
- **etag**  
  This element is currently deprecated.
  
- **checksum**  
  This element is currently deprecated.
  
- **retried_times**  
  An integer value indicating the number of attempts that were performed to sync the table.
  
- **service_name**  
  A string with the name of the datasource used to import the file. It can have any of the following values: *gdrive* for Google Drive, *dropbox* for Dropbox and *null* for URL imports.
  
- **log_id**  
  A unique alphanumeric identifier to locate the log traces of the given table.
  
- **error_code**  
  An integer value representing a unique error identifier.
  
- **error_message**  
  A string value indicating the message related to the *error_code* element.
  
- **service_item_id**  
  A unique identifier used by CartoDB to reference the sync table and its related datasource service.


Finally, the array includes a **total_entries** element that indicates the number of items contained in the response array.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v "https://{account}.cartodb.com/api/v1/synchronizations/?api_key={account API Key}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "synchronizations": [
    {
      "id": "1234abcd-1234-1a2b-3c4d-4321dcba5678",
      "name": "sample_file",
      "interval": 2592000,
      "url": "",
      "state": "success",
      "user_id": "abcd1234-a5b6-c7d8-1a2b-efgh5678abcd",
      "created_at": "2014-07-01T10:51:54+00:00",
      "updated_at": "2014-07-01T15:36:19+00:00",
      "run_at": "2014-08-01T15:36:19+00:00",
      "ran_at": "2014-07-01T15:24:54+00:00",
      "modified_at": null,
      "etag": null,
      "checksum": "",
      "log_id": "aaaabbbb-1234-5678-dcba-abcd1234efgh",
      "error_code": null,
      "error_message": null,
      "retried_times": 0,
      "service_name": "gdrive",
      "service_item_id": "1AbC2BcD3CdEf4eFg5eRgG3FaWaa3"
    }
  ],
  "total_entries": 1
}
{% endhighlight %}

### Syncing a file from a URL

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
POST /api/v1/synchronizations
{% endhighlight %}

#### Params

- **auth_token**  
  The targeted CartoDB account API key.
  
- **url**  
  The **public** URL address where the file to be imported is located.
  
- **interval**  
  The number of seconds for the synchronization period. CartoDB supports the following values: *3600* (sync each hour), *86400* (sync each day), *604800* (sync each week) or *2592000* (sync each month). *Note*: Sync interval must be at least 900 (15 minutes).

- **type_guessing**  
  If set to *false* disables field type guessing (for Excel and CSVs). Optional. Default is *true*.

- **quoted_fields_guessing**  
  If set to *false* disables type guessing of CSV fields that come inside double quotes. Optional. Default is *true*.

- **content_guessing**  
  Set it to *true* to enable content guessing and automatic geocoding based on results. Currently it only implements geocoding of countries. Optional. Default is *false*.

#### Response

The response includes the following items:

- **endpoint**  
  This item refers to the internal CartoDB controller code responsible for performing the import.
  
- **item_queue_id**  
  A unique alphanumeric identifier that refers to the import process. It can be used to retrieve data related to the created table.
  
- **id**  
  An alphanumeric identifier used internally by CartoDB as a reference to the import process.
  
- **name**  
  This item is currently deprecated.
  
- **interval**  
  An integer value that stores the number of seconds between synchronizations.
  
- **state**  
  A string value indicating the current condition of the importing process.
  
- **user_id**  
  A unique alphanumeric identifier to reference the user in the CartoDB platform.
  
- **created_at**  
  The date time at which the table was created in the CartoDB database.
  
- **updated_at**  
  The date time at which the table had its contents modified.
  
- **run_at**  
  The date time at which the table will get its contents synched with the source file.
  
- **ran_at**  
  The date time at which the table **had** its contents synched with the source file.
  
- **modified**  
  Not used as synced tables cannot be modified manually from CartoDB.
  
- **etag**  
  This element is currently deprecated.
  
- **checksum**  
  This element is currently deprecated.
  
- **log_id**  
  A unique alphanumeric identifier to locate the log traces of the given table.
  
- **error_code**  
  An integer value representing a unique error identifier.
  
- **error_message**  
  A string value indicating the message related to the *error_code* element.
  
- **retried_times**  
  An integer value indicating the number of attempts that were performed to sync the table.
  
- **service_name**  
  Null for public urls/file uploads, used by other datasources like Google Drive and Dropbox.

- **service_item_id**  
  Null for public urls/file uploads, used by other datasources like Google Drive and Dropbox.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"url":"https://public.url.to.file/sample_file", "interval":"3600"}' "https://{account}.cartodb.com/api/v1/synchronizations/?api_key={account API Key}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "data_import": {
    "endpoint": "/api/v1/imports",
    "item_queue_id": "1234abcd-1234-1a2b-3c4d-4321dcba5678"
  },
  "id": "abcd1234-a5b6-c7d8-1a2b-efgh5678abcd",
  "name": null,
  "interval": 3600,
  "url": "https://public.url.to.file/sample_file",
  "state": "created",
  "user_id": "aaaabbbb-1234-5678-dcba-abcd1234efgh",
  "created_at": "2014-08-05T13:39:15+00:00",
  "updated_at": "2014-08-05T13:39:15+00:00",
  "run_at": "2014-08-05T14:39:15+00:00",
  "ran_at": "2014-08-05T13:39:15+00:00",
  "modified_at": null,
  "etag": null,
  "checksum": "",
  "log_id": "06faf1b8-3502-11e4-9514-0e230854a1cb",
  "error_code": null,
  "error_message": null,
  "retried_times": 0,
  "service_name": null,
  "service_item_id": null
}
{% endhighlight %}

### Removing the synchronization feature from a given table

A sync table can be converted to a standard table (a table that never gets synced).

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
DELETE /api/v1/synchronizations/<import_id>
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

- **sync table import id**  
  The unique alphanumeric identifier of the target table.


#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -X "DELETE" https://{account}.cartodb.com/api/v1/synchronizations/<import-identifier>?api_key={account API Key}"
{% endhighlight %}


#### Response

An HTTP 204 response should result as a confirmation for the removal of the synchronization feature for the target table.


### Check whether a sync table is syncing or not

A large synced table may take some time to get fully synced. IN the meantime, it could be useful to check whether it finished refreshing its contents.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/synchronizations/<import_id>/sync_now
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.
  
- **Target table import id**  
  The unique alphanumeric identifier of the target sync table.

#### Response

The response includes the following items:

- **state**  
  A string value indicating whether the request succeeded or not.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -X "GET" "https://{account}.cartodb.com/api/v1/synchronizations/1234abcd-1234-1a2b-3c4d-4321dcba5678/sync_now?api_key={account API Key}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "state": "created"
}
{% endhighlight %}

### Force a synchronization action on a sync table

Sync tables have their contents synchronized with the source file in periodic time intervals as specified by the user during the creation process. However, a table can be synchronized at an arbitrary moment in time if desired.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
PUT /api/v1/synchronizations/<import_id>/sync_now
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.
  
- **Target table import id**  
  The unique alphanumeric identifier of the target sync table.

#### Response

The response includes the following items:

- **enqueued**  
  A boolean value indicating whether the request has been successfully appended to the processing queue.
  
- **synchronization_id**  
  A unique alphanumeric identifier referring to the queue element just added.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v --request "PUT" "https://{account}.cartodb.com/api/v1/synchronizations/<import_id>/sync_now?api_key={account API Key}" --header "Content-Length:0"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight bash %}
{
  "enqueued": true,
  "synchronization_id": "1234abcd-aaaa-2222-4444-dcba4321a1b2"
}
{% endhighlight %}


## The ArcGIS&trade; Connector

### Import an ArcGIS&trade; layer

ArcGIS&trade; layers stored in ArcGIS Server&trade; can get imported as CartoDB tables. Such layers must be accessible via an **ArcGIS&trade; API REST URL** whose structure is as follows:

{% highlight html %}
http://<host>/<site>/rest/services/<folder>/<serviceName>/<serviceType>/<layer_ID>
{% endhighlight %}

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
POST   api/v1/imports 
{% endhighlight %}

#### Params

- **interval**  
  This value **MUST** be set to *0*. **Different values do not guarantee correct imports**.

- **service_item_id**  
  The ArcGIS&trade; API REST URL where the ArcGIS&trade; layer is located.

- **service_name**  
  This value **MUST** be set to *arcgis* to make use of this connector.

- **value**  
  Same URL as specified in the *service_item_id* parameter

#### Response

The response includes:

- **item_queue_id**  
  A unique alphanumeric identifier referencing the imported file in the targeted account.
  
- **success**  
  A boolean value indicating whether the file import succeeded or not.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"interval":"0","service_item_id": "http://url.to.arcgis.server.layer", "service_name": "arcgis", "value": "http://url.to.arcgis.server.layer"}' "https://{account}.cartodb.com/api/v1/imports?api_key={API_KEY}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "d676fd50-b774-4052-a4f1-e56ac6a4300e",
  "success": true
}
{% endhighlight %}


### Syncing an ArcGIS&trade; layer

An ArcGIS&trade; layer can get imported to a CartoDB account as a synchronized table. The target ArcGIS&trade; layer must be accessible via an ArcGIS&trade; API REST URL with the following structure:
{% highlight html %}
http://<host>/<site>/rest/services/<folder>/<serviceName>/<serviceType>/<layer_ID>
{% endhighlight %}

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
POST /api/v1/synchronizations
{% endhighlight %}

#### Params

- **interval**  
  The number of seconds for the synchronization period. CartoDB supports the following values: *3600* (sync each hour), *86400* (sync each day), *604800* (sync each week) or *2592000* (sync each month). *Note*: Sync interval must be at least 900 (15 minutes).

- **service_item_id**  
  The ArcGIS&trade; API REST URL where the ArcGIS&trade; dataset is located.

- **service_name**  
  This value **MUST** be set to *arcgis* to make use of this connector.

- **url**  
  This value **MUST** be empty.

#### Response

The response includes the following items:

- **endpoint**  
  This item refers to the internal CartoDB controller code responsible for performing the import.
  
- **item_queue_id**  
  A unique alphanumeric identifier that refers to the import process. It can be used to retrieve data related to the created table.
  
- **id**  
  An alphanumeric identifier used internally by CartoDB as a reference to the import process.
  
- **name**  
  This item is currently deprecated.
  
- **interval**  
  An integer value that stores the number of seconds between synchronizations.

- **url**  
  This value is empty in this case.

- **state**  
  A string value indicating the current condition of the importing process.
  
- **user_id**  
  A unique alphanumeric identifier to reference the user in the CartoDB platform.
  
- **created_at**  
  The date time at which the table was created in the CartoDB database.
  
- **updated_at**  
  The date time at which the table had its contents modified.
  
- **run_at**  
  The date time at which the table will get its contents synched with the source file.
  
- **ran_at**  
  The date time at which the table **had** its contents synched with the source file.
  
- **modified**  
  Not used as synced tables cannot be modified manually from CartoDB.
  
- **etag**  
  This element is currently deprecated.
  
- **checksum**  
  This element is currently deprecated.
  
- **log_id**  
  A unique alphanumeric identifier to locate the log traces of the given table.
  
- **error_code**  
  An integer value representing a unique error identifier.
  
- **error_message**  
  A string value indicating the message related to the *error_code* element.
  
- **retried_times**  
  An integer value indicating the number of attempts that were performed to sync the table.
  
- **service_name**  
  This value is set to *arcgis*.

- **service_item_id**  
  This item contains the ArcGIS&trade; API REST URL targeting the imported ArcGIS&trade; layer.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"interval":"604800","service_item_id": "http://url.to.arcgis.server.layer", "service_name": "arcgis", "url":""}' "https://{account}.cartodb.com/api/v1/synchronizations?api_key={API_KEY}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "data_import":{
    "endpoint":"/api/v1/imports",
    "item_queue_id":"4ff4abdd-9d37-4b7a-8e13-fb00376e2a58"
    },
  "id":"d4bc05e8-5063-11e4-9886-0e018d66dc29",
  "name":null,
  "interval":604800,
  "url":"",
  "state":"created",
  "user_id":"4884b545-07f4-4ce4-a62f-fe9e2412098f",
  "created_at":"2014-10-10T09:57:22+00:00",
  "updated_at":"2014-10-10T09:57:22+00:00",
  "run_at":"2014-10-17T09:57:22+00:00",
  "ran_at":"2014-10-10T09:57:22+00:00",
  "modified_at":null,
  "etag":null,
  "checksum":"",
  "log_id":"6aa19bf6-42db-477a-9b69-2c4f74fd8c31",
  "error_code":null,
  "error_message":null,
  "retried_times":0,
  "service_name":"arcgis",
  "service_item_id":"http://url.to.arcgis.layer"
}
{% endhighlight %}


### Import an ArcGIS&trade; dataset

This option allows you to import **at once** a complete set of layers belonging to an ArcGIS&trade; dataset. Such a dataset must be accessible via an ArcGIS&trade; API REST URL with the following structure:
{% highlight html %}
http://<host>/<site>/rest/services/<folder>/<serviceName>/<serviceType>/
{% endhighlight %}

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
POST   api/v1/imports 
{% endhighlight %}

#### Params

- **interval**  
  This value **MUST** be set to *0*. **Different values do not guarantee correct imports**.

- **service_item_id**  
  The ArcGIS&trade; API REST URL where the ArcGIS&trade; dataset is located.

- **service_name**  
  This value **MUST** be set to *arcgis* to make use of this connector.

- **value**  
  Same URL as specified in the *service_item_id* parameter

#### Response

The response includes:

- **item_queue_id**  
  A unique alphanumeric identifier referencing the imported file in the targeted account.
  
- **success**  
  A boolean value indicating whether the file import succeeded or not.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"interval":"0","service_item_id": "http://url.to.arcgis.server.dataset", "service_name": "arcgis", "value": "http://url.to.arcgis.server.dataset"}' "https://{account}.cartodb.com/api/v1/imports?api_key={API_KEY}"
{% endhighlight %}
<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{
  "item_queue_id": "c478fd50-f984-4091-d1f2-e72ac6c4333e",
  "success": true
}
{% endhighlight %}
