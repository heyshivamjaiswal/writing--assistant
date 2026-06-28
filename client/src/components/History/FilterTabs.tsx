import { RiHome2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router';

export default function Topbar() {
  const navigate = useNavigate();

  const dateInfo = new Date();

  const handleLogout = () => {
    localStorage.removeItem('token');

    window.location.href = '/auth';
  };

  return (
    <div className="w-full flex items-center justify-between px-5 py-4 border-b border-border-sidebar">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="text-text-primary text-xl hover:text-purple-400 transition"
        >
          <RiHome2Fill />
        </button>

        <span className="text-text-primary text-sm font-bold">Overview</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="text-text-secondary text-xs font-semibold">
          {dateInfo.toLocaleDateString('en-IN', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </span>

        <span className="bg-white text-purple-400 font-extrabold h-8 w-8 flex items-center justify-center rounded-full">
          SJ
        </span>

        <button
          onClick={handleLogout}
          className="
            px-3
            py-2
            rounded-lg
            bg-red-500
            text-white
            text-xs
            font-semibold
            hover:bg-red-600
            transition
          "
        >
          Logout
        </button>
      </div>
    </div>
  );
}
