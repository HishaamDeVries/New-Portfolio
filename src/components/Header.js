import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner banner-text">
               <h2 className="responsive-headline" style={{color: "white"}}><ReactTypingEffect
              className="typingeffect"
              text={[
                "Hello, I'm Hishaam De Vries.",
                "I'm a Junior Web Developer.",
              ]}
              speed={80}
              eraseSpeed={80}
              eraseDelay={500}
            /></h2>
         </div>

         <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />


         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}