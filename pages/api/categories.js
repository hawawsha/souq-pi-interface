export default function handler(req, res) {
  const categories = [
    { id: 1, name: 'إلكترونيات' },
    { id: 2, name: 'ملابس' },
    { id: 3, name: 'طعام' },
  ];

  return res.status(200).json({ success: true, categories });
}
