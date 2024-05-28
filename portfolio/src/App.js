
import './App.css';
import About from './Components/About';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Profile from './Profile';

function App() {
  return (
    <>

      <div id='portfolio'>
        <Profile />
        <Main />
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<resume />} />
        <Route path="/contact" element={<Contact />} /> */}

      </Routes >
    </>
  );
}

export default App;