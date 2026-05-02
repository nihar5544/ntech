import { signToken, setCookieHeader } from '@/lib/adminAuth';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = signToken(username);
  res.setHeader('Set-Cookie', setCookieHeader(token));
  res.status(200).json({ ok: true });
}
