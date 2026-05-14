import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function GhostButton({
  children,
  className = '',
  ...props
}: Props) {
  return (
    <button
      className={`
        border
        border-[#2E2E2E]
        text-[#8A8070]
        px-6
        py-3
        rounded-full
        text-sm
        font-medium
        transition-all
        duration-300
        hover:text-[#E8DCC8]
        hover:border-[#D97B3A]
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
