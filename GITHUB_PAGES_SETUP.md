# Publishing Your Portfolio with GitHub Pages

Your website is now on GitHub! Here's how to make it live:

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/mehakjotsingh/my-portfolio`
2. Click on **"Settings"** (top menu)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)` or `/docs` if you want to use a docs folder
5. Click **"Save"**

## Step 2: Wait for Deployment

- GitHub will start building your site (usually takes 1-2 minutes)
- You'll see a message: "Your site is live at..."
- The URL will be: `https://mehakjotsingh.github.io/my-portfolio/`

## Step 3: Access Your Live Website

Once deployed, your portfolio will be available at:
```
https://mehakjotsingh.github.io/my-portfolio/
```

Your "coming soon" page will be at:
```
https://mehakjotsingh.github.io/my-portfolio/coming-soon.html
```

## Step 4: Update Your Links (Optional)

If you want the coming-soon page to be the main page, you can:

### Option A: Rename files
- Rename `coming-soon.html` to `index.html` (backup current index first)
- Or create a redirect

### Option B: Create a redirect in index.html
Add a meta redirect or JavaScript redirect to point to coming-soon.html

## Step 5: Custom Domain (Optional)

To use a custom domain (like `mehakjot.com`):

1. In GitHub Pages settings, add your domain under "Custom domain"
2. Add a `CNAME` file to your repository root with your domain name
3. Configure DNS records with your domain provider

## Troubleshooting

### Site not loading?
- Check GitHub Actions tab for build errors
- Wait 2-3 minutes for deployment
- Clear browser cache
- Check the Pages settings are saved correctly

### Changes not showing?
- GitHub Pages updates automatically when you push changes
- Wait 1-2 minutes after pushing
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### 404 Error?
- Make sure `index.html` is in the root directory
- Check file names are correct (case-sensitive)

## Quick Update Workflow

Every time you make changes:

```bash
# 1. Make your changes
# 2. Stage files
git add .

# 3. Commit
git commit -m "Update portfolio"

# 4. Push to GitHub
git push

# 5. Wait 1-2 minutes for GitHub Pages to update
```

Your site will automatically update! 🚀

## Additional Resources

- GitHub Pages Docs: https://docs.github.com/en/pages
- Your repository: https://github.com/mehakjotsingh/my-portfolio
- Your live site: https://mehakjotsingh.github.io/my-portfolio/

Happy publishing! 🎉



