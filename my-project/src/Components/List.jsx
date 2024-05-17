import React from 'react'

export default function List() {

    let array = ["Raj","Mayur", "Parth", "Pushpraj"]
  return (

    <>
    {
        array.map((item, index) => {
            return <li key={index}>{item}</li>
        })
    }
    
    </>
  )
}
