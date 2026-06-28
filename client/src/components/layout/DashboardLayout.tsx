import type { ReactNode } from 'react';

import Sidebar from './Sidebar';
import Topbar from './Topbar';

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="h-screen bg-bg-base flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-border-sidebar">
        <Sidebar />
      </aside>

      {/* Right */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
