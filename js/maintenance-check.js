// Maintenance Mode Check
// This script runs on every page load and redirects to maintenance if needed
(function() {
  // Don't check if already on maintenance page
  if (window.location.pathname.includes('maintenance.html')) {
    return;
  }

  // Check maintenance status
  fetch('/api/check-maintenance')
    .then(response => response.json())
    .then(data => {
      if (data.maintenance === true) {
        // Redirect to maintenance page
        window.location.replace('/maintenance.html');
      }
    })
    .catch(error => {
      console.error('Error checking maintenance status:', error);
      // Fail silently - allow page to load normally if check fails
    });
})();
