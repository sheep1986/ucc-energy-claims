import { Link } from 'react-router-dom'
import { 
  IconArrowRight,
  IconFileSearch,
  IconScale,
  IconCash,
  IconShieldCheck,
  IconClock,
  IconChevronDown,
  IconCircleCheck,
  IconTrendingUp,
  IconCurrencyPound
} from '@tabler/icons-react'
import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const HowItWorks = () => {
  const [openFAQ, setOpenFAQ] = useState(null)
  useScrollAnimation()

  const process = [
    {
      icon: <IconFileSearch className="w-8 h-8" />,
      title: "Initial Assessment",
      description: "We review your energy contracts to identify hidden broker commissions",
      details: [
        "Free contract analysis",
        "No upfront costs", 
        "Quick eligibility check",
        "Confidential review"
      ],
      timeline: "24 hours"
    },
    {
      icon: <IconScale className="w-8 h-8" />,
      title: "Legal Preparation",
      description: "Our expert team builds your case with comprehensive documentation",
      details: [
        "Gather all evidence",
        "Calculate exact claim value",
        "Prepare legal documents",
        "Submit to energy supplier"
      ],
      timeline: "5-7 days"
    },
    {
      icon: <IconCash className="w-8 h-8" />,
      title: "Recovery & Payment",
      description: "We negotiate with suppliers and secure your compensation",
      details: [
        "Handle all negotiations",
        "Maximize your recovery",
        "Direct payment to you",
        "No win, no fee"
      ],
      timeline: "14-21 days"
    }
  ]

  const faqs = [
    {
      question: "What if I don't have my energy contracts?",
      answer: "Don't worry - we can obtain copies directly from your energy supplier with your authorization. Most businesses don't keep all their historical contracts, and this won't affect your claim."
    },
    {
      question: "How much does this service cost?",
      answer: "Our service operates on a no win, no fee basis. You pay nothing upfront and only pay a success fee if we recover money for you. Our fee is a percentage of the amount recovered."
    },
    {
      question: "How long does the entire process take?",
      answer: "Most claims are resolved within 21 days from start to finish. Complex cases involving multiple contracts may take slightly longer, but we keep you informed throughout."
    },
    {
      question: "What if my broker says I wasn't charged commission?",
      answer: "Many brokers claim they don't charge fees, but they receive hidden commissions from energy suppliers. These undisclosed payments are what we help you recover."
    }
  ]

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">How the claims process works</h1>
            <p className="text-xl text-gray-600 mb-8">
              We handle everything from initial assessment to successful recovery. 
              No upfront costs, no hidden fees, no hassle.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <IconShieldCheck className="w-5 h-5 text-green-600" />
                <span>FCA Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <IconClock className="w-5 h-5 text-green-600" />
                <span>21 Day Average</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCircleCheck className="w-5 h-5 text-green-600" />
                <span>No Win, No Fee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Steps */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-full text-xs font-medium mb-4">
              <IconTrendingUp className="w-4 h-4" />
              Simple 3-Step Process
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Your Path to Recovery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial assessment to successful payment in just 21 days
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {process.map((step, index) => (
              <div key={index} className="relative group stagger-in">
                {/* Connection Line Desktop */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-[60%] w-[80%] h-0.5">
                    <div className="h-full bg-gray-200"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                )}
                
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-green-200">
                  {/* Step Number Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <IconClock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500 font-medium">{step.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-center">{step.description}</p>
                  
                  {/* Enhanced Details */}
                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-green-200 transition-colors">
                          <IconCircleCheck className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom Indicator */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Step {index + 1} of {process.length}</span>
                      {index === process.length - 1 ? (
                        <span className="text-green-600 font-semibold flex items-center gap-1">
                          <IconCircleCheck className="w-4 h-4" />
                          Complete
                        </span>
                      ) : (
                        <span className="text-gray-400">Continue →</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info Bar */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 fade-up">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <IconShieldCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Risk Free</div>
              </div>
              <div>
                <IconClock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">21 Days</div>
                <div className="text-sm text-gray-600">Claim Submission</div>
              </div>
              <div>
                <IconCurrencyPound className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">25%</div>
                <div className="text-sm text-gray-600">Success Fee Only</div>
              </div>
              <div>
                <IconScale className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">6 Years</div>
                <div className="text-sm text-gray-600">Claim Window</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">What we need from you</h2>
              <p className="text-xl text-gray-600 mb-8">
                The process is simple and straightforward. We just need a few pieces of information to get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business details</h4>
                    <p className="text-sm text-gray-600">Company name, address, and contact information</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Energy contract information</h4>
                    <p className="text-sm text-gray-600">Contract dates, values, and broker details if known</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Authorization</h4>
                    <p className="text-sm text-gray-600">Simple form allowing us to act on your behalf</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Start your claim today</h3>
              <p className="text-gray-600 mb-8">
                Join thousands of UK businesses recovering their hidden energy commissions. 
                It only takes 2 minutes to check your eligibility.
              </p>
              
              <Link to="/calculator" className="btn btn-primary w-full justify-center mb-4">
                Check Eligibility
                <IconArrowRight className="w-5 h-5" />
              </Link>
              
              <p className="text-center text-sm text-gray-500">
                No obligation • Free assessment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-center mb-12">Common questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <IconChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <Link to="/faq" className="btn btn-secondary">
              View All FAQs
              <IconArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks