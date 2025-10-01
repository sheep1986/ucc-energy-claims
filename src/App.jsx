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
import CaseStudies from './pages/CaseStudies'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
// Industry pages
import Hospitality from './pages/industries/Hospitality'
import Manufacturing from './pages/industries/Manufacturing'
import Healthcare from './pages/industries/Healthcare'
import Retail from './pages/industries/Retail'
import Education from './pages/industries/Education'
import Offices from './pages/industries/Offices'
import Warehouses from './pages/industries/Warehouses'
import Restaurants from './pages/industries/Restaurants'

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
            {/* Industry Routes */}
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/offices" element={<Offices />} />
            <Route path="/industries/warehouses" element={<Warehouses />} />
            <Route path="/industries/restaurants" element={<Restaurants />} />
            {/* Additional Routes */}
            <Route path="/case-studies" element={<CaseStudies />} />
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