'use strict';

describe('Input', function () {
  var React = require('react/addons');
  var Input, component;

  beforeEach(function () {
    Input = require('../../../src/scripts/components/Input.js');
    component = React.createElement(Input);
  });

  it('should create a new instance of Input', function () {
    expect(component).toBeDefined();
  });
});
