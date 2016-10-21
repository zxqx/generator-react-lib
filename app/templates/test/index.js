import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import <%= libraryNamePascalized %> from '../src/index';

chai.use(chaiEnzyme());

describe('<<%= libraryNamePascalized %> />', () => {
  it('renders placeholder div', () => {
    const component = shallow(
      <<%= libraryNamePascalized %> />
    );

    expect(component.find('div')).to.be.present();
  });
});
