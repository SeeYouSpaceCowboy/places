import React, { Component } from 'react';
import './stylesheets/index.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    )
  }
}
