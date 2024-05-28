import React, { useState } from 'react'
import app from './firebase.js'
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app)
export default function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

     const SignUp = () => {
        createUserWithEmailAndPassword(auth,email,password).then((value)=>alert("Success")).catch((err)=>console.log(err))
     }
    return (

        <div>
                <h1>Sign Up</h1>
            <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br /><br />
            <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br /><br />
            <button onClick={SignUp}>Sign Up</button>
        </div>

    )
}
 