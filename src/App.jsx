import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/login'
import Vistaprincipal from './routes/vistaprincipal'
import Añadir from './routes/añadir'
import GenerarPdf from './routes/generarPdf'
import FastEdicion from './ui/Pdf'
import RegistroUser from './routes/añadir'
import Navbar from './ui/navbar'



export default function App() {
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path='/home'  element={<GenerarPdf/>}/>
        <Route path='/registro' element={<RegistroUser/>}/>
        <Route path='/generar' element={<GenerarPdf/>}  />
        <Route path='/fastedicion' element={<FastEdicion/>}  />
      </Routes>
    </BrowserRouter>
  )
}


