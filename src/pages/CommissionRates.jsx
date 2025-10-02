import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  IconCalculator,
  IconAlertTriangle,
  IconCircleCheck,
  IconArrowRight,
  IconChartBar,
  IconCurrencyPound,
  IconInfoCircle,
  IconScale
} from '@tabler/icons-react'

const CommissionRates = () => {
  const [showCalculator, setShowCalculator] = useState(false)
  const [annualSpend, setAnnualSpend] = useState('')
  const [commissionRate, setCommissionRate] = useState('2.5')
  const [years, setYears] = useState('3')

  const calculateClaim = () => {
    const spend = parseFloat(annualSpend) || 0
    const rate = parseFloat(commissionRate) / 100
    const period = parseInt(years)
    return (spend * rate * period).toFixed(0)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <IconAlertTriangle className="w-4 h-4" />
              Hidden Commissions Exposed: 0.05p to 10p per kWh
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Energy Broker Commission Rates:
              <span className="block text-red-600 mt-2">The Truth About Hidden Fees</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>Energy broker commissions range from 0.05p to 10p per kWh</strong> added to your rates. 
              Most businesses never know they're paying these hidden fees. Discover exactly how much 
              you've been overcharged and claim it back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowCalculator(!showCalculator)}
                className="btn btn-primary inline-flex items-center justify-center"
              >
                <IconCalculator className="w-5 h-5 mr-2" />
                Calculate Your Hidden Commissions
                <IconArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Calculator */}
      {showCalculator && (
        <section className="py-12 bg-white border-b">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Commission Calculator</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Energy Spend (£)
                  </label>
                  <input
                    type="number"
                    value={annualSpend}
                    onChange={(e) => setAnnualSpend(e.target.value)}
                    placeholder="e.g. 50000"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Commission Rate: {commissionRate}%
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="0.5"
                    value={commissionRate}
                    onChange={(e) => setCommissionRate(e.target.value)}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Low (1%)</span>
                    <span>Average (25%)</span>
                    <span>High (50%)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contract Period (Years)
                  </label>
                  <select
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                  >
                    <option value="1">1 Year</option>
                    <option value="2">2 Years</option>
                    <option value="3">3 Years</option>
                    <option value="4">4 Years</option>
                    <option value="5">5 Years</option>
                    <option value="6">6 Years (Maximum)</option>
                  </select>
                </div>

                {annualSpend && (
                  <div className="bg-white rounded-xl p-6 text-center">
                    <p className="text-gray-600 mb-2">Estimated Hidden Commission Paid:</p>
                    <p className="text-4xl font-bold text-red-600">£{calculateClaim().toLocaleString()}</p>
                    <p className="text-sm text-gray-500 mt-2">This could be your claim value</p>
                    <Link to="/calculator" className="btn btn-primary mt-4 inline-flex items-center">
                      Start Your Claim Now
                      <IconArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Commission Rates Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Typical Energy Broker Commission Rates by Industry
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Industry Sector</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Typical Commission (p/kWh)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">% of Energy Cost</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Average Annual Hidden Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">Manufacturing</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">2.5p - 10p</td>
                  <td className="px-6 py-4 text-gray-700">35-50%</td>
                  <td className="px-6 py-4 text-gray-900 font-bold">£45,000 - £185,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">Hospitality (Hotels)</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">2p - 8p</td>
                  <td className="px-6 py-4 text-gray-700">30-45%</td>
                  <td className="px-6 py-4 text-gray-900 font-bold">£25,000 - £95,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">Healthcare/Care Homes</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">1.5p - 6p</td>
                  <td className="px-6 py-4 text-gray-700">25-40%</td>
                  <td className="px-6 py-4 text-gray-900 font-bold">£18,000 - £67,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">Retail Chains</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">1p - 5p</td>
                  <td className="px-6 py-4 text-gray-700">20-35%</td>
                  <td className="px-6 py-4 text-gray-900 font-bold">£12,000 - £55,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">Offices/Commercial</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">0.5p - 3p</td>
                  <td className="px-6 py-4 text-gray-700">15-25%</td>
                  <td className="px-6 py-4 text-gray-900 font-bold">£5,000 - £28,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">Small Businesses</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">0.05p - 2p</td>
                  <td className="px-6 py-4 text-gray-700">10-20%</td>
                  <td className="px-6 py-4 text-gray-900 font-bold">£2,000 - £15,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <div className="flex items-start gap-3">
              <IconInfoCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">OFGEM October 2024 Update</h3>
                <p className="text-gray-700">
                  Since 1st October 2024, OFGEM requires all energy brokers to disclose commissions in writing. 
                  However, this doesn't help with contracts from 2018-2024 where billions in hidden commissions were charged. 
                  <strong className="text-gray-900"> You can still claim back 6 years of undisclosed commissions.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Real Examples of Hidden Energy Broker Commissions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <IconScale className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Windermere School Case</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Annual Energy Spend:</span>
                  <span className="font-semibold">£80,000</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Hidden Commission Rate:</span>
                  <span className="font-semibold text-red-600">42%</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Years Affected:</span>
                  <span className="font-semibold">6 years</span>
                </div>
                <div className="flex justify-between py-2 bg-green-50 rounded px-2">
                  <span className="text-gray-900 font-semibold">Total Claim:</span>
                  <span className="text-2xl font-bold text-green-600">£200,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <IconChartBar className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Church Hidden Commission</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Annual Energy Spend:</span>
                  <span className="font-semibold">£24,000</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Hidden Commission Rate:</span>
                  <span className="font-semibold text-red-600">50%+</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Years Affected:</span>
                  <span className="font-semibold">4 years</span>
                </div>
                <div className="flex justify-between py-2 bg-green-50 rounded px-2">
                  <span className="text-gray-900 font-semibold">Total Claim:</span>
                  <span className="text-2xl font-bold text-green-600">£48,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 mb-6">
              These are real cases where businesses discovered massive hidden commissions. 
              <strong> Your business could be owed similar amounts.</strong>
            </p>
            <Link to="/calculator" className="btn btn-primary inline-flex items-center">
              Check Your Commission Claim
              <IconArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How Commissions Work */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Energy Broker Commissions Actually Work
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Supplier Quotes Base Rate</h3>
                <p className="text-gray-700">
                  Energy supplier provides a base rate to the broker, for example <strong>12p per kWh</strong> for electricity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Broker Adds Hidden Commission</h3>
                <p className="text-gray-700">
                  Broker adds their commission (typically <strong>0.5p to 5p per kWh</strong>) on top. 
                  So 12p becomes 14.5p per kWh - a 20% hidden markup.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You Pay the Inflated Rate</h3>
                <p className="text-gray-700">
                  You receive a bill showing <strong>14.5p per kWh</strong> with no breakdown. 
                  The 2.5p commission is hidden - you think that's the market rate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Supplier Pays Broker</h3>
                <p className="text-gray-700">
                  Energy supplier collects your payment and sends the commission to the broker. 
                  <strong>You've unknowingly paid the broker thousands in hidden fees.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              This Practice Has Been Ruled Illegal
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              UK courts have determined that undisclosed broker commissions are "secret commissions" - 
              essentially bribes that breach fiduciary duty. You have a legal right to reclaim every penny.
            </p>
            <Link to="/calculator" className="btn btn-primary inline-flex items-center">
              Start Your Commission Claim
              <IconArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stop Paying Hidden Energy Broker Commissions
          </h2>
          <p className="text-xl mb-8 text-red-50">
            Join thousands of UK businesses claiming back their hidden commissions. 
            Average claim £45,000. No win, no fee. Takes just 60 seconds to check.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator" className="btn bg-white text-red-600 hover:bg-gray-100 inline-flex items-center">
              Calculate Your Claim Now
              <IconArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/contact" className="btn bg-red-700 text-white hover:bg-red-800 inline-flex items-center">
              Speak to an Expert
              <IconArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CommissionRates