import './App.css';
import Resume from './Components/resume/Resume';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Editor from './Components/Editor/Editor';
import Admin from './Components/Admin/Admin';
import Profile from './Components/Profile/Profile'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';

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
        <Route path='/admin' element={<Admin />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/forgot' element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
