import { FaListAlt } from 'react-icons/fa';
import { typeStyles } from '../../types';
import { useDocumentStore } from '../../store/useDocumentStore';
import type { Document } from '../../store/useDocumentStore';
import { useNavigate } from 'react-router';

export default function DocumentList({ docus }: { docus: Document[] }) {
  const selectDocument = useDocumentStore((s) => s.selectDocument);
  useDocumentStore((s) => s.documents);

  const navigate = useNavigate();

  const handleOpen = (doc: Document) => {
    selectDocument(doc);

    navigate('/dashboard/editor');
  };
  return (
    <div className="mt-6">
      <div className="border border-border-sidebar rounded-2xl p-5 bg-bg-card">
        <div className="flex items-center gap-3 mb-5">
          <FaListAlt className="text-text-secondary text-lg" />
          <p className="text-text-secondary font-semibold text-sm tracking-wide">
            ALL DOCUMENTS
          </p>
          <p className="text-text-secondary font-semibold text-xs">
            ({docus.length})
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border-subtle">
          {docus.map((doc, index) => (
            <div
              key={index}
              onClick={() => handleOpen(doc)}
              className="flex items-center justify-between py-3 hover:bg-bg-hover px-2 rounded-lg transition"
            >
              <p className="text-text-primary text-sm">{doc.title}</p>

              <div className="flex flex-col items-center gap-8">
                <span
                  className={`text-xs px-3 py-1 rounded-full border ${
                    typeStyles[doc.type as keyof typeof typeStyles]
                  }`}
                >
                  {doc.type}
                </span>

                <span className="text-xs text-text-secondary">
                  {doc.createdAt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
