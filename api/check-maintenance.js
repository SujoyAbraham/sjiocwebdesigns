// Serverless function to check maintenance mode status
export default function handler(req, res) {
  const maintMode = process.env.MAINT_MODE || 'N';

  // Set headers to prevent caching
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  // Return maintenance status
  return res.status(200).json({
    maintenance: maintMode === 'Y',
    mode: maintMode,
    timestamp: new Date().toISOString()
  });
}
