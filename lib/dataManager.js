import fs from 'fs';
import path from 'path';

export const FILE_REGISTRY = {
  'header': 'header.json',
  'footer': 'footer.json',
  'homepage': 'homepage.json',
  'about-us': 'about-us.json',
  'portfolio': 'portfolio.json',
  'media': 'media.json',
  'hire-developer': 'hire-developer.json',
  'industry/corporate': 'industry/corporate.json',
  'industry/ecommerce': 'industry/ecommerce.json',
  'industry/gaming': 'industry/gaming.json',
  'industry/healthcare': 'industry/healthcare.json',
  'services/game-development': 'services/game-development.json',
  'services/graphic-designing': 'services/graphic-designing.json',
  'services/it-service-support': 'services/it-service-support.json',
  'services/seo': 'services/seo.json',
  'services/web-application': 'services/web-application.json',
  'services/web-page': 'services/web-page.json',
  'shared/partners': 'shared/partners.json',
  'shared/testimonials': 'shared/testimonials.json',
};

const FILE_LABELS = {
  'header': { label: 'Header', group: 'Global' },
  'footer': { label: 'Footer', group: 'Global' },
  'homepage': { label: 'Homepage', group: 'Pages' },
  'about-us': { label: 'About Us', group: 'Pages' },
  'portfolio': { label: 'Portfolio', group: 'Pages' },
  'media': { label: 'Media', group: 'Pages' },
  'hire-developer': { label: 'Hire Developer', group: 'Pages' },
  'industry/corporate': { label: 'Corporate', group: 'Industries' },
  'industry/ecommerce': { label: 'E-Commerce', group: 'Industries' },
  'industry/gaming': { label: 'Gaming', group: 'Industries' },
  'industry/healthcare': { label: 'Healthcare', group: 'Industries' },
  'services/game-development': { label: 'Game Development', group: 'Services' },
  'services/graphic-designing': { label: 'Graphic Designing', group: 'Services' },
  'services/it-service-support': { label: 'IT Service Support', group: 'Services' },
  'services/seo': { label: 'SEO', group: 'Services' },
  'services/web-application': { label: 'Web Application', group: 'Services' },
  'services/web-page': { label: 'Web Page', group: 'Services' },
  'shared/partners': { label: 'Partners', group: 'Shared' },
  'shared/testimonials': { label: 'Testimonials', group: 'Shared' },
};

export function getFilePath(fileKey) {
  const relativePath = FILE_REGISTRY[fileKey];
  if (!relativePath) return null;
  return path.join(process.cwd(), 'data', relativePath);
}

export function readJsonFile(fileKey) {
  const filePath = getFilePath(fileKey);
  if (!filePath) return { error: `Unknown file key: ${fileKey}` };
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return { data: JSON.parse(raw) };
  } catch (err) {
    return { error: err.message };
  }
}

export function writeJsonFile(fileKey, data) {
  const filePath = getFilePath(fileKey);
  if (!filePath) return { error: `Unknown file key: ${fileKey}` };
  try {
    const backupDir = path.join(process.cwd(), 'data', 'backups');
    fs.mkdirSync(backupDir, { recursive: true });
    const safeKey = fileKey.replace(/\//g, '__');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    fs.copyFileSync(filePath, path.join(backupDir, `${safeKey}-${timestamp}.json`));
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return { success: true };
  } catch (err) {
    return { error: err.message };
  }
}

export function listFiles() {
  return Object.keys(FILE_REGISTRY).map((key) => ({
    key,
    label: FILE_LABELS[key]?.label || key,
    group: FILE_LABELS[key]?.group || 'Other',
    route: `/admin/${key}`,
  }));
}
