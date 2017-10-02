import React from 'react';
import PropTypes from 'prop-types';
import CreateReactClass from 'create-react-class';

const Input = CreateReactClass({
  getInitialState() {
    return {
      searchstring: ''
    };
  },
  handleChange(e) {
    this.setState({
      searchstring: e.target.value
    });
  },
  propTypes: {
    items: PropTypes.array
  },
  render() {
    let streets = this.props.items;
    const searchString = this.state.searchstring.trim().toLowerCase();

    if (searchString.length > 0) {
      streets = streets.filter(
        s =>
          s.old.toLowerCase().match(searchString) ||
          s.new.toLowerCase().match(searchString)
      );
    }

    return (
      <main className="search">
        <form className="input__wrapper">
          <input
            value={this.state.searchString}
            onChange={this.handleChange}
            type="text"
            className="input"
            placeholder="Введите старое или новое название улицы"
            autoFocus
          />
        </form>
        <div className="search__data">
          <div className="search__data-row _top">
            <span className="search__data-title _old">Старое название</span>
            <span className="search__data-title _new">Новое название</span>
          </div>
          {streets.map((s, id) =>
            <div className="search__data-row" key={id}>
              <span className="search__data-title _old">{s.old}</span>
              <span className="search__data-title _new">{s.new}</span>
            </div>
          )}
        </div>
      </main>
    );
  }
});

export default Input;
