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
  IconCurrencyPound,
  IconBuildingSkyscraper,
  IconChartBar,
  IconHandshake,
  IconCertificate
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
      timeline: "24 hours",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800"
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
      timeline: "5-7 days",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"
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
      timeline: "14-21 days",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800"
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
    },
    {
      question: "Can I claim if I'm still in a contract?",
      answer: "Yes, you can claim for hidden commissions even if you're currently in a contract with the broker. The claim relates to undisclosed commissions, not the contract itself."
    },
    {
      question: "How much could I recover?",
      answer: "Recovery amounts vary based on your energy spend and contract duration. Most businesses recover between £10,000 and £100,000, with some larger claims exceeding £500,000."
    }
  ]

  const stats = [
    { icon: IconBuildingSkyscraper, number: "50,000+", label: "Businesses Helped" },
    { icon: IconCurrencyPound, number: "£127M", label: "Total Recovered" },
    { icon: IconChartBar, number: "95%", label: "Success Rate" },
    { icon: IconHandshake, number: "100%", label: "Client Satisfaction" }
  ]

  return (
    <div className="">
      {/* Hero Section with Image */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 fade-up">
                <IconCertificate className="w-4 h-4" />
                FCA Regulated Claims Service
              </div>
              <h1 className="mb-6 fade-up">How the claims process works</h1>
              <p className="text-xl text-gray-600 mb-8 fade-up">
                We handle everything from initial assessment to successful recovery. 
                No upfront costs, no hidden fees, no hassle.
              </p>
              <div className="flex flex-wrap gap-6 text-sm fade-up">
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
            
            {/* Hero Image */}
            <div className="relative fade-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551135049-8a33b5883817?w=1200"
                  alt="Professional team reviewing documents"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">£127M+</div>
                      <div className="text-sm text-gray-600">Recovered for clients</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-gray-600">Success rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <stat.icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Steps with Images */}
      <section className="py-24 relative overflow-hidden bg-gray-50">
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
          
          <div className="space-y-20">
            {process.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} fade-up`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <IconClock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500 font-medium">{step.timeline}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">{step.description}</p>
                  
                  {/* Enhanced Details */}
                  <div className="space-y-4">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors">
                          <IconCircleCheck className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress Indicator */}
                  {index < process.length - 1 && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Step {index + 1} of {process.length}</span>
                        <IconArrowRight className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} fade-up`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white">
                            {step.icon}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Step {index + 1}</div>
                            <div className="text-xs text-gray-600">{step.timeline}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info Bar */}
          <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white fade-up">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <IconShieldCheck className="w-8 h-8 mx-auto mb-2 text-green-100" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-green-100">Risk Free</div>
              </div>
              <div>
                <IconClock className="w-8 h-8 mx-auto mb-2 text-green-100" />
                <div className="text-2xl font-bold">21 Days</div>
                <div className="text-sm text-green-100">Average Time</div>
              </div>
              <div>
                <IconCurrencyPound className="w-8 h-8 mx-auto mb-2 text-green-100" />
                <div className="text-2xl font-bold">25%</div>
                <div className="text-sm text-green-100">Success Fee Only</div>
              </div>
              <div>
                <IconScale className="w-8 h-8 mx-auto mb-2 text-green-100" />
                <div className="text-2xl font-bold">6 Years</div>
                <div className="text-sm text-green-100">Claim Window</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h2 className="mb-6">What we need from you</h2>
              <p className="text-xl text-gray-600 mb-8">
                The process is simple and straightforward. We just need a few pieces of information to get started.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Business details</h4>
                    <p className="text-gray-600">Company name, address, and contact information</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Energy contract information</h4>
                    <p className="text-gray-600">Contract dates, values, and broker details if known</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Authorization</h4>
                    <p className="text-gray-600">Simple form allowing us to act on your behalf</p>
                  </div>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <IconShieldCheck className="w-5 h-5 text-green-600" />
                    <span>Data Protected</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <IconCertificate className="w-5 h-5 text-green-600" />
                    <span>FCA Regulated</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image and CTA Card */}
            <div className="fade-up">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                  alt="Business consultation"
                  className="rounded-2xl shadow-xl mb-6 w-full h-[300px] object-cover"
                />
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                  <h3 className="text-2xl font-bold mb-4">Start your claim today</h3>
                  <p className="text-gray-600 mb-6">
                    Join thousands of UK businesses recovering their hidden energy commissions. 
                    It only takes 2 minutes to check your eligibility.
                  </p>
                  
                  <Link to="/calculator" className="btn btn-primary w-full justify-center mb-4">
                    Check Eligibility
                    <IconArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <p className="text-center text-sm text-gray-500">
                    No obligation • Free assessment • Instant results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <h2 className="mb-4">Common questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about the claims process</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden fade-up" style={{animationDelay: `${index * 0.05}s`}}>
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-start hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <IconChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
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
          
          <div className="text-center fade-up">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 mb-6">Have more questions?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/faq" className="btn btn-secondary">
                  View All FAQs
                  <IconArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                  <IconArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Image */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600"
              alt="Success celebration"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-900/80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to recover your money?</h2>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of UK businesses who have successfully claimed back their hidden energy broker commissions
                </p>
                <Link to="/calculator" className="btn bg-white text-green-600 hover:bg-gray-100">
                  Start Your Claim
                  <IconArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks