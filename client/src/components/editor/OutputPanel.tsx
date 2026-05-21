import { FaFileAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { editDocument } from '../../services/document';

import { useEditorStore } from '../../store/useEditorStore';
import { useDocumentStore } from '../../store/useDocumentStore';

export default function OutputPanel() {
  const output = useEditorStore((state) => state.output);

  const isLoading = useEditorStore((state) => state.isLoading);

  const selected = useDocumentStore((s) => s.selectedDocument);

  const updateDocument = useDocumentStore((s) => s.updateDocument);

  const [draft, setDraft] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setDraft(selected?.content || output || '');
  }, [selected, output]);

  const handleSave = async () => {
    if (!selected) return;
    setSaving(true);
    try {
      await editDocument(selected.id, draft);

      updateDocument({
        ...selected,

        content: draft,
      });
      console.log('saved');
    } catch (error) {
      console.log('error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="h-full w-[800px] rounded-[28px] border border-[#2A2A2A] bg-[#181818] overflow-hidden">
      <div className="h-full overflow-y-auto p-10">
        <div className="flex items-center gap-3 mb-8">
          <FaFileAlt className="text-[#8A8070]" />

          <span className="text-[#8A8070] text-sm">
            {selected?.title || 'Generated Output'}
          </span>
        </div>

        <div className="prose prose-invert text-text-primary max-w-none whitespace-pre-wrap">
          {isLoading ? (
            <p>Generating...</p>
          ) : draft ? (
            <>
              <button
                onClick={handleSave}
                disabled={saving}
                className="mb-6 px-5 py-2 bg-[#D97B3A] rounded-xl disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save'}
              </button>

              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                className="w-full min-h-[500px] bg-transparent outline-none resize-none text-[#E8DCC8] leading-8"
              />
            </>
          ) : (
            <div className="h-[60vh] flex items-center justify-center text-[#6B6B6B]">
              Your content will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
