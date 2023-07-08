import React, { useContext } from 'react';
import {  Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';



const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  console.log(isAuth, 'from navbar');

    return (
        <div className={classes.navbar}>

          {isAuth
            ? <MyButton onClick={() => setIsAuth(false)} style={{color:'white'}}>Log out</MyButton>
            : <Link to='/login' className={classes.links}>Log in</Link>
          }
          
          <div className={classes.navbar__links}>
            <Link to='/about' className={classes.links}>About</Link>
            <Link to='/posts' className={classes.links}>Posts</Link>
          </div>

        </div>
    );
};

export default Navbar;