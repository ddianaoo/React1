import React, { useContext } from 'react';
import {  Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';



const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  console.log(isAuth, 'from navbar');

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

    return (
        <div className={classes.navbar}>

          {isAuth
            ? <MyButton onClick={logout} style={{color:'white'}}>Log out</MyButton>
            // : <Link to='/login' className={classes.links}>Log in</Link>
            : <p></p>
          }

          <div className={classes.navbar__links}>
            <Link to='/about' className={classes.links}>About</Link>
            <Link to='/posts' className={classes.links}>Posts</Link>
          </div>

        </div>
    );
};

export default Navbar;