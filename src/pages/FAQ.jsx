import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  IconChevronDown,
  IconChevronRight,
  IconQuestionMark,
  IconCurrencyPound,
  IconClock,
  IconShieldCheck,
  IconScale,
  IconFileText,
  IconMail,
  IconSearch,
  IconX,
  IconBulb,
  IconArrowUp,
  IconFilter,
  IconStar,
  IconTrendingUp,
  IconAlertCircle,
  IconCheck,
  IconPhone,
  IconFileSearch,
  IconCalculator,
  IconCircleCheck,
  IconAward
} from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openSection, setOpenSection] = useState('all')
  const [openQuestions, setOpenQuestions] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [viewMode, setViewMode] = useState('categories') // 'categories' or 'all'
  const [popularExpanded, setPopularExpanded] = useState(false)

  // Add FAQ Schema to head for SEO
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are energy broker reclaims?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Energy broker reclaims are claims to recover hidden commissions that energy brokers received from suppliers without disclosure. UK businesses can reclaim these undisclosed commissions dating back 6 years, with average claims worth £45,000."
          }
        },
        {
          "@type": "Question",
          "name": "How much are business energy claims worth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Business energy claims typically range from £10,000 to £150,000. The average claim is £45,000, but larger businesses with high energy usage can recover significantly more. Manufacturing and hospitality sectors often see the highest claims."
          }
        },
        {
          "@type": "Question",
          "name": "How do I start an energy broker reclaim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Starting your energy broker reclaim is simple: 1) Use our free online calculator to check eligibility in 60 seconds, 2) We review your energy contracts for hidden commissions, 3) Our legal team handles your entire claim on a no win, no fee basis."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a time limit for energy broker claims?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can claim for energy broker commissions from contracts dating back 6 years from today. This means contracts from 2018 onwards are eligible. Don't delay as older contracts will become time-barred."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need my energy contracts for a claim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, you don't need your original contracts. We can obtain copies from your energy supplier with your authorization. All we need is your business details and permission to investigate on your behalf."
          }
        }
      ]
    })
    document.head.appendChild(script)
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  const faqSections = [
    {
      id: 'claims',
      icon: IconQuestionMark,
      title: 'About Claims',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      questions: [
        {
          q: 'What are energy broker reclaims and hidden commissions?',
          a: 'Energy broker reclaims recover hidden commissions that brokers received from suppliers without telling you. These secret payments inflated your business energy costs by 10-40%. UK courts ruled this practice illegal, entitling businesses to claim back these overcharges from the last 6 years. Average energy broker reclaims are worth £45,000.',
          popular: true,
          relatedTopics: ['Legal Rights', 'Claim Process']
        },
        {
          q: 'How much could I claim?',
          a: 'Claims range from £2,000 to £500,000+ depending on your energy spend and contract duration. Most businesses recover between £15,000-£50,000. Our calculator provides instant estimates based on your specific circumstances. Larger energy users and those with multiple sites often see six-figure recoveries.',
          popular: true,
          relatedTopics: ['Calculator', 'Industries']
        },
        {
          q: 'Is there a time limit for claims?',
          a: 'Yes, claims must be submitted within six years of contract signature. This is known as the limitation period under UK law. Act promptly to maximize your recovery potential - the clock is ticking on older contracts. We can often recover commissions from multiple contracts within this timeframe.',
          urgent: true,
          relatedTopics: ['Legal', 'Documentation']
        },
        {
          q: 'What evidence do I need?',
          a: 'Simply provide your energy bills and contracts. We handle all additional documentation and correspondence. Our legal team will gather any supplementary evidence needed to support your claim. You don\'t need to prove the commission existed - suppliers must prove they disclosed it.',
          relatedTopics: ['Process', 'Documentation']
        }
      ]
    },
    {
      id: 'process',
      icon: IconClock,
      title: 'Process Questions',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      questions: [
        {
          q: 'How long does the process take?',
          a: 'We guarantee claim submission within 21 days of receiving your information. Most clients receive payment within 8-12 weeks of submission. Our streamlined digital process is the fastest in the market. Complex multi-site claims may take slightly longer but we keep you informed throughout.',
          popular: true,
          relatedTopics: ['Timeline', 'Updates']
        },
        {
          q: 'What documents do I need?',
          a: 'Just your energy bills and contracts from the past six years. We can work with whatever you have available. If documents are missing, we can often obtain them directly from suppliers. Our team handles all the complex legal documentation required for your claim.',
          relatedTopics: ['Evidence', 'Support']
        },
        {
          q: 'Will my supplier be notified?',
          a: 'Yes, we formally notify suppliers as part of the legal process. This is done professionally through official channels. Your ongoing energy supply is completely protected - suppliers cannot penalize you for making a legitimate claim. Many businesses maintain positive relationships with suppliers throughout the process.',
          relatedTopics: ['Legal Protection', 'Supplier Relations']
        },
        {
          q: 'Can I track my claim progress?',
          a: 'Yes, we provide regular email updates at each stage of your claim. You\'ll receive confirmation when we submit your claim, updates on supplier responses, and immediate notification of any settlement offers. Our team is available via email for questions at any time.',
          relatedTopics: ['Communication', 'Support']
        },
        {
          q: 'What if my claim is rejected?',
          a: 'If initially rejected, we appeal the decision at no extra cost. Our legal team has extensive experience overturning rejections. We only stop if there are genuine legal grounds preventing recovery. Remember, you pay nothing unless we win.',
          new: true,
          relatedTopics: ['No Win No Fee', 'Appeals']
        }
      ]
    },
    {
      id: 'costs',
      icon: IconCurrencyPound,
      title: 'Cost & Payment',
      color: 'text-emerald',
      bgColor: 'bg-emerald-50',
      questions: [
        {
          q: 'What does it cost?',
          a: 'Nothing upfront. We operate on a no win, no fee basis. You only pay if we successfully recover money for you. There are no hidden charges, no hourly rates, and no surprise fees. This means zero financial risk for your business.',
          popular: true,
          relatedTopics: ['Risk Free', 'Fees']
        },
        {
          q: 'When do I pay your fee?',
          a: 'Our fee is deducted from recovered funds before transfer to you. You never pay out-of-pocket. If we don\'t recover money, you pay nothing. It\'s that simple. We\'re only successful when you are.',
          relatedTopics: ['Payment Terms', 'Success Fee']
        },
        {
          q: 'What percentage do you charge?',
          a: 'We charge 25% + VAT of the recovered amount. This is highly competitive compared to traditional solicitors who often charge 35-45%. Our fee covers all work including legal expertise, documentation, negotiation, and recovery. No other costs apply.',
          relatedTopics: ['Fee Structure', 'Value']
        },
        {
          q: 'Are there hidden costs?',
          a: 'No. Our fee structure is transparent and fixed. The 25% + VAT fee covers everything from start to finish. No application fees, no assessment charges, no payment processing fees. What we quote is what you pay - only from successful recovery.',
          relatedTopics: ['Transparency', 'Total Cost']
        },
        {
          q: 'How do I receive my payment?',
          a: 'Recovered funds are transferred directly to your business bank account after our fee deduction. Payment typically arrives within 5-10 working days of settlement. We provide full documentation for your records.',
          new: true,
          relatedTopics: ['Payment Method', 'Timeline']
        }
      ]
    },
    {
      id: 'legal',
      icon: IconScale,
      title: 'Legal & Security',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      questions: [
        {
          q: 'Is this legal?',
          a: 'Absolutely. Supreme Court rulings have established clear legal precedent for commission recovery. The practice of hidden commissions has been ruled as mis-selling. We operate within established legal frameworks and follow all FCA and SRA guidelines. Your claim is completely legitimate.',
          popular: true,
          relatedTopics: ['Court Rulings', 'Regulations']
        },
        {
          q: 'Is my data secure?',
          a: 'Yes. We use bank-level 256-bit encryption to protect all data. We\'re ICO registered and fully GDPR compliant. Your information is never sold or shared with third parties beyond what\'s necessary for your claim. All data is stored on secure UK servers.',
          relatedTopics: ['GDPR', 'Data Protection']
        },
        {
          q: 'Can I claim myself?',
          a: 'Yes, but success rates are extremely low. Suppliers often ignore or reject individual claims. Our legal expertise, established relationships, and proven processes ensure maximum recovery. We know exactly how to present claims for best results.',
          relatedTopics: ['DIY Claims', 'Success Rate']
        },
        {
          q: 'What if my broker disputes the claim?',
          a: 'We handle all disputes and challenges. Our legal team has extensive experience countering broker objections. The law is clear - undisclosed commissions must be repaid. We\'ll fight for every penny you\'re owed.',
          relatedTopics: ['Disputes', 'Legal Support']
        },
        {
          q: 'Am I protected from retaliation?',
          a: 'Yes, completely. It\'s illegal for suppliers or brokers to penalize you for making a claim. Your energy supply cannot be affected. We\'ve never had a client face any negative consequences for claiming.',
          new: true,
          relatedTopics: ['Protection', 'Rights']
        }
      ]
    },
    {
      id: 'eligibility',
      icon: IconFileText,
      title: 'Eligibility',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      questions: [
        {
          q: 'Who can make a claim?',
          a: 'Any UK business that used an energy broker in the last six years likely qualifies. This includes limited companies, partnerships, sole traders, charities, and public sector organizations. Size doesn\'t matter - from small shops to large corporations.',
          popular: true,
          relatedTopics: ['Business Types', 'Qualification']
        },
        {
          q: 'What if I\'ve switched suppliers?',
          a: 'Previous suppliers can still be claimed against. We can pursue claims against any supplier you\'ve used in the past six years, regardless of your current provider. Many businesses have claims against multiple suppliers.',
          relatedTopics: ['Multiple Claims', 'Past Contracts']
        },
        {
          q: 'What if my business has closed?',
          a: 'Claims can often still be made by successor businesses or liquidators. If your business has been sold, the new owners may be able to claim. Contact us to discuss your specific situation.',
          relatedTopics: ['Closed Businesses', 'Special Cases']
        },
        {
          q: 'Do I need to have used a broker?',
          a: 'Yes, claims specifically relate to hidden broker commissions. However, many businesses use brokers without realizing it - they often operate under consultant or energy advisor titles. If someone helped arrange your energy contract, you likely have a claim.',
          relatedTopics: ['Broker Definition', 'Third Parties']
        },
        {
          q: 'What about micro-businesses?',
          a: 'Micro-businesses are especially protected under regulations. If you have fewer than 10 employees or turnover under £2M, you have additional rights. These businesses often have the strongest claims.',
          new: true,
          relatedTopics: ['Small Business', 'Extra Protection']
        }
      ]
    }
  ]

  // Flatten all questions for search
  const allQuestions = faqSections.flatMap(section => 
    section.questions.map(q => ({ ...q, sectionId: section.id, sectionTitle: section.title }))
  )

  // Get popular questions
  const popularQuestions = allQuestions.filter(q => q.popular).slice(0, 5)

  // Filter questions based on search
  const filteredSections = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(item => 
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => 
    openSection === 'all' || section.id === openSection || searchTerm
  )

  const toggleQuestion = (sectionId, questionIndex) => {
    const key = `${sectionId}-${questionIndex}`
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const toggleAllQuestions = (expand) => {
    const newState = {}
    filteredSections.forEach(section => {
      section.questions.forEach((_, index) => {
        newState[`${section.id}-${index}`] = expand
      })
    })
    setOpenQuestions(newState)
  }

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Count total filtered questions
  const totalFilteredQuestions = filteredSections.reduce((acc, section) => 
    acc + section.questions.length, 0
  )

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-ice-light/30 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              Everything you need to know about energy commission claims. 
              Can't find your answer? Contact us for personalized assistance.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 text-lg border border-slate-200 rounded-xl focus:ring-2 focus:ring-ice focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <IconX size={20} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-ice-dark hover:text-ice font-medium"
              >
                <IconMail size={20} />
                Contact Support
              </Link>
              <button
                onClick={() => toggleAllQuestions(true)}
                className="inline-flex items-center gap-2 text-emerald hover:text-emerald/80 font-medium"
              >
                <IconChevronDown size={20} />
                Expand All
              </button>
              <button
                onClick={() => toggleAllQuestions(false)}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium"
              >
                <IconChevronRight size={20} />
                Collapse All
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Calculator CTA */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-ice-light to-emerald-light rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-navy mb-1">
                  Don't see your question?
                </h3>
                <p className="text-slate-600">
                  Get instant answers with our calculator - see if you qualify in 30 seconds
                </p>
              </div>
              <Link
                to="/calculate"
                className="bg-emerald text-white px-6 py-3 rounded-xl hover:bg-emerald/90 transition-all duration-300 font-medium whitespace-nowrap"
              >
                Start Calculator →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-8 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setPopularExpanded(!popularExpanded)}
              className="flex items-center gap-2 mb-4 text-navy font-semibold hover:text-ice-dark transition-colors"
            >
              <IconStar className="text-amber-500" size={24} />
              <span>Most Popular Questions</span>
              <IconChevronDown 
                size={20} 
                className={`transition-transform ${popularExpanded ? 'rotate-180' : ''}`}
              />
            </button>
            
            <AnimatePresence>
              {popularExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 overflow-hidden"
                >
                  {popularQuestions.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border border-amber-200">
                      <div className="flex items-start gap-3">
                        <IconTrendingUp className="text-amber-500 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold text-navy mb-1">{item.q}</h4>
                          <p className="text-sm text-slate-600 line-clamp-2">{item.a}</p>
                          <Link 
                            to="/calculate" 
                            className="text-sm text-ice-dark hover:text-ice mt-2 inline-block font-medium"
                          >
                            Learn more →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Tabs */}
            <div className="flex flex-wrap gap-3 justify-center mb-8 sticky top-20 bg-white z-40 pb-4">
              <button
                onClick={() => setOpenSection('all')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                  openSection === 'all'
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-white text-slate-600 border border-slate-200 hover:shadow-md'
                }`}
              >
                <IconFilter size={18} />
                All Categories
                {searchTerm && (
                  <span className="bg-white/20 px-2 py-0.5 rounded text-xs">
                    {totalFilteredQuestions}
                  </span>
                )}
              </button>
              {faqSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setOpenSection(section.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                    openSection === section.id
                      ? 'bg-navy text-white shadow-lg'
                      : 'bg-white text-slate-600 border border-slate-200 hover:shadow-md'
                  }`}
                >
                  <section.icon size={18} />
                  {section.title}
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    openSection === section.id ? 'bg-white/20' : 'bg-slate-100'
                  }`}>
                    {section.questions.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Results Count */}
            {searchTerm && (
              <div className="mb-6 p-4 bg-ice-light rounded-xl">
                <p className="text-center">
                  Found <strong>{totalFilteredQuestions}</strong> results for "<strong>{searchTerm}</strong>"
                </p>
              </div>
            )}

            {/* Questions */}
            {filteredSections.map((section) => (
              <div
                key={section.id}
                className={`${
                  openSection === 'all' || openSection === section.id || searchTerm ? 'block' : 'hidden'
                } mb-8`}
              >
                <h2 className={`text-2xl font-bold text-navy mb-6 flex items-center gap-3`}>
                  <div className={`${section.bgColor} p-2 rounded-xl`}>
                    <section.icon className={section.color} size={28} />
                  </div>
                  {section.title}
                </h2>
                
                <div className="space-y-4">
                  {section.questions.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="card hover:shadow-xl transition-all duration-300 border-l-4"
                      style={{ borderLeftColor: section.color }}
                    >
                      <button
                        onClick={() => toggleQuestion(section.id, index)}
                        className="w-full flex items-start justify-between text-left group"
                      >
                        <div className="pr-4 flex-grow">
                          <div className="flex items-start gap-3">
                            <h3 className="text-lg font-semibold text-navy group-hover:text-ice-dark transition-colors">
                              {item.q}
                            </h3>
                            <div className="flex gap-2 flex-shrink-0">
                              {item.popular && (
                                <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full font-medium">
                                  Popular
                                </span>
                              )}
                              {item.new && (
                                <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">
                                  New
                                </span>
                              )}
                              {item.urgent && (
                                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                                  Urgent
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <IconChevronDown
                          size={24}
                          className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                            openQuestions[`${section.id}-${index}`] ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {openQuestions[`${section.id}-${index}`] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-slate-100">
                              <p className="text-slate-600 leading-relaxed mb-4">
                                {item.a}
                              </p>
                              
                              {item.relatedTopics && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                  <span className="text-xs text-slate-500">Related:</span>
                                  {item.relatedTopics.map((topic, i) => (
                                    <span 
                                      key={i}
                                      className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-lg"
                                    >
                                      {topic}
                                    </span>
                                  ))}
                                </div>
                              )}
                              
                              <div className="mt-4 flex items-center gap-4">
                                <Link
                                  to="/calculate"
                                  className="text-sm text-ice-dark hover:text-ice font-medium inline-flex items-center gap-1"
                                >
                                  Calculate your claim
                                  <IconChevronRight size={16} />
                                </Link>
                                <button className="text-sm text-slate-500 hover:text-slate-700">
                                  <IconBulb size={16} className="inline mr-1" />
                                  Was this helpful?
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {/* No Results */}
            {totalFilteredQuestions === 0 && (
              <div className="text-center py-12">
                <IconAlertCircle className="text-slate-300 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">
                  No questions found
                </h3>
                <p className="text-slate-500 mb-6">
                  Try adjusting your search or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setOpenSection('all')
                  }}
                  className="btn-secondary"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform">
              <IconShieldCheck className="text-emerald mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-navy">100%</div>
              <div className="text-slate-500">Risk Free</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <IconClock className="text-ice-dark mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-navy">21 Days</div>
              <div className="text-slate-500">Claim Submission</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <IconCurrencyPound className="text-emerald mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-navy">25%</div>
              <div className="text-slate-500">Success Fee Only</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <IconScale className="text-navy mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-navy">6 Years</div>
              <div className="text-slate-500">Claim Window</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy to-navy-light text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald/20 text-emerald px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald/30">
              <IconStar size={16} />
              Expert Support Available
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald bg-clip-text text-transparent">
              Can't Find Your Answer?
            </h2>
            
            <p className="text-xl text-slate-200 mb-12 leading-relaxed">
              Don't worry - our energy claim specialists are here to help.
              <span className="block mt-2 text-lg text-slate-300">
                Get personalized guidance tailored to your specific situation.
              </span>
            </p>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <IconMail className="w-10 h-10 text-emerald mb-4 mx-auto" />
                <h3 className="font-semibold text-white mb-2">Contact an Expert</h3>
                <p className="text-slate-300 text-sm">Get personalized guidance from our specialists</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <IconFileSearch className="w-10 h-10 text-emerald mb-4 mx-auto" />
                <h3 className="font-semibold text-white mb-2">Free Assessment</h3>
                <p className="text-slate-300 text-sm">No obligation claim evaluation</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <IconShieldCheck className="w-10 h-10 text-emerald mb-4 mx-auto" />
                <h3 className="font-semibold text-white mb-2">100% Confidential</h3>
                <p className="text-slate-300 text-sm">Your information stays secure</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator"
                className="inline-flex items-center justify-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-xl shadow-emerald/20"
              >
                <IconCalculator size={24} />
                Start Free Calculator
                <IconChevronRight size={20} />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy px-8 py-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-xl"
              >
                <IconMail size={24} />
                Contact Us
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <IconCircleCheck size={16} className="text-emerald" />
                <span>No Win, No Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <IconClock size={16} className="text-emerald" />
                <span>2 Minute Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <IconAward size={16} className="text-emerald" />
                <span>FCA Regulated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 bg-navy text-white p-3 rounded-full shadow-xl hover:bg-ice-dark transition-colors z-50"
          >
            <IconArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQ