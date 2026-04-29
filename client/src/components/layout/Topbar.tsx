export default function Topbar() {
  const dateInfo = new Date();

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <span className="text-text-primary text-sm font-bold">Overview</span>

        <div className="flex items-center gap-6 text-text-secondary text-xs font-semibold ">
          <span>
            {dateInfo.toLocaleDateString('en-IN', {
              month: 'short',
              year: 'numeric',
            })}
          </span>
          <span className="bg-white text-purple-400 font-extrabold text-t h-7 w-7 flex items-center justify-center rounded-full">
            SJ
          </span>
        </div>
      </div>
    </div>
  );
}
