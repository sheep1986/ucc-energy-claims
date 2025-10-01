import { motion } from 'framer-motion'
import { 
  IconDownload, 
  IconFileText, 
  IconVideo, 
  IconBook, 
  IconCalculator,
  IconChevronRight,
  IconClock,
  IconEye,
  IconGavel,
  IconBuildingBank,
  IconShieldCheck,
  IconTrendingUp
} from '@tabler/icons-react'

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Essential Guides',
      description: 'Comprehensive guides to understanding energy broker commissions',
      icon: IconBook,
      color: 'from-blue-500 to-blue-600',
      resources: [
        {
          title: 'Complete Guide to Energy Broker Commissions',
          type: 'PDF Guide',
          duration: '15 min read',
          views: '12,450',
          description: 'Everything you need to know about hidden broker commissions and your legal rights.',
          downloadUrl: '#'
        },
        {
          title: 'Supreme Court Ruling Explained',
          type: 'Legal Brief',
          duration: '8 min read',
          views: '8,920',
          description: 'Understanding the landmark Supreme Court decision that changed everything.',
          downloadUrl: '#'
        },
        {
          title: 'Industry Impact Report 2024',
          type: 'Research Report',
          duration: '20 min read',
          views: '6,780',
          description: 'Latest data on hidden commissions across UK industries.',
          downloadUrl: '#'
        }
      ]
    },
    {
      title: 'Video Resources',
      description: 'Visual explanations of the claims process',
      icon: IconVideo,
      color: 'from-purple-500 to-purple-600',
      resources: [
        {
          title: 'How Hidden Commissions Work',
          type: 'Explainer Video',
          duration: '3 min watch',
          views: '15,670',
          description: 'Simple breakdown of how broker commissions are hidden in energy contracts.',
          downloadUrl: '#'
        },
        {
          title: 'Case Study: Manchester Hotel',
          type: 'Success Story',
          duration: '5 min watch',
          views: '9,340',
          description: 'Real business owner explains their £127k recovery experience.',
          downloadUrl: '#'
        },
        {
          title: 'Legal Rights Masterclass',
          type: 'Webinar',
          duration: '45 min watch',
          views: '4,560',
          description: 'In-depth legal masterclass with our expert solicitors.',
          downloadUrl: '#'
        }
      ]
    },
    {
      title: 'Legal Documents',
      description: 'Official documentation and legal templates',
      icon: IconGavel,
      color: 'from-emerald to-emerald-600',
      resources: [
        {
          title: 'Sample Claim Letter Template',
          type: 'Word Document',
          duration: 'Template',
          views: '7,890',
          description: 'Professional template for initial broker commission claims.',
          downloadUrl: '#'
        },
        {
          title: 'Contract Analysis Checklist',
          type: 'PDF Checklist',
          duration: 'Checklist',
          views: '5,430',
          description: 'Step-by-step checklist for reviewing energy contracts.',
          downloadUrl: '#'
        },
        {
          title: 'Legal Precedent Database',
          type: 'Database Access',
          duration: 'Online Tool',
          views: '3,210',
          description: 'Access to relevant legal precedents and court decisions.',
          downloadUrl: '#'
        }
      ]
    },
    {
      title: 'Financial Tools',
      description: 'Calculators and financial analysis tools',
      icon: IconCalculator,
      color: 'from-orange-500 to-orange-600',
      resources: [
        {
          title: 'Advanced Claims Calculator',
          type: 'Interactive Tool',
          duration: 'Online Tool',
          views: '23,450',
          description: 'Detailed calculator for complex multi-site businesses.',
          downloadUrl: '#'
        },
        {
          title: 'Energy Cost Analysis Spreadsheet',
          type: 'Excel Template',
          duration: 'Template',
          views: '6,780',
          description: 'Professional spreadsheet for tracking energy costs over time.',
          downloadUrl: '#'
        },
        {
          title: 'ROI Impact Calculator',
          type: 'Interactive Tool',
          duration: 'Online Tool',
          views: '4,560',
          description: 'Calculate the business impact of recovered commissions.',
          downloadUrl: '#'
        }
      ]
    }
  ]

  const latestNews = [
    {
      date: '2024-03-15',
      title: 'New FCA Guidelines on Broker Transparency',
      summary: 'Financial Conduct Authority releases updated guidelines requiring greater transparency in energy broker commissions.',
      readTime: '4 min read'
    },
    {
      date: '2024-03-10',
      title: 'Record £12M Recovery This Quarter',
      summary: 'UCC achieves record quarterly recovery, helping 450+ businesses reclaim hidden charges.',
      readTime: '3 min read'
    },
    {
      date: '2024-03-05',
      title: 'Supreme Court Upholds Commission Rights',
      summary: 'Landmark ruling strengthens business rights to recover undisclosed broker commissions.',
      readTime: '6 min read'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-navy via-slate-900 to-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Knowledge
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-blue-400"> Resources</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Everything you need to understand energy broker commissions and your legal rights
            </p>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-emerald mb-1">50+</div>
                <div className="text-sm text-gray-300">Resources</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">125k+</div>
                <div className="text-sm text-gray-300">Downloads</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-400 mb-1">Free</div>
                <div className="text-sm text-gray-300">All Content</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-bold text-orange-400 mb-1">24/7</div>
                <div className="text-sm text-gray-300">Access</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Free Resources Library
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access our comprehensive collection of guides, tools, and templates
            </p>
          </motion.div>

          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4`}>
                    <category.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-navy mb-2">{category.title}</h3>
                  <p className="text-slate-600">{category.description}</p>
                </div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {category.resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resourceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (resourceIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <IconFileText size={16} />
                          <span>{resource.type}</span>
                        </div>
                        <button className="text-slate-400 hover:text-emerald transition-colors">
                          <IconDownload size={20} />
                        </button>
                      </div>

                      <h4 className="text-xl font-bold text-navy mb-3 group-hover:text-emerald transition-colors">
                        {resource.title}
                      </h4>

                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {resource.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                          <IconClock size={16} />
                          <span>{resource.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <IconEye size={16} />
                          <span>{resource.views}</span>
                        </div>
                      </div>

                      <button className="w-full bg-slate-100 hover:bg-emerald hover:text-white text-navy py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2">
                        Access Resource
                        <IconChevronRight size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Latest Industry News
            </h2>
            <p className="text-xl text-slate-600">
              Stay updated with the latest developments in energy broker claims
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-sm text-emerald font-medium mb-2">
                  {new Date(article.date).toLocaleDateString('en-GB', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 hover:text-emerald transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{article.readTime}</span>
                  <button className="text-emerald hover:text-emerald/80 font-medium flex items-center gap-1">
                    Read More
                    <IconChevronRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-slate-900 to-navy text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <IconBuildingBank className="mx-auto mb-6" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Claim?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Armed with knowledge, take the next step. Our free assessment takes just 30 seconds 
              and could reveal thousands in hidden charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/calculate"
                className="inline-flex items-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all duration-300 font-medium text-lg"
              >
                Start Free Assessment
                <IconCalculator size={24} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium text-lg border border-white/20"
              >
                Speak to Expert
                <IconChevronRight size={24} />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { icon: IconShieldCheck, text: 'FCA Regulated' },
                { icon: IconGavel, text: 'Legal Experts' },
                { icon: IconTrendingUp, text: '95% Success Rate' },
                { icon: IconClock, text: '21-Day Guarantee' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-400">
                  <item.icon className="text-emerald" size={20} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Resources