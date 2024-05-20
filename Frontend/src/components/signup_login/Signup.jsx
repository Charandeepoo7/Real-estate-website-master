import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    createPassword: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();


    const result = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await result.json();
    console.warn(data);

    // if(data){
    //   navigate('/')
    // }
  };

  const inputStyle = {
    borderColor: 'black',
    borderWidth: '1px',
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '12px',
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <div>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1>Create a new account</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="createPassword">Create Password</label>
            <input
              type="password"
              name="createPassword"
              id="createPassword"
              value={formData.createPassword}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <button
            type="submit"
            style={{ padding: '10px', width: '100%', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Sign Up
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>
            Already have an account?{' '}
            <a href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
