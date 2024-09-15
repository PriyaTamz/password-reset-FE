import React, { useEffect } from 'react';
import authServices from '../services/authServices';
import { useNavigate } from 'react-router-dom';
import './Logout.css';  

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    authServices.logout()
      .then((response) => {
        alert(response.data.message);
        setTimeout(() => {
          navigate('/login');
        }, 500);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  }, [navigate]);

  return (
    <div className="logout-message">
      Logging Out...
      <div className="spinner"></div>
    </div>
  );
}

export default Logout;
