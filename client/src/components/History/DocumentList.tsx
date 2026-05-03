import { FaListAlt } from 'react-icons/fa';
import { documentsData } from '../../data/mockData';
import { typeStyles } from '../../types';

export default function DocumentList() {
  return (
    <div className="mt-6">
      {/* Container */}
      <div className="border border-border-sidebar rounded-2xl p-5 bg-bg-card">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <FaListAlt className="text-text-secondary text-lg" />
          <p className="text-text-secondary font-semibold text-sm tracking-wide">
            ALL DOCUMENTS
          </p>
          <p className="text-text-secondary font-semibold text-xs">
            ({documentsData.length})
          </p>
        </div>

        {/* List */}
        <div className="flex flex-col divide-y divide-border-subtle">
          {documentsData.map((doc, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 hover:bg-bg-hover px-2 rounded-lg transition"
            >
              {/*Left: Title */}
              <p className="text-text-primary text-sm">{doc.title}</p>
              {/* Right: Badge + time */}
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
