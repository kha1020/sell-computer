// src/ForgotPassword.js
import React, { useState } from 'react';
import './forgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setError('Email không được để trống');
      return;
    }

    // Simulate sending reset password link
    setMessage('Một liên kết đặt lại mật khẩu đã được gửi đến email của bạn.');
    setError('');
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Quên mật khẩu</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Nhập email của bạn"
            />
          </div>
          {error && <p className="error">{error}</p>}
          {message && <p className="success">{message}</p>}
          <button type="submit">Gửi liên kết đặt lại mật khẩu</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
