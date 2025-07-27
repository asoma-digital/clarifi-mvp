import '../styles/pages/pomodoroStyles.css'
import { FocusChip, LongBreakChip, ShortBreakChip } from '../components/pomodoro/ModeChips'
import type { Color } from "../utils/buttonStyle"
import type { PomodoroMode } from '../types/mode'

export const modeConfig = {
    focus: {
        Chip: FocusChip,
        color: 'red' as Color,
    },
    shortBreak: {
        Chip: ShortBreakChip,
        color: 'blue' as Color,
    },
    longBreak: {
        Chip: LongBreakChip,
        color: 'green' as Color,
    },
} satisfies Record<PomodoroMode, { Chip: React.ComponentType; color: Color }>

type PomodoroConfig = {
  focus: number
  shortBreak: number
  longBreak: number
  cyclesUntilLongBreak: number
  cyclesUntilComplete: number
  autoResume: boolean
}

const defaultConfig: PomodoroConfig = {
  focus: 25,
  shortBreak: 5,
  longBreak: 15,
  cyclesUntilLongBreak: 4,
  cyclesUntilComplete: 2,
  autoResume: false,
}

type PomodoroContextType = {
  mode: PomodoroMode
  timeLeft: number
  isRunning: boolean
  toggleRunning: () => void
  reset: () => void
  setConfig: (config: Partial<PomodoroConfig>) => void
  config: PomodoroConfig
}

