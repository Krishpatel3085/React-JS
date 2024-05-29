import React from 'react'
import imge from './img/_DSC1149.JPG'
import About from './Components/About'

export default function Profile() {
    return (
        <>
            <div className="section" id="part">

                <div className="container" id='Profile'>
                    <div className="row">
                        <div className="col-md-12">
                            <img src={imge} alt="" />
                            <h3>Krish Kaila</h3>
                            <h4>FullStack-Devloper</h4>
                            <button>Download CV</button>
                            <br />

                            <div id='Line'>


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
                                        <li>+98246 99398</li>
                                    </ul>
                                </div>
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

                                <div className="social">
                                    <a href="https://www.linkedin.com/in/kaila-krish3085/"> <i class="bi bi-linkedin"> </i></a>
                                    <i class="bi bi-github"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" id='main'>
                    <div className="left" >
                        <nav id='nav'>
                            <ul>
                                <li>About</li>
                                <li>Resume</li>
                                <li>Portfolio</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


        </>
    )
}
