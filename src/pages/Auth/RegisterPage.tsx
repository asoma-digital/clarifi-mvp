import { useState } from 'react';
import '../../styles/pages/Auth/RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../utils/auth';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirm') as HTMLInputElement).value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await register(email, password, name); // ⬅️ Now includes name as displayName
      navigate('/dashboard');
    } catch (err: any) {
      console.error(err.message);
      alert(`Registration failed: ${err.message}`);
    }
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

        <p className="login-redirect">
          Already have an account? <Link to="/login" className="login-link">Login <span className="highlight">here</span></Link>
        </p>
      </div>
    </div>
  );
}