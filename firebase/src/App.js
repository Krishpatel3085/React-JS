import database from './Firebase';

import './App.css';
import { ref, set } from 'firebase/database';

function App() {
  const putData = () => {
    set(ref(database, "Students/Data1"), {
      name: "Rahul",
      age: 20,
      address: "Delhi"
    });
  }
  const putData1 = () => {
    set(ref(database, "Students/Data2"), {
      name: "Krish",
      age: 19,
      address: "Ahemdabad"
    })
  }
  return (
    <>
      <h1>Real Time Database</h1>
      <label>Data1</label>
      <button onClick={putData}>Pass</button> <br /><br />
      <label>Data2</label>

      <button onClick={putData1}>Pass</button>
    </>
  );
}

export default App;
