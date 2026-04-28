import type { ProgressProps } from '../../types/index.ts';

export const TotalProgress = ({ used, total }: ProgressProps) => {
  const percentage = total === 0 ? 0 : Math.min((used / total) * 100, 100);

  return (
    <div className="w-52">
      <div className="flex justify-between text-xs text-text-secondary mb-1">
        <span>
          {used} / {total}
        </span>
      </div>
      <div className="w-full bg-card rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-accent-purple transition-all duration-300
                "
          style={{ width: `${percentage}` }}
        />
      </div>
    </div>
  );
};
