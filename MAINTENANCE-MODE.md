# Maintenance Mode Configuration

This project includes a maintenance mode system controlled by a Vercel environment variable. No code deployments needed to toggle maintenance mode!

## Current Status
**Maintenance Mode: Controlled by MAINT_MODE environment variable**

- `MAINT_MODE = Y` → Shows maintenance page to all visitors
- `MAINT_MODE = N` → Site functions normally

---

## How to Enable/Disable Maintenance Mode (Vercel Dashboard)

### ⚡ Quick Toggle (No Deployment Required!)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **sjiocwebdesigns**
3. Go to **Settings** → **Environment Variables**
4. Find `MAINT_MODE` variable

**To ENABLE Maintenance Mode:**
- Set `MAINT_MODE = Y`
- Click **Save**
- Changes take effect immediately (no deployment needed!)

**To DISABLE Maintenance Mode:**
- Set `MAINT_MODE = N`
- Click **Save**
- Site resumes normal operation immediately

### 📝 First Time Setup (If MAINT_MODE doesn't exist)

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Click **Add New**
3. Enter:
   - **Key**: `MAINT_MODE`
   - **Value**: `Y` (for maintenance) or `N` (for normal)
   - **Environments**: Check all (Production, Preview, Development)
4. Click **Save**
5. Site will redeploy automatically

---

## How It Works

The maintenance mode system uses:

1. **`middleware.js`** - Vercel Edge Middleware that checks the `MAINT_MODE` environment variable
2. **`maintenance.html`** - The maintenance page visitors see when `MAINT_MODE = Y`
3. **`vercel.json`** - Normal routing configuration

### Logic Flow:
```
User visits any page
    ↓
Middleware checks MAINT_MODE env variable
    ↓
If MAINT_MODE = "Y" → Redirect to /maintenance.html
If MAINT_MODE = "N" → Allow normal access
```

---

## Files Explained

- **`middleware.js`** - Edge Middleware that checks environment variable and redirects accordingly
- **`maintenance.html`** - The maintenance page that visitors see
- **`vercel.json`** - Normal routing configuration
- **`vercel.maintenance.json`** - *(Legacy)* Old manual maintenance config
- **`vercel.normal.json`** - *(Legacy)* Old normal config

---

## Testing Locally

### Test Maintenance Page:
```bash
# Open maintenance.html directly
open maintenance.html

# Or with local server
python3 -m http.server 8000
# Visit: http://localhost:8000/maintenance.html
```

### Test with Environment Variable:
```bash
# Enable maintenance mode locally
export MAINT_MODE=Y
npm run dev

# Disable maintenance mode locally
export MAINT_MODE=N
npm run dev
```

---

## Checking Current Status

### Via Vercel Dashboard:
1. Go to Vercel → Your Project → Settings → Environment Variables
2. Check the value of `MAINT_MODE`

### Via Vercel CLI:
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login
vercel login

# List environment variables
vercel env ls
```

### Test Live Site:
```bash
# Check if maintenance page is active
curl -I https://sjiocwebdesigns.vercel.app
# If redirected to /maintenance.html, maintenance mode is ON
```

---

## Important Notes

1. **No Deployment Required** - Changing environment variables takes effect immediately
2. **Instant Toggle** - Changes apply within seconds (no waiting for git push/build)
3. **All Environments** - Make sure `MAINT_MODE` is set for Production, Preview, and Development
4. **Default Behavior** - If `MAINT_MODE` is not set, defaults to `N` (normal operation)
5. **Cache** - Visitors may need to hard refresh (Ctrl+F5 or Cmd+Shift+R) to see changes
6. **Customization** - Edit `maintenance.html` to customize the message, colors, or content

---

## Quick Commands Reference

```bash
# Check environment variable in Vercel CLI
vercel env ls

# Pull environment variables locally
vercel env pull

# Test locally with maintenance mode ON
MAINT_MODE=Y npm run dev

# Test locally with maintenance mode OFF
MAINT_MODE=N npm run dev
```

---

## Advantages of Environment Variable Approach

✅ **No Code Changes** - Toggle without touching code
✅ **Instant Updates** - No deployment wait time
✅ **Easy Rollback** - Switch back instantly if needed
✅ **No Git History Pollution** - No commit spam for mode toggles
✅ **Team Friendly** - Anyone with Vercel access can toggle
