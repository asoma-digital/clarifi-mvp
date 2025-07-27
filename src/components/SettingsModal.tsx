// needs number input, swithc input, header, mode

import SettingItemNumber from "./SettingItemNumber";
import SettingItemSwitch from "./SettingItemSwitch";
import type { PomodoroMode } from '../types/mode'
import { modeColorMap } from '../utils/pomodoroUtils'
import '../styles/global.css'
import XIcon from "./icons/XIcon";

type SettingsModalProps = {
    mode: PomodoroMode
    onClose: () => void
}

export default function SettingsModal({ mode, onClose }: SettingsModalProps){
    const color = `var(--${modeColorMap[mode]}-alpha-900)`
    const bgColor = `var(--${modeColorMap[mode]}-alpha-50)`

    return(
        <div className="modal-overlay">
            <div className="settings-modal" style={{backgroundColor: bgColor}}>
                {/* // header */}
                <div className="settings-modal-header" style={{ color }}>
                    <h1>
                        Settings
                    </h1>
                    <button className="settings-modal-header-icon" onClick={onClose}>
                        <XIcon size={18}/>
                    </button>
                </div>
                {/* // Switch - Dark mode */}
                {/* <SettingItemSwitch settingItemName="Dark mode" mode={mode}/> */}
                {/* // Number - Focus length */}
                <SettingItemNumber settingItemName="Focus length" mode={mode}/>
                {/* // Number - Pomodoros until long break */}
                <SettingItemNumber settingItemName="Pomodoros until long break" mode={mode}/>
                {/* // Number - Short break length */}
                <SettingItemNumber settingItemName="Short break length" mode={mode}/>
                {/* // Number - Long break length */}
                <SettingItemNumber settingItemName="Long break length" mode={mode}/>
                {/* // Number - Number of sets */}
                <SettingItemNumber settingItemName="Number of sets" mode={mode}/>
                {/* // Switch - Auto resume timer */}
                <SettingItemSwitch settingItemName="Auto resume timer" mode={mode}/>
                {/* // Switch Sound */}
                <SettingItemSwitch settingItemName="Sound" mode={mode}/>
                {/* // Switch Notifications */}
                <SettingItemSwitch settingItemName="Notifications" mode={mode}/>
            </div>
        </div>
    )
}