import RecentDocument from '../../components/dashboard/RecentDocument';
import StatCard from '../../components/dashboard/StatCard';
import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';
import Button from '../../components/ui/Button';

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
        <main>
          <div className="flex justify-between m-4">
            <StatCard
              label="Document"
              statCount={142}
              statDuration="+12 this week"
            />
            <StatCard
              label="Document"
              statCount={84000}
              statDuration="+6.2 this week"
            />
            <StatCard
              label="Document"
              statCount={68400}
              statDuration="32k remaining"
            />
            <StatCard
              label="Document"
              statCount={8.4}
              statDuration="+0.3 vs last month"
            />
          </div>
          <div className="bg-bg-card rounded-2xl p-5 w-[450px] h-full m-9">
            <h3 className="text-5px text-text-secondary font-bold mb-7">
              RECENT DOCUMENTS
            </h3>
            <RecentDocument
              title="10x your productivity"
              timestamp="2 hours ago"
              action={
                <Button className="bg-purple-200 text-xs font-semibold text-purple-600 border border-purple-400 rounded-full py-1">
                  Blog
                </Button>
              }
            />
            <RecentDocument
              title="Product lauch email"
              timestamp="2 hours ago"
              action={
                <Button className="bg-green-200 text-xs font-semibold text-green-600 border border-green-400 rounded-full py-1">
                  Email
                </Button>
              }
            />
            <RecentDocument
              title="Summer sale-50% off"
              timestamp="2 hours ago"
              action={
                <Button className="bg-orange-200 text-xs font-semibold text-orange-600 border border-orange-400 rounded-full py-1">
                  Ad Copy
                </Button>
              }
            />
            <RecentDocument
              title="Motivation Quotes"
              timestamp="2 hours ago"
              action={
                <Button className="bg-pink-200 text-xs font-semibold text-pink-600 border border-pink-400 rounded-full py-1">
                  Social
                </Button>
              }
            />
          </div>
        </main>
      </div>
    </div>
  );
}
