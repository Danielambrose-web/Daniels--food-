// src/App.jsx
import React from 'react';
import './index.css';
// import Button from './components/Button/Button';
// import FoodCard from './components/FoodCard/FoodCard';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import menuData from './data/menuData';

function App() {


  return (
    <div className="App">
      <Navbar/>
      {/* <FoodCard/>
      <Button label="Secondary Button" variant="secondary" onClick={() => alert('Secondary button clicked!')} /> */}

      <Footer/>
      <img src={menuData.} alt="" />
    </div>
  );
}

export default App;
