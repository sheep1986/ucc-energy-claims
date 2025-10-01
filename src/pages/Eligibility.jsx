import { Link } from 'react-router-dom'
import { 
  IconCheck,
  IconAlertCircle,
  IconBuilding,
  IconCalendar,
  IconCurrencyPound,
  IconUsers,
  IconChevronRight,
  IconX,
  IconTrendingUp
} from '@tabler/icons-react'
import CountUp from 'react-countup'

const Eligibility = () => {
  const qualificationCriteria = [
    {
      icon: IconUsers,
      title: 'Used an Energy Broker',
      description: 'If a third-party broker arranged your business energy contract, undisclosed commissions are probable.',
      stat: '90% of broker contracts contain hidden fees'
    },
    {
      icon: IconCalendar,
      title: 'Signed Contracts Since 2018',
      description: 'Claims can be submitted for contracts dating back six years. The limitation period provides substantial recovery opportunity.',
      stat: '6-year claim window'
    },
    {
      icon: IconBuilding,
      title: 'Operate a UK Business',
      description: 'All UK-registered businesses qualify, regardless of size or sector. From single-site operations to multi-national corporations.',
      stat: 'All UK businesses eligible'
    },
    {
      icon: IconCurrencyPound,
      title: 'Spend Over £5,000 Annually',
      description: 'While no minimum exists, meaningful recoveries typically begin at this threshold. Larger energy users often recover five to six-figure sums.',
      stat: '£5,000+ optimal threshold'
    }
  ]

  const redFlags = [
    'Broker refused to disclose their fee structure',
    'No transparency on supplier payments to broker',
    'Pressure to sign lengthy contracts',
    'Rates significantly above market average',
    'Broker pushed specific supplier without comparison'
  ]

  const industries = [
    { name: 'Manufacturing & Production', recovery: '£45,000' },
    { name: 'Hotels & Hospitality', recovery: '£35,000' },
    { name: 'Healthcare & Care Homes', recovery: '£28,000' },
    { name: 'Retail & Shopping Centres', recovery: '£32,000' },
    { name: 'Offices & Commercial Property', recovery: '£25,000' },
    { name: 'Restaurants & Cafes', recovery: '£18,000' },
    { name: 'Schools & Education', recovery: '£22,000' },
    { name: 'Warehouses & Logistics', recovery: '£30,000' }
  ]

  const claimRanges = [
    { spend: '£5,000 - £15,000', recovery: '£2,000 - £8,000' },
    { spend: '£15,000 - £50,000', recovery: '£8,000 - £25,000' },
    { spend: '£50,000 - £150,000', recovery: '£25,000 - £75,000' },
    { spend: '£150,000+', recovery: '£75,000+' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-emerald-light/20 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Check Your Eligibility for Energy Commission Claims
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              90% of UK businesses with broker-arranged energy contracts qualify for substantial refunds. 
              Check your eligibility in seconds.
            </p>
            <Link
              to="/calculate"
              className="inline-flex items-center gap-2 btn-primary text-lg"
            >
              Check Eligibility Now
              <IconChevronRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Qualification Criteria */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              You Likely Qualify If You:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {qualificationCriteria.map((criteria, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <criteria.icon className="text-emerald" size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">
                      <IconCheck className="inline text-emerald mr-2" size={20} />
                      {criteria.title}
                    </h3>
                    <p className="text-slate-600 mb-3">
                      {criteria.description}
                    </p>
                    <div className="text-sm font-medium text-ice-dark">
                      {criteria.stat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Check CTA */}
      <section className="py-12 bg-gradient-to-r from-emerald to-ice">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Qualify? Check Now!</h3>
              <p className="text-white/90">90% of businesses qualify • Takes 30 seconds</p>
            </div>
            <Link
              to="/calculate"
              className="bg-white text-navy px-8 py-4 rounded-xl hover:bg-navy hover:text-white transition-all duration-300 font-medium shadow-lg whitespace-nowrap"
            >
              Check Eligibility →
            </Link>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <IconAlertCircle className="text-red-500 mx-auto mb-4" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Red Flags Indicating Hidden Commissions
              </h2>
              <p className="text-lg text-slate-600">
                If you experienced any of these, you're likely owed money:
              </p>
            </div>

            <div className="card bg-red-50 border-red-200">
              <ul className="space-y-4">
                {redFlags.map((flag, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <IconX className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 text-lg">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Most Affected */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Industries Most Affected
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industries.map((industry, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-shadow">
                <IconBuilding className="text-navy mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">{industry.name}</h3>
                <div className="text-2xl font-bold text-emerald">
                  £<CountUp end={parseInt(industry.recovery.replace(/[£,]/g, ''))} separator="," duration={2} />
                </div>
                <p className="text-sm text-slate-500 mt-1">Average recovery</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/industries" className="text-ice-dark hover:text-ice font-medium">
              View industry-specific information <IconChevronRight className="inline" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Claim Value Calculator */}
      <section className="section-padding bg-gradient-to-br from-ice-light to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Claim Value Calculator
            </h2>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">
                Average recovery calculations by annual spend:
              </h3>
              
              <div className="space-y-4">
                {claimRanges.map((range, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <IconTrendingUp className="text-navy" size={24} />
                      <span className="font-medium">Annual Spend: {range.spend}</span>
                    </div>
                    <div className="text-lg md:text-xl font-bold text-emerald">
                      Typical Recovery: {range.recovery}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-emerald-light rounded-xl text-center">
                <p className="text-lg font-medium text-emerald mb-4">
                  Calculate your exact claim value in 30 seconds
                </p>
                <Link
                  to="/calculate"
                  className="inline-flex items-center gap-2 bg-emerald text-white px-6 py-3 rounded-xl hover:bg-emerald/90 transition-colors font-medium"
                >
                  Calculate My Claim
                  <IconChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Check CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Free Eligibility Check
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Takes 30 seconds. No obligation. Instant results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2">
              <IconCheck className="text-emerald" size={24} />
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck className="text-emerald" size={24} />
              <span>No win, no fee</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck className="text-emerald" size={24} />
              <span>21-day guarantee</span>
            </div>
          </div>
          
          <Link
            to="/calculate"
            className="inline-flex items-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all duration-300 font-medium text-lg mt-8"
          >
            Check Eligibility Now
            <IconChevronRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Eligibility