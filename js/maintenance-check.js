// Maintenance Mode Check
// This script runs on every page load and redirects to maintenance if needed
(function() {
  // Don't check if already on maintenance page
  if (window.location.pathname.includes('maintenance.html')) {
    console.log('[Maintenance Check] On maintenance page, skipping check');
    return;
  }

  console.log('[Maintenance Check] Checking maintenance status...');

  // Check maintenance status
  fetch('/api/check-maintenance')
    .then(response => {
      console.log('[Maintenance Check] API response status:', response.status);
      return response.json();
    })
    .then(data => {
      console.log('[Maintenance Check] API data:', data);
      if (data.maintenance === true) {
        console.log('[Maintenance Check] Maintenance mode is ON, redirecting...');
        // Redirect to maintenance page
        window.location.replace('/maintenance.html');
      } else {
        console.log('[Maintenance Check] Maintenance mode is OFF, continuing normally');
      }
    })
    .catch(error => {
      console.error('[Maintenance Check] Error checking maintenance status:', error);
      // Fail silently - allow page to load normally if check fails
    });
})();
