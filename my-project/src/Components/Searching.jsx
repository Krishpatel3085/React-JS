import React, { useState } from 'react'

export default function Searching() {
    const [orignalList] = useState(["Funty", "Alto 800", "Centro", "G Wagon ", "Rolls Roys", "Doge Challenger","Scorpio" , "Fortuner" ]);

    const [list, setList] = useState(orignalList);
    const [val, setVal] = useState("");

    const handleSerch = (e) => {
        const serchQuery = e.target.value;
        setVal(serchQuery);


        if (serchQuery) {
            const result = orignalList.filter((item) => item.toLowerCase().includes(serchQuery.toLowerCase()));
            setList(result);
        } else {
            setList(orignalList);
        }
    }
    return (
        <>
            <div className="form">

                <input value={val} onChange={handleSerch} />
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }

            </div>
        </>
    )
}
