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

  const focusData = [
    { day: 'S', minutes: 20 },
    { day: 'M', minutes: 35 },
    { day: 'T', minutes: 18 },
    { day: 'W', minutes: 30 },
    { day: 'T', minutes: 60 },
    { day: 'F', minutes: 90 },
    { day: 'S', minutes: 45 },
  ];

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

      {/* Focus Time Graph */}
      <div className="focus-graph">
        <h2>Focus Time</h2>
        <div className="bar-graph">
          {focusData.map((data, i) => (
            <div key={i} className="bar-wrapper">
              <div
                className="bar"
                style={{ height: `${data.minutes}px` }}
              ></div>
              <span className="bar-label">{data.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pomodoro Section */}
      <div className="pomodoro-tile">
        <h2>Start a Pomodoro Timer</h2>
        <p>Stay focused and productive with timed work sessions</p>
        <button className="start-button" onClick={() => navigate('/pomodoro')}>
          Start Timer
        </button>
      </div>
             
    </div>
  );
}