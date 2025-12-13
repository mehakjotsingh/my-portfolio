# GitHub Repository Setup Guide

## Step 1: Create Repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in with your account (mehakjotsidhu@outlook.com)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository name: `my-portfolio` (or any name you prefer)
5. Description: "My portfolio website with Apple-inspired design"
6. Choose **Public** or **Private** (Public is recommended for portfolios)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **"Create repository"**

## Step 2: Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Use these commands:

### Option A: If your repository name is "my-portfolio"

```bash
cd /Users/mehakjot/Documents/cursor-projects/my-portfolio
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

### Option B: If you used a different repository name

Replace `YOUR_USERNAME` with your actual GitHub username and `my-portfolio` with your repository name:

```bash
cd /Users/mehakjot/Documents/cursor-projects/my-portfolio
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Authentication

When you run `git push`, GitHub will prompt you to authenticate. You have two options:

### Option 1: GitHub CLI (Recommended)
Install GitHub CLI if you don't have it:
```bash
brew install gh
gh auth login
```

### Option 2: Personal Access Token
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Select scopes: `repo` (full control of private repositories)
4. Copy the token
5. Use it as your password when pushing (username is your GitHub username)

## Quick Commands Reference

```bash
# Check current status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Check remote configuration
git remote -v
```

## Troubleshooting

### If you get "repository not found" error:
- Double-check your GitHub username
- Make sure the repository exists on GitHub
- Verify you're using the correct URL

### If you get authentication errors:
- Use a Personal Access Token instead of password
- Make sure the token has `repo` permissions

## Next Steps

After pushing:
1. Your portfolio will be available at: `https://YOUR_USERNAME.github.io/my-portfolio/` (if you enable GitHub Pages)
2. To enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → / (root)
   - Click Save

Enjoy your portfolio! 🚀



