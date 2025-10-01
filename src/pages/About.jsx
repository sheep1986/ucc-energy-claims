import { Link } from 'react-router-dom'
import { 
  IconShieldCheck,
  IconScale,
  IconUsers,
  IconTarget,
  IconArrowRight,
  IconCircleCheck
} from '@tabler/icons-react'

const About = () => {
  const values = [
    {
      icon: <IconShieldCheck className="w-8 h-8" />,
      title: "FCA Regulated",
      description: "Operating under strict regulatory standards to protect your interests and ensure professional service."
    },
    {
      icon: <IconScale className="w-8 h-8" />,
      title: "Legal Expertise",
      description: "Our team combines legal knowledge with energy market expertise to maximize your recovery."
    },
    {
      icon: <IconUsers className="w-8 h-8" />,
      title: "Client Focused",
      description: "No win, no fee structure means we only succeed when you do, aligning our interests with yours."
    },
    {
      icon: <IconTarget className="w-8 h-8" />,
      title: "Results Driven",
      description: "Systematic approach to identifying and recovering hidden commissions efficiently."
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge badge-emerald mb-4">About UCC</span>
              <h1 className="mb-6">
                Fighting for transparency in
                <span className="text-green-600"> UK energy markets</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Utility Commission Claims specializes in recovering undisclosed broker 
                commissions from business energy contracts. We believe every UK business 
                deserves fair and transparent energy pricing.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <IconCircleCheck className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">FCA Regulated Service</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconCircleCheck className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">No Win, No Fee Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconCircleCheck className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Expert Legal Team</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To ensure every UK business receives fair treatment in their energy 
                  contracts by identifying and recovering hidden broker commissions that 
                  have been charged without proper disclosure.
                </p>
                <p className="text-gray-600">
                  Through systematic analysis and professional negotiation, we help 
                  businesses recover funds that are rightfully theirs, promoting 
                  transparency across the energy sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why choose UCC</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine regulatory compliance, legal expertise, and a commitment to 
              our clients to deliver results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Our Approach</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every claim is handled by experienced professionals who understand the 
                complexities of energy contracts and regulatory requirements.
              </p>
              <p className="text-gray-600 mb-8">
                We work directly with energy suppliers to negotiate settlements efficiently 
                and effectively. Our systematic approach ensures we identify every opportunity 
                for recovery while maintaining the highest professional standards.
              </p>
              
              <Link to="/how-it-works" className="btn btn-primary">
                Learn Our Process
                <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">What sets us apart</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">No Upfront Costs</h4>
                    <p className="text-sm text-gray-600">You pay nothing unless we successfully recover your funds</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete Transparency</h4>
                    <p className="text-sm text-gray-600">Clear communication throughout the entire process</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Fast Resolution</h4>
                    <p className="text-sm text-gray-600">Average claim resolved within 21 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Professional Service</h4>
                    <p className="text-sm text-gray-600">FCA regulated with expert legal team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Expert team, exceptional results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines legal expertise with deep understanding of the UK energy 
              market to deliver the best outcomes for our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-4">
                <IconScale className="w-16 h-16 text-gray-400 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Legal Team</h3>
              <p className="text-sm text-gray-600">
                Specialized in energy contract law and commercial disputes
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-4">
                <IconTarget className="w-16 h-16 text-gray-400 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Claims Specialists</h3>
              <p className="text-sm text-gray-600">
                Expert negotiators focused on maximizing your recovery
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl p-8 mb-4">
                <IconUsers className="w-16 h-16 text-gray-400 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Client Support</h3>
              <p className="text-sm text-gray-600">
                Dedicated team keeping you informed throughout the process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start your claim?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Find out if you're eligible in less than 2 minutes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator" className="btn btn-white">
              Check Eligibility
              <IconArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn btn-secondary" style={{background: 'rgba(255,255,255,0.1)', borderColor: 'white', color: 'white'}}>
              Contact Us
            </Link>
          </div>
          
          <p className="text-sm text-white/70 mt-8">
            No obligation • No upfront fees • FCA regulated
          </p>
        </div>
      </section>
    </div>
  )
}

export default About