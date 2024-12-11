import React, { useState } from 'react';
import Button from './Button';
import InputComponent from './InputComponent';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('handleSignIp');
  };

  return (
    <>
      <div className="input-div">
        <h1>SignIn</h1>
        <InputComponent
          state={email}
          setState={setEmail}
          placeholder="Email"
          type="text"
          required={true}
        />
        <InputComponent
          state={password}
          setState={setPassword}
          placeholder="Password"
          type="password"
          required={true}
        />
        <Button text={'SignIn'} onClick={handleSignIn} />
      </div>
    </>
  );
}

export default Login;
