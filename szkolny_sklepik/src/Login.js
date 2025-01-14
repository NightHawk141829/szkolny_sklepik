import React, { useState } from 'react';
import Register from './Register';

const Login = ({ handleLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  return (
    <div>
      {isRegistering ? (
        <Register setIsRegistering={setIsRegistering} />
      ) : (
        <div className="login">
          <h2>Logowanie</h2>
          <input type="text" name="login" placeholder="Login" className="login-input"/> 
          <br/> 
          <input type="password" name="password" placeholder="Hasło" className="login-input"/> 
          <br/>
          <button onClick={handleLogin} className="login-button">Zaloguj</button>
          <br/>
          <button onClick={handleRegisterClick} className="login-button">Zarejestruj się</button>
        </div>
      )}
    </div>
  );
};

export default Login;
