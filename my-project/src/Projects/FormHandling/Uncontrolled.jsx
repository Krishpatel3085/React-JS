import React, { useRef} from 'react'

export default function Uncontrolled() {

    let input = useRef()
    let input1 = useRef()
    let input2 = useRef()

    const handleForm = (e) =>{
        e.preventDefault()
        if(input.current.value.length <= 3 ){
            alert("Please Enter Valid Username")

        }if(input2.current.value.length <= 6){
            alert("Please Enter Valid password")
        }
        else{
            alert("Submit Succesfully ")
            console.log("Name: " + input.current.value)
            console.log("email: " + input1.current.value)
            console.log("Password: " + input2.current.value)
        }

        input.current.value = ""
        input1.current.value = ""
        input2.current.value = ""
    }
  return (
    <div>

        <form onSubmit={handleForm}>
            <h1>Uncontrolled Form</h1>
            <input type="text"  placeholder='Enter your name' ref={input}/> <br /><br />
            <input type="email"  placeholder='email' ref={input1}/> <br /><br />
            <input type="password"  placeholder='Password' ref={input2}/> <br /><br />
            <button>submit</button>

        </form>
    </div>
  )
}




