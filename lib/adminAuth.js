import crypto from 'crypto';

const SECRET = process.env.ADMIN_SECRET || 'fallback_secret_change_in_production';
const COOKIE_NAME = 'admin_session';
const EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

export function signToken(username) {
  const payload = { username, iat: Date.now(), exp: Date.now() + EXPIRY_MS };
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = crypto.createHmac('sha256', SECRET).update(encoded).digest('hex');
  return `${encoded}.${sig}`;
}

export function verifyToken(cookieValue) {
  if (!cookieValue) return null;
  const parts = cookieValue.split('.');
  if (parts.length < 2) return null;
  const sig = parts.pop();
  const encoded = parts.join('.');
  const expectedSig = crypto.createHmac('sha256', SECRET).update(encoded).digest('hex');
  try {
    const expectedBuf = Buffer.from(expectedSig, 'hex');
    const actualBuf = Buffer.from(sig, 'hex');
    if (expectedBuf.length !== actualBuf.length) return null;
    if (!crypto.timingSafeEqual(expectedBuf, actualBuf)) return null;
  } catch {
    return null;
  }
  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString());
    if (payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export function parseCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) return cookies;
  cookieHeader.split(';').forEach((pair) => {
    const idx = pair.indexOf('=');
    if (idx < 0) return;
    const key = pair.slice(0, idx).trim();
    const val = pair.slice(idx + 1).trim();
    cookies[key] = decodeURIComponent(val);
  });
  return cookies;
}

export function requireAuth(req, res) {
  const cookies = parseCookies(req.headers.cookie);
  const token = cookies[COOKIE_NAME];
  const payload = verifyToken(token);
  if (!payload) {
    res.status(401).json({ error: 'Unauthorized' });
    return false;
  }
  return payload;
}

export function setCookieHeader(token) {
  return `${COOKIE_NAME}=${token}; HttpOnly; Path=/; Max-Age=${EXPIRY_MS / 1000}; SameSite=Strict`;
}

export function clearCookieHeader() {
  return `${COOKIE_NAME}=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`;
}
