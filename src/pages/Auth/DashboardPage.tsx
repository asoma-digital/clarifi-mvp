import { useNavigate } from 'react-router-dom';
import '../../styles/pages/Auth/DashboardPage.css';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { logout } from '../../utils/auth';

export default function DashboardPage() {

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is logged in:', user.email);
    } else {
      console.log('No user logged in');
    }
  });

  return () => unsubscribe();
}, []);

  const navigate = useNavigate();

    const handleLogout = async () => {
    try {
      await logout(navigate); // navigate to '/' after logout
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <div className="dashboard-container">
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <h1 className="dashboard-title">Welcome Back</h1>
      <p className="dashboard-subtitle">Here’s a summary of your activity</p>

      {/* Pomodoro Section */}
      <div className="pomodoro-tile">
        <h2>Start a Pomodoro Timer</h2>
        <p>Stay focused and productive with timed work sessions</p>
        <button className="start-button" onClick={() => navigate('/pomodoro')}>
          Start Timer
        </button>
      </div>

      {/* To-Do List Section */}
      <div className="todo-tile">
        <h2>Go to Your To-Do List</h2>
        <p>Organize your day and keep track of tasks</p>
        <button className="start-button" onClick={() => navigate('/todo')}>
          View To-Do List
        </button>
      </div>
      </div>

  );
}