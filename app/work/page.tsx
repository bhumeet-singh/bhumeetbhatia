"use client";

import { motion } from "framer-motion";

export default function WorkPage() {
  const projects = [
    {
      title: "DVN QA & test automation",
      period: "June 2026 – Present",
      status: "Active",
      description:
        "Led cross-system impact analysis ahead of a September 2026 platform launch, evaluating how defects in one module cascade into donor experience, financial reporting, and cash flow. Authored ~478 test cases and Gherkin-style acceptance criteria across 29 donor-facing pages and the full admin panel. Identified critical defects — including a missing payment-reallocation flow and a silently-dropped donation message — by testing 84 end-to-end donor journeys.",
      tags: ["Playwright", "JavaScript", "Gherkin/BDD", "Agile"],
    },
    {
      title: "Nitnem / Hukamnama tracker",
      period: "In development",
      status: "In progress",
      description:
        "A daily prayer-tracking app, built first for personal use and intended to eventually be shared with Sikh youth peers.",
      tags: ["JavaScript", "Next.js"],
    },
    {
      title: "Motion-detected water dispenser",
      period: "Fall 2025",
      status: "Completed",
      description:
        "Built for the Embedded Software Development course at UMass Amherst — integrated motion sensors with automated dispensing hardware.",
      tags: ["Arduino", "Embedded systems"],
    },
  ];

  const experience = [
    {
      role: "Quality Assurance Intern",
      org: "Dasvandh Network (DVN)",
      period: "June 2026 – Present",
      description:
        "Sikh nonprofit crowdfunding platform. Led cross-system impact analysis, authored test cases and acceptance criteria, and flagged a systemic dev/production environment gap that reshaped the team's testing strategy.",
    },
    {
      role: "Co-Social Media Manager",
      org: "UMass Indian Classical Arts Society (ICAS)",
      period: "May 2026 – Present",
      description:
        "Co-manage Instagram and TikTok content strategy, focusing on outreach and engagement to promote Indian classical arts on campus.",
    },
    {
      role: "Event Coordinator & Advocacy Chair",
      org: "Sikh and Punjabi Association (SPSA)",
      period: "Fall 2025 – Present",
      description:
        "Organize cultural and community events while advocating for Sikh and Punjabi student representation on campus.",
    },
    {
      role: "Teacher's Assistant & Volunteer",
      org: "New England Sikh Study Circle",
      period: "Sept 2022 – Present",
      description:
        "Teach Sikh history and Punjabi language to children. Support the \"Let's Share a Meal\" initiative, packing food for the homeless and needy.",
    },
  ];

  const skills = {
    Languages: ["Python", "Java", "JavaScript", "Arduino"],
    "Tools & frameworks": ["Playwright", "Agile"],
    Other: [
      "Web development",
      "Test case design",
      "QA / manual testing",
      "Acceptance criteria (Given/When/Then)",
      "Data parsing",
    ],
  };

  const awards = [
    "1st prize + $5,000 — \"Spark the Vote\" PSA contest, Nishkam TV (2024)",
    "Member, National Society of Collegiate Scholars",
    "Top-30 finish, state-wide Rubik's Cube competition (WCA)",
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  return (
    <main className="min-h-screen bg-ink text-paper px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <nav className="flex items-center justify-between mb-16 max-w-3xl mx-auto">
          <a
            href="/"
            className="hover:text-paper transition-colors text-sm"
            style={{ color: "#8B8B85" }}
          >
            &larr; home
          </a>
          <a
            href="/tabla"
            className="hover:text-paper transition-colors text-sm"
            style={{ color: "#E0A526" }}
          >
            tabla &rarr;
          </a>
        </nav>

        {/* Hero */}
        <motion.section {...fadeUp} className="mb-24">
          <div
            className="text-teal text-sm mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            &lt;work/&gt;
          </div>
          <h1
            className="text-3xl md:text-4xl mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bhumeet Bhatia
          </h1>
          <p className="text-neutral text-base max-w-xl">
            B.S. Informatics, Data Science Concentration + CS Minor —
            UMass Amherst, Commonwealth Honors College
          </p>
        </motion.section>

        {/* About */}
        <motion.section {...fadeUp} className="mb-24">
          <h2
            className="text-xl mb-8 text-teal"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About
          </h2>
          <div className="space-y-6 text-neutral text-sm leading-relaxed">
            <div>
              <div className="text-paper text-sm mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                Focus
              </div>
              <p>
                QA internship at Dasvandh Network, learning full-stack
                development through a personal project, and coursework
                across data science and computer science.
              </p>
            </div>
            <div>
              <div className="text-paper text-sm mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                Journey
              </div>
              <p>
                Started in QA and testing, which pulled me toward wanting
                to build things myself rather than just test them.
              </p>
            </div>
            <div>
              <div className="text-paper text-sm mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                Looking ahead
              </div>
              <p>
                Full-stack development and QA engineering, with an eye
                toward building tools that are useful to real communities.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section {...fadeUp} className="mb-24">
          <h2
            className="text-xl mb-8 text-teal"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Projects
          </h2>
          <div className="space-y-8">
            {projects.map((p) => (
              <div
                key={p.title}
                className="border border-neutral/20 rounded-lg p-6"
              >
                <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                  <h3 className="text-paper text-base" style={{ fontFamily: "var(--font-display)" }}>
                    {p.title}
                  </h3>
                  <span className="text-neutral text-xs">{p.period}</span>
                </div>
                <p className="text-neutral text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-teal border border-teal/30 rounded px-2 py-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section {...fadeUp} className="mb-24">
          <h2
            className="text-xl mb-8 text-teal"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((e) => (
              <div key={e.role} className="border-l border-neutral/20 pl-6">
                <div className="flex items-baseline justify-between mb-1 flex-wrap gap-2">
                  <h3 className="text-paper text-base" style={{ fontFamily: "var(--font-display)" }}>
                    {e.role}
                  </h3>
                  <span className="text-neutral text-xs">{e.period}</span>
                </div>
                <div className="text-teal text-xs mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                  {e.org}
                </div>
                <p className="text-neutral text-sm leading-relaxed">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section {...fadeUp} className="mb-24">
          <h2
            className="text-xl mb-8 text-teal"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills
          </h2>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <div className="text-paper text-sm mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                  {category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-neutral border border-neutral/20 rounded px-2 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Awards */}
        <motion.section {...fadeUp} className="mb-24">
          <h2
            className="text-xl mb-8 text-teal"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Awards
          </h2>
          <ul className="space-y-3">
            {awards.map((a) => (
              <li key={a} className="text-neutral text-sm flex gap-3">
                <span className="text-teal">—</span>
                {a}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Contact */}
        <motion.section {...fadeUp}>
          <h2
            className="text-xl mb-6 text-teal"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact
          </h2>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bhumeetsb@gmail.com"
              target="_blank"
              className="text-neutral hover:text-paper transition-colors"
            >
              bhumeetsb@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/bhumeet-singh" className="text-neutral hover:text-paper transition-colors">
              linkedin.com/in/bhumeet-singh
            </a>
            <a href="https://github.com/bhumeet-singh" className="text-neutral hover:text-paper transition-colors">
              github.com/bhumeet-singh
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}