import { Link } from 'react-router-dom'
import { 
  IconBuilding,
  IconCircleCheck,
  IconArrowRight,
  IconCalculator,
  IconBuildingFactory2,
  IconPackage,
  IconTool
} from '@tabler/icons-react'

const ManufacturingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <IconBuildingFactory2 className="w-4 h-4" />
              Manufacturing Sector Specialist
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Energy Broker Reclaims for
              <span className="block text-blue-600 mt-2">Manufacturing & Industry</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>Manufacturing business energy claims</strong> averaging £85,000. Energy-intensive manufacturers 
              face the highest broker commissions in the UK. Reclaim yours with our specialist team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/calculator" className="btn btn-primary inline-flex items-center justify-center">
                <IconCalculator className="w-5 h-5 mr-2" />
                Calculate Your Claim
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
              <div className="text-4xl font-bold text-blue-600">£85,000</div>
              <div className="text-gray-600 mt-2">Average Manufacturing Claim</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">40%</div>
              <div className="text-gray-600 mt-2">Commission Rate Hidden</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">1,800+</div>
              <div className="text-gray-600 mt-2">Manufacturers Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">£15M+</div>
              <div className="text-gray-600 mt-2">Recovered for Industry</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Manufacturing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Manufacturers Have the Biggest Claims
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IconCircleCheck className="w-6 h-6 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Massive Energy Consumption</h3>
                    <p className="text-gray-600">Manufacturing uses 10-20x more energy than offices, resulting in enormous hidden commissions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCircleCheck className="w-6 h-6 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Complex Energy Needs</h3>
                    <p className="text-gray-600">Multiple supplies, high voltage connections, and gas usage create opportunities for hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCircleCheck className="w-6 h-6 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Long-Term Contracts</h3>
                    <p className="text-gray-600">5-year manufacturing energy deals often hide the highest commission percentages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCircleCheck className="w-6 h-6 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Industry-Specific Brokers</h3>
                    <p className="text-gray-600">Specialist manufacturing brokers often charge premium hidden commissions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Manufacturing Claims</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <IconBuildingFactory2 className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">Steel Manufacturer</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">£425,000 recovered</div>
                  <div className="text-sm text-gray-600">45% commission on high-voltage supply</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <IconPackage className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">Food Processing Plant</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">£178,000 recovered</div>
                  <div className="text-sm text-gray-600">38% commission hidden for 4 years</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <IconTool className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">Engineering Workshop</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">£67,000 recovered</div>
                  <div className="text-sm text-gray-600">35% commission on gas & electric</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Industry Alert:</strong> OFGEM found manufacturing sector has highest rate of hidden commissions at 40% average
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Manufacturing Sectors We Specialise In
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Food & Beverage Processing',
              'Automotive Manufacturing',
              'Steel & Metal Works',
              'Chemical Production',
              'Textile Manufacturing',
              'Electronics Assembly',
              'Plastics & Packaging',
              'Paper & Printing',
              'Construction Materials'
            ].map((sector) => (
              <div key={sector} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <IconCircleCheck className="w-5 h-5 text-green-600" />
                <span className="font-medium">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Manufacturing Energy Broker Reclaims Start Here
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Your manufacturing business could be owed £10,000s in hidden commissions. 
            Check your eligibility in 60 seconds. No win, no fee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator" className="btn bg-white text-blue-600 hover:bg-gray-100 inline-flex items-center">
              Start Your Claim Now
              <IconArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/contact" className="btn bg-blue-500 text-white hover:bg-blue-400 inline-flex items-center">
              Speak to a Specialist
              <IconArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ManufacturingPage