import './App.css'
import { useNavigate } from 'react-router-dom';


export default function App() {
  const navigate = useNavigate();

  return (
    <div className="start-container">
      <button className="back-button" aria-label="Go Back">←</button>

      <h1 className="start-title">Welcome to <span className="brand-name">asoma</span></h1>
      <p className="start-subtitle">Please login to your account or create a new account to continue</p>

      <div className="start-buttons">
        <button className="login-button" onClick={() => navigate('/login')}>Login</button>
        <button className="create-button" onClick={() => navigate('/register')}>Create Account</button>
      </div>

    </div>
  );
}