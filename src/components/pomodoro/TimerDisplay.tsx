import { useEffect, useState } from 'react'
import '../../styles/pomodoro/TimerDisplay.css'
import type { PomodoroMode } from '../../types/mode'
import { usePomodoroSettings } from '../../context/PomodoroSettingsContext'

type TimerDisplayProps = {
    isRunning: boolean
    mode: PomodoroMode
    setIsRunning: (val: boolean) => void
    setMode: (val: PomodoroMode) => void
}

export default function TimerDisplay({ isRunning, mode, setIsRunning, setMode }: TimerDisplayProps) {

    const {
        focusLength,
        shortBreakLength,
        longBreakLength,
        pomodorosUntilLongBreak,
        numberOfSets,
    } = usePomodoroSettings()

    const [timeLeft, setTimeLeft] = useState(() => getInitialTime(mode))
    const [pomodorosLeft, setPomodorosLeft] = useState(pomodorosUntilLongBreak - 1)
    const [setsLeft, setSetsLeft] = useState(numberOfSets - 1)

    function getInitialTime(currentMode: PomodoroMode) {
        switch (currentMode) {
            case 'focus':
                return focusLength * 60
            case 'shortBreak':
                return shortBreakLength * 60
            case 'longBreak':
                return longBreakLength * 60
        }
    }

    useEffect(() => {
        setTimeLeft(getInitialTime(mode))
    }, [focusLength, shortBreakLength, longBreakLength, mode])

    useEffect(() => {
        if (!isRunning) return

        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval)
                    handleComplete()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning])

    const handleComplete = () => {
        setIsRunning(false)
        if (mode === 'focus') {
            if (pomodorosLeft > 0) {
                setPomodorosLeft(p => p - 1)
                setMode('shortBreak')
                setTimeout(() => setIsRunning(true), 1000)
            } else if (setsLeft > 0) {
                setSetsLeft(s => s - 1)
                setPomodorosLeft(pomodorosUntilLongBreak - 1)
                setMode('longBreak')
                setIsRunning(true)
            } else {
                setIsRunning(false)
                alert("🎉 All pomodoro sets complete!")
                setMode('focus')
                setPomodorosLeft(pomodorosUntilLongBreak - 1)
                setSetsLeft(numberOfSets - 1)
            }
        } else {
            setMode('focus')
        }
    }

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
        <div className={`timer ${isRunning ? 'timer-running' : 'timer-paused'}`}>
            <span>{String(minutes).padStart(2, '0')}</span>
            <span>{String(seconds).padStart(2, '0')}</span>
        </div>
    )
}






// import { useEffect, useState } from 'react'
// import '../../styles/pomodoro/TimerDisplay.css'
// import type { PomodoroMode } from '../../types/mode'
// import { usePomodoroSettings } from '../../context/PomodoroSettingsContext'

// type TimerDisplayProps = {
//     isRunning: boolean
//     mode: PomodoroMode
// }

// export default function TimerDisplay({isRunning, mode }: TimerDisplayProps) {

//     //   Destructure values and setters from context
//     const {
//         focusLength,
//         shortBreakLength,
//         longBreakLength,
//         pomodorosUntilLongBreak,
//         numberOfSets,
//     } = usePomodoroSettings();

//     const getInitialTime = () => {
//         switch (mode) {
//         case 'focus':
//             return focusLength * 60
//         case 'shortBreak':
//             return shortBreakLength * 60
//         case 'longBreak':
//             return longBreakLength * 60
//         }
//     }
    
//     const [timeLeft, setTimeLeft] = useState(getInitialTime())
//     const pomodorosLeft = pomodorosUntilLongBreak-1
//     const setsLeft = numberOfSets-1

//     useEffect(() => {
//         // Restart timer if settings change
//         setTimeLeft(getInitialTime())
//     }, [focusLength, shortBreakLength, longBreakLength, mode])

//     useEffect(() => {
//         if (!isRunning) return

//         const interval = setInterval(() => {
//             setTimeLeft(prev => {
//                 if (prev <= 1) {
//                     clearInterval(interval)
//                     onComplete()
//                     return 0
//                 }
//                 return prev - 1
//             })
//         }, 1000)

//         return () => clearInterval(interval)
//     }, [isRunning, onComplete])

//     const minutes = Math.floor(timeLeft / 60)
//     const seconds = timeLeft % 60

//     const onComplete = () => {
//         if (mode === 'focus') {
//             if (pomodorosLeft > 0) {
//             setPomodorosLeft(p => p - 1);
//             setMode('shortBreak');
//             } else if (setsLeft > 0) {
//             setSetsLeft(s => s - 1);
//             setPomodorosLeft(pomodorosUntilLongBreak - 1); // Reset pomodoros
//             setMode('longBreak');
//             } else {
//             setIsRunning(false);
//             alert("🎉 All pomodoro sets complete!");
//             setMode('focus');
//             setPomodorosLeft(pomodorosUntilLongBreak - 1);
//             setSetsLeft(numberOfSets - 1);
//             }
//         } else {
//             setMode('focus');
//         }
//         };

//     return (
//     <div className={`timer ${isRunning ? 'timer-running' : 'timer-paused'}`}>
//         <span>{String(minutes).padStart(2, '0')}</span>
//         <span>{String(seconds).padStart(2, '0')}</span>
//     </div>
//     )
// }