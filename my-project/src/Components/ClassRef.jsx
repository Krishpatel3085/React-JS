import React, { Component, createRef } from 'react'

export class ClassRef extends Component {

    constructor() {
        super()
        this.inputRef = createRef()
        this.input = createRef()
    }

    handleRef = (ref) => {
        ref.current.style.color = "red"
        ref.current.style.backgroundColor = "blue"
    }

    handleH = (ref1) => {
        ref1.current.style.color = "orange"

    }
    render() {
        return (
            <>
                <h1 ref={this.inputRef}>Captain America</h1>
                <button onClick={() => this.handleRef(this.inputRef)}>Click me</button>


                <h2 ref={this.input}>Jay Shree Ram</h2>
                <button onClick={() => this.handleH(this.input)}>Click me</button>
            </>
        )
    }
}

export default ClassRef