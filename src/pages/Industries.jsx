import { Link } from 'react-router-dom'
import { 
  IconBuilding,
  IconBed,
  IconHeartbeat,
  IconShoppingCart,
  IconSchool,
  IconBuildingSkyscraper,
  IconBuildingWarehouse,
  IconToolsKitchen2,
  IconChevronRight,
  IconTrendingUp,
  IconCurrencyPound
} from '@tabler/icons-react'
import CountUp from 'react-countup'

const Industries = () => {
  const industries = [
    {
      icon: IconBuilding,
      slug: 'manufacturing',
      name: 'Manufacturing & Industrial',
      description: 'High energy consumption makes manufacturers prime targets for broker exploitation.',
      averageClaim: 45000,
      recovered: '15M+',
      keyIssues: [
        'Complex multi-site contracts',
        'Exploited lack of market knowledge',
        'Excessive margins on high-volume'
      ]
    },
    {
      icon: IconBed,
      slug: 'hospitality',
      name: 'Hospitality & Hotels',
      description: '24/7 operations mean substantial energy costs and significant hidden commissions.',
      averageClaim: 35000,
      recovered: '8M+',
      keyIssues: [
        'Round-the-clock energy usage',
        'Multiple facility contracts',
        'Seasonal rate manipulations'
      ]
    },
    {
      icon: IconHeartbeat,
      slug: 'healthcare',
      name: 'Healthcare & Care Homes',
      description: 'Critical services shouldn\'t overpay for energy. Redirect funds to patient care.',
      averageClaim: 28000,
      recovered: '12M+',
      keyIssues: [
        'Essential service exploitation',
        'Budget constraints ignored',
        'Long-term contract traps'
      ]
    },
    {
      icon: IconShoppingCart,
      slug: 'retail',
      name: 'Retail & Commercial',
      description: 'From independent shops to shopping centres, retail energy costs hide substantial commissions.',
      averageClaim: 32000,
      recovered: '10M+',
      keyIssues: [
        'Multi-site portfolio charges',
        'Peak time rate manipulation',
        'Hidden standing charges'
      ]
    },
    {
      icon: IconSchool,
      slug: 'education',
      name: 'Education Sector',
      description: 'Schools and universities unknowingly fund broker commissions from education budgets.',
      averageClaim: 22000,
      recovered: '5M+',
      keyIssues: [
        'Public sector targeting',
        'Budget exploitation',
        'Framework agreement breaches'
      ]
    },
    {
      icon: IconBuildingSkyscraper,
      slug: 'offices',
      name: 'Offices & Professional',
      description: 'Commercial properties and office buildings face systematic overcharging.',
      averageClaim: 25000,
      recovered: '7M+',
      keyIssues: [
        'Business hours manipulation',
        'Tenant recharge issues',
        'Management company conflicts'
      ]
    },
    {
      icon: IconBuildingWarehouse,
      slug: 'warehouses',
      name: 'Warehouses & Logistics',
      description: 'Distribution centres and logistics hubs with high energy demands.',
      averageClaim: 30000,
      recovered: '6M+',
      keyIssues: [
        'Industrial rate exploitation',
        'Night shift premiums',
        'Climate control costs'
      ]
    },
    {
      icon: IconToolsKitchen2,
      slug: 'restaurants',
      name: 'Restaurants & Cafes',
      description: 'Food service businesses with intensive energy requirements.',
      averageClaim: 18000,
      recovered: '4M+',
      keyIssues: [
        'Kitchen equipment costs',
        'Extended hours charges',
        'Small business targeting'
      ]
    }
  ]

  const totalRecovered = industries.reduce((sum, ind) => {
    return sum + parseInt(ind.recovered.replace(/[M+]/g, ''))
  }, 0)

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-ice-light/30 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Industry-Specific Energy Commission Recovery
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              Every sector faces unique energy challenges. Our expertise across all industries 
              ensures maximum recovery for your business type.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-emerald">
                  £<CountUp end={totalRecovered} suffix="M+" duration={2} />
                </div>
                <div className="text-slate-500">Total Recovered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ice-dark">
                  <CountUp end={8} duration={2} />
                </div>
                <div className="text-slate-500">Sectors Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy">
                  <CountUp end={95} suffix="%" duration={2} />
                </div>
                <div className="text-slate-500">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Select Your Industry
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                className="card hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-ice/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-ice group-hover:text-white transition-all">
                    <industry.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-ice-dark transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">Average Claim</span>
                    <span className="font-semibold text-emerald">
                      £{industry.averageClaim.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">Total Recovered</span>
                    <span className="font-semibold">£{industry.recovered}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-ice-dark font-medium group-hover:text-ice flex items-center gap-1">
                    Learn more 
                    <IconChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 bg-gradient-to-r from-navy to-ice-dark">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Don't Wait - Claims Expire After 6 Years
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Every day you wait is money lost. Calculate your claim value now and see what you're owed.
            </p>
            <Link
              to="/calculate"
              className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-xl hover:bg-emerald hover:text-white transition-all duration-300 font-medium text-lg shadow-xl"
            >
              Calculate My Industry Claim
              <IconChevronRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Common Issues Across All Industries
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <IconCurrencyPound className="text-red-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Hidden Commission Rates</h3>
                <p className="text-slate-600 mb-4">
                  Brokers typically add 10-40% commission to your unit rates without disclosure, 
                  costing businesses thousands annually.
                </p>
                <div className="text-sm font-medium text-ice-dark">
                  Average hidden margin: 24%
                </div>
              </div>

              <div className="card">
                <IconBuilding className="text-orange-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Sector-Specific Targeting</h3>
                <p className="text-slate-600 mb-4">
                  Brokers exploit industry-specific knowledge gaps, targeting businesses 
                  unfamiliar with energy markets.
                </p>
                <div className="text-sm font-medium text-ice-dark">
                  90% unaware of commissions
                </div>
              </div>

              <div className="card">
                <IconTrendingUp className="text-purple-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Long Contract Traps</h3>
                <p className="text-slate-600 mb-4">
                  Pushed into 3-5 year contracts with hidden escalation clauses, 
                  maximizing broker commissions over time.
                </p>
                <div className="text-sm font-medium text-ice-dark">
                  Average contract: 3.5 years
                </div>
              </div>

              <div className="card">
                <IconHeartbeat className="text-emerald mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Essential Service Exploitation</h3>
                <p className="text-slate-600 mb-4">
                  Critical services like healthcare and education face aggressive 
                  broker tactics, knowing they can't risk supply issues.
                </p>
                <div className="text-sm font-medium text-ice-dark">
                  Public sector overcharge: 32%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Calculator CTA */}
      <section className="section-padding bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Calculate Your Industry-Specific Claim
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Our calculator uses real data from your industry to provide accurate claim estimates. 
            See what similar businesses have recovered.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <IconCheck className="text-emerald" size={24} />
              <span>Industry-specific rates</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck className="text-emerald" size={24} />
              <span>Real recovery data</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCheck className="text-emerald" size={24} />
              <span>Instant results</span>
            </div>
          </div>
          
          <Link
            to="/calculate"
            className="inline-flex items-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all duration-300 font-medium text-lg"
          >
            Calculate Industry Claim
            <IconChevronRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Industries