import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  IconBuildingFactory2,
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
  IconCalendar,
  IconPercentage,
  IconUsers,
  IconFileCheck,
  IconRocket,
  IconTool,
  IconCrane,
  IconPackage,
  IconSettings
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const Manufacturing = () => {
  const [activeCase, setActiveCase] = useState(0)

  const stats = [
    { value: 8500000, label: 'Recovered for Manufacturing', prefix: '£', suffix: '+' },
    { value: 247, label: 'Factories Helped', suffix: '+' },
    { value: 189000, label: 'Average Recovery', prefix: '£' },
    { value: 18, label: 'Days to Payment', suffix: ' Days' }
  ]

  const caseStudies = [
    {
      type: 'Automotive Parts Manufacturer',
      location: 'Birmingham',
      size: '450 employees, 3 production lines',
      consumption: '£380,000/year energy spend',
      recovered: 267000,
      time: '16 days',
      impact: 'Funded new equipment purchase and saved 12 jobs',
      quote: 'The recovery allowed us to upgrade our production line instead of making redundancies.'
    },
    {
      type: 'Steel Processing Plant',
      location: 'Sheffield',
      size: '220 employees, 24/7 operations',
      consumption: '£620,000/year energy spend',
      recovered: 412000,
      time: '19 days',
      impact: 'Cleared debt and invested in energy-efficient machinery',
      quote: 'We were facing closure. This literally saved our 150-year-old family business.'
    },
    {
      type: 'Food Processing Facility',
      location: 'Manchester',
      size: '180 employees, 2 shifts',
      consumption: '£290,000/year energy spend',
      recovered: 178000,
      time: '14 days',
      impact: 'Expanded refrigeration capacity and hired 8 new workers',
      quote: 'Fastest and most professional service we\'ve ever experienced.'
    }
  ]

  const challenges = [
    {
      title: 'Energy-Intensive Operations',
      description: '24/7 production lines and heavy machinery drive massive energy consumption',
      icon: IconBuildingFactory2,
      color: 'text-red-500'
    },
    {
      title: 'Razor-Thin Margins',
      description: 'Global competition means every penny counts toward survival',
      icon: IconChartBar,
      color: 'text-orange-500'
    },
    {
      title: 'Complex Contracts',
      description: 'Multi-site operations with confusing energy agreements hiding commissions',
      icon: IconFileCheck,
      color: 'text-purple-500'
    },
    {
      title: 'Cash Flow Pressure',
      description: 'Need capital for equipment upgrades and maintenance',
      icon: IconCurrencyPound,
      color: 'text-blue-500'
    }
  ]

  const solutions = [
    'Multi-site contract analysis across all facilities',
    'Priority processing for manufacturers facing closure',
    'Direct liaison with energy suppliers on your behalf',
    'Recovery of commissions dating back 6 years',
    'Support for businesses of all sizes from SMEs to large plants',
    'No upfront costs or hidden fees'
  ]

  const testimonials = [
    {
      company: 'Midlands Metal Works',
      role: 'Managing Director',
      text: 'UCC recovered £340,000 we had no idea we were owed. It saved us from bankruptcy.',
      amount: 340000,
      rating: 5
    },
    {
      company: 'Northern Plastics Ltd',
      role: 'Finance Director',
      text: 'The process was completely hands-off. They handled everything while we focused on production.',
      amount: 156000,
      rating: 5
    },
    {
      company: 'Bristol Engineering Co',
      role: 'Operations Manager',
      text: 'Funds arrived in 12 days. We immediately invested in new CNC machinery.',
      amount: 223000,
      rating: 5
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Manufacturing Analysis',
      description: 'We review your energy contracts across all production facilities',
      time: '24 hours'
    },
    {
      step: '2',
      title: 'Commission Investigation',
      description: 'Our experts uncover hidden broker fees in your industrial tariffs',
      time: '3-5 days'
    },
    {
      step: '3',
      title: 'Claim Submission',
      description: 'We handle all legal documentation and supplier negotiations',
      time: '7-10 days'
    },
    {
      step: '4',
      title: 'Recovery Payment',
      description: 'Funds transferred directly to your business account',
      time: '14-21 days total'
    }
  ]

  const faqs = [
    {
      q: 'Will claiming affect our energy supply or contracts?',
      a: 'No. Your energy supply continues uninterrupted, and you can keep your current contracts if you wish.'
    },
    {
      q: 'What if we have multiple production sites?',
      a: 'We analyze all sites simultaneously and recover commissions from each facility\'s contracts.'
    },
    {
      q: 'Can we claim for closed or sold facilities?',
      a: 'Yes, if you paid the energy bills within the last 6 years, you can still claim.'
    },
    {
      q: 'How much do manufacturing businesses typically recover?',
      a: 'Manufacturing businesses recover £50,000-£500,000 on average due to high energy consumption.'
    }
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
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Industrial Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-white">
            <IconBuildingFactory2 size={200} />
          </div>
          <div className="absolute bottom-20 right-20 text-white">
            <IconCrane size={150} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <IconSettings size={250} className="animate-spin-slow" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full mb-6">
              <IconAlertTriangle size={20} />
              <span className="font-medium">Manufacturing Crisis: Energy Costs Forcing UK Factory Closures</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Manufacturing & Industrial
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Energy Commission Recovery
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              UK manufacturers are owed millions in hidden energy broker commissions. 
              With energy costs threatening production, every recovered pound matters. 
              We've helped 247+ factories recover an average of £189,000 in just 18 days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/calculate"
                className="inline-flex items-center justify-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all font-medium text-lg"
              >
                Calculate Manufacturing Claim
                <IconArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-medium border border-white/20"
              >
                Priority Factory Support
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

      {/* Manufacturing Challenges */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Manufacturing Energy Challenges
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              UK manufacturers face unique energy pressures that hidden commissions make worse
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
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all"
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Real Manufacturing Recoveries
            </h2>
            <p className="text-xl text-slate-600">
              Actual results from UK factories and production facilities
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <IconBuildingFactory2 className="text-orange-500" size={32} />
                <span className="text-sm font-medium text-orange-500">CASE STUDY #{activeCase + 1}</span>
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
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {caseStudies[activeCase].time}
                  </div>
                  <div className="text-sm text-slate-600">To Payment</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="text-lg font-bold text-purple-600">
                    {caseStudies[activeCase].consumption}
                  </div>
                  <div className="text-sm text-slate-600">Energy Spend</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 mb-6">
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
                      activeCase === index ? 'bg-orange-500 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Specialist Manufacturing Recovery Service
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique challenges facing UK manufacturers
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
                  <IconCircleCheck className="text-emerald mt-1" size={20} />
                  <p className="text-gray-300">{solution}</p>
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
                  <IconCircleCheck className="text-emerald mt-1" size={20} />
                  <p className="text-gray-300">{solution}</p>
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
              className="inline-flex items-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all font-medium text-lg"
            >
              Start Manufacturing Claim
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
              Fast-Track Manufacturing Process
            </h2>
            <p className="text-xl text-slate-600">
              Priority processing for production facilities
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gray-300 hidden md:block" />

              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6 mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                    {item.step}
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 flex-1">
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
              Manufacturing Success Stories
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
                    <IconBolt key={i} className="text-yellow-500 fill-yellow-500" size={20} />
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
              Manufacturing FAQs
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
                  className="bg-slate-50 rounded-xl p-6"
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
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <IconAlertTriangle className="mx-auto mb-6 animate-pulse" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't Let Energy Costs Close Your Factory
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              247 UK manufacturers have already recovered £8.5M+ in hidden commissions. 
              With energy costs at record highs, every pound matters for survival.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculate"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-xl hover:shadow-lg transition-all font-medium text-lg"
              >
                Calculate Factory Recovery
                <IconArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-medium border border-white/20"
              >
                Priority Support Line
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  )
}

export default Manufacturing