export type Variant = 'primary' | 'secondary' | 'ghost';
export type Color = 'blue' | 'green' | 'red';
export type Size = 'small' | 'medium' | 'large';

export function buttonStyle(variant: Variant, color: Color, size: Size): string {
    return `${variant}-${color} ${size}`;
}