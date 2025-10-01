import { motion } from 'framer-motion'
import { IconBuilding, IconCurrencyPound, IconCheck, IconCalendar, IconUsers } from '@tabler/icons-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Manchester Hotel Chain Recovery',
      industry: 'Hospitality',
      amount: 127000,
      timeline: '18 days',
      employees: 85,
      description: 'A family-owned hotel chain was unknowingly paying 28% commission on their energy contracts. We recovered 6 years of hidden charges, saving their business from closure.',
      challenges: [
        'Complex multi-site energy contracts',
        'Urgent financial situation - weeks from closure',
        'Previous failed attempts with other companies'
      ],
      results: [
        '£127,000 recovered in just 18 days',
        'Business saved from closure',
        '85 jobs preserved',
        'Ongoing energy cost reduction of 24%'
      ],
      testimonial: 'We were weeks from closing our 150-year-old family business. UCC not only recovered our money but saved 85 jobs. The process was flawless.',
      author: 'Sarah Mitchell, Operations Director'
    },
    {
      id: 2,
      title: 'Birmingham Manufacturing Success',
      industry: 'Manufacturing',
      amount: 245000,
      timeline: '21 days',
      employees: 150,
      description: 'A mid-size manufacturing company discovered they had been overcharged for 5 years. Our investigation revealed multiple broker commission layers totaling nearly £250k.',
      challenges: [
        'Multiple energy suppliers over 6 years',
        'Complex industrial energy requirements',
        'Incomplete contract documentation'
      ],
      results: [
        '£245,000 total recovery',
        'New competitive energy rates secured',
        'Annual savings of £35,000 ongoing',
        'Complete contract transparency achieved'
      ],
      testimonial: 'Absolutely life-changing. We had no idea we were owed this much. The funds allowed us to expand our operations and hire 20 new staff.',
      author: 'David Thompson, Finance Director'
    },
    {
      id: 3,
      title: 'Care Home Group Relief',
      industry: 'Healthcare',
      amount: 89000,
      timeline: '16 days',
      employees: 120,
      description: 'A care home group facing financial pressure due to rising costs discovered significant hidden commissions across their portfolio of 8 facilities.',
      challenges: [
        'Multi-site portfolio complexity',
        'Tight cash flow situation',
        'Regulatory compliance requirements'
      ],
      results: [
        '£89,000 recovered across 8 facilities',
        'Avoided service cuts and redundancies',
        'Improved resident care standards',
        'Long-term energy cost stability'
      ],
      testimonial: 'The recovery helped us avoid cutting vital services for our residents. UCC handled everything professionally while we focused on care.',
      author: 'Margaret Collins, CEO'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-navy via-slate-900 to-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Recovery
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-blue-400"> Success Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              See how UK businesses like yours have recovered millions in hidden energy commissions
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-3xl font-bold text-emerald mb-2">£461,000</div>
                <div className="text-sm text-gray-300">Total Featured Recoveries</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">18 Days</div>
                <div className="text-sm text-gray-300">Average Recovery Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">355 Jobs</div>
                <div className="text-sm text-gray-300">Jobs Saved</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center gap-2 bg-emerald/10 text-emerald px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <IconBuilding size={16} />
                    {study.industry}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                    {study.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    {study.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <IconCurrencyPound className="text-emerald mx-auto mb-2" size={32} />
                      <div className="text-2xl font-bold text-navy">£{study.amount.toLocaleString()}</div>
                      <div className="text-sm text-slate-500">Recovered</div>
                    </div>
                    <div className="text-center">
                      <IconCalendar className="text-blue-500 mx-auto mb-2" size={32} />
                      <div className="text-2xl font-bold text-navy">{study.timeline}</div>
                      <div className="text-sm text-slate-500">Timeline</div>
                    </div>
                    <div className="text-center">
                      <IconUsers className="text-purple-500 mx-auto mb-2" size={32} />
                      <div className="text-2xl font-bold text-navy">{study.employees}</div>
                      <div className="text-sm text-slate-500">Employees</div>
                    </div>
                  </div>

                  <blockquote className="bg-slate-50 p-6 rounded-xl italic text-slate-700 mb-4">
                    "{study.testimonial}"
                    <footer className="font-medium text-navy mt-2">
                      — {study.author}
                    </footer>
                  </blockquote>
                </div>

                {/* Details */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <h3 className="text-xl font-bold text-navy mb-4">Challenges</h3>
                    <ul className="space-y-2 mb-6">
                      {study.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-navy mb-4">Results Achieved</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <IconCheck className="text-emerald mt-1 flex-shrink-0" size={18} />
                          <span className="text-slate-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Your Success Story Starts Here
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Join these businesses who transformed their finances with UCC. 
              No win, no fee. Results in 21 days or less.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/calculate"
                className="inline-flex items-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all duration-300 font-medium text-lg"
              >
                Start Your Free Assessment
                <IconCurrencyPound size={24} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-medium text-lg border border-slate-200"
              >
                Speak to an Expert
                <IconBuilding size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies