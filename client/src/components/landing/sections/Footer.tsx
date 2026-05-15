// Footer.tsx

import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#111111]">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Left */}
          <div className="space-y-5">
            {/* Logo */}
            <div className="font-['Fraunces'] text-3xl text-[#E8DCC8]">
              Quillr
            </div>

            {/* Description */}
            <p className="text-[#8A8070] leading-7 max-w-md">
              AI writing tools designed to help you move faster without losing
              your voice.
            </p>

            {/* Copyright */}
            <p className="text-sm text-[#6F675C]">
              © 2026 Quillr. All rights reserved.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-14">
            {/* Product */}
            <div>
              <h4 className="text-[#E8DCC8] mb-5 text-sm font-medium">
                Product
              </h4>

              <div className="space-y-4 text-sm">
                <a
                  href="#"
                  className="block text-[#8A8070] hover:text-[#E8DCC8] transition-colors"
                >
                  Features
                </a>

                <a
                  href="#"
                  className="block text-[#8A8070] hover:text-[#E8DCC8] transition-colors"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="block text-[#8A8070] hover:text-[#E8DCC8] transition-colors"
                >
                  Changelog
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#E8DCC8] mb-5 text-sm font-medium">
                Contact
              </h4>

              <div className="space-y-4 text-sm">
                {/* Replace later */}
                <a
                  href="mailto:yourmail@example.com"
                  className="block text-[#8A8070] hover:text-[#E8DCC8] transition-colors"
                >
                  yourmail@example.com
                </a>

                <a
                  href="#"
                  className="block text-[#8A8070] hover:text-[#E8DCC8] transition-colors"
                >
                  Twitter
                </a>

                <a
                  href="#"
                  className="block text-[#8A8070] hover:text-[#E8DCC8] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Repo */}
            <div>
              <h4 className="text-[#E8DCC8] mb-5 text-sm font-medium">
                Resources
              </h4>

              <div className="space-y-4 text-sm">
                {/* Replace later */}
                <a
                  href="#"
                  className="block text-[#8A8070] hover:text-[#E8DCC8] transition-colors"
                >
                  GitHub Repo
                </a>

                <a
                  href="#"
                  className="block text-[#8A8070] hover:text-[#E8DCC8] transition-colors"
                >
                  Documentation
                </a>

                <a
                  href="#"
                  className="block text-[#8A8070] hover:text-[#E8DCC8] transition-colors"
                >
                  API Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
