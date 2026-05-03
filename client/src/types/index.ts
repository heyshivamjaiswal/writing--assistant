export type ProgressProps = {
  used: number;
  total?: number | any;
  label?: string;
  step?: number;
  className?: string;
};

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type StatCardProps = {
  label: string;
  statCount: number;
  statDuration: string;
};

export type RecectDocumentProps = {
  title: string;
  timestamp: string;
  action?: React.ReactNode;
};

export const typeStyles = {
  email: 'bg-green-200 text-green-600 border-green-400',
  blog: 'bg-purple-200 text-purple-600 border-purple-400',
  adCopy: 'bg-orange-200 text-orange-600 border-orange-400',
  social: 'bg-pink-200 text-pink-600 border-pink-400',
};
