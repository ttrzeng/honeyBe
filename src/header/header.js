import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <header id="Header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">This is the Header</h1>
      </header>
    );
  }
}

export default Header;
