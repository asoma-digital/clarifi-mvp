import IconButton from "../IconButton"
import DotsThreeIcon from "../icons/DotsThreeIcon"
import PlayIcon from "../icons/PlayIcon"
import FastForwardIcon from "../icons/FastForwardIcon"
import '../../styles/components/IconButton.css'
import { buttonStyle } from "../../utils/buttonStyle"
import type { Color } from "../../utils/buttonStyle"

type ControlButtonsProps = {
  color: Color
}

const ControlButtons = ({ color }: ControlButtonsProps) => {
  return (
    <div className="control-buttons">
        <IconButton
            icon={DotsThreeIcon}
            onClick={() => console.log('Statistics clicked')}
            className={buttonStyle('secondary', color, 'medium')}
        />
        <IconButton
            icon={PlayIcon}
            onClick={() => console.log('Settings clicked')}
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