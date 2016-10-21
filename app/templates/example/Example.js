import React, { Component } from 'react';
import <%= libraryNamePascalized %> from '../src/index';

export default class Example extends Component {
  render() {
    return (
      <div>
        <h1><%= libraryName %></h1>

        <<%= libraryNamePascalized %> />
      </div>
    );
  }
}
