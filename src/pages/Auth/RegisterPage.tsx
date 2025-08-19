import { useState } from 'react';
import '../../styles/pages/Auth/RegisterPage.css';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Registration logic
    navigate('/dashboard');
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <div className="icon">
          <img src="/asoma.jpg" alt="Register Icon" />
        </div>

        <h1 className="register-title">Create an Account</h1>
        <p className="register-subtitle">Sign up to get started with Asoma</p>

        <form className="register-form" onSubmit={handleRegister}>
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="e.g. Jane Doe" required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Jane.Doe@asoma.com" required />

          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="password"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className="toggle-password">
              👁️
            </span>
          </div>

          <label htmlFor="confirm">Confirm Password</label>
          <div className="password-field">
            <input
              id="confirm"
              type={showConfirm ? 'text' : 'password'}
              placeholder="confirm password"
              required
            />
            <span onClick={() => setShowConfirm(!showConfirm)} className="toggle-password">
              👁️
            </span>
          </div>

          <button type="submit" className="register-btn">Sign Up</button>
        </form>

        {/* <div className="divider">
          <span>or register with</span>
        </div>

        <div className="social-buttons">
          <img src="/google-icon.svg" alt="Google" />
          <img src="/facebook-icon.svg" alt="Facebook" />
          <img src="/apple-icon.svg" alt="Apple" />
        </div> */}

        <p className="login-redirect">
          Already have an account? <a href="/login">Login <span className="highlight">here</span></a>
        </p>
      </div>
    </div>
  );
}
