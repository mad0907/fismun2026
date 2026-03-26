import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, animate, useInView } from 'framer-motion'
import CommitteeCard from './components/CommitteeCard'
import Globe from './components/Globe'

// ─── EVENT DATE: June 26 2026 ─────────────────────────────────
const CONF_DATE = '2026-06-26T09:00:00'

// ─── DATA ─────────────────────────────────────────────────────
const COMMITTEES = [
  { abbr: 'UNSC',   fullName: 'United Nations Security Council',     chairs: ['Krishna Iyer', 'Devansh', 'Aarnav Tejaswi'], agenda: null },
  { abbr: 'UNHRC',  fullName: 'United Nations Human Rights Council', chairs: ['Sarah', 'Anish G', 'Kenrick'],               agenda: null },
  { abbr: 'AIPPM',  fullName: 'All India Political Parties Meet',    chairs: ['Aarav Motreja', 'Anirudh R', 'Shashank Srinath'], agenda: null },
  { abbr: 'CCC',    fullName: 'Continuous Crisis Committee',         chairs: ['Kaustubh Krishna', 'Nathan Daniel'],          agenda: null },
  { abbr: 'DISEC',  fullName: 'Disarmament and Security Council',   chairs: ['Aabid Maldar', 'Dhruv Kulkarni', 'Puneet'],    agenda: null },
  { abbr: 'UNICEF', fullName: "United Nations Children's Fund",     chairs: ['Aara Shivani', 'Srishti Singh', 'Rohan'],      agenda: null },
  { abbr: 'UNEP',   fullName: 'UN Environment Programme',           chairs: [], agenda: 'To Be Announced' },
  { abbr: 'WHO',    fullName: 'World Health Organization',           chairs: [], agenda: 'To Be Announced' },
  { abbr: 'HCC',    fullName: 'Historical Crisis Committee',         chairs: [], agenda: 'To Be Announced' },
]

const STATS = [
  { target: 4,   suffix: 'th', label: 'Edition'            },
  { target: 9,   suffix: '',   label: 'Committees'         },
  { target: 200, suffix: '+',  label: 'Expected Delegates' },
  { target: 2,   suffix: '',   label: 'Days of Debate'     },
]

const COC_RULES = [
  { num: '01', text: 'Delegates must maintain professional decorum throughout all committee sessions and conference premises.' },
  { num: '02', text: 'Western business formals are mandatory for all committee sessions. Smart casuals are permitted during non-committee hours.' },
  { num: '03', text: 'All electronic devices must be kept on silent. Usage is permitted only for research purposes during committee.' },
  { num: '04', text: 'Plagiarism, pre-written speeches, or submission of work not one\'s own is strictly prohibited and may lead to disqualification.' },
  { num: '05', text: 'Delegates must be punctual. Repeated absences or late arrivals may result in loss of speaking rights.' },
  { num: '06', text: 'No delegate may address the committee without recognition from the Chair.' },
  { num: '07', text: 'Any form of harassment, bullying, or discrimination on any basis will result in immediate removal from the conference.' },
  { num: '08', text: 'Delegates must carry their delegate badges and position papers at all times on conference premises.' },
]

// ─── LOGO WATERMARK (background ghost) ────────────────────────
function LogoWatermark({ dim = false, size = 'min(560px, 84vw)' }) {
  return (
    <div className={`logo-wm${dim ? ' logo-wm-dim' : ''}`} style={{ '--lw': size }}>
      <img src="/logo.png" alt="" className="logo-wm-img" />
      <div className="logo-wm-scanlines" />
      <div className="logo-wm-glow" />
    </div>
  )
}

// ─── FADE UP WRAPPER ──────────────────────────────────────────
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── CURSOR ───────────────────────────────────────────────────
function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos  = useRef({ x: 0, y: 0 })
  const lerp = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const onMove = e => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) { dotRef.current.style.left = e.clientX + 'px'; dotRef.current.style.top = e.clientY + 'px' }
    }
    window.addEventListener('mousemove', onMove)
    let raf
    const track = () => {
      lerp.current.x += (pos.current.x - lerp.current.x) * 0.14
      lerp.current.y += (pos.current.y - lerp.current.y) * 0.14
      if (ringRef.current) { ringRef.current.style.left = lerp.current.x + 'px'; ringRef.current.style.top = lerp.current.y + 'px' }
      raf = requestAnimationFrame(track)
    }
    track()
    const t = setTimeout(() => {
      document.querySelectorAll('a, button, .c-card').forEach(el => {
        el.addEventListener('mouseenter', () => { dotRef.current?.classList.add('hovered'); ringRef.current?.classList.add('hovered') })
        el.addEventListener('mouseleave', () => { dotRef.current?.classList.remove('hovered'); ringRef.current?.classList.remove('hovered') })
      })
    }, 800)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); clearTimeout(t) }
  }, [])
  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

// ─── SCROLL PROGRESS ──────────────────────────────────────────
function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => { const m = document.body.scrollHeight - innerHeight; setPct(m > 0 ? (scrollY / m) * 100 : 0) }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return <div className="scroll-prog"><div className="scroll-prog-fill" style={{ width: `${pct}%` }} /></div>
}

// ─── LOADER ───────────────────────────────────────────────────
function Loader({ onDone }) {
  return (
    <motion.div className="loader" exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <motion.div className="loader-title"
        initial={{ opacity: 0, y: 22, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >FISMUN'26</motion.div>
      <div className="loader-bar">
        <motion.div className="loader-bar-fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          onAnimationComplete={onDone}
        />
      </div>
      <motion.p className="loader-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        26 June 2026 · Bigger · Better · Bolder
      </motion.p>
    </motion.div>
  )
}

// ─── PARTICLES ────────────────────────────────────────────────
function ParticleField() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current; const ctx = canvas.getContext('2d')
    let W, H, pts = [], raf
    const resize = () => { W = canvas.width = innerWidth; H = canvas.height = innerHeight }
    resize(); window.addEventListener('resize', resize)
    for (let i = 0; i < 90; i++) pts.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.2 + .3, a: Math.random() * .25 + .06
    })
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(237,232,220,${p.a})`; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy)
        if (d < 110) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(237,232,220,${(1-d/110)*.07})`; ctx.lineWidth = .5; ctx.stroke() }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="particle-canvas" />
}

// ─── NAV ──────────────────────────────────────────────────────
const NAV_LINKS = [
  { id: 'hero',        label: 'Home'         },
  { id: 'secretariat', label: 'About'        },
  { id: 'committees',  label: 'Committees'   },
  { id: 'coc',         label: 'Conduct'      },
  { id: 'register',    label: 'Register'     },
]
function Nav() {
  const [stuck, setStuck]   = useState(false)
  const [active, setActive] = useState('hero')
  useEffect(() => {
    const fn = () => {
      setStuck(scrollY > 60)
      const ids = [...NAV_LINKS.map(l => l.id)].reverse()
      for (const id of ids) { const el = document.getElementById(id); if (el && scrollY >= el.offsetTop - 140) { setActive(id); break } }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const go = useCallback((e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }, [])
  return (
    <motion.nav className={`nav${stuck ? ' stuck' : ''}`}
      initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {NAV_LINKS.map(({ id, label }) => (
        <a key={id} href={`#${id}`} className={`nav-link${active === id ? ' active' : ''}`} onClick={e => go(e, id)}>{label}</a>
      ))}
    </motion.nav>
  )
}

// ─── PAGE 1: HERO ─────────────────────────────────────────────
function Hero() {
  const letters = "FISMUN'26".split('')
  return (
    <section id="hero" className="hero section page-section">
      {/* Stacked: logo watermark (back) → globe wireframe (front) */}
      <div className="logo-holo-wrap">
        {/* Logo sits at z-index 0 — background */}
        <LogoWatermark />
        {/* Globe wireframe overlay — no inner sphere, logo shows through */}
        <div className="globe-overlay">
          <Globe overlay />
        </div>
        {/* Rings & sweep on top of everything */}
        <div className="holo-rings">
          {[0, 1, 2].map(i => <div key={i} className="holo-ring" />)}
        </div>
        <div className="hero-sweep" />
      </div>

      <div className="hero-content">
        <motion.h1
          className="hero-title glitch"
          initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: 1.8 } } }}
        >
          {letters.map((ch, i) => (
            <motion.span key={i} style={{ display: 'inline-block', transformOrigin: 'bottom center' }}
              variants={{
                hidden:  { opacity: 0, y: 90, rotateX: -85, filter: 'blur(6px)' },
                visible: { opacity: 1, y: 0,  rotateX: 0,   filter: 'blur(0px)',
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
              }}
            >{ch}</motion.span>
          ))}
        </motion.h1>
        <motion.p className="hero-tagline"
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
          transition={{ delay: 2.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          BIGGER. BETTER. BOLDER.
        </motion.p>
        <motion.div className="hero-date"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 3.3, duration: 0.6 }}
        >
          26 June 2026
        </motion.div>
      </div>

      <motion.div className="scroll-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.6, duration: 0.8 }}>
        <span>Scroll</span><div className="scroll-hint-line" />
      </motion.div>
    </section>
  )
}

// ─── PAGE 2: SECRETARIAT ──────────────────────────────────────
function Secretariat() {
  return (
    <section id="secretariat" className="section page-section secretariat-pg">
      <LogoWatermark dim size="min(480px, 76vw)" />
      <div className="secretariat-inner">
        <FadeUp>
          <h2 className="section-title">LETTER FROM THE SECRETARIAT</h2>
        </FadeUp>
        <div className="sec-layout">
          <FadeUp delay={0.1} className="sec-avatar-col">
            <div className="avatar-card">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="avatar-svg">
                <circle cx="40" cy="28" r="18" fill="#4A8FE2" opacity="0.9" />
                <path d="M10 78 C10 58 70 58 70 78" fill="#4A8FE2" opacity="0.9" />
              </svg>
            </div>
          </FadeUp>
          <FadeUp delay={0.18} className="letter-card">
            <div className="letter-quote">"</div>
            <p className="letter-body">
              Dear Delegates,
              <br />
              It is with immense pride and excitement that we welcome you to FISMUN
              2026 — our fourth edition, and perhaps our most ambitious one yet.
              This conference represents not just a gathering of young minds, but a
              testament to what happens when students dare to dream bigger, debate
              better, and stand bolder.
              <br />
              At FISMUN, we believe that every voice matters — from the corridors of
              the Security Council to the chambers of our crisis committees. You are
              not just participants; you are the architects of tomorrow's world.
              <br />
              FISMUN'26 pushes boundaries. It is a conference of consequence — where
              diplomacy is not a performance, but a practice. We challenge every
              delegate to arrive not just with a position, but with purpose.
              <br />
              We look forward to witnessing the brilliance you bring to every
              committee session. Welcome to FISMUN'26.
            </p>
            <p className="letter-sig">— The Secretariat, FISMUN'26</p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE 3: COUNTDOWN ────────────────────────────────────────
function useCountdown(iso) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const tick = () => {
      const d = new Date(iso) - new Date()
      if (d <= 0) return
      setT({ days: Math.floor(d/864e5), hours: Math.floor((d%864e5)/36e5), minutes: Math.floor((d%36e5)/6e4), seconds: Math.floor((d%6e4)/1e3) })
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [iso])
  return t
}
function DigitBox({ value, len = 2 }) {
  const str = String(value).padStart(len, '0')
  return (
    <div className="cd-digit">
      <motion.span key={str} initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }} style={{ display: 'inline-block' }}>
        {str}
      </motion.span>
    </div>
  )
}
function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(CONF_DATE)
  return (
    <section id="countdown" className="countdown section page-section">
      <LogoWatermark dim size="min(420px, 68vw)" />
      <div className="countdown-content">
        <FadeUp><h2 className="section-title">LET THE COUNTDOWN BEGIN</h2></FadeUp>
        <FadeUp delay={0.08}>
          <div className="cd-row">
            <div className="cd-unit"><DigitBox value={days} len={3} /><div className="cd-label">Days</div></div>
            <span className="cd-sep">:</span>
            <div className="cd-unit"><DigitBox value={hours}   /><div className="cd-label">Hours</div></div>
            <span className="cd-sep">:</span>
            <div className="cd-unit"><DigitBox value={minutes} /><div className="cd-label">Minutes</div></div>
            <span className="cd-sep">:</span>
            <div className="cd-unit"><DigitBox value={seconds} /><div className="cd-label">Seconds</div></div>
          </div>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="cd-desc">
            FISMUN 2026, IN ITS FOURTH EDITION, CONTINUES ITS JOURNEY OF BRINGING
            STUDENTS TOGETHER TO LEARN, DEBATE, AND GROW. IT'S A SPACE WHERE IDEAS
            ARE SHARED, PERSPECTIVES ARE CHALLENGED, AND DELEGATES GET A CHANCE TO
            STEP INTO THE WORLD OF DIPLOMACY.
            <br /><br />
            MORE THAN JUST A CONFERENCE, FISMUN IS ABOUT BUILDING CONFIDENCE,
            MAKING CONNECTIONS, AND UNDERSTANDING GLOBAL ISSUES IN A MEANINGFUL WAY.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── STATS ────────────────────────────────────────────────────
function StatItem({ target, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const ctrl = animate(0, target, { duration: 1.55, ease: [0.22, 1, 0.36, 1], onUpdate: v => setN(Math.floor(v)) })
    return ctrl.stop
  }, [inView, target])
  return (
    <motion.div ref={ref} className="stat-item"
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="stat-num">{n}{suffix}</div>
      <div className="stat-lbl">{label}</div>
    </motion.div>
  )
}
function Stats() {
  return (
    <div className="stats-bar section">
      {STATS.map(s => <StatItem key={s.label} {...s} />)}
    </div>
  )
}

// ─── PAGE 4: COMMITTEES (with glass spheres) ──────────────────
function Committees() {
  return (
    <section id="committees" className="committees section">
      <LogoWatermark dim size="min(380px, 58vw)" />

      {/* Decorative glass spheres — reference glassmorphism aesthetic */}
      <div className="committee-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
        <div className="orb orb-5" />
        <div className="orb orb-6" />
      </div>

      <div className="committees-content">
        <FadeUp><h2 className="section-title">INTRODUCING THE COMMITTEES</h2></FadeUp>
        <motion.div className="committees-grid"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
        >
          {COMMITTEES.map((c, i) => <CommitteeCard key={c.abbr} committee={c} index={i} />)}
        </motion.div>
      </div>
    </section>
  )
}

// ─── CODE OF CONDUCT ──────────────────────────────────────────
function CodeOfConduct() {
  return (
    <section id="coc" className="coc section page-section">
      <LogoWatermark dim size="min(460px, 72vw)" />
      <div className="coc-inner">
        <FadeUp>
          <div className="coc-badge">Conference Protocol</div>
          <h2 className="section-title">CODE OF CONDUCT</h2>
        </FadeUp>
        <div className="coc-grid">
          {COC_RULES.map((r, i) => (
            <FadeUp key={r.num} delay={i * 0.055}>
              <div className="coc-item">
                <div className="coc-num">{r.num}</div>
                <p className="coc-rule">{r.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SHARE BUTTONS ────────────────────────────────────────────
function ShareButtons() {
  const [copied, setCopied] = useState(false)

  const share = (platform) => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent("Join me at FISMUN'26 — Bigger. Better. Bolder. 26 June 2026.")
    const links = {
      whatsapp:  `https://api.whatsapp.com/send?text=${text}%20${url}`,
      facebook:  `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin:  `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      twitter:   `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    }
    if (platform === 'copy') {
      navigator.clipboard?.writeText(window.location.href).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2200) })
      return
    }
    if (platform === 'instagram') {
      // Instagram has no web share URL — use native share API or copy
      if (navigator.share) { navigator.share({ title: "FISMUN'26", text: decodeURIComponent(text), url: window.location.href }) }
      else { navigator.clipboard?.writeText(window.location.href).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2200) }) }
      return
    }
    window.open(links[platform], '_blank', 'noopener,width=620,height=500')
  }

  return (
    <div className="share-row">
      <p className="share-label">Share FISMUN'26</p>
      <div className="share-btns">
        {/* WhatsApp */}
        <motion.button className="share-btn share-wa" onClick={() => share('whatsapp')} title="Share on WhatsApp"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.885.52 3.648 1.428 5.158L2 22l4.946-1.403A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 11.999 2zm.001 18a7.97 7.97 0 01-4.074-1.118l-.292-.174-3.033.86.838-3.07-.19-.306A7.997 7.997 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>
        </motion.button>

        {/* Facebook / Meta */}
        <motion.button className="share-btn share-fb" onClick={() => share('facebook')} title="Share on Facebook"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </motion.button>

        {/* Instagram */}
        <motion.button className="share-btn share-ig" onClick={() => share('instagram')} title="Share on Instagram"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </motion.button>

        {/* LinkedIn */}
        <motion.button className="share-btn share-li" onClick={() => share('linkedin')} title="Share on LinkedIn"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </motion.button>

        {/* Twitter / X */}
        <motion.button className="share-btn share-x" onClick={() => share('twitter')} title="Share on X (Twitter)"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </motion.button>

        {/* Copy link */}
        <motion.button className={`share-btn share-copy${copied ? ' copied' : ''}`} onClick={() => share('copy')} title="Copy link"
          whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.93 }} transition={{ type:'spring', stiffness:400, damping:18 }}>
          {copied
            ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
            : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
          }
        </motion.button>
      </div>
    </div>
  )
}

// ─── REGISTER ─────────────────────────────────────────────────
function Register() {
  return (
    <section id="register" className="register section page-section">
      <div className="register-inner">
        <FadeUp>
          <motion.div className="register-badge"
            animate={{ boxShadow: ['0 0 0 0 rgba(74,143,226,0.5)', '0 0 0 10px rgba(74,143,226,0)', '0 0 0 0 rgba(74,143,226,0)'] }}
            transition={{ repeat: Infinity, duration: 2.6, ease: 'easeOut' }}
          >
            Open Registration · 26 June 2026
          </motion.div>
        </FadeUp>
        <FadeUp delay={0.08}><h2 className="register-title">STEP INTO<br />DIPLOMACY</h2></FadeUp>
        <FadeUp delay={0.16}><p className="register-sub">Join delegates from across the country for two days of world-class debate and diplomacy</p></FadeUp>
        <FadeUp delay={0.24}>
          <motion.a href="#" className="btn-register"
            whileHover={{ scale: 1.04, y: -4 }} whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >Register Now</motion.a>
        </FadeUp>
        <FadeUp delay={0.34}>
          <ShareButtons />
        </FadeUp>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer" id="footer-contact">
      <div><div className="footer-logo">FISMUN'26</div><div className="footer-tag">26 June 2026 · Bigger · Better · Bolder</div></div>
      <div className="footer-links">
        {[['Home','hero'],['About','secretariat'],['Committees','committees'],['Conduct','coc'],['Register','register']].map(([l,id]) => (
          <a key={l} href={`#${id}`} className="footer-link">{l}</a>
        ))}
      </div>
      <div className="footer-copy">© 2026 FISMUN. All rights reserved.</div>
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────
export default function App() {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <AnimatePresence>{!loaded && <Loader onDone={() => setLoaded(true)} />}</AnimatePresence>

      {/* Celestial background blobs — glow THROUGH glass cards */}
      <div className="bg-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        <div className="blob blob-5" />
      </div>
      <ParticleField />

      <ScrollProgress />
      <Cursor />
      <Nav />

      <main>
        <Hero />          {/* PDF page 1 */}
        <Secretariat />   {/* PDF page 2 */}
        <Countdown />     {/* PDF page 3 */}
        <Stats />
        <Committees />    {/* PDF page 4 */}
        <CodeOfConduct />
        <Register />
      </main>
      <Footer />
    </>
  )
}
