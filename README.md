# generator-react-lib

A react component generator with UMD build and browser testing infrastructure.

<img src='https://www.dropbox.com/s/txxcc9awy2uhx11/generator-react-lib.gif?raw=1' width='400px'>

## Requirements

+ NodeJS
+ Yeoman

## Tech Stack

* [react](https://facebook.github.io/react/) - View layer
* [babel](https://babeljs.io/) - JS compiler
* [webpack](https://webpack.github.io/) - UMD bundler
* [jest](https://facebook.github.io/jest/) - Test suite
* [enzyme](https://github.com/airbnb/enzyme) - React testing utils
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

## Development

Run the example app at [http://localhost:8080](http://localhost:8080):

```
$ npm run example
```

Run tests in Chrome using [karma](https://github.com/karma-runner/karma):

```
$ npm test
```

Run tests and watch for code changes:

```
$ npm test -- --watch
```

Lint `src` and `test` files:

```
$ npm run lint
```

Generate UMD output in the `lib` folder:

```
$ npm run build
```

## License

MIT
