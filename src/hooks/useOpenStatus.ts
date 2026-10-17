'use client';

import { useEffect, useState } from 'react';
import { getBusinessStatus, type BusinessStatus } from '@/utils/businessHours';

const noAdditionalHolidays: readonly string[] = [];

export function useOpenStatus(holidays: readonly string[] = noAdditionalHolidays): BusinessStatus {
  const [status, setStatus] = useState<BusinessStatus>(() => getBusinessStatus(new Date(), holidays));

  useEffect(() => {
    const updateStatus = () => setStatus(getBusinessStatus(new Date(), holidays));
    updateStatus();
    const intervalId = window.setInterval(updateStatus, 60_000);

    return () => window.clearInterval(intervalId);
  }, [holidays]);

  return status;
}
