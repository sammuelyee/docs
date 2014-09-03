---
title: Import API
permalink: /import-api/
---

## Import API

The CartoDB Import API allows you to upload files to a CartoDB account, check on their current status as well as deleting and listing importing processes on the given account. This API consists of several HTTP requests targeted at a set of CartoDB endpoints which deal with the conversion and import of the sent files. CartoDB tables may be classified into two categories:

- **Standard tables**  
  The default tables used to store the data of the uploaded files that will be used to create maps and visualisations. Any CartoDB user may create, manipulate and delete such tables.
  

- **Sync tables**  
  Available to certain CartoDB plans, these tables store data from a remote file and refresh their own contents during periodic intervals specified by the user. The base files from which the sync tables retrieve their contents may come from Google Drive, Dropbox or a public URL. This Import API only works with the third case (public URL).

## Quickstart

For this example (and the rest ones illustrated in this document) we will be using a command-line tool known as `cURL`. For more info about this tool see [this blog post](http://quickleft.com/blog/command-line-tutorials-curl) or type `man curl` in bash.

### Uploading a local file

Suppose we have a CartoDB account whose username is `documentation` and we want to upload a local file named `prism_tour.csv` located in the `Documents` folder. Doing so would require executing the following command on a Terminal window:

`curl -s -F file=@/Users/documentation/Documents/prism_tour.csv 
"https://documentation.cartodb.com/api/v1/imports/?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64"`

The response to this request would have the following format, yielding a success import:

`{"item_queue_id":"efa9925c-31dd-11e4-a95e-0edbca4b5057","success":true}`

The `item_queue_id` value is a unique identifier to manipulate the newly created table in future requests.


## General Concepts

The following concepts are the same for every endpoint in the API except when it's noted explicitly.

### Auth

Manipulating data on a CartoDB account requires prior authentication using a unique identifier as a password. For the import API, a special identifier known as the API Key is used as a proof of authentication for each user account to authorise access to its data.  

To execute an authorized request, api_key=YOURAPIKEY should be added to the request URL. The param can be also passed as POST param. We **strongly advise** using HTTPS when you are performing requests that include your `api_key`.

### Errors

Errors are reported using standard HTTP codes and extended information encoded in HTML language as in the following example:

{% highlight html %}
<html>
<head><title>411 Length Required</title></head>
<body bgcolor="white">
<center><h1>411 Length Required</h1></center>
<hr><center>nginx</center>
</body>
</html>
{% endhighlight %}

Depending on the specific case, additional information regarding the errors may be presented.

## Standard Tables

Standard tables store the data you upload from normal files with the valid formats as specified [here](http://docs.cartodb.com/cartodb-editor.html).

### Upload file

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
POST   api/v1/imports 
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

- **Path to local file**  
  The absolute path of the local file that will be uploaded.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -s -F file=@/Users/documentation/Documents/prism_tour.csv "https://documentation.cartodb.com/api/v1/imports/?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64"
{% endhighlight %}

<div class="code-title">RESPONSE</div>
{% highlight javascript %}
{"item_queue_id":"cace18cc-403a-4c89-9424-95618946d8fd","success":true}%
{% endhighlight %}

#### Response

The response includes:

- **item_queue_id**   
  A unique alphanumeric identifier referencing the imported file in the targeted account.
  
- **success**   
  A boolean value indicating whether the file import succeeded or not.


### Check the status of an import process

When uploading a file for import, it may take some time due to the file's size and the additional processing on the CartoDB side. Using this request the import process state can be retrieved.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight bash %}
GET /api/v1/imports/<import_id>
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.

- **The import identifer**  
  The unique alphanumeric element that identifies the target import process. It is the *item_queue_id* element returned after running the upload request successfully.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -s  "https://documentation.cartodb.com/api/v1/imports/cace18cc-403a-4c89-9424-95618946d8fd"\?api_key\=3102343c42da0f1ffe6014594acea8b1c4e7fd64
{% endhighlight %}

#### Response

The response includes the following items:

- **id**  
  The unique identifier of the import process. It is the same as the *import id* provided to the request.

- **user_id**  
  A unique alphanumeric element that identifies the CartoDB account user in the internal database.
  
- **table_id**  
  A unique alphanumeric element that identifies the created table in the internal CartoDB database.

- **data_type**  
  This element is currently deprecated.
  
- **table_name**  
  The final name of the created table in the targeted CartoDB account. It usually has the same name as the uploaded file unless there already exists a table with the same name (in this case, an integer number is appended to the table name).
  
- **state**  
  A string value indicating the current state of the importing process. It can have any of the following values: *uploading*, *importing*, *complete* or *failure*.
  
- **error_code**  
  A string containing an error message to be outputted in case of a failure during the import process, that is, when the *success* item has a *false* value (see below).

  
- **tables_created_count**  
  This element is currently deprecated.
  
- **synchronization_id**  
  This element is a unique identifier for the synchronised tables that were imported using the *Dropbox*, *Google Drive* or the *public URL* options.
  
- **service_name**  
  This element identifies the service type used to import the file. It can have any of these three values: *gdrive* for Google Drive imports, *dropbox* for Dropbox imports and *url* for url or local file imports.
  
- **service_item_id**  
  A unique alphanumeric element that identifies the targeted import's service item.
  
- **success**  
  A boolean value indicating whether the import process succeeded (*true* or 
 *false*).


### Retrieving a list of all the current import processes

Lists the import identifiers of the files that are being imported in the targeted CartoDB account.

###Definition

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
  A unique alphanumeric identifier referencing the imported file in the targeted account.
  
- **success**   
  A boolean value indicating whether the file import succeeded or not.
Template maps are persistent with no preset expiration. They can only be created or deleted by a CartoDB user with a valid API_KEY (see auth section).

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -s  "https://documentation.cartodb.com/api/v1/imports/?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64"{% endhighlight %}


## Sync tables

### List all the synchronised tables in a given account

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
GET /api/v1/synchronizations
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.
  
#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -s "https://documentation.cartodb.com/api/v1/synchronizations/?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64"
{% endhighlight %}

#### Response

The response includes an **array** of items, each one with the following elements:

- **id**  
  A unique alphanumeric identifier of the imported table.
  
- **name**  
  The actual name of the created sync table.
  
- **interval**  
  An integer value representing the number of seconds between synchronisations of the table contents.
  
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


Finally, the array includes a **total_entries** element that indicates the number of elements contained in the response array.


### Syncing a file from an URL

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
POST /api/v1/synchronizations
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.
  
- **url**  
  The **public** URL address where the file to be imported is located.
  
- **interval**  
  The number of seconds for the synchronisation period. CartoDB supports the following values: 0 (never synched), *3600* (sync each hour), *86400* (sync each day), *604800* (sync each week) or *2592000* (sync each month).
 
#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -H "Content-Type: application/json" -d '{"url":"https://dl.dropboxusercontent.com/u/6234091/prism_tour.csv", "interval":"3600"}' "https://documentation.cartodb.com/api/v1/synchronizations/?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64"
{% endhighlight %}


#### Response

The response includes the following items:

- **endpoint**  
  This item refers to the internal CartoDB controller code responsible for performing the import.
  
  - **item_queue_id**  
  A unique alphanumeric identifier that refers to the import process. It can be used to retrieve data related to the the created table.
  
  - **id**  
  An alphanumeric identifier used internally by CartoDB as a reference to the import process.
  
- **name**  
  This item is currently deprecated.
  
- **interval**  
  An integer value that refers to the number of seconds between synchronisations.
  
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
  
{"data_import":{"endpoint":"/api/v1/imports","item_queue_id":"aeaa39ef-f30b-4cbe-9b89-5ef6453b3f0e"},"id":"d14054ce-335c-11e4-9271-0e73339ffa50","name":null,"interval":3600,"url":"https://dl.dropboxusercontent.com/u/6234091/prism_tour.csv","state":"created","user_id":"4884b545-07f4-4ce4-a62f-fe9e2412098f","created_at":"2014-09-03T11:24:06+00:00","updated_at":"2014-09-03T11:24:06+00:00","run_at":"2014-09-03T12:24:06+00:00","ran_at":"2014-09-03T11:24:06+00:00","modified_at":null,"etag":null,"checksum":"","log_id":"d1405afa-335c-11e4-9271-0e73339ffa50","error_code":null,"error_message":null,"retried_times":0,"service_name":null,"service_item_id":null}


### Removing the synchronisation feature from a given table

A sync table can be converted to a standard table (that is, a table that does get never synced).

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
curl -v -X "DELETE" https://documentation.cartodb.com/api/v1/synchronizations/aeaa39ef-f30b-4cbe-9b89-5ef6453b3f0e?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64"
{% endhighlight %}


#### Response

A HTTP 204 response should result from running a query like the one shown before. This confirms the removal of the synchronisation feature for the target table.


### Check whether a sync table is syncing or not

A large synced table may take up some time to get fully synced so it could be useful to check whether it finished syncing.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
GET /api/v1/synchronizations/<import_id>/sync_now
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.
  
  - **Target table import id**  
  The unique alphanumeric identifier of the target sync table.
  
#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v -X "GET" "https://documentation.cartodb.com/api/v1/synchronizations/aeaa39ef-f30b-4cbe-9b89-5ef6453b3f0e/sync_now?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64"

{% endhighlight %}

#### Response

The response includes the following items:

- **state**  
  A string value indicating the whether the request succeeded or not.
  
### Force a synchronisation action on a sync table

Sync tables have their contents synchronised with the source file in periodic time intervals as specified by the user during the creation process. However, one could desire having a table synchronised at an arbitrary moment of time.

#### Definition

<div class="code-title notitle code-request"></div>
{% highlight html %}
PUT /api/v1/synchronizations/<import_id>/sync_now
{% endhighlight %}

#### Params

- **auth_token**  
  The target CartoDB account API key.
  
  - **Target table import id**  
  The unique alphanumeric identifier of the target sync table.

#### Example

<div class="code-title code-request with-result">REQUEST</div>
{% highlight bash %}
curl -v --request "PUT" "https://documentation.cartodb.com/api/v1/synchronizations/aeaa39ef-f30b-4cbe-9b89-5ef6453b3f0e/sync_now?api_key=3102343c42da0f1ffe6014594acea8b1c4e7fd64" --header "Content-Length:0"
{% endhighlight %}

#### Response

The response includes the following items:

- **enqueued**  
  A boolean value indicating whether the request has been successfully appended to the processing queue.
  
  - **synchronization_id**  
  A unique alphanumeric identifier referring to the queue element just added.

Note that the CartoDB platform has a limit on the number of importing processes and as a result, there could be occasions on which the previous request could fail.

