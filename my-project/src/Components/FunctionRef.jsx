import React, { useRef } from 'react'

export default function FunctionRef() {

    let inputRef = useRef()
    let inputRef1 = useRef()

    const handleRef = (ref) => {
        ref.current.style.color = 'red'
    }
    const handleInput = (ref1) => {
        ref1.current.style.color = 'green'
        ref1.current.style.backgroundColor = 'green'
    }
    return (
        <>
            <h1 ref={inputRef}>Jay shree Krishna</h1>
            <button onClick={() => handleRef(inputRef)}>Click me</button>

            <input type="text" ref={inputRef1}/>
            <button onClick={() => handleInput(inputRef1)}>Click me</button>
        </>
    )
}
