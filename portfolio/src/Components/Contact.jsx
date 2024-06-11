import React from 'react'

export default function Contact() {
    return (
        <>

            <div id="contact">
                <div className="contatiner py-4 p-3">
                    <div className="row">
                        <div className="col-md-12 " id="contact">

                            <h2>Contact</h2>
                            <br /><br />


                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.05388026793!2d72.55662387535982!3d23.095123379122963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830f78cf7387%3A0xae3e06190a630fcd!2sGanesh%20Sopan!5e0!3m2!1sen!2sin!4v1717394088991!5m2!1sen!2sin" width="1010" height="450" style={{ borderRadius: 20 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            <br />
                            <br />
                            <h3>
                                Contact Form
                            </h3>
                            <form>


                                <input type="text" placeholder='Full name' />
                                <input type="text" placeholder='Email address' />



                            </form>
                            <br /> <br />
                            <textarea placeholder='Your Message'></textarea>
                            <br />

                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12" id='button'>
                            <button><i class="bi bi-send-fill"></i> Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
