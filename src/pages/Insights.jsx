import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  IconArrowRight,
  IconCalendar,
  IconClock,
  IconEye,
  IconTrendingUp,
  IconAlertCircle,
  IconBulb,
  IconScale,
  IconChartBar,
  IconSearch,
  IconFilter,
  IconChevronRight,
  IconShieldCheck,
  IconUsers
} from '@tabler/icons-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  useScrollAnimation()

  const categories = [
    { id: 'all', name: 'All Articles', count: 12 },
    { id: 'industry', name: 'Industry Analysis', count: 4 },
    { id: 'legal', name: 'Legal Updates', count: 3 },
    { id: 'guides', name: 'Expert Guides', count: 3 },
    { id: 'news', name: 'Breaking News', count: 2 }
  ]

  const articles = [
    {
      id: 1,
      category: 'industry',
      featured: true,
      title: 'Manufacturing Sector Faces £2.8 Billion Energy Overcharge Crisis',
      excerpt: 'Exclusive analysis reveals UK manufacturers are losing billions annually to undisclosed broker commissions, with heavy industry bearing the brunt of secret energy markups.',
      content: 'Recent investigations have uncovered that UK manufacturing businesses are collectively overpaying £2.8 billion per year in hidden energy broker fees. These undisclosed commissions, averaging 35% above base rates, are decimating profit margins across the sector.',
      author: 'Energy Claims Team',
      date: 'September 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      stats: { views: '12.5K', shares: 234 },
      href: '/insights/manufacturing-crisis'
    },
    {
      id: 2,
      category: 'legal',
      featured: true,
      title: 'Landmark Court Victory: Judge Rules Energy Commissions "Fundamentally Deceptive"',
      excerpt: 'High Court delivers crushing blow to energy brokers, declaring undisclosed commissions breach fiduciary duty and consumer protection laws.',
      content: 'In a groundbreaking decision that sends shockwaves through the energy sector, the High Court has ruled that energy brokers who fail to disclose their commissions are engaged in "fundamentally deceptive practices" that violate UK consumer law.',
      author: 'Legal Department',
      date: 'September 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
      stats: { views: '18.2K', shares: 456 },
      href: '/insights/court-victory'
    },
    {
      id: 3,
      category: 'guides',
      title: 'Red Flags: 7 Signs Your Energy Broker Is Hiding Commissions',
      excerpt: 'Learn to identify the warning signs that your broker may be taking secret profits from your energy contracts.',
      content: 'Industry insiders reveal the telltale signs that indicate your energy broker is receiving undisclosed commissions. From vague pricing structures to pressure tactics, discover what to watch for.',
      author: 'Investigation Team',
      date: 'August 2025',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      stats: { views: '9.8K', shares: 189 },
      href: '/insights/red-flags'
    },
    {
      id: 4,
      category: 'news',
      title: 'BREAKING: Ofgem Launches Probe into Systemic Broker Misconduct',
      excerpt: 'Energy regulator announces sweeping investigation following evidence of widespread commission concealment affecting millions of businesses.',
      content: 'Ofgem has initiated a comprehensive investigation into energy broker practices after receiving overwhelming evidence of systematic commission hiding across the industry.',
      author: 'News Desk',
      date: 'August 2025',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
      stats: { views: '22.1K', shares: 678 },
      href: '/insights/ofgem-investigation'
    },
    {
      id: 5,
      category: 'industry',
      title: 'Healthcare Providers Reclaim £180 Million in Hidden Energy Fees',
      excerpt: 'NHS trusts and private healthcare facilities successfully recover massive sums after discovering years of broker overcharging.',
      content: 'A coordinated effort by healthcare providers has resulted in the recovery of £180 million in undisclosed energy broker commissions, with individual claims ranging from £50,000 to £2.3 million.',
      author: 'Sector Analysis Team',
      date: 'July 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
      stats: { views: '14.3K', shares: 345 },
      href: '/insights/healthcare-recovery'
    },
    {
      id: 6,
      category: 'legal',
      title: 'Your Legal Rights: Energy Broker Transparency Requirements Explained',
      excerpt: 'Understanding the regulations that require brokers to disclose all commissions and how to enforce your rights.',
      content: 'UK law mandates complete transparency in energy broker dealings. This comprehensive guide explains your legal protections and the steps to take when brokers violate disclosure requirements.',
      author: 'Legal Team',
      date: 'July 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800',
      stats: { views: '11.7K', shares: 267 }
    },
    {
      id: 7,
      category: 'guides',
      title: 'Step-by-Step: Calculating Your Hidden Energy Broker Costs',
      excerpt: 'Practical guide to uncovering exactly how much your broker is secretly earning from your energy contracts.',
      content: 'This detailed walkthrough shows you precisely how to calculate the hidden commissions in your energy bills, with real examples and calculation templates.',
      author: 'Expert Analysis',
      date: 'June 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800',
      stats: { views: '16.9K', shares: 423 },
      href: '/insights/calculation-guide'
    },
    {
      id: 8,
      category: 'news',
      title: 'Energy Broker Giant Faces £45 Million Compensation Order',
      excerpt: 'Major broker ordered to repay millions after systematic commission concealment exposed by whistleblower.',
      content: 'One of the UK\'s largest energy brokers has been ordered to pay £45 million in compensation after internal documents revealed a deliberate policy of hiding commissions from business clients.',
      author: 'Investigation Unit',
      date: 'May 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      stats: { views: '25.6K', shares: 891 }
    },
    {
      id: 9,
      category: 'industry',
      title: 'Hospitality Sector Bleeding £400 Million Annually in Secret Fees',
      excerpt: 'Hotels, restaurants and venues losing millions to energy brokers exploiting post-pandemic vulnerabilities.',
      content: 'The hospitality industry, already struggling with post-pandemic recovery, is hemorrhaging £400 million yearly through concealed energy broker commissions, new research reveals.',
      author: 'Industry Research',
      date: 'April 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      stats: { views: '13.2K', shares: 312 }
    },
    {
      id: 10,
      category: 'legal',
      title: 'Class Action Lawsuit: 50,000 Businesses Unite Against Broker Fraud',
      excerpt: 'Historic legal action sees unprecedented coalition of businesses seeking justice for systematic commission deception.',
      content: 'In the largest class action of its kind, 50,000 UK businesses have joined forces to pursue legal action against energy brokers for years of undisclosed commission taking.',
      author: 'Legal Affairs',
      date: 'March 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=800',
      stats: { views: '28.4K', shares: 1023 }
    },
    {
      id: 11,
      category: 'guides',
      title: 'Emergency Guide: What to Do If You Discover Hidden Commissions',
      excerpt: 'Immediate actions to take when you uncover that your broker has been hiding fees in your energy contracts.',
      content: 'Time is critical when you discover broker fraud. This emergency guide provides a step-by-step action plan to protect your rights and maximize your compensation claim.',
      author: 'Claims Team',
      date: 'February 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
      stats: { views: '19.8K', shares: 567 },
      href: '/insights/emergency-guide'
    },
    {
      id: 12,
      category: 'industry',
      title: 'Small Business Devastation: Energy Costs Destroying UK SMEs',
      excerpt: 'Hidden broker fees pushing thousands of small businesses toward insolvency as energy costs spiral out of control.',
      content: 'Small and medium enterprises across the UK face an existential crisis as concealed broker commissions compound already crushing energy costs, with many forced to close their doors.',
      author: 'SME Focus Team',
      date: 'January 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      stats: { views: '21.3K', shares: 789 },
      href: '/insights/sme-impact'
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticles = articles.filter(article => article.featured)

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 fade-up">
              <IconBulb className="w-4 h-4" />
              Industry Intelligence & Analysis
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 fade-up">
              Energy Market Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 fade-up">
              Exposing the truth about energy broker practices, industry developments, 
              and your rights as a UK business owner
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto fade-up">
              <div className="relative">
                <IconSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, guides, and legal updates..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Analysis</h2>
            <div className="flex items-center gap-2 text-green-600">
              <IconTrendingUp className="w-5 h-5" />
              <span className="text-sm font-semibold">Most Important</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Link key={article.id} to={article.href} className="group cursor-pointer scale-in block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <IconEye className="w-4 h-4" />
                          {article.stats.views}
                        </span>
                        <span>{article.stats.shares} shares</span>
                      </div>
                      <span className="text-green-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <IconArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 sticky top-14 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <IconFilter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-80">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(a => !a.featured).map((article, index) => (
              <Link key={article.id} to={article.href || '#'} className="group cursor-pointer stagger-in block" style={{animationDelay: `${index * 0.1}s`}}>
                <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <IconEye className="w-3 h-3" />
                          {article.stats.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <IconClock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <span className="text-green-600 text-sm font-semibold">
                        Read →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <IconSearch className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <IconAlertCircle className="w-4 h-4" />
            Stay Informed • Protect Your Business
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get Breaking Energy Market Intelligence
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Join 15,000+ UK business owners receiving exclusive insights on energy broker 
            practices and how to protect your business from overcharging
          </p>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl p-2 flex gap-2">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-4 py-3 outline-none"
              />
              <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-green-100 text-sm mt-4">
              No spam, unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Essential Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/calculator" className="group">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                  <IconChartBar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Commission Calculator
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Instantly calculate how much you're overpaying in hidden broker fees
                </p>
                <span className="text-green-600 font-semibold text-sm flex items-center gap-1">
                  Calculate Now
                  <IconChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link to="/how-it-works" className="group">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <IconScale className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Claims Process Guide
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Step-by-step guide to recovering your hidden energy broker commissions
                </p>
                <span className="text-green-600 font-semibold text-sm flex items-center gap-1">
                  Learn More
                  <IconChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link to="/contact" className="group">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                  <IconUsers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Expert Consultation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Speak with our specialists about your specific situation
                </p>
                <span className="text-green-600 font-semibold text-sm flex items-center gap-1">
                  Get Help
                  <IconChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Insights