import React, { Component } from 'react';
import './style.css';
import Header from './components/Header';
import MainArticle from './components/MainArticle';
import StatisticUnit from './components/StatisticUnit';
import InfoUnit from './components/InfoUnit';
import EndArticle from './components/EndArticle'
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.unitEmersion   = this.unitEmersion.bind(this);
    this.scrollEmersion = this.scrollEmersion.bind(this);
  }

  unitEmersion(elem, interval) {
//    const start = Date.now();
    const timer = setInterval(function() {
//      let timePassed = Date.now() - start;
      if (parseFloat(elem.style.opacity) <= 1) {
        elem.style.opacity = parseFloat(elem.style.opacity) + 25 / interval;
      }
      else {
        clearInterval(timer);
        return;
      }
    }, 20);
  }

  scrollEmersion(elem, unitEmersion) {
    elem.style.opacity = 0;
    const handler = function() {
      if (elem.getBoundingClientRect().y <= document.documentElement.clientHeight / 1.5) {
        unitEmersion(elem, 300);
        window.removeEventListener('scroll', handler);
      }
    }
    window.addEventListener('scroll', handler);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="container">
        <Header unitEmersion={this.unitEmersion} />
        <MainArticle unitEmersion={this.unitEmersion} scrollEmersion={this.scrollEmersion} />
        <StatisticUnit unitEmersion={this.unitEmersion} scrollEmersion={this.scrollEmersion} />
        <InfoUnit unitEmersion={this.unitEmersion} scrollEmersion={this.scrollEmersion} />
        <EndArticle unitEmersion={this.unitEmersion} scrollEmersion={this.scrollEmersion} />
        <Footer />
      </div>
    );
  }
}

export default App;
