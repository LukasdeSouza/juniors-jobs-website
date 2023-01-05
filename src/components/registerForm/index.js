import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../input/index';
import { GoogleLogin } from '@leecheuk/react-google-login';
import GoogleButton from '../googleButton/index';
import Checkbox from '../checkbox/index';
import Button from '../button/index';
import { observer } from 'mobx-react-lite';
import RootStoreContext from '../../store/rootStore';
import UserController from '../../controller/userController';
import './style.css';

const RegisterForm = observer(() => {
  const navigate = useNavigate();
  const { userStore } = useContext(RootStoreContext);
  const [isValid, setIsValid] = useState(false);
  const controller = new UserController(userStore);

  const handleChange = ({ target: { name, value } }) => {
    userStore.setState(name, value);
    validateInputs();
  }

  const chooseType = ({target: { checked }}) => {
    if(checked) {
      userStore.setState('type', 'company');
    } else {
      userStore.setState('type', 'person');
    }
  }

  const validateInputs = () => {
    const emptyField = userStore.state.name.length > 0;
    const emailRegex = /[\w\-._]+@[\w\-._]+\.\w{2,10}/;
    const minLength = userStore.state.password.length >= 8;
    const comparePassword = userStore.state.password === userStore.state.confirmpassword;
    const status = emptyField && emailRegex.test(userStore.state.email) && minLength && comparePassword;
    setIsValid(status);
  }

  const responseGoogle = ({ profileObj: { googleId, name, email, imageUrl } }) => {
    userStore.setState('imageUrl', imageUrl);
    userStore.setState('token', googleId);
    userStore.setState('name', name);
    userStore.setState('email', email);
  };


  const saveUser = () => {
    if (isValid) {
      const newUser = {
        name: userStore.state.name,
        email: userStore.state.email,
        password: userStore.state.password,
        confirmpassword: userStore.state.confirmpassword,
        type: userStore.state.type,
        cnpj: userStore.state.cnpj,
      };
      controller.postNewUser(newUser);
      navigate('/jobs');
    } else {
      alert('Preencha todos os campos corretamente')
    }
  };

  return (
    <form className="form-container">
      <h3 className="mb-5 title-h3"> Crie sua conta </h3>
      <div className="google-container">
        <GoogleLogin
          clientId="842128105172-82qtuinhishq32q8nhrrbsqu0v301a24.apps.googleusercontent.com"
          render={(renderProps) => (
            <GoogleButton onClick={renderProps.onClick} />
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <span className="google-container-text">OU</span>
      </div>
      <div className="input-container">
        <Input type="text" placeHolder="Nome" name="name" handleChange={handleChange}/>
        <Input type="email" placeHolder="Email" name="email" handleChange={handleChange}/>
        <Input type="password" placeHolder="Senha" name="password" handleChange={handleChange}/>
        <Input type="password" placeHolder="Confirme sua senha" name="confirmpassword" handleChange={handleChange}/>
      </div>
      <div className="button-container">
        <Checkbox text="Sou empresa" id="choose-user" handleChange={chooseType} />
        <Button text="Próximo" handleClick={saveUser}/>
      </div>
    </form>
  );
}
)

export default RegisterForm;
