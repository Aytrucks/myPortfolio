import { useState, useEffect, useRef } from 'react'

// ─── Icons ────────────────────────────────────────────────────────────────────

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_TABS = ['Home', 'About', 'Projects', 'Experience', 'Contact']

const SKILLS = {
  Languages: ['Python', 'C++', 'JavaScript', 'Java'],
  Frameworks: ['React', 'Node.js', 'Django', 'FastAPI', 'Flask', 'Express'],
  Databases: ['PostgreSQL', 'MongoDB', 'SQL'],
  'Tools & Cloud': ['AWS', 'Selenium', 'LangChain', 'OpenGL', 'OpenCV'],
}

const PROJECTS = [
  {
    title: 'ASU Auto Enroller',
    description:
      'Monitors real-time course availability and manages student waitlists with async API handling. Features bulk-write DB optimization to minimize write overhead under load.',
    stack: ['React', 'TypeScript', 'Python', 'Flask', 'PostgreSQL'],
    github: 'https://github.com/Aytrucks',
    demo: '#', // placeholder
  },
  {
    title: 'AI Invoice Scanner',
    description:
      'Full-stack app that extracts structured data from invoice images using Google Gemini. Validates extracted fields and exports clean Excel reports.',
    stack: ['React', 'FastAPI', 'Google Gemini'],
    github: 'https://github.com/Aytrucks',
    demo: '#', // placeholder
  },
  {
    title: 'PokeBee',
    description:
      'Wordle-inspired Pokémon guessing game with attribute-based clue feedback. Backed by a RESTful API serving Pokédex data from a MongoDB collection.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Aytrucks',
    demo: '#', // placeholder
  },
  {
    title: '3D Mesh Subdivision',
    description:
      'Implements a smooth mesh refinement algorithm adapted from academic research into production-ready C++ code. Uses MeshLib for geometry processing.',
    stack: ['C++', 'MeshLib'],
    github: 'https://github.com/Aytrucks',
    demo: '#', // placeholder
  },
]

// ─── Shared primitives ────────────────────────────────────────────────────────

const Badge = ({ label }) => (
  <span className="inline-block border border-black px-2 py-0.5 text-xs font-medium tracking-wide">
    {label}
  </span>
)

// ─── CardShell (brutalist hard-shadow card) ───────────────────────────────────
//
// Renders a white bordered card with a solid black square peeking out from the
// bottom-right. On hover the foreground card slides up-left, widening the gap.
//
// Usage:
//   <CardShell innerClassName="p-6 flex flex-col gap-4">…</CardShell>
//
// className     — applied to the outer wrapper (use for margins, grid span, etc.)
// innerClassName — applied to the visible white card (use for padding, flex, etc.)

const CardShell = ({ children, className = '', innerClassName = '' }) => (
  <div className={`relative group flex flex-col ${className}`}>
    {/* Solid black shadow — same footprint as card, offset 6 px down-right */}
    <div className="absolute inset-0 bg-black translate-x-[6px] translate-y-[6px]" />
    {/* Foreground white card */}
    <div
      className={`relative z-10 flex-1 bg-white border border-black
        transition-transform duration-200 ease-out
        group-hover:-translate-x-[3px] group-hover:-translate-y-[3px]
        ${innerClassName}`}
    >
      {children}
    </div>
  </div>
)

// ─── FadeSection wrapper ──────────────────────────────────────────────────────

const FadeSection = ({ children, active }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (active) {
      // small delay so opacity transition fires after mount
      const t = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(t)
    } else {
      setVisible(false)
    }
  }, [active])

  return (
    <div
      className="transition-all duration-300 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
      }}
    >
      {children}
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = ({ activeTab, setActiveTab }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (tab) => {
    setActiveTab(tab)
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => handleNav('Home')}
          className="font-semibold text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
        >
          Anish Nalla
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleNav(tab)}
              className={`text-sm font-medium pb-0.5 transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-black'
                  : 'border-b-2 border-transparent hover:border-black/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-black bg-white">
          {NAV_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleNav(tab)}
              className={`block w-full text-left px-6 py-3 text-sm font-medium border-b border-black/10 transition-colors ${
                activeTab === tab ? 'bg-black text-white' : 'hover:bg-[#f5f5f5]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

// ─── Home ─────────────────────────────────────────────────────────────────────

const Home = ({ setActiveTab }) => {
  const fullName = 'Anish Nalla'
  const [displayed, setDisplayed] = useState('')
  const [cursorOn, setCursorOn] = useState(true)
  const [typingDone, setTypingDone] = useState(false)
  const [started, setStarted] = useState(false)

  // Wait for page fade-in (300 ms) before starting
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400)
    return () => clearTimeout(t)
  }, [])

  // Type one character at a time at ~90 ms per keystroke
  useEffect(() => {
    if (!started) return
    if (displayed.length >= fullName.length) {
      setTypingDone(true)
      return
    }
    const t = setTimeout(() => {
      setDisplayed(fullName.slice(0, displayed.length + 1))
    }, 90)
    return () => clearTimeout(t)
  }, [displayed, started])

  // Blink the cursor only after typing finishes
  useEffect(() => {
    if (!typingDone) return
    const t = setInterval(() => setCursorOn((v) => !v), 530)
    return () => clearInterval(t)
  }, [typingDone])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6">Portfolio</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          Hi, I'm<br />
          {displayed}
          <span
            className="inline-block bg-black ml-1 align-middle"
            style={{
              width: '3px',
              height: '0.85em',
              opacity: cursorOn ? 1 : 0,
              transition: typingDone ? 'opacity 0.1s' : 'none',
            }}
          />
        </h1>
        <p className="text-base md:text-lg text-black/60 font-medium mb-3">
          Software Engineer · MS Computer Science @ ASU · May 2026
        </p>
        <p className="text-sm md:text-base text-black/50 mb-12">
          I build full-stack web apps and AI-powered tools.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setActiveTab('Projects')}
            className="border border-black px-8 py-3 text-sm font-semibold tracking-wide hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
          >
            View My Work
          </button>
          {/* PLACEHOLDER: replace href with actual hosted resume PDF URL */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-8 py-3 text-sm font-semibold tracking-wide hover:bg-black hover:text-white transition-colors w-full sm:w-auto text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

const About = () => (
  <section className="min-h-screen px-6 pt-28 pb-20 max-w-5xl mx-auto">
    <h2 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-10">About</h2>

    <div className="grid md:grid-cols-2 gap-16">
      {/* Bio */}
      <div className="space-y-5 text-sm leading-relaxed text-black/80">
        <p>
          {/* PLACEHOLDER: replace with your own bio */}
          I'm a software engineer finishing my MS in Computer Science at Arizona State University,
          where I've spent the past few years building things regarding full-stack
          development and AI. I spend my time trying to design good architecture and timeless code.
        </p>
        <p>
          {/* PLACEHOLDER: replace with your own background details */}
          Outside of work, I'm trying to get back into learning the piano and creating my own music.
          And learning how to draw. I want to eventually make my own game so I want to have a decent baseline
          of these skills when I get the time, ideally after I get a job and get more comfortable :D.
          I try to read more nowadays to get away from my phone and social media.
        </p>
        <p>
          {/* PLACEHOLDER: replace with what you're looking for */}
          I'm actively looking for new-grad software engineering roles, somewhere I can
          work on modern products and learn from an experienced team of devs. If that sounds
          like your company, I'd love to chat.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-6">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category}>
            <p className="text-xs font-semibold tracking-widest uppercase text-black/40 mb-3">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ─── Projects ─────────────────────────────────────────────────────────────────

const ProjectCard = ({ project }) => (
  <CardShell innerClassName="p-6 flex flex-col gap-4">
    <h3 className="font-bold text-base tracking-tight">{project.title}</h3>
    <p className="text-sm leading-relaxed text-black/70 flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-1.5">
      {project.stack.map((t) => (
        <Badge key={t} label={t} />
      ))}
    </div>
    <div className="flex items-center gap-4 pt-1">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-medium hover:opacity-50 transition-opacity"
        aria-label={`${project.title} GitHub`}
      >
        <GitHubIcon />
        <span>GitHub</span>
      </a>
      {project.demo !== '#' && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium hover:opacity-50 transition-opacity"
          aria-label={`${project.title} live demo`}
        >
          <ExternalLinkIcon />
          <span>Live Demo</span>
        </a>
      )}
    </div>
  </CardShell>
)

const Projects = () => (
  <section className="min-h-screen px-6 pt-28 pb-20 max-w-5xl mx-auto">
    <h2 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-10">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-2 pr-2">
      {PROJECTS.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  </section>
)

// ─── Experience ───────────────────────────────────────────────────────────────

const Experience = () => (
  <section className="min-h-screen px-6 pt-28 pb-20 max-w-5xl mx-auto">
    <h2 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-10">Experience</h2>

    {/* Work */}
    <CardShell className="mb-10" innerClassName="p-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-5">
        <div>
          <h3 className="font-bold text-base">Software Developer (Capstone)</h3>
          <p className="text-sm text-black/60">MyAlyce · Tempe, AZ</p>
        </div>
        <p className="text-xs font-medium tracking-wide text-black/40 sm:text-right whitespace-nowrap">
          Aug 2024 – May 2025
        </p>
      </div>
      <ul className="space-y-2.5 text-sm leading-relaxed text-black/80">
        <li className="flex gap-2"><span className="text-black/30 select-none">—</span><span>Built a health monitoring app for Amazfit smartwatches using Zepp OS (JavaScript)</span></li>
        <li className="flex gap-2"><span className="text-black/30 select-none">—</span><span>Engineered real-time biometric tracking for sleep and heart rate metrics</span></li>
        <li className="flex gap-2"><span className="text-black/30 select-none">—</span><span>Designed an alert system triggering automated emergency responses on abnormal data</span></li>
        <li className="flex gap-2"><span className="text-black/30 select-none">—</span><span>Implemented a RAG AI app using LangChain and Gemini Flash 2.0 with a heart rate research database</span></li>
        <li className="flex gap-2"><span className="text-black/30 select-none">—</span><span>Configured OAuth 2.0 Google Authentication and health data management within Google services</span></li>
      </ul>
    </CardShell>

    {/* Education */}
    <h2 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6 mt-14">Education</h2>
    <CardShell innerClassName="p-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
        <div>
          <h3 className="font-bold text-base">Arizona State University</h3>
          <p className="text-sm text-black/60">BS Computer Science · Minor: Mathematics &amp; Statistics</p>
          <p className="text-sm text-black/60">MS Computer Science</p>
        </div>
        <p className="text-xs font-medium tracking-wide text-black/40 sm:text-right whitespace-nowrap">
          Graduation: Spring 2026
        </p>
      </div>
      <div className="flex flex-wrap gap-6 text-sm text-black/70 mt-3">
        <span><span className="font-semibold text-black">BS GPA</span> · 3.92</span>
        <span><span className="font-semibold text-black">MS GPA</span> · 4.00</span>
      </div>
    </CardShell>
  </section>
)

// ─── Contact ──────────────────────────────────────────────────────────────────

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend — UI only
  }

  return (
    <section className="min-h-screen px-6 pt-28 pb-20 max-w-5xl mx-auto">
      <h2 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-10">Contact</h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left col */}
        <div className="space-y-8">
          <p className="text-sm leading-relaxed text-black/80">
            I'm actively looking for new grad SWE roles — feel free to reach out.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:anishwp76@gmail.com"
              className="flex items-center gap-3 text-sm font-medium group"
            >
              <MailIcon />
              <span className="group-hover:underline underline-offset-2">anishwp76@gmail.com</span>
            </a>

            <a
              href="https://github.com/Aytrucks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium group"
            >
              <GitHubIcon />
              <span className="group-hover:underline underline-offset-2">github.com/Aytrucks</span>
            </a>

            {/* PLACEHOLDER: replace href with your actual LinkedIn URL */}
            <a
              href="https://www.linkedin.com/in/anish-nalla-49094b244/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium group"
            >
              <LinkedInIcon />
              <span className="group-hover:underline underline-offset-2">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Contact form (UI only, no backend) */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold tracking-widest uppercase text-black/40 mb-1.5" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-black px-4 py-2.5 text-sm outline-none focus:bg-[#f5f5f5] transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold tracking-widest uppercase text-black/40 mb-1.5" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-black px-4 py-2.5 text-sm outline-none focus:bg-[#f5f5f5] transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold tracking-widest uppercase text-black/40 mb-1.5" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-black px-4 py-2.5 text-sm outline-none focus:bg-[#f5f5f5] transition-colors resize-none"
              placeholder="Say hello…"
            />
          </div>
          <button
            type="submit"
            className="w-full border border-black px-6 py-3 text-sm font-semibold tracking-wide hover:bg-black hover:text-white transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

const SECTION_MAP = {
  Home,
  About,
  Projects,
  Experience,
  Contact,
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Home')
  const [renderKey, setRenderKey] = useState(0)
  const prevTab = useRef(activeTab)

  const handleSetTab = (tab) => {
    if (tab !== prevTab.current) {
      prevTab.current = tab
      setActiveTab(tab)
      setRenderKey((k) => k + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const ActiveSection = SECTION_MAP[activeTab]

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar activeTab={activeTab} setActiveTab={handleSetTab} />
      <main>
        <FadeSection key={renderKey} active>
          <ActiveSection setActiveTab={handleSetTab} />
        </FadeSection>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-6 text-center">
        <p className="text-xs text-black/30 tracking-wide">
          © {new Date().getFullYear()} Anish Nalla
        </p>
      </footer>
    </div>
  )
}
