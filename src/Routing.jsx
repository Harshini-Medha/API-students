import React from 'react'
import Landing from './Landing'
import Loader from './Loader'
import List from './list'
import {BrowserRouter, Routes, Route } from 'react-router-dom'



const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
<Route path="" element={<Landing/>}/>
<Route path="/list" element={<List/>}/>


    </Routes>
    
    </BrowserRouter>  
  )
}

export default Routing