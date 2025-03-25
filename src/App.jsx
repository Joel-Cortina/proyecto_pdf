import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './routes/login'
import Vistaprincipal from './routes/vistaprincipal'
import Añadir from './routes/añadir'
import GenerarPdf from './routes/generarPdf'
import MyDocument from './ui/Pdf'



export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path='/home'  element={<Vistaprincipal/>}/>
        <Route path='/añadir' element={<Añadir/>}/>
        <Route path='/generar' element={<GenerarPdf/>}  />
        <Route path='/pdf' element={<MyDocument/>}  />
      </Routes>
    </BrowserRouter>
  )
}


