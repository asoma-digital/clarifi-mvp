import { useState } from "react"
import "../styles/components/numberInput.css"
import { modeColorMap } from '../utils/pomodoroUtils'
import type { PomodoroMode } from "../types/mode"


type NumberInputProps = {
    label?: string
    defaultValue?: number
    onChange?: (value: number) => void
    mode: PomodoroMode
}

export default function NumberInput({ 
    label,
    defaultValue = 25,
    onChange,
    mode
}: NumberInputProps) {
    const color = `var(--${modeColorMap[mode]}-alpha-900)`

    const [value, setValue] = useState(defaultValue)

    const updateValue = (newVal: number) => {
        setValue(newVal)
        if (onChange) onChange(newVal)
    }

    return (
    <div className="number-input-container" style={{ color }}>
        {label && <span className="number-label" >{label}</span>}
        <div className="number-input-box">
            <span className="number-value">{value}</span>
        </div>
        <div className="number-controls">
            <span onClick={() => updateValue(value + 1)} className="number-btn-up">▲</span>
            <span onClick={() => updateValue(value - 1)} className="number-btn-down">▼</span>
        </div>
    </div>
    )
}