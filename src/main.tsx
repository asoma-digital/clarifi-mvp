import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/global.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PomodoroPage from './pages/PomodoroPage.tsx'
import { PomodoroSettingsProvider } from './context/PomodoroSettingsContext';
import RegisterScreen from './pages/Auth/RegisterPage.tsx'
import LoginPage from './pages/Auth/LoginPage.tsx'
import DashboardPage from './pages/Auth/DashboardPage.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pomodoro" element={<PomodoroSettingsProvider><PomodoroPage /></PomodoroSettingsProvider>} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
