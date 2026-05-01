import type { ButtonProps } from '../../types';

export default function Button({
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyle = 'px-4 py-2 rounded font-semibold  transition duration-200';
  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
