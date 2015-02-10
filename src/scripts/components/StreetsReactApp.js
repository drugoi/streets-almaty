'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// SCSS
require('!style!css!sass!../../styles/main.scss');


// Components
var Header = require('./Header.js');
var Input = require('./Input.js');
require('./Streets.js');

var StreetsReactApp = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <Header />
        <Input items={streets}/>
        
      </div>
    );
  }
});
React.render(<StreetsReactApp />, document.body); // jshint ignore:line

module.exports = StreetsReactApp;
