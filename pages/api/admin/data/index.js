import { requireAuth } from '@/lib/adminAuth';
import { readJsonFile, writeJsonFile, listFiles, FILE_REGISTRY } from '@/lib/dataManager';
import { setNestedValue } from '@/lib/dataUtils';

export default function handler(req, res) {
  const session = requireAuth(req, res);
  if (!session) return;

  const { file } = req.query;

  // GET /api/admin/data — list all files
  if (req.method === 'GET' && !file) {
    return res.status(200).json({ files: listFiles() });
  }

  if (!file) return res.status(400).json({ error: 'Missing file parameter' });
  if (!FILE_REGISTRY[file]) return res.status(400).json({ error: `Unknown file: ${file}` });

  // GET /api/admin/data?file=xxx — read file
  if (req.method === 'GET') {
    const result = readJsonFile(file);
    if (result.error) return res.status(500).json({ error: result.error });
    return res.status(200).json({ data: result.data, fileKey: file });
  }

  // PUT /api/admin/data?file=xxx — replace entire file
  if (req.method === 'PUT') {
    const { data } = req.body || {};
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return res.status(400).json({ error: 'Body must contain a data object' });
    }
    const result = writeJsonFile(file, data);
    if (result.error) return res.status(500).json({ error: result.error });
    return res.status(200).json({ ok: true });
  }

  // PATCH /api/admin/data?file=xxx — update single nested field
  if (req.method === 'PATCH') {
    const { path: dotPath, value } = req.body || {};
    if (!dotPath || typeof dotPath !== 'string') {
      return res.status(400).json({ error: 'Body must contain a path string' });
    }
    if (value === undefined) {
      return res.status(400).json({ error: 'Body must contain a value' });
    }
    const current = readJsonFile(file);
    if (current.error) return res.status(500).json({ error: current.error });
    const updated = setNestedValue(current.data, dotPath, value);
    const result = writeJsonFile(file, updated);
    if (result.error) return res.status(500).json({ error: result.error });
    return res.status(200).json({ ok: true, updated: { path: dotPath, value } });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
