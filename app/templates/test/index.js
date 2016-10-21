import React from 'react';
import { mount, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import <%= libraryNamePascalized %> from '../src/index';

chai.use(chaiEnzyme());

describe('<<%= libraryNamePascalized %> />', () => {
  it('renders', () => {
    const component = shallow(
      <<%= libraryNamePascalized %> />
    );

    expect(component.find('div')).to.be.present();
  });
});
