import React, { Component } from 'react';
<% if (exportCss) { %>import './index.css';<% } %>

export default class <%= libraryNamePascalized %> extends Component {
  render() {
    return (
      <div>
        **your component here**
      </div>
    );
  }
}
