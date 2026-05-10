import { RiHome2Fill } from 'react-icons/ri';

export default function Topbar() {
  const dateInfo = new Date();

  return (
    <div className="w-full flex items-center justify-between px-5 py-4 border-b border-border-sidebar">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Home Button */}
        <button className="text-text-primary text-xl hover:text-purple-400 transition">
          <RiHome2Fill />
        </button>

        {/* Title */}
        <span className="text-text-primary text-sm font-bold">Overview</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6 text-text-secondary text-xs font-semibold">
        {/* Date */}
        <span>
          {dateInfo.toLocaleDateString('en-IN', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </span>

        {/* Avatar */}
        <span className="bg-white text-purple-400 font-extrabold h-7 w-7 flex items-center justify-center rounded-full">
          SJ
        </span>
      </div>
    </div>
  );
}
