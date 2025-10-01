import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  IconMenu2, 
  IconX, 
  IconShieldCheck, 
  IconArrowRight,
  IconChevronDown,
  IconPhone,
  IconCalculator,
  IconBuildingFactory2,
  IconBulb,
  IconScale,
  IconUsers
} from '@tabler/icons-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setActiveDropdown(null)
  }, [location])

  const navigation = [
    { 
      name: 'How It Works', 
      href: '/how-it-works',
      icon: IconBulb
    },
    { 
      name: 'Industries', 
      href: '/industries',
      icon: IconBuildingFactory2,
      dropdown: [
        { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Energy-intensive operations' },
        { name: 'Healthcare', href: '/industries/healthcare', description: 'Hospitals & care facilities' },
        { name: 'Hospitality', href: '/industries/hospitality', description: 'Hotels & accommodation' },
        { name: 'Retail', href: '/industries/retail', description: 'Shops & commercial spaces' },
        { name: 'View All Industries', href: '/industries', highlight: true }
      ]
    },
    { 
      name: 'Resources', 
      href: '/insights',
      icon: IconScale,
      dropdown: [
        { name: 'Industry Insights', href: '/insights', description: 'Latest news & analysis' },
        { name: 'Calculator', href: '/calculator', description: 'Estimate your claim' },
        { name: 'FAQ', href: '/faq', description: 'Common questions' },
        { name: 'Success Stories', href: '/success', description: 'Client testimonials' }
      ]
    },
    { 
      name: 'About', 
      href: '/about',
      icon: IconUsers
    },
  ]

  return (
    <>
      {/* Top Bar - Optional promotional/trust bar */}
      <div className="hidden lg:block bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <IconShieldCheck className="w-4 h-4" />
                FCA Regulated
              </span>
              <span className="opacity-70">•</span>
              <span>No Win, No Fee</span>
              <span className="opacity-70">•</span>
              <span>£127M+ Recovered</span>
            </div>
            <div className="flex items-center gap-2">
              <IconPhone className="w-4 h-4" />
              <span className="font-semibold">0800 123 4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white/98 backdrop-blur-md'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section - Enhanced */}
            <Link to="/" className="flex items-center group relative">
              <img 
                src="/ucc-logo.png" 
                alt="UCC" 
                className="h-12 lg:h-14 w-auto transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback with better design */}
              <div className="hidden items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <IconShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900">UCC</span>
                  <span className="text-xs text-gray-500 block -mt-1">Energy Claims</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          location.pathname.startsWith(item.href)
                            ? 'text-green-600 bg-green-50' 
                            : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                        <IconChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                          activeDropdown === item.name 
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        <div className="p-2">
                          {item.dropdown.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.href}
                              className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                                subItem.highlight 
                                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border border-green-200'
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              <div className={`font-medium text-sm ${
                                subItem.highlight ? 'text-green-700' : 'text-gray-900'
                              }`}>
                                {subItem.name}
                              </div>
                              {subItem.description && (
                                <div className="text-xs text-gray-500 mt-0.5">
                                  {subItem.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        location.pathname === item.href 
                          ? 'text-green-600 bg-green-50' 
                          : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Buttons */}
              <div className="flex items-center gap-3 ml-6">
                <Link 
                  to="/contact"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
                >
                  Contact
                </Link>
                <div className="w-px h-6 bg-gray-300"></div>
                <Link 
                  to="/calculator"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <IconCalculator className="w-4 h-4" />
                  Free Calculator
                  <div className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    2 min
                  </div>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 ${
                isOpen ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
            >
              <div className="relative w-5 h-5">
                <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`}>
                  <IconMenu2 className="w-5 h-5" />
                </span>
                <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                }`}>
                  <IconX className="w-5 h-5" />
                </span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Enhanced */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isOpen ? 'visible' : 'invisible'
      }`}>
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        <div className={`absolute right-0 top-0 h-full w-[320px] bg-white shadow-2xl transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile Menu Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold">Menu</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <IconShieldCheck className="w-4 h-4" />
              <span>FCA Regulated Service</span>
            </div>
          </div>
          
          {/* Mobile Menu Items */}
          <div className="p-6">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-900">
                        <item.icon className="w-4 h-4 text-gray-500" />
                        {item.name}
                      </div>
                      <div className="ml-6 space-y-1">
                        {item.dropdown.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-900 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-4 h-4 text-gray-500" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <Link
                to="/contact"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-900 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <IconPhone className="w-4 h-4 text-gray-500" />
                Contact Us
              </Link>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link 
                  to="/calculator"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <IconCalculator className="w-4 h-4" />
                  Free Calculator
                  <div className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    2 min
                  </div>
                </Link>
              </div>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <a href="tel:08001234567" className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                  <IconPhone className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="text-xs text-gray-500">Call us free</div>
                    <div className="font-semibold">0800 123 4567</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header