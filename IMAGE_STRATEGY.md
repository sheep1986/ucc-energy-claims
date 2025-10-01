# IMAGE & ICON STRATEGY - UTILITY COMMISSION CLAIMS

## 🎨 VISUAL PHILOSOPHY
**Principle:** Abstract over literal, premium over generic
- No cheesy stock photos of people shaking hands
- No generic office buildings or call centers
- Abstract geometric patterns and gradients
- Data visualizations over photographs
- Icons that feel premium and custom

---

## 📐 STANDARD IMAGE SIZES

### Hero Images
```css
/* Desktop */
--hero-desktop: 1920x1080px (16:9)
--hero-tablet: 1024x768px (4:3)
--hero-mobile: 390x844px (9:19.5)

/* WebP + fallback JPG */
/* Max file size: 200KB compressed */
```

### Section Images
```css
/* Feature sections */
--section-large: 800x600px
--section-medium: 600x400px
--section-small: 400x300px
--section-square: 500x500px

/* Always 2x for retina */
/* Max file size: 100KB */
```

### Card Images
```css
/* Consistent aspect ratios */
--card-landscape: 400x250px (16:10)
--card-portrait: 300x400px (3:4)
--card-square: 350x350px (1:1)
--card-wide: 600x200px (3:1)

/* Max file size: 50KB */
```

### Thumbnails
```css
/* Blog, testimonials, etc */
--thumb-large: 200x200px
--thumb-medium: 150x150px
--thumb-small: 80x80px
--thumb-mini: 48x48px

/* Max file size: 20KB */
```

---

## 🔷 ICON SYSTEM

### Icon Library: Tabler Icons + Custom
```jsx
// Primary icon set
import {
  IconCalculator,
  IconBolt,
  IconCurrencyPound,
  IconChartBar,
  IconShieldCheck,
  IconClock,
  IconTrendingUp,
  IconBuilding,
  IconMail,
  IconCheck,
  IconX,
  IconAlertCircle,
  IconInfoCircle,
  IconChevronRight,
  IconArrowRight,
  IconUsers,
  IconFileInvoice,
  IconHandshake,
  IconAward,
  IconLock
} from '@tabler/icons-react';

// Icon sizes (consistent across site)
const iconSizes = {
  xs: 16,   // Inline text
  sm: 20,   // Buttons
  md: 24,   // Default
  lg: 32,   // Features
  xl: 48,   // Hero sections
  xxl: 64   // Main focal points
};

// Icon colors
const iconColors = {
  primary: '#00D4FF',    // Electric cyan
  success: '#10B981',    // Green
  warning: '#F59E0B',    // Amber
  danger: '#EF4444',     // Red
  neutral: '#6B7280',    // Gray
  white: '#FFFFFF',      // White
  gradient: 'url(#icon-gradient)' // Custom gradient
};
```

### Custom Icon Specifications
```svg
<!-- Money Stack Icon -->
<svg width="48" height="48" viewBox="0 0 48 48">
  <defs>
    <linearGradient id="money-gradient">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#FFA500"/>
    </linearGradient>
  </defs>
  <!-- Custom path here -->
</svg>

<!-- Energy Bolt Icon -->
<svg width="48" height="48" viewBox="0 0 48 48">
  <defs>
    <linearGradient id="energy-gradient">
      <stop offset="0%" stop-color="#00D4FF"/>
      <stop offset="100%" stop-color="#0A0E27"/>
    </linearGradient>
  </defs>
  <!-- Custom path here -->
</svg>
```

---

## 🖼️ IMAGE REQUIREMENTS BY PAGE

### HOMEPAGE
```yaml
Hero Section:
  - Background: Abstract gradient mesh (CSS generated)
  - Particle effect: Canvas animation (no image)
  - Pattern overlay: SVG geometric pattern (2KB)

Trust Section:
  - Company logos: 200x80px (grayscale, 10KB each)
    * British Gas
    * E.ON
    * SSE
    * Scottish Power
    * EDF Energy
  
Calculator Section:
  - Background: Glassmorphic blur (CSS only)
  - Icons: Tabler icons (vector)

Success Stories:
  - Industry icons: 64x64px (vector)
  - No photos of people (privacy)

Footer:
  - Security badges: 120x40px
    * SSL Secured
    * ICO Registered
    * GDPR Compliant
```

### HOW IT WORKS
```yaml
Process Section:
  - Step 1 Icon: Calculator (vector, 48px)
  - Step 2 Icon: Document check (vector, 48px)
  - Step 3 Icon: Money bag (vector, 48px)
  - Timeline graphic: SVG animation (10KB)
  - Process diagram: 800x400px infographic

Visual Elements:
  - Abstract shapes: CSS generated
  - Data visualization: Chart.js (no images)
  - Success metrics: Animated counters (no images)
```

### SUCCESS STORIES
```yaml
Hero:
  - Background: Success gradient pattern (CSS)
  
Testimonials:
  - Business type icons: 48x48px (vector)
  - Industry badges: 100x100px
  - No people photos (GDPR/privacy)
  
Statistics:
  - Chart graphics: Canvas/SVG (dynamic)
  - Trophy icon: 64px (vector)
```

### SECTOR LANDING PAGES
```yaml
Each sector needs:
  - Hero icon: 128x128px (custom illustrated)
  - Industry photo: 800x450px (abstract/architectural)
  - Process icons: 48x48px (3-4 per page)
  
Hospitality:
  - Abstract hotel facade (geometric)
  - Restaurant pattern
  
Healthcare:
  - Medical cross abstraction
  - Care home geometric
  
Retail:
  - Shopping abstract pattern
  - Store front geometric
  
Manufacturing:
  - Factory silhouette (simplified)
  - Production line abstract
  
Education:
  - School building geometric
  - Graduate cap abstraction
  
Offices:
  - Skyline silhouette
  - Office grid pattern
```

### CALCULATOR (Modal)
```yaml
Step indicators:
  - Progress dots: CSS only
  - Step numbers: CSS with gradients
  
Input elements:
  - Slider track: CSS gradients
  - Radio buttons: Custom CSS
  - Checkmarks: SVG animation
  
Results:
  - Confetti: Canvas animation
  - Success checkmark: Animated SVG
  - Money counter: CSS animation
```

### CONTACT PAGE
```yaml
Header:
  - Abstract communication waves (CSS)
  
Contact methods:
  - Email icon: 48px
  - Chat icon: 48px
  - No phone icon (intentional)
  
Map replacement:
  - UK outline with pins: SVG (20KB)
  - "100% Digital" badge: 200x60px
```

---

## 🎨 IMAGE STYLE GUIDE

### Color Treatment
```css
/* All images should have consistent treatment */
.image-container {
  /* Subtle gradient overlay */
  position: relative;
}

.image-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(10, 14, 39, 0.1),
    rgba(0, 212, 255, 0.05)
  );
  pointer-events: none;
}

/* Hover effect */
.image-container:hover img {
  transform: scale(1.05);
  filter: brightness(1.1);
}
```

### Abstract Patterns to Create
1. **Energy Flow** - Curved lines suggesting movement
2. **Network Grid** - Connected dots showing UK coverage
3. **Money Cascade** - Falling geometric shapes
4. **Data Stream** - Binary/digital pattern
5. **Shield Pattern** - Security/trust visualization

### Photo Guidelines
- **NO stock photos of:**
  - People in suits
  - Generic handshakes
  - Call center workers
  - Happy customers (privacy)
  
- **YES to:**
  - Abstract architecture
  - Geometric patterns
  - Data visualizations
  - UK landmarks (stylized)
  - Industry equipment (abstract)

---

## 🚀 PERFORMANCE OPTIMIZATION

### Image Formats
```javascript
// Priority order
1. WebP (primary format)
2. JPEG (fallback for photos)
3. PNG (only for transparency)
4. SVG (all icons and illustrations)

// Implementation
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### Optimization Rules
- **Lazy load** everything below fold
- **Blur placeholders** for hero images
- **Progressive JPEGs** for large images
- **Inline critical SVGs**
- **CDN delivery** with cache headers

### Size Limits
```yaml
Hero images: < 200KB
Section images: < 100KB
Card images: < 50KB
Icons: < 5KB (preferably inline SVG)
Logos: < 20KB
Total page weight: < 2MB
```

---

## 📦 ICON COMPONENTS

### Reusable Icon Component
```jsx
// Icon component with consistent styling
const Icon = ({ 
  name, 
  size = 'md', 
  color = 'primary',
  gradient = false,
  pulse = false,
  className = ''
}) => {
  const sizes = {
    xs: 16, sm: 20, md: 24, lg: 32, xl: 48, xxl: 64
  };
  
  const colors = {
    primary: '#00D4FF',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    neutral: '#6B7280',
    white: '#FFFFFF'
  };
  
  return (
    <span 
      className={`
        icon-wrapper 
        ${pulse ? 'pulse-animation' : ''}
        ${className}
      `}
    >
      {/* Icon implementation */}
    </span>
  );
};
```

---

## 🎯 SPECIFIC IMAGE NEEDS

### Must Create/Source:
1. **UCC Logo variations**
   - Full logo (already have)
   - Icon only version
   - White version
   - Gradient version

2. **Industry Icons Set** (8 custom icons)
   - Hospitality
   - Retail
   - Manufacturing
   - Healthcare
   - Education
   - Offices
   - Warehouses
   - Restaurants

3. **Process Illustrations** (3 main)
   - Calculate (abstract calculator)
   - Claim (document processing)
   - Receive (money transfer)

4. **Trust Badges**
   - "21 Day Guarantee"
   - "No Win No Fee"
   - "100% Digital"
   - "Bank Level Security"

5. **Background Patterns**
   - Geometric mesh (hero)
   - Wave pattern (section dividers)
   - Dot grid (testimonials)
   - Circuit pattern (security)

---

## 🎬 ANIMATION SPECIFICATIONS

### Icon Animations
```css
/* Pulse effect for important icons */
@keyframes icon-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

/* Rotation for loading/processing */
@keyframes icon-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Draw effect for success */
@keyframes icon-draw {
  from { stroke-dashoffset: 100; }
  to { stroke-dashoffset: 0; }
}
```

### Image Transitions
```css
/* Fade in on scroll */
.image-fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.image-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Parallax effect */
.image-parallax {
  transform: translateY(var(--scroll-y) * 0.5);
}
```

---

## 📁 FILE STRUCTURE

```
/public/images/
├── logo/
│   ├── ucc-logo.png (original)
│   ├── ucc-logo-white.svg
│   ├── ucc-logo-icon.svg
│   └── ucc-logo-gradient.svg
├── icons/
│   ├── industries/
│   │   ├── hospitality.svg
│   │   ├── retail.svg
│   │   └── ...
│   ├── process/
│   │   ├── calculate.svg
│   │   ├── claim.svg
│   │   └── receive.svg
│   └── ui/
│       ├── arrow-right.svg
│       ├── check.svg
│       └── ...
├── patterns/
│   ├── hero-mesh.svg
│   ├── wave-divider.svg
│   └── dot-grid.svg
├── badges/
│   ├── 21-day.svg
│   ├── no-win-no-fee.svg
│   └── 100-digital.svg
└── suppliers/
    ├── british-gas.png
    ├── eon.png
    └── ...
```

---

## ✅ IMAGE CHECKLIST

### Before Launch:
- [ ] All images optimized to WebP
- [ ] Fallback formats provided
- [ ] Alt text for accessibility
- [ ] Lazy loading implemented
- [ ] CDN configured
- [ ] Blur placeholders added
- [ ] Retina versions available
- [ ] Total page weight < 2MB
- [ ] Loading performance < 2s
- [ ] No copyright violations

This image strategy ensures consistency, performance, and premium feel across the entire website while maintaining the modern, digital-first aesthetic.