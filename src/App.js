import './App.css';
import Resume from './Components/resume/Resume';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Editor from './Components/Editor/Editor';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/template" element={<Resume />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/editor' element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
