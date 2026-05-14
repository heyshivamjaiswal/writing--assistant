import PrimaryButton from '../ui/Button';
import Card from '../ui/Card';
import GhostButton from '../ui/GhostButton';
import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <SectionWrapper className="pt-2">
      <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[78vh]">
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
          <div className="space-y-5">
            <h1 className="font-['Fraunces'] text-5xl lg:text-7xl leading-tight tracking-tight text-[#E8DCC8] max-w-[620px]">
              For people who have things to say but no time to say them well
            </h1>

            <p className="text-[#8A8070] text-lg leading-8 max-w-xl">
              Quillr writes the blogs, emails, and copy you keep putting off.
              You bring the ideas. We handle the words.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <PrimaryButton>Start writing free →</PrimaryButton>

            <GhostButton>See how it works</GhostButton>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="relative"
        >
          <Card className="p-10 bg-[#222222] border border-[#2E2E2E] rounded-3xl">
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center gap-1 text-sm text-[#8A8070]">
                <span className="text-[#D97B3A]">✦</span>
                <span>Email</span>
              </div>

              {/* Meta */}
              <div className="space-y-5">
                <div className="grid grid-cols-[90px_1fr] items-center text-sm">
                  <span className="text-[#8A8070]">Topic</span>

                  <span className="text-[#E8DCC8] text-right">
                    Why I deserve a raise
                  </span>
                </div>

                <div className="grid grid-cols-[90px_1fr] items-center text-sm">
                  <span className="text-[#8A8070]">Tone</span>

                  <span className="text-[#E8DCC8] text-right">
                    Confident but not annoying
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#2E2E2E] pt-8">
                <p className="text-[#E8DCC8] text-[17px] leading-[2.1]">
                  Hi Sarah,
                  <br />
                  <br />
                  I've been thinking about how to bring this up without it being
                  weird, and I figured — just say it directly.
                  <br />
                  <br />
                  Over the past year I've shipped four features, reduced churn
                  by 12%, and somehow kept the team sane through two reorgs.
                </p>
              </div>
            </div>
            {/* <div className="absolute inset-0 bg-[#D97B3A]/10 blur-3xl rounded-full" /> */}
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
