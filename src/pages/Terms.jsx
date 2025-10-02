import { motion } from 'framer-motion'
import { IconGavel, IconShieldCheck, IconAlertTriangle, IconHeart, IconCurrencyPound, IconClock } from '@tabler/icons-react'

const Terms = () => {
  const quickFacts = [
    {
      icon: IconCurrencyPound,
      title: 'No Win, No Fee',
      description: 'You only pay if we successfully recover money for you'
    },
    {
      icon: IconClock,
      title: '21-Day Guarantee',
      description: 'We aim to submit your claim within 21 days of instruction'
    },
    {
      icon: IconShieldCheck,
      title: 'FCA Regulated',
      description: 'We operate under strict Financial Conduct Authority guidelines'
    },
    {
      icon: IconHeart,
      title: 'No Hidden Costs',
      description: 'All fees are clearly explained upfront with no surprises'
    }
  ]

  const sections = [
    {
      id: 'services',
      title: 'Our Services',
      content: [
        {
          subtitle: 'Claim Assessment',
          text: 'We provide free initial assessments to determine if you have a valid claim for hidden energy broker commissions. This assessment is provided without obligation and at no cost to you.'
        },
        {
          subtitle: 'Legal Representation',
          text: 'Upon instruction, we will represent you in all matters relating to your energy broker commission claim, including negotiations with suppliers and legal proceedings if necessary.'
        },
        {
          subtitle: 'Recovery Services',
          text: 'We handle the entire claims process from initial assessment through to final recovery of funds, keeping you informed at every stage of the process.'
        }
      ]
    },
    {
      id: 'fees',
      title: 'Fee Structure',
      content: [
        {
          subtitle: 'No Win, No Fee Basis',
          text: 'Our services are provided on a conditional fee arrangement (CFA). If we do not recover money for you, you pay nothing for our services. This arrangement covers our professional fees only.'
        },
        {
          subtitle: 'Success Fee',
          text: 'Upon successful recovery, we charge 25% + VAT of the gross amount recovered. This fee is only payable after funds have been received and will be deducted before payment to you.'
        },
        {
          subtitle: 'Additional Costs',
          text: 'In rare circumstances, there may be additional costs such as court fees or expert witness fees. Any such costs will be discussed and agreed with you in advance, and are typically covered by our After the Event (ATE) insurance policy.'
        }
      ]
    },
    {
      id: 'obligations',
      title: 'Your Obligations',
      content: [
        {
          subtitle: 'Information Provision',
          text: 'You agree to provide us with all relevant information and documentation relating to your energy contracts and billing history. This includes energy bills, contracts, correspondence with brokers or suppliers.'
        },
        {
          subtitle: 'Cooperation',
          text: 'You agree to cooperate fully with our investigation and to respond promptly to our requests for information or documentation. Failure to cooperate may result in termination of our services.'
        },
        {
          subtitle: 'Exclusive Instruction',
          text: 'During the term of our engagement, you agree not to instruct any other party to pursue claims relating to energy broker commissions without our written consent.'
        }
      ]
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      content: [
        {
          subtitle: 'Professional Indemnity',
          text: 'We maintain comprehensive professional indemnity insurance of £5 million to protect against any errors or omissions in our professional services.'
        },
        {
          subtitle: 'Liability Limits',
          text: 'Our total liability to you, whether in contract, tort, or otherwise, shall not exceed the total fees paid to us or £100,000, whichever is greater. This limitation does not apply to death or personal injury caused by our negligence.'
        },
        {
          subtitle: 'Consequential Loss',
          text: 'We shall not be liable for any indirect, special, or consequential losses, including loss of profits, loss of business, or loss of opportunity, except where such losses arise directly from our negligent breach of duty.'
        }
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      content: [
        {
          subtitle: 'Your Right to Terminate',
          text: 'You may terminate our services at any time by giving 14 days written notice. If you terminate after we have commenced work on your claim, you may be liable for reasonable costs incurred up to the date of termination.'
        },
        {
          subtitle: 'Our Right to Terminate',
          text: 'We may terminate our services if you fail to cooperate, provide false information, or if we determine that your claim has no reasonable prospect of success. We will give you reasonable notice of termination.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, we will return your documents and cease work on your claim. Any fees due up to the date of termination remain payable according to our fee structure.'
        }
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-blue-100 flex items-center justify-center">
              <IconGavel size={40} className="text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of
              <span className="text-blue-600"> Service</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Clear, transparent terms for our energy broker commission recovery services
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              <IconGavel size={16} />
              <span>Last updated: March 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Key Terms at a Glance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm text-center"
                >
                  <fact.icon className="text-green-500 mx-auto mb-4" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">{fact.title}</h3>
                  <p className="text-slate-600 text-sm">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-orange-50 border-l-4 border-orange-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <IconAlertTriangle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-orange-800 mb-2">Important Legal Notice</h3>
              <p className="text-orange-700 text-sm leading-relaxed">
                These terms constitute a legal agreement between you and Utility Commission Claims Ltd. 
                By instructing our services, you agree to be bound by these terms. Please read them 
                carefully and contact us if you have any questions before proceeding.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <span className="text-green-500 font-bold text-sm">{index + 1}</span>
                  </div>
                  {section.title}
                </h2>

                <div className="space-y-8">
                  {section.content.map((subsection, subIndex) => (
                    <div key={subIndex} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{subsection.subtitle}</h3>
                      <p className="text-slate-700 leading-relaxed">{subsection.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Important Terms */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Terms</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Protection</h3>
                <p className="text-slate-700 leading-relaxed">
                  We process your personal data in accordance with UK data protection laws and our Privacy Policy. 
                  By instructing our services, you consent to the processing of your personal data for the purposes 
                  of pursuing your claim.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Governing Law</h3>
                <p className="text-slate-700 leading-relaxed">
                  These terms are governed by English law and any disputes will be subject to the exclusive 
                  jurisdiction of the English courts. If any provision is found to be unenforceable, 
                  the remainder of the terms remain in full effect.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Complaints Procedure</h3>
                <p className="text-slate-700 leading-relaxed">
                  If you have any concerns about our service, please contact our complaints department. 
                  We are also regulated by the Solicitors Regulation Authority and subscribe to the 
                  Legal Ombudsman scheme for dispute resolution.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Amendment of Terms</h3>
                <p className="text-slate-700 leading-relaxed">
                  We may update these terms from time to time. Any material changes will be communicated 
                  to existing clients with reasonable notice. Continued use of our services after changes 
                  constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Questions About These Terms?</h2>
            <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto">
              Our legal team is here to explain any aspect of our terms and answer your questions
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <IconGavel className="text-white mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2 text-white">Legal Enquiries</h3>
                <p className="text-blue-50 text-sm">legal@utilitycommissionclaims.co.uk</p>
                <p className="text-blue-100 text-xs mt-2">Response within 24 hours</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <IconHeart className="text-white mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2 text-white">General Enquiries</h3>
                <p className="text-blue-50 text-sm">hello@utilitycommissionclaims.co.uk</p>
                <p className="text-blue-100 text-xs mt-2">Mon-Fri 9am-6pm</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium"
              >
                Contact Our Legal Team
                <IconGavel size={20} />
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-blue-50 text-sm">
                Utility Commission Claims Ltd is authorised and regulated by the Solicitors Regulation Authority 
                (SRA Number: 123456) and is registered in England and Wales (Company Number: 12345678). 
                Registered office: 123 Legal Street, London, EC1A 1AA.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Terms