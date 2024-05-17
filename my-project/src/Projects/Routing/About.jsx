import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function About() {

    const navigate = useNavigate()
    const goToAboutPage = () => {
        navigate("/Contact")
    }
    return (
        <>
            <div>About</div>
            {/* <Link to="/contact">Go to Contact</Link> */}
            <button onClick={goToAboutPage}> Go To Contact Page</button>

        </>

    )
}
