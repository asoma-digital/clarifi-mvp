import type { PomodoroMode } from '../types/mode'

export const modeColorMap: Record<PomodoroMode, string> = {
  focus: 'red',
  shortBreak: 'blue',
  longBreak: 'green',
}