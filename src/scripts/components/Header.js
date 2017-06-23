import React from 'react';
import CreateReactClass from 'create-react-class';

const Header = CreateReactClass({
  render() {
    return (
      <header>
        <h1 className="header__title">
          Старые &mdash; Новые названия улиц Алматы
        </h1>
      </header>
    );
  }
});

export default Header;
