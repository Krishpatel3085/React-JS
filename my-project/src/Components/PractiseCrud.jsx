import React, { useState } from 'react'

export default function PractiseCrud() {

    const [items, setItems] = useState([])

    const [inputvalue, setInputValue] = useState({
        name: '',
        email: ""
    })

    const addData = () => {
        setItems([...items, inputvalue])
        setInputValue({
            name: '',
            email: ''
        })
    }

    return (

        <div id='form'>
            <div className='form-2'>

                <h1>Practise</h1>
                <input type="text" placeholder='Enter name' onChange={(e) => setInputValue({ ...inputvalue, name: e.target.value })} /> <br /><br />
                <input type="email" placeholder='enter your Emial' onChange={(e) => setInputValue({ ...inputvalue, email: e.target.value })} /> <br /><br />
                <button onClick={() => addData()}>Add Data</button>
            </div>
            <br />
            <table style={{ width: '70%' }}>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>

                {
                    items.map((item, index) => {
                        return (

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>

    )
}
