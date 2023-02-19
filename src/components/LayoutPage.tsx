import type { ReactElement } from 'react';

interface LayoutPageProps {
  children: ReactElement;
}

export default function LayoutPage({ children }: LayoutPageProps) {
  return <div>{children}</div>;
}
