import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row" >

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="Profile Pic"/>

            </div>
            <div className="row">
               <div className="six columns">

               <h2>About Me</h2>
               <p>
               I am a very energetic and committed person who is eager to learn new things. I believe that success only comes through hard work and perseverance. I have a passion for front-end development and hope to excel in this field
               </p>

               <h2>Where My Passion For The Tech Space Came From</h2>
               <p>
               I first got my passion in tech when I was four years old. We used
              to have a computer in the front room of my old home and I used to
              tinker with it and see how it works. Later in my life while I was
              in high school we didn’t have IT but we did have CAT and in it
              sometimes we were given videos from YouTube with people who
              explain the tech that we were going over. I continue to watch
              Linus Tech Tips (the channel that stuck out for me) and see them
              doing these crazy projects and explaining any new tech that they
              got which really interested me.
               </p>
               </div>

            <div className="15 columns">
                        <h2>
                           Hobbies/Passions
                        </h2>
                        <p>
                     Reading
                        </p>
                        <p>
                     Gaming
                        </p>
                        <p>
                     Soccer
                        </p>
                        <p>
                     Rugby
                        </p>
                        <p>
                     Drama
                        </p>
                        <p>
                     Technology
                        </p>
                     </div>  
            </div> 

         </div>
      </section>
    );
  }
}