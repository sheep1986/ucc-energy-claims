import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  IconHeartbeat,
  IconBolt,
  IconTrendingUp,
  IconCurrencyPound,
  IconAlertTriangle,
  IconChartBar,
  IconClock,
  IconShieldCheck,
  IconCircleCheck,
  IconArrowRight,
  IconBuildingHospital,
  IconStethoscope,
  IconBed,
  IconUsers,
  IconFileCheck,
  IconTemperature,
  IconDroplet,
  IconBulb,
  IconHeart
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const Healthcare = () => {
  const [activeCase, setActiveCase] = useState(0)

  const stats = [
    { value: 12500000, label: 'Recovered for Healthcare', prefix: '£', suffix: '+' },
    { value: 389, label: 'Care Facilities Helped', suffix: '+' },
    { value: 98000, label: 'Average Recovery', prefix: '£' },
    { value: 19, label: 'Days to Payment', suffix: ' Days' }
  ]

  const caseStudies = [
    {
      type: 'Private Care Home Group',
      location: 'Surrey',
      size: '8 homes, 420 beds',
      consumption: '£520,000/year energy spend',
      recovered: 234000,
      time: '17 days',
      impact: 'Funded new medical equipment and avoided fee increases',
      quote: 'This recovery meant we didn\'t have to raise resident fees during the cost crisis.'
    },
    {
      type: 'NHS Trust Hospital',
      location: 'Leeds',
      size: '1,200 beds, 3,500 staff',
      consumption: '£1.8M/year energy spend',
      recovered: 567000,
      time: '21 days',
      impact: 'Redirected funds to patient care and new scanning equipment',
      quote: 'Every pound recovered goes directly back into patient care. This was transformative.'
    },
    {
      type: 'Private Dental Practice Chain',
      location: 'London',
      size: '12 practices, 85 staff',
      consumption: '£180,000/year energy spend',
      recovered: 89000,
      time: '14 days',
      impact: 'Upgraded sterilization equipment across all practices',
      quote: 'The process was seamless. Funds arrived faster than promised.'
    },
    {
      type: 'Rehabilitation Center',
      location: 'Bristol',
      size: '60 beds, specialist facility',
      consumption: '£290,000/year energy spend',
      recovered: 156000,
      time: '16 days',
      impact: 'Expanded therapy services and hired 3 additional therapists',
      quote: 'UCC understood our unique needs as a healthcare provider. Exceptional service.'
    }
  ]

  const challenges = [
    {
      title: '24/7 Energy Demand',
      description: 'Life support, heating, and medical equipment require constant power',
      icon: IconHeartbeat,
      color: 'text-red-500'
    },
    {
      title: 'Strict Temperature Control',
      description: 'Regulatory requirements for patient comfort and medicine storage',
      icon: IconTemperature,
      color: 'text-blue-500'
    },
    {
      title: 'Budget Constraints',
      description: 'Every pound spent on energy reduces patient care funding',
      icon: IconChartBar,
      color: 'text-purple-500'
    },
    {
      title: 'Complex Operations',
      description: 'Multiple buildings, specialist equipment, and varying energy needs',
      icon: IconBuildingHospital,
      color: 'text-orange-500'
    }
  ]

  const solutions = [
    'Specialist healthcare sector expertise',
    'Understanding of CQC and regulatory requirements',
    'Priority processing for NHS and care homes',
    'Multi-site recovery for healthcare groups',
    'No disruption to patient care or operations',
    'Confidential handling of sensitive facilities'
  ]

  const testimonials = [
    {
      company: 'Caring Homes Group',
      role: 'Chief Executive',
      text: 'The £312,000 recovery allowed us to upgrade facilities without impacting our residents.',
      amount: 312000,
      rating: 5
    },
    {
      company: 'Private Medical Centre',
      role: 'Practice Manager',
      text: 'Professional, fast, and understanding of healthcare pressures. Highly recommended.',
      amount: 67000,
      rating: 5
    },
    {
      company: 'Mental Health Trust',
      role: 'Finance Director',
      text: 'Recovered funds went straight into patient services. Life-changing for our trust.',
      amount: 445000,
      rating: 5
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Healthcare Assessment',
      description: 'Confidential review of your energy contracts across all facilities',
      time: '24 hours'
    },
    {
      step: '2',
      title: 'Commission Discovery',
      description: 'Expert analysis identifies hidden broker fees in healthcare tariffs',
      time: '3-5 days'
    },
    {
      step: '3',
      title: 'Claim Management',
      description: 'We handle all documentation while you focus on patient care',
      time: '7-10 days'
    },
    {
      step: '4',
      title: 'Fund Recovery',
      description: 'Direct payment to reinvest in your healthcare services',
      time: '14-21 days total'
    }
  ]

  const faqs = [
    {
      q: 'Will this affect our CQC rating or regulatory compliance?',
      a: 'No. Claiming has no impact on your regulatory status or CQC rating. It\'s purely a financial recovery process.'
    },
    {
      q: 'Can NHS facilities claim?',
      a: 'Yes. NHS trusts, private healthcare, care homes, and all healthcare facilities can claim.'
    },
    {
      q: 'What about sensitive facilities like mental health units?',
      a: 'We handle all claims with complete confidentiality and understand the sensitivity of healthcare operations.'
    },
    {
      q: 'How much do healthcare facilities typically recover?',
      a: 'Healthcare providers recover £50,000-£500,000 on average, with care home groups often recovering more.'
    }
  ]

  const healthcareTypes = [
    { name: 'Hospitals & Clinics', icon: IconBuildingHospital },
    { name: 'Care Homes', icon: IconHeart },
    { name: 'Dental Practices', icon: IconBulb },
    { name: 'GP Surgeries', icon: IconStethoscope },
    { name: 'Mental Health', icon: IconUsers },
    { name: 'Rehabilitation', icon: IconBed }
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
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-blue-900 via-teal-900 to-blue-900 overflow-hidden">
        {/* Medical Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-white">
            <IconHeartbeat size={200} />
          </div>
          <div className="absolute bottom-20 right-20 text-white">
            <IconBuildingHospital size={150} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <IconHeart size={250} className="animate-pulse" />
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
              <span className="font-medium">Critical: Energy Costs Threatening Patient Care Standards</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Healthcare & Care Homes
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Energy Commission Recovery
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Healthcare providers face unique energy challenges with 24/7 operations and strict regulations. 
              We've helped 389+ healthcare facilities recover over £12.5M in hidden commissions, 
              with every pound going back into patient care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/calculate"
                className="inline-flex items-center justify-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all font-medium text-lg"
              >
                Calculate Healthcare Claim
                <IconArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-medium border border-white/20"
              >
                Priority NHS Support
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

      {/* Healthcare Types */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              We Serve All Healthcare Providers
            </h2>
            <p className="text-xl text-slate-600">
              Specialist recovery service for every type of healthcare facility
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {healthcareTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="w-20 h-20 mx-auto mb-3 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                  <type.icon className="text-teal-600" size={36} />
                </div>
                <p className="text-sm font-medium text-navy">{type.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Challenges */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Healthcare Energy Challenges
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unique pressures that make every recovered pound vital for patient care
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
              Real Healthcare Recoveries
            </h2>
            <p className="text-xl text-slate-600">
              Actual results from hospitals, care homes, and medical facilities
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <IconBuildingHospital className="text-teal-600" size={32} />
                <span className="text-sm font-medium text-teal-600">CASE STUDY #{activeCase + 1}</span>
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
                      activeCase === index ? 'bg-teal-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-blue-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Specialist Healthcare Recovery Service
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique pressures and requirements of healthcare providers
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
              className="inline-flex items-center gap-2 bg-white text-teal-900 px-8 py-4 rounded-xl hover:shadow-lg transition-all font-medium text-lg"
            >
              Start Healthcare Claim
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
              Patient-First Recovery Process
            </h2>
            <p className="text-xl text-slate-600">
              Designed to work around your healthcare operations
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-teal-300 hidden md:block" />

              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6 mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                    {item.step}
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 flex-1">
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
              Healthcare Success Stories
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
                    <IconHeart key={i} className="text-red-500 fill-red-500" size={20} />
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
              Healthcare FAQs
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
                  className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6"
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
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <IconHeartbeat className="mx-auto mb-6 animate-pulse" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Every Pound Back Into Patient Care
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              389 healthcare facilities have recovered £12.5M+ in hidden commissions. 
              Join them in reclaiming funds that should be serving your patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculate"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl hover:shadow-lg transition-all font-medium text-lg"
              >
                Calculate Healthcare Recovery
                <IconArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-medium border border-white/20"
              >
                Priority Healthcare Line
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Healthcare