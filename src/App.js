import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './components/Header.js';
import Input from './components/Input.js';
import Streets from './components/Streets.js';

class StreetsReactApp extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Input items={Streets()} />
      </div>
    );
  }
}

ReactDOM.render(<StreetsReactApp />, document.getElementById('streetsapp'));

export default StreetsReactApp;
