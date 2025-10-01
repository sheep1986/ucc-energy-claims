# UTILITY COMMISSION CLAIMS - Website Structure & Navigation

## 🏗️ COMPLETE SITE MAP

### Primary Pages (Main Navigation)
```
HOME
├── Hero Calculator
├── How It Works
├── Success Stories Ticker
├── Why Choose UCC
└── Trust Indicators

CLAIMS CALCULATOR (CTA Button - Different Style)
├── Step 1: Quick Assessment
├── Step 2: Eligibility Check
├── Step 3: Value Calculation
├── Step 4: Claim Submission
└── Success Confirmation

HOW IT WORKS
├── The Problem (Hidden Commissions)
├── Our Process (3 Simple Steps)
├── Timeline (21-Day Guarantee)
├── No Win, No Fee Explained
└── Start Your Claim CTA

SUCCESS STORIES
├── Recent Claims Ticker
├── Case Studies by Industry
├── Client Testimonials
├── Statistics Dashboard
└── Your Industry Calculator

BUSINESS SECTORS (Dropdown)
├── Hospitality & Hotels
├── Retail & Shops  
├── Manufacturing
├── Healthcare & Care Homes
├── Education & Schools
├── Offices & Professional Services
├── Warehouses & Logistics
└── Restaurants & Cafes

RESOURCES
├── Energy Claims Guide
├── FAQ
├── Blog/News
├── Energy Market Updates
└── Claim Deadline Calculator

CONTACT
├── Email Form Only
├── WhatsApp Widget
├── Live Chat
└── Social Links
```

---

## 🧭 NAVIGATION MENU DESIGN

### Desktop Navigation
```jsx
<Navigation>
  <Logo>
    <img src="ucc-logo.png" alt="UCC" />
  </Logo>
  
  <MainMenu>
    <NavLink>How It Works</NavLink>
    <NavLink>Success Stories</NavLink>
    <Dropdown>
      Business Sectors
      <DropdownMenu>
        <Link>Hospitality</Link>
        <Link>Retail</Link>
        <Link>Manufacturing</Link>
        <Link>Healthcare</Link>
        <Link>View All Sectors →</Link>
      </DropdownMenu>
    </Dropdown>
    <NavLink>Resources</NavLink>
    <NavLink>Contact</NavLink>
  </MainMenu>
  
  <CTASection>
    <LiveCounter>
      <Users /> 147 checking now
    </LiveCounter>
    <CTAButton className="glow-pulse">
      Calculate My Claim →
    </CTAButton>
  </CTASection>
</Navigation>
```

### Mobile Navigation
```jsx
<MobileNav>
  <TopBar>
    <Logo />
    <HamburgerMenu />
  </TopBar>
  
  <SlideMenu>
    <MenuItem>How It Works</MenuItem>
    <MenuItem>Success Stories</MenuItem>
    <MenuItem>Business Sectors +</MenuItem>
    <MenuItem>Resources</MenuItem>
    <MenuItem>Contact</MenuItem>
    <CTAButton fullWidth>
      Calculate My Claim
    </CTAButton>
  </SlideMenu>
  
  <FloatingCTA>
    <PulseButton>
      Start Claim
    </PulseButton>
  </FloatingCTA>
</MobileNav>
```

---

## 🦶 FOOTER DESIGN

### Footer Structure
```jsx
<Footer>
  <TopSection>
    {/* Main CTA */}
    <FooterCTA>
      <h3>Ready to Claim Back Your Money?</h3>
      <p>Join 5,000+ businesses who've recovered millions</p>
      <Button>Start Free Check →</Button>
    </FooterCTA>
  </TopSection>
  
  <MainFooter>
    <Column>
      <Logo />
      <Tagline>
        The UK's Fastest Energy Claims Service
        <br />
        21-Day Guarantee • No Win, No Fee
      </Tagline>
      <TrustBadges>
        <Badge>ICO Registered</Badge>
        <Badge>FCA Compliant</Badge>
        <Badge>SSL Secured</Badge>
      </TrustBadges>
    </Column>
    
    <Column>
      <h4>Quick Links</h4>
      <Link>How It Works</Link>
      <Link>Calculate Claim</Link>
      <Link>Success Stories</Link>
      <Link>Business Sectors</Link>
      <Link>FAQs</Link>
    </Column>
    
    <Column>
      <h4>Resources</h4>
      <Link>Energy Claims Guide</Link>
      <Link>Claim Deadline Checker</Link>
      <Link>Hidden Commission Explained</Link>
      <Link>Blog</Link>
      <Link>Energy Market News</Link>
    </Column>
    
    <Column>
      <h4>Get in Touch</h4>
      <ContactItem>
        <Email /> hello@utilitycommissionclaims.co.uk
      </ContactItem>
      <ContactItem>
        <Clock /> Mon-Fri: 9am-6pm
      </ContactItem>
      <SocialLinks>
        <Facebook />
        <Twitter />
        <LinkedIn />
        <Instagram />
      </SocialLinks>
      <DigitalOnly>
        <Badge>100% Digital Service</Badge>
        <Badge>Paperless Claims</Badge>
      </DigitalOnly>
    </Column>
  </MainFooter>
  
  <LegalFooter>
    <LegalLinks>
      <Link>Privacy Policy</Link>
      <Link>Terms & Conditions</Link>
      <Link>Cookie Policy</Link>
      <Link>Complaints Procedure</Link>
      <Link>Data Protection</Link>
    </LegalLinks>
    <Copyright>
      © 2025 Utility Commission Claims Ltd. All rights reserved.
      <br />
      <small>
        Utility Commission Claims is a trading name of UCC Ltd. 
        We operate exclusively online with no physical offices.
        Company No. [TO BE ADDED] | ICO Registration: [TO BE ADDED]
      </small>
    </Copyright>
  </LegalFooter>
</Footer>
```

---

## 📄 PAGE SPECIFICATIONS

### 1. HOME PAGE
**Purpose:** Convert visitors immediately
- Hero with calculator teaser
- Trust indicators (live stats)
- How it works (3 steps)
- Success stories ticker
- Industry sectors grid
- FAQ preview
- Footer CTA

### 2. CLAIMS CALCULATOR (Modal/Full Page)
**Purpose:** Capture leads
- Progressive disclosure
- Visual feedback
- Instant results
- Email capture only
- No phone required

### 3. HOW IT WORKS
**Purpose:** Build trust and understanding
- Video explainer (optional)
- Step-by-step timeline
- Visual process diagram
- 21-day guarantee highlight
- No win, no fee explanation
- Start claim CTA

### 4. SUCCESS STORIES
**Purpose:** Social proof
- Live claims ticker
- Filterable by industry
- Claim amount ranges
- Time to payment stats
- Video testimonials
- Written case studies

### 5. BUSINESS SECTORS (Individual Landing Pages)
**Purpose:** SEO and relevance
Each sector page includes:
- Industry-specific headline
- Relevant case studies
- Average claim amounts
- Common scenarios
- Tailored calculator
- Industry statistics

Example sectors:
- Hotels & Hospitality
- Restaurants & Cafes
- Retail Stores
- Manufacturing Plants
- Care Homes
- Schools & Education
- Office Buildings
- Warehouses

### 6. RESOURCES HUB
**Purpose:** SEO and authority building
- Energy claims guide (downloadable PDF)
- FAQ (searchable, accordion style)
- Blog/News section
- Market updates
- Glossary of terms
- Claim deadline calculator

### 7. CONTACT
**Purpose:** Build trust, capture leads
- Email form
- WhatsApp button
- Live chat widget
- Response time promise
- No phone number (by design)
- Social media links

---

## 📜 LEGAL PAGES (Adapted from Competitors)

### PRIVACY POLICY
**Key Sections:**
1. **Introduction**
   - "We operate 100% digitally"
   - "No physical premises"
   - GDPR compliant statement

2. **Data Collection**
   - What we collect (no phone required)
   - How we use it
   - Legal basis (legitimate interest)

3. **Data Storage**
   - UK servers only
   - Encryption standards
   - Retention periods (6 years)

4. **Your Rights**
   - Access requests
   - Deletion rights
   - Portability
   - Complaints procedure

5. **Contact**
   - Data Protection Officer: hello@utilitycommissionclaims.co.uk
   - ICO registration number

### TERMS & CONDITIONS
**Key Sections:**
1. **Service Agreement**
   - 100% digital service
   - No win, no fee structure
   - 21-day processing commitment

2. **Eligibility**
   - UK businesses only
   - 6-year claim window
   - Broker commission requirements

3. **Our Process**
   - Initial assessment (free)
   - Claim submission
   - Success fee (% only on recovery)

4. **Client Obligations**
   - Provide accurate information
   - Respond to requests
   - Not pursuing other claims

5. **Limitations**
   - No guarantee of success
   - Estimates are indicative
   - Time limitations apply

6. **Digital Service Terms**
   - Electronic communications only
   - No physical documentation
   - Digital signatures accepted

### COOKIE POLICY
- Essential cookies only
- Analytics (anonymized)
- No marketing cookies without consent
- Cookie management tool

### COMPLAINTS PROCEDURE
1. Email complaint to hello@utilitycommissionclaims.co.uk
2. 48-hour acknowledgment
3. 14-day resolution target
4. Escalation to management
5. External ombudsman option

---

## 🎯 SEO-OPTIMIZED URL STRUCTURE

```
/                                    (Home)
/calculate-claim                     (Calculator)
/how-it-works                       (Process)
/success-stories                    (Social Proof)
/sectors/hospitality                (Industry Pages)
/sectors/retail
/sectors/manufacturing
/sectors/healthcare
/resources/energy-claims-guide      (Resources)
/resources/faq
/resources/blog
/contact                            (Contact)
/privacy-policy                     (Legal)
/terms-and-conditions
/cookie-policy
/complaints
```

---

## 💡 DIGITAL-ONLY ADVANTAGES TO HIGHLIGHT

### Throughout the Site:
- "No appointment needed"
- "100% online process"
- "Paperless claims"
- "Work at your pace"
- "24/7 claim submission"
- "Instant calculation"
- "Digital documentation"
- "Secure online portal"

### Trust Building for Digital-Only:
- SSL certificates visible
- ICO registration
- Data encryption badges
- "Bank-level security"
- Regular security audits
- GDPR compliance
- Trustpilot reviews
- "No cold calling" promise

---

## 🔄 USER JOURNEY FLOWS

### Primary Flow:
1. **Land on Home** → See claim question
2. **Click Calculate** → 3-step assessment
3. **See Result** → High claim value
4. **Submit Details** → Email only
5. **Receive Confirmation** → Next steps email
6. **Portal Access** → Track claim progress

### Trust-Building Flow:
1. **Land on Home** → Skeptical
2. **How It Works** → Understand process
3. **Success Stories** → See proof
4. **FAQ** → Questions answered
5. **Calculate** → Convinced to try
6. **Submit** → Convert

### Industry-Specific Flow:
1. **Google "hotel energy claims"**
2. **Land on /sectors/hospitality**
3. **See relevant examples**
4. **Industry calculator**
5. **Submit claim**

---

## 📊 CONVERSION ELEMENTS ON EVERY PAGE

### Persistent Elements:
- Floating "Calculate" button (mobile)
- Header CTA button (desktop)
- Exit-intent popup with calculator
- "X people viewing" counter
- Recent claims ticker (subtle)

### Trust Elements:
- Security badges in footer
- "No phone calls" promise
- "No win, no fee" badge
- "21-day guarantee" icon
- Live statistics

---

## 🚫 WHAT WE'RE NOT INCLUDING

Unlike competitors, we're NOT adding:
- Phone numbers (friction)
- Physical address (not needed)
- Complex forms (abandonment)
- Mandatory account creation
- Lengthy legal jargon
- Stock photos of call centers
- "Call us now" CTAs
- Office hours restrictions

---

## ✅ IMPLEMENTATION PRIORITIES

### Phase 1: Core Pages
1. Home with calculator
2. Basic legal pages
3. Contact form
4. Mobile responsive

### Phase 2: Trust Building
1. Success stories
2. How it works
3. FAQ
4. Footer enhancement

### Phase 3: SEO & Growth
1. Industry landing pages
2. Blog/Resources
3. Schema markup
4. Speed optimization

### Phase 4: Conversion Optimization
1. A/B testing
2. Heat mapping
3. Form optimization
4. Personalization

This structure is designed to maximize conversions while operating 100% digitally, building trust without traditional law firm stuffiness.