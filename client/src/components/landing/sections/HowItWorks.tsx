// HowItWorks.tsx

import { motion } from 'framer-motion';

import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';

const steps = [
  {
    number: '01',
    title: 'Describe what you need',
    description:
      'Start with a rough idea, messy thought, or simple prompt. Quillr handles the structure.',
  },

  {
    number: '02',
    title: 'Choose your tone & format',
    description:
      'Blogs, emails, ad copy, or social posts — tailor the writing to match your voice.',
  },

  {
    number: '03',
    title: 'Generate polished writing',
    description:
      'Get clean, readable content instantly. Edit, refine, and ship without the blank page struggle.',
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper className="py-32 bg-[#141414]">
      <div className="space-y-20">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm text-[#D97B3A] mb-5">How it works</p>

          <SectionHeading className="leading-[1.1]">
            Writing with Quillr feels
            <br />
            surprisingly simple.
          </SectionHeading>
        </div>

        {/* Steps */}
        <div className="relative grid lg:grid-cols-3 gap-8">
          {/* Connecting line */}
          <div
            className="
              hidden
              lg:block
              absolute
              top-8
              left-0
              right-0
              h-px
              bg-[#2A2A2A]
            "
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Number Dot */}
              <div
                className="
                  hidden
                  lg:flex
                  absolute
                  -top-3
                  left-8
                  w-6
                  h-6
                  rounded-full
                  bg-[#D97B3A]
                  z-10
                "
              />

              <Card
                className="
                  h-full
                  p-8
                  bg-[#1A1A1A]
                  rounded-[30px]
                  hover:border-[#D97B3A]/40
                  transition-all
                  duration-500
                "
              >
                <div className="space-y-8">
                  {/* Number */}
                  <div className="text-[#D97B3A] text-sm tracking-[0.2em]">
                    {step.number}
                  </div>

                  {/* Text */}
                  <div className="space-y-4">
                    <h3 className="font-['Fraunces'] text-3xl leading-tight text-[#E8DCC8]">
                      {step.title}
                    </h3>

                    <p className="text-[#8A8070] text-[17px] leading-8">
                      {step.description}
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
