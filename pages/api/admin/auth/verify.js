import { requireAuth } from '@/lib/adminAuth';

export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const session = requireAuth(req, res);
  if (!session) return;
  res.status(200).json({ username: session.username });
}
