import './App.css';
import Resume from './Components/resume/Resume';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Editor from './Components/Editor/Editor';
import Profile from './Components/Profile/Profile'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/Reset/ResetPassword';
import Edit from './Components/EditProfile/Edit'
import ResumeContextProvider from './context/ResumeContextProvider';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/template" element={<Resume />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/editor' element={<ResumeContextProvider><Editor /></ResumeContextProvider>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
