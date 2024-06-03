// import { addDoc, collection, deleteDoc, getDocs, doc, updateDoc } from "firebase/firestore";
// import database from './firebase';
// import { useEffect, useState } from 'react';

import './App.css';
import { useEffect, useState } from 'react';
import SignIn from './SignIn';
import Signup from './Signup';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { Route, Routes } from 'react-router-dom';
import app from './firebase';
const auth = getAuth(app)
 
// function App() {
// const [name, setName] = useState("")
// const [email, setEmail] = useState("")
// const [val, setVal] = useState([])
// const [id, setId] = useState("")
// const [show, setShow] = useState(false)

// const value = collection(database, "Demo")

// useEffect(() => {
//   const getData = async () => {
//     const querySnapshot = await getDocs(value);
//     const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setVal(documents);
//   }
//   getData();
// }, [value]);

// // Add
// const handlecreate = async (e) => {
//   e.preventDefault();
//   await addDoc(value, { name: name, email: email });
//   setName("");
//   setEmail("");
//   setId("")
//   setShow(false)
// }

// // Delete
// const handleDelete = async (id) => {
//   const deleteVal = doc(database, "Demo", id)
//   await deleteDoc(deleteVal)
// }

// // Edite
// const handleEdite = (id, name, email) => {
//   setId(id)
//   setName(name)
//   setEmail(email)
//   setShow(true)
// }

// // Update
// const handleUpdate = async () => {
//   const updateVal = doc(database, "Demo", id)
//   await updateDoc(updateVal, { name: name, email: email })
//   setId("")
//   setName("")
//   setEmail("")
//   setShow(false)
// }

// // Sorting
// const [sort, setSort] = useState(null)
// const HandleSort = (field) => {
//   setSort(field)
// }

// const sortedlist = sort ? [...val].sort((a, b) => a[sort].localeCompare(b[sort])) : val

// // Searching
// const [serchData, setSerchData] = useState("")
// const handleSerch = (e) => {
//   setSerchData(e.target.value)
// }
// const filterData = sortedlist.filter((item) => {
//   return item.name.toLowerCase().includes(serchData.toLowerCase()) ||
//     item.email.toLowerCase().includes(serchData.toLowerCase())
// })

// return (
//   <>
{/* <form >

        <input type="text" placeholder='Enter your name...' value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <input type="email" placeholder='Enter your email...' value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />

        {
          show ?
            <button onClick={() => handleUpdate()}>Update</button> :
            <button onClick={handlecreate}>Create</button>
        }

      </form>

      <table border={2}>
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
          <th>Name <button onClick={() => HandleSort("name")}><i class="bi bi-arrow-down"></i></button> </th>
          <th>Email <button onClick={() => HandleSort("name")}><i class="bi bi-arrow-up"></i></button></th>
          <th>Action</th>
        </tr>
        {
          filterData.map((item, index) => (

            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>

                <button onClick={() => handleDelete(item.id)}>Delete</button> &nbsp;
                <button onClick={() => handleEdite(item.id, item.name, item.email)}>Edite</button>
              </td>
            </tr>



          ))
        }
      </table > */}

{/* 
    </>
  );
} */}



function App() {
  const [user, setUSer] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        setUSer(user)
      } else {
        setUSer(null)
      }
    })
  }, [user])

  if (user === null) {
    return (
      <>
        <Routes>
          <Route path="/" element={ <SignIn/>  } />
          <Route path="/signup" element={<Signup />} />
        </Routes >
      </>
    )
  }

  return (
    <>
      <h1>Hell0{user.email}</h1>
      <button onClick={() => signOut(auth)}>LogOut</button>
    </>
  )
};
export default App;