import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Student Task Manager",
    type: "Full-stack web application",
    description:
      "A task-management application designed to help students organise tasks and track their work. The frontend connects to a Spring Boot backend, with database integration for storing task information.",
    stack: ["React", "Spring Boot", "Database"],
    links: [
      { label: "GitHub", href: "https://github.com/poojalekshmim556-cpu" },
    ],
  },
  {
    number: "02",
    name: "ORBITA",
    type: "Offline Astronaut Experiment Assurance Prototype",
    description:
      "An offline computer-vision prototype that tracks pose and hand–object interaction against predefined procedures. It uses a tri-state assurance approach: VERIFIED, UNCERTAIN, and DEVIATION, with local audit logging.",
    stack: ["Python", "MediaPipe", "PySide6", "SQLite"],
    links: [
      { label: "GitHub profile", href: "https://github.com/poojalekshmim556-cpu" },
    ],
  },
];

const skills = [
  {
    category: "Programming",
    items: ["Java", "Python", "JavaScript"],
  },
  {
    category: "Computer science",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming"],
  },
  {
    category: "Web development",
    items: ["React", "HTML", "CSS", "Spring Boot"],
  },
  {
    category: "Data & tools",
    items: ["SQL / Database concepts", "Chatgpt", "GitHub"],
  },
];

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
];

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="arrow-icon"
      fill="none"
    >
      <path
        d="M5 15 15 5M6 5h9v9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Pooja Lekshmi M, home">
          <span className="brand-mark">P</span>
          <span>pooja<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="https://github.com/poojalekshmim556-cpu"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            GitHub <ArrowUpRight />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              THIRD-YEAR CSE STUDENT
            </div>
            <p className="hero-intro">Hello, I'm</p>
            <h1>
              Pooja Lekshmi <span className="name-accent">M.</span>
            </h1>
            <h2 className="hero-role">
              Learning deeply. <span>Building thoughtfully.</span>
            </h2>
            <p className="hero-description">
              I’m a Computer Science and Engineering student interested in
              problem-solving, Java, Python, and building useful software.
              I enjoy turning what I learn into projects and improving one step
              at a time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight />
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/poojalekshmim556-cpu"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub <ArrowUpRight />
              </a>
            </div>
            <div className="hero-meta">
              <span><span className="meta-symbol">⌘</span> CSE · Class of 2028*</span>
              <span><span className="meta-symbol">↗</span> Open to learning opportunities</span>
            </div>
            <p className="small-note">*Update the graduation year if needed.</p>
          </div>

          <div className="hero-visual" aria-label="Decorative code-inspired graphic">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="visual-glow" />
            <div className="code-card">
              <div className="code-card-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>pooja.java</span>
                <span className="code-status">●</span>
              </div>
              <div className="code-lines" aria-hidden="true">
                <p><span className="code-muted">01</span> <span className="code-purple">class</span> <span className="code-green">Developer</span> {"{"}</p>
                <p><span className="code-muted">02</span> &nbsp; <span className="code-purple">String</span> focus =</p>
                <p><span className="code-muted">03</span> &nbsp; <span className="code-yellow">"learn & build"</span>;</p>
                <p><span className="code-muted">04</span> &nbsp; <span className="code-purple">while</span> (curious) {"{"}</p>
                <p><span className="code-muted">05</span> &nbsp;&nbsp; practice();</p>
                <p><span className="code-muted">06</span> &nbsp;&nbsp; buildProject();</p>
                <p><span className="code-muted">07</span> &nbsp; {"}"}</p>
                <p><span className="code-muted">08</span> {"}"}</p>
              </div>
              <div className="code-card-footer">
                <span><span className="footer-pulse" /> Currently growing</span>
                <span>Java · Python · React</span>
              </div>
            </div>
            <div className="floating-chip chip-cgpa">
              <span className="chip-icon">✳</span>
              <span><strong>9.17 / 10</strong><small>Current CGPA</small></span>
            </div>
            <div className="floating-chip chip-dsa">
              <span className="chip-icon chip-icon-purple">{"{ }"}</span>
              <span><strong>DSA</strong><small>Practice in progress</small></span>
            </div>
            <div className="visual-caption">Curiosity → Code → Iteration</div>
          </div>
        </section>

        <section className="quick-stats section-wrap" aria-label="At a glance">
          <div className="stat-item">
            <span className="stat-number">9.17</span>
            <span className="stat-label">Current CGPA / 10</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">02</span>
            <span className="stat-label">Featured projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">CSE</span>
            <span className="stat-label">Third-year student</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Things to learn</span>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT"
            title="A little about me."
            description="A student mindset, a problem-solving habit, and a growing collection of things I've built."
          />
          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">
                I’m a third-year Computer Science and Engineering student who
                likes understanding how things work—not just making them run.
              </p>
              <p>
                I’m developing my foundations in programming and data
                structures while exploring web development and computer-vision
                projects. I learn best by building, testing, asking questions,
                and improving my code with each iteration.
              </p>
              <p>
                My current focus is to strengthen problem-solving, write
                clearer code, and become more confident building complete
                applications from frontend to backend.
              </p>
            </div>
            <div className="about-note">
              <span className="note-mark">“</span>
              <p>Progress comes from consistent practice, honest debugging, and the willingness to learn what you don't know yet.</p>
              <span className="note-signature">— My learning mindset</span>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <SectionHeading
            eyebrow="02 / TOOLKIT"
            title="Skills I'm building with."
            description="A snapshot of the languages, concepts, and tools I use or am actively learning. This list should reflect what I can confidently demonstrate."
          />
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.category}>
                <div className="skill-card-top">
                  <span className="skill-index">0{index + 1}</span>
                  <span className="skill-spark">✳</span>
                </div>
                <h3>{group.category}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-wrap" id="projects">
          <SectionHeading
            eyebrow="03 / SELECTED WORK"
            title="Projects with a purpose."
            description="A couple of projects that connect my learning to practical problems."
          />
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                        {link.label} <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                </div>
                <div className={`project-art project-art-${project.number}`}>
                  {project.number === "01" ? (
                    <div className="task-art">
                      <div className="task-art-header"><span /> <span /> <span /></div>
                      <div className="task-art-title">Today's tasks</div>
                      <div className="fake-task done"><i>✓</i><span>Review notes</span><b>Done</b></div>
                      <div className="fake-task"><i /><span>Practice DSA</span><b>Focus</b></div>
                      <div className="fake-task"><i /><span>Build a feature</span><b>Next</b></div>
                      <div className="task-art-progress"><span /></div>
                    </div>
                  ) : (
                    <div className="orbita-art">
                      <div className="orbita-ring ring-a" />
                      <div className="orbita-ring ring-b" />
                      <div className="orbita-core">O</div>
                      <span className="orbita-label label-verified">✓ VERIFIED</span>
                      <span className="orbita-label label-uncertain">? UNCERTAIN</span>
                      <span className="orbita-label label-deviation">! DEVIATION</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">
            Project links currently point to my GitHub profile. Replace them with each repository URL when the projects are published.
          </p>
        </section>

        <section className="content-section section-wrap" id="journey">
          <SectionHeading
            eyebrow="04 / JOURNEY"
            title="Learning by doing."
            description="My current focus is on building strong fundamentals and applying them through projects and campus activities."
          />
          <div className="journey-grid">
            <article className="journey-card">
              <span className="journey-icon">01</span>
              <p className="journey-label">ACADEMICS</p>
              <h3>Computer Science & Engineering</h3>
              <p>Third-year undergraduate student with a current CGPA of 9.17/10.</p>
            </article>
            <article className="journey-card">
              <span className="journey-icon">02</span>
              <p className="journey-label">PRACTICE</p>
              <h3>Problem-solving</h3>
              <p>Working on Data Structures and Algorithms, with a focus on understanding patterns and writing correct solutions.</p>
            </article>
            <article className="journey-card">
              <span className="journey-icon">03</span>
              <p className="journey-label">COMMUNITY</p>
              <h3>Hackathons & ideathons</h3>
              <p>Participated in college-level hackathons and ideathons to explore ideas, collaborate, and learn through building.</p>
            </article>
          </div>
          <div className="focus-strip">
            <span className="focus-label">CURRENT FOCUS</span>
            <div className="focus-items">
              <span>Java & DSA</span>
              <span>React fundamentals</span>
              <span>Backend concepts</span>
              <span>Project building</span>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-orb contact-orb-one" />
            <div className="contact-orb contact-orb-two" />
            <p className="eyebrow">05 / CONTACT</p>
            <h2>Let's connect and<br /><span>keep building.</span></h2>
            <p className="contact-description">
              Interested in a project, a learning opportunity, or exchanging ideas?
              Find me on GitHub and explore what I'm working on.
            </p>
            <a
              className="button button-primary"
              href="https://github.com/poojalekshmim556-cpu"
              target="_blank"
              rel="noreferrer"
            >
              Visit my GitHub <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">P</span>
          <span>pooja<span className="brand-dot">.</span></span>
        </a>
        <p>Designed and built with React.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Pooja Lekshmi M</span>
      </footer>
    </div>
  );
}

export default App;

