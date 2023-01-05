import React from 'react';
import './style.css';
import logoGoogle from '../../assets/icon-google.png';

const GoogleButton = ({ onClick }) => {
  return (
    <button className="pl-3 google-button" onClick={onClick}>
      <img src={logoGoogle} alt="Logo do Google" />
      <span className="google-btn-text">Continuar com Google</span>
    </button>
  );
};

export default GoogleButton;
