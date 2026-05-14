import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';

const tabs = ['Blog post', 'Email', 'Ad copy', 'Social post'];

const content = {
  'Blog post': {
    title: 'The meeting that could have been an email',
    subtitle: '(and 11 other things killing your productivity)',
    body: 'Most meetings exist because someone somewhere was too nervous to just send a message...',
  },

  Email: {
    title: 'Quick update about next week',
    subtitle: 'Subject: Project timeline changes',
    body: "Hey Sarah — just wanted to give you a quick heads up before tomorrow's call. We've shifted a few deadlines to make room for testing...",
  },

  'Ad copy': {
    title: 'Write faster. Sound smarter.',
    subtitle: 'AI writing that actually sounds human.',
    body: 'Generate blogs, launch copy, emails, and social posts in seconds — without sounding robotic.',
  },

  'Social post': {
    title: 'Hot take:',
    subtitle: 'Most people don’t hate writing.',
    body: 'They hate staring at a blank page wondering how to begin.',
  },
};

export default function Formats() {
  const [activeTab, setActiveTab] = useState<keyof typeof content>('Blog post');

  return (
    <SectionWrapper className="py-32 bg-[#151515]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <SectionHeading className="leading-tight">
            One tool. Every format.
          </SectionHeading>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-10 border-b border-[#2A2A2A] mb-10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof content)}
              className="
                relative
                pb-5
                text-[15px]
                transition-colors
                whitespace-nowrap
              "
            >
              <span
                className={
                  activeTab === tab ? 'text-[#E8DCC8]' : 'text-[#8A8070]'
                }
              >
                {tab}
              </span>

              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-[#D97B3A]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            <Card className="p-8 lg:p-10 min-h-[260px] bg-[#1D1D1D] rounded-[28px]">
              <div className="space-y-8">
                {/* BLOG */}
                {activeTab === 'Blog post' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-['Fraunces'] text-4xl leading-tight text-[#E8DCC8]">
                        {content[activeTab].title}
                      </h3>

                      <p className="text-[#8A8070] mt-4 text-lg">
                        {content[activeTab].subtitle}
                      </p>
                    </div>

                    <p className="text-[#B7AA96] text-xl leading-10 max-w-3xl">
                      {content[activeTab].body}
                    </p>
                  </div>
                )}

                {/* EMAIL */}
                {activeTab === 'Email' && (
                  <div className="space-y-8">
                    <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-5">
                      <div>
                        <p className="text-sm text-[#8A8070]">Draft email</p>

                        <h3 className="text-[#E8DCC8] text-xl mt-2">
                          {content[activeTab].subtitle}
                        </h3>
                      </div>

                      <div className="text-[#8A8070] text-sm">To: Sarah</div>
                    </div>

                    <p className="text-[#D8CCB8] text-[18px] leading-9 max-w-3xl">
                      {content[activeTab].body}
                    </p>
                  </div>
                )}

                {/* AD COPY */}
                {activeTab === 'Ad copy' && (
                  <div className="space-y-10">
                    <div className="inline-flex px-4 py-2 rounded-full bg-[#D97B3A]/10 border border-[#D97B3A]/20 text-[#D97B3A] text-sm">
                      Sponsored
                    </div>

                    <div className="space-y-5">
                      <h3 className="font-['Fraunces'] text-5xl leading-tight text-[#E8DCC8] max-w-2xl">
                        {content[activeTab].title}
                      </h3>

                      <p className="text-[#B7AA96] text-xl leading-9 max-w-3xl">
                        {content[activeTab].body}
                      </p>
                    </div>
                  </div>
                )}

                {/* SOCIAL */}
                {activeTab === 'Social post' && (
                  <div className="max-w-2xl rounded-3xl border border-[#2A2A2A] bg-[#181818] p-7">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#2A2A2A]" />

                      <div>
                        <h4 className="text-[#E8DCC8] font-medium">Quillr</h4>

                        <p className="text-sm text-[#8A8070]">@quillrapp</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <h3 className="text-[#E8DCC8] text-2xl leading-relaxed">
                        {content[activeTab].title}
                      </h3>

                      <p className="text-[#B7AA96] text-[18px] leading-9">
                        {content[activeTab].body}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
