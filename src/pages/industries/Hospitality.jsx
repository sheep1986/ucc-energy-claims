import { Link } from 'react-router-dom'
import { 
  IconBed,
  IconChevronRight,
  IconClock,
  IconCurrencyPound,
  IconTrendingUp,
  IconAlertTriangle,
  IconCheck,
  IconBuilding,
  IconBolt,
  IconShieldCheck
} from '@tabler/icons-react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Hospitality = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const stats = [
    { value: 35000, label: 'Average Claim', prefix: '£' },
    { value: 8, label: 'Million Recovered', prefix: '£', suffix: 'M+' },
    { value: 1200, label: 'Hotels Helped', suffix: '+' },
    { value: 21, label: 'Days to Submit', suffix: ' Days' }
  ]

  const issues = [
    {
      title: '24/7 Energy Usage Exploitation',
      description: 'Hotels run 24/7, making them prime targets for excessive hidden commissions on their substantial energy needs.'
    },
    {
      title: 'Multi-Site Contract Manipulation',
      description: 'Hotel chains often have commissions hidden across multiple properties, multiplying the overcharges.'
    },
    {
      title: 'Seasonal Rate Abuse',
      description: 'Brokers exploit seasonal fluctuations to hide even larger commissions during peak periods.'
    },
    {
      title: 'Crisis-Era Profiteering',
      description: 'During COVID-19, while hotels struggled, brokers continued taking massive undisclosed commissions.'
    }
  ]

  const caseStudies = [
    {
      type: 'Boutique Hotel Chain',
      location: 'London',
      rooms: '5 Properties, 250 Rooms',
      recovered: 127000,
      timeframe: '8 weeks',
      quote: 'The recovery saved us from closing two of our locations. We had no idea we were being overcharged this much.',
      challenge: 'Struggling with post-pandemic recovery and rising energy costs',
      solution: 'Identified 35% hidden commission across all properties'
    },
    {
      type: 'Seaside Resort',
      location: 'Cornwall',
      rooms: '150 Rooms',
      recovered: 89000,
      timeframe: '10 weeks',
      quote: 'This money allowed us to avoid staff redundancies and invest in energy-saving improvements.',
      challenge: 'Seasonal business with high summer energy demands',
      solution: 'Recovered commissions from past 4 years of contracts'
    },
    {
      type: 'City Centre Hotels',
      location: 'Manchester',
      rooms: '3 Hotels, 450 Rooms',
      recovered: 156000,
      timeframe: '12 weeks',
      quote: 'UCC found commissions we never knew existed. The process was completely hassle-free.',
      challenge: 'Multiple sites with different brokers and contracts',
      solution: 'Consolidated claims across all properties for maximum recovery'
    }
  ]

  const testimonials = [
    {
      business: 'The Grand Hotel Bristol',
      person: 'Operations Director',
      amount: 67500,
      text: 'After two tough years, this recovery was a lifeline. We used the funds to upgrade our heating system, which will save us even more going forward.'
    },
    {
      business: 'Lakeside Lodge Group',
      person: 'Finance Manager',
      amount: 94000,
      text: 'We were days away from closing our restaurant. The claim money arrived just in time and saved 30 jobs.'
    },
    {
      business: 'Urban Stays Collection',
      person: 'CEO',
      amount: 112000,
      text: 'Hidden commissions nearly destroyed our business. Now we\'re expanding again thanks to UCC\'s help.'
    }
  ]

  const commonClaims = [
    { range: '50-100 rooms', typical: '£25,000 - £45,000' },
    { range: '100-200 rooms', typical: '£45,000 - £85,000' },
    { range: '200+ rooms', typical: '£85,000 - £250,000' },
    { range: 'Multi-site chains', typical: '£150,000+' }
  ]

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-ice-light/30 to-emerald-light/20 py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <IconBed className="text-emerald" size={32} />
                <span className="text-emerald font-semibold">Hospitality & Hotels</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Energy Commission Recovery for Hotels & Hospitality
              </h1>
              
              <p className="text-lg text-slate-600 mb-8">
                The hospitality sector has been hit hardest by hidden energy commissions. 
                While you struggled through lockdowns and recovery, energy brokers continued 
                taking massive undisclosed profits. It's time to claim back what's yours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/calculate"
                  className="inline-flex items-center justify-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all duration-300 font-medium"
                >
                  Calculate Hotel Claim
                  <IconChevronRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-navy px-8 py-4 rounded-xl border-2 border-navy hover:bg-navy hover:text-white transition-all duration-300 font-medium"
                >
                  Speak to Specialist
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <IconCheck className="text-emerald" size={20} />
                  <span className="text-slate-600">No upfront costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="text-emerald" size={20} />
                  <span className="text-slate-600">Average claim £35,000</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="card p-8 bg-white">
                <h3 className="text-2xl font-bold text-navy mb-6">Quick Eligibility Check</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <IconCheck className="text-emerald mt-1" size={20} />
                    <div>
                      <p className="font-medium">Run a hotel, B&B, or hospitality venue?</p>
                      <p className="text-sm text-slate-500">Any size, any location</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconCheck className="text-emerald mt-1" size={20} />
                    <div>
                      <p className="font-medium">Used a broker in the last 6 years?</p>
                      <p className="text-sm text-slate-500">Even if you're not sure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconCheck className="text-emerald mt-1" size={20} />
                    <div>
                      <p className="font-medium">Energy bills over £10,000/year?</p>
                      <p className="text-sm text-slate-500">Most hotels qualify</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/calculate"
                  className="w-full bg-emerald text-white py-3 rounded-xl text-center block hover:bg-emerald/90 transition-all"
                >
                  Check My Eligibility →
                </Link>
              </div>

              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-xl font-medium animate-pulse">
                Time Sensitive
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-emerald">
                  {stat.prefix}<CountUp end={stat.value} duration={2} separator="," />{stat.suffix}
                </div>
                <p className="text-slate-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <IconAlertTriangle className="text-red-500 mx-auto mb-4" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                How Hotels Are Being Exploited
              </h2>
              <p className="text-lg text-slate-600">
                The hospitality industry faces unique energy challenges that brokers exploit for profit
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {issues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-semibold text-navy mb-3">{issue.title}</h3>
                  <p className="text-slate-600">{issue.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">
              Real Hotel Recovery Success Stories
            </h2>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-xl transition-all"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-2">{study.type}</h3>
                      <p className="text-slate-600 mb-2">{study.location}</p>
                      <p className="text-sm text-slate-500">{study.rooms}</p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-500">Recovered:</span>
                          <span className="font-bold text-emerald">£{study.recovered.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-500">Timeframe:</span>
                          <span className="font-medium">{study.timeframe}</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <div className="mb-4">
                        <h4 className="font-semibold text-navy mb-2">Challenge:</h4>
                        <p className="text-slate-600">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-navy mb-2">Solution:</h4>
                        <p className="text-slate-600">{study.solution}</p>
                      </div>

                      <blockquote className="border-l-4 border-emerald pl-4 italic text-slate-700">
                        "{study.quote}"
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Hotel Owners Say
            </h2>

            <div className="relative">
              <div className="card bg-white/10 backdrop-blur border border-white/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald mb-4">
                    £{testimonials[activeTestimonial].amount.toLocaleString()}
                  </div>
                  <p className="text-lg mb-6 italic">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonials[activeTestimonial].business}</p>
                    <p className="text-sm text-slate-300">{testimonials[activeTestimonial].person}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeTestimonial === index ? 'bg-emerald w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">
              Typical Hotel Claim Values
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {commonClaims.map((claim, index) => (
                <div key={index} className="card hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <IconBuilding className="text-navy mb-2" size={24} />
                      <p className="font-medium">{claim.range}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald">{claim.typical}</p>
                      <p className="text-sm text-slate-500">Typical recovery</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-light rounded-2xl p-8 text-center">
              <IconCurrencyPound className="text-emerald mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-navy mb-3">
                Calculate Your Hotel's Specific Claim
              </h3>
              <p className="text-slate-700 mb-6">
                Get an instant estimate based on your property size and energy spend
              </p>
              <Link
                to="/calculate"
                className="inline-flex items-center gap-2 bg-emerald text-white px-8 py-3 rounded-xl hover:bg-emerald/90 transition-all"
              >
                Calculate Now
                <IconChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <IconAlertTriangle className="text-red-500 mx-auto mb-6 animate-pulse" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Hotels Are Closing Every Week Due to Energy Costs
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Don't become another casualty. Your hidden commission recovery could be the 
              difference between thriving and closing. Claims expire after 6 years - act now.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">47%</div>
                <p className="text-slate-600">Hotels at risk of closure</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">£2.3B</div>
                <p className="text-slate-600">Hidden commissions yearly</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald">21 Days</div>
                <p className="text-slate-600">To get your money</p>
              </div>
            </div>

            <Link
              to="/calculate"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-8 py-4 rounded-xl hover:bg-red-600 transition-all duration-300 font-medium text-lg animate-pulse"
            >
              Start Emergency Recovery
              <IconChevronRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Recover Your Hotel's Hidden Commissions?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join over 1,200 hotels that have already claimed back millions. 
            No win, no fee. 100% risk-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculate"
              className="inline-flex items-center justify-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all duration-300 font-medium"
            >
              Calculate My Claim
              <IconChevronRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium border border-white/20"
            >
              Speak to Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hospitality