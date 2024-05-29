import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from './firebase'
import imgs from './img/google2.png'
import Signup from './Signup'

const auth = getAuth(app)
export default function SignIn() {

    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const SignIn = () => {
        signInWithEmailAndPassword(auth, email, Password).then((value) => console.log(value, "SignIn Success")).catch((err) => console.log(err))

    }

    return (
        <div id='signup'>
            <div className="ex">
                <img src={imgs} alt="" />
                <h1>Sign In</h1>
            </div>
            <div className="field2">

                <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <input type="Password" placeholder='Enter Your Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <a href={<Signup/>}>Create Account</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={SignIn}>Sign In</button>
            </div>
        </div>
    )
}
