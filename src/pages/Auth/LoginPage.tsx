import React, { useState } from 'react';
import '../../styles/pages/Auth/LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../utils/auth';


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      console.error(err.message);
      alert("Login failed");
    }
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
              placeholder="password"
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
           New to Asoma? <Link to="/register" className="register-link">Register here</Link>
        </p>
      </div>
    </div>
  );
}
