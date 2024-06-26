import React from 'react'
import imge from './img/krish.jpg'
import cv from './img/resume.pdf'

export default function Profile() {



    return (
        <>
            <div className="container" id='pac'>
                <div className="row " >
                    <div className="col-md-12 " >
                        <div id="Profile">
                            <div className="firs">

                                <img src={imge} alt="" />
                                <div id="name">
                                    <h3>Krish Kaila</h3>
                                    <h4>FullStack-Devloper</h4>
                                </div>
                                <button className='download '>
                                    <a href={cv} download={cv} >Download CV</a>
                                </button>
                            </div>
                            <br />

                            <label for="check"  >

                                <span id='text-s'>Show Contact</span>
                                <span id='text-i'><i class="bi bi-chevron-down"></i></span>
                            </label>
                            <input type="checkbox" id="check" />
                            <ol>

                                <div id='Line'>

                                    <div className="info-1">

                                        <div className="info">
                                            <div className="icon">
                                                <i class="bi bi-envelope"></i>
                                            </div>
                                            <ul>
                                                <li id='title'>EMAIL</li>
                                                <li>f388krish28@gmail.com</li>
                                            </ul>
                                        </div>
                                        <div className="info">
                                            <div className="icon">
                                                <i class="bi bi-phone"></i>
                                            </div>
                                            <ul>
                                                <li id='title'>PHONE</li>
                                                <li>+91 98246 99398</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="info-2">

                                        <div className="info">
                                            <div className="icon">
                                                <i class="bi bi-calendar3"></i>
                                            </div>
                                            <ul>
                                                <li id='title'>BIRTHDAY</li>
                                                <li>August 30 ,2005</li>
                                            </ul>
                                        </div>
                                        <div className="info">
                                            <div className="icon">
                                                <i class="bi bi-geo-alt"></i>
                                            </div>
                                            <ul>
                                                <li id='title'>LOCATION</li>
                                                <li>Ahemdabad , Gujarat</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="social">
                                    <a href="https://www.linkedin.com/in/kaila-krish3085/"> <i class="bi bi-linkedin"> </i></a>
                                    <i class="bi bi-github"></i>
                                    <i class="bi bi-instagram"></i>
                                    <br /><br />
                                </div>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
