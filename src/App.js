

import './App.css';

import CheckList from './Component/CheckList';
import Header  from './Component/Header';


import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
              <Header/>
              <CheckList/>
      </div>
    )
  }
}

export default App
