import React, { useEffect, useState } from 'react'
import Navbar2 from './Navbar'
import { Link } from 'react-router-dom'


export default function User() {

  const [data, setData] = useState(() => {
    const USerData = sessionStorage.getItem("UserData")
    return USerData ? JSON.parse(USerData) : []
  })

  const [inputValue, setInputValue] = useState({
    name: '',
    password: ""
  })

  useEffect(() => {
    sessionStorage.setItem("UserData", JSON.stringify(data))
  })

  const SaveData = () => {
    setData([...data, inputValue])
    setInputValue({
      name: '',
      password: ""
    })
    alert("Ragistration Sucefful")
  }


  return (
    <div>
      <Navbar2 />

      <form id='user-info'>

        <h3>Sign Up</h3>

        <input type="text" name="name" placeholder="Name"  value={inputValue.nmae} onChange={(e)=> setInputValue({...inputValue,name:e.target.value})}/> <br /><br />

        <input type="password" name="password" placeholder="Password"  value={inputValue.password} onChange={(e)=> setInputValue({...inputValue,password:e.target.value})}/><br /><br />

        <button onClick={() => SaveData()}>Sign up</button>  <Link to="/login" id='css'> <a href="#">Login</a></Link>
      </form>
    </div>
  )
}
