# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## 🔥 Vercel (Recommended - Easiest)

### Method 1: GitHub Integration (Recommended)

1. **Create GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Upload all project files to the repository

2. **Deploy with Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a React app
   - Click "Deploy"

3. **Auto-deployment**: Any future commits to your GitHub repo will automatically trigger new deployments!

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# In your project directory
vercel

# Follow the prompts
```

## 🌐 Netlify

### Method 1: Drag & Drop

1. **Build the project**:
   ```bash
   yarn build
   ```

2. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Drag the `build` folder to Netlify
   - Your site is live!

### Method 2: GitHub Integration

1. Connect your GitHub repository
2. Build settings:
   - Build command: `yarn build`
   - Publish directory: `build`

## 📦 GitHub Pages

1. **Install gh-pages**:
   ```bash
   yarn add --dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "yarn build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**:
   ```bash
   yarn deploy
   ```

## ☁️ AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Choose "Host your web app"
3. Connect your GitHub repository
4. Build settings (auto-detected):
   - Build command: `yarn build`
   - Output directory: `build`

## 🔧 Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Click "Domains" tab
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:
1. Go to "Domain management"
2. Add custom domain
3. Follow DNS setup instructions

## 🔍 Environment Variables

If you need environment variables in production:

### Vercel:
1. Go to Project Settings → Environment Variables
2. Add variables (prefix with `REACT_APP_`)

### Netlify:
1. Go to Site Settings → Build & Deploy → Environment Variables
2. Add variables

## 📈 Performance Optimization

Before deploying, consider:

1. **Build optimization**:
   ```bash
   yarn build
   ```

2. **Check bundle size**:
   ```bash
   npx react-scripts build --analyze
   ```

3. **Lighthouse audit**: Test performance in Chrome DevTools

## 🛡️ Security Headers

Add to your hosting platform:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## 📱 Testing After Deployment

1. **Different devices**: Test on mobile, tablet, desktop
2. **Different browsers**: Chrome, Firefox, Safari, Edge
3. **Performance**: Use Google PageSpeed Insights
4. **Functionality**: Test all links, forms, and interactions

## 🆘 Troubleshooting

### Common Issues:

1. **Build fails**: Check node version compatibility
2. **White screen**: Check console for errors
3. **Assets not loading**: Verify build paths
4. **Form not working**: Add form handling service

### Quick Fixes:

```bash
# Clear node modules and reinstall
rm -rf node_modules yarn.lock
yarn install

# Clear build cache
rm -rf build
yarn build
```

## 🔄 Continuous Deployment

Once set up with GitHub integration:
1. Make changes to your code
2. Push to GitHub
3. Site automatically updates!

---

🎉 **Congratulations!** Your portfolio is now live and accessible to the world!