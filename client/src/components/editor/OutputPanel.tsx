import { FaFileAlt, FaEdit } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

import { editDocument } from '../../services/document';

import { useEditorStore } from '../../store/useEditorStore';
import { useDocumentStore } from '../../store/useDocumentStore';

export default function OutputPanel() {
  const output = useEditorStore((s) => s.output);

  const isLoading = useEditorStore((s) => s.isLoading);

  const selected = useDocumentStore((s) => s.selectedDocument);

  const updateDocument = useDocumentStore((s) => s.updateDocument);

  const [draft, setDraft] = useState('');

  const [editing, setEditing] = useState(false);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setDraft(selected?.content || output || '');
  }, [selected, output]);

  const handleSave = async () => {
    if (!selected) {
      setEditing(false);
      return;
    }

    setSaving(true);

    try {
      await editDocument(selected.id, draft);

      updateDocument({
        ...selected,
        content: draft,
      });

      setEditing(false);
    } catch (error) {
      console.log(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="
      h-full
      w-[900px]
      rounded-[32px]
      border
      border-[#262626]
      bg-[#161616]
      overflow-hidden
      flex
      flex-col
    "
    >
      {/* Header */}

      <div
        className="
        px-8
        py-6
        border-b
        border-[#252525]

        flex
        items-center
        justify-between
      "
      >
        <div className="flex gap-3 items-center">
          <FaFileAlt className="text-[#8A8070]" />

          <span className="text-[#B8B0A3]">
            {selected?.title || 'Generated Output'}
          </span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setEditing(!editing)}
            className="
            px-4
            py-2
            rounded-2xl
            bg-[#222]
            text-white
          "
          >
            <FaEdit />
          </button>

          {editing && (
            <button
              onClick={handleSave}
              disabled={saving}
              className="
                px-5
                py-2

                rounded-2xl

                bg-[#D97B3A]

                text-black

                disabled:opacity-50
              "
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          )}
        </div>
      </div>

      {/* Content */}

      <div
        className="
        flex-1
        overflow-hidden
      "
      >
        <div
          className="
          h-full
          overflow-y-auto

          px-14
          py-12
        "
        >
          {isLoading ? (
            <p>Generating...</p>
          ) : editing ? (
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="
              w-full

              min-h-full

              bg-transparent

              outline-none

              resize-none

              overflow-hidden

              text-[#ECE4D8]

              text-[18px]

              leading-[2]
            "
            />
          ) : (
            <div
              className="
              prose
              prose-invert
              max-w-none

              prose-headings:text-white

              prose-p:text-[#DDD]

              prose-p:leading-9

              prose-strong:text-white

              prose-li:text-[#DDD]
            "
            >
              <ReactMarkdown>{draft}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
