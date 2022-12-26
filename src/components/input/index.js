import React from 'react';
import 'style.css';

const Input = ({ type, placeHolder }) => {
    return (
        <input
        type={type}
        placeholder={placeHolder}
        />
    );
}

export default Input;