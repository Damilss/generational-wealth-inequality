"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

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
  { id: "home", label: "Home / Thesis" },
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
    paragraphs: [
      "[Use this section to explain where this inequality comes from. Add context about wages, housing costs, and inherited advantages.]",
      "[Add evidence-based details: who is impacted, where, and what trend has changed over time.]",
    ],
    quote:
      "[Insert a bold claim that explains how this system harms communities and blocks long-term stability.]",
    cards: [
      {
        value: "$800K+",
        title: "Example Metric",
        body: "[Replace this with one major housing or cost-of-living statistic.]",
      },
      {
        value: "44%",
        title: "Example Burden",
        body: "[Replace this with one key burden statistic relevant to your argument.]",
      },
      {
        value: "#1",
        title: "Example Rank",
        body: "[Replace this with one ranking or comparison from your sources.]",
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
      "[Insert a transition statement here that moves your argument from impact toward policy action.]",
  },
  {
    id: "change",
    navLabel: "Making a Change",
    part: "Part III",
    title: "What Must Change",
    paragraphs: [
      "[Use this section for your policy recommendations. Explain why these reforms are practical and why California should lead.]",
    ],
    cards: [
      {
        value: "01",
        title: "Education & Financial Literacy",
        body: "[Sample text: outline your first solution and expected outcome.]",
      },
      {
        value: "02",
        title: "Affordable Housing",
        body: "[Sample text: outline your second solution and expected outcome.]",
      },
      {
        value: "03",
        title: "Fair Wages",
        body: "[Sample text: outline your third solution and expected outcome.]",
      },
    ],
    closingNote:
      "[Optional instructor/callout box: reinforce why your proposed plan is timely, achievable, and persuasive.]",
  },
  {
    id: "works-cited",
    navLabel: "Works Cited",
    part: "Part IV",
    title: "Works Cited",
    paragraphs: [
      "[Replace each placeholder with your required citation format for ENGL 133.]",
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
        body: "[Interview, media, lecture, or dataset citation in your required style.]",
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
            Generational Argument
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
              <p className="hero-label">Essay III - English Class</p>
            </ScrollReveal>

            <ScrollReveal delay={0.06} duration={0.82} y={24} amount={0.08}>
              <h1>
                The Generational <span>Crisis</span> of Wealth Inequality in California
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.12} duration={0.82} y={20} amount={0.08}>
              <p className="hero-subtitle">
                [Insert your short thesis preview here. Keep this section clear and direct so readers immediately understand your argument.]
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.18} duration={0.78} y={18} amount={0.08}>
              <p className="hero-meta">Proposal Argument • Spring 2026</p>
            </ScrollReveal>
          </div>
        </section>

        <div className="hero-fade" aria-hidden="true" />

        <section className="thesis-section">
          <ScrollReveal duration={0.82} y={18} amount={0.08}>
            <div className="thesis-panel">
              <p className="section-part">Our Position</p>
              <p className="thesis-text">
                [Place your full thesis statement here. Use 3-5 sentences to clearly state your position, urgency, and your proposal direction.]
              </p>
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
