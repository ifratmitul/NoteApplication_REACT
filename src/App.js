import React, { Component } from 'react'

import './App.css';
import './Component/CheckList'
import CheckList from './Component/CheckList';
import Header  from './Component/Header';


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
