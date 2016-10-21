# generator-react-lib

A react component generator with UMD build and browser testing infrastructure.

<img src='https://www.dropbox.com/s/gzfwpv8zt2ckm74/generator-react-lib.jpg?raw=1' width='400px'>

## Requirements

+ NodeJS
+ Yeoman

## Tech Stack

* [react](https://facebook.github.io/react/) - View layer
* [babel](https://babeljs.io/) - JS compiler
* [webpack](https://webpack.github.io/) - UMD bundler
* [karma](https://github.com/karma-runner/karma) - Test runner
* [mocha](https://mochajs.org/) - Testing framework
* [enzyme](https://github.com/airbnb/enzyme) - React testing utils
* [istanbul](https://github.com/gotwarlost/istanbul) - Code coverage reporting
* [eslint](http://eslint.org/) - Style linter

## Setup

Install it globally:

```sh
$ npm install -g generator-react-lib
```

## Usage

Make a folder for your lib:

```sh
$ mkdir lib-name && cd lib-name
```

Generate the scaffolding:

```sh
$ yo react-lib
```
