import { Link } from 'react-router-dom'
import { 
  IconAlertTriangle,
  IconScale,
  IconFileText,
  IconCircleCheck,
  IconArrowRight,
  IconCalendar,
  IconShieldCheck,
  IconUsers,
  IconTrendingUp
} from '@tabler/icons-react'

const OfgemInvestigation = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <IconShieldCheck className="w-4 h-4" />
              Official OFGEM Investigation Findings
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              OFGEM Exposes Energy Broker
              <span className="block text-blue-600 mt-2">Commission Scandal</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>28th March 2022:</strong> OFGEM confirms over <strong>2 million UK businesses</strong> have been 
              mis-sold energy contracts with undisclosed broker commissions. The regulator's investigation revealed 
              systematic overcharging affecting 90% of business energy customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/calculator" className="btn btn-primary inline-flex items-center justify-center">
                Check If You're Affected
                <IconArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">2 Million+</div>
              <div className="text-gray-700">Businesses Affected</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-gray-700">Never Told About Commissions</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">£3.7 Billion</div>
              <div className="text-gray-700">Hidden Commissions Annually</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-600 mb-2">10-50%</div>
              <div className="text-gray-700">Typical Commission Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* OFGEM Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            OFGEM Investigation Timeline
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <IconCalendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2019: Initial Concerns Raised</h3>
                <p className="text-gray-700">
                  OFGEM receives multiple complaints from businesses discovering hidden broker commissions in their energy contracts. 
                  Initial investigation launched into market practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <IconFileText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2020-2021: Market Review</h3>
                <p className="text-gray-700">
                  Comprehensive review of business energy market reveals widespread practice of undisclosed commissions. 
                  Evidence shows brokers receiving up to 50% commission without customer knowledge.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <IconAlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">28 March 2022: Damning Report Published</h3>
                <div className="bg-red-50 rounded-lg p-4 mt-2">
                  <p className="text-gray-700 mb-3">
                    <strong>OFGEM confirms:</strong> Over 2 million UK businesses have been mis-sold energy contracts. 
                    90% of businesses using brokers were never informed about commission payments.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <IconCircleCheck className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>Commissions range from 0.05p to 10p per kWh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCircleCheck className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>Annual hidden costs of £2,000 to £150,000 per business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCircleCheck className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>Total market impact exceeds £3.7 billion annually</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <IconScale className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">December 2023: Court Ruling</h3>
                <p className="text-gray-700">
                  County Court rules in favor of businesses, confirming undisclosed commissions are "secret commissions" 
                  and breach fiduciary duty. Sets legal precedent for claims.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <IconShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">1 October 2024: New Transparency Rules</h3>
                <div className="bg-purple-50 rounded-lg p-4 mt-2">
                  <p className="text-gray-700 mb-3">
                    <strong>OFGEM implements mandatory disclosure:</strong>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <IconCircleCheck className="w-5 h-5 text-purple-600 mt-0.5" />
                      <span>All brokers must disclose commission in writing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCircleCheck className="w-5 h-5 text-purple-600 mt-0.5" />
                      <span>Exact p/kWh or total £ amount must be shown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCircleCheck className="w-5 h-5 text-purple-600 mt-0.5" />
                      <span>Disputes can be escalated to Energy Ombudsman</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-3 font-semibold">
                    Note: This doesn't affect your right to claim for historic undisclosed commissions from 2018-2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            OFGEM's Key Findings on Energy Broker Commissions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
              <IconAlertTriangle className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Systematic Mis-Selling</h3>
              <p className="text-gray-700 mb-4">
                OFGEM found evidence of systematic mis-selling across the entire business energy market. 
                Brokers routinely told customers their service was "free" while hiding massive commissions.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong>Quote from OFGEM:</strong> "The lack of transparency in broker commission arrangements 
                  has led to significant consumer detriment."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <IconUsers className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">SMEs Most Affected</h3>
              <p className="text-gray-700 mb-4">
                Small and medium businesses were disproportionately affected, often paying the highest 
                commission rates due to lack of negotiating power.
              </p>
              <div className="bg-white rounded-lg p-4">
                <ul className="text-sm space-y-1">
                  <li>• Micro businesses: 40-50% commission common</li>
                  <li>• SMEs: 25-40% typical rates</li>
                  <li>• Large corporates: 10-20% rates</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
              <IconTrendingUp className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rising Commission Rates</h3>
              <p className="text-gray-700 mb-4">
                Investigation revealed commission rates have increased dramatically, from average 1-2p/kWh 
                in 2015 to 3-5p/kWh by 2022, with some cases exceeding 10p/kWh.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong>Impact:</strong> Average business overpaying £15,000-£45,000 annually
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6">
              <IconScale className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Rights Confirmed</h3>
              <p className="text-gray-700 mb-4">
                OFGEM's findings support legal action for commission recovery. Courts have ruled 
                undisclosed commissions constitute "secret profits" that must be repaid.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong>Your right:</strong> Claim back all undisclosed commissions from the last 6 years
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What OFGEM's Investigation Means for Your Business
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <IconCircleCheck className="w-6 h-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">You Have a Valid Claim</h3>
                  <p className="text-gray-700">
                    If you used an energy broker between 2018-2024 and weren't told about commissions, 
                    OFGEM's findings confirm you were mis-sold to and can claim compensation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconCircleCheck className="w-6 h-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Claims Are Time-Limited</h3>
                  <p className="text-gray-700">
                    You can claim for contracts from the last 6 years only. Older contracts become 
                    time-barred, so it's crucial to act now before you lose the right to claim.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconCircleCheck className="w-6 h-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Average Claims Worth £45,000</h3>
                  <p className="text-gray-700">
                    Based on OFGEM's data and commission rates, the average UK business can claim 
                    back £45,000, with larger energy users claiming £100,000+.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconCircleCheck className="w-6 h-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">No Risk to Your Energy Supply</h3>
                  <p className="text-gray-700">
                    Making a claim won't affect your energy supply. Your contract continues as normal 
                    while we recover your hidden commissions through legal channels.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-xl">
              <p className="text-lg font-semibold text-gray-900 mb-3">
                OFGEM has given you the evidence. Now claim what you're owed.
              </p>
              <Link to="/calculator" className="btn btn-primary inline-flex items-center">
                Start Your OFGEM-Backed Claim
                <IconArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-6 text-white">
            <IconShieldCheck className="w-4 h-4" />
            OFGEM Investigation Confirms Your Right to Claim
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Join 20,000+ Businesses Claiming Back Hidden Commissions
          </h2>
          <p className="text-xl mb-8 text-white/90">
            OFGEM's investigation proves you've been overcharged. Don't let brokers keep your money. 
            Check your claim value in 60 seconds. No win, no fee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator" className="btn bg-white text-blue-600 hover:bg-gray-100 inline-flex items-center">
              Check Your Claim Now
              <IconArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="https://www.ofgem.gov.uk/publications/microbusiness-strategic-review" 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn bg-blue-700 text-white hover:bg-blue-800 inline-flex items-center">
              Read OFGEM Report
              <IconFileText className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default OfgemInvestigation