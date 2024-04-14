import React, { useState } from 'react';
import axios from 'axios';
import styles from './css/LoginForm.module.css'; // Import CSS module

function LoginForm({ onClose, onR }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: email,
        password: password,
      });

      // Lưu token vào localStorage
      localStorage.setItem('token', response.data.token);

      // Xử lý kết quả đăng nhập thành công
      setMessage('Đăng nhập thành công!');
      // Đóng form sau khi đăng nhập thành công
      setTimeout(() => {
        onClose();
        window.location.href = '/';
      }, 1000);
    } catch (error) {
      if (error.response) { 
        // Xử lý lỗi từ server
        setMessage('Tài Khoản Hoặc Mật Khẩu Không Chính Xác.');
      } else {
        // Xử lý lỗi không có phản hồi từ server
        setMessage('Đã xảy ra lỗi. Vui lòng thử lại sau.');
      }
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div onClick={onClose} style={{ display: "block", float: "right", width: "25px", height: "25px", paddingLeft: "1px", paddingBottom: "10px", backgroundColor: "red", borderRadius: "5px", marginRight: "-15px", marginTop: "-15px" }}>X</div>
        <div className='' style={{ margin: "10px" }}>
          <h2>Đăng Nhập</h2>
          <form onSubmit={handleSubmit} className='p-1'>
            <div className='pd d-flex flex-column align-items-start'>
              <label style={{}}>Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label style={{}} className='mt-1'>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='p-2 d-flex flex-column'>
              <button type="submit" className="btn btn-primary btn-block">Đăng Nhập</button>
              Hoặc
              <a href='#' onClick={onR}>Đăng Ký Mới</a>
            </div>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;