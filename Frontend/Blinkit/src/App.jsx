import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductCard'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App() {


  return (
    <>
     <Layout>
     <ProductGrid/>
     </Layout>
   
    </>
  )
}

export default App
