import React, { useEffect } from 'react'
import '../../styles/pomodoro/TimerDisplay.css'

type TimerDisplayProps = {
    timeLeft: number
    setTimeLeft: React.Dispatch<React.SetStateAction<number>>
    isRunning: boolean
    onComplete: () => void
}

export default function TimerDisplay({ timeLeft, setTimeLeft, isRunning, onComplete }: TimerDisplayProps) {
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
    }, [isRunning])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
    <div className={`timer ${isRunning ? 'timer-running' : 'timer-paused'}`}>
        <span>{String(minutes).padStart(2, '0')}</span>
        <span>{String(seconds).padStart(2, '0')}</span>
    </div>
    )
}