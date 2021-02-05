import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  
                  <li>
                    <blockquote>
                      <p>
                      Hishaam is an energetic and outspoken person. Since joining
                Lifechoices, he has demonstrated comprehensive capability and
                excellent analytical skills when doing his tasks. Recommended.
                      </p>
                      <cite>
                        Godwin Dzvapatsva, Web Developer/Lecturer at Life Choices Academy (Head of Curriculum and Learning)
                      </cite>
                    </blockquote>
                  </li>

                  <li>
                    <blockquote>
                      <p>
                      Hishaam is a very determined hardworking and individual. He is a
                dedicated problem solver who knows how to stay focused on the
                task at hand. He is a good communicator and can work
                independently as well as with other. He is always willing to
                help his peers. Hishaam would be an asset in the workplace.
                      </p>
                      <cite>
                      Damon Anthony, Web Developer/Peer at Life Choices Academy
                      </cite>
                    </blockquote>
                  </li>

                  <li>
                    <blockquote>
                      <p>
                      Hishaam, one of the most talented individuals I've ever
                encountered. With extreme determination , he make sure that he
                completes his task and that it's 100% proper. Very hardworking
                as well , very often working through the night as I have
                witnessed this for myself.
                      </p>
                      <cite>
                      Zubair De Vries, Web Developer/Peer at Life Choices Academy
                      </cite>
                    </blockquote>
                  </li>

                  <li>
                    <blockquote>
                      <p>
                      Hishaam is a tech enthusiast in every sense of the word. His
                interest in technology includes both software and hardware. He
                is interested in the software running on the computer as much as
                he is interested in the computer running the software so he is
                an all rounder asset to have. He does not only stick to the bare
                minimum of a task but goes the extra of adding the best extra
                features to a project. His skill of meeting deadlines is also
                something to commend. I would definitely recommend him to any
                team.
                      </p>
                      <cite>
                      Lwando Gqobho, Web Developer/Peer at Life Choices Academy
                      </cite>
                    </blockquote>
                  </li>

                  <li>
                    <blockquote>
                      <p>
                      This extraordinary individual has unwavering optimism and
                determination in any situation. He does well to support his
                colleagues and friends and is an outstanding programmer who
                never leaves a problem unsolved. It’s a pleasure working with
                Hishaam.
                      </p>
                      <cite>
                      Aaqiel Behardien, Web Developer/Peer at Life Choices Academy
                      </cite>
                    </blockquote>
                  </li>

                  <li>
                    <blockquote>
                      <p>
                      Hishaam is an intelligent, hard working human. He is very
                dedicated in always producing the best in his work. He is an
                excellent problem solver who is always aiming to do things right
                rather than fast. He is an easy person to work with and I have
                seen his display a positive attitude towards his work. Hishaam
                will be an asset to any company.
                      </p>
                      <cite>
                      Mischa Achmat, Web Developer/Peer at Life Choices Academy
                      </cite>
                    </blockquote>
                  </li>


                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}