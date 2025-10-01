import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  IconShoppingCart,
  IconBolt,
  IconTrendingUp,
  IconCurrencyPound,
  IconAlertTriangle,
  IconChartBar,
  IconClock,
  IconShieldCheck,
  IconCircleCheck,
  IconArrowRight,
  IconBuildingStore,
  IconShoppingBag,
  IconCreditCard,
  IconUsers,
  IconFileCheck,
  IconPackage,
  IconTruck,
  IconBarcode,
  IconReceipt
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const Retail = () => {
  const [activeCase, setActiveCase] = useState(0)

  const stats = [
    { value: 9800000, label: 'Recovered for Retail', prefix: '£', suffix: '+' },
    { value: 456, label: 'Retailers Helped', suffix: '+' },
    { value: 67000, label: 'Average Recovery', prefix: '£' },
    { value: 17, label: 'Days to Payment', suffix: ' Days' }
  ]

  const caseStudies = [
    {
      type: 'High Street Fashion Chain',
      location: 'London & South East',
      size: '45 stores, 800 employees',
      consumption: '£450,000/year energy spend',
      recovered: 189000,
      time: '15 days',
      impact: 'Avoided closing 3 underperforming stores',
      quote: 'This recovery saved our expansion plans and kept all stores operational.'
    },
    {
      type: 'Supermarket Group',
      location: 'Nationwide',
      size: '12 stores, 24/7 operations',
      consumption: '£890,000/year energy spend',
      recovered: 345000,
      time: '18 days',
      impact: 'Funded complete LED lighting upgrade across all stores',
      quote: 'The funds transformed our energy efficiency. We\'re now saving 30% monthly.'
    },
    {
      type: 'Independent Department Store',
      location: 'Manchester',
      size: 'Flagship store, 120 staff',
      consumption: '£180,000/year energy spend',
      recovered: 98000,
      time: '14 days',
      impact: 'Invested in new POS systems and customer experience',
      quote: 'As a family business, this was life-changing. Professional service throughout.'
    },
    {
      type: 'Electronics Retailer Chain',
      location: 'Birmingham & Midlands',
      size: '18 stores, warehouse',
      consumption: '£320,000/year energy spend',
      recovered: 156000,
      time: '16 days',
      impact: 'Cleared debts and funded online platform development',
      quote: 'UCC understood retail pressures. The recovery helped us compete with online giants.'
    }
  ]

  const challenges = [
    {
      title: 'Extended Trading Hours',
      description: 'Late nights, weekends, and seasonal peaks drive energy costs',
      icon: IconClock,
      color: 'text-purple-500'
    },
    {
      title: 'Climate Control Costs',
      description: 'Heating, cooling, and lighting for customer comfort',
      icon: IconBolt,
      color: 'text-blue-500'
    },
    {
      title: 'Online Competition',
      description: 'Physical stores face pressure from e-commerce rivals',
      icon: IconShoppingCart,
      color: 'text-orange-500'
    },
    {
      title: 'Thin Profit Margins',
      description: 'Every cost reduction directly improves survival chances',
      icon: IconChartBar,
      color: 'text-red-500'
    }
  ]

  const solutions = [
    'Multi-store portfolio analysis and recovery',
    'Understanding of retail energy patterns',
    'Fast-track processing for struggling retailers',
    'Support for independents and major chains',
    'No disruption to trading or operations',
    'Seasonal consideration for peak periods'
  ]

  const testimonials = [
    {
      company: 'Fashion Forward Ltd',
      role: 'CEO',
      text: 'The £234,000 recovery funded our digital transformation. We\'re now thriving.',
      amount: 234000,
      rating: 5
    },
    {
      company: 'Green Grocers Chain',
      role: 'Operations Director',
      text: 'Quick, professional, and understood our needs. Funds arrived in 12 days.',
      amount: 87000,
      rating: 5
    },
    {
      company: 'Home & Garden Stores',
      role: 'Finance Manager',
      text: 'Recovery helped us through the toughest trading period in our history.',
      amount: 145000,
      rating: 5
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Retail Portfolio Review',
      description: 'Analysis of energy contracts across all retail locations',
      time: '24 hours'
    },
    {
      step: '2',
      title: 'Commission Detection',
      description: 'Uncovering hidden fees in your retail energy tariffs',
      time: '3-5 days'
    },
    {
      step: '3',
      title: 'Claim Processing',
      description: 'We handle everything while you focus on customers',
      time: '7-10 days'
    },
    {
      step: '4',
      title: 'Fund Transfer',
      description: 'Direct payment to support your retail operations',
      time: '14-21 days total'
    }
  ]

  const faqs = [
    {
      q: 'Can we claim for closed stores?',
      a: 'Yes, if you paid the energy bills within the last 6 years, you can claim for closed locations.'
    },
    {
      q: 'What about franchise operations?',
      a: 'Both franchisors and franchisees can claim if they paid the energy bills directly.'
    },
    {
      q: 'Will this affect our supplier relationships?',
      a: 'No, claiming doesn\'t affect your current or future energy contracts.'
    },
    {
      q: 'How much do retailers typically recover?',
      a: 'Retail businesses recover £30,000-£350,000 on average, depending on store count and size.'
    }
  ]

  const retailTypes = [
    { name: 'Fashion & Clothing', icon: IconShoppingBag },
    { name: 'Supermarkets', icon: IconShoppingCart },
    { name: 'Department Stores', icon: IconBuildingStore },
    { name: 'Electronics', icon: IconCreditCard },
    { name: 'Home & Garden', icon: IconPackage },
    { name: 'Specialty Retail', icon: IconBarcode }
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
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 overflow-hidden">
        {/* Retail Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-white">
            <IconShoppingCart size={200} />
          </div>
          <div className="absolute bottom-20 right-20 text-white">
            <IconBuildingStore size={150} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <IconShoppingBag size={250} className="animate-bounce-slow" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full mb-6">
              <IconAlertTriangle size={20} />
              <span className="font-medium">Retail Crisis: High Street Stores Fighting for Survival</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Retail & Shopping
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Energy Commission Recovery
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              UK retailers face unprecedented challenges with energy costs threatening store closures. 
              We've helped 456+ retailers recover £9.8M in hidden commissions, 
              keeping stores open and staff employed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/calculate"
                className="inline-flex items-center justify-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all font-medium text-lg"
              >
                Calculate Retail Claim
                <IconArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-medium border border-white/20"
              >
                Emergency Retail Support
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

      {/* Retail Types */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Supporting All Retail Sectors
            </h2>
            <p className="text-xl text-slate-600">
              From independent stores to major chains
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {retailTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="w-20 h-20 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                  <type.icon className="text-purple-600" size={36} />
                </div>
                <p className="text-sm font-medium text-navy">{type.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Challenges */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Retail Energy Challenges
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding the unique pressures facing modern retailers
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
              Real Retail Recoveries
            </h2>
            <p className="text-xl text-slate-600">
              Success stories from UK retailers
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <IconBuildingStore className="text-purple-600" size={32} />
                <span className="text-sm font-medium text-purple-600">CASE STUDY #{activeCase + 1}</span>
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
                <div className="bg-purple-100 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-600">
                    {caseStudies[activeCase].time}
                  </div>
                  <div className="text-sm text-slate-600">To Payment</div>
                </div>
                <div className="bg-pink-100 rounded-xl p-4">
                  <div className="text-lg font-bold text-pink-600">
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
                      activeCase === index ? 'bg-purple-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Specialist Retail Recovery Service
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Supporting the backbone of UK high streets
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
              className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-xl hover:shadow-lg transition-all font-medium text-lg"
            >
              Start Retail Claim
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
              Fast-Track Retail Recovery
            </h2>
            <p className="text-xl text-slate-600">
              Designed for busy retail operations
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-purple-300 hidden md:block" />

              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6 mb-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                    {item.step}
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 flex-1">
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
              Retail Success Stories
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
                    <IconShoppingBag key={i} className="text-purple-500 fill-purple-500" size={20} />
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
              Retail FAQs
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
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6"
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <IconShoppingCart className="mx-auto mb-6 animate-bounce" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Save Your Store From Closure
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              456 UK retailers have recovered £9.8M+ in hidden commissions. 
              Don't let energy costs force you to close your doors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculate"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl hover:shadow-lg transition-all font-medium text-lg"
              >
                Calculate Retail Recovery
                <IconArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-medium border border-white/20"
              >
                Emergency Support Line
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

export default Retail