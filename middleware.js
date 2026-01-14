// Vercel Edge Middleware for Maintenance Mode Control
// Checks MAINT_MODE environment variable: Y = maintenance, N = normal

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - Static files (images, fonts, etc.)
     */
    '/((?!.*\\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot)).*)',
  ],
};

export default function middleware(request) {
  const url = new URL(request.url);
  const maintMode = process.env.MAINT_MODE || 'N';

  // Check if on maintenance page
  const isMaintenancePage = url.pathname === '/maintenance.html';

  // If maintenance mode is ON and user is NOT on maintenance page
  if (maintMode === 'Y' && !isMaintenancePage) {
    const maintenanceUrl = new URL('/maintenance.html', request.url);
    return Response.redirect(maintenanceUrl, 307);
  }

  // If maintenance mode is OFF and user IS on maintenance page, redirect to home
  if (maintMode === 'N' && isMaintenancePage) {
    const homeUrl = new URL('/', request.url);
    return Response.redirect(homeUrl, 307);
  }

  // Allow request to continue normally
  return;
}
