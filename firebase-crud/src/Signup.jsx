import React, { useState } from 'react'
import app from './firebase.js'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import imgs from './img/google2.png'
import SignIn from './SignIn.jsx'
import { Link, useNavigate } from 'react-router-dom'

const auth = getAuth(app)
export default function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SignUp = () => {
        createUserWithEmailAndPassword(auth, email, password).then((value) => console.log(value, "Success")).catch((err) => console.log(err))
    }
    const navigate = useNavigate()
    const Signin = () => {
        navigate("/")
    }
    return (

        <div id='signup'>
            <div className="ex">

                <img src={imgs} alt="" />
                <h1>Create Your Account</h1>
            </div>
            <div className="field">

                <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br /><br />



                <a onClick={Signin}>Sign in</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={SignUp}>Sign Up</button>
            </div>
        </div>

    )
}
