import { useState, useEffect } from 'react'
import InstantCalculator from '../components/InstantCalculator'
import useScrollAnimation from '../hooks/useScrollAnimation'
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
  useScrollAnimation()
  
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
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-full text-xs font-medium mb-8 fade-up">
              <IconShieldCheck className="w-4 h-4" />
              FCA Regulated • No Win No Fee • 100% Confidential
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 fade-up" style={{animationDelay: '0.1s'}}>
              Calculate Your
              <span className="text-green-600"> Energy Commission Claim</span>
            </h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mb-12 fade-up" style={{animationDelay: '0.2s'}}>
              Join <span className="font-semibold">10,000+ UK businesses</span> recovering millions in hidden broker commissions. 
              Your free assessment takes just 2 minutes.
            </p>
          
            {/* Professional Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-gray-200 transition-all group stagger-in">
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
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
            <div className="lg:col-span-2 scale-in">
              <InstantCalculator />
            </div>
            
            {/* Right Side - Support Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Need Help Card */}
                <div className="bg-green-600 rounded-xl p-6 text-white fade-up">
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
                <div className="bg-gray-50 rounded-xl p-6 fade-up" style={{animationDelay: '0.3s'}}>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-up">Why Use Our Calculator?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our advanced assessment tool instantly identifies if you have a valid energy broker commission claim
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all stagger-in">
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
            <div className="fade-up">
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
            
            <div className="relative scale-in">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 fade-up">Quick Answers</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl stagger-in">
              <h3 className="font-semibold mb-2">Is this really free?</h3>
              <p className="text-sm text-gray-600">
                Yes, the assessment is 100% free with no hidden charges. We only get paid if we successfully recover your money.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl stagger-in">
              <h3 className="font-semibold mb-2">How accurate is the calculator?</h3>
              <p className="text-sm text-gray-600">
                Our calculator uses industry data and legal precedents to provide accurate estimates based on thousands of successful claims.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl stagger-in">
              <h3 className="font-semibold mb-2">What happens after I submit?</h3>
              <p className="text-sm text-gray-600">
                You'll receive instant results and one of our specialists will contact you within 24 hours to discuss your claim.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl stagger-in">
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
          <h2 className="text-3xl font-bold text-white mb-4 fade-up">
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