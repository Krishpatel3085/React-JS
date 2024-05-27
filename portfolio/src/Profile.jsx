import React from 'react'
import imge from './img/_DSC1149.JPG'
export default function Profile() {
    return (
        <>
            <div id='Profile'>

                <img src={imge} alt=""  />
                <h3>Krish Kaila</h3>
                <h4>FullStack-Devloper</h4>
                <button>Download CV</button>

                <div>
                    <div className="boxs">
                        <div className="icon">
                            <i class="bi bi-envelope"></i>
                        </div>
                        <ul>
                            <li>Email</li>
                            <li>f388krish@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
