import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  IconSchool,
  IconBolt,
  IconTrendingUp,
  IconCurrencyPound,
  IconAlertTriangle,
  IconChartBar,
  IconClock,
  IconShieldCheck,
  IconCircleCheck,
  IconArrowRight,
  IconBuilding,
  IconBook,
  IconUsers,
  IconFileCheck,
  IconBulb,
  IconMicroscope,
  IconPalette,
  IconCalendar,
  IconChalkboard
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const Education = () => {
  const [activeCase, setActiveCase] = useState(0)

  const stats = [
    { value: 6800000, label: 'Recovered for Education', prefix: '£', suffix: '+' },
    { value: 312, label: 'Educational Institutions Helped', suffix: '+' },
    { value: 85000, label: 'Average Recovery', prefix: '£' },
    { value: 16, label: 'Days to Payment', suffix: ' Days' }
  ]

  const caseStudies = [
    {
      type: 'Secondary Academy Trust',
      location: 'London',
      size: '6 schools, 4,200 students',
      consumption: '£420,000/year energy spend',
      recovered: 298000,
      time: '15 days',
      impact: 'Funded new science labs and avoided staff redundancies',
      quote: 'This recovery meant we could invest in our students rather than just survive the budget crisis.'
    },
    {
      type: 'University Campus',
      location: 'Manchester',
      size: '12,000 students, 40 buildings',
      consumption: '£1.2M/year energy spend',
      recovered: 487000,
      time: '18 days',
      impact: 'Upgraded IT infrastructure and funded new student support services',
      quote: 'The professional handling of our claim allowed us to focus on education while recovering substantial funds.'
    },
    {
      type: 'Primary School Group',
      location: 'Birmingham',
      size: '8 schools, 2,400 pupils',
      consumption: '£180,000/year energy spend',
      recovered: 124000,
      time: '14 days',
      impact: 'Purchased new playground equipment and enhanced learning resources',
      quote: 'Every pound recovered goes directly to improving our children\'s education. Exceptional service.'
    },
    {
      type: 'College of Further Education',
      location: 'Leeds',
      size: '3,500 students, vocational focus',
      consumption: '£310,000/year energy spend',
      recovered: 178000,
      time: '16 days',
      impact: 'Modernized workshop equipment and expanded apprenticeship programs',
      quote: 'UCC understood our unique funding pressures and delivered results when we needed them most.'
    }
  ]

  const challenges = [
    {
      title: 'Tight Public Funding',
      description: 'Limited budgets with every pound scrutinized and needed for education',
      icon: IconCurrencyPound,
      color: 'text-red-500'
    },
    {
      title: 'Large Building Complexes',
      description: 'Multiple buildings, sports facilities, and halls requiring significant heating and lighting',
      icon: IconBuilding,
      color: 'text-blue-500'
    },
    {
      title: 'Seasonal Variations',
      description: 'High energy use during term time, lower during holidays - complex billing patterns',
      icon: IconCalendar,
      color: 'text-purple-500'
    },
    {
      title: 'Accountability Pressure',
      description: 'Public oversight requires transparent spending and maximum value for money',
      icon: IconChartBar,
      color: 'text-orange-500'
    }
  ]

  const solutions = [
    'Specialist education sector expertise and understanding',
    'Multi-academy trust and university group handling',
    'Compliance with public sector procurement requirements',
    'Fast processing to support urgent funding needs',
    'Detailed reporting for accountability requirements',
    'Priority support during budget planning periods'
  ]

  const testimonials = [
    {
      company: 'Riverside Academy Trust',
      role: 'Chief Financial Officer',
      text: 'The £198,000 recovery funded our new STEM facilities. Professional service throughout.',
      amount: 198000,
      rating: 5
    },
    {
      company: 'Metropolitan University',
      role: 'Procurement Director',
      text: 'Exceptional understanding of our sector. The process was transparent and efficient.',
      amount: 334000,
      rating: 5
    },
    {
      company: 'Parkside Primary School',
      role: 'Head Teacher',
      text: 'This recovery meant new books, resources, and opportunities for our children.',
      amount: 42000,
      rating: 5
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Education Sector Assessment',
      description: 'Review of all energy contracts across your educational facilities',
      time: '24 hours'
    },
    {
      step: '2',
      title: 'Commission Discovery',
      description: 'Analysis of education-specific tariffs and hidden broker fees',
      time: '3-5 days'
    },
    {
      step: '3',
      title: 'Compliant Claims Process',
      description: 'Full documentation meeting public sector requirements',
      time: '7-10 days'
    },
    {
      step: '4',
      title: 'Educational Fund Recovery',
      description: 'Direct payment to reinvest in student facilities and resources',
      time: '14-18 days total'
    }
  ]

  const faqs = [
    {
      q: 'Can state schools and academies claim?',
      a: 'Yes. All educational institutions including state schools, academies, universities, and private schools can claim hidden commissions.'
    },
    {
      q: 'How does this affect our public funding accountability?',
      a: 'Claiming increases your available funds for education. We provide full documentation for audit requirements.'
    },
    {
      q: 'What about multi-academy trusts with multiple sites?',
      a: 'We specialize in multi-site education claims and can handle complex trust structures efficiently.'
    },
    {
      q: 'How much do education providers typically recover?',
      a: 'Schools recover £20,000-£150,000 on average, while universities and large trusts often recover £200,000-£500,000.'
    }
  ]

  const educationTypes = [
    { name: 'Primary Schools', icon: IconBook },
    { name: 'Secondary Schools', icon: IconChalkboard },
    { name: 'Universities', icon: IconSchool },
    { name: 'Colleges', icon: IconBuilding },
    { name: 'Academies', icon: IconSchool },
    { name: 'Private Schools', icon: IconUsers }
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
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
        {/* Educational Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-white">
            <IconSchool size={200} />
          </div>
          <div className="absolute bottom-20 right-20 text-white">
            <IconChalkboard size={150} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <IconBook size={250} className="animate-pulse" />
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
              <span className="font-medium">Critical: Educational Budgets Under Severe Pressure</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Educational Institutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Energy Commission Recovery
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Schools, colleges, and universities face unprecedented budget pressures. We've helped 312+ 
              educational institutions recover over £6.8M in hidden energy commissions, with every 
              pound going directly back into education and student resources.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/calculate"
                className="inline-flex items-center justify-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all font-medium text-lg"
              >
                Calculate Education Claim
                <IconArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-medium border border-white/20"
              >
                Education Sector Support
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

      {/* Education Types */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              We Serve All Educational Institutions
            </h2>
            <p className="text-xl text-slate-600">
              Specialist recovery service for every level of education
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {educationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="w-20 h-20 mx-auto mb-3 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                  <type.icon className="text-indigo-600" size={36} />
                </div>
                <p className="text-sm font-medium text-navy">{type.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Challenges */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Educational Energy Challenges
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unique pressures that make every recovered pound vital for student success
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
              Real Educational Recoveries
            </h2>
            <p className="text-xl text-slate-600">
              Actual results from schools, colleges, and universities across the UK
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <IconSchool className="text-indigo-600" size={32} />
                <span className="text-sm font-medium text-indigo-600">CASE STUDY #{activeCase + 1}</span>
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
                      activeCase === index ? 'bg-indigo-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Specialist Education Sector Recovery Service
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand budget pressures and accountability requirements in education
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
              className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-xl hover:shadow-lg transition-all font-medium text-lg"
            >
              Start Education Claim
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
              Education-First Recovery Process
            </h2>
            <p className="text-xl text-slate-600">
              Designed to work within your academic calendar and budget cycles
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-indigo-300 hidden md:block" />

              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6 mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                    {item.step}
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 flex-1">
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
              Educational Success Stories
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
                    <IconBulb key={i} className="text-yellow-500 fill-yellow-500" size={20} />
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
              Education Sector FAQs
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
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6"
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
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <IconSchool className="mx-auto mb-6 animate-pulse" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Every Pound Back Into Education
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              312 educational institutions have recovered £6.8M+ in hidden commissions. 
              Join them in reclaiming funds that should be serving your students and staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculate"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl hover:shadow-lg transition-all font-medium text-lg"
              >
                Calculate Education Recovery
                <IconArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-medium border border-white/20"
              >
                Education Priority Line
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Education