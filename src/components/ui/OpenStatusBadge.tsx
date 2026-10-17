'use client';

import { useEffect, useState } from 'react';
import { useOpenStatus } from '@/hooks/useOpenStatus';
import { cn } from '@/utils/cn';

export function OpenStatusBadge({ compact = false }: { compact?: boolean }) {
  const status = useOpenStatus();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <span className={cn('open-status', mounted && status.isOpen && 'is-open', compact && 'compact')} role="status">
      <span className="status-dot" aria-hidden="true" />
      {mounted ? status.label : 'Consultando horário…'}
    </span>
  );
}
