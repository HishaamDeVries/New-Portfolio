import React, { Component } from 'react';

  export default class Contact extends Component {
    render() {

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Contact Me</span></h1>
            </div>

            <div className="ten columns">
             {/*<p className="lead">{data?.message}</p>*/}
            </div>
         </div>

         <div className="row">
            <div className="eight columns">

              <form
                className={this.props.shake}
                action="https://formspree.io/xpzyjbno"
                method="POST"
              >
                <div className="form-group">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        size="35"
                        className="form-control form-control-lg"
                        id="name"
                        placeholder="Name"
                        style={{ background: "#ccc",  borderRadius: "15%", width: "75%" }}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group hidden">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                      <label htmlFor="_replyto">Email</label>
                      <input
                        type="email"
                        name="_replyto"
                        size="35"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Your email"
                        style={{ background: "#ccc", borderRadius: "15%", width: "75%"  }}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group hiddenRight">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        className="form-control form-control-lg"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        cols="50"
                        placeholder="Write your message..."
                        style={{ background: "#ccc", borderRadius: "15%", width: "75%" }}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row text-md-right text-sm-right">
                  <div className="col-12 col-sm-12 col-md-6 mx-auto">
                    <button type="submit" className="btn btn-primary mb-2 hidden">
                      Submit
                    </button>
                  </div>
                </div>
              </form>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   Hishaam De Vries<br />
						   Cape Town, Manenberg, 7764<br />
						   <span>081 595 7849</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
    </div>
  </section>
);
}
}