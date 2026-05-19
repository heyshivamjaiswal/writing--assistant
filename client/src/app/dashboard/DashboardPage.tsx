import OutputByType from '../../components/dashboard/OutputByType';
import RecentDocument from '../../components/dashboard/RecentDocument';
import StatCard from '../../components/dashboard/StatCard';
import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';
import Button from '../../components/ui/Button';
import { useDocumentStore } from '../../store/useDocumentStore';
import { typeStyles } from '../../types';

export default function DashboardPage() {
  const documents = useDocumentStore((s) => s.documents);
  return (
    <div className="flex bg-bg-base h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-bg-sidebar border-r border-border-sidebar">
        <Sidebar />
      </aside>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-14 bg-bg-sidebar border-b border-border-subtle flex items-center px-4">
          <Topbar />
        </header>

        {/* Main */}
        <main className="p-5 flex flex-col gap-5">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
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

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-5">
            {/* Recent Documents */}
            <div className="bg-bg-card rounded-2xl p-5">
              <h3 className="text-xs text-text-secondary font-semibold mb-4 tracking-wide">
                RECENT DOCUMENTS
              </h3>

              <div className="flex flex-col divide-y divide-border-subtle">
                {documents.length === 0 ? (
                  <div className="py-0 text-center">
                    <p className="text-text-secondary text-sm">
                      No documents yet
                    </p>

                    <p className="text-xs text-text-secondary mt-2">
                      Create your first document to see activity here
                    </p>
                  </div>
                ) : (
                  documents.slice(0, 4).map((doc) => (
                    <RecentDocument
                      key={doc.id}
                      title={doc.title}
                      timestamp={new Date(doc.createdAt).toLocaleDateString()}
                      action={
                        <button
                          className={`
                        text-xs font-semibold border rounded-full py-1
                        ${typeStyles[doc.type as keyof typeof typeStyles]}
                        `}
                        >
                          {doc.type}
                        </button>
                      }
                    />
                  ))
                )}
              </div>
            </div>

            {/* Output By Type */}
            <div className="bg-bg-card rounded-2xl p-5">
              <OutputByType />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
