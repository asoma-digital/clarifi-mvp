import { useState } from 'react';
import '../../styles/pages/Auth/RegisterPage.css';
import { useNavigate } from 'react-router-dom';


export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform registration logic here
    navigate('/pomodoro');
  };

  return (
    <div className="register-container">
      <div className="icon">
        <img src="/key-icon.svg" alt="Register Icon" />
      </div>

      <h1 className="register-title">Register</h1>

      <form className="register-form">
        <label htmlFor="name">Name</label>
        <input id="name" placeholder="farha nudin" />

        <label htmlFor="email">Email</label>
        <input id="email" placeholder="farhanudin1990@gmail.com" type="email" />

        <label htmlFor="password">Create Password</label>
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

        <label htmlFor="confirm">Confirm Password</label>
        <div className="password-field">
          <input
            id="confirm"
            type={showConfirm ? 'text' : 'password'}
            placeholder="●●●●●●●"
          />
          <span onClick={() => setShowConfirm(!showConfirm)} className="toggle-password">
            👁️
          </span>
        </div>

        <button type="submit" className="register-btn" onClick={handleRegister}>Register</button>
      </form>

      <p className="or-text">or register with</p>
      <div className="social-buttons">
        <img src="/google-icon.svg" alt="Google" />
        <img src="/facebook-icon.svg" alt="Facebook" />
        <img src="/apple-icon.svg" alt="Apple" />
      </div>

      <p className="login-redirect">
        Already have an account? <a href="/login">Login <span className="highlight">here</span></a>
      </p>
    </div>
  );
}