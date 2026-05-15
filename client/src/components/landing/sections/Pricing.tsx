// Pricing.tsx

import { motion } from 'framer-motion';

import Card from '../ui/Card';
import PrimaryButton from '../ui/Button';
import GhostButton from '../ui/GhostButton';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for trying Quillr and generating occasional content.',
    features: [
      '10 AI generations/day',
      'Blog + email support',
      'Basic tone controls',
      'Community access',
    ],
    highlighted: false,
  },

  {
    name: 'Pro',
    price: '$24',
    description:
      'Built for creators, marketers, and people who write constantly.',
    features: [
      'Unlimited generations',
      'Advanced tone matching',
      'Long-form content',
      'Priority AI speed',
    ],
    highlighted: true,
  },

  {
    name: 'Team',
    price: '$79',
    description:
      'Collaboration, shared workspaces, and team-level productivity.',
    features: [
      'Shared workspace',
      'Team collaboration',
      'Admin controls',
      'Priority support',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="py-32 bg-[#141414]">
      <div className="space-y-20">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-[#D97B3A] mb-5">Simple pricing</p>

          <SectionHeading className="leading-[1.1]">
            Pay for the writing.
            <br />
            Not the complexity.
          </SectionHeading>

          <p className="text-[#8A8070] text-lg leading-8 mt-6">
            Start free, upgrade when the blank page starts losing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
            >
              <Card
                className={`
                  h-full
                  p-8
                  rounded-[30px]
                  transition-all
                  duration-500
                  relative
                  ${
                    plan.highlighted
                      ? 'border-[#D97B3A]/50 bg-[#1D1A18]'
                      : 'border-[#2E2E2E] bg-[#1A1A1A]'
                  }
                `}
              >
                {/* Recommended Badge */}
                {plan.highlighted && (
                  <div
                    className="
                      absolute
                      top-5
                      right-5
                      text-xs
                      px-3
                      py-1
                      rounded-full
                      bg-[#D97B3A]/10
                      border
                      border-[#D97B3A]/20
                      text-[#D97B3A]
                    "
                  >
                    Most popular
                  </div>
                )}

                <div className="flex flex-col h-full">
                  {/* Top */}
                  <div>
                    <h3 className="font-['Fraunces'] text-3xl text-[#E8DCC8]">
                      {plan.name}
                    </h3>

                    <div className="flex items-end gap-2 mt-6">
                      <span className="font-['Fraunces'] text-6xl leading-none text-[#E8DCC8]">
                        {plan.price}
                      </span>

                      <span className="text-[#8A8070] mb-2">/month</span>
                    </div>

                    <p className="text-[#8A8070] leading-8 mt-6">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mt-10">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D97B3A]" />

                        <p className="text-[#D8CCB8]">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-10">
                    {plan.highlighted ? (
                      <PrimaryButton className="w-full">
                        Get started
                      </PrimaryButton>
                    ) : (
                      <GhostButton className="w-full">Start free</GhostButton>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center text-sm text-[#6F675C]">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </SectionWrapper>
  );
}
