import { useEffect, useState } from 'react'
import '../../styles/pomodoro/TimerDisplay.css'

type TimerDisplayProps = {
    duration: number
    isRunning: boolean
    onComplete?: () => void
}

const TimerDisplay = ({ duration, isRunning, onComplete }: TimerDisplayProps) => {
    const [timeLeft, setTimeLeft] = useState(duration)

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {setTimeLeft((prev) => prev - 1)}, 1000)
        } else if (timeLeft === 0 && interval) {
            clearInterval(interval)
            onComplete?.()
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isRunning, timeLeft])

    useEffect(() => {
        if (!isRunning) {
            setTimeLeft(duration)
        }
    }, [duration, isRunning])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    const formatTime = (time: number) => time.toString().padStart(2, '0')

    return (
    <div className={`timer ${isRunning ? 'timer-running' : 'timer-paused'}`}>
        <span>{formatTime(minutes)}</span>
        <span>{formatTime(seconds)}</span>
    </div>
    )
}

export default TimerDisplay