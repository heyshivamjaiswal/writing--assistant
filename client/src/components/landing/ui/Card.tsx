import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: Props) {
  return (
    <div
      className={`
        bg-[#222222]
        border
        border-[#2E2E2E]
        rounded-2xl 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
