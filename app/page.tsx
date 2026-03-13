"use client";

import { addScaleCorrector, motion, useScroll, useSpring } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

type StatCard = {
  value?: string;
  title: string;
  body: string;
};

type PageSection = {
  id: string;
  navLabel: string;
  part: string;
  title: string;
  paragraphs: string[];
  quote?: string;
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
  { id: "change", label: "Making a Change" },
  { id: "works-cited", label: "Works Cited" },
];

const sections: PageSection[] = [
  {
    id: "issue",
    navLabel: "Why Is This an Issue?",
    part: "Part I",
    title: "The Roots of the Crisis",
    paragraphs: ["California, a state often viewed as a place of oppoortunity, innocations, and economic \
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
      ""
    ],
    quote:
      "[Insert a bold claim that explains how this system harms communities and blocks long-term stability.]",
    cards: [
      {
        value: "$800K+",
        title: "Example Metric",
        body: "[Replace this with any information we've found from articles or evidence.]",
      },
      {
        value: "44%",
        title: "Example Burden",
        body: "[Replace this with any information we've found from articles or evidence.]",
      },
      {
        value: "#1",
        title: "Example Rank",
        body: "[Replace this with any information we've found from articles or evidence.]",
      },
    ],
  },
  {
    id: "solutions",
    navLabel: "Solutions",
    part: "Part II",
    title: "A Generation Feeling the Impact",
    paragraphs: [
      "[Describe how this crisis affects young adults in everyday life: education, housing, jobs, and family milestones.]",
      "[Connect personal impact to larger systems so readers understand why this is structural, not individual failure.]",
    ],
    panelTitle: "Ripple Effects",
    bullets: [
      "[Mental Health: add one sentence about stress, uncertainty, and long-term pressure.]",
      "[Social Mobility: add one sentence about blocked opportunity and limited upward movement.]",
      "[Trust in Institutions: add one sentence about losing confidence in systems.]",
    ],
    quote:
      "[Insert a transition statement here that moves our argument from impact toward policy action.]",
  },
  {
    id: "change",
    navLabel: "Making a Change",
    part: "Part III",
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
    id: "works-cited",
    navLabel: "Works Cited",
    part: "Part IV",
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
              <p className="hero-meta">Emilio Scott, James Barrios, Lucas Garcia, Daniel • Winter 2026</p>
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
                  <figcaption>Figure 8. [Replace with your source caption and citation.]</figcaption>
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
