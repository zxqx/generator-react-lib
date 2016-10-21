# generator-react-lib

A react component generator with UMD build and browser testing infrastructure.

<img src='https://dl.dropboxusercontent.com/s/4w9bsn1ti8zbz7b/octo.png' width='400px'>

## Requirements

+ NodeJS
+ Yeoman

## Tech Stack

* [karma]() - Test runner
* [mocha](https://mochajs.org/) - Testing framework
* [enzyme]() - React testing utils
* [istanbul]() - Code coverage reporting
* [babel](https://babeljs.io/) - ES6/JSX compiler
* [webpack](https://webpack.github.io/) - UMD bundler

## Setup

Install it globally:

```sh
$ npm install -g generator-react-lib
```

## Usage

Make a folder for your app:

```sh
$ mkdir lib-name && cd lib-name
```

Generate the scaffolding:

```sh
$ yo react-lib
```
