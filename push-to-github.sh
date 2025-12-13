#!/bin/bash

# Script to push local repository to GitHub
# Make sure you've created the repository on GitHub first!

echo "🚀 Preparing to push to GitHub..."
echo ""

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "⚠️  Remote 'origin' already exists."
    echo "Current remote URL:"
    git remote -v
    echo ""
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your GitHub username: " GITHUB_USERNAME
        read -p "Enter your repository name: " REPO_NAME
        git remote set-url origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
        echo "✅ Remote URL updated!"
    else
        echo "Using existing remote..."
    fi
else
    echo "📝 Setting up remote repository..."
    read -p "Enter your GitHub username: " GITHUB_USERNAME
    read -p "Enter your repository name: " REPO_NAME
    
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    echo "✅ Remote added!"
fi

echo ""
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✨ Done! Check your repository on GitHub."



