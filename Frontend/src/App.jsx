// src/App.jsx
import React from 'react';
import './index.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <Button label="Primary Button" variant="primary" onClick={() => alert('Primary button clicked!')} />
      <Button label="Secondary Button" variant="secondary" onClick={() => alert('Secondary button clicked!')} />
    </div>
  );
}

export default App;
