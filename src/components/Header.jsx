import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconMenu2, IconX, IconShieldCheck, IconArrowRight } from '@tabler/icons-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Commission Rates', href: '/energy-broker-commission-rates' },
    { name: 'Industries', href: '/industries' },
    { name: 'OFGEM Report', href: '/ofgem-energy-broker-investigation' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/ucc-logo.png" 
                alt="UCC" 
                className="h-12 lg:h-14 w-auto transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback if logo doesn't load */}
              <div className="hidden items-center">
                <IconShieldCheck className="w-8 h-8 text-green-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">UCC</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-200 relative group ${
                    location.pathname === item.href 
                      ? 'text-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-200 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              
              <div className="ml-4">
                <Link 
                  to="/calculator"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                >
                  Calculate Claim
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isOpen ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
            >
              {isOpen ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isOpen ? 'visible' : 'invisible'
      }`}>
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        <div className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-base font-medium text-gray-900 hover:text-green-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Link 
                  to="/calculator"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Calculate Claim
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer - Dynamic based on initial state */}
      <div className="h-16 lg:h-20"></div>
    </>
  )
}

export default Header