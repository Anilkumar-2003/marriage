import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full bg-primary text-white font-medium
        hover:bg-primary-dark transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;