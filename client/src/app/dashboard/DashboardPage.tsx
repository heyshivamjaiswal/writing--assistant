import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';

export default function DashboardPage() {
  return (
    <div className="flex bg-bg-base h-screen ">
      <div>
        {/* sidebar */}
        <aside className="w-64 bg-bg-sidebar border-r border-border-sidebar ">
          <Sidebar />
        </aside>
        {/* topbar */}
        <div className="flex-1 flex ">
          <header className="h-14 bg-bg-sidebar border-b border-border-subtle">
            <Topbar />
          </header>
        </div>
      </div>
    </div>
  );
}
