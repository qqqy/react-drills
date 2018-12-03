import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ''
    }

    this.processOnChange = this.processOnChange.bind(this)
  }

  processOnChange = ( e ) => {
    // console.log(e)
    let newInputState = e
    console.log(newInputState)
    this.setState({
      userInput: newInputState
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={( e ) => this.processOnChange(e.target.value)} />
        <p>{this.state.userInput} </p>
      </div>
    );
  }
}

export default App;
