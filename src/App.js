import './styles/App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() =>{
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);
  
  return (

    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
