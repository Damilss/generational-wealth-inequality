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
  { id: "change", label: "Making a Change" },
  { id: "conclusion", label: "Conclusion" },
  { id: "works-cited", label: "Works Cited" },
];

const sections: PageSection[] = [
  {
    id: "issue",
    navLabel: "Why Is This an Issue?",
    part: "Part I",
    title: "The Roots of the Crisis",
    paragraphs: ["California, a state often viewed as a place of oppoortunity, innovfations, and economic \
      success. However, this relentless effort for economic success has created wealth inequality that is \
      increasingly affecting younger generations. While the state continues to generate enormous wealth, \
      young californians are finding it harder than ever to achieve finanical independence or build long \
      term stability. Wealth inequality is no longer just an economic statistic, but an issue shaping the \
      opportunities available to people in our generation.",
      "For many young adults, one of the first realities of this inequality appears in the housing market. \
      California has some of the most expensive real estate in the Unites States. and the cost of living \
      continues to rise faster than wages for many workes. Owning a home, something that was once seen as \
      a major milestone for adulthood, now feels out of reach for many poeple. Even renting can be extremely \
      difficult for individuals espeically in large cities. As a result, many young adults remain financially \
      depedent longer than previous generations or delay important life decisions like moving out, starting \
      families, or investing due to these prices.",
      "A major driver of this issue is the relationship between housing costs and stagnant wages for many \
      workers. While real estate prices across the nation and in California have risen dramatically over \
      the past several decades, many jobs have not experiences the same level of income growth. This \
      imbalance makes homeownership more and more difficult for middle and lower income individuals/families. \
      For individuals without access to generational wealth or financial resources, such as many young people, \
      face major barriers when trying to save money, build assets, or invest in their future.",
      "Another factor that continues to widen this gap is generational wealth. Which refers to families who \
      already possess financial resources with the ability to pass those advantages on to their children \
      through property, investments, or financial support. These resources can help younger generations \
      afford education, the path toward economic mobility becomes far more challenging. Without access to \
      strong financial education or economic opportunities early in life, many people enter adulthood already \
      facing structural disadvantages.",
      "Wealth inequality also contributes to broader social challenges such as gentrification, where wealthier \
      residents move into communities and property values increase, resulting in forcing long time residents \
      out. In many cases neighborhoods that were once home to working class families are transformed into \
      spaces that are no longer affordable for the people who originally lived there. Urban Studies research \
      shows that gentrification can lead to displacement, community, fragmentation, and increased housing \
      instability for lower income residents (Urban Displacement - the Project Aims to Understand the Nature \
      of Gentrification, and Displacement, and Exclusion in American Cities.)",
      "The consequences of wealth inequality are becoming more and more visible among younger generations. \
      Many young adults are delaying major milestones such as moving out of their parents homes, purchasing \
      homes, getting married, or starting their own families. Which is shown by recent data illustrating \
      that the percentage of young adults living with their parents is at one of the highest levels in modern \
      history. Which is laregely due to the economic pressures like housing costs and student debt. (US Census \
      Bureau)",
      "Another consequence is the effect economic inequality has on people's mental and social well being. \
      Financial instability can create uncertainty for the future, increasing stress especially those who \
      feel that hard work alone is no longer enough to reach stability. Research in social science has shown \
      that greater income inequality in a society is linked to higher levels of financial stress. (Urban \
      Displacement - the Project Aims to Understand the Nature of Gentrification, and Displacement, and \
      Exclusion in American Cities.)",
      "For these reasons, wealth inequality in California must be understood as more than an economic \
      imbalance. it represents a growing challenge for younger generations that affects economic \
      mobility, stability, and long-term well-being of younger generations.",
    ],
    media: {
      src: "/MWStateMap.png",
      alt: "Map visual related to wealth inequality across California",
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
      "[Use this short intro to frame your proposed path forward before the two full solutions below.]",
    ],
    solutionPanels: [
      {
        title: "Solution 1",
        paragraph: `Solution 1 (State): Having California expand state-fund tuition assistance and financial literacy programs at public universities to prevent wealth inequality from compounding across generations.

Addressing generational wealth inequality requires much more than just a late housing intervention. Guzman’s analysis of California's Dream for All loan programs highlights that such programs can assist, yet their reach remains minimal. The program was “exhausted in 11 days, distributing $288 million to support the purchase of about 2500 homes" (Guzman 2) and was only granted in “10 counties" (Guzman 2) across California. In the end, Guzman concludes that the program influences “less than 1% of buyers" (8) and “will not be a cure-all for the crisis" (18).
These discoveries imply that interventions occurring later in adulthood, such as homeownership subsidies, may not be adequate to close generational wealth gaps. Research quoted in the study further establishes that wealth disparities grow significantly during early adulthood. As noted in the literature review, “By age 30, the Black-white median wealth gap exceeds $21,000" (Guzman 7). This broadening gap highlights the magnitude of intervening before economic inequality compounds.
California can intervene earlier in the life cycle by developing need-based tuition assistance within the UC and CSU systems. Lowering student debt for first-generation and low-income students reduces additional burdens in the critical transition into the workforce. Furthermore, introducing mandatory financial literacy education would address the exclusion created by the financial systems that have historically shaped wealth gaps. Guzman illuminates redlining, “created a structure that incentivized housing discrimination" (1), demonstrating how policy-driven exclusion built a limit on access to financial opportunity. Guaranteeing universal financial education would help address those historical disadvantages.
By shifting intervention to the educational level, California can move to address those inequalities before they solidify into long-term wealth disparities. (269 words)`,
      },
      {
        title: "Solution 2",
        paragraph:
          `Solution 2 (Nationwide): Increase Federal Minimum Wage Nationwide and improve workers' rights
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
 their employees. Some may argue that the increase in minimum wage could have a detriment towards small 
 businesses, however this can be mitigated by implementing federal support programs for small businesses. 
 An increased minimum wage may also improve productivity amongst workers. Additionally, strengthening workers’ 
 rights by expanding labor protections for entry-level employees and interns would help ensure that labor 
 contributes to increasing wealth instead of reinforcing income inequality. As well as forming new worker’s 
 unions in fields that have yet to form any would further improve workers’ rights and would also improve 
 working conditions.Educational reforms address access to economic mobility prior to a person entering the 
 workforce full-time as well as giving them knowledge of how to properly handle their own finances. This 
 alone would not be enough but with the proposed federal wage changes, and improved workers rights 
 California, and the rest of the United States would see a decrease in the wealth gap that we currently 
 are being affected by.Many people and primarily large corporations will see these attempts at raising 
 wages and improving workers’ rights as a threat to their income. In order to be able to properly implement 
 change the people have to speak out and reach out to their representatives in order to see true change. (465)
`,
      },
    ],
    quote:
      "[Insert a bold claim that explains how this system harms communities and blocks long-term stability.]",
  },
  {
    id: "counterargument",
    navLabel: "Counterargument",
    part: "Part III",
    title: "Addressing the Counterargument",
    paragraphs: [
      "[Add the strongest opposing view here. Explain why some people argue this inequality is normal or unavoidable.]",
      "[Rebut that view with evidence and logic to show why structural change is still necessary.]",
    ],
  },
  {
    id: "change",
    navLabel: "Making a Change",
    part: "Part IV",
    title: "What Must Change",
    paragraphs: [
      "[Use this section for our policy recommendations. Explain why these reforms are practical and why California should lead.]",
    ],
    cards: [
      {
        value: "01",
        title: "Education & Financial Literacy",
        body: "[Sample text: outline our first solution and expected outcome.]",
      },
      {
        value: "02",
        title: "Affordable Housing",
        body: "[Sample text: outline our second solution and expected outcome.]",
      },
      {
        value: "03",
        title: "Fair Wages",
        body: "[Sample text: outline our third solution and expected outcome.]",
      },
    ],
    closingNote:
      "[Optional instructor/callout box: reinforce why our proposed plan is timely, achievable, and persuasive.]",
  },
  {
    id: "conclusion",
    navLabel: "Conclusion",
    part: "Part V",
    title: "Conclusion",
    paragraphs: [
      "[Use this section to restate your core claim and explain why your proposed solutions are urgent, practical, and necessary.]",
      "[Close with a strong final takeaway that emphasizes long-term impact for younger generations in California and beyond.]",
    ],
  },
  {
    id: "works-cited",
    navLabel: "Works Cited",
    part: "Part VI",
    title: "Works Cited",
    paragraphs: [
      "[Replace each placeholder with our required citation format for ENGL 133.]",
    ],
    cards: [
      {
        title: "Citation Placeholder 1",
        body: "[Author Last Name, First Name. \"Title of Source.\" Publication, Date, URL.]",
      },
      {
        title: "Citation Placeholder 2",
        body: "[Organization. \"Report or Article Title.\" Publisher, Date, URL.]",
      },
      {
        title: "Citation Placeholder 3",
        body: "[Interview, media, lecture, or dataset citation in our required style.]",
      },
    ],
  },
];

function ContentSection({ section }: { section: PageSection }) {
  return (
    <section id={section.id} className="content-section">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-part">{section.part}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <h2 className="section-title">{section.title}</h2>
        </ScrollReveal>

        <div className="section-body">
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

        {section.media && (
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
                    alt="Figure 8 placeholder visual"
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
                  of living. Making the transition into financial independence more difficult than it once 
                  was. (California Housing Affordability Tracker (4th Quarter 2025) [EconTax Blog]) Many 
                  young adults are graduating with debt, facing expensive housing markets, and navigating 
                  a workforce where stable wages and long-term career opportunities can be difficult to secure.
                  (National context) Throughout the United States, the wealth gap between the highest and lowest 
                  income households has reached historic levels, making it increasingly difficult for young adults 
                  to get a good financial foothold once they enter the ‘real world.’ As opportunity becomes more 
                  closely tied to family wealth rather than talent or effort, states like California have the 
                  opportunity and responsibility to lead reforms to restore economic mobility.
                </p>
                <p className="essay-paragraph">
                    This growing divide raises an important question: if economic opportunity is supposed to reward 
                    hard work and talent, why are so many young people struggling to achieve financial stability? 
                    The answer lies in broader economic conditions that have played a crucial role in widening the 
                    wealth gap over time(California Budget & Policy Center). These conditions affect not only 
                    individuals’ finances but also an entire generation's ability to build a sustainable living.
                    (Why california Matters) California represents an important case study as the state is home to 
                    some of the largest technology companies and wealthiest communities in the world, such as San Francisco, 
                    Los Angeles, Beverly Hills, Hollywood,etc…, and yet it also contains some of the highest housing costs 
                    and levels of income inequality in the country. (California Budget & Policy Center) This contradiction 
                    showcases the central issue explored in this project: how can a state that generates so much economic 
                    wealth still have such a large separation of wealth?
                </p>
                <p className="essay-paragraph">
                  This project explores how wealth inequality has developed in California, why it has become such a 
                  significant challenge for younger generations, and what types of solutions can help restore economic mobility.
                  (Thesis/ call to action) Wealth inequality increasingly restricts economic mobility for young adults 
                  nationwide. California must lead reform by implementing a Generational Economic Mobility initiative 
                  that mandates paid internships, expands need-based tuition support, and integrates financial literacy 
                  education within the UC and CSU. Positioning California as a national model for restoring economic 
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
