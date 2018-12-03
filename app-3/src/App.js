import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      unfilteredList: ['Aardavark' , 'Android' , 'Animal' , 'Apple'],
      displayList: [],
    }
  }

  processOnChange(e){
    let filteredList = this.state.unfilteredList.filter((item) => item.includes(e))
    this.setState({
      displayList: filteredList
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={( e )=> this.processOnChange(e.target.value)} />
        <h1>{this.state.displayList.map(item => <p>{item}</p>)}</h1>
      </div>
    );
  }
}

export default App;
