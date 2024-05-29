
import './App.css';
import About from './Components/About';
import { Route, Routes } from 'react-router-dom';
// import Main from './Main';
import Profile from './Profile';
import Resume from './Components/Resume';

function App() {
  return (
    <>

      <Profile />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

      </Routes >

    </>
  );
}

export default App;
