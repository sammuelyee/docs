# CartoDB Docs

[![Build Status](https://travis-ci.org/CartoDB/docs.svg?branch=master)](https://travis-ci.org/CartoDB/docs)


## About

All things docs about CartoDB. This repo contains all that will be found in [docs.cartodb.com](http://docs.cartodb.com/) - It's meant to be an open resource so that anyone can contribute information to our docs. It features a guide of the CartoDB Editor, Tutorials, Tips and Tricks, and CartoDB Platform. 

If you spot a typo, want to add a FAQ, or contribute a tutorial, just send a Pull Request! Check our [CONTRIBUTING](CONTRIBUTING.md) page.


## Develop

### How to install

CartoDB Docs uses a mix of [Jekyll](http://jekyllrb.com/) and [Grunt](http://gruntjs.com/) tasks for development.

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

In case you stuble upon the next error:

```
Error: Unable to read "grunt-aws.json" file (Error code: ENOENT).
```

you'll need a `grunt-aws.json` credentials file, find more info in [deploy](#deploy) section.


## Deploy

```
grunt deploy:staging|production
```

You'll need a `grunt-aws.json` credentials file. You can copy the `grunt-aws.example.json` to `grunt-aws.json` to work locally.


## How to contribute 

CartoDB Docs is in itself an open project, and we welcome contributions. If you spot a typo, want to expand some explanation, add some [trick](http://docs.cartodb.com/tips-and-tricks.html) or [FAQ](http://docs.cartodb.com/faqs.html) you see missing, or event create a [Tutorial](http://docs.cartodb.com/tutorials.html), we welcome you to do so. We would need that everything you contribute follow the style of what's already on place. If you want to contribute something and have doubts about how to so, you can contact [support@cartodb.com](mailto:support@cartodb.com)

Documentation for the components of the CartoDB platform rely on their own project, so make the edit in their corresponding documentation and then run `sh docs_build.sh` to pull them:

- [Cartodb.js](https://github.com/CartoDB/cartodb.js/blob/develop/doc/API.md)
- [SQL API](https://github.com/CartoDB/CartoDB-SQL-API/blob/master/doc/API.md)
- [Maps API](https://github.com/CartoDB/Windshaft-cartodb/blob/master/docs/Map-API.md)

[Import API](https://github.com/CartoDB/docs/blob/master/_cartodb-platform/import-api.md) documentation is the only that must be edited in this project.

To send your contributions you can follow the standard workflow: 

- Fork it ( https://github.com/cartodb/docs/fork )
- Create your feature branch (`git checkout -b my-new-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create a new Pull Request

We'll review the Pull Request and comment on it. 
