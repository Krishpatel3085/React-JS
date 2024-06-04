import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function Resume() {





  return (
    <>

      <div id="resume">
        <div className="contatiner py-4 p-3">
          <div className="row">
            <div className="col-md-12 " id="about">

              <h2>Resume</h2>
              <br /><br />
              <div className="educt">
                <div className="head">

                  <div className="icon-2" >
                    <i class="bi bi-book"></i>
                  </div>
                  <div className="degree">

                    <h3>Eduction</h3>
                    <br />
                  </div>
                </div>

                <div className="degrees">

                  <h4>Swarrnim Startup And Innovations University</h4>
                  <span>2023 - On Going</span>
                  <p>To secure a challenging position as IT professional to use my software and analytical skills for the progress of organisation and attain career targets.</p>


                  <h4>Red & White Multimedia Education</h4>
                  <span>2023 - 2024</span>
                  <p>
                    web development experience, content management knowledge, multimedia programming, time management, and creativity. Successful candidates usually hold at least and Associate's Degree in a relevant field, such as Bachelor of Computer Applications.
                  </p>


                  <h4>GHSEB</h4>
                  <span>2022 - 2023</span>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
                  </p>
                </div>
              </div>
              <br />
              <div className="skills">

                <h3>My Skills</h3>
                <br />
                <div className="skill">
                  <h5>Web Design 95%</h5>
                  <ProgressBar now={95} id='bar' class='progress-95' />  <br />
                  <h5>Web Devlopment 90%</h5>
                  <ProgressBar now={90} id='bar' /> <br />
                  <h5>Git 94%</h5>
                  <ProgressBar now={94} id='bar' variant="" /> <br />

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
