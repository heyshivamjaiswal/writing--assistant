import OutputByType from '../../components/dashboard/OutputByType';
import RecentDocument from '../../components/dashboard/RecentDocument';
import StatCard from '../../components/dashboard/StatCard';
import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';
import Button from '../../components/ui/Button';

export default function DashboardPage() {
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
              statCount={142}
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
                <RecentDocument
                  title="Product launch email"
                  timestamp="2 hours ago"
                  action={
                    <Button className="bg-purple-200 text-xs font-semibold text-purple-600 border border-purple-400 rounded-full py-1">
                      Blog
                    </Button>
                  }
                />

                <RecentDocument
                  title="10x your productivity"
                  timestamp="Yesterday"
                  action={
                    <Button className="bg-green-200 text-xs font-semibold text-green-600 border border-green-400 rounded-full py-1">
                      Email
                    </Button>
                  }
                />

                <RecentDocument
                  title="Summer sale — 50% off"
                  timestamp="2 days ago"
                  action={
                    <Button className="bg-orange-200 text-xs font-semibold text-orange-600 border border-orange-400 rounded-full py-1">
                      Ad Copy
                    </Button>
                  }
                />

                <RecentDocument
                  title="Q2 investor update"
                  timestamp="Apr 22"
                  action={
                    <Button className="bg-pink-200 text-xs font-semibold text-pink-600 border border-pink-400 rounded-full py-1">
                      Social
                    </Button>
                  }
                />
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
