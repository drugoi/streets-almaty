'use strict';

describe('Header', function () {
  var React = require('react/addons');
  var Header, component;

  beforeEach(function () {
    Header = require('../../../src/scripts/components/Header.js');
    component = React.createElement(Header);
  });

  it('should create a new instance of Header', function () {
    expect(component).toBeDefined();
  });
});
