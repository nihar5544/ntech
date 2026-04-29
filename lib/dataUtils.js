// Client-safe utilities — no fs or crypto imports

export function getNestedValue(obj, dotPath) {
  if (!dotPath) return obj;
  return dotPath.split('.').reduce((acc, key) => {
    if (acc === undefined || acc === null) return undefined;
    return acc[key];
  }, obj);
}

export function setNestedValue(obj, dotPath, value) {
  const clone = JSON.parse(JSON.stringify(obj));
  if (!dotPath) return value;
  const keys = dotPath.split('.');
  let current = clone;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const nextKey = keys[i + 1];
    if (current[key] === undefined || current[key] === null) {
      current[key] = /^\d+$/.test(nextKey) ? [] : {};
    }
    current = current[key];
  }
  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;
  return clone;
}

const IMAGE_KEYS = ['image', 'img', 'icon', 'logo', 'bgimage', 'sideimage', 'video', 'thumbnail'];
const LINK_KEYS = ['link', 'url', 'href'];

export function detectFieldType(key, value) {
  if (value === null || value === undefined) return 'text';
  if (typeof value === 'boolean') return 'boolean';
  if (typeof value === 'number') return 'number';
  if (Array.isArray(value)) return 'array';
  if (typeof value === 'object') return 'object';
  if (typeof value === 'string') {
    const lk = key.toLowerCase();
    if (IMAGE_KEYS.some((k) => lk.includes(k))) return 'image';
    if (LINK_KEYS.some((k) => lk.includes(k))) return 'link';
    if (value.length > 120) return 'textarea';
    return 'text';
  }
  return 'text';
}

export function formatLabel(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase())
    .trim();
}
