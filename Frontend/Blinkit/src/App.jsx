import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductCard'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <Navbar/>
     <ProductGrid/>
     <Footer/>
    </>
  )
}

export default App
