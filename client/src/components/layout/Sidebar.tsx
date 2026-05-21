import { BsDot } from 'react-icons/bs';
import { TotalProgress } from '../ui/ProgressBar';
import { Link } from 'react-router';

export default function Sidebar() {
  const sidebarItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'New document', path: '/dashboard/editor' },
    { label: 'History', path: '/dashboard/history' },
    { label: 'Template', path: '/template' },
    { label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="bg-bg-sidebar h-full flex flex-col">
      {/* logo */}
      <div className="text-text-primary text-sm font-bold h-14 flex items-center pl-6">
        Qulir
      </div>
      <div className="border-t border-border-sidebar pt-2" />
      {/* items */}
      <div className="flex flex-col gap-2 pt-4 pl-3">
        {sidebarItems.map((item, i) => (
          <Link
            to={item.path}
            key={i}
            className="flex items-center gap-1 text-text-secondary font-semibold cursor-pointer"
          >
            <BsDot size={23} />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* bottom section */}
      <div className="mt-auto pb-8">
        <div className="border-t border-border-sidebar" />

        <div className="flex flex-col p-4">
          <span className="text-text-secondary text-xs font-bold pb-2">
            Token Used
          </span>

          <TotalProgress className="bg-accent-purple" total={1000} used={720} />
        </div>
      </div>
    </div>
  );
}
