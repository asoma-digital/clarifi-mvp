import IconButton from "../IconButton"
import DotsThreeIcon from "../icons/DotsThreeIcon"
import PlayIcon from "../icons/PlayIcon"
import FastForwardIcon from "../icons/FastForwardIcon"

const ControlButtons = () => {
  return (
    <div className="control-buttons">
        <IconButton
            icon={DotsThreeIcon}
            onClick={() => console.log('Statistics clicked')}
            className="medium secondary-red"
        />
        <IconButton
            icon={PlayIcon}
            onClick={() => console.log('Settings clicked')}
            className="large primary-red"
        />
        <IconButton
            icon={FastForwardIcon}
            onClick={() => console.log('Help clicked')}
            className="medium secondary-red"
        />
    </div>
  )
}
export default ControlButtons