import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlist from './Userlist'
import Createlist from "./Createlist.js"
import EditUser from './EditUser.js'

function CRUDApp() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Userlist />}/>
        <Route path='/createlist' element={<Createlist />}/>
        <Route path='/edit/:id' element={<EditUser />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default CRUDApp;
