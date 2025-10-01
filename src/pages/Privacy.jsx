import { motion } from 'framer-motion'
import { IconShieldCheck, IconLock, IconEye, IconDatabase, IconMail, IconPhone } from '@tabler/icons-react'

const Privacy = () => {
  const sections = [
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      icon: IconDatabase,
      content: [
        {
          subtitle: 'Personal Information',
          items: [
            'Name, business name, and contact details',
            'Energy supplier information and account details',
            'Financial information related to energy costs',
            'Business size and industry classification'
          ]
        },
        {
          subtitle: 'Technical Information',
          items: [
            'IP address and browser information',
            'Website usage data and cookies',
            'Device information for security purposes',
            'Communication preferences and history'
          ]
        }
      ]
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Your Information',
      icon: IconEye,
      content: [
        {
          subtitle: 'Claim Processing',
          items: [
            'Assess your eligibility for commission recovery',
            'Analyze your energy contracts and billing history',
            'Communicate with energy suppliers on your behalf',
            'Process claims and manage legal proceedings'
          ]
        },
        {
          subtitle: 'Service Improvement',
          items: [
            'Improve our website functionality and user experience',
            'Provide customer support and respond to inquiries',
            'Send relevant updates about your claim status',
            'Conduct market research and service development'
          ]
        }
      ]
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing and Disclosure',
      icon: IconShieldCheck,
      content: [
        {
          subtitle: 'We May Share Information With',
          items: [
            'Legal professionals working on your claim',
            'Energy suppliers and brokers as required for claims',
            'Regulatory authorities when legally required',
            'Trusted service providers under strict confidentiality'
          ]
        },
        {
          subtitle: 'We Never Share Information For',
          items: [
            'Marketing purposes without explicit consent',
            'Sale to third-party companies',
            'Unsolicited communications',
            'Any purpose outside of your claim'
          ]
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: IconLock,
      content: [
        {
          subtitle: 'Security Measures',
          items: [
            'Bank-level encryption for all data transmission',
            'Secure data storage with regular backups',
            'Access controls and staff security training',
            'Regular security audits and vulnerability testing'
          ]
        },
        {
          subtitle: 'Data Retention',
          items: [
            'Personal data retained only as long as necessary',
            'Claim data retained for legal requirements (typically 7 years)',
            'Marketing data removed upon unsubscription',
            'Right to request earlier deletion in most cases'
          ]
        }
      ]
    }
  ]

  const rights = [
    {
      title: 'Right to Access',
      description: 'Request a copy of the personal data we hold about you',
      icon: IconEye
    },
    {
      title: 'Right to Rectification',
      description: 'Request correction of inaccurate or incomplete data',
      icon: IconDatabase
    },
    {
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data in certain circumstances',
      icon: IconLock
    },
    {
      title: 'Right to Portability',
      description: 'Request transfer of your data to another service provider',
      icon: IconShieldCheck
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-emerald/20 flex items-center justify-center">
              <IconShieldCheck size={40} className="text-emerald" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-blue-400"> Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="inline-flex items-center gap-2 bg-emerald/10 backdrop-blur text-emerald px-4 py-2 rounded-full text-sm">
              <IconShieldCheck size={16} />
              <span>Last updated: March 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-emerald-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-navy mb-6">Privacy in Simple Terms</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <IconLock className="text-emerald mx-auto mb-4" size={32} />
                <h3 className="font-bold text-navy mb-2">Secure Collection</h3>
                <p className="text-slate-600 text-sm">We only collect information necessary to process your claim</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <IconShieldCheck className="text-emerald mx-auto mb-4" size={32} />
                <h3 className="font-bold text-navy mb-2">Protected Use</h3>
                <p className="text-slate-600 text-sm">Your data is used exclusively for claim processing and legal purposes</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <IconEye className="text-emerald mx-auto mb-4" size={32} />
                <h3 className="font-bold text-navy mb-2">Full Transparency</h3>
                <p className="text-slate-600 text-sm">You maintain complete control and visibility over your data</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center">
                    <section.icon className="text-emerald" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">{section.title}</h2>
                </div>

                <div className="space-y-8">
                  {section.content.map((subsection, subIndex) => (
                    <div key={subIndex} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                      <h3 className="text-xl font-bold text-navy mb-4">{subsection.subtitle}</h3>
                      <ul className="space-y-3">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">Your Data Rights</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Under GDPR and UK data protection laws, you have comprehensive rights over your personal data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rights.map((right, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-emerald/10 flex items-center justify-center">
                  <right.icon className="text-emerald" size={28} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{right.title}</h3>
                <p className="text-slate-600 text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Questions About Your Privacy?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our Data Protection Officer is here to help with any privacy-related questions or requests
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <IconMail className="text-emerald mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm">privacy@utilitycommissionclaims.co.uk</p>
                <p className="text-gray-400 text-xs mt-2">Response within 24 hours</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <IconPhone className="text-emerald mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-gray-300 text-sm">0800 123 4567</p>
                <p className="text-gray-400 text-xs mt-2">Mon-Fri 9am-6pm</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald text-white px-8 py-4 rounded-xl hover:bg-emerald/90 transition-all duration-300 font-medium"
              >
                Contact Our Privacy Team
                <IconShieldCheck size={20} />
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 text-sm">
                Utility Commission Claims Ltd is registered with the Information Commissioner's Office (ICO) 
                under registration number ZA123456. We are committed to protecting your privacy in accordance 
                with all applicable UK and EU data protection laws.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Privacy