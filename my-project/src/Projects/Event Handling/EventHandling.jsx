import React, { useState } from 'react';

export default function ListKeys() {
  // Question 1
  const [check, setCheck] = useState(false)
  const handleform = (e) => {
    e.preventDefault()
    console.log(check)
  }

  // Question 2
  const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 28 }
  ];


  // Question 3

  const [login, setlogin] = useState(false);
  const handleLogin = () => {
    setlogin(true);
  };
  const handleLogout = () => {
    setlogin(false);
  };


  // Question 4


  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };


  return (

    <div>
      <h2>1.Write a program to perform Done & remaining status using checkbox. Onchange event</h2><br />

      <form onSubmit={handleform}>
        <label htmlFor="">Checkbox</label>
        <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
        <br /><br />
        <button>submit</button>
      </form>
      <br />
      <hr />
      <br /><br />


      <h2>2.Create array & array of object using list & keys.</h2><br />

      <ul>
        {data.map(item => (

          <li key={item.id}>
            <div><b>ID:</b> {item.id}</div>
            <div><b>Name:</b> {item.name}</div>
            <div><b>Age:</b> {item.age}</div>
            <br />
          </li>
        ))}
      </ul>


      <h2>3.Write a program to perform conditional rendering </h2> <br />
      <>
        {login ? (
          <>
            <h4>Welcome User!</h4>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <h4>Please Login</h4>
            <button onClick={handleLogin}>Login</button>
          </>
        )}
      </>

      <h2>4. Write a program to perform toggle button [on,off] </h2> <br />

      <div>
        <h4>Toggle Button Example</h4>
        <button onClick={handleClick}>
          {isOn ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
};



