import React, { useContext } from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../Router/routes'
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return  <div style={{display: 'flex', justifyContent:'center', marginTop: 50 }}><Loader/></div>
  }

    return (

      isAuth
      ?
      <Routes>
        {privateRoutes.map( el => 
          <Route path={el.path} Component={el.element} key={el.path}/>
        )}
        <Route path="/*" element={<Navigate to="/posts" replace/>}/>
      </Routes>  
      :
      <Routes>
        {publicRoutes.map( el => 
          <Route path={el.path} Component={el.element} key={el.path}/>
        )}
        <Route path="/*" element={<Navigate to="/login" replace/>}/>
    </Routes>  
    
    
    );
};

export default AppRouter;