import React from "react";
import "./Resume.css";

function Resume() {
  return (
    /* resume component */
    <>
      <div className="resume-container" id="resume">
        <div className="resume-header">Resume</div>
        <div className="bio-det">My formal Bio Details</div>
        <div className="resume-underline">
          {/* SCROLLSPY */}
          {/* row gx-0 is column b/w gap as zero */}
          <div className="row" >
            {/* col3 ref resume side icon and education,skill,project,interest  */}
            <div className="col-md-3" >
              {/* icons image click ref section */}
              <span className="span1">
                <a href="#section1">
                  <i className="fa fa-graduation-cap fa-lg"></i>
                </a>
                <a href="#section2">
                  <i className="fa fa-cogs  fa-lg"></i>
                </a>
                <a href="#section3">
                  <i className="fa fa-tasks  fa-lg"></i>
                </a>
                <a href="#section4">
                  <i className="fa fa-paint-brush  fa-lg"></i>
                </a>
              </span>


              {/* col3 list items click col-9 scroll to show  */}
              <span className="span2">
                <ul className="list-group nuo" id="myScrollspy">
                  <li className="nav-item ni">
                    <a
                      className="list-group-item list-group-item  nl"
                      href="#section1"
                    >
                      Education
                    </a>{" "}
                  </li>
                  <li className="nav-item ni">
                    <a
                      className="list-group-item list-group-item nl"
                      href="#section2"
                    >
                      Skills
                    </a>
                  </li>
                  <li className="nav-item ni">
                    <a
                      className="list-group-item list-group-item nl "
                      href="#section3"
                    >
                      Projects
                    </a>
                  </li>
                  <li className="nav-item ni" >
                    <a
                      className="list-group-item list-group-item nl"
                      href="#section4"
                    >
                      Interests
                    </a>
                  </li>
                </ul>
              </span>

            </div>
            {/* col-9 ref education skill,project,interest despriction or contents  sections*
              /*  data offeset ref colo-9 scroll section colo
               -3 section active value */ 
            /* data-bs-offset="0" */}
            
            <div
              className="col-md-9 "data-bs-spy="scroll"
              data-bs-target="#myScrollspy" data-bs-offset="10"
              tabIndex="0">
             
            
             
            
              {/* education section1 content */}
              <div id="section1" >
                <h6 id="mcaid">
                  MCA Master of Computer Applications &emsp; &emsp; &emsp;
                  &emsp;<p id="mcaspan">2018-2020 | 7.6 CGPA</p>
                </h6>

                <p id="mcap">TPGIT(Anna university)Vellore,TN.</p>
                <h6 id="bcaid">
                  BCA Bachelor of Computer Applications &emsp; &emsp; 
                  &emsp;<p id="bcaspan">2015 - 2020 | 6.2 GPA &emsp;</p>
                </h6>

                <p id="bcap"> APCAS(Thiruvalluvar university)Vellore,TN.</p>
                <h6 id="hscid">
                  HSC Higher Secondary &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                  &emsp;&emsp; &nbsp; &emsp;&emsp;{" "}
                  <p id="hscspan">
                    2013-2015 | 56.58 % &nbsp; &emsp;&nbsp;&nbsp;
                  </p>
                </h6>

                <p id="hscp">Govt Higher Secondary School, Lalapet,TN.</p>
                <h6 id="hsid">
                  SSLC Higher Secondary &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                  &emsp;&emsp; &nbsp; &emsp;&emsp;
                  <p id="hsspan">
                    2013 | 79 % &nbsp; &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
                  </p>
                </h6>
                <p id="hsp">Govt Higher Secondary School, Lalapet,TN.</p>
              </div>

              {/* skill section2 progress bar align colwise 
                data offeset ref colo-9 scroll section colo
               -3 section active value */ }
              <div id="section2"> 
              
        
                <div class="container">
                  {/* progress progressbar divide two cols */}
                  <div class="row">
                    {/* progress col1 */}
                    <div class="col-sm">
                      <h4>HTML5</h4>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped  progress-bar-animated"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4>JavaScript</h4>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped  progress-bar-animated"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4>React</h4>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped  progress-bar-animated"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4>Git&github</h4>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped  progress-bar-animated"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4>web-app</h4>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped  progress-bar-animated"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* progres col2 */}
                    <div class="col-sm">
                      <h4>CSS3</h4>
                      <div class="progress ">
                        <div
                          class="progress-bar progress-bar-striped  progress-bar-animated"
                          style={{ width: "90%" }}
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4>UI/UX Design</h4>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped  progress-bar-animated"
                          style={{ width: "85%" }}
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4>BootStrap 5.2</h4>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped  progress-bar-animated"
                          style={{ width: "80%" }}
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h4>Node Js</h4>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped  progress-bar-animated"
                          style={{ width: "75%" }}
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* projects description section3 *//*  data offeset ref colo-9 scroll section colo
               -3 section active value */}
              <div id="section3" >
               
           
                <h6 id="projid">
                  Personal Portfolio Website&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<p id="projspan">2023</p>
                </h6>

                <p id="projp1">Technologies used: Reactjs,BootStrap</p>
                <p id="projp2">
                  {" "}
                  Portfolio is simple responsive web application this shows myResume details
                   in web.this project host <br/> link available in my github repository
                </p>

                <h6 id="projid">
                  Tech-Blogs &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <p id="projspan1">2023</p>

                </h6>

                <p id="projp1">Technologies used: React, Tailwind -Css, Strapi  </p>
                <p id="projp2">
                  {" "}
                  React-based Tech Blogs responsive Web Application that empowers users to read,<br/> and engage with technology-related content.this project host link available in my github repository
                </p>

                <h6 id="projid">
                 Disney-Clone&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <p id="projspan2">2023</p>
                </h6>
                

                <p id="projp1">Technologies used: React, Tailwind Css, Vitejs, axios, tmdb-api</p>
                <p id="projp2">
                 Disney-clone is responsive web  provide users with an immersive experience reminiscent of Disney's <br/>magical storytelling and characters.this project host link available in my github repository {" "}
                </p>

                <br />
              </div>
              {/* interest section4 *//*  data offeset ref colo-9 scroll section colo
               -3 section active value */ }
              <div id="section4">  
              
           
                <h6 id="inter1id">Creative & Problem Solving </h6>
                <p id="interp">
                  I can ability to make or produce new things using my skill or
                  imagination. solving problems easy way.
                </p>

                <h6 id="interid">Desiging</h6>

                <p id="interp">
                  I will planed before and make a drawing of how something will
                  be made.
                </p>

                <h6 id="interid"> Sports</h6>

                <p id="interp">
                  {" "}
                  i will play competitive games with interested like cricket,
                  running, carrom, and some games.{" "}
                </p>

                <h6 id="interid">Music </h6>

                <p id="interpmu">
                  listening all genre song to help of relax and refresh my self.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;