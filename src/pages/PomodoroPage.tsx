import '../styles/pages/pomodoroStyles.css'
import '../styles/components/IconButton.css'
import IconButton from '../components/IconButton'
import PlayIcon from '../components/icons/PlayIcon'

export default function PomodoroPage() {
    return (
        <>
            <h1>Pomodoro Timer</h1>
            <IconButton
                icon={PlayIcon}
                onClick={() => console.log('Pomodoro started')}
                className="small primary-red"
            />
            {/* // focus mode tag */}
            {/* // countdown timer */}
            {/* // buttons */}
            {/* // progress bar */}
        </>
    )
}