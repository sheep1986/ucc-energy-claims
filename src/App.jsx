import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import HowItWorks from './pages/HowItWorks'
import Eligibility from './pages/Eligibility'
import Industries from './pages/Industries'
import FAQ from './pages/FAQ'
import Calculator from './pages/Calculator'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import CookiePolicy from './pages/CookiePolicy'
import Complaints from './pages/Complaints'
import Success from './pages/Success'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Insights from './pages/Insights'
// Insights blog posts
import ManufacturingCrisis from './pages/insights/ManufacturingCrisis'
import CourtVictory from './pages/insights/CourtVictory'
import RedFlagsGuide from './pages/insights/RedFlagsGuide'
import OfgemInvestigation from './pages/insights/OfgemInvestigation'
import CalculationGuide from './pages/insights/CalculationGuide'
import SMEImpact from './pages/insights/SMEImpact'
import EmergencyGuide from './pages/insights/EmergencyGuide'
import HealthcareRecovery from './pages/insights/HealthcareRecovery'
// Industry pages
import Hospitality from './pages/industries/Hospitality'
import Manufacturing from './pages/industries/Manufacturing'
import Healthcare from './pages/industries/Healthcare'
import Retail from './pages/industries/Retail'
import Education from './pages/industries/Education'
import Offices from './pages/industries/Offices'
import Warehouses from './pages/industries/Warehouses'
import Restaurants from './pages/industries/Restaurants'
// SEO Sector pages for energy broker reclaims
import HospitalitySector from './pages/sectors/HospitalityPage'
import ManufacturingSector from './pages/sectors/ManufacturingPage'
// SEO Pages for energy broker commission
import CommissionRates from './pages/CommissionRates'
import OfgemInvestigationPage from './pages/OfgemInvestigation'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            {/* Insights Blog Posts */}
            <Route path="/insights/manufacturing-crisis" element={<ManufacturingCrisis />} />
            <Route path="/insights/court-victory" element={<CourtVictory />} />
            <Route path="/insights/red-flags" element={<RedFlagsGuide />} />
            <Route path="/insights/ofgem-investigation" element={<OfgemInvestigation />} />
            <Route path="/insights/calculation-guide" element={<CalculationGuide />} />
            <Route path="/insights/sme-impact" element={<SMEImpact />} />
            <Route path="/insights/emergency-guide" element={<EmergencyGuide />} />
            <Route path="/insights/healthcare-recovery" element={<HealthcareRecovery />} />
            {/* Industry Routes */}
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/offices" element={<Offices />} />
            <Route path="/industries/warehouses" element={<Warehouses />} />
            <Route path="/industries/restaurants" element={<Restaurants />} />
            {/* SEO Sector Landing Pages */}
            <Route path="/energy-broker-reclaims-hospitality" element={<HospitalitySector />} />
            <Route path="/energy-broker-reclaims-manufacturing" element={<ManufacturingSector />} />
            {/* SEO Pages for Energy Broker Commission */}
            <Route path="/energy-broker-commission-rates" element={<CommissionRates />} />
            <Route path="/ofgem-energy-broker-investigation" element={<OfgemInvestigationPage />} />
            {/* Additional Routes */}
            {/* Legal & Other Routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App