import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import AreasPage from './pages/AreasPage'
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound'
import AreaFrom from './pages/AreaFrom'
import './App.css'
import Navbar from './components/Navbar'
import {AreaContextProvider} from './context/areasContext'

function App() {

  return (
    <div className='mx-auto'>
      <AreaContextProvider>
        <Routes>
          <Route path='/' element={<AreasPage/>}/>
          <Route path='/new' element={<AreaFrom/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/login' element={<LoginPage/>}/>

        </Routes>
      </AreaContextProvider>
    </div>
  )
}

export default App
