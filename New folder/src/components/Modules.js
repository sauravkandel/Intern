import React, { useState } from 'react';
import '../App.css';


function ValidationForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let messages = [];

    if (email === '' || email == null) {
      messages.push('Email Required');
    }

    if (password.length <= 6) {
      messages.push('Password must be longer than 6 characters');
    }

    if (password.length >= 15) {
      messages.push('Password must be less than 15 characters');
    }

    if (password === 'password') {
      messages.push('Password cannot be "password"');
    }

    if (messages.length > 0) {
      setError(messages.join(', '));
    } else {
      setError('');
      // handle form submission here
    }
  };

  return (
    <>
      <div id="error"></div>
      <form id="form" onSubmit={handleSubmit} method="post">
        <h3>Log In</h3>
        <div className="email">
          <label htmlFor="email"></label>
          <input type="text" id="email" name="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} width="20" /><br />
        </div>
        <div className="password">
          <label htmlFor="password"></label>
          <input type="password" id="password" name="password" placeholder="Enter your password"  value={password}
          onChange={(e) => setPassword(e.target.value)} width="20" /><br />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div><br /><br />
        <div>
        {error && <div className="error">{error}</div>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default ValidationForm ;
