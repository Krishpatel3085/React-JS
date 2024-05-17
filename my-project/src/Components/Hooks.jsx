import React, { useState } from 'react'
import '../Hook.css';
import imgs from './img/SAVE_20200703_092503.jpg';
export default function Hooks() {

    const [name, setName] = useState("Hello world !!")
    const [counter, setCounter] = useState(10)
    const [counter2, setCounter2] = useState(2)
    const [counter3, setCounter3] = useState(1)


    const changeState = () => {
        if (name === "Hello world !!") {
            setName("Jay Shree Ram")
        } else {
            setName("Hello world !!")
        };


    };

    return (
        <div>
            <div id="inst">
                <img src={imgs} alt="" />
                
                <button onClick={() => setCounter(counter + 1)}><i class="bi bi-heart-fill"></i></button>
                <h2>{counter}</h2>

                <button id="mesg" onClick={() => setCounter2(counter2 + 1)}><i class="bi bi-chat"></i></button>
                <h2 id="count2">{counter2}</h2>

                <button id="send" onClick={() => setCounter3(counter3 + 1)}><i class="bi bi-send"></i></button>
                <h2 id="count3">{counter3}</h2>

                <button id="save"><i class="bi bi-bookmark"></i></button>
            </div>

            {/* <button onClick={() => setCounter(counter - 1)}>Dcrement</button> */}

        </div>
    )
}
