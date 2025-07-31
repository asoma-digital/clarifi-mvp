import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/global.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PomodoroPage from './pages/PomodoroPage.tsx'
import { PomodoroSettingsProvider } from './context/PomodoroSettingsContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/clarifi-mvp">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pomodoro" element={<PomodoroSettingsProvider><PomodoroPage /></PomodoroSettingsProvider>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
