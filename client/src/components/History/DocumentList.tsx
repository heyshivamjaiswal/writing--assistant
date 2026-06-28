import { FaListAlt, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router';

import { typeStyles } from '../../types';
import { useDocumentStore } from '../../store/useDocumentStore';
import type { Document } from '../../store/useDocumentStore';

import { deleteDocument } from '../../services/deleteDocument';

export default function DocumentList({ docus }: { docus: Document[] }) {
  const selectDocument = useDocumentStore((s) => s.selectDocument);

  const removeDocument = useDocumentStore((s) => s.removeDocument);

  const navigate = useNavigate();

  const handleOpen = (doc: Document) => {
    selectDocument(doc);

    navigate('/dashboard/editor');
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDocument(id);

      removeDocument(id);
    } catch (error) {
      console.log(error);
    }
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
          {docus.map((doc) => (
            <div
              key={doc.id}
              onClick={() => handleOpen(doc)}
              className="
                flex
                items-center
                justify-between
                py-4
                px-3
                rounded-xl
                cursor-pointer
                hover:bg-bg-hover
                transition
              "
            >
              <div>
                <p className="text-text-primary text-sm font-medium">
                  {doc.title}
                </p>

                <p className="text-xs text-text-secondary mt-1">
                  {doc.createdAt}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    border
                    ${typeStyles[doc.type as keyof typeof typeStyles]}
                  `}
                >
                  {doc.type}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    handleDelete(doc.id);
                  }}
                  className="
                    p-2
                    rounded-lg
                    text-red-400
                    hover:bg-red-500/10
                    hover:text-red-300
                    transition
                  "
                >
                  <FaTrash size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
