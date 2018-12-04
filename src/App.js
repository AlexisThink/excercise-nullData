import React, { Component } from 'react';
import './App.css';

//Components
import Registro from './components/Registro/Registro'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
        page: ""
    }
  }
  render() {
    return (
      <div className="App">
        <Registro />
      </div>
    );
  }
}

export default App;
