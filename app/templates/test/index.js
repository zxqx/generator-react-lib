import React from 'react';
import renderer from 'react-test-renderer';
import <%= libraryNamePascalized %> from '../src/index';

describe('<<%= libraryNamePascalized %> />', () => {
  it('renders placeholder div', () => {
    const tree = renderer.create(
      <<%= libraryNamePascalized %> />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
