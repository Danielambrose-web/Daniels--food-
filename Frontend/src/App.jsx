// src/App.jsx
import React from 'react';
import './index.css';
import Button from './components/Button/Button';
import FoodCard from './components/FoodCard/FoodCard';

function App() {


  return (
    <div className="App">
      <FoodCard/>
       <Button label="Secondary Button" variant="secondary" onClick={() => alert('Secondary button clicked!')} />
    </div>
  );
}

export default App;
