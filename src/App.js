import React from 'react';

import './App.css';
import './Component/CheckList'
import CheckList from './Component/CheckList';
import Header  from './Component/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <CheckList/>
      
    </div>
  );
}

export default App;
