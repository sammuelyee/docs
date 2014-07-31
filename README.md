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

## Deploy

```
grunt deploy:staging|production
```

You'll need a `grunt-aws.json` credentials file.

## How to contribute 

If you are interested in helping us develop the documentation, see [CONTRIBUTING](CONTRIBUTING.md) for more information.
