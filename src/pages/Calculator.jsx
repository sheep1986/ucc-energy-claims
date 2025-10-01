import { useState } from 'react'
import InstantCalculator from '../components/InstantCalculator'
import { Link } from 'react-router-dom'
import { 
  IconArrowRight,
  IconCircleCheck,
  IconShieldCheck,
  IconClock,
  IconCalculator,
  IconPhone,
  IconAlertCircle,
  IconTrendingUp,
  IconLock,
  IconUsers,
  IconFileSearch,
  IconChartBar
} from '@tabler/icons-react'

const Calculator = () => {
  const stats = [
    { value: '2', label: 'Minutes to Complete', icon: <IconClock className="w-5 h-5" /> },
    { value: '£0', label: 'Upfront Cost', icon: <IconCircleCheck className="w-5 h-5" /> },
    { value: '21', label: 'Days Average', icon: <IconTrendingUp className="w-5 h-5" /> },
    { value: '98%', label: 'Success Rate', icon: <IconChartBar className="w-5 h-5" /> }
  ]

  const reasons = [
    {
      icon: <IconFileSearch className="w-6 h-6" />,
      title: 'Instant Analysis',
      description: 'Get immediate feedback on your potential claim value'
    },
    {
      icon: <IconShieldCheck className="w-6 h-6" />,
      title: 'Risk-Free Assessment',
      description: 'No obligation, no hidden fees, no payment unless we win'
    },
    {
      icon: <IconUsers className="w-6 h-6" />,
      title: 'Expert Support',
      description: 'Our specialists guide you through every step'
    },
    {
      icon: <IconLock className="w-6 h-6" />,
      title: '100% Confidential',
      description: 'Your data is secure and never shared with third parties'
    }
  ]

  return (
    <div>
      {/* Professional Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-green-50 via-white to-gray-50">
        {/* Icon Pattern Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large decorative icons */}
          <div className="absolute top-10 left-10 text-green-100 opacity-40">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
          </div>
          <div className="absolute top-20 right-20 text-green-100 opacity-30 transform rotate-12">
            <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="absolute bottom-10 left-1/4 text-green-100 opacity-25 transform -rotate-12">
            <svg className="w-36 h-36" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 right-1/3 text-green-100 opacity-35">
            <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
            </svg>
          </div>
          <div className="absolute top-1/2 left-10 text-green-100 opacity-20 transform rotate-45">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-sm">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a1 1 0 100-2 2 2 0 00-2 2v11a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2H6z" clipRule="evenodd"/>
              </svg>
              FCA Regulated • No Win No Fee • 100% Confidential
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Calculate Your
              <span className="block text-green-600 mt-2">
                Energy Commission Claim
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join <span className="text-gray-900 font-semibold">10,000+ UK businesses</span> recovering millions in hidden broker commissions. 
              Your free assessment takes just 2 minutes.
            </p>
          </div>
          
          {/* Professional Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="bg-amber-50 border-t border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center lg:text-left">
            <div className="flex items-center gap-3">
              <IconAlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <div className="text-lg font-semibold text-gray-900">90% of UK Businesses</div>
                <div className="text-gray-600 text-sm">have been overcharged by energy brokers</div>
              </div>
            </div>
            <div className="hidden lg:block w-px h-10 bg-amber-200"></div>
            <div className="bg-white rounded-lg px-4 py-2 border border-amber-200">
              <div className="text-gray-600 text-xs uppercase tracking-wider">Average Recovery</div>
              <div className="text-xl font-bold text-gray-900">£25,000 - £80,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Calculator */}
            <div className="lg:col-span-2">
              <InstantCalculator />
            </div>
            
            {/* Right Side - Support Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Need Help Card */}
                <div className="bg-green-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Need Help?</h3>
                  <p className="text-green-50 mb-4 text-sm">
                    Our energy claim experts are standing by to assist you with your assessment.
                  </p>
                  <a href="tel:08001234567" className="block w-full bg-white text-green-700 py-3 px-4 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-center gap-2">
                      <IconPhone className="w-5 h-5" />
                      <span>0800 123 4567</span>
                    </div>
                  </a>
                  <p className="text-xs text-green-50 mt-3 text-center">Mon-Fri: 9AM - 6PM</p>
                </div>
                
                {/* Trust Signals */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-4">Why Choose UCC?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <IconCircleCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">10,000+ successful claims</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconCircleCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">£52M+ recovered for clients</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconCircleCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">FCA regulated service</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconCircleCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">No win, no fee guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Our Calculator */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Use Our Calculator?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our advanced assessment tool instantly identifies if you have a valid energy broker commission claim
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                  {reason.icon}
                </div>
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Needed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Need</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our calculator is designed to be quick and easy. Here's the information that helps us assess your claim:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Energy Usage Details</h4>
                    <p className="text-sm text-gray-600">Whether you used a broker and your annual energy spend</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Contract Information</h4>
                    <p className="text-sm text-gray-600">When your contract started and how long it runs for</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Details</h4>
                    <p className="text-sm text-gray-600">Basic company information and contact details</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Don't have all the details?</strong> No problem - we can obtain missing information 
                  from your energy supplier with your authorization.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600" 
                alt="Business calculator" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quick Answers</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Is this really free?</h3>
              <p className="text-sm text-gray-600">
                Yes, the assessment is 100% free with no hidden charges. We only get paid if we successfully recover your money.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">How accurate is the calculator?</h3>
              <p className="text-sm text-gray-600">
                Our calculator uses industry data and legal precedents to provide accurate estimates based on thousands of successful claims.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">What happens after I submit?</h3>
              <p className="text-sm text-gray-600">
                You'll receive instant results and one of our specialists will contact you within 24 hours to discuss your claim.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Is my information secure?</h3>
              <p className="text-sm text-gray-600">
                Absolutely. We're ICO registered and GDPR compliant. Your data is encrypted and never shared without permission.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/" className="text-green-600 hover:text-green-700 font-medium">
              Back to Homepage
              <IconArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Claim What's Yours?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Don't let hidden commissions drain your business. Start your free assessment now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <span className="flex items-center justify-center gap-2">
                <IconCalculator className="w-5 h-5" />
                Start Calculator
              </span>
            </button>
            <a href="tel:08001234567" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              <span className="flex items-center justify-center gap-2">
                <IconPhone className="w-5 h-5" />
                Call 0800 123 4567
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Calculator