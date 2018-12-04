import React, { Component } from 'react';
import Picture from './components/picture';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Picture pictureSrc="https://s3.amazonaws.com/tinycards/image/7f2cb2deaaebb22ae399d6461c3c90d4"/>
      </div>
    );
  }
}

export default App;
