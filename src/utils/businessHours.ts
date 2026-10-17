import { restaurantInfo } from '@/data/restaurantInfo';

export interface BusinessStatus {
  isOpen: boolean;
  label: 'Aberto Agora' | 'Fechado no momento';
}

const timeZone = restaurantInfo.timeZone;

function getZonedDateParts(date: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

  return {
    weekday: values.weekday,
    minutes: Number(values.hour) * 60 + Number(values.minute),
  };
}

export function getBusinessStatus(date = new Date(), holidays: readonly string[] = []): BusinessStatus {
  const { weekday, minutes } = getZonedDateParts(date);
  const dateParts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const dateValues = Object.fromEntries(dateParts.map(({ type, value }) => [type, value]));
  const zonedDate = `${dateValues.year}-${dateValues.month}-${dateValues.day}`;
  const isHoliday = holidays.includes(zonedDate);
  const weekendOrHoliday = isHoliday || weekday === 'Sat' || weekday === 'Sun';

  if (weekday === 'Mon' && !isHoliday) {
    return { isOpen: false, label: 'Fechado no momento' };
  }

  const closingTime = weekendOrHoliday ? 17 * 60 : 15 * 60;
  const isOpen = minutes >= 11 * 60 + 30 && minutes < closingTime;

  return {
    isOpen,
    label: isOpen ? 'Aberto Agora' : 'Fechado no momento',
  };
}
