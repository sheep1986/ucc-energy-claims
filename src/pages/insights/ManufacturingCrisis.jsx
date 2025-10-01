import BlogPost from '../../components/BlogPost'
import { IconFactory, IconTrendingDown, IconAlertTriangle, IconChartBar } from '@tabler/icons-react'

const ManufacturingCrisis = () => {
  const statistics = [
    {
      value: "33.6%",
      label: "Output decline since 2021",
      trend: "Lowest since 1990",
      icon: <IconTrendingDown className="w-6 h-6" />
    },
    {
      value: "4x",
      label: "Higher costs than US",
      trend: "46% above global average",
      icon: <IconChartBar className="w-6 h-6" />
    },
    {
      value: "90%",
      label: "Businesses affected",
      trend: "Hidden commission victims",
      icon: <IconAlertTriangle className="w-6 h-6" />
    },
    {
      value: "£750k",
      label: "Potential 3-year losses",
      trend: "Per affected business",
      icon: <IconFactory className="w-6 h-6" />
    }
  ]

  const pullQuotes = [
    {
      text: "Every pound we can claw back from these hidden commissions is a pound we can invest in our people, our equipment, and our future. In the current climate, that could literally save businesses.",
      source: "UK Manufacturing Industry Leader"
    },
    {
      text: "UK manufacturers pay some of the highest electricity prices in the developed world, threatening the sector's very existence.",
      source: "Make UK Report"
    }
  ]

  const inlineImages = [
    {
      src: "https://images.unsplash.com/photo-1565515267418-b4c1df9a6dfc?w=800",
      alt: "Industrial manufacturing facility with high energy consumption",
      caption: "UK manufacturing facilities face unprecedented energy costs that threaten their competitiveness",
      position: "right"
    },
    {
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800", 
      alt: "Energy costs comparison chart visualization",
      caption: "Energy price comparisons show UK industrial costs significantly exceed global averages",
      position: "center"
    },
    {
      src: "https://images.unsplash.com/photo-1565515267418-b4c1df9a6dfc?w=800",
      alt: "Manufacturing production line operations",
      caption: "Production lines across the UK are scaling back operations due to unsustainable energy costs",
      position: "left"
    }
  ]

  const authorBio = {
    description: "Specialized team of energy market analysts and economic researchers focused on UK industrial energy costs and their impact on manufacturing competitiveness.",
    credentials: ["Energy Economics", "Industrial Analysis", "Policy Research"],
    contact: {
      email: "energy.team@ucclaims.co.uk",
      location: "London, UK"
    }
  }

  const content = (
    <>
      <h2>The Scale of the Crisis</h2>
      <p>
        UK manufacturing is facing an unprecedented energy cost crisis that threatens the very survival of the sector. 
        According to official data from the Office for National Statistics, UK energy-intensive manufacturing industries 
        have seen their real output fall by <strong>33.6% between Q1 2021 and Q4 2024</strong>, with production volumes 
        now at their lowest level since records began in 1990.
      </p>

      <p>
        The situation is particularly dire when compared to international competitors. UK industrial energy costs are 
        currently <strong>four times higher than in the United States</strong> and <strong>46% above the global average</strong>. 
        This massive disparity is decimating UK manufacturing competitiveness and forcing businesses to make impossible choices 
        between shutting down operations or relocating abroad.
      </p>

      <h2>Hidden Commissions: The Secret Tax on Industry</h2>
      <p>
        While soaring energy prices grab headlines, a more insidious problem lurks beneath the surface: hidden broker commissions. 
        Research indicates that <strong>90% of UK businesses</strong> have been affected by undisclosed energy broker commissions, 
        with these hidden fees typically adding <strong>10-50% to energy bills</strong> without the customer's knowledge or consent.
      </p>

      <p>
        For manufacturing businesses with high energy consumption, these hidden commissions translate into massive financial losses. 
        A medium-sized manufacturer consuming £500,000 of energy annually could be unknowingly paying £50,000 to £250,000 in 
        hidden broker fees each year. Over a typical 3-year contract period, this represents up to <strong>£750,000 in undisclosed charges</strong>.
      </p>

      <h2>The True Cost Breakdown</h2>
      <p>
        Manufacturing businesses are particularly vulnerable to broker exploitation due to their high energy requirements. 
        The electricity-to-gas price ratio has risen from 3:1 in 2012 to between <strong>4:1 and 5:1 in recent years</strong>, 
        making electricity disproportionately expensive for industrial processes.
      </p>

      <p>
        When hidden broker commissions are added to already inflated base prices, manufacturers face a perfect storm:
      </p>
      <ul>
        <li><strong>Base energy costs:</strong> Already among the highest in the developed world</li>
        <li><strong>Policy levies:</strong> Adding approximately 15% to electricity bills</li>
        <li><strong>Hidden broker commissions:</strong> Secretly adding another 10-50% on top</li>
        <li><strong>Network charges:</strong> Despite some government relief, still substantial</li>
      </ul>

      <h2>Real-World Impact on UK Manufacturing</h2>
      <p>
        The consequences of these compounded costs are devastating. Make UK, the manufacturers' organization, reports that 
        British manufacturers pay some of the highest electricity prices in the developed world, threatening the sector's 
        very existence. The downstream manufacturing sector, including chemicals, glass, and ceramics, is under particular pressure.
      </p>

      <p>
        These energy costs aren't just numbers on a spreadsheet – they're forcing real businesses to make drastic decisions:
      </p>
      <ul>
        <li>Production line closures and shift reductions</li>
        <li>Workforce redundancies and hiring freezes</li>
        <li>Cancelled investment in new equipment and technology</li>
        <li>Relocation of operations to countries with lower energy costs</li>
        <li>Complete business closures in energy-intensive sectors</li>
      </ul>

      <h2>The Legal Landscape: Your Right to Reclaim</h2>
      <p>
        Importantly, Ofgem has confirmed that businesses have the legal right to reclaim undisclosed broker commissions. 
        The regulator has stated that where brokers have failed to disclose their commissions, this constitutes a breach 
        of fiduciary duty and potentially amounts to a "secret profit" or bribe under UK law.
      </p>

      <p>
        Businesses can typically claim back commissions for contracts dating back <strong>six years</strong>, though in 
        some cases involving deliberate concealment, claims can go back even further. With interest added, many manufacturers 
        are discovering they're owed hundreds of thousands or even millions of pounds in compensation.
      </p>

      <h2>Government Response and Industry Calls</h2>
      <p>
        The UK government has announced some measures to address energy costs, including plans to reduce electricity bills 
        by up to 25% for over 7,000 businesses from 2027. Network charges have been discounted by 60% for some large 
        industrial users since April 2024. However, industry leaders argue these measures fall far short of what's needed.
      </p>

      <p>
        Make UK has called for electricity prices to be set at £56/MWh – a 10% reduction from current retail prices. 
        Combined with removing policy levies from bills, this would bring UK manufacturers in line with European competitors. 
        Until then, the sector continues to hemorrhage jobs and investment.
      </p>

      <h2>Taking Action: What Manufacturers Can Do Now</h2>
      <p>
        While systemic change is needed, manufacturers can take immediate action to recover hidden broker commissions:
      </p>
      
      <ol>
        <li><strong>Audit your energy contracts:</strong> Review all contracts from the past 6 years</li>
        <li><strong>Identify broker involvement:</strong> Any third-party broker arrangement is potentially affected</li>
        <li><strong>Check for disclosure:</strong> Look for clear commission statements (most won't have them)</li>
        <li><strong>Calculate potential claims:</strong> Commissions typically range from 10-50% of unit rates</li>
        <li><strong>Seek expert assistance:</strong> Specialized firms can handle claims on a no-win, no-fee basis</li>
      </ol>

      <h2>The Path Forward</h2>
      <p>
        The UK manufacturing sector stands at a crossroads. While the energy cost crisis threatens its very survival, 
        the ability to reclaim substantial sums in hidden broker commissions offers a lifeline. For many manufacturers, 
        recovering these funds could mean the difference between staying afloat and going under.
      </p>

      <p>
        As one industry leader put it: "Every pound we can claw back from these hidden commissions is a pound we can 
        invest in our people, our equipment, and our future. In the current climate, that could literally save businesses."
      </p>

      <p>
        The message is clear: UK manufacturers have been systematically overcharged through hidden broker commissions 
        at the worst possible time. But the law is on their side, and the opportunity to fight back is now.
      </p>
    </>
  )

  return (
    <BlogPost
      title="Manufacturing Sector Faces £2.8 Billion Energy Overcharge Crisis"
      subtitle="UK manufacturers lose billions annually to hidden broker commissions while battling world's highest industrial energy costs"
      author="Energy Claims Team"
      date="September 2025"
      readTime="8 min read"
      category="Industry Analysis"
      image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200"
      content={content}
      statistics={statistics}
      pullQuotes={pullQuotes}
      inlineImages={inlineImages}
      authorBio={authorBio}
      keyPoints={[
        "UK manufacturing output down 33.6% due to energy costs - lowest since 1990",
        "Industrial energy costs 4x higher than US, 46% above global average",
        "90% of UK businesses affected by hidden broker commissions adding 10-50% to bills",
        "Manufacturers can reclaim 6 years of undisclosed commissions with interest",
        "Government measures insufficient - industry needs immediate action"
      ]}
      sources={[
        "Office for National Statistics - The impact of higher energy costs on UK businesses (2021 to 2024)",
        "Make UK - Tackling Electricity Prices For Manufacturers Report",
        "Ofgem - Energy broker practices investigation and guidance",
        "Energy UK - Reducing non-domestic electricity policy costs to drive economic growth"
      ]}
      relatedArticles={[
        {
          title: "Landmark Court Victory Against Energy Brokers",
          category: "Legal Updates",
          date: "September 2025",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
          href: "/insights/court-victory"
        },
        {
          title: "How to Calculate Your Hidden Energy Costs",
          category: "Expert Guides",
          date: "June 2025",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
          href: "/insights/calculation-guide"
        },
        {
          title: "SMEs Devastated by Energy Crisis",
          category: "Industry Analysis", 
          date: "January 2025",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
          href: "/insights/sme-impact"
        }
      ]}
    />
  )
}

export default ManufacturingCrisis