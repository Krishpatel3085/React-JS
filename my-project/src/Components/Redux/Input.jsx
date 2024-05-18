import { useState } from "react";
import {useDispatch} from "react-redux"
import { ADD } from "./Action";


function Input() {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    const handleForm = (e) =>{
        e.preventDefault()
        dispatch(ADD(input))
        e.target.reset()
    }

        
    return (
        <div id="Redux-Input">
            <h1>Input To Do Task</h1> <br />
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Enter TODO" onChange={(e)=>setInput(e.target.value)}/>
                <button ><i class="bi bi-plus-circle"></i></button>
            </form>
        </div>

    )
}

export default Input