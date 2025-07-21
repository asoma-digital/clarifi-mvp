export type { PomodoroMode } from '../types/mode'
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