import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Browse from './components/Browse';
import Combo from './components/Combo';
import Beverages from './components/Beverages';
import About from './components/About';
import Contact from './components/Contact';
import GetinTouch from './components/GetinTouch';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className = "container">
        
        <About />
        <Browse />
        <Combo />
        <Beverages />
        <Contact />
        <GetinTouch />
      </div>
      
    </>
  );
}

export default App;
