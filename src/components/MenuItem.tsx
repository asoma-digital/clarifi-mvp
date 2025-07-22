import '../styles/global.css'
import type { MenuItemProps } from '../types/menuItem'

const MenuItem = ({
  menuItemNameComponent: MenuItemName,
  shortcutComponent: Shortcut,
  icon,
  menuItemNameString,
  keyName,
  mode,
  onClick
}: MenuItemProps) => {
  return (
    <div className="menu-item" onClick={onClick}>
      <MenuItemName icon={icon} menuItemNameString={menuItemNameString} mode={mode} />
      <Shortcut keyName={keyName} mode={mode} />
    </div>
  )
}

export default MenuItem