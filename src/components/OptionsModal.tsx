// import type { PomodoroMode } from "../types/mode"
// import Menu from "./Menu"

// type OptionsModalProps = {
//   mode: PomodoroMode
//   onClose: () => void
// }

// export default function OptionsModal({ mode, onClose }: OptionsModalProps) {
//   return (
//     <div className="options-modal">
//       <button onClick={onClose}>Close</button>
//       {/* your modal content here */}
//       <Menu
//         mode={mode}
//       />
//     </div>
//   )
// }

import '../styles/components/optionsModal.css'
import Menu from './Menu'
import type { PomodoroMode } from '../types/mode'
import { modeColorMap } from '../utils/pomodoroUtils'


type OptionsModalProps = {
  mode: PomodoroMode
  onClose: () => void
}

export default function OptionsModal({ mode, onClose }: OptionsModalProps) {

    const color = `var(--${modeColorMap[mode]}-alpha-50)`

  return (
    <div className="modal-overlay" style={{ backgroundColor: color}} onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
            <h1>Options</h1>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <Menu mode={mode} />
      </div>
    </div>
  )
}