import { formatNumber } from '../../lib/utils';
import type { StatCardProps } from '../../types';

export default function StatCard({
  label,
  statCount,
  statDuration,
}: StatCardProps) {
  return (
    <div className="bg-bg-card h-32 w-50 flex flex-col gap-2 p-6 m-5 rounded-2xl border-2 border-bg-input">
      <span className="text-text-secondary text-sm font-bold">{label}</span>
      <span className="text-text-primary text-xl font-bold">
        {typeof statCount === 'number' ? formatNumber(statCount) : statCount}
      </span>
      <span className="text-green-600 text-xs font-semibold">
        {statDuration}
      </span>
    </div>
  );
}
