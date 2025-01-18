import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Pages/Layouts/Header/Header';
import Home from './Pages/CMS/Home/Home';
import Abouts from './Pages/CMS/About us/Abouts';
import Destination from './Pages/CMS/Destination/Destination';
import Contact from './Pages/CMS/Contact/Contact';
import Footer from './Pages/Layouts/Footer/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abouts' element={<Abouts />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
