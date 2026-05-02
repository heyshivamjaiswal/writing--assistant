import type { ButtonProps } from '../../types';

export default function Button({
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyle =
    'px-2 py-2 rounded font-semibold cursor-pointer transition duration-200';
  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
