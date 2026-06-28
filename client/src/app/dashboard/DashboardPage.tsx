import DashboardLayout from '../../components/layout/DashboardLayout';
import OutputByType from '../../components/dashboard/OutputByType';
import RecentDocument from '../../components/dashboard/RecentDocument';
import StatCard from '../../components/dashboard/StatCard';

import { useDocumentStore } from '../../store/useDocumentStore';
import { typeStyles } from '../../types';

export default function DashboardPage() {
  const documents = useDocumentStore((s) => s.documents);

  return (
    <DashboardLayout>
      {/* Stats */}

      <div className="grid grid-cols-4 gap-5">
        <StatCard
          label="Documents"
          statCount={documents.length}
          statDuration="+12 this week"
        />

        <StatCard
          label="Words generated"
          statCount={84000}
          statDuration="+6.2k today"
        />

        <StatCard
          label="Tokens used"
          statCount={68400}
          statDuration="32k remaining"
        />

        <StatCard
          label="Avg. quality score"
          statCount={8.4}
          statDuration="+0.3 vs last month"
        />
      </div>

      {/* Bottom */}

      <div className="grid grid-cols-2 gap-5 mt-6">
        <div className="bg-bg-card rounded-2xl p-5">
          <h3 className="text-xs text-text-secondary font-semibold mb-4 tracking-wide">
            RECENT DOCUMENTS
          </h3>

          <div className="flex flex-col divide-y divide-border-subtle">
            {documents.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-text-secondary text-sm">No documents yet</p>

                <p className="text-xs text-text-secondary mt-2">
                  Create your first document.
                </p>
              </div>
            ) : (
              documents
                .slice(0, 4)
                .map((doc) => (
                  <RecentDocument
                    key={doc.id}
                    title={doc.title}
                    timestamp={new Date(doc.createdAt).toLocaleDateString()}
                    action={
                      <span
                        className={`text-xs font-semibold border rounded-full px-3 py-1 ${
                          typeStyles[doc.type as keyof typeof typeStyles]
                        }`}
                      >
                        {doc.type}
                      </span>
                    }
                  />
                ))
            )}
          </div>
        </div>

        <div className="bg-bg-card rounded-2xl p-5">
          <OutputByType />
        </div>
      </div>
    </DashboardLayout>
  );
}
