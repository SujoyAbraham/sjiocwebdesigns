# SJIOC Church Website

A modern, responsive website for SJIOC Church built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Modern and clean user interface
- Easy-to-navigate sections: Home, About, Services, Events, and Contact
- Smooth scrolling and animations
- Fast local development with Vite

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/) (for version control)

## Getting Started

### 1. Initial Setup (First Time Only)

If you're setting up the project for the first time:

```bash
# Navigate to the project directory
cd SJIOCWebsite

# Install dependencies
npm install
```

### 2. Running the Development Server

To start the local development server:

```bash
npm run dev
```

This will:
- Start a local development server at `http://localhost:3000`
- Automatically open the website in your default browser
- Enable hot-reload (changes will update automatically in the browser)

### 3. Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 4. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
SJIOCWebsite/
├── css/
│   └── styles.css          # All styling for the website
├── js/
│   └── main.js             # JavaScript functionality
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## GitHub Collaboration Guide

### Setting Up Git (First Time)

If you haven't initialized Git yet:

```bash
# Initialize Git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Church website setup"
```

### Creating a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. **Do not** initialize it with README, .gitignore, or license (we already have these)
3. Copy the repository URL

### Connecting to GitHub

```bash
# Add the remote repository (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### Daily Workflow for Developers

#### Starting Work

```bash
# Make sure you have the latest changes
git pull origin main

# Create a new branch for your feature
git checkout -b feature/your-feature-name
```

#### Making Changes

```bash
# Check which files you've modified
git status

# Add files to staging
git add .
# Or add specific files:
# git add index.html css/styles.css

# Commit your changes
git commit -m "Description of what you changed"
```

#### Sharing Your Work

```bash
# Push your branch to GitHub
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub for team review.

#### Merging Changes

After your Pull Request is approved:

```bash
# Switch back to main branch
git checkout main

# Pull the latest changes (includes your merged PR)
git pull origin main

# Delete your local feature branch (optional cleanup)
git branch -d feature/your-feature-name
```

### Best Practices for Team Collaboration

1. **Always pull before starting work**: `git pull origin main`
2. **Create feature branches**: Don't work directly on main
3. **Write clear commit messages**: Describe what and why you changed
4. **Commit often**: Small, focused commits are easier to review
5. **Test locally before pushing**: Run `npm run dev` to verify your changes
6. **Use Pull Requests**: Never push directly to main; use PRs for code review
7. **Review others' code**: Provide constructive feedback on Pull Requests

### Common Git Commands Reference

```bash
# Check status of your files
git status

# See your commit history
git log --oneline

# See what changed in files
git diff

# Discard changes to a file
git checkout -- filename.html

# Switch branches
git checkout branch-name

# Create and switch to new branch
git checkout -b new-branch-name

# Delete a branch
git branch -d branch-name

# See all branches
git branch -a
```

## Customization Guide

### Updating Content

1. **Church Name**: Search and replace "SJIOC Church" in `index.html`
2. **Colors**: Edit CSS variables in `css/styles.css` (lines 8-14)
3. **Contact Information**: Update the contact section in `index.html`
4. **Service Times**: Modify the services section in `index.html`
5. **Events**: Add or remove events in the events section

### Adding New Pages

1. Create a new HTML file (e.g., `about.html`)
2. Copy the navigation from `index.html`
3. Add a link to the new page in the navigation menu
4. Use the same CSS file for consistent styling

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can change it in `vite.config.js`:

```javascript
server: {
  port: 3001, // Change to any available port
  open: true
}
```

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Changes Not Showing

1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Restart the dev server

## Support

For questions or issues:
- Create an issue in the GitHub repository
- Contact the development team
- Check the [Vite documentation](https://vitejs.dev/)

## License

MIT License - Feel free to use this project for your church or organization.

---

Built with dedication for SJIOC Church community