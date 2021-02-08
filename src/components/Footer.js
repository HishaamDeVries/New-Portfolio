import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
                  
            <li>
              <a href="https://www.linkedin.com/in/hishaam-de-vries-8b256a1a9/" target="_blank" rel="noopener noreferrer" >
                <i className="fa fa-linkedin" />
              </a>
            </li>

            <li>
              <a href="https://github.com/HishaamDeVries" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" />
              </a>
            </li>
             
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}