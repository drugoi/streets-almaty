'use strict';

var React = require('react/addons');

var Input = React.createClass({
  getInitialState: function() {
    return {searchstring: ''};
  },
  handleChange: function(e) {
    this.setState({searchstring: e.target.value});
  },
  render: function () {
    var streets = this.props.items;
    var searchString = this.state.searchstring.trim().toLowerCase();
    
    if (searchString.length > 0) {
      streets = streets.filter(function(s) {
        return s.old.toLowerCase().match(searchString) || s.new.toLowerCase().match(searchString);
      });
    }
    
    return (
      <main className='search'>
        <form>
          <input value={this.state.searchString} onChange={this.handleChange} type="text" className="Input" placeholder="Введите старое или новое название улицы" autoFocus />
        </form>
        <div className='search__data'>
          <div className='search__data-row _top'>
            <span className='search__data-title _old'>Старое название</span> <span className='search__data-title _new'>Новое название</span>
          </div>
        {
          streets.map(function(s, id) {
            return (
              <div className='search__data-row' key={id}>
                <span className='search__data-title _old'>{s.old}</span>
                <span className='search__data-title _new'>{s.new}</span>
              </div>
            )
          })
        }
        </div>
      </main>
    );
  }
});

module.exports = Input; 

