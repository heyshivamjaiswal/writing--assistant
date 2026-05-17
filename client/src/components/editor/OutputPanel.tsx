import { FaFileAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

import { useEditorStore } from '../../store/useEditorStore';

export default function OutputPanel() {
  const output = useEditorStore((state) => state.output);
  const isLoading = useEditorStore((state) => state.isLoading);

  return (
    <div
      className="
        h-full 
        w-[800px]
        rounded-[28px]
        border
        border-[#2A2A2A]
        bg-[#181818]
        overflow-hidden
      "
    >
      <div className="h-full overflow-y-auto">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-[#8A8070] text-lg animate-pulse">
              Generating content...
            </p>
          </div>
        ) : output ? (
          <div className="max-w-4xl mx-auto px-14 py-16">
            <article
              className="
                prose
                prose-invert
                max-w-none
                prose-headings:text-[#E8DCC8]
                prose-p:text-[#B7AA96]
                prose-p:leading-8
                prose-strong:text-[#E8DCC8]
              "
            >
              <ReactMarkdown>{output}</ReactMarkdown>
            </article>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center max-w-md space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-[#222222] border border-[#2A2A2A] flex items-center justify-center mx-auto">
                <FaFileAlt className="text-[#8A8070]" size={28} />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-[#E8DCC8]">
                  Ready to generate
                </h3>

                <p className="text-[#8A8070] leading-7">
                  Choose a format, enter your prompt, and Quillr will generate
                  polished content here.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
