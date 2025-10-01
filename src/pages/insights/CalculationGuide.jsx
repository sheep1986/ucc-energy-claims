import BlogPost from '../../components/BlogPost'

const CalculationGuide = () => {
  const content = (
    <>
      <h2>Understanding Hidden Energy Costs</h2>
      <p>
        Hidden broker commissions typically add <strong>10-50% to your energy costs</strong> without clear 
        disclosure. For many UK businesses, these undisclosed fees represent thousands or even hundreds of 
        thousands of pounds in unnecessary annual expenses. Learning to calculate these hidden costs is 
        essential for understanding your potential claim value.
      </p>

      <p>
        This comprehensive guide will walk you through the calculation methods used to identify and quantify 
        hidden broker commissions in energy contracts. Understanding these calculations can help you determine 
        whether you have grounds for a claim and estimate the potential value of recovery.
      </p>

      <h2>Basic Calculation Methodology</h2>
      <p>
        Hidden broker commissions are typically embedded within the unit rates you pay for electricity and gas. 
        The basic calculation involves comparing your contract rates with equivalent market rates for the same 
        period and contract terms.
      </p>

      <h3>The Commission Formula</h3>
      <p>
        <strong>Hidden Commission = (Contract Rate - Market Rate) × Annual Consumption</strong>
      </p>

      <p>
        Where:
      </p>
      <ul>
        <li><strong>Contract Rate:</strong> The unit rate specified in your energy supply contract</li>
        <li><strong>Market Rate:</strong> The equivalent wholesale rate plus reasonable supplier margin</li>
        <li><strong>Annual Consumption:</strong> Your total energy usage per year</li>
      </ul>

      <h2>Gathering Essential Information</h2>
      <p>
        Before calculating hidden commissions, you'll need to collect specific information from your energy 
        contracts and bills:
      </p>

      <h3>Contract Details Required:</h3>
      <ul>
        <li>Contract start and end dates</li>
        <li>Unit rates for electricity (p/kWh) and gas (p/kWh or therms)</li>
        <li>Standing charges and other fixed fees</li>
        <li>Annual consumption volumes</li>
        <li>Contract type (fixed, variable, or indexed)</li>
        <li>Any broker involvement or third-party arrangements</li>
      </ul>

      <h3>Market Data Sources:</h3>
      <ul>
        <li>N2EX electricity prices for contract periods</li>
        <li>NBP gas prices for relevant timeframes</li>
        <li>Industry benchmarks for supplier margins</li>
        <li>Government data on policy costs and network charges</li>
      </ul>

      <h2>Electricity Commission Calculations</h2>
      <p>
        Electricity commission calculations require understanding the various components that make up your 
        final unit rate:
      </p>

      <h3>Component Breakdown:</h3>
      <ul>
        <li><strong>Wholesale electricity cost:</strong> Based on forward market prices</li>
        <li><strong>Network charges:</strong> Distribution and transmission costs</li>
        <li><strong>Policy costs:</strong> Environmental and social levies</li>
        <li><strong>Supplier margin:</strong> Reasonable profit for the energy supplier</li>
        <li><strong>Broker commission:</strong> The hidden element you're calculating</li>
      </ul>

      <h3>Example Calculation:</h3>
      <p>
        <strong>Business Profile:</strong> Manufacturing company, 2,000 MWh annual consumption
      </p>
      <p>
        <strong>Contract Rate:</strong> 18.5p/kWh (2023 contract)
      </p>
      <p>
        <strong>Market Components:</strong>
      </p>
      <ul>
        <li>Wholesale electricity: 10.2p/kWh</li>
        <li>Network charges: 3.8p/kWh</li>
        <li>Policy costs: 2.1p/kWh</li>
        <li>Supplier margin: 1.0p/kWh</li>
        <li><strong>Total market rate: 17.1p/kWh</strong></li>
      </ul>
      <p>
        <strong>Hidden Commission Calculation:</strong>
      </p>
      <p>
        Commission rate = 18.5p - 17.1p = <strong>1.4p/kWh</strong><br/>
        Annual commission = 1.4p × 2,000,000 kWh = <strong>£28,000</strong><br/>
        Commission percentage = 1.4p ÷ 18.5p = <strong>7.6%</strong>
      </p>

      <h2>Gas Commission Calculations</h2>
      <p>
        Gas calculations follow similar principles but require attention to different market dynamics and 
        pricing structures:
      </p>

      <h3>Gas Market Components:</h3>
      <ul>
        <li><strong>Wholesale gas cost:</strong> Based on NBP forward prices</li>
        <li><strong>Transportation charges:</strong> National Grid and distribution costs</li>
        <li><strong>Supplier margin:</strong> Typically lower than electricity</li>
        <li><strong>Broker commission:</strong> Often higher percentage than electricity</li>
      </ul>

      <h3>Example Calculation:</h3>
      <p>
        <strong>Business Profile:</strong> Hotel chain, 500,000 kWh annual gas consumption
      </p>
      <p>
        <strong>Contract Rate:</strong> 8.2p/kWh (2022 contract)
      </p>
      <p>
        <strong>Market Components:</strong>
      </p>
      <ul>
        <li>Wholesale gas: 5.8p/kWh</li>
        <li>Transportation: 1.2p/kWh</li>
        <li>Supplier margin: 0.4p/kWh</li>
        <li><strong>Total market rate: 7.4p/kWh</strong></li>
      </ul>
      <p>
        <strong>Hidden Commission Calculation:</strong>
      </p>
      <p>
        Commission rate = 8.2p - 7.4p = <strong>0.8p/kWh</strong><br/>
        Annual commission = 0.8p × 500,000 kWh = <strong>£4,000</strong><br/>
        Commission percentage = 0.8p ÷ 8.2p = <strong>9.8%</strong>
      </p>

      <h2>Multi-Year Contract Analysis</h2>
      <p>
        Many businesses have multi-year contracts with varying market conditions. Calculating commissions 
        across different periods requires period-by-period analysis:
      </p>

      <h3>Three-Year Contract Example:</h3>
      <p>
        <strong>Contract:</strong> 3-year fixed electricity contract, 1,500 MWh annually
      </p>
      <p>
        <strong>Year 1 (2022):</strong>
      </p>
      <ul>
        <li>Contract rate: 16.8p/kWh</li>
        <li>Market rate: 15.2p/kWh</li>
        <li>Commission: 1.6p/kWh = £24,000</li>
      </ul>
      <p>
        <strong>Year 2 (2023):</strong>
      </p>
      <ul>
        <li>Contract rate: 16.8p/kWh</li>
        <li>Market rate: 14.8p/kWh</li>
        <li>Commission: 2.0p/kWh = £30,000</li>
      </ul>
      <p>
        <strong>Year 3 (2024):</strong>
      </p>
      <ul>
        <li>Contract rate: 16.8p/kWh</li>
        <li>Market rate: 13.9p/kWh</li>
        <li>Commission: 2.9p/kWh = £43,500</li>
      </ul>
      <p>
        <strong>Total Commission:</strong> £97,500 over three years
      </p>

      <h2>Complex Contract Structures</h2>
      <p>
        Some energy contracts include complex pricing structures that require additional analysis:
      </p>

      <h3>Indexed Contracts:</h3>
      <p>
        Contracts linked to market indices require comparison with published index rates plus reasonable 
        supplier margins. Hidden commissions often appear as fixed mark-ups above the published index.
      </p>

      <h3>Flexible Contracts:</h3>
      <p>
        Contracts with flexible purchasing arrangements require analysis of actual purchase prices versus 
        market rates for specific purchase periods.
      </p>

      <h3>Blended Rates:</h3>
      <p>
        Some contracts blend different pricing periods or products. These require disaggregation to 
        identify the commission component within each element.
      </p>

      <h2>Interest Calculations</h2>
      <p>
        Under UK law, businesses may be entitled to interest on recovered commissions. Interest calculations 
        typically use compound interest at commercial rates:
      </p>

      <h3>Interest Formula:</h3>
      <p>
        <strong>Final Amount = Principal × (1 + Interest Rate)^Number of Years</strong>
      </p>

      <h3>Example:</h3>
      <p>
        Commission overpayment of £50,000 in 2020, recovered in 2025 at 8% compound interest:
      </p>
      <p>
        Final amount = £50,000 × (1.08)^5 = <strong>£73,466</strong><br/>
        Interest component = £73,466 - £50,000 = <strong>£23,466</strong>
      </p>

      <h2>Documentation and Evidence</h2>
      <p>
        Accurate calculations require comprehensive documentation:
      </p>

      <h3>Essential Documents:</h3>
      <ul>
        <li>Original energy supply contracts</li>
        <li>Broker agreements or letters of authority</li>
        <li>Energy bills covering the entire contract period</li>
        <li>Market data for relevant pricing periods</li>
        <li>Any correspondence regarding pricing or commissions</li>
      </ul>

      <h3>Professional Verification:</h3>
      <p>
        While basic calculations can be performed using this guide, professional verification is recommended 
        for complex contracts or large potential claims. Energy market specialists can provide detailed 
        analysis and expert testimony if required for legal proceedings.
      </p>

      <h2>Common Calculation Errors</h2>
      <p>
        Avoid these common mistakes when calculating hidden commissions:
      </p>

      <ul>
        <li><strong>Using current market rates:</strong> Always use historical rates for the contract period</li>
        <li><strong>Ignoring seasonal variations:</strong> Energy prices vary seasonally</li>
        <li><strong>Oversimplifying complex contracts:</strong> Consider all contract terms and conditions</li>
        <li><strong>Excluding standing charges:</strong> Check for hidden commissions in fixed charges too</li>
        <li><strong>Wrong consumption units:</strong> Ensure consistent units (kWh, MWh, therms)</li>
      </ul>

      <h2>When to Seek Professional Help</h2>
      <p>
        Consider professional assistance if:
      </p>

      <ul>
        <li>Your annual energy costs exceed £100,000</li>
        <li>You have complex multi-site or multi-year contracts</li>
        <li>Initial calculations suggest substantial hidden commissions</li>
        <li>You lack access to reliable market data</li>
        <li>The broker or supplier disputes your calculations</li>
      </ul>

      <h2>Legal Time Limits</h2>
      <p>
        Remember that UK law typically allows six years to pursue breach of fiduciary duty claims. This 
        limitation period may affect which contracts you can include in your calculations. Act promptly 
        to preserve your rights and ensure comprehensive recovery of hidden commissions.
      </p>

      <p>
        Understanding how to calculate hidden energy costs puts you in control of your energy procurement 
        and helps identify potential claims worth thousands or hundreds of thousands of pounds. With the 
        right approach and documentation, these calculations provide the foundation for successful commission 
        recovery claims.
      </p>
    </>
  )

  return (
    <BlogPost
      title="Complete Guide: How to Calculate Hidden Energy Commission Costs"
      subtitle="Step-by-step methodology for identifying and quantifying undisclosed broker commissions in your energy contracts"
      author="Energy Analysis Team"
      date="August 2025"
      readTime="10 min read"
      category="Expert Guides"
      image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200"
      content={content}
      keyPoints={[
        "Hidden commissions typically add 10-50% to energy costs without disclosure",
        "Basic formula: (Contract Rate - Market Rate) × Annual Consumption",
        "Multi-year contracts require period-by-period analysis for accuracy",
        "Compound interest may be recoverable on hidden commission overpayments",
        "Professional verification recommended for complex contracts or large claims"
      ]}
      sources={[
        "N2EX electricity market data and historical pricing",
        "NBP gas market pricing and forward curve analysis",
        "Ofgem guidance on energy market pricing components",
        "UK commercial interest rate precedents for commission recovery"
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
          title: "Legal Precedents for Commission Claims",
          category: "Legal Updates",
          date: "September 2025",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
          href: "/insights/court-victory"
        },
        {
          title: "Manufacturing Sector Energy Crisis",
          category: "Industry Analysis",
          date: "September 2025",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
          href: "/insights/manufacturing-crisis"
        }
      ]}
    />
  )
}

export default CalculationGuide