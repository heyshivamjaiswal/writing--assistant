import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className = '' }: Props) {
  return (
    <h2
      className={`
        font-['Fraunces']
        text-[#E8DCC8]
        text-4xl
        lg:text-5xl
        font-semibold
        leading-tight
        tracking-tight
        ${className}
      `}
    >
      {children}
    </h2>
  );
}
