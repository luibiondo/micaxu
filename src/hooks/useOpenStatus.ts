'use client';

import { useEffect, useState } from 'react';
import { getBusinessStatus, type BusinessStatus } from '@/utils/businessHours';

export function useOpenStatus(): BusinessStatus {
  const [status, setStatus] = useState<BusinessStatus>(() => getBusinessStatus());

  useEffect(() => {
    const updateStatus = () => setStatus(getBusinessStatus());
    updateStatus();
    const intervalId = window.setInterval(updateStatus, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return status;
}
