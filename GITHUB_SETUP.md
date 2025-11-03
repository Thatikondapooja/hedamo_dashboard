# GitHub Setup and Workflow

## Initial GitHub Repository Setup

### Step 1: Create Repository on GitHub

1. Go to [github.com](https://github.com) and log in
2. Click "+" icon → "New repository"
3. Repository name: `hedamo-dashboard`
4. Description: "AI-powered product transparency dashboard"
5. Choose Public or Private
6. Click "Create repository"

### Step 2: Initialize Local Git Repository

\`\`\`bash
cd hedamo-dashboard

# Initialize git if not already done
git init

# Add GitHub origin
git remote add origin https://github.com/yourusername/hedamo-dashboard.git

# Rename branch to main if needed
git branch -M main

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Hedamo transparency dashboard"

# Push to GitHub
git push -u origin main
\`\`\`

Replace `yourusername` with your GitHub username.

### Step 3: Verify Remote Connection

\`\`\`bash
git remote -v
\`\`\`

Should show:
\`\`\`
origin  https://github.com/yourusername/hedamo-dashboard.git (fetch)
origin  https://github.com/yourusername/hedamo-dashboard.git (push)
\`\`\`

## Daily Workflow

### Pull Latest Changes
\`\`\`bash
git pull origin main
\`\`\`

### Create Feature Branch
\`\`\`bash
git checkout -b feature/your-feature-name

# Or from main
git checkout -b feature/your-feature-name main
\`\`\`

Branch naming conventions:
- Features: `feature/add-filters`
- Bug fixes: `fix/product-table-sorting`
- Documentation: `docs/update-readme`

### Make Changes and Commit
\`\`\`bash
# Check status
git status

# Stage changes
git add .

# Or stage specific files
git add components/products/product-table.tsx

# Commit
git commit -m "Add product filtering functionality"

# Push to remote
git push origin feature/your-feature-name
\`\`\`

Commit message conventions:
- ✨ New feature: `✨ Add product search`
- 🐛 Bug fix: `🐛 Fix dark mode toggle`
- 📝 Documentation: `📝 Update deployment guide`
- ♻️ Refactor: `♻️ Simplify product store`
- 🎨 Styling: `🎨 Update card styling`

### Create Pull Request

1. Go to repository on GitHub
2. Click "Compare & pull request"
3. Add title and description
4. Click "Create pull request"
5. Wait for Vercel preview deployment
6. Review changes
7. Merge to main

### Merge and Delete Branch

After PR is approved:

\`\`\`bash
# Merge locally (optional)
git checkout main
git merge feature/your-feature-name

# Delete local branch
git branch -d feature/your-feature-name

# Delete remote branch
git push origin --delete feature/your-feature-name
\`\`\`

Or use GitHub UI:
1. Click "Squash and merge" or "Merge pull request"
2. Click "Delete branch"

## Common Git Commands

\`\`\`bash
# View commit history
git log

# View specific commits
git log --oneline

# Check changes before committing
git diff

# Undo uncommitted changes
git checkout -- filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Stash changes temporarily
git stash

# Apply stashed changes
git stash pop

# View all branches
git branch -a

# Switch branches
git checkout branch-name

# Sync fork with original repo
git fetch upstream
git merge upstream/main
\`\`\`

## Push to GitHub

### First Time Setup

\`\`\`bash
# Copy files to local git repo (if not done)
cd /path/to/hedamo-dashboard

# Initialize if needed
git init

# Add remote
git remote add origin https://github.com/yourusername/hedamo-dashboard.git

# Create initial commit
git add .
git commit -m "Initial commit"

# Push to GitHub
git push -u origin main
\`\`\`

### Regular Pushes

\`\`\`bash
# After making changes
git add .
git commit -m "Your commit message"
git push origin main
\`\`\`

### Multiple Commits

\`\`\`bash
# Make changes
git add file1.tsx
git commit -m "Update file1"

# Make more changes
git add file2.tsx
git commit -m "Update file2"

# Push all commits
git push origin feature-branch
\`\`\`

## GitHub Settings

### Enable Branch Protection

1. Go to Settings → Branches
2. Click "Add rule"
3. Branch name pattern: `main`
4. Enable "Require a pull request before merging"
5. Enable "Require status checks to pass"

### Add Collaborators

1. Settings → Collaborators
2. Click "Add people"
3. Search for username
4. Select permission level
5. Send invite

## Troubleshooting

### Authentication Error

\`\`\`bash
# Check current origin
git remote -v

# Update if using HTTPS
git remote set-url origin https://github.com/yourusername/hedamo-dashboard.git

# Or use SSH
git remote set-url origin git@github.com:yourusername/hedamo-dashboard.git
\`\`\`

### Merge Conflicts

When pulling or merging:

\`\`\`bash
# View conflicts
git status

# Edit conflicted files manually

# After resolving
git add .
git commit -m "Resolve merge conflicts"
git push origin branch-name
\`\`\`

### Accidentally Committed to Wrong Branch

\`\`\`bash
# Undo last commit
git reset --soft HEAD~1

# Switch to correct branch
git checkout correct-branch-name

# Commit again
git add .
git commit -m "Your message"
git push origin correct-branch-name
