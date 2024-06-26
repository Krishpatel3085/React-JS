import React, { useState } from 'react'
import { Route, Routes,  useNavigate } from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function Main() {
    const navigate = useNavigate()

    const [activePage, setActivepage] = useState('about');

    const gotoResume = () => {
        navigate("/resume")
        setActivepage('resume');    
    }

    const gotoAbout = () => {
        navigate("/")
        setActivepage('about');

    }
    const gotoPortfolio = () => {
        navigate("/portfolio")
        setActivepage('portfolio');

    }
    const gotoContact = () => {
        navigate("/contact")
        setActivepage('contact');

    }

    return (
        <>
            <div className="container" id='main'>

                <nav id='nav'>
                    <ul>
                        <li onClick={gotoAbout} className={activePage === 'about' ? 'active' : ''} >About</li>
                        <li onClick={gotoResume} className={activePage === 'resume' ? 'active' : ''} >Resume</li>
                        <li onClick={gotoPortfolio} className={activePage === 'portfolio' ? 'active' : ''} > Portfolio</li>
                        <li onClick={gotoContact} className={activePage === 'contact' ? 'active' : ''} >Contact</li>
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