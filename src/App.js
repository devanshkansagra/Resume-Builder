import './App.css';
import Resume from './Components/resume/Resume';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/template" element={<Resume />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
