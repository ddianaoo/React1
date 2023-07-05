import './styles/App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';


function App() {
 
  return (
    <BrowserRouter>
    
        <div className='navbar'>
          <div className='navbar__links'>
            <Link to='/about' className='links'>About</Link>
            <Link to='/posts' className='links'>Posts</Link>
          </div>
        </div>

      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
