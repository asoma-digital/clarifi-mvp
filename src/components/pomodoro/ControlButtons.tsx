import IconButton from "../IconButton"
import DotsThreeIcon from "../icons/DotsThreeIcon"
import PlayIcon from "../icons/PlayIcon"
import FastForwardIcon from "../icons/FastForwardIcon"
import PauseIcon from "../icons/PauseIcon"
import '../../styles/components/IconButton.css'
import { buttonStyle } from "../../utils/buttonStyle"
import type { Color } from "../../utils/buttonStyle"

type ControlButtonsProps = {
  color: Color
  isRunning: boolean
  toggleRunning: () => void
  onOptionsClick: () => void
}

const ControlButtons = ({ 
  color, 
  isRunning, 
  toggleRunning,
  onOptionsClick 
}: ControlButtonsProps) => {
  return (
    <div className="control-buttons">
        <IconButton
            icon={DotsThreeIcon}
            onClick={onOptionsClick}
            className={buttonStyle('secondary', color, 'medium')}
        />
        <IconButton
            icon={isRunning ? PauseIcon : PlayIcon}
            onClick={toggleRunning}
            className={buttonStyle('primary', color, 'large')}
        />
        <IconButton
            icon={FastForwardIcon}
            onClick={() => console.log('Help clicked')}
            className={buttonStyle('secondary', color, 'medium')}
        />
    </div>
  )
}
export default ControlButtons