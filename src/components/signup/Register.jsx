import React, { useState } from 'react';
import Button from './Button';
import InputComponent from './InputComponent';

function Register() {
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('handleSignUp');
  };
  return (
    <>
      <div className="input-div">
        <h1>Signup</h1>
        <InputComponent
          state={fullName}
          setState={setFullname}
          placeholder="Full Name"
          type="text"
          required={true}
        />
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
        <InputComponent
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder="Confirm Password"
          type="password"
          required={true}
        />
        <Button text={'Signup'} onClick={handleSignUp} />
      </div>
    </>
  );
}

export default Register;
