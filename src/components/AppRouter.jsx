import React from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../Router/routes'


const AppRouter = () => {
  const isAuth = true;

    return (

      isAuth
      ?
      <Routes>
        {privateRoutes.map( el => 
          <Route path={el.path} Component={el.element}/>
        )}
        <Route path="/*" element={<Navigate to="/error" replace/>}/>
      </Routes>  
      :
      <Routes>
        {publicRoutes.map( el => 
          <Route path={el.path} Component={el.element}/>
        )}
        <Route path="/*" element={<Navigate to="/login" replace/>}/>
    </Routes>  
    
    
    );
};

export default AppRouter;