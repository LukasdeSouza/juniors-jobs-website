import React from 'react';
import './style.css';
import logoGoogle from '../../assets/icon-google.png';

const GoogleButton = () => {
    return (
        <button className='pl-5'>
            <img
            src={logoGoogle}
            alt="Logo do Google"
            />
            <span className="default-font">
                Continuar com Google
            </span>
        </button>
    );
}

export default GoogleButton;