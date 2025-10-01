import { Link } from 'react-router-dom'
import { 
  IconArrowRight,
  IconFileSearch,
  IconScale,
  IconCash,
  IconShieldCheck,
  IconClock,
  IconChevronDown,
  IconCircleCheck
} from '@tabler/icons-react'
import { useState } from 'react'

const HowItWorks = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

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
    <div className="pt-20">
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

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-green-200 to-transparent -z-10" />
                )}
                
                <div className="text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full text-white font-bold text-xl mb-6 shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  {/* Details */}
                  <ul className="space-y-2 mb-6">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <IconCircleCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Timeline */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
                    <IconClock className="w-4 h-4 text-gray-500" />
                    <span className="font-medium">{step.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
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