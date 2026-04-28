import { ReactNode } from 'react';

type TokenProps = {
  children: ReactNode;
  className?: string;
};

export default function Token({ children, className = '' }: TokenProps) {
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap bg-neutral-100 border border-border-strong rounded-full px-2 py-1 font-mono text-body-small text-text-primary ${className}`}
    >
      {children}
    </span>
  );
}
