import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/login'
import Vistaprincipal from './routes/vistaprincipal'
import Añadir from './routes/añadir'
import GenerarPdf from './routes/generarPdf'


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path='/home'  element={<Vistaprincipal/>}/>
        <Route path='/añadir' element={<Añadir/>}/>
        <Route path='/generar' element={<GenerarPdf/>}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
