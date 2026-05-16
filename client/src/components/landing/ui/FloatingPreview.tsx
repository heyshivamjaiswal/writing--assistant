import { useState } from 'react';
import Card from '../../../components/landing/ui/Card';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { previews } from '../../../data/mockData';

export default function FloatingPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPreview = previews[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === previews.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
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
        <Card className="p-10 rounded-[28px] shadow-2xl min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="flex items-center gap-2 text-sm text-[#8A8070]">
                <span className="text-[#D97B3A]">✦</span>

                <span>{currentPreview.type}</span>
              </div>

              {/* Meta */}
              <div className="space-y-5">
                <div className="grid grid-cols-[100px_1fr] items-center text-sm">
                  <span className="text-[#8A8070]">Topic</span>

                  <span className="text-[#E8DCC8] text-right">
                    {currentPreview.title}
                  </span>
                </div>

                <div className="grid grid-cols-[100px_1fr] items-center text-sm">
                  <span className="text-[#8A8070]">Tone</span>

                  <span className="text-[#E8DCC8] text-right">
                    {currentPreview.tone}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#2E2E2E] pt-8">
                <p className="whitespace-pre-line text-[#E8DCC8] text-[17px] leading-[1.95]">
                  {currentPreview.content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </Card>
      </motion.div>
    </div>
  );
}
