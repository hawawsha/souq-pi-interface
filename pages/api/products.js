export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://souqpicebdaa9713.pinet.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_NEW}/Products`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN_NEW}`
        }
      }
    );

    const data = await response.json();

    const products = data.records.map(record => ({
      id: record.id,
      name: record.fields['Name'],
      description: record.fields['Description'],
      priceInPi: record.fields['Price in Pi'],
      priceInUSD: record.fields['Price in USD'],
      category: record.fields['Category'],
      image: record.fields['Image URL'] || '',
      seller: record.fields['Seller Name'],
      status: record.fields['Status']
    }));

    return res.status(200).json({ success: true, products });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
