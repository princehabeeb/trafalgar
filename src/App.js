import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import Illustration from './components/Illustration';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Services />
      <Illustration/>
    <Routes>
    </Routes>
    </BrowserRouter>
  )
}

export default App