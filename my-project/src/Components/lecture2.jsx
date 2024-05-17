import React from 'react';

const MyfirstComponent = () => {
    const arr = [
    {
        id: 1,
        name: "krish",
        age: 24
    },
    {
        id: 3,
        name: "Dhruval",
        age: 25
    },
    {
        id: 2,
        name: "Parth",
        age: 25
    },
    ];
u
    const a = arr.filter((i) => {
        return i.age === 24;
    })

    return (
        <>
            <div>
                <h3>My first component</h3>
                {/* Comment */}
                {/* Adding heading */}
                {
                    <ul>
                        {
                            a.map((i) => {
                                return (
                                    <React.Fragment key="index">
                                        <li>{i.id}</li>
                                        <li>{i.name}</li>
                                        <li>{i.age}</li>
                                    </React.Fragment>
                                )
                            })
                        }
                    </ul>
                }
            </div>

        </>
    );
}
export default MyfirstComponent;