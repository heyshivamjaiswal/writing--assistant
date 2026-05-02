export type ProgressProps = {
  used: number;
  total?: number | any;
  label?: string;
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
