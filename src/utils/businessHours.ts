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
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

  return {
    weekday: values.weekday,
    minutes: Number(values.hour) * 60 + Number(values.minute),
    year: Number(values.year),
    date: `${values.year}-${values.month}-${values.day}`,
  };
}

function formatDate(date: Date): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

  return `${values.year}-${values.month}-${values.day}`;
}

function getEasterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  return new Date(Date.UTC(year, month - 1, day));
}

export function getBrazilianHolidayDates(year: number): string[] {
  const fixedHolidays = [
    `${year}-01-01`,
    `${year}-04-21`,
    `${year}-05-01`,
    `${year}-07-09`,
    `${year}-09-07`,
    `${year}-10-12`,
    `${year}-11-02`,
    `${year}-11-15`,
    `${year}-11-20`,
    `${year}-12-25`,
  ];
  const easterSunday = getEasterSunday(year);
  const goodFriday = new Date(easterSunday);
  goodFriday.setUTCDate(goodFriday.getUTCDate() - 2);
  const corpusChristi = new Date(easterSunday);
  corpusChristi.setUTCDate(corpusChristi.getUTCDate() + 60);

  return [...fixedHolidays, formatDate(goodFriday), formatDate(corpusChristi)];
}

export function getBusinessStatus(
  date = new Date(),
  holidays: readonly string[] = [],
): BusinessStatus {
  const { weekday, minutes, year, date: zonedDate } = getZonedDateParts(date);
  const isHoliday = [...getBrazilianHolidayDates(year), ...holidays].includes(zonedDate);
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
