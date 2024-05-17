import React, { useState } from 'react'

export default function CommentForm() {

    const [formData, setFormData] = useState([])

    const handleForm = (e) => {
        e.preventDefault()
        const name = e.target.name.value


        const newObj = { name }

        setFormData([...formData, newObj])
        console.log(formData)
        e.target.reset()
    }
    return (
        <>
            <div className='formstyle'>


                <form onSubmit={handleForm} >

                    <input type="text" placeholder='Comment heare...' name='name' />

                    <br /><br />
                    <button>Submit</button>
                    <h1>Comments....</h1>
                </form>
                {
                    formData.map((item, index) => {
                        return (
                            <div key={index}>
                                <p><b>{index+1}. </b>{item.name}</p>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
