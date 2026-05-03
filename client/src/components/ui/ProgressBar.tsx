import { getDynamicTotal } from '../../lib/utils.ts';
import type { ProgressProps } from '../../types/index.ts';

export const TotalProgress = ({
  used,
  total,
  step = 100,
  className,
}: ProgressProps) => {
  const dynamicTotal = total ?? getDynamicTotal(used, step);

  const percentage =
    dynamicTotal === 0 ? 0 : Math.min((used / dynamicTotal) * 100, 100);

  return (
    <div className="w-52">
      <div className="flex justify-between text-xs text-text-secondary mb-1">
        <span>
          {used} / {dynamicTotal}
        </span>
      </div>

      <div className="w-full bg-card bg-bg-base rounded-full h-2 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${className}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
