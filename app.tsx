import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import Header from './src/components/layout/Header';
import Footer from './src/components/layout/Footer';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-2xl">Halaman Appointment</h1></div>} />
            <Route path="/services" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-2xl">Halaman Services</h1></div>} />
            <Route path="/doctors" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-2xl">Halaman Doctors</h1></div>} />
            <Route path="/facilities" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-2xl">Halaman Facilities</h1></div>} />
            <Route path="/testimonials" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-2xl">Halaman Testimonials</h1></div>} />
            <Route path="/about" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-2xl">Halaman About</h1></div>} />
            <Route path="/contact" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-2xl">Halaman Contact</h1></div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App; 