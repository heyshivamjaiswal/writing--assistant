import { motion } from 'framer-motion';

import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';

export default function Showcase() {
  return (
    <SectionWrapper className="py-32 bg-[#111111]">
      <div className="space-y-8 flex flex-col items-center">
        {/* Heading */}
        <div className="max-w-3xl flex flex-col items-center justify-center">
          <p className="text-sm text-[#D97B3A] mb-5">Product showcase</p>

          <SectionHeading>
            Writing tools that feel calm instead of overwhelming.
          </SectionHeading>

          <p className="text-[#8A8070] text-lg leading-8 mt-6">
            Everything designed to help you focus on ideas — not formatting,
            tabs, or endless prompts.
          </p>
        </div>

        {/* CENTER STAGE */}
        <div className=" px-10 py-14 lg:px-14 lg:py-16 overflow-hidden">
          {/* soft glow */}
          <div className=" bg-[radial-gradient(circle_at_top,rgba(217,123,58,0.06),transparent_45%)]" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="overflow-hidden p-0 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
                {/* LEFT */}
                <div className="p-10 border-r border-[#2E2E2E] bg-[#1C1C1C]">
                  {/* dots */}
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>

                  {/* content */}
                  <div className="space-y-8">
                    <div>
                      <p className="text-sm text-[#8A8070] mb-4">Blog Draft</p>

                      <h3 className="font-['Fraunces'] text-[2.9rem] leading-tight text-[#E8DCC8] max-w-2xl">
                        Why creative people procrastinate more than everyone
                        else
                      </h3>
                    </div>

                    <div className="space-y-6 text-[#B7AA96] leading-9 text-[17px]">
                      <p>
                        Most people think procrastination is laziness. But for
                        creative work, it's usually fear disguised as delay.
                      </p>

                      <p>
                        The more emotionally important the work feels, the
                        harder it becomes to start.
                      </p>

                      <p>
                        Quillr helps bridge that gap — turning rough unfinished
                        thoughts into something workable.
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="bg-[#181818] p-8 lg:p-10 space-y-8">
                  <div>
                    <p className="text-sm text-[#8A8070] mb-3">Tone</p>

                    <div className="bg-[#222222] border border-[#2E2E2E] rounded-2xl px-4 py-3 text-[#E8DCC8]">
                      Thoughtful
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-[#8A8070] mb-3">Audience</p>

                    <div className="bg-[#222222] border border-[#2E2E2E] rounded-2xl px-4 py-3 text-[#E8DCC8]">
                      Creators & founders
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-[#8A8070] mb-3">Length</p>

                    <div className="bg-[#222222] border border-[#2E2E2E] rounded-2xl px-4 py-3 text-[#E8DCC8]">
                      1200 words
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#2E2E2E] pt-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[#8A8070] text-sm">
                          Readability
                        </span>

                        <span className="text-[#E8DCC8] text-sm">92%</span>
                      </div>

                      <div className="w-full h-2 rounded-full bg-[#222222] overflow-hidden">
                        <div className="w-[92%] h-full bg-[#D97B3A]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
