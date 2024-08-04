import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Layout from '../layout';
import Todo from '../pages/todo';

function ProtectedRoutes({setCurrentTheme, currentTheme}) {
  return (
      <Layout>
         <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/about' element={ <Todo/>}/>
         </Routes>
      </Layout>
  )
}

export default ProtectedRoutes