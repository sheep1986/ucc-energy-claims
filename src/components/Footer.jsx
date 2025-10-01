import { Link } from 'react-router-dom'
import { 
  IconMail, 
  IconPhone,
  IconClock,
  IconShieldCheck,
  IconMapPin,
  IconArrowRight,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCertificate,
  IconScale,
  IconChartBar
} from '@tabler/icons-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Free Calculator', href: '/calculator', badge: '2 min' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Industries We Serve', href: '/industries' },
      { name: 'Success Stories', href: '/success' }
    ],
    resources: [
      { name: 'Industry Insights', href: '/insights' },
      { name: 'FAQ', href: '/faq' },
      { name: 'About UCC', href: '/about' },
      { name: 'Contact Us', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Complaints Procedure', href: '/complaints' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  }

  const stats = [
    { icon: IconChartBar, value: '£127M+', label: 'Recovered' },
    { icon: IconShieldCheck, value: '95%', label: 'Success Rate' },
    { icon: IconScale, value: 'FCA', label: 'Regulated' }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Stats Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-white text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                Ready to Reclaim Your Money?
              </h3>
              <p className="text-green-100 text-lg">
                Join 50,000+ UK businesses recovering hidden broker commissions
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/calculator" 
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl"
              >
                <IconChartBar className="w-5 h-5" />
                Start Free Check
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full ml-2">2 min</span>
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-green-700/50 backdrop-blur text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700/70 transition-all border border-green-500/30"
              >
                <IconPhone className="w-5 h-5" />
                Call 0800 123 4567
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - Redesigned */}
      <div className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Column - Enhanced */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src="/ucc-logo.png" 
                  alt="UCC" 
                  className="h-12 brightness-0 invert opacity-90 mb-4"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <IconShieldCheck className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white">UCC</span>
                    <span className="text-xs text-gray-400 block">Energy Claims</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                The UK's trusted energy broker commission recovery specialists. 
                We've helped thousands of businesses reclaim millions in hidden fees.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:hello@ucclaims.co.uk" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <IconMail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Email us</div>
                    <div className="text-sm font-medium">hello@ucclaims.co.uk</div>
                  </div>
                </a>
                
                <a href="tel:08001234567" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <IconPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Free phone</div>
                    <div className="text-sm font-medium">0800 123 4567</div>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <IconClock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Office hours</div>
                    <div className="text-sm font-medium">Mon-Fri: 9AM - 6PM</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-8">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                  <IconBrandLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                  <IconBrandTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <IconArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="text-xs bg-green-600/20 text-green-400 px-2 py-0.5 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <IconArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <IconArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                © {currentYear} Utility Commission Claims. All rights reserved.
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <IconShieldCheck className="w-4 h-4 text-green-600" />
                  <span>FCA Regulated</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCertificate className="w-4 h-4 text-green-600" />
                  <span>ICO Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconScale className="w-4 h-4 text-green-600" />
                  <span>No Win No Fee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer