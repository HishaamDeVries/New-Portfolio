import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">                   
              <div className="row item">
                  <div className="twelve columns">
                    <h3>Life Choices Academy</h3>
                      <p className="info">
                        Front-End Web Developer
                        <span>&bull;</span> <em className="date">Feb 2020 - Augest 20</em>
                      </p>
                      <p>
                        At the Life Choices Academy, I was in a six month web development training bootcamp.During this training course, I was taught to code in languages such as Python, HTML, CSS/Bootstrap, JavaScript, REACT and we also worked with MySQL
                      </p>
                  </div>
                </div>

                <div className="row item">
                  <div className="twelve columns">
                    <h3>Vista Nova High School</h3>
                    <p className="info">
                      Student
                      <span>&bull;</span> <em className="date">2014 - 2018</em>
                    </p>
                    <p>
                      Went to school at Vista Nova High School for 5 years and Matriculated in 2018 with Bachelor's. School is Located in Pinelands, Cape Town
                    </p>
                  </div>
                </div>
            </div>
        </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>LC Studios (Life Choices Studios)</h3>
                          <p className="info">
                          Front-end Web Developer/Intern
                          <span>&bull;</span> <em className="date">Dec 2020 - Present</em></p>
                          <p>
                          Building websites using WordPress in conjunction
                          with Elementor, Designing websites using Canva, Front-end
                          development custom CSS
                          </p>
                       </div>

                    </div>
            </div> 

            <div className="nine columns main-col">
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>Robbin Island Shakespare</h3>
                          <p className="info">
                          Theatre Actor
                          <span>&bull;</span> <em className="date">Jan 2019 - Augest 2019</em></p>
                          <p>
                          Worked/volunteered in A Theatre production called Robben Island Shakespeare, which is based on the book of the same name, depicting the true life story of Sonny Venkatratham. In the play the character that I played as is Ahmed Mohamed "Kathy" Kathrada.
                          </p>
                       </div>

                    </div>
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

   				<div className="bars">

   				   <ul className="skills">
              
              <li>
                <span className='bar-expand html'>
                </span><em>HTML</em>
              </li>

              <li>
                <span className='bar-expand css'>
                </span><em>CSS</em>
              </li>
                
              <li>
                <span className='bar-expand javascript'>
                </span><em>JAVASCRIPT</em>
              </li>

              <li>
                <span className='bar-expand react'>
                </span><em>REACT</em>
              </li>

              <li>
                <span className='bar-expand sass'>
                </span><em>SASS</em>
              </li>
                
              <li>
                <span className='bar-expand wordpress'>
                </span><em>WORDPRESS</em>
              </li>
                 
              <li>
                <span className='bar-expand python'>
                </span><em>PYTHON</em>
              </li>

               <li>
                <span className='bar-expand mysql'>
                </span><em>MYSQL</em>
              </li>
                  
                
   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}