import React, { useState } from 'react';
import '../../styles/pages/Auth/LoginPage.css';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-fullscreen">
      <div className="login-card">
        <div className="icon">
          <img src="/asoma.jpg" alt="Asoma logo" />
        </div>

        <h1 className="login-title">Sign In</h1>
        <p className="login-subtitle">Sign in to your Asoma account</p>

        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@asoma.com" required />

          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="●●●●●●●"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className="toggle-password">👁️</span>
          </div>

          <button type="submit" className="login-btn">Sign In</button>
        </form>

        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>

        {/* <div className="divider">or sign in with</div>

        <div className="social-buttons">
          <img src="/google-icon.svg" alt="Google" />
          <img src="/facebook-icon.svg" alt="Facebook" />
          <img src="/apple-icon.svg" alt="Apple" />
        </div> */}

        <p className="register-redirect">
          New to Asoma? <a href="/register">Register <span className="highlight">here</span></a>
        </p>
      </div>
    </div>
  );
}
