import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <>
            <div className="container" id='main'>
                <div className="row" id='left'>
                    <div className="col-md-12">
                        <nav id='nav'>
                            <ul>

                                <Link to="/about"><li>About</li></Link>

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
