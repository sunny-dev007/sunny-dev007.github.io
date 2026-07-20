import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import {
  profile, about, expertise, projects, skillGroups, experiences, contact,
  heroRoles, marqueeTech, projectFilters, achievements,
} from './data'
import type { ProjectGroup } from './data'
import { useReveal, useTyped, useCountUp } from './hooks'
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon } from './icons'
import ArchDiagram from './ArchDiagram'
import ProjectArt from './ProjectArt'

const NAV_ITEMS = [
  ['#about', 'About'],
  ['#expertise', 'Expertise'],
  ['#projects', 'Projects'],
  ['#skills', 'Skills'],
  ['#experience', 'Experience'],
] as const

/**
 * Profile photo with animated gradient ring. Falls back to an "SK"
 * monogram if public/profile.jpg is missing, so the layout never breaks.
 */
function Avatar({ size = 128, className = '' }: { size?: number; className?: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`avatar ${className}`} style={{ width: size, height: size }}>
      <div className="avatar-ring" />
      {failed ? (
        <div className="avatar-fallback">SK</div>
      ) : (
        <img
          src={profile.photo}
          alt={`${profile.name} — ${profile.role}`}
          onError={() => setFailed(true)}
        />
      )}
      <span className="avatar-dot" title="Open to opportunities" />
    </div>
  )
}

/** Mouse-tracking spotlight for cards (sets CSS vars consumed by ::after). */
function spotlight(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  el.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-logo" href="#top">
          <span className="dot" />
          Sunny<span className="grad-text">.dev</span>
        </a>
        <button
          className="nav-burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <div className={`nav-links${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
          {NAV_ITEMS.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a className="cta" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  const { ref, display } = useCountUp(value)
  return (
    <div className="stat" ref={ref}>
      <div className="value">{display}</div>
      <div className="label">{label}</div>
    </div>
  )
}

function Hero() {
  const ref = useReveal<HTMLElement>()
  const typed = useTyped(heroRoles)
  return (
    <section className="hero" id="top" ref={ref}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-intro reveal visible">
            <Avatar size={124} />
            <div className="hero-badge">
              <span className="pulse" /> Open to AI Architect &amp; GenAI leadership roles
            </div>
          </div>
          <p className="hero-sub reveal visible">Hi, I&apos;m</p>
          <h1 className="reveal visible">{profile.name}</h1>
          <div className="hero-role reveal visible">
            <span className="grad-text">{typed}</span>
            <span className="caret" aria-hidden>▌</span>
          </div>
          <p className="tagline reveal visible">{profile.tagline}</p>
          <div className="hero-actions reveal visible">
            <a className="btn btn-primary" href="#projects">
              View Architecture Work <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
          <div className="hero-stats reveal visible">
            {profile.resumeHighlights.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
        <div className="hero-visual reveal visible">
          <ArchDiagram />
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = [...marqueeTech, ...marqueeTech] // duplicated for seamless loop
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {items.map((t, i) => (
          <span className="marquee-item" key={`${t}-${i}`}>
            {t} <span className="sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function About() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div className="kicker reveal">01 · About</div>
        <h2 className="section-title reveal">{about.heading}</h2>
        <div className="about-grid" style={{ marginTop: 40 }}>
          <div className="about-text reveal">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="about-side">
            <div className="portrait-card reveal">
              <img
                src={profile.photo}
                alt={`${profile.name}, ${profile.role}, based in ${profile.location}`}
                onError={(e) => {
                  e.currentTarget.closest<HTMLElement>('.portrait-card')!.style.display = 'none'
                }}
              />
              <div className="portrait-caption">
                <span className="portrait-name">{profile.name}</span>
                <span className="portrait-role">{profile.subRole}</span>
              </div>
              <span className="portrait-chip loc">📍 {profile.location}</span>
              <span className="portrait-chip role">◆ AI Architect</span>
            </div>
            <div className="focus-card spot reveal" onMouseMove={spotlight}>
              <h3>Current Focus</h3>
              <ul>
                {about.focusAreas.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Expertise() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="expertise" ref={ref}>
      <div className="container">
        <div className="kicker reveal">02 · Expertise</div>
        <h2 className="section-title reveal">
          Architecture <span className="grad-text">Pillars</span>
        </h2>
        <p className="section-sub reveal">
          Four disciplines I bring together to take Generative AI from prototype to
          governed production platform.
        </p>
        <div className="expertise-grid">
          {expertise.map((e) => (
            <article className="pillar spot reveal" key={e.title} onMouseMove={spotlight}>
              <div className="icon">{e.icon}</div>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
              <ul>
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const badgeClass: Record<string, string> = {
  Production: 'production',
  POC: 'poc',
  Platform: 'platform',
  'Open Source': 'open-source',
}

function Projects() {
  const ref = useReveal<HTMLElement>()
  const [filter, setFilter] = useState<ProjectGroup | 'all'>('all')
  const visible = projects.filter((p) => filter === 'all' || p.group === filter)

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="kicker reveal">03 · Projects</div>
        <h2 className="section-title reveal">
          Architecture-Level <span className="grad-text">Projects &amp; POCs</span>
        </h2>
        <p className="section-sub reveal">
          Selected systems I have architected — retrieval quality, governed tool access,
          agent reliability, regulated-domain guardrails, and scale.
        </p>
        <div className="filter-bar reveal">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              className={`filter-btn${filter === f.id ? ' active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
              <span className="count">
                {f.id === 'all'
                  ? projects.length
                  : projects.filter((p) => p.group === f.id).length}
              </span>
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {visible.map((p) => (
            <article className="project spot reveal visible" key={p.title} onMouseMove={spotlight}>
              <ProjectArt variant={p.art} />
              <div className="project-body">
                <div className="project-top">
                  <span className="category">{p.category}</span>
                  <span className={`badge ${badgeClass[p.status]}`}>{p.status}</span>
                </div>
                <h3>{p.title}</h3>
                {p.meta && <div className="project-meta">{p.meta}</div>}
                <p>{p.description}</p>
                <ul className="arch">
                  <li className="arch-label">Architecture Highlights</li>
                  {p.architecture.map((a) => (
                    <li key={a}>· {a}</li>
                  ))}
                </ul>
                <div className="tags">
                  {p.stack.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                {p.link && (
                  <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                    <GitHubIcon size={15} /> View on GitHub <ArrowIcon size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="kicker reveal">04 · Skills</div>
        <h2 className="section-title reveal">
          Technology <span className="grad-text">Stack</span>
        </h2>
        <p className="section-sub reveal">
          Full-stack depth with an AI-first architecture focus.
        </p>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div className="skill-group spot reveal" key={g.title} onMouseMove={spotlight}>
              <h3>{g.title}</h3>
              <div className="skill-chips">
                {g.skills.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <div className="kicker reveal">05 · Experience</div>
        <h2 className="section-title reveal">
          Career <span className="grad-text">Journey</span>
        </h2>
        <p className="section-sub reveal">
          A decade-long progression from full-stack engineering to distributed systems
          to Generative AI architecture leadership.
        </p>
        <div className="ach-grid">
          {achievements.map((a) => (
            <div className="ach spot reveal" key={a.title} onMouseMove={spotlight}>
              <div className="ach-icon">{a.icon}</div>
              <h4>{a.title}</h4>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
        <div className="timeline">
          {experiences.map((e) => (
            <div className="tl-item reveal" key={e.role}>
              <div className="tl-head">
                <h3>{e.role}</h3>
                <span className="period">{e.period}</span>
              </div>
              <div className="company">{e.company}</div>
              <p className="summary">{e.summary}</p>
              <ul>
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="contact-card reveal">
          <div className="kicker" style={{ justifyContent: 'center' }}>06 · Contact</div>
          <h2>
            {contact.heading.split('production-grade')[0]}
            <span className="grad-text">production-grade AI</span> together
          </h2>
          <p>{contact.body}</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <MailIcon /> {profile.email}
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub
            </a>
          </div>
          <div className="contact-meta">
            <span>📍 {profile.location}</span>
            <span>@{profile.githubUser}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.role}</span>
        <span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <div className="bg-ambient" />
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <Projects />
        <Skills />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
