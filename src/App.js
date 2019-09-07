import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    caja : 'My new value'
  }

  handleChance = e => (
    this.setState({
      caja : e.target.value
      
    })
  )


  render() {




    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" 
          onChange={this.handleChance}
          value = {this.state.caja}
        />
        <p className="repeater">{this.state.caja}</p>
      </div>
    );
  }
}

export default App;
