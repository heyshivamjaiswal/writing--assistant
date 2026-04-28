export default function Topbar() {
  const dateInfo = new Date();
  return (
    <div>
      <div className="flex flex-row gap-25 ">
        <span className="text-text-primary text-xl font-semibold">
          Overview
        </span>
        <div className="text-text-secondary text-xs font-semibold">
          <span>
            {dateInfo.toLocaleDateString('en-IN', {
              month: 'short',
              year: 'numeric',
            })}
          </span>
          <span>SJ</span>
        </div>
      </div>
    </div>
  );
}
