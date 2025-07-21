// src/components/Menu.tsx
import '../styles/global.css'
import MenuItem from './MenuItem'
import MenuItemName from './MenuItemName'
import Shortcut from './Shortcut'

import GearSixIcon from './icons/GearSixIcon'
import ChartBarIcon from './icons/ChartBarIcon'
import KeyReturnIcon from './icons/KeyReturnIcon'

import type { PomodoroMode } from '../types/mode'

type MenuProps = {
  mode: PomodoroMode
}

const Menu = ({ mode }: MenuProps) => {
  return (
    <div className="menu">
      <MenuItem
        menuItemNameComponent={MenuItemName}
        shortcutComponent={Shortcut}
        icon={ChartBarIcon}
        menuItemNameString="Statistics"
        keyName="S"
        mode={mode}
      />
      <MenuItem
        menuItemNameComponent={MenuItemName}
        shortcutComponent={Shortcut}
        icon={GearSixIcon}
        menuItemNameString="Preferences"
        keyName="P"
        mode={mode}
      />
      <MenuItem
        menuItemNameComponent={MenuItemName}
        shortcutComponent={Shortcut}
        icon={KeyReturnIcon}
        menuItemNameString="Shortcuts"
        keyName="K"
        mode={mode}
      />
    </div>
  )
}

export default Menu