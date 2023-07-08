import React from 'react';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import {  Route, Routes, Navigate } from 'react-router-dom';
import PostIdPage from '../pages/PostIdPage';
import {routes} from '../Router/routes'


const AppRouter = () => {
    return (
      <Routes>

        {routes.map( el => 
          <Route path={el.path} Component={el.element}/>
        )}

        <Route path="/*" element={<Navigate to="/posts" replace/>}/>
    </Routes>            
    );
};

export default AppRouter;