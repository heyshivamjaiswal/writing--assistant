import { motion } from 'framer-motion';

import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';

const features = [
  {
    title: 'Instant generation',
    description:
      'From a short prompt to a full polished draft. No staring at a blank page.',
  },

  {
    title: 'Tailored to your voice',
    description:
      'Set your tone, audience, and style. Quillr writes to match — not override.',
  },

  {
    title: 'Everything in one place',
    description:
      'Every document saved, searchable, ready to reuse or build on.',
  },
];

export default function Features() {
  return (
    <SectionWrapper className="py-28 bg-[#1B1A1A]">
      <div className="flex flex-col items-center text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <SectionHeading className="max-w-4xl mx-auto leading-[1.1]">
            Writing that sounds like you. Not like everyone else using AI.
          </SectionHeading>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mt-16 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <Card
                className="
                  p-7
                  text-left
                  min-h-[190px]
                  hover:border-[#D97B3A]/40
                  transition-all
                  duration-500
                "
              >
                <div className="space-y-6">
                  {/* Accent */}
                  <div className="w-12 h-[2px] bg-[#D97B3A]" />

                  {/* Text */}
                  <div className="space-y-4">
                    <h3 className="font-['Fraunces'] text-[1.8rem] leading-tight text-[#E8DCC8]">
                      {feature.title}
                    </h3>

                    <p className="text-[#8A8070] text-[17px] leading-8">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
