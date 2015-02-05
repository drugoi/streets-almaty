'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var StreetsReactApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    StreetsReactApp = require('../../../src/scripts/components/StreetsReactApp.js');
    component = React.createElement(StreetsReactApp);
  });

  it('should create a new instance of StreetsReactApp', function () {
    expect(component).toBeDefined();
  });
});
