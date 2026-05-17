import { useNavigate } from 'react-router';
import PrimaryButton from '../ui/Button';
import Container from '../ui/Container';
import GhostButton from '../ui/GhostButton';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#141414]/80 border-b border-[#2E2E2E]">
      <Container>
        <nav className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="font-['Fraunces'] text-[2rem] text-[#E8DCC8]">
            Quillr
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10 text-sm text-[#8A8070]">
            <a
              href="#features"
              className="hover:text-[#E8DCC8] transition-colors"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="hover:text-[#E8DCC8] transition-colors"
            >
              Pricing
            </a>

            <a href="#demo" className="hover:text-[#E8DCC8] transition-colors">
              Demo
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/auth')}>
              <GhostButton>Sign in</GhostButton>
            </button>
            <button onClick={() => navigate('/auth')}>
              <PrimaryButton>Start writing →</PrimaryButton>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
