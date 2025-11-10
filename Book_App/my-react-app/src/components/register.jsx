import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div style={{textAlign:"center", marginTop:"80px"}}>
      <h2>Register</h2>
      <input type="text" placeholder="Name" /><br /><br />
      <input type="text" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button>Register</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;
