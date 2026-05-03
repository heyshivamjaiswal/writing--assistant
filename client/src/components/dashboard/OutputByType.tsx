import { TotalProgress } from '../ui/ProgressBar';

export default function OutputByType() {
  return (
    <div className="flex flex-col gap-9">
      <h3 className="text-xs text-text-secondary font-semibold tracking-wide">
        OUTPUT BY TYPE
      </h3>

      <div className="flex flex-col divide-y divide-border-subtle">
        {/* Blog */}
        <div className="flex items-center gap-15 py-5">
          <p className="w-20 text-sm text-text-primary">Blog</p>
          <TotalProgress used={58} className="bg-accent-purple" />
        </div>

        {/* Email */}
        <div className="flex items-center gap-15 py-5">
          <p className="w-20 text-sm text-text-primary">Email</p>
          <TotalProgress used={40} className="bg-accent-green" />
        </div>

        {/* Ad Copy */}
        <div className="flex items-center gap-15 py-5">
          <p className="w-20 text-sm text-text-primary">Ad Copy</p>
          <TotalProgress used={24} className="bg-accent-orange" />
        </div>

        {/* Social */}
        <div className="flex items-center gap-15 py-5">
          <p className="w-20 text-sm text-text-primary">Social</p>
          <TotalProgress used={20} className="bg-accent-pink" />
        </div>
      </div>
      <div className="pl-4 flex flex-col gap-4 ">
        <h3 className="text-xs text-text-secondary font-semibold tracking-wide pl-2">
          CURRENT DRAFT
        </h3>
        <input
          type="text"
          className="bg-bg-input h-28 w-96 border border-bg-base outline-none rounded-3xl "
        />
      </div>
    </div>
  );
}
