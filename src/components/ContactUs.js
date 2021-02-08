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

               <form action="https://formspree.io/xpzyjbno" method="POST" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input  type="text" defaultValue="" size="35" id="contactName" name="contactName" required/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input  type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" required/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea  cols="50" rows="15" id="contactMessage" name="contactMessage" required></textarea>
                  </div>

                  <div>
                     <button type='submit'  className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


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
   </section>
);
}
}