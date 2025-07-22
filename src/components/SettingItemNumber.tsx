import type { SettingItemSwitchProps } from "../types/settingItemSwitch"
import '../styles/global.css'
import { modeColorMap } from '../utils/pomodoroUtils'
import NumberInput from "./NumberInput"

export default function SettingItemNumber({settingItemName, mode}: SettingItemSwitchProps ){
    const color = `var(--${modeColorMap[mode]}-alpha-950)`

    return(
        <div className="setting-item-number" style={{ color }}>
            <span >{settingItemName}</span>
            <NumberInput mode={mode}/>
        </div>
    )
}