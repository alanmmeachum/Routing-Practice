import { useState, useNavigator } from 'react'
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom'
import Home from './components/Home'
import NumberOrWord from './components/NumberOrWord'
import Color from './components/Color'
import './App.css'

function App() {


  return (
    <div className='box'>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/:paramOne' element={<NumberOrWord />}/>
        <Route path='/:wordParam/:colorParam/:backgroundParam' element={<Color />}/>
      </Routes>
    </BrowserRouter>
    </div >
  )
}

export default App
