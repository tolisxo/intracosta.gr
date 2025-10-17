export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // For now, just return success to test if the function works
    console.log('Quote form submitted:', req.body);
    
    // TODO: Add email sending logic here
    // This is a temporary response to test the function
    
    res.json({ 
      success: true, 
      message: 'Quote form received (email sending temporarily disabled for testing)',
      data: req.body 
    });
  } catch (error) {
    console.error('Quote form error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to process quote form',
      details: error.message 
    });
  }
}
