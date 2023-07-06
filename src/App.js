import './styles/App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

function App() {
 
  return (
    <BrowserRouter>
    
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
