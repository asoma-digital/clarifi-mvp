import '../styles/pages/pomodoroStyles.css'
import type { PomodoroMode } from '../types/mode'
import { useState } from 'react'
import TimerDisplay from '../components/pomodoro/TimerDisplay'
import ControlButtons from '../components/pomodoro/ControlButtons'
import { modeConfig } from '../context/PomodoroSettingsContext'
import OptionsModal from '../components/OptionsModal'
import SettingsModal from '../components/SettingsModal'
import { useNavigate } from 'react-router-dom'

export default function PomodoroPage() {
    const navigate = useNavigate();
    const [mode, setMode] = useState<PomodoroMode>('focus')
    const [isRunning, setIsRunning] = useState(false)
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)


    const toggleRunning = () => {
        setIsRunning(prev => !prev)
    }

    const { Chip, color } = modeConfig[mode]

    function handleOnClose() {
         setIsSettingsOpen(false)
    }

    return (
        <div className={`pomodoro-wrapper bg-${mode}`}>
            <div className="pomodoro-content">
                <button className='back-button' onClick={() => navigate('/dashboard')}> ← Back to Dashboard </button>

                <Chip />

                        <TimerDisplay 
          isRunning={isRunning} 
          setIsRunning={setIsRunning} 
          mode={mode} 
          setMode={setMode} 
        />

                <ControlButtons 
                    color={color} 
                    isRunning={isRunning} 
                    toggleRunning={toggleRunning}
                    onOptionsClick={() => setIsOptionsOpen(true)}
                />

                {isOptionsOpen && (
                    <OptionsModal 
                        mode={mode} 
                        onClose={() => setIsOptionsOpen(false)} 
                        onPreferencesClick={() => {
                            setIsOptionsOpen(false)
                            setIsSettingsOpen(true)
                        }}
                    />
                )}

                {isSettingsOpen && (
                    <SettingsModal mode={mode} onClose={handleOnClose} isRunning={isRunning}/>
                )}

            </div>
        </div>
    )
}