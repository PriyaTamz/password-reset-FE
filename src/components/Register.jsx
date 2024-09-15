import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectName, selectEmail, selectPassword, setName, setEmail, setPassword } from '../features/authentication/registerSlice';
import authServices from '../services/authServices';
import './Register.css';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const handleRegister = (e) => {
    e.preventDefault();
    authServices.register({ name, email, password })
      .then(response => {
        alert(response.data.message);

        dispatch(setName(''));
        dispatch(setEmail(''));
        dispatch(setPassword(''));

        setTimeout(() => {
          navigate('/login');
        }, 500);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
