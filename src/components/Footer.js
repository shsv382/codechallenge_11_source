import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section>
        <img src={require('../images/logo-mono.svg')} alt="Huddle" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
          vestibulum a, ultrices quis sem.
        </p>
        <p>
          <img src={require('../images/icon-phone.svg')} className="comm-icons" />   
          Phone: +1-543-123-4567
        </p>
        <p>
          <img src={require('../images/icon-email.svg')} className="comm-icons" />   
          example@huddle.com
        </p>
        <br /><br />
        <div className="social-media">
          <a href="#" className="social"><i className="fa fa-facebook-official"></i></a>
          <a href="#" className="social"><i className="fa fa-instagram"></i></a>
          <a href="#" className="social"><i className="fa fa-twitter-square"></i></a>
        </div>
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
  );
};

export default Footer;