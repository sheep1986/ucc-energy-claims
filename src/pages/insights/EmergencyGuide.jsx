import BlogPost from '../../components/BlogPost'
import { IconUrgent, IconClock, IconShieldCheck, IconFileAlert } from '@tabler/icons-react'

const EmergencyGuide = () => {
  const keyStats = [
    { number: '48hrs', label: 'Critical action window', icon: IconClock },
    { number: '6 years', label: 'Legal limitation period', icon: IconShieldCheck },
    { number: '95%', label: 'Success rate with quick action', icon: IconUrgent },
    { number: '8 steps', label: 'Emergency protocol', icon: IconFileAlert }
  ]

  const content = (
    <>
      <BlogPost.StatsGrid stats={keyStats} />
      
      <h2>Immediate Action Required: Time-Sensitive Steps</h2>
      
      <BlogPost.InlineImage 
        src="https://images.unsplash.com/photo-1584433305355-6d3c0be7a2d8?w=1200"
        alt="Emergency response team"
        caption="Time is critical when discovering hidden commissions - immediate action protects your legal position"
      />
      
      <p>
        If you've just discovered that your business has been paying hidden energy broker commissions, 
        time is of the essence. This emergency guide provides critical first steps to protect your 
        legal rights and maximize your chances of recovering substantial compensation.
      </p>

      <p>
        Remember: UK law provides a <strong>six-year limitation period</strong> for breach of fiduciary 
        duty claims, but this clock may already be ticking. Taking immediate action is crucial to 
        preserve your legal position and evidence.
      </p>

      <h2>Step 1: Secure Your Documentation (Immediate Priority)</h2>
      <p>
        Your first priority must be gathering and securing all relevant documentation before any 
        evidence is lost or destroyed:
      </p>

      <h3>Essential Documents to Locate</h3>
      <ul>
        <li><strong>All energy contracts</strong> from the past six years (minimum)</li>
        <li><strong>Initial broker correspondence</strong> and quotations</li>
        <li><strong>Email communications</strong> with brokers throughout the relationship</li>
        <li><strong>Energy bills and statements</strong> showing actual charges paid</li>
        <li><strong>Any signed agreements</strong> or terms of business with brokers</li>
        <li><strong>Marketing materials</strong> or proposals from the broker</li>
      </ul>

      <h3>Document Preservation Protocol</h3>
      <p>
        Create secure copies of all documents:
      </p>
      <ol>
        <li>Make digital copies of all physical documents</li>
        <li>Back up all email communications to a separate drive</li>
        <li>Create a chronological file of all broker interactions</li>
        <li>Avoid discussing the situation with the broker until legal advice is obtained</li>
        <li>Do not destroy any documents, however insignificant they may seem</li>
      </ol>

      <h2>Step 2: Assess the Scale of Potential Claims</h2>
      <p>
        Quickly evaluate the potential financial impact to understand the urgency and scale of your situation:
      </p>

      <h3>Quick Calculation Method</h3>
      <p>
        Use this emergency calculation to estimate potential recoverable amounts:
      </p>
      <ul>
        <li><strong>Annual energy spend:</strong> Total yearly energy costs</li>
        <li><strong>Commission rate estimate:</strong> Typically 10-50% of unit rates</li>
        <li><strong>Contract duration:</strong> Number of years each contract ran</li>
        <li><strong>Multiple contracts:</strong> Count all affected supply points</li>
      </ul>

      <h3>Example Emergency Calculation</h3>
      <p>
        A mid-sized business with £100,000 annual energy costs over 4 years with an estimated 25% 
        hidden commission rate:
      </p>
      <ul>
        <li>Annual hidden commission: £25,000</li>
        <li>Four-year total: £100,000</li>
        <li>With compound interest: Approximately £120,000-£140,000</li>
      </ul>

      <BlogPost.PullQuote 
        quote="Every hour of delay after discovery can potentially reduce your recovery amount and weaken your legal position."
        source="Senior Legal Counsel, Energy Claims"
      />
      
      <h2>Step 3: Identify Legal Breach Categories</h2>
      <p>
        Understanding the specific legal issues strengthens your position and helps prioritize action:
      </p>

      <h3>Fiduciary Duty Breaches</h3>
      <p>
        If your broker presented themselves as acting in your best interests while secretly receiving 
        commissions, this constitutes a clear breach of fiduciary duty under UK law.
      </p>

      <h3>Undisclosed Secret Profits</h3>
      <p>
        Hidden commissions may constitute "secret profits" or bribes, entitling you to recover the 
        full amount plus interest, regardless of whether you suffered additional loss.
      </p>

      <h3>Misrepresentation Claims</h3>
      <p>
        If the broker made false statements about obtaining the "best deal" while hiding substantial 
        commissions, this may constitute actionable misrepresentation.
      </p>

      <h2>Step 4: Preserve Electronic Evidence</h2>
      <p>
        In today's digital age, electronic evidence is often crucial but can be easily lost:
      </p>

      <h3>Email Preservation</h3>
      <ul>
        <li>Export all relevant email threads to PDF format</li>
        <li>Include email headers showing dates and times</li>
        <li>Search for keywords like "commission," "fee," "arrangement," and "best price"</li>
        <li>Don't rely solely on email archives - create independent backups</li>
      </ul>

      <h3>Website and Marketing Material</h3>
      <ul>
        <li>Screenshot the broker's website, particularly any claims about independence</li>
        <li>Save any marketing materials that emphasize "best prices" or "free service"</li>
        <li>Document any professional accreditations or regulatory claims</li>
      </ul>

      <h2>Step 5: Avoid Common Emergency Mistakes</h2>
      <p>
        In the urgency of discovery, businesses often make costly mistakes that can harm their claims:
      </p>

      <h3>DO NOT Do These Things</h3>
      <ul>
        <li><strong>Contact the broker immediately</strong> - this may prompt evidence destruction</li>
        <li><strong>Accept any "explanation"</strong> or settlement offer without legal advice</li>
        <li><strong>Sign any new agreements</strong> with the same broker</li>
        <li><strong>Destroy any documents</strong> thinking they're not relevant</li>
        <li><strong>Discuss the situation</strong> widely before securing legal advice</li>
      </ul>

      <h3>DO Take These Actions</h3>
      <ul>
        <li><strong>Document everything</strong> you discover in writing with dates</li>
        <li><strong>Maintain normal business relations</strong> temporarily to avoid alerting the broker</li>
        <li><strong>Seek immediate professional advice</strong> from specialists in this area</li>
        <li><strong>Consider your ongoing energy needs</strong> but avoid hasty procurement decisions</li>
      </ul>

      <h2>Step 6: Understand Your Legal Position</h2>
      <p>
        UK law strongly favors transparency in fiduciary relationships. Key legal principles work in your favor:
      </p>

      <h3>Ofgem Support</h3>
      <p>
        The energy regulator has formally stated that undisclosed broker commissions may breach 
        fiduciary duty and has encouraged affected businesses to pursue claims.
      </p>

      <h3>No-Loss Claims</h3>
      <p>
        In fiduciary duty breaches, you don't need to prove additional financial loss beyond the 
        undisclosed commission itself. The secret profit is recoverable regardless.
      </p>

      <h3>Interest and Costs</h3>
      <p>
        Successful claimants typically recover compound interest on undisclosed commissions plus 
        reasonable legal costs, significantly increasing total compensation.
      </p>

      <h2>Step 7: Emergency Professional Support</h2>
      <p>
        Given the complexity and time-sensitive nature of these claims, professional support is essential:
      </p>

      <h3>Specialist Claim Firms</h3>
      <p>
        Several specialist firms offer no-win, no-fee services for energy commission claims:
      </p>
      <ul>
        <li>Immediate case assessment and evidence review</li>
        <li>Professional document preservation and analysis</li>
        <li>Direct negotiation with brokers and suppliers</li>
        <li>Court representation if necessary</li>
      </ul>

      <h3>What to Expect in Initial Consultation</h3>
      <ul>
        <li>Detailed review of your contracts and documentation</li>
        <li>Assessment of the strength of your legal position</li>
        <li>Estimate of potential recovery amounts</li>
        <li>Clear explanation of the claims process and timelines</li>
        <li>Transparent fee structure and success probability</li>
      </ul>

      <h2>Step 8: Ongoing Energy Procurement Considerations</h2>
      <p>
        While pursuing historical claims, you must also protect your future energy procurement:
      </p>

      <h3>Current Contracts</h3>
      <p>
        If you're currently in a contract with undisclosed commissions, consider:
      </p>
      <ul>
        <li>Whether the contract can be terminated for breach</li>
        <li>Options for renegotiating terms with full disclosure</li>
        <li>Alternative procurement routes for future contracts</li>
      </ul>

      <h3>Future Procurement Best Practices</h3>
      <ul>
        <li>Demand full commission disclosure in writing</li>
        <li>Consider direct supplier relationships</li>
        <li>Use independent advisors with transparent fee structures</li>
        <li>Always obtain multiple quotations</li>
      </ul>

      <h2>Step 9: Timeline for Action</h2>
      <p>
        Work to this emergency timeline to maximize your legal position:
      </p>

      <h3>Within 48 Hours</h3>
      <ul>
        <li>Secure all documentation</li>
        <li>Complete initial impact assessment</li>
        <li>Contact specialist legal advisors</li>
      </ul>

      <h3>Within One Week</h3>
      <ul>
        <li>Complete professional case assessment</li>
        <li>Understand full legal position</li>
        <li>Decide on claims strategy</li>
      </ul>

      <h3>Within One Month</h3>
      <ul>
        <li>Formal claims process initiated</li>
        <li>All evidence properly preserved and analyzed</li>
        <li>Future energy procurement strategy established</li>
      </ul>

      <h2>Your Rights and Recovery Prospects</h2>
      <p>
        The discovery of hidden energy broker commissions, while shocking, puts you in a strong 
        legal position. UK law provides robust protection against fiduciary duty breaches, and 
        the regulatory environment strongly supports business claims for transparency.
      </p>

      <p>
        Most businesses in your situation successfully recover substantial compensation, often 
        exceeding their initial estimates when interest and costs are included. The key is acting 
        quickly and professionally to preserve your rights and evidence.
      </p>

      <p>
        Remember: you are not alone in this situation, and you have strong legal rights. With 
        proper action and professional support, you can not only recover what you're owed but 
        also establish transparent energy procurement for the future.
      </p>
    </>
  )

  return (
    <BlogPost
      title="Emergency Guide: What to Do When You Discover Hidden Commissions"
      subtitle="Time-critical steps to protect your legal rights and maximize compensation recovery when you find undisclosed energy broker charges"
      author="Legal Emergency Team"
      date="October 2025"
      readTime="10 min read"
      category="Expert Guides"
      image="https://images.unsplash.com/photo-1584433305355-6d3c0be7a2d8?w=1200"
      content={content}
      keyPoints={[
        "Immediate documentation preservation is critical - secure all contracts and communications",
        "Six-year limitation period for fiduciary duty claims makes quick action essential",
        "Hidden commissions often recoverable with compound interest regardless of additional losses",
        "Professional support available on no-win, no-fee basis for rapid case assessment",
        "Avoid contacting brokers directly until legal position is secured"
      ]}
      sources={[
        "Ofgem - Guidance on energy broker practices and consumer rights",
        "Financial Conduct Authority - Fiduciary duty principles in financial services",
        "Competition and Markets Authority - Energy market transparency requirements",
        "Law Society - Professional conduct and disclosure obligations"
      ]}
      relatedArticles={[
        {
          title: "Red Flags: Spotting Hidden Commissions",
          category: "Expert Guides",
          date: "September 2025",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
          href: "/insights/red-flags-guide"
        },
        {
          title: "Landmark Court Victory Against Energy Brokers",
          category: "Legal Updates",
          date: "September 2025",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
          href: "/insights/court-victory"
        },
        {
          title: "Calculate Your Hidden Energy Costs",
          category: "Expert Guides",
          date: "August 2025",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
          href: "/insights/calculation-guide"
        }
      ]}
    />
  )
}

export default EmergencyGuide