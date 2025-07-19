import { useEffect, useState } from 'react'
import '../styles/pages/pomodoroStyles.css'

type Mode = 'focus' | 'short_break' | 'long_break'

const config = {
  focus: 25 * 60,
  short_break: 5 * 60,
  long_break: 15 * 60,
  cyclesUntilLongBreak: 4,
}

export default function PomodoroPage() {
  const [mode, setMode] = useState<Mode>('focus')
  const [timeLeft, setTimeLeft] = useState(config.focus)
  const [isRunning, setIsRunning] = useState(false)
  const [cycles, setCycles] = useState(0)

  useEffect(() => {
    if (!isRunning) return
    if (timeLeft <= 0) {
      handleTransition()
      return
    }
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  const handleTransition = () => {
    if (mode === 'focus') {
      const nextCycles = cycles + 1
      setCycles(nextCycles)
      const nextMode = nextCycles % config.cyclesUntilLongBreak === 0 ? 'long_break' : 'short_break'
      setMode(nextMode)
      setTimeLeft(config[nextMode])
    } else {
      setMode('focus')
      setTimeLeft(config.focus)
    }
    setIsRunning(false)
  }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const bgColor = {
    focus: '#ffeeee',
    short_break: '#ecfff2',
    long_break: '#eef6ff',
  }[mode]

  const buttonColor = {
    focus: '#ff7676',
    short_break: '#7de8a7',
    long_break: '#92c7ff',
  }[mode]

  return (
    <div className="pomodoro-page" style={{ backgroundColor: bgColor }}>
      <div className="mode-chip">{mode === 'focus' ? '🧠 Focus' : mode === 'short_break' ? '☕ Short Break' : '☕ Long Break'}</div>
      <div className="timer-text">{formatTime(timeLeft)}</div>
      <div className="controls">
        <button className="circle-btn">...</button>
        <button
          className="circle-btn"
          style={{ backgroundColor: buttonColor, color: 'white' }}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? '⏸️' : '▶️'}
        </button>
        <button className="circle-btn" onClick={handleTransition}>⏭️</button>
      </div>
    </div>
  )
}