import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './Header.js';
import Input from './Input.js';
import Streets from './Streets.js';

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

class StreetsReactApp extends React.Component {
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
