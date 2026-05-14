import type { ReactNode } from 'react';
import Container from './Container';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({ children, className = '' }: Props) {
  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
