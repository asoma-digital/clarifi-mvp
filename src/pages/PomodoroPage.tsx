import '../styles/pages/pomodoroStyles.css'
import type { PomodoroMode } from '../types/mode'
import { useState } from 'react'
import { FocusChip, LongBreakChip, ShortBreakChip } from '../components/pomodoro/ModeChips'
import TimerDisplay from '../components/pomodoro/TimerDisplay'
import ControlButtons from '../components/pomodoro/ControlButtons'


export default function PomodoroPage() {
    const [mode, setMode] = useState<PomodoroMode>('focus')
    const [isRunning, setIsRunning] = useState(false)

    return (
        <div className={`pomodoro-wrapper bg-${mode}`}>
            <div className="pomodoro-content">
            {mode === 'focus' ? (
                <FocusChip/>
            ) : mode === 'shortBreak' ? (
                <ShortBreakChip/>
            ) : (
                <LongBreakChip/>
            )}

            <TimerDisplay
                duration={25 * 60}
                isRunning={isRunning}
                onComplete={() => console.log('Focus session complete')}
            />

            {mode === 'focus' ? (
                <ControlButtons color="red"/>
            ) : mode === 'shortBreak' ? (
                <ControlButtons color="blue"/>
            ) : (
                <ControlButtons color="green"/>
            )}
            </div>
        </div>
    )
}