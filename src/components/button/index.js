import React from 'react';
import './style.css';

const Button = ({ handleButton }) => {
    return (
        <button
        className="btn btn-primary btn-text"
        type="button"
        onClick={ handleButton }
        >
            Próximo
        </button>
    );
}

export default Button;