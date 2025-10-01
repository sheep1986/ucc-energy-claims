# NETLIFY DEPLOYMENT GUIDE - UTILITY COMMISSION CLAIMS

## 🚀 DEPLOYMENT OVERVIEW

This guide ensures error-free deployment to Netlify via GitHub with all components properly configured.

---

## 📦 PROJECT STRUCTURE FOR DEPLOYMENT

```
utility-commission-claims/
├── public/                    # Static assets
│   ├── images/
│   │   ├── logo/
│   │   │   └── ucc-logo.png
│   │   ├── icons/
│   │   └── patterns/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   └── App.jsx / main.jsx
├── .gitignore
├── .env.example
├── netlify.toml               # Netlify configuration
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js / next.config.js
```

---

## ⚙️ NETLIFY CONFIGURATION FILES

### 1. netlify.toml (Root Directory)
```toml
# Production build settings
[build]
  # For Vite/React
  command = "npm run build"
  publish = "dist"
  
  # For Next.js
  # command = "npm run build"
  # publish = ".next"

# Environment variables
[build.environment]
  NODE_VERSION = "20.11.0"
  NPM_VERSION = "10.2.4"

# Redirects for SPA
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Headers for security and performance
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Form handling
[forms]
  mode = "netlify"

# Plugins for Next.js (if using Next.js)
# [[plugins]]
#   package = "@netlify/plugin-nextjs"
```

### 2. package.json Scripts
```json
{
  "name": "utility-commission-claims",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write 'src/**/*.{js,jsx,css}'",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "prebuild": "npm run lint && npm run type-check"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.3",
    "@tabler/icons-react": "^3.1.0",
    "framer-motion": "^11.0.3",
    "react-countup": "^6.5.0",
    "react-intersection-observer": "^9.5.3",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.56.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.33",
    "prettier": "^3.2.4",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3",
    "vite": "^5.0.12",
    "vitest": "^1.2.2"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

### 3. .gitignore
```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/
*.lcov
.nyc_output

# Production
dist/
build/
.next/
out/

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Editor directories
.idea/
.vscode/
*.swp
*.swo
*~
.DS_Store
Thumbs.db

# Netlify
.netlify/

# TypeScript
*.tsbuildinfo
next-env.d.ts

# Logs
logs/
*.log

# Cache
.cache/
.parcel-cache/
.turbo/
.vercel/
```

### 4. Environment Variables (.env.example)
```env
# Email Configuration
VITE_EMAIL_SERVICE_URL=https://api.emailservice.com
VITE_EMAIL_TO=hello@utilitycommissionclaims.co.uk

# Analytics (Optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_HOTJAR_ID=XXXXXXX

# API Keys (if needed)
VITE_API_KEY=your_api_key_here

# Environment
VITE_ENV=production
```

---

## 🏗️ VITE CONFIGURATION (vite.config.js)

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
    }
  },
  build: {
    // Ensure clean builds
    emptyOutDir: true,
    
    // Output directory
    outDir: 'dist',
    
    // Generate source maps for debugging
    sourcemap: process.env.NODE_ENV === 'development',
    
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'react-countup'],
          icons: ['@tabler/icons-react'],
        },
        // Asset naming for cache busting
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    },
    
    // Performance thresholds
    chunkSizeWarningLimit: 1000,
    
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: true,
      }
    }
  },
  
  // Development server
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  
  // Preview server
  preview: {
    port: 4173,
  },
  
  // Define global constants
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  }
})
```

---

## 🎨 TAILWIND CONFIGURATION (tailwind.config.js)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0A0E27',
        electric: '#00D4FF',
        gold: '#FFD700',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'display': ['SF Pro Display', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'blob': 'blob 8s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        }
      }
    },
  },
  plugins: [],
}
```

---

## 🚀 GITHUB DEPLOYMENT WORKFLOW

### 1. Initialize Git Repository
```bash
# Initialize repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit - UCC website"

# Add remote origin
git remote add origin https://github.com/yourusername/utility-commission-claims.git

# Push to main branch
git push -u origin main
```

### 2. GitHub Actions Workflow (.github/workflows/deploy.yml)
```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run type checking
      run: npm run type-check
    
    - name: Run tests
      run: npm test
    
    - name: Build project
      run: npm run build
    
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v2.1
      with:
        publish-dir: './dist'
        production-branch: main
        github-token: ${{ secrets.GITHUB_TOKEN }}
        deploy-message: "Deploy from GitHub Actions"
        enable-pull-request-comment: true
        enable-commit-comment: true
        overwrites-pull-request-comment: true
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
      timeout-minutes: 1
```

---

## ✅ PRE-DEPLOYMENT CHECKLIST

### Code Quality
- [ ] All components use proper React/JSX syntax
- [ ] No console.log statements in production
- [ ] All imports are correctly resolved
- [ ] PropTypes or TypeScript types defined
- [ ] No unused variables or imports

### Performance
- [ ] Images optimized and in WebP format
- [ ] Lazy loading implemented for images
- [ ] Code splitting configured
- [ ] Bundle size under 500KB (initial)
- [ ] Lighthouse score > 90

### SEO & Accessibility
- [ ] Meta tags configured
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Alt text for all images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works

### Security
- [ ] Environment variables not exposed
- [ ] CSP headers configured
- [ ] No sensitive data in code
- [ ] HTTPS enforced
- [ ] Form validation implemented

### Testing
- [ ] Build runs without errors locally
- [ ] All links work correctly
- [ ] Forms submit to correct email
- [ ] Mobile responsive tested
- [ ] Cross-browser tested

---

## 🔧 COMMON BUILD ERRORS & FIXES

### 1. Module Not Found
```bash
# Error: Cannot resolve module '@/components/Header'
# Fix: Check import paths and aliases in vite.config.js
```

### 2. Build Memory Issues
```bash
# Error: JavaScript heap out of memory
# Fix: Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### 3. ESLint Errors
```bash
# Error: ESLint errors preventing build
# Fix: Run lint and fix
npm run lint -- --fix
```

### 4. Image Optimization
```bash
# Error: Image files too large
# Fix: Use WebP format and compress
# Install: npm install --save-dev @squoosh/lib
```

### 5. Environment Variables
```bash
# Error: Environment variables undefined
# Fix: Ensure VITE_ prefix for Vite apps
VITE_API_KEY=value (not REACT_APP_API_KEY)
```

---

## 📊 NETLIFY BUILD SETTINGS

### Via Netlify Dashboard:
1. **Build Command:** `npm run build`
2. **Publish Directory:** `dist` (for Vite) or `.next` (for Next.js)
3. **Node Version:** 20.11.0 (set in Environment)
4. **Production Branch:** `main`
5. **Deploy Previews:** Enabled for PRs
6. **Branch Deploys:** All branches

### Environment Variables in Netlify:
```
VITE_EMAIL_TO = hello@utilitycommissionclaims.co.uk
VITE_ENV = production
NODE_VERSION = 20.11.0
```

---

## 🎯 POST-DEPLOYMENT VERIFICATION

1. **Check Build Logs:** Review Netlify build logs for warnings
2. **Test Live Site:** Verify all functionality works
3. **Check Performance:** Run Lighthouse audit
4. **Verify Forms:** Test form submissions
5. **Monitor Analytics:** Ensure tracking works
6. **Test on Mobile:** Verify responsive design
7. **Check SEO:** Verify meta tags and sitemap

---

## 🔄 CONTINUOUS DEPLOYMENT

### Automatic Deployments:
- Push to `main` branch triggers production deploy
- Pull requests create preview deployments
- Branch pushes create branch deploys

### Manual Deployments:
```bash
# Using Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

---

## 📝 IMPORTANT NOTES

1. **No Server-Side Code:** Netlify serves static files, use Netlify Functions for server-side logic
2. **Form Handling:** Use Netlify Forms or external service
3. **Environment Variables:** Must prefix with `VITE_` for Vite apps
4. **Build Time:** Keep under 15 minutes to avoid timeout
5. **File Names:** Avoid special characters and spaces
6. **Case Sensitivity:** File imports are case-sensitive on Netlify

This configuration ensures smooth deployment from GitHub to Netlify with zero build errors!