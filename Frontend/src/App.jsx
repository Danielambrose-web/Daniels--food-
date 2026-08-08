// src/App.jsx
import React from 'react';
import './index.css';
// import Button from './components/Button/Button';
// import FoodCard from './components/FoodCard/FoodCard';
import Navbar from './components/Navbar/Navbar';

function App() {


  return (
    <div className="App">
      <Navbar/>
      {/* <FoodCard/>
      <Button label="Secondary Button" variant="secondary" onClick={() => alert('Secondary button clicked!')} /> */}
    </div>
  );
}

export default App;
