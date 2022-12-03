import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Users from './components/content/Users';
import Photos from './components/content/Photos';
import UserDetail from './components/content/UserDetail';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  useEffect(() =>{
    navigate('/users')
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserDetail />} />
        <Route path='/photos' element={<Photos />} />
      </Routes>
    </div>
  )
}

export default App
