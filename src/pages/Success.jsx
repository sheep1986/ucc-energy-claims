import { Link } from 'react-router-dom'
import { IconCircleCheck, IconMail, IconClock, IconArrowRight, IconHome } from '@tabler/icons-react'

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <IconCircleCheck className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thank You!
          </h1>
          <h2 className="text-2xl text-white/80 mb-6">
            Your Claim Request Has Been Received
          </h2>
          <p className="text-xl text-white/70 mb-8">
            We've successfully received your information and will be in touch within 24 hours to discuss your potential claim.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-6">What Happens Next?</h3>
          <div className="space-y-4 text-left">
            <div className="flex items-start">
              <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Email Confirmation</div>
                <div className="text-white/70 text-sm">You'll receive a confirmation email shortly with your reference number</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Case Review</div>
                <div className="text-white/70 text-sm">Our team will review your information and calculate your exact claim value</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Personal Contact</div>
                <div className="text-white/70 text-sm">We'll email you within 24 hours with your detailed claim assessment</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <IconMail className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-white font-semibold">Check Your Email</div>
            <div className="text-white/70 text-sm">For confirmation</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <IconClock className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-white font-semibold">24 Hour Response</div>
            <div className="text-white/70 text-sm">Guaranteed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <IconCircleCheck className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-white font-semibold">No Obligation</div>
            <div className="text-white/70 text-sm">No win, no fee</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
          >
            <IconHome className="mr-2 w-5 h-5" />
            Return to Homepage
          </Link>
          <Link 
            to="/how-it-works"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center justify-center"
          >
            Learn More About The Process
            <IconArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="mt-8 text-white/60 text-sm">
          <p>
            Questions? Email us at{' '}
            <a href="mailto:hello@utilitycommissionclaims.co.uk" className="text-green-400 hover:text-green-300">
              hello@utilitycommissionclaims.co.uk
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Success