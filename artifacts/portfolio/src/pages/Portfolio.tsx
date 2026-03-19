import { useState, useEffect, useRef, useCallback } from "react";

/* ─── SVG ICONS ─────────────────────────────────────────────────────────────── */

function ITSupportIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="it-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f472b6"/><stop offset="0.5" stopColor="#e879f9"/><stop offset="1" stopColor="#c026d3"/>
        </linearGradient>
      </defs>
      <rect x="4" y="6" width="32" height="20" rx="3" stroke="url(#it-g)" strokeWidth="2.2" fill="none"/>
      <path d="M4 23h32" stroke="url(#it-g)" strokeWidth="2" strokeLinecap="round"/>
      <rect x="15" y="26" width="10" height="4" rx="1.5" stroke="url(#it-g)" strokeWidth="2" fill="none"/>
      <path d="M10 34h20" stroke="url(#it-g)" strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="28" cy="12" r="2.5" stroke="url(#it-g)" strokeWidth="1.8" fill="none"/>
      <path d="M28 9.5V7M28 17v-2.5M24.5 12H22M34 12h-2.5M25.97 10.03l-1.77-1.76M31.77 15.73l-1.77-1.77M30.03 10.03l1.77-1.77M24.23 15.73l1.77-1.77" stroke="url(#it-g)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function AIIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ai-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a78bfa"/><stop offset="0.5" stopColor="#8b5cf6"/><stop offset="1" stopColor="#c026d3"/>
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="7" stroke="url(#ai-g)" strokeWidth="2.2" fill="none"/>
      <circle cx="20" cy="20" r="2.5" fill="url(#ai-g)"/>
      <circle cx="6" cy="12" r="2.5" stroke="url(#ai-g)" strokeWidth="2" fill="none"/>
      <circle cx="34" cy="12" r="2.5" stroke="url(#ai-g)" strokeWidth="2" fill="none"/>
      <circle cx="6" cy="28" r="2.5" stroke="url(#ai-g)" strokeWidth="2" fill="none"/>
      <circle cx="34" cy="28" r="2.5" stroke="url(#ai-g)" strokeWidth="2" fill="none"/>
      <circle cx="20" cy="4" r="2.5" stroke="url(#ai-g)" strokeWidth="2" fill="none"/>
      <circle cx="20" cy="36" r="2.5" stroke="url(#ai-g)" strokeWidth="2" fill="none"/>
      <path d="M13 16.5L8.2 13.8M27 16.5L31.8 13.8M13 23.5L8.2 26.2M27 23.5L31.8 26.2M20 13V6.5M20 27v6.5" stroke="url(#ai-g)" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function DevIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dev-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e879f9"/><stop offset="0.5" stopColor="#c026d3"/><stop offset="1" stopColor="#f59e0b"/>
        </linearGradient>
      </defs>
      <rect x="4" y="7" width="32" height="26" rx="3" stroke="url(#dev-g)" strokeWidth="2.2" fill="none"/>
      <path d="M4 13h32" stroke="url(#dev-g)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="9" cy="10" r="1.3" fill="url(#dev-g)"/>
      <circle cx="14" cy="10" r="1.3" fill="url(#dev-g)"/>
      <circle cx="19" cy="10" r="1.3" fill="url(#dev-g)"/>
      <path d="M14 22l-4 4 4 4" stroke="url(#dev-g)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 22l4 4-4 4" stroke="url(#dev-g)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 20l-4 12" stroke="url(#dev-g)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

const SkillIcon = ({ index }: { index: number }) => {
  if (index === 0) return <ITSupportIcon />;
  if (index === 1) return <AIIcon />;
  return <DevIcon />;
};

/* ─── DATA ───────────────────────────────────────────────────────────────────── */

const skills = [
  {
    title: "IT Systems Support",
    description: "Providing expert technical support and maintaining robust IT infrastructure to keep systems running smoothly and efficiently.",
    tags: ["Hardware", "Networking", "Troubleshooting", "Infrastructure"],
    gradient: "from-pink-400 via-rose-400 to-fuchsia-500",
    glowColor: "rgba(244,114,182,0.35)",
    borderColor: "#f472b6",
  },
  {
    title: "AI Prompt Engineer",
    description: "Crafting precise, effective AI prompts that unlock the full potential of language models to solve complex problems and drive innovation.",
    tags: ["GPT", "Prompt Design", "AI Tools", "Automation"],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    glowColor: "rgba(167,139,250,0.35)",
    borderColor: "#a78bfa",
  },
  {
    title: "Software Developer",
    description: "Building elegant, scalable software solutions with clean code architecture and modern development practices.",
    tags: ["React", "TypeScript", "APIs", "Full-Stack"],
    gradient: "from-fuchsia-500 via-pink-500 to-amber-400",
    glowColor: "rgba(232,121,249,0.35)",
    borderColor: "#e879f9",
  },
];

/* ─── HOOKS ──────────────────────────────────────────────────────────────────── */

function useIntersection(ref: React.RefObject<Element | null>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return visible;
}

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

/* ─── SPARKLES ───────────────────────────────────────────────────────────────── */

function Sparkles({ count = 18 }: { count?: number }) {
  const sparkles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 3,
      color: ["#f472b6", "#a78bfa", "#e879f9", "#f59e0b", "#fb7185", "#c084fc"][Math.floor(Math.random() * 6)],
    }))
  ).current;

  return (
    <>
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            "--duration": `${s.duration}s`,
            "--delay": `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}

/* ─── SCROLL PROGRESS ────────────────────────────────────────────────────────── */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

/* ─── TILT CARD ──────────────────────────────────────────────────────────────── */

function TiltCard({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const tiltX = ((y - cy) / cy) * 8;
    const tiltY = ((cx - x) / cx) * 8;
    card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-10px) scale(1.025)`;
    card.style.boxShadow = `${tiltY * -2}px ${tiltX * 2}px 40px rgba(180,80,140,0.25)`;
  }, []);

  const onLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0) scale(1)";
    card.style.boxShadow = "";
    card.style.transition = "all 0.5s cubic-bezier(0.175,0.885,0.32,1.275)";
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ ...style, transition: "all 0.15s ease", transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = ["About", "Skills", "Projects", "Contact"];
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-card border-b border-white/60 shadow-lg py-3" : "py-5 bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-black gradient-text tracking-wider animate-neon"
        >Neliswa</button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)}
              className="nav-link text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors">
              {item}
            </button>
          ))}
          <button onClick={() => scrollTo("Contact")}
            className="btn-primary px-6 py-2.5 rounded-full text-sm font-bold text-white"
            style={{ background: "linear-gradient(135deg,#d0558a,#a855f7,#f59e0b)", backgroundSize: "200% 100%", boxShadow: "0 4px 20px rgba(180,80,140,0.45)" }}>
            Hire Me ✨
          </button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg glass-card">
          <span className="block w-5 h-0.5 bg-foreground mb-1" />
          <span className="block w-5 h-0.5 bg-foreground mb-1" />
          <span className="block w-3 h-0.5 bg-foreground" />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden glass-card mx-4 mt-2 rounded-2xl p-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)}
              className="text-left px-4 py-2 rounded-xl hover:bg-white/30 transition-colors text-sm font-semibold">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────────────── */

function Hero() {
  const typeText = useTypewriter(
    ["IT Systems Support", "AI Prompt Engineer", "Software Developer", "Tech Innovator"],
    75, 2000
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-20">
      {/* Sparkle field */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles count={24} />
      </div>

      {/* Morphing blobs */}
      <div className="decorative-blob animate-blob absolute top-12 left-4 w-72 h-72"
        style={{ background: "radial-gradient(circle, rgba(212,70,134,0.55) 0%, rgba(139,92,246,0.25) 70%)" }} />
      <div className="decorative-blob animate-blob-delay absolute bottom-16 right-8 w-96 h-80"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.50) 0%, rgba(245,158,11,0.20) 70%)" }} />
      <div className="decorative-blob animate-float-slow absolute top-1/3 right-1/4 w-60 h-60"
        style={{ background: "radial-gradient(circle, rgba(232,121,249,0.45) 0%, rgba(244,114,182,0.20) 70%)" }} />
      <div className="decorative-blob animate-float absolute bottom-1/3 left-1/4 w-48 h-48"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.35) 0%, rgba(212,70,134,0.15) 70%)" }} />

      {/* Floating shapes */}
      <div className="animate-float absolute top-28 right-20 w-10 h-10 rounded-full border-2 border-pink-400/50 opacity-70" />
      <div className="animate-float-delay absolute top-52 left-16 w-5 h-5 rounded-full bg-violet-400/60" />
      <div className="animate-float-slow absolute bottom-36 left-28 w-12 h-12 rounded-lg border-2 border-fuchsia-400/40 opacity-60 rotate-12" />
      <div className="animate-float-delay-2 absolute bottom-28 right-36 w-7 h-7 rounded-full bg-amber-300/50" />
      <div className="animate-float-delay-3 absolute top-1/2 left-8 w-4 h-4 rounded-full bg-pink-400/50" />

      {/* Spinning rings */}
      <div className="animate-spin-slow absolute top-1/4 right-16 w-24 h-24 rounded-full border border-dashed border-pink-300/30 pointer-events-none" />
      <div className="animate-spin-reverse absolute bottom-1/4 left-16 w-16 h-16 rounded-full border border-dashed border-violet-300/30 pointer-events-none" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(180,80,140,1) 1px, transparent 0)", backgroundSize: "36px 36px" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 glass-card px-5 py-2.5 rounded-full mb-8 animate-fade-in-up shadow-md">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-semibold text-foreground/70 tracking-wide">Available for opportunities</span>
          <span className="text-lg">🌟</span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-2 tracking-tighter leading-none animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
          <span className="gradient-text">NM</span>
        </h1>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
          <span className="text-foreground/80">Mapisa</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}>
          <span className="text-xl md:text-2xl font-bold gradient-text-gold">{typeText}</span>
          <span className="ml-1 w-0.5 h-7 bg-amber-400 cursor-blink rounded-full" />
        </div>

        {/* Role pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
          {[
            { label: "IT Systems Support", color: "#f472b6" },
            { label: "AI Prompt Engineer", color: "#a78bfa" },
            { label: "Software Developer", color: "#f59e0b" },
          ].map(({ label, color }) => (
            <span key={label}
              className="glass-card px-4 py-2 rounded-full text-sm font-semibold text-foreground/80 transition-all duration-300 hover:scale-105 cursor-default"
              style={{ borderLeft: `3px solid ${color}`, boxShadow: `0 0 12px ${color}40` }}>
              {label}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-foreground/55 max-w-xl mx-auto leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}>
          Bridging technology and innovation — delivering reliable systems, intelligent AI solutions,
          and elegant software with precision and passion.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
          <button
            onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-9 py-4 rounded-full font-bold text-white text-base animate-pulse-glow"
            style={{ background: "linear-gradient(135deg,#d0558a,#a855f7,#f59e0b)", backgroundSize: "200% 100%", boxShadow: "0 6px 28px rgba(180,80,140,0.50)" }}>
            View My Work →
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-9 py-4 rounded-full font-bold glass-card text-foreground/80 hover:bg-white/75 transition-all duration-300 hover:scale-105 text-base">
            About Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center pt-1.5">
            <div className="w-1 h-3 rounded-full bg-foreground/40 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ──────────────────────────────────────────────────────────────────── */

function About() {
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref);

  const stats = [
    { icon: "🎯", label: "Expertise", value: "3 Domains" },
    { icon: "💡", label: "Focus", value: "Innovation" },
    { icon: "🚀", label: "Approach", value: "Results-First" },
    { icon: "🌍", label: "Mindset", value: "Growth" },
  ];

  return (
    <section ref={ref} id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Section blobs */}
      <div className="decorative-orb absolute top-0 right-0 w-[500px] h-[400px] opacity-20"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.5), rgba(212,70,134,0.2))" }} />
      <div className="decorative-orb absolute bottom-0 left-0 w-96 h-96 opacity-15"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.4), transparent)" }} />

      <div className="max-w-6xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}>

          {/* Avatar column */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main circle */}
              <div className="w-72 h-72 rounded-full flex items-center justify-center text-8xl animate-pulse-glow relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(212,85,138,0.18), rgba(139,92,246,0.18), rgba(245,158,11,0.10))",
                  border: "2px solid rgba(212,85,138,0.35)",
                  backdropFilter: "blur(16px)",
                }}>
                <span style={{ filter: "drop-shadow(0 0 16px rgba(212,85,138,0.6))" }}>👩🏿‍💻</span>

                {/* Inner shimmer ring */}
                <div className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{ background: "conic-gradient(from 0deg, transparent 0%, rgba(212,85,138,0.15) 25%, transparent 50%, rgba(139,92,246,0.15) 75%, transparent 100%)" }} />
              </div>

              {/* Floating chips */}
              {[
                { text: "💼 Tech Pro", pos: "-top-5 -right-10", anim: "animate-float" },
                { text: "🤖 AI Expert", pos: "-bottom-5 -left-10", anim: "animate-float-delay" },
                { text: "✨ Innovator", pos: "top-1/2 -right-16", anim: "animate-float-delay-2" },
                { text: "🌟 Leader", pos: "top-1/3 -left-14", anim: "animate-float-delay-3" },
              ].map(({ text, pos, anim }) => (
                <div key={text}
                  className={`glass-card absolute ${pos} ${anim} px-3 py-2 rounded-xl shadow-lg text-xs font-semibold text-foreground/75 whitespace-nowrap`}>
                  {text}
                </div>
              ))}

              {/* Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-pink-400/20 scale-110 animate-pulse" style={{ animationDuration: "3s" }} />
              <div className="absolute inset-0 rounded-full border border-violet-400/15 scale-125 animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
              <div className="absolute inset-0 rounded-full border border-amber-400/10 scale-140 animate-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }} />
            </div>
          </div>

          {/* Content column */}
          <div>
            <div className="section-heading mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">About Me</h2>
            </div>

            <div className="rounded-3xl p-8 mb-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.65), rgba(255,240,250,0.5))",
                border: "1px solid rgba(212,85,138,0.20)",
                backdropFilter: "blur(18px)",
                boxShadow: "0 8px 32px rgba(180,80,140,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}>
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-30"
                style={{ background: "radial-gradient(circle at top right, rgba(212,85,138,0.6), transparent)" }} />
              <p className="text-foreground/75 text-base leading-relaxed relative z-10">
                I'm an IT support specialist with a passion for software and application development. I enjoy solving technical problems and building tools that make people's lives easier.
              </p>
              <p className="text-foreground/65 text-base leading-relaxed relative z-10 mt-4">
                I'm continuously growing my skills in full-stack development while providing reliable IT support and troubleshooting solutions.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(({ icon, label, value }, i) => (
                <TiltCard key={label}
                  className="glass-card rounded-2xl p-4 text-center cursor-default"
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="text-2xl mb-1">{icon}</div>
                  <div className="text-sm font-black gradient-text">{value}</div>
                  <div className="text-xs text-foreground/45 mt-0.5">{label}</div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS ─────────────────────────────────────────────────────────────────── */

function Skills() {
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref);

  const highlights = [
    {
      icon: "🖥️",
      title: "Infrastructure & Support",
      body: "Delivering hands-on technical support across hardware, software, and networking — ensuring systems stay stable, secure, and efficient.",
      color: "#f472b6",
    },
    {
      icon: "🤖",
      title: "AI & Intelligent Automation",
      body: "Designing precise prompt frameworks and AI-assisted workflows that amplify productivity and unlock the practical power of language models.",
      color: "#a78bfa",
    },
    {
      icon: "🛠️",
      title: "Full-Stack Development",
      body: "Building responsive, scalable applications from the ground up — combining clean code principles with real-world problem-solving instincts.",
      color: "#f59e0b",
    },
  ];

  return (
    <section ref={ref} id="skills" className="py-28 px-6 relative overflow-hidden">
      {/* Aurora wash */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(167,139,250,0.12), rgba(212,85,138,0.08), transparent)" }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2.5 glass-card px-5 py-2.5 rounded-full mb-5 shadow-md">
            <span className="text-base">⚡</span>
            <span className="text-sm font-semibold text-foreground/65">What I Bring</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 section-heading inline-block">
            <span className="gradient-text">My Expertise</span>
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto text-base leading-relaxed">
            A fusion of technical depth and creative problem-solving across the modern technology landscape.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, idx) => (
            <div
              key={skill.title}
              className={`transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
              style={{ transitionDelay: `${idx * 180}ms` }}>
              <TiltCard className="glow-border h-full">
                <div className="glow-border-inner p-8 relative overflow-hidden group">
                  {/* Top gradient stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${skill.gradient}`} />

                  {/* Hover background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-600`} />

                  {/* Animated corner sparkle */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full sparkle"
                    style={{ backgroundColor: skill.borderColor, "--duration": "2s", "--delay": `${idx * 0.5}s` } as React.CSSProperties} />

                  <div className="relative z-10">
                    {/* Icon box */}
                    <div className="mb-6 w-20 h-20 flex items-center justify-center rounded-2xl relative"
                      style={{
                        background: `linear-gradient(135deg, ${skill.glowColor}, rgba(255,255,255,0.55))`,
                        border: `1px solid ${skill.borderColor}40`,
                        backdropFilter: "blur(12px)",
                        boxShadow: `0 4px 20px ${skill.glowColor}`,
                      }}>
                      <SkillIcon index={idx} />
                      {/* Icon glow ring */}
                      <div className="absolute inset-0 rounded-2xl animate-pulse"
                        style={{ boxShadow: `0 0 20px ${skill.glowColor}`, animationDuration: `${2.5 + idx * 0.5}s` }} />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{skill.title}</h3>
                    <p className="text-foreground/58 text-sm leading-relaxed mb-5">{skill.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span key={tag} className="tag-pill px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: `linear-gradient(135deg, ${skill.glowColor}, rgba(255,255,255,0.25))`,
                            border: `1px solid ${skill.borderColor}50`,
                            color: "hsl(var(--foreground))",
                          }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Capability highlights */}
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "600ms" }}>
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">Core Capabilities</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {highlights.map(({ icon, title, body, color }, i) => (
              <div
                key={title}
                className={`glass-card rounded-2xl p-6 relative overflow-hidden group transition-all duration-700 hover:-translate-y-1 hover:shadow-xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${700 + i * 120}ms`, boxShadow: `0 4px 24px ${color}20` }}>
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: `linear-gradient(180deg, ${color}, rgba(139,92,246,0.6))` }} />
                {/* Background glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${color}12, transparent 60%)` }} />
                <div className="relative z-10 pl-2">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h4 className="text-sm font-black text-foreground/85 mb-2 tracking-wide">{title}</h4>
                  <p className="text-xs text-foreground/55 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS ───────────────────────────────────────────────────────────────── */

const projects = [
  {
    title: "Project Title",
    description: "Describe what this project does, the problem it solves, and the impact it had. Replace this with your own project details.",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    gradient: "from-pink-400 to-fuchsia-500",
    glowColor: "rgba(244,114,182,0.25)",
    accent: "#f472b6",
    icon: "🚀",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Title",
    description: "Describe what this project does, the problem it solves, and the impact it had. Replace this with your own project details.",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    gradient: "from-violet-400 to-purple-600",
    glowColor: "rgba(167,139,250,0.25)",
    accent: "#a78bfa",
    icon: "🛠️",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Title",
    description: "Describe what this project does, the problem it solves, and the impact it had. Replace this with your own project details.",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    gradient: "from-amber-400 to-rose-500",
    glowColor: "rgba(245,158,11,0.25)",
    accent: "#f59e0b",
    icon: "💡",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Title",
    description: "Describe what this project does, the problem it solves, and the impact it had. Replace this with your own project details.",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    gradient: "from-fuchsia-400 to-pink-600",
    glowColor: "rgba(232,121,249,0.25)",
    accent: "#e879f9",
    icon: "🌐",
    liveUrl: "#",
    repoUrl: "#",
  },
];

function Projects() {
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref);

  return (
    <section ref={ref} id="projects" className="py-28 px-6 relative overflow-hidden">
      {/* Background wash */}
      <div className="absolute inset-0 pointer-events-none opacity-25"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,0.12), rgba(212,85,138,0.08), transparent)" }} />
      <div className="decorative-orb absolute top-0 left-0 w-80 h-80 opacity-15"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.45), transparent)" }} />
      <div className="decorative-orb absolute bottom-0 right-0 w-96 h-96 opacity-15"
        style={{ background: "radial-gradient(circle, rgba(212,85,138,0.45), transparent)" }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2.5 glass-card px-5 py-2.5 rounded-full mb-5 shadow-md">
            <span className="text-base">🗂️</span>
            <span className="text-sm font-semibold text-foreground/65">What I've Built</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 section-heading inline-block">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto text-base leading-relaxed">
            A selection of things I've designed, built, and shipped. Each card is ready for you to fill in with your real projects.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
              style={{ transitionDelay: `${idx * 140}ms` }}
            >
              <TiltCard className="glow-border h-full">
                <div className="glow-border-inner p-7 relative overflow-hidden group flex flex-col">
                  {/* Top gradient stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`} />

                  {/* Soft hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

                  {/* Corner sparkle */}
                  <div className="sparkle absolute top-4 right-4 w-2 h-2 rounded-full"
                    style={{ backgroundColor: project.accent, "--duration": "2.2s", "--delay": `${idx * 0.4}s` } as React.CSSProperties} />

                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Icon + title row */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl text-2xl flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${project.glowColor}, rgba(255,255,255,0.55))`,
                          border: `1px solid ${project.accent}40`,
                          boxShadow: `0 4px 16px ${project.glowColor}`,
                        }}>
                        {project.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-black text-foreground mb-1 truncate">{project.title}</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="tag-pill px-2.5 py-0.5 rounded-full text-xs font-semibold"
                              style={{
                                background: `linear-gradient(135deg, ${project.glowColor}, rgba(255,255,255,0.2))`,
                                border: `1px solid ${project.accent}40`,
                                color: "hsl(var(--foreground))",
                              }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/58 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

                    {/* Action buttons */}
                    <div className="flex gap-3 mt-auto pt-2 border-t border-foreground/8">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full text-white transition-all hover:scale-105 hover:shadow-md"
                        style={{ background: `linear-gradient(135deg, ${project.accent}, rgba(139,92,246,0.8))`, boxShadow: `0 2px 12px ${project.glowColor}` }}>
                        <span>🔗</span> Live Demo
                      </a>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full glass-card text-foreground/70 hover:bg-white/75 transition-all hover:scale-105">
                        <span>🐙</span> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* "More on GitHub" nudge */}
        <div className={`text-center mt-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "700ms" }}>
          <a href="https://github.com/iamnelly25/portfolio-creator" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 glass-card px-7 py-3.5 rounded-full font-semibold text-foreground/70 hover:bg-white/75 transition-all hover:scale-105 shadow-md text-sm">
            <span className="text-base">🐙</span>
            See more on GitHub
            <span className="text-foreground/40">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ────────────────────────────────────────────────────────────────── */

function Contact() {
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref);
  const [copied, setCopied] = useState(false);
  const email = "neliswamapisa@outlook.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section ref={ref} id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="decorative-orb absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px]"
        style={{ background: "radial-gradient(ellipse, rgba(212,85,138,0.3), rgba(139,92,246,0.2), rgba(245,158,11,0.1))" }} />
      <div className="decorative-orb absolute top-10 left-10 w-64 h-64 opacity-20"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5), transparent)" }} />

      <div className="relative max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(212,85,138,0.12), rgba(139,92,246,0.10), rgba(245,158,11,0.08))",
              border: "1px solid rgba(212,85,138,0.22)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 20px 60px rgba(180,80,140,0.15)",
            }}>
            {/* Sparkles inside card */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <Sparkles count={12} />
            </div>

            {/* Corner decorations */}
            <div className="absolute top-5 left-5 w-20 h-20 rounded-full border border-pink-400/25 animate-pulse" />
            <div className="absolute bottom-5 right-5 w-16 h-16 rounded-full border border-violet-400/25 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-5 right-10 w-24 h-24 rounded-full border border-dashed border-amber-300/20 animate-spin-slow" />

            <div className="relative z-10">
              <div className="text-5xl mb-4 animate-float">💌</div>
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                <span className="gradient-text">Let's Connect</span>
              </h2>
              <p className="text-foreground/50 max-w-md mx-auto mb-10 text-lg leading-relaxed">
                Open to new opportunities, collaborations, and conversations in tech. Let's build something amazing together.
              </p>

              {/* Email */}
              <button onClick={copyEmail}
                className="inline-flex items-center gap-3 glass-card px-7 py-4 rounded-full font-semibold text-foreground/75 hover:bg-white/75 transition-all hover:scale-105 mb-8 shadow-lg group"
                style={{ boxShadow: "0 4px 20px rgba(180,80,140,0.15)" }}>
                <span className="text-xl">📧</span>
                <span className="text-sm font-bold">{email}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full transition-all ${copied ? "bg-emerald-400/20 text-emerald-600" : "bg-foreground/8 text-foreground/40 group-hover:text-foreground/60"}`}>
                  {copied ? "✓ Copied!" : "Copy"}
                </span>
              </button>

              {/* Social links */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { icon: "💼", label: "LinkedIn", color: "#0077b5", href: "https://www.linkedin.com/in/neliswa-mapisa-4643b130b/" },
                  { icon: "🐙", label: "GitHub", color: "#333", href: "https://github.com/iamnelly25/portfolio-creator" },
                ].map(({ icon, label, color, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 glass-card px-5 py-3 rounded-full text-sm font-semibold text-foreground/70 hover:bg-white/75 transition-all hover:scale-105 hover:shadow-lg">
                    <span className="text-base">{icon}</span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="py-8 px-6 relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(212,85,138,0.15)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-sm text-foreground/35">
          © {new Date().getFullYear()} <span className="gradient-text font-bold">Neliswa Mapisa</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-xs text-foreground/25">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400/60" />
          <span>IT Systems Support</span>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60" />
          <span>AI Prompt Engineer</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
          <span>Software Developer</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── ROOT ───────────────────────────────────────────────────────────────────── */

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
