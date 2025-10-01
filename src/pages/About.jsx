import { Link } from 'react-router-dom'
import { 
  IconShieldCheck,
  IconScale,
  IconUsers,
  IconTarget,
  IconArrowRight,
  IconCircleCheck,
  IconAward,
  IconBuildingBank,
  IconChartBar,
  IconHandshake2,
  IconBriefcase,
  IconCertificate
} from '@tabler/icons-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const About = () => {
  useScrollAnimation()

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

  const stats = [
    { number: "£127M+", label: "Total Recovered", icon: IconChartBar },
    { number: "50,000+", label: "Businesses Helped", icon: IconBuildingBank },
    { number: "95%", label: "Success Rate", icon: IconAward },
    { number: "21 Days", label: "Average Resolution", icon: IconHandshake2 }
  ]

  const teamMembers = [
    {
      role: "Legal Team",
      description: "Specialized in energy contract law and commercial disputes",
      icon: IconScale,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800"
    },
    {
      role: "Claims Specialists",
      description: "Expert negotiators focused on maximizing your recovery",
      icon: IconTarget,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
    },
    {
      role: "Client Support",
      description: "Dedicated team keeping you informed throughout the process",
      icon: IconUsers,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
    }
  ]

  return (
    <div className="">
      {/* Hero Section with Image */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
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
            
            <div className="relative fade-up">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
                alt="Professional team working"
                className="rounded-2xl shadow-xl mb-6"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600">
                  To ensure every UK business receives fair treatment in their energy contracts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <stat.icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <h2 className="mb-4">Why choose UCC</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine regulatory compliance, legal expertise, and a commitment to 
              our clients to deliver results
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid md:grid-cols-2 gap-6 fade-up">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
            
            <div className="relative fade-up">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200"
                alt="Business success"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <IconCertificate className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Certified Excellence</h3>
                <p className="text-white/90">
                  FCA regulated with a proven track record of successful recoveries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <img 
                src="https://images.unsplash.com/photo-1551135049-8a33b5883817?w=1200"
                alt="Our approach"
                className="rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="fade-up">
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
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border border-green-100">
                <h3 className="text-lg font-bold mb-4">What sets us apart</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <IconCircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">No Upfront Costs:</span>
                      <span className="text-gray-600 ml-2">You pay nothing unless we recover your funds</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconCircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Complete Transparency:</span>
                      <span className="text-gray-600 ml-2">Clear communication throughout the process</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconCircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Fast Resolution:</span>
                      <span className="text-gray-600 ml-2">Average claim resolved within 21 days</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link to="/how-it-works" className="btn btn-primary">
                Learn Our Process
                <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <h2 className="mb-4">Expert team, exceptional results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines legal expertise with deep understanding of the UK energy 
              market to deliver the best outcomes for our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-48">
                    <img 
                      src={member.image}
                      alt={member.role}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <member.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{member.role}</h3>
                    <p className="text-sm text-gray-600">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h2 className="mb-6">Trusted by thousands of UK businesses</h2>
              <p className="text-lg text-gray-600 mb-8">
                Since our founding, we've helped businesses across every sector recover 
                millions in hidden energy broker commissions. Our commitment to transparency 
                and fair treatment has made us the UK's leading energy claims specialist.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4">
                  <IconBriefcase className="w-8 h-8 text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <IconCertificate className="w-8 h-8 text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">FCA Compliant</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?w=200"
                  alt="FCA Regulated"
                  className="h-12 grayscale opacity-60"
                />
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200"
                  alt="Legal Excellence"
                  className="h-12 grayscale opacity-60"
                />
              </div>
            </div>
            
            <div className="fade-up">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200"
                alt="Successful partnership"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600"
            alt="Modern office building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-emerald-900/90"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6 fade-up">
            <IconShieldCheck className="w-4 h-4" />
            FCA Regulated • No Win No Fee
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6 fade-up">
            Ready to start your claim?
          </h2>
          <p className="text-xl text-white/90 mb-8 fade-up">
            Find out if you're eligible in less than 2 minutes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
            <Link to="/calculator" className="btn btn-white">
              Check Eligibility
              <IconArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn btn-secondary" style={{background: 'rgba(255,255,255,0.1)', borderColor: 'white', color: 'white'}}>
              Contact Us
            </Link>
          </div>
          
          <p className="text-sm text-white/70 mt-8 fade-up">
            No obligation • No upfront fees • FCA regulated
          </p>
        </div>
      </section>
    </div>
  )
}

export default About