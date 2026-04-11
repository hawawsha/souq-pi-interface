export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (email === 'admin@souqpi.com' && password === '123456') {
    return res.status(200).json({
      success: true,
      token: 'souqpi-token-123',
      user: {
        id: 1,
        name: 'Admin',
        email: email
      }
    });
  }

  return res.status(401).json({ success: false, message: 'بيانات خاطئة' });
}
