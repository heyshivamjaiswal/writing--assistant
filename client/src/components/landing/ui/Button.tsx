import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  children,
  className = '',
  ...props
}: Props) {
  return (
    <button
      className={`
       bg-[#D97B3A]
        text-[#E8DCC8]
        px-6
        py-3
        rounded-full
        text-sm
        font-medium
        transition-all
        duration-300
        hover:bg-[#E8924F]
        hover:scale-[1.02]
        active:scale-[0.98]
        cursor-pointer
        ${className}
        `}
      {...props}
    >
      {children}
    </button>
  );
}
