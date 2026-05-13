import { useEditorStore } from '../../store/useEditorStore';
import ReactMarkdown from 'react-markdown';

export default function OutputPanel() {
  const output = useEditorStore((state) => state.output);
  const isLoading = useEditorStore((state) => state.isLoading);
  return (
    <div className="h-full overflow-y-auto">
      <div className="prose prose-invert text-text-primary max-w-3xl mx-auto whitespace-pre-wrap ">
        {isLoading ? (
          <p>Generating...</p>
        ) : output ? (
          <ReactMarkdown>{output}</ReactMarkdown>
        ) : (
          <p>Your content will be displayed here...</p>
        )}
      </div>
    </div>
  );
}
