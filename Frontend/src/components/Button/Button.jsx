// src/components/Button/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ label, variant = 'primary', onClick }) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
