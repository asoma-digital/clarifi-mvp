import { useEffect, useState } from 'react'
import '../../styles/pomodoro/TimerDisplay.css'
import type { PomodoroMode } from '../../types/mode'
import { usePomodoroSettings } from '../../context/PomodoroSettingsContext'

type TimerDisplayProps = {
    isRunning: boolean
    onComplete: () => void
    mode: PomodoroMode
}

export default function TimerDisplay({isRunning, onComplete, mode }: TimerDisplayProps) {
    //   Destructure values and setters from context
    const {
        focusLength,
        shortBreakLength,
        longBreakLength,
        pomodorosUntilLongBreak,
        numberOfSets,
    } = usePomodoroSettings();

    const getInitialTime = () => {
        switch (mode) {
        case 'focus':
            return focusLength * 60
        case 'shortBreak':
            return shortBreakLength * 60
        case 'longBreak':
            return longBreakLength * 60
        }
    }
    
    const [timeLeft, setTimeLeft] = useState(getInitialTime())

    useEffect(() => {
        // Restart timer if settings change
        setTimeLeft(getInitialTime())
    }, [focusLength, shortBreakLength, longBreakLength, mode])

    useEffect(() => {
        if (!isRunning) return

        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval)
                    onComplete()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning, onComplete])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
    <div className={`timer ${isRunning ? 'timer-running' : 'timer-paused'}`}>
        <span>{String(minutes).padStart(2, '0')}</span>
        <span>{String(seconds).padStart(2, '0')}</span>
    </div>
    )
}