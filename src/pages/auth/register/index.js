import React from 'react';
import Input from '../../../components/input/index';
import GoogleButton from '../../../components/googleButton';
import '../../../styles/utility-classes.css';

const RegisterUser = () => {

    return(
        <div>
            <GoogleButton />
            <Input 
              type='text'
              placeHolder='Nome'              
            />
        </div>
    )
}

export default RegisterUser;