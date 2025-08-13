import React, { useState } from 'react';
import '../../styles/pages/Auth/LoginPage.css';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform login logic here
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      {/* Icon */}
      <div className="icon">
        <img src="/key-icon.svg" alt="Sign In Icon" />
      </div>

      <h1 className="login-title">Sign In</h1>

      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="farhanudin1990@gmail.com"
        />

        <label htmlFor="password">Password</label>
        <div className="password-field">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="●●●●●●●"
          />
          <span onClick={() => setShowPassword(!showPassword)} className="toggle-password">
            👁️
          </span>
        </div>

        <button type="submit" className="login-btn" onClick={handleLogin}>Login</button>
      </form>

      <a href="/forgot-password" className="forgot-password">Forgot Password</a>

      <p className="or-text">or Login with</p>

      <div className="social-buttons">
        <img src="/google-icon.svg" alt="Google" />
        <img src="/facebook-icon.svg" alt="Facebook" />
        <img src="/apple-icon.svg" alt="Apple" />
      </div>

      <p className="register-redirect">
        New user AuthFlow? <a href="/register"><span className="highlight">Register here.</span></a>
      </p>
    </div>
  );
}