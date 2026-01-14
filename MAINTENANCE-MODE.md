# Maintenance Mode Configuration

This project includes a maintenance mode system that allows you to show a "Under Maintenance" page to all visitors.

## Current Status
**Maintenance Mode: ENABLED** ✅

All visitors will see the maintenance page at `/maintenance.html`

---

## How to Enable/Disable Maintenance Mode

### Method 1: Quick Toggle (Recommended)

**To ENABLE Maintenance Mode:**
```bash
cp vercel.maintenance.json vercel.json
git add vercel.json
git commit -m "Enable maintenance mode"
git push
```

**To DISABLE Maintenance Mode:**
```bash
cp vercel.normal.json vercel.json
git add vercel.json
git commit -m "Disable maintenance mode"
git push
```

---

### Method 2: Manual Edit

**To ENABLE Maintenance Mode:**

Edit `vercel.json` to contain:
```json
{
  "version": 2,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/maintenance.html"
    }
  ]
}
```

**To DISABLE Maintenance Mode:**

Edit `vercel.json` to restore normal routing (see `vercel.normal.json` for the full config).

---

## Files Explained

- **`vercel.json`** - Active configuration (currently set to maintenance mode)
- **`vercel.maintenance.json`** - Backup config for maintenance mode
- **`vercel.normal.json`** - Backup config for normal operation
- **`maintenance.html`** - The maintenance page that visitors see

---

## Testing Locally

To preview the maintenance page locally:
```bash
# Open maintenance.html in your browser
open maintenance.html

# Or with Python server
python3 -m http.server 8000
# Then visit: http://localhost:8000/maintenance.html
```

---

## Important Notes

1. **Changes take effect on next deployment** - Vercel automatically deploys when you push to GitHub
2. **Deployment time** - Usually takes 30-60 seconds for changes to go live
3. **Cache** - Visitors may need to hard refresh (Ctrl+F5 or Cmd+Shift+R) to see changes
4. **Customization** - Edit `maintenance.html` to customize the message, colors, or content

---

## Quick Commands Reference

```bash
# Check current mode
cat vercel.json

# Enable maintenance
cp vercel.maintenance.json vercel.json && git add vercel.json && git commit -m "Enable maintenance" && git push

# Disable maintenance
cp vercel.normal.json vercel.json && git add vercel.json && git commit -m "Disable maintenance" && git push
```
