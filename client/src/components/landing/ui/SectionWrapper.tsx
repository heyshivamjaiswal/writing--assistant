import Container from './Container';

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function SectionWrapper({
  children,
  className = '',
  id,
}: Props) {
  return (
    <section id={id} className={`py-15 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
