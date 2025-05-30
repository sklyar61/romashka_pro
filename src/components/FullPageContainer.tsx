// src/components/FullPageContainer.tsx
import React, { ReactNode } from 'react';

export default function FullPageContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="h-screen overflow-y-auto scroll-smooth"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {children}
    </div>
  );
}

