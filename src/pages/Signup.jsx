import React, { useState } from 'react';
import Login from '../components/signup/Login';
import Register from '../components/signup/Register';

function Signup() {
  const [flag, setFlag] = useState(false);

  return (
    <div>
      {!flag ? <Register /> : <Login />}

      {!flag ? (
        <p className="login-text" onClick={() => setFlag(!flag)}>
          Already Have An Account? login
        </p>
      ) : (
        <p className="signup-text" onClick={() => setFlag(!flag)}>
          Don't Have An Account? signup
        </p>
      )}
    </div>
  );
}

export default Signup;
