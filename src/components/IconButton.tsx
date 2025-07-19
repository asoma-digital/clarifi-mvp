import type { IconProps } from '../types/icon'

type IconButtonProps = {
    icon: React.FC<IconProps>
    iconColor?: string
    size?: number
    onClick?: () => void
    className?: string
}

const IconButton = ({
    icon: Icon,
    iconColor = 'currentColor',
    size = 24,
    onClick,
    className = '',
}: IconButtonProps) => {
    return (
        <button onClick={onClick} className={`flex items-center justify-center ${className}`}>
            <Icon size={size} color={iconColor} />
        </button>
    )
}

export default IconButton