import React, { Component } from 'react';
import './style.css';
import Header from './components/Header';
import MainArticle from './components/MainArticle';
import StatisticUnit from './components/StatisticUnit';

class App extends Component {
  constructor(props) {
    super(props);
    this.unitEmersion   = this.unitEmersion.bind(this);
    this.scrollEmersion = this.scrollEmersion.bind(this);
  }

  unitEmersion(elem, interval) {
    const start = Date.now();
    const timer = setInterval(function() {
      let timePassed = Date.now() - start;
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
    const handler = function(){
      console.log("Scrolling" + elem)
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
        <article className="info-unit grow-users">
          <aside>
            <img src={require('./images/illustration-grow-together.svg')} alt="Grow together" />
          </aside>
          <section>
            <h2>
              Grow Together
            </h2>
            Generate meaningful discussions with your audience and build a strong, loyal community. 
            Think of the insightful conversations you miss out on with a feedback form. 
          </section>
        </article>

        <article className="info-unit">
          <aside>
            <img src={require('./images/illustration-flowing-conversation.svg')} alt="Flowing conversation" />
          </aside>
          <section>
            <h2>
              Flowing Conversations
            </h2>
            You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
            just-in-time loading for a more natural flow.
          </section>
        </article>

        <article className="info-unit grow-users">
          <aside>
            <img src={require('./images/illustration-grow-together.svg')} alt="Grow together" />
          </aside>
          <section>
            <h2>
              Your Users
            </h2>
            It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
            once signed in to your app, your users can start chatting immediately.
          </section>
        </article>

        <article className="main-article">
          <h1>
            Ready To Build Your Community?
          </h1>
          <a href="#" className="btn btn-primary">
            Get Started For Free
          </a>
        </article>

        <footer>
          <section>
            <img src={require('./images/logo-mono.svg')} alt="Huddle" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
              vestibulum a, ultrices quis sem.
            </p>
            <p>
              <img src={require('./images/icon-phone.svg')} className="comm-icons" />   
              Phone: +1-543-123-4567
            </p>
            <p>
              <img src={require('./images/icon-email.svg')} className="comm-icons" />   
              example@huddle.com
            </p>
            <br /><br />

            <a href="#" className="social"><i className="fa fa-facebook-official"></i></a>
            <a href="#" className="social"><i className="fa fa-instagram"></i></a>
            <a href="#" className="social"><i className="fa fa-twitter-square"></i></a>
          </section>

          <section className="newsletter">
            <p className="header">
              Newsletter
            </p>
            <p>
              To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
              send you spam or pass on your email address
            </p>
            <form className="subscribe-form">
              <input type="email" className="subscribe email-subscribe" />
              <a href="#" className="subscribe btn btn-subscribe">
                Subscribe
              </a>
            </form>
          </section>

        </footer>
      </div>
    );
  }
}

export default App;
