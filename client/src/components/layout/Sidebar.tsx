import { BsDot } from 'react-icons/bs';

export default function Sidebar() {
  const sidebarItems = [
    'Dashboard',
    'New document',
    'History',
    'Template',
    'Settings',
  ];

  return (
    <div className="bg-bg-sidebar">
      <div>
        <div className="text-text-primary text-xl font-semibold pt-3 pl-6">
          <span>Qulir</span>
        </div>
        <div className="border-t border-border-sidebar mt-5"></div>
        <div className="flex flex-col w- 64 h-screen gap-2 pt-4 pl-3">
          {sidebarItems.map((items, i) => (
            <div
              key={i}
              className="flex items-center gap-1 text-text-secondary font-semibold"
            >
              <BsDot size={23} />
              <span>{items}</span>
            </div>
          ))}
        </div>
        <div className="pb-20">
          <div className="border-t border-border-sidebar"></div>
          <div className="flex flex-col gap-1 p-4">
            <span className="text-text-secondary text-xs font-bold">
              Token Used
            </span>
            <span className="text text-text-primary">68,400/1000k</span>
          </div>
        </div>
      </div>
    </div>
  );
}
