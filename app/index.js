const yeoman = require('yeoman-generator');
const _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    const cb = this.async();

    this.prompt([
      {
        name: 'libraryName',
        message: 'What\'s the name of your library?',
        filter: val => _s.slugify(val)
      },
      {
        name: 'libraryDescription',
        message: 'Describe your library'
      },
      {
        name: 'exportCss',
        type: 'confirm',
        message: 'Do you need to export a CSS file with your library?',
        default: false
      }
    ],
    function(props) {
      this.libraryName = _s.slugify(props.libraryName.replace(/^react-/, ''));
      this.libraryNameCamelized = _s.camelize(this.libraryName);
      this.libraryNamePascalized = _s.capitalize(this.libraryNameCamelized);
      this.libraryDescription = props.libraryDescription;
      this.exportCss = props.exportCss;

      this.template('gitignore', '.gitignore');
      this.template('eslintrc', '.eslintrc');
      this.template('babelrc', '.babelrc');
      this.template('_package.json', 'package.json');
      this.template('webpack.config.js');
      this.template('README.md');
      this.template('src/index.js');
      this.directory('example');
      this.directory('lib');
      this.directory('test');

      if (this.exportCss) {
        this.template('src/index.css');
      }

      cb();

    }.bind(this));
  },
  install: function() {
    this.installDependencies({ bower: false });
  }
});
