import '../styles/pages/pomodoroStyles.css'
import '../styles/components/IconButton.css'
import '../styles/components/ModeChip.css'
import BrainIcon from '../components/icons/BrainIcon'
import Chip from '../components/ModeChip'
import ControlButtons from '../components/pomodoro/ControlButtons'
import TimerDisplay from '../components/pomodoro/TimerDisplay'

export default function PomodoroPage() {
    return (
        <>
            <Chip
                icon={<BrainIcon size={20} className="icon" />}
                text="Focus"
                className="chip-red"
            />
            <TimerDisplay
                duration={25 * 60}
                isRunning={false}
                onComplete={() => console.log('Focus session complete')}
            />
            <ControlButtons />
            {/* // focus mode tag */}
            {/* // countdown timer */}
            {/* // buttons */}
            {/* // progress bar */}
        </>
    )
}