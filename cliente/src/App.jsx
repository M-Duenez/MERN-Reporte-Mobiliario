import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import AreasPage from './pages/AreasPage'
import NotFound from './pages/NotFound'
import AreaFrom from './pages/AreaFrom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AreasPage/>}/>
        <Route path='/new' element={<AreaFrom/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
