import React, { Component } from 'react';
import '../styles/App.css';
import Footer from './Footer.js'
import Header from './Header.js'
import ParentComponent from '../components/ParentComponent.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ParentComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
