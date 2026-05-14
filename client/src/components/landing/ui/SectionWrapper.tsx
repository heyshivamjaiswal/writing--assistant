import Container from './Container';

export default function SectionWrapper({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-24 lg:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
