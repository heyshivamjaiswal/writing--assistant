import type { ReactNode } from 'react';

type props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = '' }: props) {
  return (
    <div
      className={`
            max-w-7xl mx-auto px-6 lg:px-10 ${className}
            `}
    >
      {children}
    </div>
  );
}
