// import database from './Firebase';
// import { ref, set } from 'firebase/database';
import './App.css';
import app from './Firebase';
import { getFirestore, addDoc, collection, } from 'firebase/firestore'

const firestore = getFirestore(app)
function App() {
  // const putData = () => {
  //   set(ref(database, "Students/Data1"), {
  //     name: "Rahul",
  //     age: 20,
  //     address: "Delhi"
  //   });
  // }
  // const putData1 = () => {
  //   set(ref(database, "Students/Data2"), {
  //     name: "Krish",
  //     age: 19,
  //     address: "Ahemdabad"
  //   })
  // }

  const addDocument = () => {
    addDoc(collection(firestore, "Country"), {
      name: "India",
      Pincode: "363310"
    })

  }
  const subCollection = () => {
    addDoc(collection(firestore, "Country/6u6q8eYLwVYdxLU3bf6G/Sectors"), {
      name: "Gujrat",
      Pincode: "363315"
    })
  }
  return (
    <>
      {/* <h1>Real Time Database</h1>
      <label>Data1</label>
      <button onClick={putData}>Pass</button> <br /><br />
      <label>Data2</label> */}

      <button onClick={addDocument}>Pass</button>
      <button onClick={subCollection}>Pass2</button>
    </>
  );
}

export default App;
