import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';

//Components
import Registro from './components/Registro/Registro'
import Inicio from './components/Inicio/Inicio'
import Empledos from './components/Empleados/Empleados';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Inicio}/>
          <Route exact path='/registro' component={Registro}/>
          <Route exact path='/empleados' component={Empledos}/>
        </Switch>
      </div>
    );
  }
}

export default App;
