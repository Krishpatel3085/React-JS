import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Contact() {

    const navigate = useNavigate()
    const goToAboutPage = () => {
        navigate("/")
    }
    return (
        <>
            <div>Contact</div>
            {/* <Link to="/">Go to Home</Link> */}

            <button onClick={goToAboutPage}> Go To Home Page</button>

        </>

    )
}
