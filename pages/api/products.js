export default function handler(req, res) {
  const products = [
    { id: 1, name: 'منتج 1', price: 10, category: 'إلكترونيات', image: '' },
    { id: 2, name: 'منتج 2', price: 20, category: 'ملابس', image: '' },
    { id: 3, name: 'منتج 3', price: 30, category: 'إلكترونيات', image: '' },
  ];

  return res.status(200).json({ success: true, products });
}
