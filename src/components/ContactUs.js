import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
        <h1 className="text-center">
          <img
            className="img-fluid "
            style={{
              borderRadius: 50 + "%",
              height: 50 + "px",
              width: 50 + "px",
            }}
            src="images/ContactImg.png"
            alt="Contact"
          />
          Contact
        </h1>
        <div>
          <div className="four columns">
            <h3
            >
              <img
                className="img-fluid"
                style={{
                  borderRadius: 50 + "%",
                  height: 25 + "px",
                  width: 25 + "px",
                }}
                src="images/Phone.png"
                alt="Phone"
              />
              : 081 595 7849
            </h3>
            <h3
            >
              <img
                className="img-fluid"
                style={{
                  borderRadius: 50 + "%",
                  height: 25 + "px",
                  width: 25 + "px",
                }}
                src="images/Whatsapp.png"
                alt="Whatsapp"
              />
              : 081 595 7849
            </h3>
          </div>
          <div className="six columns">
            <h3
            >
              <img
                className="img-fluid"
                style={{
                  borderRadius: 50 + "%",
                  height: 25 + "px",
                  width: 25 + "px",
                }}
                src="images/linkedin.png"
                alt="Linkedin"
              />
              :
              <a
                href="https://www.linkedin.com/in/hishaam-de-vries-8b256a1a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin Profile Page
              </a>
            </h3>
            <h3
            >
              <img
                className="img-fluid"
                style={{
                  borderRadius: 50 + "%",
                  height: 25 + "px",
                  width: 25 + "px",
                }}
                src="images/github.png"
                alt="Github"
              />
              :
              <a
                href="https://github.com/HishaamDeVries"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile Page
              </a>
            </h3>
          </div>
        </div>

        <br />
        <br />
        <br />

        <h3 className="text-center">
          OR MESSAGE ME
        </h3>
       <div className="center">
        <form
          action="https://formspree.io/xpzyjbno"
          method="POST"
        >
          <div className="form-group ">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg text-dark"
                  id="name"
                  placeholder="Name"
                  style={{ background: "#ccc"}}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group hidden">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
                <input
                  type="email"
                  name="_replyto"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="Your email"
                  style={{ background: "#ccc" }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group hiddenRight">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
                <textarea
                  name="message"
                  className="form-control form-control-lg"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write your message..."
                  style={{ background: "#ccc" }}
                  required
                />
              </div>
            </div>
          
          </div>
          <div className="row text-md-right text-sm-center">
            <div className="col-12 col-sm-12 col-md-6 mx-auto">
              <button type="submit" className="btn btn-primary hidden">
                Submit
              </button>
            </div>
          </div>
        </form>
        </div>
    </section>
    );
  }
}