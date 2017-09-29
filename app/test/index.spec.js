const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

beforeEach(() => {
  return helpers.run(path.join(__dirname, '../index.js'))
    .withPrompts({
      libraryName: 'jelly',
      libraryDescription: 'some description'
    });
});

describe('generator-react-lib', () => {
  it('generates babel config', () => {
    assert.file(['.babelrc']);
  });

  it('generates eslint config', () => {
    assert.file(['.eslintrc']);
  });

  it('generates gitignore file', () => {
    assert.file(['.gitignore']);
  });

  it('generates webpack config', () => {
    assert.file(['webpack.config.js']);
  });

  it('generates package.json file', () => {
    assert.fileContent('package.json', /"name": "jelly"/);
    assert.fileContent('package.json', /"description": "some description"/);
  });

  it('generates index file', () => {
    assert.file(['src/index.js']);
  });

  it('generates example app', () => {
    assert.file([
      'example/Example.js',
      'example/index.html',
      'example/index.js',
      'example/style.css',
      'example/webpack.config.build.js',
      'example/webpack.config.js'
    ]);
  });

  it('generates test files', () => {
    assert.file(['test/index.js']);
  });
});
