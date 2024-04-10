import React, { useState } from 'react';
import axios from 'axios';
import styles from './css/Register.module.css';

function RegistrationPage({ onClose, onL }) {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({}); // State to hold form validation errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/signup', {
        name: fullName, // Sử dụng biến fullName thay vì "fullName"
        email: email, // Sử dụng biến email thay vì "email@email.com"
        password: password, // Sử dụng biến password thay vì "password"
        username: username, // tên đăng nhập
        numberphone: +phone,// Sử dụng chuỗi số cho số điện thoại , ko trung 
        gender: gender,
      });
      setMessage(response.data.message || 'Sign up successful!');
    } catch (error) {
      if (error.response) {
        // Server returned error response
        if (error.response.data.errors) {
          // Validation errors from server
          setErrors(error.response.data.errors);
        } else {
          // Other server errors
          setMessage(error.response.data.message || 'Sign up failed. Please try again.');
        }
      } else {
        // No response from server
        setMessage('An error occurred. Please try again later.');
      }
    }

  };

  return (
    <div className={styles.modal}>
      <div className="container mt-3">
        <div style={{ paddingBottom: "10px" }} className=''>
          <a href='#' onClick={onL} className='btn btn-primary ' style={{}}>Back</a>
          <div onClick={onClose} style={{ display: "block", float: "right", width: "25px", height: "25px", paddingLeft: "8px", paddingBottom: "10px", backgroundColor: "red", borderRadius: "5px"}}>X</div>
        </div>
        <div className={`${styles.content}row justify-content-center`}>
          <div className={`${styles.content}col-md-6 `}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center p-2">Sign Up</h3>
                <div>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="UserName">UserName</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter user name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                      className="form-control"
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className='d-flex flex-column p-3'>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block">Sign Up</button>
                  </div>
                  <p>{message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
