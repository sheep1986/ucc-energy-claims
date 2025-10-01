import { Link } from 'react-router-dom'
import { IconCookie, IconShield, IconSettings, IconInfoCircle } from '@tabler/icons-react'

const CookiePolicy = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <IconCookie className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-white/90 text-sm">Privacy & Transparency</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience by remembering your preferences and understanding how you use our site.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <IconShield className="inline w-5 h-5 text-green-500 mr-2" />
                    Essential Cookies (Always Active)
                  </h3>
                  <p className="text-gray-600 mb-3">These are necessary for the website to function properly:</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li><strong>Session Cookie:</strong> Maintains your calculator progress</li>
                    <li><strong>Security Cookie:</strong> Protects against fraud and unauthorized access</li>
                    <li><strong>Preference Cookie:</strong> Remembers your cookie choices</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <IconInfoCircle className="inline w-5 h-5 text-blue-500 mr-2" />
                    Analytics Cookies (Optional)
                  </h3>
                  <p className="text-gray-600 mb-3">With your consent, we use these to improve our service:</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li><strong>Google Analytics:</strong> To understand site usage patterns (anonymized)</li>
                    <li><strong>Hotjar:</strong> To see how users interact with our calculator</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-700 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Marketing Cookies (Optional)
                  </h3>
                  <p className="text-gray-600 mb-3">With your consent, these help us reach businesses that need our service:</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li><strong>Facebook Pixel:</strong> For retargeting relevant ads</li>
                    <li><strong>Google Ads:</strong> For conversion tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                <IconSettings className="inline w-6 h-6 text-gray-700 mr-2" />
                Managing Cookies
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Cookie Choices</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">Accept All:</span>
                      <span className="text-gray-600">Full functionality and analytics to improve our service</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">Essential Only:</span>
                      <span className="text-gray-600">Basic website functionality only</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">Custom:</span>
                      <span className="text-gray-600">Choose specific cookie categories</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How to Control Cookies</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Use our cookie banner when you first visit the site</li>
                    <li>Adjust your browser settings to block or delete cookies</li>
                    <li>Click the cookie preferences link in our footer</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-4">
                We don't control cookies set by third parties such as:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Social media embed buttons (if you click them)</li>
                <li>External content providers</li>
                <li>Partner websites you visit through our links</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
              <p className="mb-4 text-gray-300">
                If you have any questions about our use of cookies or this policy, please contact us:
              </p>
              <p className="font-semibold text-white">
                Email: hello@utilitycommissionclaims.co.uk
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <Link 
                to="/privacy"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                View Privacy Policy →
              </Link>
              <Link 
                to="/terms"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                View Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CookiePolicy