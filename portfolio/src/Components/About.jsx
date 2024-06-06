import React from 'react'

export default function About() {

    return (
        <>
            <div id="about">
                <div className="contatiner py-4 p-3">
                    <div className="row">
                        <div className="col-md-12 " >

                            <h2>About Me</h2>
                            <br /><br />
                            <p>
                                I'm Web Developer from Ahemdabad. Now I'm working as a web development faculty at red and white multimedia education. I enjoy turning complex problems into simple, beautiful and intuitive designs. <br /> <br />

                                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
                            </p>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-md-12">
                            <h2>What I'm Doing</h2>
                            <br />
                            <div id="box">

                                <div className="boxs">
                                    <i class="bi bi-window-split" ></i>

                                    <div className="tex">
                                        <h4>Web Design</h4>
                                        <p>The most modern and high-quality design made at a professional level.</p>
                                    </div>
                                </div>
                                <div className="boxs">
                                    <i class="bi bi-code-slash"></i>

                                    <div className="tex">
                                        <h4>Web Devlopment</h4>
                                        <p>
                                            High-quality development of sites at the professional level.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
