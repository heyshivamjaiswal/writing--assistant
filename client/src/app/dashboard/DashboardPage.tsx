import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';

export default function DashboardPage() {
  return (
    <div className="flex bg-bg-base h-screen">
      {/* sidebar */}
      <aside className="w-64 bg-bg-sidebar border-r border-border-sidebar">
        <Sidebar />
      </aside>

      {/* right section */}
      <div className="flex-1 flex flex-col">
        {/* topbar */}
        <header className="h-14 bg-bg-sidebar border-b border-border-subtle flex items-center px-4">
          <Topbar />
        </header>

        {/* content (empty for now) */}
        <main className="flex-1" />
      </div>
    </div>
  );
}
