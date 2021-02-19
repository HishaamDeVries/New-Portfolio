import React, { Component} from 'react';
export default class Porfolio extends Component {
  render() {

    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img src="images/githubFinder.png" className="item-img" alt="Github Finder"/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>GitHub Finder</h5>
                    <p>Web App that is made to find github user profiles and some of the basic info therein.</p>
                  </div>
                </div>
              </div>
              <div className = "livedemo">
                <section>
                  <a href="//https://github-finder-hishaam-version.netlify.app/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                    <button class="button button1">View Demo</button>
                  </a>
                </section>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                  <img src="images/contactKeeper.png" className="item-img" alt="Contact Keeper"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Contact Keeper</h5>
                      <p>Web app that creates and sorts user contacts.</p>
                    </div>
                  </div>
                </div>
              <div className = "livedemo">
                <section>
                  <a href="https://protected-castle-62025.herokuapp.com/login"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                    <button class="button button1">View Demo</button>
                  </a>
                </section>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img src="images/it-logger.png" className="item-img" alt="IT Logger"/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>IT logger</h5>
                    <p>Web App that is used to create logs for IT problems and Solutions in the workplace</p>
                  </div>
                </div>
              </div>
              <div className = "livedemo">
                <section>
                  <a href="https://github.com/HishaamDeVries/it-logger"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                    <button class="button button1">Go To Repo</button>
                  </a>
                </section>
              </div>
            </div>
            
          </div>

          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf ">

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img src="images/pointOfSale.png" className="item-img" alt="Point Of Sale"/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>POS System</h5>
                    <p>Web App that is made for small or self-owned businesses to track transactions and inventory within the store.</p>
                  </div>
                </div>
              </div>
              <div className = "livedemo">
                <section>
                  <a href="https://hishaams-point-of-sale-system.herokuapp.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                    <button class="button button1">View Demo</button>
                  </a>
                </section>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img src="images/Lottery.jpg" className="item-img" alt="Lottery"/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Python Lottery App</h5>
                    <p>Exercutable Application that takes 6 numbers and match
                    with six random numbers to see if you win anything.</p>
                  </div>
                </div>
              </div>
              <div className = "livedemo">
                <section>
                  <a  href="https://github.com/HishaamDeVries/python-lottery-exe/raw/master/Lottery.exe"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <button class="button button1">Download App</button>
                  </a>
                </section>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img src="images/Portfolio.png" className="item-img" alt="Portfolio"/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>First Portfolio</h5>
                    <p>First portfolio I made using React on Github Pages</p>
                  </div>
                </div>
              </div>
              <div className = "livedemo">
                <section>
                  <a  href="https://hishaamdevries.github.io/portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <button class="button button1">View Demo</button>
                  </a>
                </section>
              </div>
            </div>

          </div>

          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
            <div></div>
          <div className="columns portfolio-item">
              <div className="item-wrap">
                <img src="images/bnr.png" className="item-img" alt="BNRY Challenge"/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>BNRY Challenge</h5>
                    <p>Website challenge for BRNY which displays an image slider with descriptions that is served through node</p>
                  </div>
                </div>
              </div>
              <div className = "livedemo">
                <section>
                  <a  href="https://epic-kilby-0e925b.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <button class="button button1">View Demo</button>
                  </a>
                </section>
              </div>
            </div>
          </div>

        </div>
      </div>
  </section>
        );
  }
}