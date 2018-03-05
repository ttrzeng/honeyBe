//LIBRARIES
import React, { Component } from 'react';

//COMPONENTS
import Header from '../header/header';
import Footer from '../footer/footer';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <p className="main-intro">
          This is the main body of the site. Insert content here.
        </p>
        <Footer />
      </div>
    );
  }
}

export default Main;
