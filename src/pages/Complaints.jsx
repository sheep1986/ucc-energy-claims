import { Link } from 'react-router-dom'
import { IconMessageCircle, IconClock, IconCircleCheck, IconAlertTriangle, IconMail, IconExternalLink } from '@tabler/icons-react'

const Complaints = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <IconMessageCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-white/90 text-sm">Your Feedback Matters</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complaints Procedure
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We aim to provide excellent service. If you're unsatisfied, we want to resolve it quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Make a Complaint</h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex items-start">
                  <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <IconMail className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">
                            <strong>Email:</strong> hello@utilitycommissionclaims.co.uk
                          </span>
                        </div>
                        <div className="text-gray-600">
                          <strong>Subject Line:</strong> "Formal Complaint - [Your Reference Number]"
                        </div>
                      </div>
                      <div className="mt-4 border-t pt-4">
                        <p className="font-semibold text-gray-900 mb-2">Please Include:</p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Your name and business name</li>
                          <li>Claim reference number</li>
                          <li>Nature of complaint</li>
                          <li>Desired resolution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex items-start">
                  <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Response Timeline</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <IconClock className="w-6 h-6 text-green-500 mb-2" />
                        <div className="font-semibold text-gray-900">Acknowledgment</div>
                        <div className="text-gray-600">Within 48 hours</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <IconCircleCheck className="w-6 h-6 text-green-500 mb-2" />
                        <div className="font-semibold text-gray-900">Investigation</div>
                        <div className="text-gray-600">We'll review your case</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <IconClock className="w-6 h-6 text-green-500 mb-2" />
                        <div className="font-semibold text-gray-900">Initial Response</div>
                        <div className="text-gray-600">Within 7 days</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <IconCircleCheck className="w-6 h-6 text-green-500 mb-2" />
                        <div className="font-semibold text-gray-900">Final Resolution</div>
                        <div className="text-gray-600">Within 14 days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Escalation Options */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              <IconAlertTriangle className="inline w-6 h-6 text-amber-500 mr-2" />
              Escalation Options
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Internal Escalation</h3>
                <p className="text-gray-600 mb-3">
                  If you're not satisfied with our initial response, you can request escalation to senior management. 
                  Simply reply to our response email requesting senior review.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">External Options</h3>
                <p className="text-gray-600 mb-4">
                  If you remain unsatisfied after our final response, you may contact:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <IconExternalLink className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Financial Ombudsman Service</div>
                      <div className="text-gray-600 text-sm">If applicable to your complaint</div>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <IconExternalLink className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Trading Standards</div>
                      <div className="text-gray-600 text-sm">For general business practice concerns</div>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <IconExternalLink className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Information Commissioner's Office</div>
                      <div className="text-gray-600 text-sm">For data protection issues</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Our Commitment to You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <IconCircleCheck className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Treat all complaints seriously</div>
                  <div className="text-white/70 text-sm">Every concern matters to us</div>
                </div>
              </div>
              <div className="flex items-start">
                <IconCircleCheck className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Investigate thoroughly</div>
                  <div className="text-white/70 text-sm">We review all aspects of your case</div>
                </div>
              </div>
              <div className="flex items-start">
                <IconCircleCheck className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Respond promptly</div>
                  <div className="text-white/70 text-sm">Clear timelines for resolution</div>
                </div>
              </div>
              <div className="flex items-start">
                <IconCircleCheck className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Learn from feedback</div>
                  <div className="text-white/70 text-sm">Continuously improve our service</div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-lg font-semibold text-green-500">
                ✓ Never any charges for complaints handling
              </p>
            </div>
          </div>

          {/* Types of Complaints */}
          <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Complaint Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Service Quality</h3>
                <p className="text-gray-600 text-sm">Response times, communication issues</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Claim Progress</h3>
                <p className="text-gray-600 text-sm">Delays or lack of updates</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Fee Disputes</h3>
                <p className="text-gray-600 text-sm">Questions about our success fee</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Data Concerns</h3>
                <p className="text-gray-600 text-sm">Privacy or data handling issues</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Have a question before making a complaint? We're here to help.
            </p>
            <Link 
              to="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
            >
              <IconMail className="mr-2 w-5 h-5" />
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Complaints