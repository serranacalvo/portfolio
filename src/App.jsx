import { useState } from "react";
import {
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

const profile = {
  name: "Serrana Calvo",
  title: "Software Developer & Project Lead",
  role: "Backend developer, product-minded lead, and delivery partner.",
  summary:
    "I build digital products with a focus on backend systems, integrations, and team coordination. I like turning complex requirements into clear deliverables and helping systems reach production with strong technical judgment.",
  contact: [
    {
      label: "Email",
      value: "serricalvo12@gmail.com",
      copyValue: "serricalvo12@gmail.com",
      href: "mailto:serricalvo12@gmail.com",
      Icon: IconMail,
    },
    {
      label: "Phone / WhatsApp",
      value: "+598 94 299 485",
      href: "https://wa.me/59894299485",
      copyValue: "+59894299485",
      Icon: IconBrandWhatsapp,
      whatsapp: true,
    },
    { label: "Location", value: "Montevideo, Uruguay", Icon: IconMapPin },
    {
      label: "LinkedIn",
      value: "in/serranacalvo",
      copyValue: "linkedin.com/in/serranacalvo",
      href: "https://linkedin.com/in/serranacalvo",
      Icon: IconBrandLinkedin,
      username: true,
    },
    {
      label: "GitHub",
      value: "@serranacalvo",
      copyValue: "serranacalvo",
      href: "https://github.com/serranacalvo",
      Icon: IconBrandGithub,
      username: true,
    },
  ],
};

const highlights = [
  "Hexagonal architecture, DDD, and RESTful APIs with Node.js.",
  "TypeScript, NestJS, Docker, PostgreSQL, and Jest testing.",
  "Agile team leadership, product ownership, and remote coordination.",
  "Automation, bots, and business-oriented integration solutions.",
];

const metrics = [
  { value: "5+", label: "years of experience" },
  { value: "Backend-first", label: "product-minded" },
  { value: "Code, leadership", label: "& delivery" },
  { value: "Remote-ready", label: "Montevideo-based" },
];

const projects = [
  {
    name: "Modular NestJS API",
    description:
      "Design and implementation of scalable backend services using hexagonal architecture, design patterns, PostgreSQL, and automated testing.",
    tags: ["TypeScript", "NestJS", "PostgreSQL", "Testing"],
  },
  {
    name: "COVID-19 Vaccination Chatbot",
    description:
      "National WhatsApp solution for vaccination scheduling, integrating legacy systems and supporting high availability requirements.",
    tags: ["WhatsApp", "Chatbot", "Automation", "Integrations"],
  },
  {
    name: "Remote Startup Platform",
    description:
      "Fullstack development and delivery leadership for a B2B product, managing releases and coordination across time zones.",
    tags: ["Node.js", "JavaScript", "Remote management", "Quality"],
  },
];

const experience = [
  {
    role: "Back End Developer",
    company: "Pormel S.A.",
    period: "Sep 2025 - Present",
    details: [
      "Built backend solutions with Node.js, TypeScript, and NestJS.",
      "Applied hexagonal architecture, DDD, and patterns such as Specification, Strategy, Policy, and Chain of Responsibility.",
      "Designed RESTful APIs and integrations with Postgres, Jest testing, and Docker deployments.",
      "Coordinated work through Jira and collaborated closely with frontend, QA, and stakeholders.",
    ],
  },
  {
    role: "Product Owner",
    company: "Movistar (Telefonica Hispam)",
    period: "Apr 2023 - Mar 2024",
    details: [
      "Managed backlog, user stories, and value-based prioritization.",
      "Facilitated Agile ceremonies and team coordination.",
      "Acted as a bridge between stakeholders and technical teams.",
    ],
  },
  {
    role: "Project Leader & Fullstack Developer",
    company: "Hey Now Bots (Quantik Group)",
    period: "Jan 2020 - Feb 2022",
    details: [
      "Developed PHP, Node.js, and JavaScript solutions for bots, shell scripts, and automation.",
      "Built REST APIs, integrations, and MongoDB-based solutions.",
      "Worked on HTML interfaces, process automation, and remote service deployments.",
    ],
  },
];

const education = [
  {
    title: "Systems Engineering",
    institution: "ORT University Uruguay",
    period: "Current Student",
  },
  {
    title: "Computer Engineering",
    institution: "University of the Republic (Uruguay)",
    period: "2017 - 2019",
  },
  {
    title: "Electrical Engineering",
    institution: "University of the Republic (Uruguay)",
    period: "2012 - 2016",
  },
];

const certifications = [
  {
    title: "Project Management Professional (PMP)",
    issuer: "Project Management Institute (PMI)",
    issueDate: "01 March 2024",
    expirationDate: "01 March 2027",
    certificateId: "3783245",
    badge: "/images/badges/PMP.png",
    certificateUrl: "/certificates/Certificate_6633764_03042024.pdf",
    verifyUrl:
      "https://www.pmi.org/certifications/certification-resources/registry",
    verifyLabel: "Validate with PMI",
    note: "PMI provides an official registry for active and retired credentials.",
  },
  {
    title: "Scrum Product Owner Professional Certificate (SPOPC)",
    issuer: "Certiprof",
    issueDate: "12 March 2024",
    certificateCode: "TLGQKKHLGZ-QQWXSMTX-RDKLJKJTSK",
    badge: "/images/badges/SPOPC.png",
    certificateUrl: "/certificates/Certificate-Serrana-Calvo_SPOPC.pdf",
    verifyUrl: "https://certiprof.com/pages/faq",
    verifyLabel: "Validate with CertiProf",
  },
  {
    title: "Scrum Developer Professional Certificate (SDPC)",
    issuer: "Certiprof",
    issueDate: "12 March 2024",
    certificateCode: "TLGQKKGTGZ-QQWXTPTX-RDKLJKSLRT",
    badge: "/images/badges/SDPC.png",
    certificateUrl: "/certificates/Certificate-Serrana-Calvo_SDPC.pdf",
    verifyUrl: "https://certiprof.com/pages/faq",
    verifyLabel: "Validate with CertiProf",
  },
  {
    title: "Scrum Master Professional Certificate (SMPC)",
    issuer: "Certiprof",
    issueDate: "12 March 2024",
    certificateCode: "CLBDQQQPPB-GGJZLJJG-XTWCPCSSTH",
    badge: "/images/badges/SMPC.png",
    certificateUrl: "/certificates/Certificate-Serrana-Calvo_SMPC.pdf",
    verifyUrl: "https://certiprof.com/pages/faq",
    verifyLabel: "Validate with CertiProf",
  },
  {
    title: "Scrum Master Professional Certificate (SMPC)",
    issuer: "Certiprof",
    issueDate: "04 January 2024",
    certificateCode: "CLBYVVRPSD-GLKGQGGQ-XTWXPWCCCM",
    badge: "/images/badges/SMPC.png",
    certificateUrl:
      "/certificates/Certificate Scrum Master Professional Certificate (SMpc) - CertiProf.pdf",
    verifyUrl: "https://certiprof.com/pages/faq",
    verifyLabel: "Validate with CertiProf",
  },
  {
    title: "Scrum Foundation Professional Certificate (SFPC)",
    issuer: "Certiprof",
    issueDate: "02 January 2024",
    certificateId: "92941614",
    badge: "/images/badges/SFPC.png",
    certificateUrl: "/certificates/Certificate Scrum Fundation - CertiProf.pdf",
    verifyUrl: "https://certiprof.com/pages/faq",
    verifyLabel: "Validate with CertiProf",
  },
  {
    title: "Scrum Master Qualified (SMQ)",
    issuer: "PMLA",
    issueDate: "01 January 2024",
    note: "16-hour certification according to the PMLA certificate.",
    badge: "/images/badges/SMQ.png",
    certificateUrl:
      "/certificates/Certificate Scrum Master Qualified (SMQ) - PMLA.pdf",
    verifyUrl:
      "https://www.credly.com/org/pmla/badge/scrum-master-qualified-smq",
    verifyLabel: "View PMLA credential",
  },
  {
    title: "PMP - CAPM Exam Preparation",
    issuer: "PMLA / PMI Authorized Training Partner",
    issueDate: "12 February 2024",
    note: "Achievement certificate for 40 contact hours.",
    badge:
      "/images/badges/curso-para-la-preparacion-pmp-y-capm-oficial-pmi.png",
    certificateUrl:
      "/certificates/Curso para la preparación PMP y CAPM oficial PMI.pdf",
    verifyUrl: "https://pmla.biz/",
    verifyLabel: "View PMLA",
  },
  {
    title: "Business Intelligence Foundation Professional Certificate (BIFPC)",
    issuer: "Certiprof",
    issueDate: "25 September 2024",
    expirationDate: "25 September 2027",
    certificateId: "100432042",
    badge:
      "/images/badges/business-intelligence-foundation-professional-certi.png",
    certificateUrl: "/certificates/Certificate-Serrana-Calvo_BIFPC.pdf",
    verifyUrl: "https://certiprof.com/pages/faq",
    verifyLabel: "Validate with CertiProf",
  },
  {
    title: "Inventory Management Analyst Professional Certification (IMAPC)",
    issuer: "Certiprof",
    issueDate: "25 September 2024",
    certificateCode: "JLRKKSTSDHR-WTCNHCNHW-YQSGRYBYRS",
    badge:
      "/images/badges/inventory-management-analyst-professional-certifica.1.png",
    certificateUrl: "/certificates/Certificate-Serrana-Calvo_IMAPC.pdf",
    verifyUrl: "https://certiprof.com/pages/faq",
    verifyLabel: "Validate with CertiProf",
  },
];

const languages = [
  {
    title: "IELTS Academic",
    issuer: "British Council / IDP / Cambridge",
    issueDate: "22 May 2024",
    level: "C1",
    score: "Band 7.5",
    certificateUrl: "/certificates/NZ15124500378-22-05-2024-ETRF.pdf",
  },
  {
    title: "First Certificate in English (FCE)",
    issuer: "Cambridge Assessment English",
    issueDate: "October 2022",
    level: "B2",
    certificateUrl: null,
  },
];

const skills = {
  core: [
    "Node.js",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Jest",
    "MongoDB",
    "Redis",
  ],
  tools: ["NestJS", "Jira", "Scrum", "Azure DevOps", "Figma"],
};

const techSkills = [
  { label: "Node.js", icon: "/images/tech/nodejs.svg" },
  { label: "TypeScript", icon: "/images/tech/typescript.svg" },
  { label: "JavaScript", icon: "/images/tech/javascript.svg" },
  { label: "PostgreSQL", icon: "/images/tech/postgresql.svg" },
  { label: "Docker", icon: "/images/tech/docker.svg" },
  { label: "NestJS", icon: "/images/tech/nestjs.svg" },
  { label: "Jira", icon: "/images/tech/jira.svg" },
  { label: "Azure DevOps", icon: "/images/tech/azure-devops.svg" },
  { label: "Figma", icon: "/images/tech/figma.svg" },
  { label: "MongoDB", icon: "/images/tech/mongodb.svg" },
  { label: "Jest", icon: "/images/tech/jest.svg" },
  { label: "Redis", icon: "/images/tech/redis.svg" },
];

function SectionHeading({ children, eyebrow }) {
  return (
    <div className="section-heading">
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{children}</h2>
    </div>
  );
}

function CopyIconButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      className={`icon-btn${copied ? " icon-btn--copied" : ""}`}
      onClick={handleCopy}
      title="Copy"
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

function ExternalLinkButton({ href }) {
  return (
    <a
      href={href}
      className="icon-btn"
      target="_blank"
      rel="noreferrer"
      title="Open link"
      aria-label="Open in new tab"
      onClick={(e) => e.stopPropagation()}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  );
}

function ContactCard({ item }) {
  const hasLink = !!item.href;
  const hasCopy = !!item.copyValue;
  const hasActions = hasLink || hasCopy;
  const { Icon } = item;

  return (
    <div className="contact-card-v2">
      <span className="contact-icon-v2" aria-hidden="true">
        {Icon && <Icon size={20} stroke={1.5} />}
      </span>
      <div className="contact-info-v2">
        <span className="contact-card-label">{item.label}</span>
        {hasLink ? (
          <a
            href={item.href}
            className="contact-card-value contact-card-value--link"
            target={item.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
          >
            {item.value}
          </a>
        ) : (
          <strong className="contact-card-value">{item.value}</strong>
        )}
      </div>
      {hasActions && (
        <div className="contact-card-actions">
          {hasCopy && <CopyIconButton text={item.copyValue} />}
          {hasLink && <ExternalLinkButton href={item.href} />}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top">
          SC
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#languages">Languages</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top" className="page-content">
        <section className="hero-panel">
          <div className="hero-copy">
            <span className="eyebrow">Portfolio / Backend / Product</span>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-description">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="#contact">
                Contact
              </a>
              <a
                className="button button-secondary"
                href="/cv.pdf"
                download="CV-Serrana-Calvo.pdf"
              >
                Download CV
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <div className="hero-card-inner">
              <div className="hero-avatar">
                <img
                  src="/images/profile/1704291983667.jpeg"
                  alt="Serrana Calvo"
                />
              </div>
              <p className="hero-card-title">Available For</p>
              <h2>{profile.title}</h2>
              <div className="availability-strip">
                <span></span>
                Backend, APIs, integrations, and technical leadership
              </div>
              <ul className="contact-list">
                {profile.contact.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="metrics-strip" aria-label="Professional summary">
          {metrics.map((item) => (
            <div key={item.value} className="metric-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="section-block">
          <SectionHeading eyebrow="Stack and Judgment">
            What I Bring
          </SectionHeading>
          <div className="skill-pill-row">
            {highlights.map((item) => (
              <span key={item} className="skill-pill">
                {item}
              </span>
            ))}
          </div>
          <div className="tech-grid">
            {techSkills.map((item) => (
              <div key={item.label} className="tech-card">
                <img src={item.icon} alt={item.label} className="tech-icon" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block">
          <SectionHeading eyebrow="Tools">Skills</SectionHeading>
          <div className="skill-grid">
            <div className="skill-box">
              <h3>Core Tech</h3>
              <div className="tag-row">
                {skills.core.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-box">
              <h3>Methods and Management</h3>
              <div className="tag-row">
                {skills.tools.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-block">
          <SectionHeading eyebrow="Selected Work">
            Featured Projects
          </SectionHeading>
          <div className="grid-three">
            {projects.map((project, index) => (
              <article key={project.name} className="project-card">
                <span className="project-index">0{index + 1}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-block">
          <SectionHeading eyebrow="Career">
            Professional Experience
          </SectionHeading>
          <div className="timeline-list">
            {experience.map((item) => (
              <article key={item.role} className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-company">{item.company}</span>
                </div>
                <h3>{item.role}</h3>
                <ul>
                  {item.details.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-block">
          <SectionHeading eyebrow="Education">Education</SectionHeading>
          <div className="info-list">
            {education.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
                <span>{item.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section-block">
          <SectionHeading eyebrow="Credentials">Certifications</SectionHeading>
          <p className="section-intro">
            Each certificate displays the official identifier extracted from the
            source PDF. When the issuer does not provide a public direct URL for
            a specific credential, I link to its official validation channel or
            registry.
          </p>
          <div className="info-list">
            {certifications.map((item) => (
              <article
                key={`${item.title}-${item.certificateId || item.certificateCode || item.issueDate}`}
                className={`info-card ${item.badge ? "cert-card" : ""}`}
              >
                {item.badge ? (
                  <div className="badge-wrap">
                    <img
                      className="badge-image"
                      src={item.badge}
                      alt={`${item.title} badge`}
                    />
                  </div>
                ) : null}
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
                {item.issueDate ? (
                  <span>Issued: {item.issueDate}</span>
                ) : item.year ? (
                  <span>{item.year}</span>
                ) : null}
                {item.expirationDate ? (
                  <small>Valid until: {item.expirationDate}</small>
                ) : null}
                {item.certificateId ? (
                  <small>ID: {item.certificateId}</small>
                ) : null}
                {item.certificateCode ? (
                  <small>Code: {item.certificateCode}</small>
                ) : null}
                {item.note ? <small>{item.note}</small> : null}
                <div className="cert-actions">
                  {item.certificateUrl ? (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate
                    </a>
                  ) : null}
                  {item.verifyUrl ? (
                    <a href={item.verifyUrl} target="_blank" rel="noreferrer">
                      {item.verifyLabel || "Validate"}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="languages" className="section-block">
          <SectionHeading eyebrow="Languages">
            English Certifications
          </SectionHeading>
          <div className="info-list">
            {languages.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
                <span>Issued: {item.issueDate}</span>
                <small>
                  Level: {item.level}
                  {item.score ? ` — ${item.score}` : ""}
                </small>
                {item.certificateUrl && (
                  <div className="cert-actions">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block contact-panel">
          <SectionHeading eyebrow="Next Step">Contact</SectionHeading>
          <p>
            If you need someone who can write code, organize priorities, and
            keep clear conversations moving between business and technology,
            let&apos;s talk.
          </p>
          <div className="contact-grid-v2">
            {profile.contact.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        <p>Portfolio built with React and Vite. 2026 Serrana Calvo.</p>
      </footer>
    </div>
  );
}

export default App;
