import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
          <h1>Yash's First React Code</h1>
          <p>This is a paragraph written in JSX</p>
          <Person/>
      </div>
    );
  }
}


export default App;
