import React from 'react';
import ReactDOM from 'react-dom';

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// SCSS
require('!style-loader!css-loader!sass-loader!../../styles/main.scss');

// Components
import Header from './Header.js';

import Input from './Input.js';
import Streets from './Streets.js';

class StreetsReactApp extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Input items={Streets()}/>
      </div>
    );
  }
}

ReactDOM.render(<StreetsReactApp />, document.getElementById('streetsapp'));

export default StreetsReactApp;
