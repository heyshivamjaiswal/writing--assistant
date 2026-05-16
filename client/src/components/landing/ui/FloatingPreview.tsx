// FloatingPreview.tsx

import { motion } from 'framer-motion';

type Props = {
  type: string;
  title: string;
  tone: string;
  content: string;
};

export default function FloatingPreview({ type, title, tone, content }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      className="relative"
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[#D97B3A]/10
          blur-3xl
          scale-90
          rounded-full
        "
      />

      {/* Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-[#2E2E2E]
          bg-[#1B1B1B]/95
          backdrop-blur-xl
          p-10
          shadow-[0_30px_80px_rgba(0,0,0,0.55)]
        "
      >
        {/* Top Glow Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D97B3A]/50 to-transparent" />

        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center gap-2 text-sm text-[#8A8070]">
            <span className="text-[#D97B3A]">✦</span>

            <span>{type}</span>
          </div>

          {/* Meta */}
          <div className="space-y-5">
            <div className="grid grid-cols-[90px_1fr] items-center text-sm">
              <span className="text-[#8A8070]">Topic</span>

              <span className="text-[#E8DCC8] text-right">{title}</span>
            </div>

            <div className="grid grid-cols-[90px_1fr] items-center text-sm">
              <span className="text-[#8A8070]">Tone</span>

              <span className="text-[#E8DCC8] text-right">{tone}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#2A2A2A] pt-8">
            <p className="text-[#E8DCC8] text-[18px] leading-[2]">
              {content}

              {/* Cursor */}
              <motion.span
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="ml-1 inline-block text-[#D97B3A]"
              >
                |
              </motion.span>
            </p>
          </div>
        </div>

        {/* Noise Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-soft-light
            bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
          "
        />
      </div>
    </motion.div>
  );
}
