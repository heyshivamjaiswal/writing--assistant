import { useDocumentStore } from '../../store/useDocumentStore';
import { TotalProgress } from '../ui/ProgressBar';

export default function OutputByType() {
  const documents = useDocumentStore((s) => s.documents);

  const counts = {
    blog: 0,
    email: 0,
    adCopy: 0,
    social: 0,
  };

  documents.forEach((doc) => {
    if (doc.type in counts) {
      counts[doc.type as keyof typeof counts]++;
    }
  });

  const rows = [
    {
      label: 'Blog',
      used: counts.blog,
      color: 'bg-accent-purple',
    },

    {
      label: 'Email',
      used: counts.email,
      color: 'bg-accent-green',
    },

    {
      label: 'Ad Copy',
      used: counts.email,
      color: 'bg-accent-orange',
    },

    {
      label: 'Social',
      used: counts.social,
      color: 'bg-accent-pink',
    },
  ];
  return (
    <div className="flex flex-col gap-9">
      <h3 className="text-xs text-text-secondary font-semibold tracking-wide">
        OUTPUT BY TYPE
      </h3>

      <div className="flex flex-col divide-y divide-border-subtle">
        {rows.map((row) => (
          <div className="flex items-center gap-10 py-5">
            <p className="w-20 text-sm text-text-primary">{row.label}</p>

            <TotalProgress
              used={row.used}
              total={documents.length || 1}
              className={row.color}
            />

            <span className="text-xs text-text-secondary">{row.used}</span>
          </div>
        ))}
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
