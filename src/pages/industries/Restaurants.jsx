import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  IconChevronRight, 
  IconTrendingUp, 
  IconClock, 
  IconAlertTriangle,
  IconCircleCheck,
  IconCalculator,
  IconToolsKitchen2,
  IconCoffee,
  IconFlame,
  IconCurrencyDollar
} from '@tabler/icons-react'

const Restaurants = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <IconToolsKitchen2 className="w-4 h-4 text-ice mr-2" />
              <span className="text-white/90 text-sm">Industry-Specific Recovery</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Restaurant & Cafe
              <span className="block text-ice mt-2">Commission Claims</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              The hospitality sector has been significantly impacted by hidden energy commissions. 
              With intensive kitchen equipment and extended operating hours, your business could be owed thousands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsCalculatorOpen(true)}
                className="bg-emerald text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-dark transition-colors inline-flex items-center justify-center"
              >
                Calculate Your Claim
                <IconCalculator className="ml-2 w-5 h-5" />
              </button>
              <Link 
                to="/how-it-works"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center justify-center"
              >
                Learn How It Works
                <IconChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <IconCurrencyDollar className="w-8 h-8 text-emerald mb-3" />
              <div className="text-3xl font-bold text-navy mb-1">£18,000</div>
              <div className="text-gray-600">Average Restaurant Claim</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <IconClock className="w-8 h-8 text-emerald mb-3" />
              <div className="text-3xl font-bold text-navy mb-1">6-8 years</div>
              <div className="text-gray-600">Typical Claim Period</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <IconTrendingUp className="w-8 h-8 text-emerald mb-3" />
              <div className="text-3xl font-bold text-navy mb-1">87%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <IconFlame className="w-8 h-8 text-emerald mb-3" />
              <div className="text-3xl font-bold text-navy mb-1">60%</div>
              <div className="text-gray-600">Energy for Cooking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Restaurants Are Affected
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Food service businesses face unique energy challenges that make them particularly vulnerable to broker commission overcharges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <IconFlame className="w-12 h-12 text-emerald mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">High-Intensity Cooking</h3>
              <p className="text-gray-600 mb-4">
                Commercial kitchens use 2.5x more energy per square foot than other commercial buildings
              </p>
              <div className="text-emerald font-semibold">
                Intensive usage = Higher commission costs
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <IconClock className="w-12 h-12 text-emerald mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Extended Hours</h3>
              <p className="text-gray-600 mb-4">
                Many restaurants operate 12-16 hours daily, with prep time extending energy usage further
              </p>
              <div className="text-emerald font-semibold">
                Long hours = Compounded charges
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <IconCoffee className="w-12 h-12 text-emerald mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Multiple Equipment</h3>
              <p className="text-gray-600 mb-4">
                Ovens, grills, fryers, refrigeration, dishwashers, and HVAC systems all running simultaneously
              </p>
              <div className="text-emerald font-semibold">
                Heavy equipment = Premium energy rates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Red Flags in Your Energy Contracts
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <IconAlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Broker Never Disclosed Commission</h3>
                    <p className="text-gray-600">If your broker didn't explicitly tell you their commission amount, you likely have a claim</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <IconAlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Multiple Venue Contracts</h3>
                    <p className="text-gray-600">Restaurant groups and chains often have commission applied across all locations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <IconAlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Fixed-Rate Contracts</h3>
                    <p className="text-gray-600">Long-term fixed deals often hide substantial commissions in the unit rates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <IconAlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Renewal Without Review</h3>
                    <p className="text-gray-600">Automatic renewals often carry over inflated commission rates</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-navy mb-6">Typical Restaurant Claims</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald pl-4">
                  <div className="text-lg font-semibold text-navy">City Center Restaurant</div>
                  <div className="text-gray-600">120 covers, full kitchen</div>
                  <div className="text-2xl font-bold text-emerald mt-2">£22,000 recovered</div>
                </div>
                <div className="border-l-4 border-emerald pl-4">
                  <div className="text-lg font-semibold text-navy">Coffee Shop Chain</div>
                  <div className="text-gray-600">3 locations, extended hours</div>
                  <div className="text-2xl font-bold text-emerald mt-2">£31,000 recovered</div>
                </div>
                <div className="border-l-4 border-emerald pl-4">
                  <div className="text-lg font-semibold text-navy">Fast Food Franchise</div>
                  <div className="text-gray-600">High-volume kitchen equipment</div>
                  <div className="text-2xl font-bold text-emerald mt-2">£19,000 recovered</div>
                </div>
                <div className="border-l-4 border-emerald pl-4">
                  <div className="text-lg font-semibold text-navy">Fine Dining Establishment</div>
                  <div className="text-gray-600">Premium kitchen, wine storage</div>
                  <div className="text-2xl font-bold text-emerald mt-2">£28,000 recovered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Equipment Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Your Equipment's Hidden Costs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece of equipment in your kitchen has been paying hidden commissions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-navy to-navy-light p-6 rounded-xl text-white">
              <h3 className="font-bold mb-2">Commercial Ovens</h3>
              <div className="text-3xl font-bold mb-2">£2,400/year</div>
              <div className="text-white/70 text-sm">Potential commission paid</div>
            </div>
            <div className="bg-gradient-to-br from-navy to-navy-light p-6 rounded-xl text-white">
              <h3 className="font-bold mb-2">Walk-in Freezers</h3>
              <div className="text-3xl font-bold mb-2">£1,800/year</div>
              <div className="text-white/70 text-sm">Potential commission paid</div>
            </div>
            <div className="bg-gradient-to-br from-navy to-navy-light p-6 rounded-xl text-white">
              <h3 className="font-bold mb-2">Dishwashers</h3>
              <div className="text-3xl font-bold mb-2">£900/year</div>
              <div className="text-white/70 text-sm">Potential commission paid</div>
            </div>
            <div className="bg-gradient-to-br from-navy to-navy-light p-6 rounded-xl text-white">
              <h3 className="font-bold mb-2">HVAC Systems</h3>
              <div className="text-3xl font-bold mb-2">£1,500/year</div>
              <div className="text-white/70 text-sm">Potential commission paid</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Restaurant Claim Today
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join hundreds of restaurants and cafes recovering their hidden energy commissions. 
            Our team specializes in hospitality sector claims and understands your unique challenges.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <IconCircleCheck className="w-12 h-12 text-emerald mx-auto mb-3" />
                <div className="text-white font-semibold">No Win, No Fee</div>
                <div className="text-white/70 text-sm">You only pay if successful</div>
              </div>
              <div className="text-center">
                <IconCircleCheck className="w-12 h-12 text-emerald mx-auto mb-3" />
                <div className="text-white font-semibold">Hospitality Experts</div>
                <div className="text-white/70 text-sm">We understand your sector</div>
              </div>
              <div className="text-center">
                <IconCircleCheck className="w-12 h-12 text-emerald mx-auto mb-3" />
                <div className="text-white font-semibold">Quick Process</div>
                <div className="text-white/70 text-sm">Results in 12-16 weeks</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="bg-emerald text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-dark transition-colors inline-flex items-center justify-center"
            >
              Calculate Your Claim Now
              <IconCalculator className="ml-2 w-5 h-5" />
            </button>
            <Link 
              to="/eligibility"
              className="bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Check Eligibility
              <IconChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Modal */}
      {isCalculatorOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setIsCalculatorOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-navy mb-4">Quick Claim Calculator</h3>
            <p className="text-gray-600 mb-6">
              Get an instant estimate of your potential claim value
            </p>
            <Link 
              to="/calculate"
              className="bg-emerald text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-dark transition-colors w-full inline-flex items-center justify-center"
            >
              Open Full Calculator
              <IconCalculator className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Restaurants