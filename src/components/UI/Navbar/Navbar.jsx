import React from 'react';
import {  Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbar'>
          <div className='navbar__links'>
            <Link to='/about' className='links'>About</Link>
            <Link to='/posts' className='links'>Posts</Link>
          </div>
        </div>
    );
};

export default Navbar;