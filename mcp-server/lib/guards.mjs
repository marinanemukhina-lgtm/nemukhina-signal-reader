export const MAX_RESULTS = 5;
export function checkedQuery(input) {
  if (typeof input !== 'string') throw new Error('Запрос должен быть строкой');
  const q = input.normalize('NFKC').trim();
  if (q.length < 2 || q.length > 180) throw new Error('Запрос должен содержать от 2 до 180 символов');
  if (/[\x00-\x1f\x7f]/.test(q)) throw new Error('Управляющие символы запрещены');
  return q;
}
export function checkedGithubId(id) {
  if (typeof id !== 'string' || !/^[a-zA-Z0-9_.-]{1,80}\/[a-zA-Z0-9_.-]{1,100}$/.test(id)) throw new Error('Нужно указать owner/repository');
  const [owner, repo] = id.split('/');
  if (owner.startsWith('.') || repo.startsWith('.') || owner.includes('..') || repo.includes('..')) throw new Error('Недопустимое имя репозитория');
  return {owner, repo};
}
export function checkedDoi(value) {
  if (typeof value !== 'string') throw new Error('DOI должен быть строкой');
  const doi = value.trim().replace(/^https?:\/\/(?:dx\.)?doi\.org\//i,'');
  if (!/^10\.\d{4,9}\/[-._;()/:a-zA-Z0-9]{1,180}$/i.test(doi)) throw new Error('Некорректный DOI');
  return doi;
}
export function clipped(value, max=500) {
  return String(value ?? '').replace(/[\x00-\x1f\x7f]/g,' ').trim().slice(0,max);
}
export function safeLimit(n) {return Math.max(1,Math.min(MAX_RESULTS, Number.isFinite(n) ? Math.trunc(n) : 5));}
