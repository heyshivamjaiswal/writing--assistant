import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = '' }: Props) {
  return (
    <div
      className={`
        w-full
        max-w-[1240px]
        mx-auto
        px-6
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}
