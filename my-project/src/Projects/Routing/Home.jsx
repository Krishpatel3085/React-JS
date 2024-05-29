import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const goToAboutPage = () => {
    navigate("/about")
  }
  return (
    <>
      <div>Home</div>
      {/* <Link to="/about">Go to About</Link> */}
      <button onClick={goToAboutPage}> Go To About Page</button>
    </>
  )
}
