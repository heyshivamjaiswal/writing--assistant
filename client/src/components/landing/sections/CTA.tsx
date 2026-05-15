// CTA.tsx

import { motion } from 'framer-motion';

import PrimaryButton from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';

export default function CTA() {
  return (
    <SectionWrapper className="py-36 bg-[#111111]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-[#2A2A2A]
          bg-[#181818]
          px-8
          py-24
          lg:px-20
          text-center
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,123,58,0.10),transparent_45%)]" />

        <div className="relative max-w-4xl mx-auto">
          {/* Small Label */}
          <p className="text-sm text-[#D97B3A] mb-6">Start writing today</p>

          {/* Heading */}
          <SectionHeading className="leading-[1.05]">
            Stop staring at the blank page.
            <br />
            Start shipping your ideas.
          </SectionHeading>

          {/* Description */}
          <p className="text-[#8A8070] text-lg leading-8 mt-8 max-w-2xl mx-auto">
            Blogs, emails, launch copy, social posts — Quillr helps you write
            faster without losing your voice.
          </p>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <PrimaryButton className="px-8 py-4 text-base">
              Start writing free →
            </PrimaryButton>
          </div>

          {/* Tiny trust text */}
          <p className="text-sm text-[#6F675C] mt-6">No credit card required</p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
