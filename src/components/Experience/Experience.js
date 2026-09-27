import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Experience.scss";

const experiencesData = [
  {
    id: "rippling",
    company: "Rippling",
    role: "Software Engineer - AI Platforms and Infrastructure",
    date: "Apr 2026 – Present |",
    location: "📍 Bangalore, India",
    cardClass: "rippling-card",
    bullets: [
      "Built Sandbox Scheduled Refreshes, enabling customers to schedule one-time or recurring sandbox refreshes with cooldown behavior, pause/edit flows, and automatic cleanup of consumed one-time schedules.",
      "Designed and implemented Notification Preferences in Rippling AI Assistant enabling users to read, preview, and update notification preferences through Object Graph/DDA, vTables, AI skill routing, and guarded write actions.",
      "Contributed to Communication Engine core platform work, improving CSV validation, recipient sendability logic, approval flows, and company-resolution behavior.",
      "Delivered Bulk Unsubscribe for User Notification Preferences to GA, building one-click bulk unsubscribe/subscribe workflows; reduced a high-friction settings workflow from hundreds of manual toggles to a single bulk action.",
      "Built company-level Designated Recipients flows for Notifications, enabling admins to override Rippling defaults and configure SuperGroup-based routing for eligible company notifications.",
      "Improved production scalability and reliability of notification backend services handling 10K+ QPS by tuning Kubernetes autoscaling, resource requests/limits, health checks, and Helm-managed configuration for bursty notifications.",
    ],
  },
  {
    id: "morgan-stanley-se",
    company: "Morgan Stanley",
    role: "Software Engineer - Distributed Systems",
    date: "Aug 2024 – Feb 2026 |",
    location: "📍 Bangalore, India",
    cardClass: "ms-card",
    bullets: [
      "Developed a distributed KYC onboarding platform using a microservices architecture (Spring Boot/Angular), reducing manual verification by 40% via a decision-tree UI.",
      "Implemented eCentral-based access control into the Client Onboarding platform, ensuring compliance and preventing unnecessary data manipulation across departments.",
      "Instead of humans reading 50-page legal articles for every new country, I built an IR system, “Doc Forecaster” using RAG that automatically extracts required document checklists based on regional laws. This increased task automation and prevented onboarding restarts caused by missing paperwork.",
    ],
  },
  {
    id: "morgan-stanley-intern",
    company: "Morgan Stanley",
    role: "Software Engineer Intern",
    date: "Jan 2024 – Jul 2024 |",
    location: "📍 Bangalore, India",
    cardClass: "ms-intern-card",
    bullets: [
      "Built a scalable data quality framework that gathers metadata from multiple data sources and identifies discrepancies in 30 million+ Client/Contact records, reducing manual reconciliation by 45%.",
      "Architected an E3 entitlement-based Data Quality Dashboard to visualize current vs. expected client states and resolve discrepancies directly via UI, reducing resolution turnaround time.",
    ],
  },
];

function Experience() {
  const [letterClass, setLetterClass] = useState("text-animate");
  // Default to first card open (0). Change to null if you want all collapsed initially.
  const [expandedIndex, setExpandedIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="experience-page">
      {/* Decorative HTML Tags */}
      <span className="experience-tag experience-top-html">&lt;html&gt;</span>
      <span className="experience-tag experience-top-body">&lt;body&gt;</span>

      <main className="experience-content">
        {/* Page Title */}
        <h1 className="experience-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
            idx={15}
          />
        </h1>

        {/* Interactive Cards List */}
        <div className="experience-list">
          {experiencesData.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <section
                key={exp.id}
                className={`experience-entry ${exp.cardClass} ${
                  isExpanded ? "expanded" : ""
                }`}
                onClick={() => toggleCard(index)}
              >
                <div className="experience-header">
                  <div className="experience-company-block">
                    <h2>{exp.company}</h2>
                    <h3>{exp.role}</h3>
                  </div>

                  <div className="experience-meta">
                    <span className="date-badge">{exp.date}</span>
                    <span className="location">{exp.location}</span>
                    <span className="chevron-icon">
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  </div>
                </div>

                {isExpanded && (
                  <div className="experience-body">
                    <ul className="experience-bullets">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </main>

      {/* Bottom HTML Tags */}
      <span className="experience-tag experience-bottom-tags">
        &lt;/body&gt;
        <br />
        <span className="experience-bottom-html">&lt;/html&gt;</span>
      </span>
    </div>
  );
}

export default Experience;
