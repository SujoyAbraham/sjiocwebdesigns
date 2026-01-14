# Calendar Images

This folder stores monthly calendar images that are displayed on the church website.

## File Naming Convention

Calendar images should be named using the format: `YYYY-MM.png` or `YYYY-MM.jpg`

Examples:
- `2026-01.png` - January 2026
- `2026-02.png` - February 2026
- `2026-12.jpg` - December 2026

## Adding New Calendars

### Method 1: Via Admin Panel (Recommended)
1. Go to `/admin.html` and login (admin/admin)
2. In the Calendar Upload section:
   - Select the month and year
   - Enter the URL: `/public/calendars/YYYY-MM.png`
   - Click "Add Calendar"
3. Upload the actual image file to this folder via git:
   ```bash
   cp /path/to/calendar-image.png public/calendars/2026-02.png
   git add public/calendars/2026-02.png
   git commit -m "Add February 2026 calendar"
   git push
   ```

### Method 2: Direct File Upload
1. Add your calendar image to this folder with the correct naming format
2. Commit and push to git
3. Update via Admin panel OR manually add to localStorage

## Why Store Locally?

Google Drive and other external hosting services often have CORS (Cross-Origin Resource Sharing) restrictions that prevent images from loading on external websites. By storing images locally in the repository:

✅ **Reliable** - No CORS issues
✅ **Fast** - Served directly from Vercel CDN
✅ **Version controlled** - Track image changes in git
✅ **No external dependencies** - Works offline in development

## Current Calendars

- `2026-01.png` - January 2026 (87 KB)
