import '../styles/pages/pomodoroStyles.css'
import type { PomodoroMode } from '../types/mode'
import { useState } from 'react'
import TimerDisplay from '../components/pomodoro/TimerDisplay'
import ControlButtons from '../components/pomodoro/ControlButtons'
import { modeConfig } from '../context/PomodoroContext'
import OptionsModal from '../components/OptionsModal'
import SettingItemNumber from '../components/SettingItemNumber'

export default function PomodoroPage() {
    const [mode/*, setMode*/] = useState<PomodoroMode>('shortBreak')
    const [isRunning, setIsRunning] = useState(false)
    const [timeLeft, setTimeLeft] = useState(25 * 60)
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)

    const toggleRunning = () => {
        setIsRunning(prev => !prev)
    }

    const { Chip, color } = modeConfig[mode]

    return (
        <div className={`pomodoro-wrapper bg-${mode}`}>
            <div className="pomodoro-content">
                <Chip />

                <TimerDisplay
                    timeLeft={timeLeft}
                    setTimeLeft={setTimeLeft}
                    isRunning={isRunning}
                    onComplete={() => console.log('Focus session complete')}
                />

                <ControlButtons 
                    color={color} 
                    isRunning={isRunning} 
                    toggleRunning={toggleRunning}
                    onOptionsClick={() => setIsOptionsOpen(true)}
                />

                {isOptionsOpen && (
                    <OptionsModal mode={mode} onClose={() => setIsOptionsOpen(false)} />
                )}

                <SettingItemNumber settingItemName="Focus Length" mode={mode}/>
            </div>
        </div>
    )
}