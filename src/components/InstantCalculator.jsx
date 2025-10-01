import { useState } from 'react'
import { 
  IconArrowRight, 
  IconArrowLeft,
  IconCalculator,
  IconCheck,
  IconBuilding,
  IconCalendar,
  IconCurrencyPound,
  IconUser,
  IconMail,
  IconPhone,
  IconMapPin,
  IconX
} from '@tabler/icons-react'

const InstantCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    usedBroker: '',
    brokerName: '',
    annualValue: '',
    contractDuration: '',
    contractDate: '',
    postcode: '',
    businessName: '',
    contactName: '',
    email: '',
    phone: ''
  })

  const totalSteps = 6

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const steps = [
    {
      title: "Broker Usage",
      icon: <IconBuilding className="w-6 h-6" />,
      question: "Did you use an energy broker?",
      description: "Most businesses use brokers to negotiate energy contracts"
    },
    {
      title: "Broker Name",
      icon: <IconBuilding className="w-6 h-6" />,
      question: "Which broker did you use?",
      description: "This helps us identify the commission structure"
    },
    {
      title: "Contract Details",
      icon: <IconCurrencyPound className="w-6 h-6" />,
      question: "Contract value and duration",
      description: "Your annual energy spend and contract length"
    },
    {
      title: "Contract Date",
      icon: <IconCalendar className="w-6 h-6" />,
      question: "When was your contract agreed?",
      description: "You can claim for contracts from the last 6 years"
    },
    {
      title: "Business Details",
      icon: <IconBuilding className="w-6 h-6" />,
      question: "Tell us about your business",
      description: "We need this to verify your claim eligibility"
    },
    {
      title: "Contact Information",
      icon: <IconUser className="w-6 h-6" />,
      question: "How can we reach you?",
      description: "We'll send your assessment results to these details"
    }
  ]

  return (
    <>
      <div className="card p-8 lg:p-10 text-center max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`flex-1 ${index < steps.length - 1 ? 'mr-2' : ''}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index + 1 <= currentStep
                      ? 'bg-gradient-to-r from-green-500 to-green-600'
                      : 'bg-gray-200'
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Step {currentStep} of {totalSteps}</span>
            <span className="text-green-600 font-medium">{steps[currentStep - 1].title}</span>
          </div>
        </div>

        {/* Step Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
          {steps[currentStep - 1].icon}
        </div>

        {/* Step Content */}
        <h3 className="text-2xl font-bold mb-3">{steps[currentStep - 1].question}</h3>
        <p className="text-gray-600 mb-8">{steps[currentStep - 1].description}</p>

        {/* Step Forms */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {currentStep === 1 && (
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => {
                  handleInputChange('usedBroker', 'yes')
                  nextStep()
                }}
                className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300 text-left group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-green-600">Yes, I used a broker</div>
                    <div className="text-sm text-gray-500">Most businesses are eligible for claims</div>
                  </div>
                  <IconArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600" />
                </div>
              </button>
              
              <button
                type="button"
                onClick={() => {
                  handleInputChange('usedBroker', 'no')
                  setShowModal(true)
                }}
                className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-left group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900">No broker involved</div>
                    <div className="text-sm text-gray-500">Direct supplier contracts</div>
                  </div>
                  <IconArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
              
              <button
                type="button"
                onClick={() => {
                  handleInputChange('usedBroker', 'unsure')
                  nextStep()
                }}
                className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300 text-left group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-green-600">I'm not sure</div>
                    <div className="text-sm text-gray-500">We can help you check</div>
                  </div>
                  <IconArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600" />
                </div>
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="relative">
                <IconBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter broker company name"
                  value={formData.brokerName}
                  onChange={(e) => handleInputChange('brokerName', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                />
              </div>
              
              <p className="text-sm text-gray-500">Leave blank if you're not sure of the exact name</p>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn btn-secondary flex-1"
                >
                  <IconArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn btn-primary flex-1"
                >
                  Continue
                  <IconArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">£</span>
                  <input
                    type="number"
                    placeholder="Annual contract value (e.g. 125000)"
                    value={formData.annualValue}
                    onChange={(e) => handleInputChange('annualValue', e.target.value)}
                    className="w-full pl-10 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <select
                  value={formData.contractDuration}
                  onChange={(e) => handleInputChange('contractDuration', e.target.value)}
                  className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors appearance-none"
                  required
                >
                  <option value="">Select contract duration</option>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                  <option value="48">48 months</option>
                  <option value="60">60 months</option>
                  <option value="other">Other duration</option>
                </select>
              </div>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn btn-secondary flex-1"
                >
                  <IconArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn btn-primary flex-1"
                  disabled={!formData.annualValue || !formData.contractDuration}
                >
                  Continue
                  <IconArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2 text-left">When was the contract agreed?</label>
                <input
                  type="month"
                  value={formData.contractDate}
                  onChange={(e) => handleInputChange('contractDate', e.target.value)}
                  className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  required
                  max={new Date().toISOString().slice(0, 7)}
                  min={new Date(new Date().setFullYear(new Date().getFullYear() - 6)).toISOString().slice(0, 7)}
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn btn-secondary flex-1"
                >
                  <IconArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn btn-primary flex-1"
                  disabled={!formData.contractDate}
                >
                  Continue
                  <IconArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-4">
              <div className="relative">
                <IconBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="relative">
                <IconMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Business Postcode"
                  value={formData.postcode}
                  onChange={(e) => handleInputChange('postcode', e.target.value.toUpperCase())}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn btn-secondary flex-1"
                >
                  <IconArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn btn-primary flex-1"
                  disabled={!formData.businessName || !formData.postcode}
                >
                  Continue
                  <IconArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="space-y-4">
              <div className="relative">
                <IconUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="relative">
                <IconMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="relative">
                <IconPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn btn-secondary flex-1"
                >
                  <IconArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  type="submit"
                  className="btn btn-primary flex-1"
                  disabled={!formData.contactName || !formData.email || !formData.phone}
                >
                  Complete Assessment
                  <IconCheck className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          
          <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-slide-up">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <IconX className="w-5 h-5 text-gray-500" />
            </button>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <IconCheck className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Assessment Complete</h3>
              
              <p className="text-gray-600 mb-4">
                Thank you for providing your information.
              </p>
              
              <div className="p-4 bg-green-50 rounded-xl mb-6 text-left">
                <p className="text-gray-700 mb-3">
                  We need to review your specific energy contracts to determine if you qualify and calculate your exact claim value.
                </p>
                <p className="text-sm text-gray-600">
                  One of our specialist advisors will contact you within 24 hours.
                </p>
              </div>
              
              <p className="text-gray-600 mb-4 font-medium">
                What happens next:
              </p>
              
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">We'll review your contract details</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Verify broker commission structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Calculate your potential claim value</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Handle the entire claims process for you</span>
                </li>
              </ul>
              
              <p className="text-xs text-gray-500">
                No obligation • No upfront fees • No win, no fee • FCA regulated
              </p>
              
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-primary w-full mt-6"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default InstantCalculator