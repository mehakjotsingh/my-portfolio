# GitHub Authentication Setup

GitHub no longer supports password authentication. You need to use one of these methods:

## Option 1: Personal Access Token (PAT) - Easiest ⭐

### Step 1: Create a Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Portfolio Repository`
4. Select scopes: Check **`repo`** (this gives full control of private repositories)
5. Click **"Generate token"**
6. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

### Step 2: Use the Token
When pushing, use:
- **Username**: `mehakjotsingh`
- **Password**: Paste your Personal Access Token (not your GitHub password)

### Step 3: Push Your Code
```bash
git push -u origin main
```

When prompted:
- Username: `mehakjotsingh`
- Password: Your Personal Access Token

---

## Option 2: GitHub CLI (Recommended for Long-term)

### Install GitHub CLI:
```bash
brew install gh
```

### Authenticate:
```bash
gh auth login
```

Follow the prompts:
1. Choose "GitHub.com"
2. Choose "HTTPS"
3. Choose "Yes" to authenticate Git with GitHub credentials
4. Choose "Login with a web browser"
5. Follow the browser instructions

### Then push:
```bash
git push -u origin main
```

---

## Option 3: SSH Keys (Most Secure)

### Generate SSH Key:
```bash
ssh-keygen -t ed25519 -C "mehakjotsidhu@outlook.com"
```

Press Enter to accept default location, then enter a passphrase (optional).

### Add SSH Key to SSH Agent:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### Copy Public Key:
```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the entire output.

### Add to GitHub:
1. Go to: https://github.com/settings/keys
2. Click **"New SSH key"**
3. Title: `My Portfolio Mac`
4. Paste your public key
5. Click **"Add SSH key"**

### Change Remote URL to SSH:
```bash
git remote set-url origin git@github.com:mehakjotsingh/my-portfolio.git
```

### Then push:
```bash
git push -u origin main
```

---

## Quick Fix - Use Personal Access Token Now

The fastest way is Option 1. Just:
1. Create token at https://github.com/settings/tokens
2. Use it as password when pushing

Need help with any of these? Let me know!



