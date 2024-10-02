// src/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || password === '') {
      setError('Tên và mật khẩu không được để trống');
      return;
    }

    console.log('Đăng nhập thành công với tên:', name);
    setError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Nhập tên"
            />
          </div>
          <div className="form-group">
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Nhập mật khẩu"
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="forgot-password">
            <a href="/forgot-password">Quên mật khẩu?</a>
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
        <div className="register">
          <p>Chưa có tài khoản? <Link to="/register">Đăng ký</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
