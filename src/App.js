import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
    <Routes>
    </Routes>
    </BrowserRouter>
  )
}

export default App