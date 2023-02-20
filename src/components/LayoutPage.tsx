import { interFont } from '@/lib/nextFonts';
import type { ReactElement } from 'react';

interface LayoutPageProps {
  children: ReactElement;
}

export default function LayoutPage({ children }: LayoutPageProps) {
  return <div className={`${interFont.variable} font-inter`}>{children}</div>;
}
