import { Link } from 'react-router-dom'
import { 
  IconBuilding,
  IconCircleCheck,
  IconArrowRight,
  IconCalculator,
  IconChefHat,
  IconHome,
  IconCoffee
} from '@tabler/icons-react'

const HospitalityPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <IconChefHat className="w-4 h-4" />
              Hospitality Sector Specialist
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Energy Broker Reclaims for
              <span className="block text-green-600 mt-2">Hotels, Restaurants & Pubs</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>Hospitality business energy claims</strong> averaging £65,000. High energy users like hotels and restaurants 
              often face the highest hidden broker commissions. Recover yours today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/calculator" className="btn btn-primary inline-flex items-center justify-center">
                <IconCalculator className="w-5 h-5 mr-2" />
                Check Your Claim Value
                <IconArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600">£65,000</div>
              <div className="text-gray-600 mt-2">Average Hospitality Claim</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">35%</div>
              <div className="text-gray-600 mt-2">Typical Commission Hidden</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">2,500+</div>
              <div className="text-gray-600 mt-2">Hotels & Restaurants Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">21 Days</div>
              <div className="text-gray-600 mt-2">Average Claim Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hospitality */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Hospitality Businesses Are Most Affected
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IconCircleCheck className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Energy Usage</h3>
                    <p className="text-gray-600">Hotels and restaurants use 5-10x more energy than typical businesses, meaning higher hidden commissions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCircleCheck className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Multiple Sites</h3>
                    <p className="text-gray-600">Restaurant chains and hotel groups often have commissions hidden across multiple contracts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCircleCheck className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Complex Tariffs</h3>
                    <p className="text-gray-600">Brokers exploit complicated hospitality energy needs to hide larger commissions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCircleCheck className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Trust-Based Relationships</h3>
                    <p className="text-gray-600">Long-standing broker relationships often hide the biggest commission percentages</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Typical Hospitality Claims</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <IconHome className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">Boutique Hotel Chain</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">£142,000 recovered</div>
                  <div className="text-sm text-gray-600">42% commission hidden over 5 years</div>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <IconChefHat className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">Restaurant Group (12 sites)</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">£287,000 recovered</div>
                  <div className="text-sm text-gray-600">38% commission across all locations</div>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <IconCoffee className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">Independent Pub</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">£34,000 recovered</div>
                  <div className="text-sm text-gray-600">45% commission on gas & electric</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Hospitality Energy Broker Reclaim Today
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Join thousands of hotels, restaurants and pubs recovering their hidden commissions. 
            No win, no fee. Takes just 60 seconds to check.
          </p>
          <Link to="/calculator" className="btn bg-white text-green-600 hover:bg-gray-100 inline-flex items-center">
            Start Free Claim Assessment
            <IconArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default HospitalityPage