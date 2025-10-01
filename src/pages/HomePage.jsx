import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState(0)

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

      {/* Hero Section - Clean Professional Law Firm Style */}
      <section className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #10b981 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:pt-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm uppercase tracking-wider mb-6">
                <IconCircleCheck className="w-5 h-5" />
                <span>Trusted by 10,000+ UK Businesses</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Recover Hidden
                <span className="text-green-600"> Energy Broker </span>
                Commissions
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your energy broker may have taken up to 50% commission without telling you. 
                UK courts ruled this is illegal. We'll get your money back.
              </p>
              
              {/* Key Benefits */}
              <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
                <h2 className="font-bold text-gray-900 text-lg mb-3">Why Choose UCC?</h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <IconCircleCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>No Win, No Fee guarantee</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <IconCircleCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Average recovery of £25,000</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <IconCircleCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>FCA regulated service</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <IconCircleCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>98% success rate on claims</span>
                  </li>
                </ul>
              </div>
              
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/calculator" className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-green-700 transition-colors">
                  Check If You Can Claim
                  <IconArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:08001234567" className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition-colors">
                  <IconPhone className="w-5 h-5" />
                  <span>0800 123 4567</span>
                </a>
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
                  <span>98% Success Rate</span>
                </div>
              </div>
            </div>
            
            {/* Calculator Card - Clean Style */}
            <div className="lg:block">
              <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900">Quick Assessment</h3>
                  <p className="text-sm text-gray-600 mt-1">Find out if you can claim in 2 minutes</p>
                </div>
                <div className="p-6">
                  <InstantCalculator />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Businesses Choose UCC</h2>
            <p className="text-lg text-gray-600">Join thousands of UK businesses recovering their hidden commissions</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">£52M+</div>
              <div className="text-sm text-gray-600">Total Recovered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-sm text-gray-600">Successful Claims</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">21 Days</div>
              <div className="text-sm text-gray-600">Average Settlement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <IconCircleCheck className="w-6 h-6 text-green-500" />
                  <span className="text-green-600 font-semibold">Your Legal Right</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  UK Law Protects Your Right to Recover Hidden Commissions
                </h2>
                <p className="text-gray-600 mb-6">
                  In 2021, UK courts ruled that businesses are entitled to transparency about broker commissions. 
                  If these weren't disclosed, you have a legal right to claim them back.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <IconCircleCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Claims can go back 6 years from today</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCircleCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Average recovery of £18,000 per business</span>
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

      {/* Burden Section - Emotional Impact */}
      <section className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Main Image with Overlay Stats */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"
                    alt="Business team in office meeting"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Floating Stats Cards */}
                  <div className="absolute top-6 left-6 bg-green-500 text-white rounded-2xl p-4 shadow-2xl animate-float">
                    <div className="text-3xl font-bold">£18K</div>
                    <div className="text-sm opacity-90">Average recovery</div>
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-emerald-500 text-white rounded-2xl p-4 shadow-2xl animate-float" style={{animationDelay: '1s'}}>
                    <div className="text-3xl font-bold">6 Years</div>
                    <div className="text-sm opacity-90">Claim period</div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        "The energy broker told us that there were no hidden fees"
                      </h3>
                      <p className="text-gray-600">Manufacturing Director, Birmingham</p>
                      <div className="mt-3 text-green-600 font-bold">Recovered £47,000 in 19 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="badge badge-emerald mb-4">The Hidden Truth</span>
              <h2 className="mb-6">
                Your Energy Broker Is
                <span className="text-green-600"> Secretly Profiting</span> From You
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                While you trusted them to get you the best deal, energy brokers have been taking 
                massive hidden commissions from your contracts - without telling you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 bg-red-50 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">£</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Thousands in Hidden Fees Every Year</h4>
                    <p className="text-sm text-gray-600">Brokers receive up to 50% commission without disclosure</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-amber-50 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Six Years of Overpayments</h4>
                    <p className="text-sm text-gray-600">You can claim back charges from the past 6 years</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-green-50 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <IconCircleCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">We Fight For You</h4>
                    <p className="text-sm text-gray-600">No win, no fee - we handle everything while you run your business</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/calculator" className="btn btn-primary">
                  Discover Your Hidden Costs
                  <IconArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with Images */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-emerald mb-4">How We Work</span>
            <h2 className="mb-4">Three Simple Steps to Recovery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle everything. You focus on your business. 
              Our expert team manages the entire claims process from start to finish.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Process steps */}
            <div>
              <div className="space-y-8">
                {process.map((step, index) => (
                  <div key={index} className="flex gap-6 group hover:bg-gray-50 p-4 rounded-xl transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="flex items-center text-sm text-green-600 font-medium">
                        <IconClock className="w-4 h-4 mr-1" />
                        {step.time}
                      </div>
                    </div>
                    <div className="hidden lg:block w-24 h-24 rounded-lg overflow-hidden">
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex gap-4">
                <Link to="/calculator" className="btn btn-primary">
                  Start Your Claim
                  <IconArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary">
                  View Details
                </Link>
              </div>
            </div>
            
            {/* Right side - CTA Focus */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-6">Start Your Claim Today</h3>
                <p className="text-green-100 mb-8">
                  Join thousands of UK businesses who've already recovered their hidden commissions. 
                  It takes just 2 minutes to check your eligibility.
                </p>
                
                {/* Key Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <IconCircleCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">100% Risk Free</div>
                      <div className="text-sm text-green-100">No win = no fee guarantee</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <IconClock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Fast Results</div>
                      <div className="text-sm text-green-100">Average 21 days to payment</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <IconShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">FCA Regulated</div>
                      <div className="text-sm text-green-100">Professional & compliant service</div>
                    </div>
                  </div>
                </div>
                
                {/* Multiple CTAs */}
                <div className="space-y-3">
                  <Link to="/calculator" className="block w-full bg-white text-green-700 py-4 px-6 rounded-lg font-bold text-center hover:bg-green-50 transition-all group">
                    <span className="flex items-center justify-center gap-2">
                      <IconCalculator className="w-5 h-5" />
                      Start Free Assessment
                      <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <a href="tel:08001234567" className="block w-full bg-green-800 text-white py-4 px-6 rounded-lg font-bold text-center hover:bg-green-900 transition-all">
                    <span className="flex items-center justify-center gap-2">
                      <IconPhone className="w-5 h-5" />
                      Call Free: 0800 123 4567
                    </span>
                  </a>
                  <Link to="/how-it-works" className="block w-full border-2 border-white/30 text-white py-3 px-6 rounded-lg font-medium text-center hover:bg-white/10 transition-all">
                    Learn How It Works
                  </Link>
                </div>
                
                {/* Trust Badge */}
                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                  <div className="text-xs text-green-100">Trusted by 10,000+ UK businesses</div>
                  <div className="flex justify-center gap-1 mt-2">
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Enhanced */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
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
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
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
          <div className="text-center mb-12">
            <h2 className="mb-4">Why UK Businesses Trust UCC</h2>
            <p className="text-xl text-gray-600">
              We're the regulated, professional choice for energy commission claims
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
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

      {/* Testimonials - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-emerald mb-4">Success Stories</span>
            <h2 className="mb-4">Real Businesses, Real Results</h2>
            <p className="text-xl text-gray-600">
              Join thousands of UK businesses who've successfully recovered their hidden commissions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
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
          <div className="text-center mb-12">
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
              <a href="tel:08001234567" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                <IconPhone className="w-4 h-4" />
                Call 0800 123 4567
              </a>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">
              Your Money
              <span className="text-green-600 font-semibold"> Is Waiting</span>
            </h2>
            <p className="text-gray-600 text-sm">Join thousands recovering hidden broker commissions</p>
          </div>
          
          {/* Clean Content Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-10 mb-12">
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
                    <span className="text-sm">Average £18,000 per business recovered</span>
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
            
            {/* Stats Bar */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg py-4 px-6">
                  <div className="text-2xl font-semibold text-green-600">£3,247,891</div>
                  <div className="text-xs text-gray-600 mt-1">Recovered This Month</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg py-4 px-6">
                  <div className="text-2xl font-semibold text-green-600">1,847</div>
                  <div className="text-xs text-gray-600 mt-1">Businesses Helped</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Refined CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/calculator" className="group">
              <div className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2.5 shadow-sm">
                <IconCalculator className="w-4 h-4" />
                <span>Claim Your Money Now</span>
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <a href="tel:08001234567" className="group">
              <div className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 px-8 py-3.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2.5 shadow-sm">
                <IconPhone className="w-4 h-4 text-green-600" />
                <span>Free Consultation: 0800 123 4567</span>
              </div>
            </a>
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