import React from "react";
import './App.css'
import {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from '../src/components/nav';

const Home= lazy(()=> import('./components/Home'))
const Dog= lazy(()=> import('./components/Dog'))
const Contact= lazy(()=> import('./components/Contact'))

function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Nav />
      <Suspense fallback={<p>CARGANDO....</p>}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Dog" element={<Dog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App
