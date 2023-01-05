import React from 'react';
import './style.css';

const Select = ({ options, defaultValue }) => {
  return (
    <select className="register-select default-font" value={defaultValue}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
