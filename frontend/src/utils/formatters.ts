export function getShortTimeAgo(date: Date): string {
  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / 1000; // fark saniye cinsinden

  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  if (diff < minute) return `${Math.floor(diff)}sn`;
  if (diff < hour) return `${Math.floor(diff / minute)}dk`;
  if (diff < day) return `${Math.floor(diff / hour)}s`;
  if (diff < week) return `${Math.floor(diff / day)}g`;
  if (diff < month) return `${Math.floor(diff / week)}h`;
  if (diff < year) return `${Math.floor(diff / month)}a`;
  return `${Math.floor(diff / year)}y`;
}

export function stringToPastelColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // RGB bileşenlerini pastel aralığa çevir (150–255)
  const r = 150 + (hash % 106);          // 150–255
  const g = 150 + ((hash >> 3) % 106);   // 150–255
  const b = 150 + ((hash >> 6) % 106);   // 150–255

  return `rgb(${r}, ${g}, ${b}, 0.3)`;
}
