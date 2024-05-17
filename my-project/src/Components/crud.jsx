import React, { useEffect, useState } from 'react'


export default function Crud() {

    const [items, setItems] = useState(() => {
        const storeData = localStorage.getItem("itemdata")
        return storeData ? JSON.parse(storeData) : []
    })
    const [inputValue, setInputValue] = useState({
        name: '',
        password: ""
    })

    const [editItem, setEditItem] = useState(null)

    // Sorting..
    const [sort, setSort] = useState(null)
    const handleSort = (field) => {
        setSort(field)
    }

    const sortedlist = sort ? [...items].sort((a, b) => a[sort].localeCompare(b[sort])) : items


    // Data Add in Local Storage

    useEffect(() => {
        localStorage.setItem("itemdata", JSON.stringify(items))
    })

    // Data Added

    const handleAddData = () => {
        setItems([...items, inputValue])
        setInputValue({
            name: '',
            password: ''
        })
        setEditItem(null)
    }

    //  Data Edited

    const handleEditData = (index) => {
        setEditItem(index)
        setInputValue(items[index])
    }
    const handleSaveItem = () => {
        const updateData = [...items]
        updateData[editItem] = inputValue

        setItems(updateData)
        setInputValue({
            name: '',
            password: ''
        })
        setEditItem(null)

    }

    // Data Deleted

    const handleUpdateData = (index) => {
        const updateData = [...items]
        updateData.splice(index, 1)

        setItems(updateData)
    }



    // Sercing
    const [serchData, setSerchData] = useState("")
    const handleSerch = (e) => {
        setSerchData(e.target.value)
    }
    const filterData = sortedlist.filter((item) => {
        return item.name.toLowerCase().includes(serchData.toLowerCase()) ||
            item.password.toLowerCase().includes(serchData.toLowerCase())
    })

    return (
        < div id='form'>
            {/* <h4>Local Storage</h4> */}
            <div className="form-2">

                <br />
                <h4>Crud Form</h4> <br />
                <input type="text" placeholder='Enter your name...' value={inputValue.name} onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} /><br /> <br />
                <input type="Password" placeholder='Password...' value={inputValue.password} onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} /><br /> <br />



                {
                    editItem === null ?
                        <button onClick={() => handleAddData()}>Submit</button>
                        :
                        <button onClick={() => handleSaveItem()}>Savechange</button>
                }
            </div>
            <br />
            {
                items.length === 0 ? "" :
                    <table style={{ "width": "70%" }} >
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                                <input id='serch' type="text" placeholder='Serch...' value={serchData} onChange={(e) => handleSerch(e)} />
                            </th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>Name <button onClick={() => handleSort("name")}><i class="bi bi-arrow-down"></i></button> </th>
                            <th>Password <button onClick={() => handleSort("password")}><i class="bi bi-arrow-up"></i></button> </th>
                            <th>Action</th>
                        </tr>

                        {
                            filterData.map((item, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td> {item.password}</td>
                                        <td>
                                            <button onClick={() => handleEditData(index)}><i class="bi bi-pencil-square"></i></button> &nbsp;
                                            <button onClick={() => handleUpdateData(index)}><i class="bi bi-trash-fill"></i></button>
                                        </td>
                                    </tr>

                                )
                            })

                        }

                    </table>
            }
        </div>
    )
}



// export default function Crud2() {

//     const [items, setItems] = useState(() => {
//         const storeData = sessionStorage.getItem("itemdata")
//         return storeData ? JSON.parse(storeData) : []
//     })
//     const [inputValue, setInputValue] = useState({
//         name: '',
//         password: ""
//     })

//     const [editItem, setEditItem] = useState(null)

//     // Sorting..
//     const [sort, setSort] = useState(null)
//     const handleSort = (field) => {
//         setSort(field)
//     }

//     const sortedlist = sort ? [...items].sort((a, b) => a[sort].localeCompare(b[sort])) : items


//     // Data Add in Local Storage

//     useEffect(() => {
//         sessionStorage.setItem("itemdata", JSON.stringify(items))
//     })

//     // Data Added

//     const handleAddData = () => {
//         setItems([...items, inputValue])
//         setInputValue({
//             name: '',
//             password: ''
//         })
//         setEditItem(null)
//     }

//     //  Data Edited

//     const handleEditData = (index) => {
//         setEditItem(index)
//         setInputValue(items[index])
//     }
//     const handleSaveItem = () => {
//         const updateData = [...items]
//         updateData[editItem] = inputValue

//         setItems(updateData)
//         setInputValue({
//             name: '',
//             password: ''
//         })
//         setEditItem(null)

//     }

//     // Data Deleted

//     const handleUpdateData = (index) => {
//         const updateData = [...items]
//         updateData.splice(index, 1)

//         setItems(updateData)
//     }



//     // Sercing
//     const [serchData, setSerchData] = useState("")
//     const handleSerch = (e) => {
//         setSerchData(e.target.value)
//     }
//     const filterData = sortedlist.filter((item) => {
//         return item.name.toLowerCase().includes(serchData.toLowerCase()) ||
//             item.password.toLowerCase().includes(serchData.toLowerCase())
//     })

//     return (
//         < div id='form'>
//             <h1>Session Storage</h1>
//             <div className="form-2">

//                 <br />
//                 <h4>Crud Form</h4> <br />
//                 <input type="text" placeholder='Enter your name...' value={inputValue.name} onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} /><br /> <br />
//                 <input type="Password" placeholder='Password...' value={inputValue.password} onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} /><br /> <br />



//                 {
//                     editItem === null ?
//                         <button onClick={() => handleAddData()}>Submit</button>
//                         :
//                         <button onClick={() => handleSaveItem()}>Savechange</button>
//                 }
//             </div>
//             <br />
//             {
//                 items.length === 0 ? "" :
//                     <table style={{ "width": "70%" }} >
//                         <tr>
//                             <th></th>
//                             <th></th>
//                             <th></th>
//                             <th>
//                                 <input id='serch' type="text" placeholder='Serch...' value={serchData} onChange={(e) => handleSerch(e)} />
//                             </th>
//                         </tr>
//                         <tr>
//                             <th>No</th>
//                             <th>Name <button onClick={() => handleSort("name")}><i class="bi bi-arrow-down"></i></button> </th>
//                             <th>Password <button onClick={() => handleSort("password")}><i class="bi bi-arrow-up"></i></button> </th>
//                             <th>Action</th>
//                         </tr>

//                         {
//                             filterData.map((item, index) => {
//                                 return (

//                                     <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td>{item.name}</td>
//                                         <td> {item.password}</td>
//                                         <td>
//                                             <button onClick={() => handleEditData(index)}><i class="bi bi-pencil-square"></i></button> &nbsp;
//                                             <button onClick={() => handleUpdateData(index)}><i class="bi bi-trash-fill"></i></button>
//                                         </td>
//                                     </tr>

//                                 )
//                             })

//                         }

//                     </table>
//             }
//         </div>
//     )
// }