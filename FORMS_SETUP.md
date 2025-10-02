# Form Submission Setup for Utility Commission Claims

## Email Configuration

All form submissions are automatically sent to: **hello@utilitycommissionclaims.co.uk**

## How It Works

The site uses Netlify Forms to handle form submissions. When deployed to Netlify, forms are automatically detected and processed.

### Forms Configured:

1. **Contact Form** (`/contact`)
   - Name
   - Email
   - Company
   - Phone
   - Message
   - Privacy consent

2. **Calculator Form** (`/calculator`)
   - Broker usage information
   - Broker name
   - Annual contract value
   - Contract duration
   - Contract date
   - Business details
   - Contact information

## Setup Steps

1. **Deploy to Netlify**
   - Push code to GitHub
   - Connect repo to Netlify
   - Deploy site

2. **Email Notifications**
   - Forms are configured in `netlify.toml` to send emails to hello@utilitycommissionclaims.co.uk
   - Netlify will automatically send form submissions to this email

3. **Access Form Submissions**
   - Log into Netlify dashboard
   - Go to Forms section
   - View all submissions
   - Download CSV exports

## Testing

1. Submit a test form on the live site
2. Check email at hello@utilitycommissionclaims.co.uk
3. Verify submission appears in Netlify Forms dashboard

## Troubleshooting

If forms aren't working:

1. **Check Netlify Dashboard**
   - Go to Site Settings > Forms
   - Verify forms are detected

2. **Verify Email**
   - Check spam folder
   - Ensure email address is correct in netlify.toml

3. **Form Detection**
   - Ensure `data-netlify="true"` attribute is present
   - Check that form has a `name` attribute
   - Verify hidden forms exist in public/index.html

## Alternative Options

If you need more advanced features:

1. **EmailJS** - Client-side email sending
2. **Formspree** - Form backend service
3. **Custom API** - Build your own form handler

## Support

For Netlify Forms documentation: https://docs.netlify.com/forms/setup/