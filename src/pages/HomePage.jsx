import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { 
  IconArrowRight,
  IconCircleCheck,
  IconTrendingUp,
  IconClock,
  IconShieldCheck,
  IconCalculator,
  IconChevronRight,
  IconAlertCircle,
  IconFileSearch,
  IconScale,
  IconCash,
  IconPhone,
  IconMail,
  IconUsers,
  IconBuildingSkyscraper,
  IconAward,
  IconChartBar,
  IconLock,
  IconRocket,
  IconHandStop,
  IconQuestionMark
} from '@tabler/icons-react'
import InstantCalculator from '../components/InstantCalculator'
import SupplierSection from '../components/SupplierSection'

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState(0)
  const heroRef = useRef(null)
  
  // Initialize scroll animations
  useScrollAnimation()
  
  // Number counter animation function
  const animateValue = (start, end, duration, element) => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      element.textContent = Math.floor(progress * (end - start) + start).toLocaleString()
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }
  
  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const parallaxElements = heroRef.current.querySelectorAll('.parallax')
        parallaxElements.forEach(element => {
          const speed = element.dataset.speed || 0.5
          element.style.transform = `translateY(${scrolled * speed}px)`
        })
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stats = [
    { value: 'No Win', label: 'No Fee', icon: <IconShieldCheck className="w-5 h-5" /> },
    { value: 'FCA', label: 'Regulated', icon: <IconAward className="w-5 h-5" /> },
    { value: '21', label: 'Days Average', icon: <IconClock className="w-5 h-5" /> },
    { value: '6', label: 'Years Claimable', icon: <IconChartBar className="w-5 h-5" /> }
  ]

  const process = [
    {
      number: '01',
      title: 'Free Analysis',
      description: 'We review your energy contracts to identify hidden broker commissions - completely free',
      time: '24 hours',
      icon: <IconFileSearch className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400'
    },
    {
      number: '02',
      title: 'Build Your Case',
      description: 'Our legal experts prepare comprehensive documentation to support your claim',
      time: '5-7 days',
      icon: <IconScale className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400'
    },
    {
      number: '03',
      title: 'Secure Your Money',
      description: 'We negotiate with suppliers to recover your funds - you only pay if we win',
      time: '14-21 days',
      icon: <IconCash className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400'
    }
  ]

  const testimonials = [
    {
      text: 'The process was remarkably straightforward. UCC handled everything professionally and we received our compensation within 3 weeks.',
      author: 'Manufacturing Director',
      company: 'Birmingham',
      rating: 5
    },
    {
      text: 'We had no idea these commissions existed in our contracts. UCC\u2019s expertise made all the difference in recovering our funds quickly.',
      author: 'Finance Manager',
      company: 'Manchester',
      rating: 5
    },
    {
      text: 'Outstanding service from start to finish. The no win, no fee structure meant zero risk for our business. Highly recommend.',
      author: 'Operations Director',
      company: 'London',
      rating: 5
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: '🏭', percentage: '28%', description: 'Heavy energy users with significant recovery potential' },
    { name: 'Healthcare', icon: '🏥', percentage: '24%', description: 'NHS trusts and private facilities eligible' },
    { name: 'Hospitality', icon: '🏨', percentage: '22%', description: 'Hotels, restaurants, and venues commonly affected' },
    { name: 'Retail', icon: '🛍️', percentage: '20%', description: 'High street and warehouse operations' },
    { name: 'Offices', icon: '🏢', percentage: '18%', description: 'Commercial buildings and business centers' },
    { name: 'Education', icon: '🎓', percentage: '25%', description: 'Schools, colleges, and universities' },
    { name: 'Warehousing', icon: '📦', percentage: '30%', description: 'Distribution centers with high energy usage' },
    { name: 'Care Homes', icon: '🏘️', percentage: '15%', description: 'Residential care facilities and nursing homes' }
  ]

  const trustSignals = [
    { icon: <IconLock className="w-6 h-6" />, title: 'Data Protected', description: 'ICO registered & GDPR compliant' },
    { icon: <IconAward className="w-6 h-6" />, title: 'FCA Regulated', description: 'Authorized claims management' },
    { icon: <IconHandStop className="w-6 h-6" />, title: 'No Win, No Fee', description: '100% risk-free service' },
    { icon: <IconUsers className="w-6 h-6" />, title: 'Expert Team', description: 'Specialist energy lawyers' }
  ]

  const faqs = [
    {
      question: "How do I know if I have a claim?",
      answer: "If you've used an energy broker in the last 6 years and weren't told about their commission, you likely have a claim. 90% of UK businesses have been affected. Red flags include: being told it's a 'free service', not receiving written disclosure of fees, or being pushed into long-term contracts."
    },
    {
      question: "How much are hidden commissions typically?",
      answer: "Brokers typically add 10-50% commission to your energy costs without disclosure. For example, if your supplier charges 12p/kWh, the broker might add 2-6p/kWh as hidden commission. This can amount to thousands of pounds per year."
    },
    {
      question: "What's the average claim worth?",
      answer: "Claims vary by business size and sector. Average claims range from £25,000 to £80,000. Manufacturing and hospitality businesses often have larger claims due to higher energy usage. We've seen claims exceed £240,000 for energy-intensive businesses."
    },
    {
      question: "Can I claim on my current contract?",
      answer: "Yes, absolutely. You can claim against both past and current contracts. Claiming won't affect your energy supply - it continues as normal. You may even be able to negotiate reduced rates or exit your current contract if undisclosed commissions are found."
    },
    {
      question: "Is this legal?",
      answer: "100% legal and regulated by Ofgem. UK courts and Ofgem have ruled that undisclosed commissions are unlawful. The Consumer Rights Act 2015 requires full transparency. Energy suppliers are legally obligated to disclose all commissions and fees."
    },
    {
      question: "What documents do I need?",
      answer: "We can obtain everything for you. Ideally, having your energy bills or contracts helps speed up the process, but if you don't have them, we can request all documentation from your supplier with your authorization. The process is designed to be hassle-free."
    },
    {
      question: "How long does the process take?",
      answer: "Average 21 days from start to payment. Initial assessment takes 2 minutes. Document review takes 24-48 hours. Building your case takes 5-7 days. Most claims are settled within 14-21 days, though complex cases may take slightly longer."
    },
    {
      question: "What if my broker said it was free?",
      answer: "This is a major red flag. If a broker told you their service was 'free' or 'the supplier pays', they likely hid substantial commissions in your rates. This is considered mis-selling and strengthens your claim significantly."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-green-600 text-white py-3 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-medium">Free Assessment Available</span>
          <span className="mx-2">•</span>
          <span>No Win, No Fee</span>
          <span className="mx-2">•</span>
          <span>FCA Regulated Service</span>
        </div>
      </div>

      {/* Hero Section - Modern Professional Style */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-gray-50 via-white to-green-50/30 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:pt-8">
              {/* Main Headline with Badge */}
              <div className="mb-6 fade-up">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  FCA Regulated • No Win No Fee
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Recover Your Hidden
                  <span className="block text-green-600">Energy Broker Commissions</span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed fade-up max-w-xl">
                <span className="font-semibold">Did you know?</span> Your energy broker may have taken up to 
                <span className="text-green-600 font-bold">50% commission</span> without telling you. 
                UK courts ruled this is illegal. <span className="underline decoration-green-500 decoration-2">We'll get your money back.</span>
              </p>
              
              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 fade-up">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">No Win</div>
                  <div className="text-sm text-gray-600">No Fee</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">Fast</div>
                  <div className="text-sm text-gray-600">Processing</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">FCA</div>
                  <div className="text-sm text-gray-600">Regulated</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">£0</div>
                  <div className="text-sm text-gray-600">Upfront Cost</div>
                </div>
              </div>
              
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 fade-up">
                <Link to="/calculator" className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <IconCalculator className="w-5 h-5" />
                  Start Free Assessment Now
                  <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/how-it-works" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:border-green-600 hover:text-green-600 transition-all">
                  Learn How It Works
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <IconShieldCheck className="w-5 h-5 text-green-600" />
                  <span>FCA Regulated</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconClock className="w-5 h-5 text-green-600" />
                  <span>2 Minute Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconAward className="w-5 h-5 text-green-600" />
                  <span>Expert Legal Team</span>
                </div>
              </div>
            </div>
            
            {/* Calculator Card - Enhanced Design */}
            <div className="lg:block">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden scale-in relative">
                {/* Premium Badge */}
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  2 Min Assessment
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Check Your Eligibility</h3>
                  <p className="text-sm text-gray-600 mt-1">Get instant results - 100% free & confidential</p>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/50">
                  <InstantCalculator />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* OFGEM Report Alert */}
      <section className="py-8 bg-amber-50 border-t-4 border-amber-400 fade-up">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <IconAlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">OFGEM Report Confirms Widespread Mis-Selling</h3>
                <p className="text-gray-700">
                  On 28th March 2022, OFGEM confirmed that over 2 million UK businesses have been mis-sold energy contracts with undisclosed commissions
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">£2,000 - £150,000</div>
                <div className="text-sm text-gray-600">Potential compensation per business</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100 scale-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 fade-up">
                  <IconCircleCheck className="w-6 h-6 text-green-500" />
                  <span className="text-green-600 font-semibold">Your Legal Right</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 fade-up">
                  "Secret Commissions" Are Now Illegal - Claim Yours Back
                </h2>
                <p className="text-gray-600 mb-6">
                  UK courts have ruled that undisclosed broker commissions are "secret commissions" and businesses 
                  are entitled to full transparency. If these weren't disclosed, you have a legal right to claim them back.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <IconCircleCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Claims can go back 6 years from today</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCircleCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Significant compensation possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCircleCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Free assessment with no obligation</span>
                  </li>
                </ul>
                <Link to="/calculator" className="btn btn-primary btn-lg">
                  Check My Eligibility
                  <IconArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600"
                  alt="Business documents and calculator"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg font-bold">
                  FCA Regulated Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Hidden Commissions Work - Educational Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Educational Content */}
            <div className="fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                The Hidden Commission
                <span className="text-blue-600"> Scheme Explained</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover how thousands of UK businesses are unknowingly paying massive 
                broker fees hidden inside their energy bills. See if you're one of them.
              </p>
              
              {/* Commission Breakdown */}
              <div className="space-y-4 mb-8">
                <div className="bg-blue-100 rounded-xl p-5 border-l-4 border-blue-500">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">True energy cost from supplier</span>
                    <span className="text-2xl font-bold text-gray-900">14p/kWh</span>
                  </div>
                </div>
                
                <div className="bg-red-100 rounded-xl p-5 border-l-4 border-red-500">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Hidden broker commission added</span>
                    <span className="text-2xl font-bold text-red-600">+8p/kWh</span>
                  </div>
                </div>
                
                <div className="bg-gray-900 text-white rounded-xl p-5">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">What you actually pay</span>
                    <span className="text-2xl font-bold text-yellow-400">22p/kWh</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    (That's 57% above the real cost!)
                  </p>
                </div>
                
                <div className="bg-green-100 rounded-xl p-5 border-l-4 border-green-500">
                  <div className="flex items-start gap-3">
                    <IconCircleCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">The broker gets paid 8p/kWh</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Secretly taken from your payments without your knowledge or consent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link to="/calculator" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                Uncover Your Hidden Costs
                <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Right Side - Visual Impact */}
            <div className="relative fade-up">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-50 rounded-3xl p-8 lg:p-10 shadow-xl">
                <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💡</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Exposing The Truth</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <p className="text-sm text-gray-700">
                        UK businesses are paying <span className="font-bold">3x more</span> than in 2020
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <p className="text-sm text-gray-700">
                        Average broker takes <span className="font-bold">20-50%</span> commission
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <p className="text-sm text-gray-700">
                        <span className="font-bold">£3.2 billion</span> in hidden fees annually
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    Ready to Fight Back?
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Our expert team has already recovered millions for UK businesses. 
                    Your money could be next.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-green-600">98%</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-green-600">£0</div>
                      <div className="text-xs text-gray-500">Upfront</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-2xl font-bold text-green-600">21</div>
                      <div className="text-xs text-gray-500">Days Avg</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full p-4 shadow-lg animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold">⚠️</div>
                  <div className="text-xs">Alert!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affected Suppliers Section */}
      <SupplierSection />

      {/* Success Story Section - Enhanced Design */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern - More Visible */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <IconUsers className="w-4 h-4" />
              Real Client Success Story
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Discover How We Exposed
              <span className="text-green-600"> Hidden Broker Commissions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of UK businesses who've successfully reclaimed their money
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Enhanced Story Card */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8 lg:p-10">
                  {/* Client Quote Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      MD
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Manufacturing Director</h3>
                      <p className="text-gray-600">Birmingham-based Manufacturing Company</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Main Quote */}
                  <div className="relative mb-8">
                    <svg className="absolute -top-2 -left-2 w-8 h-8 text-green-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-xl lg:text-2xl font-medium text-gray-800 italic pl-8">
                      The energy broker told us that there were no hidden fees. 
                      <span className="text-green-600"> We trusted them completely.</span>
                    </p>
                  </div>

                  {/* Timeline Story */}
                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">The Discovery</h4>
                        <p className="text-sm text-gray-600">After years of paying inflated energy bills, we discovered our "free" broker was taking 35% commission</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-amber-600 text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">UCC Investigation</h4>
                        <p className="text-sm text-gray-600">UCC analyzed 6 years of our contracts and found systematic overcharging totaling £47,000</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Full Recovery</h4>
                        <p className="text-sm text-gray-600">Money recovered in just 19 days - funds we can now reinvest in our business growth</p>
                      </div>
                    </div>
                  </div>

                  {/* Results Banner */}
                  <div className="bg-green-600 rounded-2xl p-6 text-white">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl lg:text-3xl font-bold">£47K</div>
                        <div className="text-xs lg:text-sm opacity-90">Recovered</div>
                      </div>
                      <div className="border-x border-white/20">
                        <div className="text-2xl lg:text-3xl font-bold">19</div>
                        <div className="text-xs lg:text-sm opacity-90">Days</div>
                      </div>
                      <div>
                        <div className="text-2xl lg:text-3xl font-bold">£0</div>
                        <div className="text-xs lg:text-sm opacity-90">Upfront</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Key Points */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 fade-up">
                  The Shocking Truth About
                  <span className="text-green-600"> Energy Broker Commissions</span>
                </h3>
                <p className="text-lg text-gray-600 mb-6 fade-up">
                  90% of UK businesses are unknowingly paying hidden broker commissions. 
                  These "secret profits" have been ruled illegal by UK courts.
                </p>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 scale-in">
                  <div className="text-3xl font-bold text-green-600 mb-1">90%</div>
                  <p className="text-sm text-gray-600">of UK businesses affected</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 scale-in">
                  <div className="text-3xl font-bold text-green-600 mb-1">£2.2bn</div>
                  <p className="text-sm text-gray-600">in hidden commissions yearly</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 scale-in">
                  <div className="text-3xl font-bold text-green-600 mb-1">10-50%</div>
                  <p className="text-sm text-gray-600">typical broker commission</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 scale-in">
                  <div className="text-3xl font-bold text-green-600 mb-1">6 years</div>
                  <p className="text-sm text-gray-600">claim back period</p>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl mb-8 fade-up">
                <div className="flex gap-3">
                  <IconAlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Don't Wait - Time Is Running Out</h4>
                    <p className="text-sm text-gray-700">
                      You can only claim back 6 years. Every day you wait is money lost forever. 
                      Start your free assessment now before it's too late.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 fade-up">
                <Link to="/calculator" className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <IconCalculator className="w-5 h-5" />
                  Check If You're Affected
                  <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/how-it-works" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-900 px-6 py-4 rounded-xl font-semibold hover:border-green-600 hover:text-green-600 transition-all">
                  See How It Works
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                <IconShieldCheck className="w-5 h-5 text-green-600" />
                <span>FCA Regulated • No Win No Fee • 100% Confidential</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Clean Professional */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to recover your hidden commissions. We handle everything.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Process Steps - No Images */}
            {[
              {
                number: "01",
                title: "Free Analysis",
                description: "We review your energy contracts to identify hidden broker commissions - completely free",
                time: "24 hours",
                icon: <IconFileSearch className="w-6 h-6" />
              },
              {
                number: "02",
                title: "Build Your Case",
                description: "Our legal experts prepare comprehensive documentation to support your claim",
                time: "5-7 days",
                icon: <IconScale className="w-6 h-6" />
              },
              {
                number: "03",
                title: "Secure Your Money",
                description: "We negotiate with suppliers to recover your funds - you only pay if we win",
                time: "14-21 days",
                icon: <IconCash className="w-6 h-6" />
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow scale-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="flex items-center text-sm text-green-600 font-medium">
                      <IconClock className="w-4 h-4 mr-1" />
                      {step.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="mt-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-green-600 to-emerald-600 p-12 lg:p-16">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Limited Time Offer - Act Now
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    Start Your Claim Today
                  </h3>
                  <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
Successfully recover your hidden energy broker commissions
                  </p>
                  
                  {/* Key Benefits Grid */}
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconCircleCheck className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-white text-lg mb-2">100% Risk Free</h4>
                      <p className="text-green-100 text-sm">No win = no fee guarantee. You only pay if we recover your money</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconClock className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-white text-lg mb-2">Fast Results</h4>
                      <p className="text-green-100 text-sm">Average 21 days to payment. Quick assessment in just 2 minutes</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconShieldCheck className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-white text-lg mb-2">FCA Regulated</h4>
                      <p className="text-green-100 text-sm">Professional service fully compliant with UK regulations</p>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link to="/calculator" className="group inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                      <IconCalculator className="w-6 h-6" />
                      Start Free Assessment
                      <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-green-800 bg-opacity-50 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-opacity-70 transition-all">
                      <IconMail className="w-6 h-6" />
                      Contact Us
                    </Link>
                  </div>
                  
                  <Link to="/how-it-works" className="text-green-100 hover:text-white text-sm font-medium">
                    Learn how it works →
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Enhanced */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-up">
            <span className="badge badge-emerald mb-4">Industry Expertise</span>
            <h2 className="mb-4">Every Business Sector Is Affected</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small retailers to large manufacturers, hidden energy broker commissions 
              impact every UK business. See how your industry is affected.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group stagger-in"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{industry.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-600">
                    Avg. commission: {industry.percentage}
                  </span>
                  <IconArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-all group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don't see your industry?</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Our Experts
              <IconArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <h2 className="mb-4">Why UK Businesses Trust UCC</h2>
            <p className="text-xl text-gray-600">
              We're the regulated, professional choice for energy commission claims
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center stagger-in">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600">
                  {signal.icon}
                </div>
                <h3 className="font-semibold mb-2">{signal.title}</h3>
                <p className="text-sm text-gray-600">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Design */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              Client Success Stories
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Satisfied Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from UK businesses we've helped recover their hidden commissions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all border border-gray-100 slide-in transform hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <svg className="w-8 h-8 text-green-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="relative">
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/calculator" className="btn btn-primary btn-lg">
              Join Them Today
              <IconArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Interactive Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Minimal Header */}
          <div className="text-center mb-12 fade-up">
            <h2 className="text-3xl font-light text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600">Clear answers about energy broker commission claims</p>
          </div>
          
          {/* Interactive FAQ Accordion */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${
                  activeFAQ === index ? 'bg-gray-50 border-green-500' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? -1 : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      activeFAQ === index ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className={`font-medium transition-colors ${
                      activeFAQ === index ? 'text-green-700' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`transition-transform duration-300 ${
                    activeFAQ === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ${
                  activeFAQ === index ? 'max-h-96' : 'max-h-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-5 pl-[72px]">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Clean Stats Bar */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-light text-green-600">90%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">UK Businesses Affected</div>
              </div>
              <div>
                <div className="text-3xl font-light text-green-600">50%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Max Commission</div>
              </div>
              <div>
                <div className="text-3xl font-light text-green-600">£80k</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Average Claim</div>
              </div>
              <div>
                <div className="text-3xl font-light text-green-600">21</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Days to Payment</div>
              </div>
            </div>
          </div>
          
          {/* Simple CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Have more questions?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/calculator" className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                <IconCalculator className="w-4 h-4" />
                Check Your Eligibility
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                <IconMail className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Refined */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          {/* Refined Header */}
          <div className="text-center mb-12 fade-up">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">
              Your Money
              <span className="text-green-600 font-semibold"> Is Waiting</span>
            </h2>
            <p className="text-gray-600 text-sm">Recover your hidden broker commissions</p>
          </div>
          
          {/* Clean Content Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-10 mb-12 scale-in">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left Column */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">What You're Missing:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <IconCircleCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Up to 50% broker commission hidden in your bills</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <IconCircleCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">6 years of overcharges you can claim back</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <IconCircleCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Significant compensation possible for your business</span>
                  </li>
                </ul>
              </div>
              
              {/* Right Column */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">What We Deliver:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <IconCircleCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Free assessment in under 2 minutes</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <IconCircleCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">No win = no fee guarantee</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <IconCircleCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Money in your account within 21 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Refined CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center fade-up">
            <Link to="/calculator" className="group">
              <div className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2.5 shadow-sm">
                <IconCalculator className="w-4 h-4" />
                <span>Claim Your Money Now</span>
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link to="/contact" className="group">
              <div className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 px-8 py-3.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2.5 shadow-sm">
                <IconMail className="w-4 h-4 text-green-600" />
                <span>Free Consultation</span>
              </div>
            </Link>
          </div>
          
          {/* Trust Bar */}
          <div className="flex justify-center gap-6 mt-10 text-gray-500 text-xs">
            <span className="flex items-center gap-1">
              <IconShieldCheck className="w-3.5 h-3.5" />
              FCA Regulated
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <IconCircleCheck className="w-3.5 h-3.5" />
              No Win No Fee
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <IconLock className="w-3.5 h-3.5" />
              100% Confidential
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage