import { createContext, useContext, useRef, useState } from 'react';
import { usePomodoroSettings } from './PomodoroSettingsContext';
import type { PomodoroMode } from '../types/mode';
import type { ReactNode } from 'react';

type PomodoroContextType = {
    handleComplete: () => void;
    // unlockSound: () => void;
}

const PomodoroContext = createContext<PomodoroContextType | undefined>(undefined);

export const PomodoroProvider = ({ children }: { children: ReactNode }) => {
    const {
        pomodorosUntilLongBreak,
        numberOfSets,
    } = usePomodoroSettings()

    const [pomodorosLeft, setPomodorosLeft] = useState(pomodorosUntilLongBreak - 1);
    const [setsLeft, setSetsLeft] = useState(numberOfSets - 1);
    const [mode, setMode] = useState<PomodoroMode>('focus');
    const [isRunning, setIsRunning] = useState(false);

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
                setTimeout(() => setIsRunning(true), 1000)
            } else {
                setIsRunning(false)
                alert("🎉 All pomodoro sets complete!")
                setMode('focus')
                setPomodorosLeft(pomodorosUntilLongBreak - 1)
                setSetsLeft(numberOfSets - 1)
            }
        } else {
            setMode('focus')
            setTimeout(() => setIsRunning(true), 1000)
        }
    }

    // const audioRef = useRef<HTMLAudioElement | null>(null);

    // const unlockSound = () => {
    //     if (!audioRef.current) {
    //         audioRef.current = new Audio('/sounds/unlock.mp3');
    //     }
    //     audioRef.current.play()
    //     .then(() => {
    //         if (audioRef.current) {
    //             audioRef.current.pause();
    //             audioRef.current.currentTime = 0;
    //         }
    //     }).catch(err => console.error('Audio playback failed:', err));
    // };

    // const handleComplete = () => {

    //     // if (audioRef.current) {
    //     //     audioRef.current.play().catch(err => console.error('Audio playback failed:', err));
    //     // }

    //     setIsRunning(false);

    //     if (mode === 'focus') {
    //         if (pomodorosLeft > 0) {
    //             setPomodorosLeft(p => p - 1);
    //             setMode('shortBreak');
    //             setTimeout(() => setIsRunning(true), 1000);
    //         } else if (setsLeft > 0) {
    //             setSetsLeft(s => s - 1);
    //             setPomodorosLeft(pomodorosUntilLongBreak - 1);
    //             setMode('longBreak');
    //             setTimeout(() => setIsRunning(true), 1000);
    //         } else {
    //             alert("🎉 All pomodoro sets complete!");
    //             setMode('focus');
    //             setPomodorosLeft(pomodorosUntilLongBreak - 1);
    //             setSetsLeft(numberOfSets - 1);
    //         }
    //     } else {
    //         setMode('focus');
    //         setTimeout(() => setIsRunning(true), 1000);
    //     }
    // };

    return (
        <PomodoroContext.Provider value={{ handleComplete/*, unlockSound*/ }}>
            {children}
        </PomodoroContext.Provider>
    );

};

export const usePomodoro = () => {
    const context = useContext(PomodoroContext);
    if (!context) {
        throw new Error('usePomodoro must be used within a PomodoroProvider');
    }
    return context;
};
