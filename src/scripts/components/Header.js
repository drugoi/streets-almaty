'use strict';

var React = require('react/addons');

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <h1 className='header__title'>Старые &mdash; Новые названия улиц Алматы</h1>
      </header>
    );
  }
});

module.exports = Header; 

