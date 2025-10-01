import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  IconBuilding,
  IconBolt,
  IconTrendingUp,
  IconCurrencyPound,
  IconAlertTriangle,
  IconChartBar,
  IconClock,
  IconShieldCheck,
  IconCircleCheck,
  IconArrowRight,
  IconBuildingSkyscraper,
  IconUsers,
  IconFileCheck,
  IconDeviceLaptop,
  IconCoffee,
  IconWifi,
  IconBulb,
  IconTemperature,
  IconCalendar,
  IconBriefcase
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const Offices = () => {
  const [activeCase, setActiveCase] = useState(0)

  const stats = [
    { value: 9200000, label: 'Recovered for Office Buildings', prefix: '£', suffix: '+' },
    { value: 428, label: 'Office Buildings Helped', suffix: '+' },
    { value: 142000, label: 'Average Recovery', prefix: '£' },
    { value: 17, label: 'Days to Payment', suffix: ' Days' }
  ]

  const caseStudies = [
    {
      type: 'Corporate Headquarters',
      location: 'London',
      size: '15 floors, 850 employees',
      consumption: '£680,000/year energy spend',
      recovered: 389000,
      time: '16 days',
      impact: 'Funded office refurbishment and improved employee facilities',
      quote: 'The recovery allowed us to create a world-class workspace for our team without impacting our budget.'
    },
    {
      type: 'Professional Services Firm',
      location: 'Manchester',
      size: '4 offices, 280 staff',
      consumption: '£290,000/year energy spend',
      recovered: 198000,
      time: '15 days',
      impact: 'Upgraded IT infrastructure and expanded meeting facilities',
      quote: 'Professional service that understood our business needs. The process was seamless.'
    },
    {
      type: 'Co-working Space',
      location: 'Bristol',
      size: '3 buildings, 450 members',
      consumption: '£180,000/year energy spend',
      recovered: 124000,
      time: '14 days',
      impact: 'Enhanced shared facilities and added premium workspace options',
      quote: 'This recovery meant we could invest in member experience rather than just survive rising costs.'
    },
    {
      type: 'Government Office Building',
      location: 'Edinburgh',
      size: '8 floors, 520 civil servants',
      consumption: '£420,000/year energy spend',
      recovered: 267000,
      time: '18 days',
      impact: 'Improved energy efficiency and upgraded ventilation systems',
      quote: 'UCC delivered excellent value for the public sector. Every penny recovered benefits taxpayers.'
    }
  ]

  const challenges = [
    {
      title: 'High Occupancy Costs',
      description: 'Office space costs continue to rise while energy expenses add significant overhead',
      icon: IconBuilding,
      color: 'text-blue-500'
    },
    {
      title: 'HVAC & Lighting Demands',
      description: 'Climate control and lighting for large spaces drive substantial energy consumption',
      icon: IconTemperature,
      color: 'text-orange-500'
    },
    {
      title: 'Technology Infrastructure',
      description: 'Servers, computers, and modern office equipment require consistent power',
      icon: IconDeviceLaptop,
      color: 'text-purple-500'
    },
    {
      title: 'Productivity Pressure',
      description: 'Need optimal working conditions while managing operational costs effectively',
      icon: IconBriefcase,
      color: 'text-green-500'
    }
  ]

  const solutions = [
    'Multi-tenant and single-tenant office expertise',
    'Corporate real estate portfolio analysis',
    'Flexible lease structure accommodation',
    'Priority processing for business continuity',
    'Confidential handling of sensitive commercial data',
    'Coordination with facilities management teams'
  ]

  const testimonials = [
    {
      company: 'Premier Business Center',
      role: 'Facilities Director',
      text: 'The £156,000 recovery funded our sustainability initiatives and tenant improvements.',
      amount: 156000,
      rating: 5
    },
    {
      company: 'Legal Services Group',
      role: 'Managing Partner',
      text: 'Professional, efficient, and understanding of our commercial pressures. Highly recommended.',
      amount: 234000,
      rating: 5
    },
    {
      company: 'Creative Agency Hub',
      role: 'Operations Manager',
      text: 'This recovery allowed us to create inspiring spaces for our creative teams.',
      amount: 89000,
      rating: 5
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Commercial Property Assessment',
      description: 'Comprehensive review of energy contracts across your office portfolio',
      time: '24 hours'
    },
    {
      step: '2',
      title: 'Commission Discovery',
      description: 'Analysis of commercial tariffs and identification of hidden broker fees',
      time: '3-5 days'
    },
    {
      step: '3',
      title: 'Business-Focused Claim',
      description: 'Professional documentation with minimal disruption to operations',
      time: '7-10 days'
    },
    {
      step: '4',
      title: 'Commercial Fund Recovery',
      description: 'Direct payment to reinvest in your office facilities and operations',
      time: '14-18 days total'
    }
  ]

  const faqs = [
    {
      q: 'Can both tenants and landlords claim?',
      a: 'Yes. Both office tenants and commercial landlords can claim, depending on who holds the energy contracts.'
    },
    {
      q: 'What about shared office spaces and co-working facilities?',
      a: 'All types of office arrangements can claim including traditional offices, co-working spaces, and serviced offices.'
    },
    {
      q: 'How does this work with triple net leases?',
      a: 'We handle all lease arrangements including NNN leases. The claim follows whoever is responsible for energy costs.'
    },
    {
      q: 'How much do office buildings typically recover?',
      a: 'Office buildings recover £50,000-£300,000 on average, with larger corporate headquarters often recovering £400,000+.'
    }
  ]

  const officeTypes = [
    { name: 'Corporate Offices', icon: IconBuildingSkyscraper },
    { name: 'Business Centers', icon: IconBuilding },
    { name: 'Co-working Spaces', icon: IconUsers },
    { name: 'Professional Services', icon: IconBriefcase },
    { name: 'Government Buildings', icon: IconFileCheck },
    { name: 'Creative Studios', icon: IconBulb }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % caseStudies.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Office Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-white">
            <IconBuilding size={200} />
          </div>
          <div className="absolute bottom-20 right-20 text-white">
            <IconBuildingSkyscraper size={150} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <IconBriefcase size={250} className="animate-pulse" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full mb-6">
              <IconAlertTriangle size={20} />
              <span className="font-medium">Critical: Office Operating Costs Spiraling Out of Control</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Office Buildings & Commercial Spaces
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-400">
                Energy Commission Recovery
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Office buildings face enormous energy costs with HVAC, lighting, and technology demands. 
              We've helped 428+ commercial properties recover over £9.2M in hidden energy commissions, 
              reducing overhead and improving profitability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/calculate"
                className="inline-flex items-center justify-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all font-medium text-lg"
              >
                Calculate Office Claim
                <IconArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-medium border border-white/20"
              >
                Commercial Property Support
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.prefix}<CountUp end={stat.value} duration={2} separator="," />{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Types */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              We Serve All Commercial Properties
            </h2>
            <p className="text-xl text-slate-600">
              Specialist recovery service for every type of office and commercial space
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {officeTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="w-20 h-20 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                  <type.icon className="text-blue-600" size={36} />
                </div>
                <p className="text-sm font-medium text-navy">{type.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Challenges */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Commercial Property Energy Challenges
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unique pressures that make every recovered pound vital for business success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <challenge.icon className={`${challenge.color} mb-4`} size={48} />
                <h3 className="text-xl font-bold text-navy mb-2">{challenge.title}</h3>
                <p className="text-slate-600">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Real Commercial Property Recoveries
            </h2>
            <p className="text-xl text-slate-600">
              Actual results from office buildings and commercial properties across the UK
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <IconBuilding className="text-blue-600" size={32} />
                <span className="text-sm font-medium text-blue-600">CASE STUDY #{activeCase + 1}</span>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-2">
                {caseStudies[activeCase].type}
              </h3>
              <p className="text-slate-600 mb-6">
                {caseStudies[activeCase].location} • {caseStudies[activeCase].size}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-light rounded-xl p-4">
                  <div className="text-3xl font-bold text-emerald">
                    £{caseStudies[activeCase].recovered.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-600">Recovered</div>
                </div>
                <div className="bg-blue-100 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {caseStudies[activeCase].time}
                  </div>
                  <div className="text-sm text-slate-600">To Payment</div>
                </div>
                <div className="bg-purple-100 rounded-xl p-4">
                  <div className="text-lg font-bold text-purple-600">
                    {caseStudies[activeCase].consumption}
                  </div>
                  <div className="text-sm text-slate-600">Energy Spend</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="text-lg italic text-slate-700 mb-2">
                  "{caseStudies[activeCase].quote}"
                </p>
                <p className="text-sm text-slate-500">- {caseStudies[activeCase].type}</p>
              </div>

              <div className="flex items-start gap-3">
                <IconCircleCheck className="text-emerald mt-1" size={20} />
                <div>
                  <p className="font-medium text-navy">Impact:</p>
                  <p className="text-slate-600">{caseStudies[activeCase].impact}</p>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCase(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeCase === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Specialist Commercial Property Recovery Service
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique challenges of commercial real estate and office operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              {solutions.slice(0, 3).map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <IconCircleCheck className="text-emerald mt-1 shrink-0" size={20} />
                  <p className="text-gray-200">{solution}</p>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              {solutions.slice(3).map((solution, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <IconCircleCheck className="text-emerald mt-1 shrink-0" size={20} />
                  <p className="text-gray-200">{solution}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/calculate"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl hover:shadow-lg transition-all font-medium text-lg"
            >
              Start Commercial Claim
              <IconArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Business-First Recovery Process
            </h2>
            <p className="text-xl text-slate-600">
              Designed to work around your business operations without disruption
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-blue-300 hidden md:block" />

              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6 mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                    {item.step}
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                      <span className="text-sm text-emerald font-medium">{item.time}</span>
                    </div>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Commercial Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IconBuilding key={i} className="text-blue-500 fill-blue-500" size={20} />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-bold text-navy">{testimonial.company}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald">
                      £{testimonial.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-slate-500">recovered</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Commercial Property FAQs
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-navy mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-gray-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <IconBuildingSkyscraper className="mx-auto mb-6 animate-pulse" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Reduce Your Office Overheads Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              428 commercial properties have recovered £9.2M+ in hidden commissions. 
              Join them in reducing operational costs and improving your bottom line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculate"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:shadow-lg transition-all font-medium text-lg"
              >
                Calculate Office Recovery
                <IconArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-medium border border-white/20"
              >
                Commercial Property Line
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Offices