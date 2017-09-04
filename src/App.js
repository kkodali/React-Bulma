import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Faq from './components/faq/faq';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route path="/faq" component={Faq} />
      <Footer />
      </div>
    );
  }
}

export default App;
