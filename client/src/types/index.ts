export type ProgressProps = {
  used: number;
  total?: number | any;
  label?: string;
};

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
