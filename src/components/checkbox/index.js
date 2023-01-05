import React from 'react';
import './style.css';

const Checkbox = ({ text, id, handleChange }) => {
  return (
    <div className="checkbox-container">
      <input 
      className="input-checkbox"
      id={id}
      type="checkbox" 
      onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default Checkbox;
