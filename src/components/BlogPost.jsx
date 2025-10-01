import { Link } from 'react-router-dom'
import { 
  IconArrowLeft,
  IconCalendar,
  IconClock,
  IconUser,
  IconShare2,
  IconBookmark,
  IconChevronRight,
  IconAlertCircle
} from '@tabler/icons-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

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
  relatedArticles 
}) => {
  useScrollAnimation()

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <IconChevronRight className="w-4 h-4" />
            <Link to="/insights" className="hover:text-green-600">Insights</Link>
            <IconChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{category}</span>
          </nav>

          {/* Article Header */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
              {category}
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <IconUser className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCalendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <IconClock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <IconShare2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <IconBookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {image && (
        <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-12">
          <img 
            src={image} 
            alt={title}
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      )}

      {/* Key Points Box */}
      {keyPoints && keyPoints.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-12">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <IconAlertCircle className="w-5 h-5 text-green-600" />
              Key Takeaways
            </h3>
            <ul className="space-y-2">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-16">
        <div className="prose prose-lg max-w-none">
          {content}
        </div>

        {/* Sources Section */}
        {sources && sources.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sources & References</h3>
            <ul className="space-y-2">
              {sources.map((source, index) => (
                <li key={index} className="text-sm text-gray-600">
                  [{index + 1}] {source}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Think You're Affected?</h3>
          <p className="mb-6 text-green-50">
            Discover if your business has been overcharged through hidden broker commissions. 
            Our free assessment takes just 2 minutes.
          </p>
          <Link 
            to="/calculator" 
            className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Check Your Eligibility
            <IconChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <Link 
                  key={index}
                  to={article.href}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="aspect-video overflow-hidden rounded-t-xl">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-green-600 font-semibold">{article.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Insights */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <Link 
          to="/insights" 
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
        >
          <IconArrowLeft className="w-5 h-5" />
          Back to All Insights
        </Link>
      </div>
    </article>
  )
}

export default BlogPost