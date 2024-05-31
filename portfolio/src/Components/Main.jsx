import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
export default function Main() {
    const navigate = useNavigate()
    const gotoResume = () => {
        navigate("/resume")
    }

    const gotoAbout = () => {
        navigate("/")
    }
    const gotoPortfolio = () =>{
        navigate("/portfolio")
    }
    const gotoContact = () =>{
        navigate("/contact")
    }
    return (
        <>
            <div className="container" id='main'>

                <nav id='nav'>
                    <ul>
                        <li onClick={gotoAbout}>About</li>
                        <li onClick={gotoResume}>Resume</li>
                        <li onClick={gotoPortfolio}> Portfolio</li>
                        <li onClick={gotoContact}>Contact</li>
                    </ul>
                </nav>

                <Routes>

                    <Route path="/" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes  >

            </div>
        </>
    )
}