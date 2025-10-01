import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconSend,
  IconCheck,
  IconArrowRight
} from '@tabler/icons-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <IconMail className="w-6 h-6" />,
      title: "Email",
      content: "hello@utilitycommissionclaims.co.uk",
      link: "mailto:hello@utilitycommissionclaims.co.uk"
    },
    {
      icon: <IconPhone className="w-6 h-6" />,
      title: "Phone",
      content: "0800 123 4567",
      link: "tel:08001234567"
    },
    {
      icon: <IconClock className="w-6 h-6" />,
      title: "Office Hours",
      content: "Monday - Friday, 9:00 AM - 6:00 PM",
      link: null
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Get in touch</h1>
            <p className="text-xl text-gray-600">
              Have questions about your claim? Our team is here to help. 
              We aim to respond to all enquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Prefer to speak directly? Get in touch using the details below.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:text-green-600 transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold mb-3">Quick Assessment</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Want to check if you're eligible for a claim? Use our quick calculator.
                </p>
                <Link to="/calculator" className="btn btn-primary w-full justify-center">
                  Check Eligibility
                  <IconArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {!isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                          placeholder="John Smith"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                          placeholder="Your Company Ltd"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                          placeholder="07123 456789"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-1"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        I agree to the <Link to="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link> and 
                        consent to UCC contacting me about my enquiry
                      </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-full justify-center">
                      Send Message
                      <IconSend className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconCheck className="w-10 h-10 text-green-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">Message Sent Successfully</h2>
                  <p className="text-gray-600 mb-8">
                    Thank you for contacting us. We'll review your message and get back to you within 24 hours.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn btn-secondary"
                    >
                      Send Another Message
                    </button>
                    <Link to="/" className="btn btn-primary">
                      Return Home
                      <IconArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Frequently asked questions</h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Check our comprehensive FAQ section.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold mb-2">How long does a claim take?</h3>
                <p className="text-sm text-gray-600">
                  Most claims are resolved within 21 days from initial assessment to payment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold mb-2">What if I don't win?</h3>
                <p className="text-sm text-gray-600">
                  You pay nothing. We work on a no win, no fee basis.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold mb-2">Do I need my contracts?</h3>
                <p className="text-sm text-gray-600">
                  No, we can obtain copies from your supplier with your authorization.
                </p>
              </div>
            </div>
            
            <Link to="/faq" className="btn btn-secondary mt-8">
              View All FAQs
              <IconArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact