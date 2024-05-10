import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import FaqSection from './components/FAQ/FaqSection'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FaqSection/>
    </>
  )
}

export default App
