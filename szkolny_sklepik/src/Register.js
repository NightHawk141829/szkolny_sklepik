import React, { useState } from 'react';

const Register = ({ setIsRegistering }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Hasła się nie zgadzają!');
      return;
    }
    // Tu możesz dodać logikę rejestracji użytkownika
    console.log('Rejestracja zakończona sukcesem:', { username, email, password });
  };

  return (
    <div className="register">
      <h2>Rejestracja</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nazwa użytkownika"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="register-input"
          required
        />
        <br/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
          required
        />
        <br/>
        <input
          type="password"
          name="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
          required
        />
        <br/>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Potwierdź hasło"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="register-input"
          required
        />
        <br/>
        <button type="submit" className="register-button">Zarejestruj się</button>
        <button onClick={() => setIsRegistering(false)} className="register-button">Powrót do logowania</button>
      </form>
    </div>
  );
};

export default Register;
