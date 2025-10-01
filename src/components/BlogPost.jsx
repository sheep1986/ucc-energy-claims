import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { 
  IconArrowLeft,
  IconCalendar,
  IconClock,
  IconUser,
  IconShare2,
  IconBookmark,
  IconChevronRight,
  IconAlertCircle,
  IconQuote,
  IconArrowUp,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconCopy,
  IconCheck,
  IconMail,
  IconPhone,
  IconMapPin
} from '@tabler/icons-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

// Helper component for pull quotes
const PullQuote = ({ children, source }) => (
  <div className="my-12 relative">
    <div className="absolute -left-4 -top-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
      <IconQuote className="w-8 h-8 text-white" />
    </div>
    <blockquote className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 pl-16 border-l-4 border-green-500 shadow-sm">
      <p className="text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed italic mb-4">
        "{children}"
      </p>
      {source && (
        <cite className="text-green-700 font-semibold text-sm block">
          — {source}
        </cite>
      )}
    </blockquote>
  </div>
)

// Helper component for inline images with captions
const InlineImage = ({ src, alt, caption, position = "center" }) => (
  <div className={`my-8 ${position === 'left' ? 'lg:float-left lg:mr-8 lg:mb-4 lg:w-1/2' : position === 'right' ? 'lg:float-right lg:ml-8 lg:mb-4 lg:w-1/2' : ''}`}>
    <div className="rounded-xl overflow-hidden shadow-lg">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-64 lg:h-72 object-cover"
      />
    </div>
    {caption && (
      <p className="text-sm text-gray-600 mt-3 italic text-center px-4">
        {caption}
      </p>
    )}
  </div>
)

// Helper component for statistics/data visualization
const StatCard = ({ value, label, trend, icon }) => (
  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mx-auto mb-3">
      {icon}
    </div>
    <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-sm text-gray-600 mb-2">{label}</div>
    {trend && (
      <div className="text-xs text-green-600 font-medium">{trend}</div>
    )}
  </div>
)

const BlogPost = ({ 
  title, 
  subtitle,
  author, 
  date, 
  readTime, 
  category,
  image,
  content,
  keyPoints,
  sources,
  relatedArticles,
  pullQuotes = [],
  inlineImages = [],
  authorBio,
  statistics = []
}) => {
  useScrollAnimation()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      setShowScrollTop(window.scrollY > 500)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = `${title} - ${subtitle}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.log('Failed to copy link')
    }
  }

  const socialShares = [
    {
      name: 'Twitter',
      icon: IconBrandTwitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-50 hover:text-blue-600'
    },
    {
      name: 'LinkedIn',
      icon: IconBrandLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-50 hover:text-blue-700'
    },
    {
      name: 'Facebook',
      icon: IconBrandFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-50 hover:text-blue-800'
    }
  ]

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-8 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8 fade-up">
            <Link to="/" className="text-gray-500 hover:text-green-600 transition-colors">Home</Link>
            <IconChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/insights" className="text-gray-500 hover:text-green-600 transition-colors">Insights</Link>
            <IconChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{category}</span>
          </nav>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6 fade-up">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full">
                {category}
              </span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">{readTime}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight fade-up">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed fade-up">
                {subtitle}
              </p>
            )}
          </div>

          {/* Author & Meta Info Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 fade-up">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  {author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{author}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <IconCalendar className="w-4 h-4" />
                      {date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <IconClock className="w-4 h-4" />
                      {readTime}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {socialShares.map((share) => {
                  const IconComponent = share.icon
                  return (
                    <a
                      key={share.name}
                      href={share.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-50 rounded-xl transition-all ${share.color}`}
                      title={`Share on ${share.name}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
                <button 
                  onClick={handleCopyLink}
                  className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all group"
                  title="Copy link"
                >
                  {copied ? (
                    <IconCheck className="w-5 h-5 text-green-600" />
                  ) : (
                    <IconCopy className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
                  )}
                </button>
                <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all group">
                  <IconBookmark className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {image && (
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 -mt-8 mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl fade-up">
            <img 
              src={image} 
              alt={title}
              className="w-full h-[400px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
      )}

      {/* Key Points Box - Enhanced Design */}
      {keyPoints && keyPoints.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-16">
          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 border border-green-100 shadow-sm fade-up">
            <div className="absolute -top-4 -right-4">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <IconAlertCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Key Takeaways
            </h3>
            <div className="space-y-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Statistics Section */}
      {statistics && statistics.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Key Statistics</h3>
            <p className="text-gray-600">Critical data that illustrates the scope of the issue</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-up">
            {statistics.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                trend={stat.trend}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main Content - Enhanced Typography */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-16">
        <div className="prose prose-lg lg:prose-xl max-w-none prose-gray
          prose-headings:text-gray-900 prose-headings:font-bold
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-ul:my-6 prose-ul:space-y-2
          prose-ol:my-6 prose-ol:space-y-2
          prose-li:text-gray-700 prose-li:leading-relaxed
          prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
          prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline">
          {content}
          
          {/* Inline Images */}
          {inlineImages.map((img, index) => (
            <InlineImage
              key={index}
              src={img.src}
              alt={img.alt}
              caption={img.caption}
              position={img.position}
            />
          ))}
          
          {/* Pull Quotes */}
          {pullQuotes.map((quote, index) => (
            <PullQuote key={index} source={quote.source}>
              {quote.text}
            </PullQuote>
          ))}
        </div>

        {/* Sources Section - Enhanced */}
        {sources && sources.length > 0 && (
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <IconQuote className="w-6 h-6 text-green-600" />
              Sources & References
            </h3>
            <div className="space-y-3">
              {sources.map((source, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 text-xs font-bold rounded-full flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{source}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio Section */}
        {authorBio && (
          <div className="mt-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <IconUser className="w-6 h-6 text-green-600" />
              About the Author
            </h3>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {author.charAt(0)}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{author}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{authorBio.description}</p>
                {authorBio.credentials && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {authorBio.credentials.map((credential, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>
                )}
                {authorBio.contact && (
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    {authorBio.contact.email && (
                      <a 
                        href={`mailto:${authorBio.contact.email}`}
                        className="flex items-center gap-1 hover:text-green-600 transition-colors"
                      >
                        <IconMail className="w-4 h-4" />
                        {authorBio.contact.email}
                      </a>
                    )}
                    {authorBio.contact.phone && (
                      <a 
                        href={`tel:${authorBio.contact.phone}`}
                        className="flex items-center gap-1 hover:text-green-600 transition-colors"
                      >
                        <IconPhone className="w-4 h-4" />
                        {authorBio.contact.phone}
                      </a>
                    )}
                    {authorBio.contact.location && (
                      <span className="flex items-center gap-1">
                        <IconMapPin className="w-4 h-4" />
                        {authorBio.contact.location}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section - Enhanced Design */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-green-600 to-emerald-600 p-10 lg:p-12 text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <IconAlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Think You're Affected?</h3>
            <p className="text-lg text-green-50 mb-8 leading-relaxed">
              Discover if your business has been overcharged through hidden broker commissions. 
              Our free assessment takes just 2 minutes.
            </p>
            <Link 
              to="/calculator" 
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Check Your Eligibility
              <IconChevronRight className="w-5 h-5" />
            </Link>
            <p className="text-green-100 text-sm mt-4">No obligation • 100% Free • Instant results</p>
          </div>
        </div>
      </div>

      {/* Related Articles - Enhanced */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Continue Reading</h2>
              <p className="text-gray-600">Explore more insights about energy broker practices</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <Link 
                  key={index}
                  to={article.href}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-gray-500">{article.date}</span>
                        <span className="text-green-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-110 flex items-center justify-center z-40"
        >
          <IconArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Back to Insights - Enhanced */}
      <div className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
          <Link 
            to="/insights" 
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <IconArrowLeft className="w-5 h-5" />
            Back to All Insights
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogPost
export { PullQuote, InlineImage, StatCard }