import { Link } from 'react-router-dom'
import { 
  IconMail, 
  IconClock,
  IconShieldCheck,
  IconArrowRight
} from '@tabler/icons-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Calculator', href: '/calculator' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Industries', href: '/industries' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Resources', href: '/resources' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Complaints', href: '/complaints' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Stay informed about energy claims
              </h3>
              <p className="text-gray-600">
                Get monthly updates on industry changes and claim opportunities.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              />
              <button className="btn btn-primary">
                Subscribe
                <IconArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <img 
              src="/ucc-logo.png" 
              alt="UCC" 
              className="h-10 mb-6"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="hidden">
              <span className="text-2xl font-bold">UCC</span>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-sm">
              UK's leading energy broker commission recovery specialists. 
              No win, no fee. FCA regulated.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <IconMail className="w-4 h-4 text-gray-400" />
                hello@utilitycommissionclaims.co.uk
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <IconClock className="w-4 h-4 text-gray-400" />
                Mon-Fri: 9:00 AM - 6:00 PM
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <IconShieldCheck className="w-4 h-4 text-gray-400" />
                FCA Regulated
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Utility Commission Claims. All rights reserved.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>FCA Regulated</span>
              <span>•</span>
              <span>No Win, No Fee</span>
              <span>•</span>
              <span>Expert Legal Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer