"use client";

import { addScaleCorrector, motion, useScroll, useSpring } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

type StatCard = {
  value?: string;
  title: string;
  body: string;
};

type SolutionPanel = {
  title: string;
  paragraph: string;
};

type SectionMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

type PageSection = {
  id: string;
  navLabel: string;
  part: string;
  title: string;
  paragraphs: string[];
  quote?: string;
  solutionPanels?: SolutionPanel[];
  media?: SectionMedia;
  mediaPlacement?: "bottom" | "wrap-right";
  panelTitle?: string;
  bullets?: string[];
  cards?: StatCard[];
  closingNote?: string;
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "thesis", label: "Thesis" },
  { id: "issue", label: "Why Is This an Issue?" },
  { id: "solutions", label: "Solutions" },
  { id: "counterargument", label: "Counterargument" },
  { id: "conclusion", label: "Conclusion" },
  { id: "works-cited", label: "Works Cited" },
];

const sections: PageSection[] = [
  {
    id: "issue",
    navLabel: "Why Is This an Issue?",
    part: "Part I",
    title: "The Roots of the Crisis",
    paragraphs: [
      "California is often viewed as a place of opportunity, innovation, and economic success. However, this relentless pursuit of growth has also produced wealth inequality that is increasingly affecting younger generations. While the state continues to generate enormous wealth, young Californians are finding it harder than ever to achieve financial independence or build long-term stability. Wealth inequality is no longer just an economic statistic; it now shapes the opportunities available to people in our generation.",
      "For many young adults, one of the first realities of this inequality appears in the housing market. California has some of the most expensive real estate in the United States, and the cost of living continues to rise faster than wages for many workers. Owning a home, once seen as a major milestone of adulthood, now feels out of reach for many people. Even renting can be extremely difficult, especially in large cities. As a result, many young adults remain financially dependent longer than previous generations or delay major life decisions like moving out, starting families, or investing.",
      "A major driver of this issue is the relationship between housing costs and stagnant wages. While real estate prices in California and across the nation have risen dramatically over the past several decades, many jobs have not experienced the same level of income growth. This imbalance makes homeownership increasingly difficult for middle- and lower-income individuals and families. For individuals without access to generational wealth or financial resources, especially many young people, major barriers remain when trying to save money, build assets, or invest in the future.",
      "Another factor that continues to widen this gap is generational wealth, which refers to families that already possess financial resources and can pass those advantages to their children through property, investments, or direct support. These resources can help younger generations afford education and housing, while those without them face a much harder path toward economic mobility. Without access to strong financial education or early economic opportunities, many people enter adulthood already facing structural disadvantages.",
      "Wealth inequality also contributes to broader social challenges such as gentrification, where wealthier residents move into communities and rising property values push long-time residents out. In many cases, neighborhoods that were once home to working-class families are transformed into spaces no longer affordable to the people who originally lived there. Urban Studies research shows that gentrification can lead to displacement, community fragmentation, and increased housing instability for lower-income residents (Urban Displacement - the Project Aims to Understand the Nature of Gentrification, and Displacement, and Exclusion in American Cities.)",
      "The consequences of wealth inequality are becoming more visible among younger generations. Many young adults are delaying major milestones such as moving out of their parents' homes, purchasing homes, getting married, or starting families. Recent data shows that the percentage of young adults living with their parents is at one of the highest levels in modern history, largely because of economic pressures such as housing costs and student debt (US Census Bureau).",
      "Another consequence is the effect economic inequality has on people's mental and social well-being. Financial instability can create uncertainty about the future and increase stress, especially for those who feel that hard work alone is no longer enough to reach stability. Research in social science has shown that greater income inequality in a society is linked to higher levels of financial stress (Urban Displacement - the Project Aims to Understand the Nature of Gentrification, and Displacement, and Exclusion in American Cities.)",
      "For these reasons, wealth inequality in California must be understood as more than an economic imbalance. It represents a growing challenge for younger generations that affects economic mobility, stability, and long-term well-being.",
    ],
    media: {
      src: "/MWStateMap.png",
      alt: "United States map showing state minimum wage levels",
      width: 1364,
      height: 1025,
      caption:
        "Figure 3. Minimum wage levels across the United States. Source: VCU RISE.",
    },
  },
  {
    id: "solutions",
    navLabel: "Solutions",
    part: "Part II",
    title: "A Generation Feeling the Impact",
    paragraphs: [
      "Fixing this issue takes more than one policy change. We need solutions that support young people early, strengthen financial stability over time, and address the larger systems that keep the wealth gap in place.",
    ],
    solutionPanels: [
      {
        title: "Solution 1",
        paragraph: `Solution 1 (State): Having California expand state-fund tuition assistance and financial literacy programs at public universities to prevent wealth inequality from compounding across generations.
        Addressing generational wealth inequality requires much more than just a late housing intervention. Guzman’s analysis of California's Dream for All loan programs highlights that such programs can assist, yet their reach remains minimal. The program was “exhausted in 11 days, distributing $288 million to support the purchase of about 2500 homes" (Guzman 2) and was only granted in “10 counties" (Guzman 2) across California. In the end, Guzman concludes that the program influences “less than 1% of buyers" (8) and “will not be a cure-all for the crisis" (18).
        These discoveries imply that interventions occurring later in adulthood, such as homeownership subsidies, may not be adequate to close generational wealth gaps. Research quoted in the study further establishes that wealth disparities grow significantly during early adulthood. As noted in the literature review, “By age 30, the Black-white median wealth gap exceeds $21,000" (Guzman 7). This broadening gap highlights the magnitude of intervening before economic inequality compounds.
        California can intervene earlier in the life cycle by developing need-based tuition assistance within the UC and CSU systems. Lowering student debt for first-generation and low-income students reduces additional burdens in the critical transition into the workforce. Furthermore, introducing mandatory financial literacy education would address the exclusion created by the financial systems that have historically shaped wealth gaps. Guzman illuminates redlining, “created a structure that incentivized housing discrimination" (1), demonstrating how policy-driven exclusion built a limit on access to financial opportunity. Guaranteeing universal financial education would help address those historical disadvantages.
        By shifting intervention to the educational level, California can move to address those inequalities before they solidify into long-term wealth disparities. (269 words)`
      },
      {
        title: "Solution 2",
        paragraph:
	          `Solution 2 (Nationwide): Increase Federal Minimum Wage Nationwide and improve workers' rights.
While state-level educational reform targets early adulthood, a broader national labor reform is also 
necessary to sustain long-term economic mobility. Guzman emphasizes, “The gaps in California’s equity 
crisis come as a result of centuries of discrimination” (Guzman 2), tied to decades of discriminatory 
housing and lending practices. These structural barriers extend beyond housing, labor markets, and income 
distribution. Guzman further warns that "California's wealth gap will continue to widen, disproportionately 
forcing people" (Guzman 2). Young adults entering low-wage labor markets face additional barriers to saving, 
investing, or building assets. The major concern is the current federal minimum wage, which has stayed at 
$7.25 for the past 16 years. As shown in Figure 3, minimum wage levels vary significantly across states, 
highlighting the lack of consistent federal wage protections. Because many young adults are overrepresented 
in lower-paying jobs, frozen wages make it difficult for them to afford housing, education, or savings. 
Increasing the federal minimum wage would ensure that full-time workers can meet those basic life expenses 
and lower financial instability. Also, it can increase consumer spending and overall help the economy, 
therefore, in the long run, benefiting both workers and local businesses. The first course of action would 
be to increase the Federal minimum wage to a livable wage, estimated at roughly $23 per hour in 2025. 
States should also seek to increase their own minimum wages due to some states having higher costs of living. 
The Federal government should also implement stricter wage protections to avoid companies taking advantage of
 their employees. Some may argue that increasing the minimum wage could be detrimental to small
 businesses; however, this can be mitigated by implementing federal support programs for small businesses. 
 An increased minimum wage may also improve productivity amongst workers. Additionally, strengthening workers’ 
 rights by expanding labor protections for entry-level employees and interns would help ensure that labor 
 contributes to increasing wealth instead of reinforcing income inequality. Forming new workers’ unions in
 fields that have not yet unionized would further improve workers’ rights and working conditions. Educational reforms address access to economic mobility prior to a person entering the 
 workforce full-time as well as giving them knowledge of how to properly handle their own finances. This 
 alone would not be enough but with the proposed federal wage changes, and improved workers’ rights,
 California, and the rest of the United States would see a decrease in the wealth gap that we currently 
 are being affected by. Many people and primarily large corporations will see these attempts at raising 
 wages and improving workers’ rights as a threat to their income. In order to be able to properly implement 
 change the people have to speak out and reach out to their representatives in order to see true change. (465)
`,
      },
    ],
    quote:
      "“California's wealth gap will continue to widen, disproportionately forcing people.” (Guzman 2)",
  },
  {
    id: "counterargument",
    navLabel: "Counterargument",
    part: "Part III",
    title: "Addressing the Counterargument",
    paragraphs: [
	      `Some critics argue that interventions such as increasing the federal minimum wage or expanding
	      tuition assistance could lead to economic consequences. Opponents of minimum wage increases make the case
	      that raising the minimum wage may lead to job losses or financial strain on smaller businesses. However, 
	      research has pointed out that static wages have limited economic mobility for many Americans. As Michael A. 
	      Schultz explains, “low-wage workers experience limited upward mobility in the labor market over time” (Schultz 160). 
	      This proposes that preserving the current wage structure may reinforce existing inequalities rather than being 
	      stepping stones that allow workers to build long-term financial stability.`,
	      `Others still make the case that expansion of state-funded education programs could put more strain on government 
	      budgets. While these concerns are valid, research shows that many Californians already struggle to meet 
	      basic needs. According to the California Budget and Policy Center, “many Californians are struggling to afford to 
	      live in the communities where they work” (“Many Californians Are Struggling”). Without important investment in 
	      education and economic opportunity, these inequalities are likely to carry on across generations.`,
	      `Furthermore, targeted programs alone cannot provide a permanent solution to systemic wealth inequality. Carmen 
	      Guzman notes that California’s Dream for All program is helpful for some families. Its influence among
	      potential homebuyers was limited, and it “will not be a cure-all for the crisis” (Guzman 18). Because wealth 
	      inequality is profoundly embedded within economic structures, approaching the problem requires a broader policy 
	      solution that stretches access to education, improves wages, and strengthens the protection for workers. (261)`
    ],
    media: {
      src: "/Screen-Shot-2024-04-17-at-3.56.17-PM.png",
      alt: "Graphic highlighting racial wealth gaps in California",
      width: 1366,
      height: 768,
      caption: "Racial wealth disparities remain deeply concentrated across California communities.",
    },
    mediaPlacement: "wrap-right",
  },
  {
    id: "conclusion",
    navLabel: "Conclusion",
    part: "Part IV",
    title: "Conclusion",
    paragraphs: [
	      `Wealth inequality in California represents a growing obstacle that extends far beyond simple economic statistics. For many young Americans, rising housing costs, stagnant wages, and limited access to financial resources have made financial independence significantly more difficult than it was for previous generations. These structural obstacles limit economic mobility and create a lasting disadvantage for individuals who lack the safety net of generational wealth or financial support.
		    Addressing this issue requires harmonized policy solutions that work at both the state and national levels. Expansion of tuition assistance and financial literacy programs in California’s public universities can help young people gain the knowledge and financial stability needed to start their careers without overwhelming debt. Federal policies, such as raising the minimum wage and strengthening worker protections, are also necessary to ensure that employment provides a pathway to financial stability.
	      Together, these reforms demonstrate that economic mobility is not a simple result of individual effort, but also the outcome of policies that shape access to opportunity. By implementing these changes, California has the potential to lead the nation in restoring economic opportunity for younger generations and future generations.
	      California has historically played an influential role in shaping our nation’s economic and social policies. Because the state has one of the largest economies in the world, policies that are implemented in California have often had a rippling effect across the United States. If California successfully expands educational access, improves workers' rights, and strengthens economic mobility programs for its residents, other states may follow its steps and adopt similar approaches. In this way, California could serve as an example for policies that are designed to help people, reduce wealth inequality, and restore opportunity for younger generations across the country. These reforms would not only support younger generations today but also strengthen long-term economic stability and opportunity for future generations to come across the state and nation. (313)
`
    ],
    
  },
  {
    id: "works-cited",
    navLabel: "Works Cited",
    part: "Part V",
    title: "Works Cited",
    paragraphs: [
      "MLA 9 citations (one source per card).",
    ],
    cards: [
      {
        title: "Anderson et al.",
        body:
          "Anderson, Alissa, et al. \"Many Californians Are Struggling to Live in Our Communities: Five Reasons to Share the State's Prosperity.\" California Budget & Policy Center, Jan. 2020, https://calbudgetcenter.org/resources/many-californians-are-struggling-to-live-in-our-communities/.",
      },
      {
        title: "Bentz",
        body:
          "Bentz, Alex. \"California Housing Affordability Tracker (4th Quarter 2025).\" EconTax Blog, Legislative Analyst's Office, 22 Jan. 2026, https://lao.ca.gov/LAOEconTax/Article/Detail/793.",
      },
      {
        title: "Bohn et al. (2020)",
        body:
          "Bohn, Sarah, et al. Income Inequality and Economic Opportunity in California. Public Policy Institute of California, Dec. 2020, https://www.ppic.org/publication/income-inequality-and-economic-opportunity-in-california/.",
      },
      {
        title: "Center for Hunger-Free Communities",
        body:
          "Center for Hunger-Free Communities. \"Minimum Wage Is Not Enough: A True Living Wage Is Necessary to Reduce Poverty and Improve Health.\" Drexel University, 2021, https://drexel.edu/hunger-free-center/research/briefs-and-reports/minimum-wage-is-not-enough/.",
      },
      {
        title: "Chapple, Thomas, and Zuk",
        body:
          "Chapple, Karen, Tim Thomas, and Miriam Zuk. Urban Displacement Project. Urban Displacement Project, 2021, https://www.urbandisplacement.org/.",
      },
      {
        title: "Garcia et al.",
        body:
          "Garcia, David, et al. The Landscape of Middle-Income Housing Affordability in California. Terner Center for Housing Innovation, Apr. 2022, https://ternercenter.berkeley.edu/wp-content/uploads/2022/04/Landscape-of-Middle-Income-Housing-Affordability-April-2022.pdf.",
      },
      {
        title: "Guzman",
        body:
          "Guzman, Carmen. \"Can California Effectively Address Its Racial and Ethnic Wealth Gaps Through the Dream for All Loan?\" Student Policy Research Papers, University of California Office of the President, 1 July 2024, https://escholarship.org/uc/item/65q4b72g.",
      },
      {
        title: "Pang et al.",
        body:
          "Pang, Yali, et al. \"Equity Implications of the Unchanged Federal Minimum Wage Since 2009.\" RISE, Virginia Commonwealth University, Feb. 2025, https://rise.vcu.edu/news/news-posts/equity-implications-of-the-unchanged-federal-minimum-wage-since-2009.html.",
      },
      {
        title: "Schultz",
        body:
          "Schultz, Michael A. \"The Wage Mobility of Low-Wage Workers in a Changing Economy, 1968 to 2014.\" RSF: The Russell Sage Foundation Journal of the Social Sciences, vol. 5, no. 4, Sept. 2019, pp. 159-89, https://doi.org/10.7758/RSF.2019.5.4.06.",
      },
      {
        title: "Thorman and Payares-Montoya",
        body:
          "Thorman, Tess, and Daniel Payares-Montoya. \"Income Inequality in California.\" Public Policy Institute of California, Mar. 2025, https://www.ppic.org/publication/income-inequality-in-california/.",
      },
      {
        title: "U.S. Census Bureau",
        body:
          "United States Census Bureau. \"Census.gov | U.S. Census Bureau Homepage.\" U.S. Census Bureau, https://www.census.gov/. Accessed 14 Mar. 2026.",
      },
    ],
  },
];

function ContentSection({ section }: { section: PageSection }) {
  const hasWrapRightMedia = section.media && section.mediaPlacement === "wrap-right";

  return (
    <section id={section.id} className="content-section">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-part">{section.part}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <h2 className="section-title">{section.title}</h2>
        </ScrollReveal>

        <div className={`section-body${hasWrapRightMedia ? " section-body--with-wrap-media" : ""}`}>
          {hasWrapRightMedia && section.media && (
            <ScrollReveal className="section-media-float" delay={0.1}>
              <figure className="section-media section-media--inline">
                <Image
                  src={section.media.src}
                  alt={section.media.alt}
                  width={section.media.width}
                  height={section.media.height}
                  className="section-media-image"
                />
                {section.media.caption && <figcaption>{section.media.caption}</figcaption>}
              </figure>
            </ScrollReveal>
          )}

          {section.paragraphs.map((paragraph, index) => (
            <ScrollReveal key={paragraph} delay={0.12 + index * 0.08}>
              <p>{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>

        {section.solutionPanels && (
          <div className="solution-panel-grid" style={{ gridTemplateColumns: "1fr" }}>
            {section.solutionPanels.map((panel, index) => (
              <ScrollReveal key={panel.title} delay={0.18 + index * 0.08}>
                <article className="solution-panel">
                  <h3>{panel.title}</h3>
                  <p>{panel.paragraph}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        {section.panelTitle && section.bullets && (
          <ScrollReveal delay={0.18}>
            <div className="bullet-panel">
              <h3>{section.panelTitle}</h3>
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {section.quote && (
          <ScrollReveal delay={0.22}>
            <blockquote className="section-quote">{section.quote}</blockquote>
          </ScrollReveal>
        )}

        {section.cards && (
          <div className="card-grid">
            {section.cards.map((card, index) => (
              <ScrollReveal key={card.title} delay={0.08 + index * 0.08}>
                <article className="info-card">
                  {card.value && <p className="card-value">{card.value}</p>}
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        {section.media && !hasWrapRightMedia && (
          <ScrollReveal delay={0.14}>
            <figure className="section-media">
              <Image
                src={section.media.src}
                alt={section.media.alt}
                width={section.media.width}
                height={section.media.height}
                className="section-media-image"
              />
              {section.media.caption && <figcaption>{section.media.caption}</figcaption>}
            </figure>
          </ScrollReveal>
        )}

        {section.closingNote && (
          <ScrollReveal delay={0.16}>
            <div className="closing-note">{section.closingNote}</div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

export default function Page() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.38,
  });

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} />

      <header className="top-nav">
        <div className="top-nav__inner">
          <a className="brand" href="#home">
            Generational Wealth Crisis
          </a>

          <nav aria-label="Page sections">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a className="nav-link" href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <ScrollReveal duration={0.75} y={20} amount={0.08}>
              <p className="hero-label">Essay III - ENGL 133</p>
            </ScrollReveal>

            <ScrollReveal delay={0.06} duration={0.82} y={24} amount={0.08}>
              <h1>
                The Generational <span>Crisis</span> of Wealth Inequality in California
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.12} duration={0.82} y={20} amount={0.08}>
              <p className="hero-subtitle">
                This project explores how wealth inequality has developed in California, 
                why it has become such a significant challenge for younger generations, 
                and what types of solutions can help restore economic mobility.
                Wealth inequality increasingly restricts economic mobility for young adults 
                nationwide. California must lead reform by implementing a Generational 
                Economic Mobility initiative that mandates paid internships, expands 
                need-based tuition support, and integrates financial literacy education 
                within the UC and CSU. Positioning California as a national model for 
                restoring economic mobility among young adults.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.18} duration={0.78} y={18} amount={0.08}>
              <p className="hero-meta">Emilio Scott, James Barrios, Lucas Garcia, Daniel Aquino • Winter 2026</p>
            </ScrollReveal>
          </div>
        </section>

        <div className="hero-fade" aria-hidden="true" />

        <section id="thesis" className="thesis-section">
          <ScrollReveal duration={0.82} y={18} amount={0.08}>
            <div className="thesis-panel">
              <p className="section-part">Thesis Section</p>
              <h2 className="essay-title">Our Full Thesis Article</h2>

              <article className="thesis-article-body">
                <figure className="thesis-figure">
                  <Image
                    src="/fig_8.gif"
                    alt="Figure 8 county-level map of California income concentration"
                    width={900}
                    height={700}
                    className="thesis-figure-fallback"
                  />
                  <figcaption>
                    Figure 8. County map of California showing how unevenly income is distributed; darker
                    counties indicate a higher share of total 1997 income received by the top 20% of
                    taxpayers.
                  </figcaption>
                </figure>

                <p className="essay-paragraph">
                  For many young people, entering adulthood today looks very different from what previous
                  generations experienced. The cost of attending college continues to rise, housing prices 
                  have skyrocketed, and entry level wages have struggled to keep up with the increased cost 
                  of living, making the transition into financial independence more difficult than it once 
                  was. (California Housing Affordability Tracker (4th Quarter 2025) [EconTax Blog]) Many 
                  young adults are graduating with debt, facing expensive housing markets, and navigating 
                  a workforce where stable wages and long-term career opportunities can be difficult to secure.
                  Throughout the United States, the wealth gap between the highest and lowest 
                  income households has reached historic levels, making it increasingly difficult for young adults 
                  to get a good financial foothold once they enter the ‘real world.’ As opportunity becomes more 
                  closely tied to family wealth rather than talent or effort, states like California have the 
                  opportunity and responsibility to lead reforms to restore economic mobility.
                </p>
                <p className="essay-paragraph">
                    This growing divide raises an important question: if economic opportunity is supposed to reward 
                    hard work and talent, why are so many young people struggling to achieve financial stability? 
                    The answer lies in broader economic conditions that have played a crucial role in widening the 
                    wealth gap over time (California Budget & Policy Center). These conditions affect not only 
                    individuals’ finances but also an entire generation's ability to build a sustainable living.
                    California represents an important case study as the state is home to 
                    some of the largest technology companies and wealthiest communities in the world, such as San Francisco, 
                    Los Angeles, Beverly Hills, and Hollywood, yet it also contains some of the highest housing costs 
                    and levels of income inequality in the country. (California Budget & Policy Center) This contradiction 
                    showcases the central issue explored in this project: how can a state that generates so much economic 
                    wealth still have such a large separation of wealth?
                </p>
                <p className="essay-paragraph">
                  This project explores how wealth inequality has developed in California, why it has become such a 
                  significant challenge for younger generations, and what types of solutions can help restore economic mobility.
                  Wealth inequality increasingly restricts economic mobility for young adults 
                  nationwide. California must lead reform by implementing a Generational Economic Mobility initiative 
                  that mandates paid internships, expands need-based tuition support, and integrates financial literacy 
                  education within the UC and CSU, positioning California as a national model for restoring economic 
                  mobility among young adults.
                </p>
              </article>
            </div>
          </ScrollReveal>
        </section>

        {sections.map((section) => (
          <ContentSection key={section.id} section={section} />
        ))}
      </main>
    </div>
  );
}
