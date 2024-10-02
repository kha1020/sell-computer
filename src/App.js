// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login'; // Trang đăng nhập
import ForgotPassword from './ForgotPassword'; // Trang quên mật khẩu

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Route cho trang đăng nhập */}
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Route cho trang quên mật khẩu */}
      </Routes>
    </Router>
  );
};

export default App;
