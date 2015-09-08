# CartoDB Docs

[![Build Status](https://travis-ci.org/CartoDB/docs.svg?branch=master)](https://travis-ci.org/CartoDB/docs)


## About

This repository contains all of the technical documentation content for CartoDB. The CartoDB documentation landing page is found here [docs.cartodb.com](http://docs.cartodb.com/).  The current structure of the Documentation portal contains information about the CartoDB Editor, CartoDB Platform, Tutorials, Tips & Tricks, and FAQs. 

**Note:** The structure of this documentation content is currently being enhanced to appear more like a content management system. 

This Docs repo is an open resource so that anyone can contribute their documentation ideas about CartoDB features and functionality. (For general information about CartoDB, please see our website at [CartoDB](https://cartodb.com/)). 

If you spot a spelling error, have a suggestion for a Frequently Asked Question, or would like to contribute to a tutorial, please review our [CONTRIBUTING](CONTRIBUTING.md) page and submit a Pull Request.  Otherwise, send an email to our [Technical Writer](mailto:csobier@cartodb.com), who will be happy to enhance the current documentation for you.


## Develop

### How to install

CartoDB Docs uses a mix of [Jekyll](http://jekyllrb.com/) and [Grunt](http://gruntjs.com/) tasks for development. Thus, you will need Ruby and a Node.js version `>= 0.10.0` installed, in addition to [Bundlr](http://bundler.io/).

```
bundle install
npm install -g grunt-cli
npm install
```

### Run locally

```
grunt serve
```

A tab in your browser will open and direct you to http://0.0.0.0:9000

Also, you can run the blog locally as if it was on production with `grunt serve:dist`

In case you stumble upon this error:

```
Error: Unable to read "grunt-aws.json" file (Error code: ENOENT).
```

You will need a `grunt-aws.json` credentials file, find more information in the [deploy](#deploy) section.

If you cannot find the docs for CartoDB.js, the SQL API or Maps API, ensure that you run `docs_build.sh` yet. For details, see [How to contribute](#how-to-contribute).

You will also need `wget`and `sed` in order for the script work.


## Deploy

```
grunt deploy:staging|production
```

You will need a `grunt-aws.json` credentials file. You can copy the `grunt-aws.example.json` to `grunt-aws.json` to work locally.


## How to contribute 

We welcome contribution ideas for technical documentation. If you want to suggest something and have questions, you can contact [support@cartodb.com](mailto:support@cartodb.com).

Documentation for the components of the CartoDB platform rely on their own project. Edit the respective sections in the appropriate documentation area and run `sh docs_build.sh` to pull the content:

- [Cartodb.js](https://github.com/CartoDB/cartodb.js/blob/develop/doc/API.md)
- [SQL API](https://github.com/CartoDB/CartoDB-SQL-API/blob/master/doc/API.md)
- [Maps API](https://github.com/CartoDB/Windshaft-cartodb/blob/master/docs/Map-API.md)

[Import API](https://github.com/CartoDB/docs/blob/master/_cartodb-platform/import-api.md) documentation is the only that must be edited in this project.

The following workflow describes how to contribute to the Docs repo:

- Fork it ( https://github.com/cartodb/docs/fork )
- Create your feature branch (`git checkout -b my-new-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create a new Pull Request

Our Technical Writer will review your branch, edit the content according to our Style Guide and merge the Pull Request.
