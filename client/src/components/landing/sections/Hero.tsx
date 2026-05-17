import { motion } from 'framer-motion';

import PrimaryButton from '../ui/Button';
import GhostButton from '../ui/GhostButton';
import SectionWrapper from '../ui/SectionWrapper';
import FloatingPreview from '../ui/FloatingPreview';
import { useNavigate } from 'react-router';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <SectionWrapper className="pt-0">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center min-h-[70vh]">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2E2E2E] bg-[#222222] text-sm text-[#8A8070]">
            <span className="text-[#D97B3A]">✦</span>

            <span>For writers who mean it</span>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h1 className="font-['Fraunces'] text-[4.8rem] lg:text-[5.4rem] leading-[0.95] tracking-[-0.04em] text-[#E8DCC8] max-w-[680px]">
              For people who have things to say but no time to say them well
            </h1>

            <p className="text-[#8A8070] text-[18px] leading-8 max-w-[560px]">
              Quillr writes the blogs, emails, and copy you keep putting off.
              You bring the ideas. We handle the words.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/auth')}>
              <PrimaryButton>Start writing free →</PrimaryButton>
            </button>

            <GhostButton>See how it works</GhostButton>
          </div>
        </motion.div>

        {/* RIGHT */}
        <FloatingPreview />
      </div>
    </SectionWrapper>
  );
}
