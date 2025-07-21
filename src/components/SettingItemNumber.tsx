import type { SettingItemSwitchProps } from "../types/settingItemSwitch"
import '../styles/global.css'
import { modeColorMap } from '../utils/pomodoroUtils'
import NumberInput from "./NumberInput"

export default function SettingItemNumber({settingItemName, mode}: SettingItemSwitchProps ){
    const color = `var(--${modeColorMap[mode]}-900)`

    return(
        <div className="setting-item-switch">
            <span style={{ color }}>{settingItemName}</span>
            <NumberInput mode={mode}/>
        </div>
    )
}