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
import Profile from './Pages/Profile';
import TermsAndCondition from './Pages/TermsAndCondition';
import Cart from './Pages/Cart';

function App() {


  return (
    <>
    <BrowserRouter>
    {/* user */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/productdetail" element={<ProductDetails/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/termsandcondition" element={<TermsAndCondition/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
     </Routes>

     {/* admin */}
     
     </BrowserRouter>
   
    </>
  )
}

export default App
