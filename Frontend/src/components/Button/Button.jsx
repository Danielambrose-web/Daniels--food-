// src/components/Button/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ label, variant = 'primary', onClick, className = '', ...props }) => {
  return (
    <button
      className={`button ${variant} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
