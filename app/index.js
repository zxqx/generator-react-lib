'use strict';

var yeoman = require('yeoman-generator');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    var cb = this.async();

    this.prompt([
      {
        name: 'libraryName',
        message: 'What\'s the name of your library?',
        filter: function(val) {
          return _s.slugify(val);
        }
      },
      {
        name: 'libraryDescription',
        message: 'Describe your library'
      }
    ],
    function(props) {
      var asyncCount = 0;
      this.libraryName = props.libraryName.replace(/\s/g, '-').replace(/^react-/, '');
      this.libraryNamePascalized = _s.capitalize(_s.camelize(this.libraryName));
      this.libraryNameCamelized = _s.camelize(this.libraryName);
      this.libraryDescription = props.libraryDescription;

      this.template('gitignore', '.gitignore');
      this.template('eslintrc', '.eslintrc');
      this.template('webpack.config.js');
      // needed so npm doesn't try to use it and fail
      this.template('_package.json', 'package.json');
      this.template('README.md');
      this.template('babelrc', '.babelrc');
      this.directory('example', 'example');
      this.directory('lib', 'lib');
      this.directory('src', 'src');
      this.directory('test', 'test');

      cb();

    }.bind(this));
  },
  install: function() {
    this.installDependencies({ bower: false });
  }
});
