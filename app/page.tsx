"use client";

import { motion, useScroll, useSpring } from "framer-motion";

type SectionData = {
  id: string;
  navLabel: string;
  kicker: string;
  title: string;
  lead: string;
  tone: "sage" | "sand" | "slate" | "clay" | "neutral";
  cards: Array<{
    heading: string;
    body: string;
  }>;
};

const sections: SectionData[] = [
  {
    id: "home",
    navLabel: "Home / Thesis",
    kicker: "Section 01",
    title: "Home Page / Thesis",
    lead: "Use this opening section for your core thesis statement. Keep your strongest claim here, then connect it to why your audience should care right away.",
    tone: "sage",
    cards: [
      {
        heading: "Thesis Draft Space",
        body: "[Write your full thesis here. Aim for 2-4 sentences that name the issue, audience, and your proposed change.]",
      },
      {
        heading: "Lead-In Evidence",
        body: "[Add one key statistic, quote, or context sentence that frames the urgency of generational wealth inequality.]",
      },
      {
        heading: "Rhetorical Purpose",
        body: "[Explain what this page argues and how your multilingual rhetoric approach strengthens the message.]",
      },
    ],
  },
  {
    id: "issue",
    navLabel: "Why Is This an Issue?",
    kicker: "Section 02",
    title: "Why Is This an Issue?",
    lead: "Build the problem section with clear, specific harms. Show how wealth inequality limits opportunity and why this matters for your chosen communities.",
    tone: "sand",
    cards: [
      {
        heading: "Current Conditions",
        body: "[Describe the current inequality pattern and include dates, location, and who is impacted most.]",
      },
      {
        heading: "Human Impact",
        body: "[Add a short lived-example or narrative showing how this issue affects students, workers, or families.]",
      },
      {
        heading: "Rhetorical Framing",
        body: "[Explain how language choices in media or policy shape the way this issue is understood.]",
      },
    ],
  },
  {
    id: "solutions",
    navLabel: "Solutions",
    kicker: "Section 03",
    title: "Solutions",
    lead: "Present practical and persuasive solutions. Keep each solution direct, feasible, and tied to evidence your audience can trust.",
    tone: "slate",
    cards: [
      {
        heading: "Policy Option A",
        body: "[Insert your first proposed policy action and explain why it can realistically be adopted.]",
      },
      {
        heading: "Policy Option B",
        body: "[Insert your second solution and include expected outcomes for young adults.]",
      },
      {
        heading: "Institutional Action",
        body: "[Describe what schools, colleges, or community institutions can do immediately.]",
      },
    ],
  },
  {
    id: "change",
    navLabel: "Making a Change",
    kicker: "Section 04",
    title: "Making a Change",
    lead: "Turn your argument into action. This section should help readers know what to do next and why their participation matters.",
    tone: "clay",
    cards: [
      {
        heading: "Who Needs to Act",
        body: "[Identify decision-makers, community groups, and student voices that should be mobilized.]",
      },
      {
        heading: "Action Plan",
        body: "[List concrete next steps: advocacy, outreach, campus action, multilingual campaign material, or policy testimony.]",
      },
      {
        heading: "Call to Engagement",
        body: "[Write your final persuasive push. Explain what readers can do this week to support your argument.]",
      },
    ],
  },
  {
    id: "works-cited",
    navLabel: "Works Cited",
    kicker: "Section 05",
    title: "Works Cited",
    lead: "Use this final section to store and format your references. Replace each placeholder with your official citation style for ENGL 133.",
    tone: "neutral",
    cards: [
      {
        heading: "Citation Placeholder 1",
        body: "[Author Last Name, First Name. \"Title of Source.\" Publication, Date, URL or DOI.]",
      },
      {
        heading: "Citation Placeholder 2",
        body: "[Organization or Author. \"Report or Article Title.\" Site/Journal, Date, Accessed Date.]",
      },
      {
        heading: "Citation Placeholder 3",
        body: "[Interview, dataset, lecture, or media citation in your required citation format.]",
      },
    ],
  },
];

function NarrativeSection({
  section,
}: {
  section: SectionData;
}) {
  return (
    <motion.section
      id={section.id}
      className={`story-section story-section--${section.tone}`}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-panel">
        <p className="section-kicker">{section.kicker}</p>
        <h2 className="section-title">{section.title}</h2>
        <p className="section-lead">{section.lead}</p>

        <div className="section-grid">
          {section.cards.map((card, index) => (
            <motion.article
              key={card.heading}
              className="section-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <h3>{card.heading}</h3>
              <p>{card.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function Page() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} />

      <header className="top-nav">
        <div className="top-nav__inner">
          <a className="brand" href="#home">
            Generational Wealth & Mobility
          </a>

          <nav aria-label="Main page sections">
            <ul className="nav-links">
              {sections.map((section) => (
                <li key={section.id}>
                  <a className="nav-link" href={`#${section.id}`}>
                    {section.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {sections.map((section) => (
          <NarrativeSection key={section.id} section={section} />
        ))}
      </main>
    </div>
  );
}
