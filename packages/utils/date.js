export const formatDateTime = (timestamp) => {
  if (!timestamp) return '—';

  const dateNum = Number(String(timestamp).padEnd(13, '0'));
  const date = new Date(dateNum);

  const YYYY = date.getFullYear();
  // getMonth() 回傳 0-11，所以要 +1
  const MM = String(date.getMonth() + 1).padStart(2, '0');
  const DD = String(date.getDate()).padStart(2, '0');
  const HH = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');

  return `${YYYY}-${MM}-${DD} ${HH}:${mm}`;
};

export const formatDate = (timestamp) => {
  if (!timestamp) return '—';

  const dateNum = Number(String(timestamp).padEnd(13, '0'));
  const date = new Date(dateNum);

  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, '0');
  const DD = String(date.getDate()).padStart(2, '0');

  return `${YYYY}-${MM}-${DD}`;
};
