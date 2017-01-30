const yeoman = require('yeoman-generator');
const _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    const cb = this.async();

    this.prompt([
      {
        name: 'libraryName',
        message: 'What\'s the name of your library?',
        required: true,
        filter: val => _s.slugify(val)
      },
      {
        name: 'libraryDescription',
        message: 'Describe your library'
      }
    ],
    function(props) {
      this.libraryName = _s.slugify(props.libraryName.replace(/^react-/, ''));
      this.libraryNameCamelized = _s.camelize(this.libraryName);
      this.libraryNamePascalized = _s.capitalize(this.libraryNameCamelized);
      this.libraryDescription = props.libraryDescription;

      this.template('gitignore', '.gitignore');
      this.template('eslintrc', '.eslintrc');
      this.template('babelrc', '.babelrc');
      this.template('_package.json', 'package.json');
      this.template('webpack.config.js');
      this.template('README.md');
      this.directory('example');
      this.directory('lib');
      this.directory('src');
      this.directory('test');

      cb();

    }.bind(this));
  },
  install: function() {
    this.installDependencies({ bower: false });
  }
});
