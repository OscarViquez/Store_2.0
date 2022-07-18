import './assets/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Home } from './routes/home/home_component';
import { About } from './routes/about/about_component';
import { Products } from './routes/products/products_components';
import { Contact } from './routes/contact/contact_component'
import { Navbar } from './routes/navbar/navbar_component';


function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
