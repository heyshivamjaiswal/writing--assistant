import type { RecectDocumentProps } from '../../types';

export default function RecentDocument({
  title,
  timestamp,
  action,
}: RecectDocumentProps) {
  return (
    <div className="flex items-center justify-between  border-b border-border-sidebar last:border-none ">
      <div className="flex flex-col py-4 ">
        <h3 className="text-text-primary text-sm font-semibold mb">{title}</h3>
        <p className="text-xs text-text-secondary">{timestamp}</p>
      </div>

      {action}
    </div>
  );
}
