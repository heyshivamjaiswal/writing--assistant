import { useEditorStore } from '../../store/useEditorStore';

export default function OutputPanel() {
  const output = useEditorStore((state) => state.output);
  const isLoading = useEditorStore((state) => state.isLoading);
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-3xl mx-auto text-text-primary whitespace-pre-wrap leading-8 text-[15px]">
        {isLoading
          ? 'Generating...'
          : output || 'Your content will be displayed here...'}
      </div>
    </div>
  );
}
