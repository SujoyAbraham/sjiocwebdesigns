// Serverless function to check maintenance mode status
export default function handler(req, res) {
  const maintMode = process.env.MAINT_MODE || 'N';

  // Return JSON response with maintenance status
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  res.status(200).json({
    maintenance: maintMode === 'Y',
    mode: maintMode
  });
}
