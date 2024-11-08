import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails';
import ProductGrid from './components/ProductCard'
import Footer from './components/Footer'
import Layout from './components/Layout'
import { BrowserRouter, Route, Routes } from  'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/productdetail" element={<ProductDetails/>}></Route>
     </Routes>
     </BrowserRouter>
   
    </>
  )
}

export default App
