import { useState, useEffect, useRef } from "react";

function ITSupportIcon({ gradient }: { gradient: string }) {
  const id = "it-grad";
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f472b6" />
          <stop offset="0.5" stopColor="#e879f9" />
          <stop offset="1" stopColor="#c026d3" />
        </linearGradient>
      </defs>
      <rect x="4" y="6" width="32" height="20" rx="3" stroke={`url(#${id})`} strokeWidth="2.2" fill="none"/>
      <path d="M4 23h32" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round"/>
      <rect x="15" y="26" width="10" height="4" rx="1.5" stroke={`url(#${id})`} strokeWidth="2" fill="none"/>
      <path d="M10 34h20" stroke={`url(#${id})`} strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="28" cy="12" r="2.5" stroke={`url(#${id})`} strokeWidth="1.8" fill="none"/>
      <path d="M28 9.5V7M28 17v-2.5M24.5 12H22M34 12h-2.5M25.97 10.03l-1.77-1.76M31.77 15.73l-1.77-1.77M30.03 10.03l1.77-1.77M24.23 15.73l1.77-1.77" stroke={`url(#${id})`} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function AIIcon({ gradient }: { gradient: string }) {
  const id = "ai-grad";
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a78bfa" />
          <stop offset="0.5" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#c026d3" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="7" stroke={`url(#${id})`} strokeWidth="2.2" fill="none"/>
      <circle cx="20" cy="20" r="2.5" fill={`url(#${id})`}/>
      <circle cx="6" cy="12" r="2.5" stroke={`url(#${id})`} strokeWidth="2" fill="none"/>
      <circle cx="34" cy="12" r="2.5" stroke={`url(#${id})`} strokeWidth="2" fill="none"/>
      <circle cx="6" cy="28" r="2.5" stroke={`url(#${id})`} strokeWidth="2" fill="none"/>
      <circle cx="34" cy="28" r="2.5" stroke={`url(#${id})`} strokeWidth="2" fill="none"/>
      <circle cx="20" cy="4" r="2.5" stroke={`url(#${id})`} strokeWidth="2" fill="none"/>
      <circle cx="20" cy="36" r="2.5" stroke={`url(#${id})`} strokeWidth="2" fill="none"/>
      <path d="M13 16.5L8.2 13.8M27 16.5L31.8 13.8M13 23.5L8.2 26.2M27 23.5L31.8 26.2M20 13V6.5M20 27v6.5" stroke={`url(#${id})`} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function DevIcon({ gradient }: { gradient: string }) {
  const id = "dev-grad";
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e879f9" />
          <stop offset="0.5" stopColor="#c026d3" />
          <stop offset="1" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <rect x="4" y="7" width="32" height="26" rx="3" stroke={`url(#${id})`} strokeWidth="2.2" fill="none"/>
      <path d="M4 13h32" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="9" cy="10" r="1.3" fill={`url(#${id})`}/>
      <circle cx="14" cy="10" r="1.3" fill={`url(#${id})`}/>
      <circle cx="19" cy="10" r="1.3" fill={`url(#${id})`}/>
      <path d="M14 22l-4 4 4 4" stroke={`url(#${id})`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 22l4 4-4 4" stroke={`url(#${id})`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 20l-4 12" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

const SkillIcon = ({ index }: { index: number }) => {
  if (index === 0) return <ITSupportIcon gradient="" />;
  if (index === 1) return <AIIcon gradient="" />;
  return <DevIcon gradient="" />;
};

const skills = [
  {
    title: "IT Systems Support",
    description: "Providing expert technical support and maintaining robust IT infrastructure to keep systems running smoothly and efficiently.",
    tags: ["Hardware", "Networking", "Troubleshooting", "Infrastructure"],
    gradient: "from-rose-400 via-pink-400 to-fuchsia-400",
    glowColor: "rgba(244, 114, 182, 0.3)",
  },
  {
    title: "AI Prompt Engineer",
    description: "Crafting precise, effective AI prompts that unlock the full potential of language models to solve complex problems and drive innovation.",
    tags: ["GPT", "Prompt Design", "AI Tools", "Automation"],
    gradient: "from-violet-400 via-purple-400 to-fuchsia-500",
    glowColor: "rgba(167, 139, 250, 0.3)",
  },
  {
    title: "Software Developer",
    description: "Building elegant, scalable software solutions with clean code architecture and modern development practices.",
    tags: ["React", "TypeScript", "APIs", "Full-Stack"],
    gradient: "from-fuchsia-400 via-pink-400 to-rose-500",
    glowColor: "rgba(232, 121, 249, 0.3)",
  },
];

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

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = ["About", "Skills", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card border-b border-white/60 shadow-md py-3"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold gradient-text tracking-wide"
        >
          NM
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="nav-link text-sm font-medium text-foreground/75 hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #c2547c, #8b5cf6)",
              boxShadow: "0 4px 15px rgba(180, 80, 140, 0.3)",
            }}
          >
            Hire Me
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg glass-card"
        >
          <span className="block w-5 h-0.5 bg-foreground mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-foreground mb-1 transition-all" />
          <span className="block w-3 h-0.5 bg-foreground transition-all" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-card mx-4 mt-2 rounded-2xl p-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-left px-4 py-2 rounded-xl hover:bg-white/30 transition-colors text-sm font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-20">
      {/* Decorative floating orbs */}
      <div
        className="decorative-orb animate-float absolute top-20 left-10 w-64 h-64"
        style={{ background: "radial-gradient(circle, rgba(194,84,124,0.5), rgba(139,92,246,0.2))" }}
      />
      <div
        className="decorative-orb animate-float-slow absolute bottom-20 right-10 w-80 h-80"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), rgba(232,121,249,0.2))" }}
      />
      <div
        className="decorative-orb animate-float-delay absolute top-1/2 left-1/3 w-48 h-48"
        style={{ background: "radial-gradient(circle, rgba(232,121,249,0.35), rgba(194,84,124,0.2))" }}
      />

      {/* Floating decorative shapes */}
      <div className="animate-float absolute top-32 right-24 w-8 h-8 rounded-full border-2 border-pink-300/60 opacity-70" />
      <div className="animate-float-delay absolute top-56 left-20 w-5 h-5 rounded-full bg-violet-300/50" />
      <div className="animate-float-slow absolute bottom-40 left-32 w-10 h-10 rounded-lg border-2 border-fuchsia-300/50 opacity-60 rotate-12" />
      <div className="animate-float-delay-2 absolute bottom-32 right-40 w-6 h-6 rounded-full bg-pink-300/40" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(180,80,140,0.8) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-foreground/70">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
          <span className="gradient-text">Neliswa</span>
          <br />
          <span className="text-foreground/85">Mapisa</span>
        </h1>

        {/* Role badges */}
        <div className="flex flex-wrap justify-center gap-3 my-8 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
          {["IT Systems Support", "AI Prompt Engineer", "Software Developer"].map((role, i) => (
            <span
              key={role}
              className="glass-card px-4 py-2 rounded-full text-sm font-semibold text-foreground/80 skill-card-hover cursor-default"
              style={{
                borderLeft: `3px solid ${i === 0 ? "#f472b6" : i === 1 ? "#a78bfa" : "#e879f9"}`,
              }}
            >
              {role}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}>
          Bridging technology and innovation — delivering reliable systems, intelligent AI solutions,
          and elegant software with precision and passion.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
          <button
            onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 animate-pulse-glow"
            style={{
              background: "linear-gradient(135deg, #c2547c 0%, #8b5cf6 100%)",
              boxShadow: "0 4px 20px rgba(180, 80, 140, 0.4)",
            }}
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-full font-semibold glass-card text-foreground/80 hover:bg-white/70 transition-all duration-300 hover:scale-105"
          >
            About Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-3 rounded-full bg-foreground/30 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref);

  return (
    <section ref={ref} id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 decorative-orb opacity-20"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left: decorative visual */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main avatar circle */}
              <div
                className="w-72 h-72 rounded-full flex items-center justify-center text-8xl animate-pulse-glow"
                style={{
                  background: "linear-gradient(135deg, rgba(194,84,124,0.15), rgba(139,92,246,0.15))",
                  border: "2px solid rgba(194,84,124,0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span>👩🏿‍💻</span>
              </div>

              {/* Floating badge cards */}
              <div className="glass-card absolute -top-4 -right-8 px-4 py-2.5 rounded-2xl animate-float shadow-lg">
                <span className="text-xs font-semibold text-foreground/70">💼 Tech Professional</span>
              </div>
              <div className="glass-card absolute -bottom-4 -left-8 px-4 py-2.5 rounded-2xl animate-float-delay shadow-lg">
                <span className="text-xs font-semibold text-foreground/70">🤖 AI Specialist</span>
              </div>
              <div className="glass-card absolute top-1/2 -right-12 px-4 py-2.5 rounded-2xl animate-float-delay-2 shadow-lg">
                <span className="text-xs font-semibold text-foreground/70">✨ Innovator</span>
              </div>

              {/* Decorative rings */}
              <div
                className="absolute inset-0 rounded-full border border-pink-300/30 scale-110 animate-pulse"
                style={{ animationDuration: "3s" }}
              />
              <div
                className="absolute inset-0 rounded-full border border-violet-300/20 scale-125 animate-pulse"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              />
            </div>
          </div>

          {/* Right: About content */}
          <div>
            <div className="section-heading mb-6">
              <h2 className="text-4xl font-black text-foreground">About Me</h2>
            </div>

            <div
              className="glass-card rounded-3xl p-8 shadow-xl mb-6"
              style={{ background: "rgba(255,255,255,0.6)" }}
            >
              <p className="text-foreground/50 text-base leading-relaxed italic">
                ✏️ This section is ready for your story. Share your background, values, journey, and what drives you as a professional. What makes you uniquely you?
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Expertise", value: "3+ Areas" },
                { label: "Focus", value: "Innovation" },
                { label: "Approach", value: "Results-Driven" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-4 text-center skill-card-hover"
                >
                  <div className="text-lg font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-foreground/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref);

  return (
    <section ref={ref} id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient wash */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(194,84,124,0.06) 50%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-4">
            <span className="text-sm text-foreground/60">What I Do</span>
          </div>
          <h2 className="text-5xl font-black mb-4 section-heading inline-block">
            <span className="gradient-text">My Expertise</span>
          </h2>
          <p className="text-foreground/55 max-w-xl mx-auto">
            A fusion of technical depth and creative problem-solving across the modern technology landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={skill.title}
              className={`skill-card-hover transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div
                className="glass-card rounded-3xl p-8 h-full relative overflow-hidden group"
                style={{
                  boxShadow: `0 8px 30px ${skill.glowColor}, 0 2px 8px rgba(0,0,0,0.05)`,
                }}
              >
                {/* Top gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${skill.gradient}`}
                />

                {/* Background glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="mb-6 w-20 h-20 flex items-center justify-center rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${skill.glowColor}, rgba(255,255,255,0.5))`,
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.6)",
                    }}
                  >
                    <SkillIcon index={idx} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{skill.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">{skill.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: `linear-gradient(135deg, ${skill.glowColor}, rgba(255,255,255,0.3))`,
                          border: "1px solid rgba(255,255,255,0.5)",
                          color: "var(--color-foreground)",
                          opacity: 0.9,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef<HTMLElement>(null);
  const visible = useIntersection(ref);
  const [copied, setCopied] = useState(false);

  const email = "neliswa.mapisa@email.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section ref={ref} id="contact" className="py-24 px-6 relative overflow-hidden">
      <div
        className="decorative-orb absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px]"
        style={{ background: "radial-gradient(ellipse, rgba(194,84,124,0.25), rgba(139,92,246,0.15))" }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Main contact card */}
          <div
            className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(194,84,124,0.12), rgba(139,92,246,0.12))",
              border: "1px solid rgba(194,84,124,0.25)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Corner decorations */}
            <div className="absolute top-6 left-6 w-20 h-20 rounded-full border border-pink-300/30 animate-pulse" />
            <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full border border-violet-300/30 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-6 right-10 w-3 h-3 rounded-full bg-pink-300/50 animate-float" />
            <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-violet-300/50 animate-float-delay" />

            <h2 className="text-5xl font-black mb-4">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <p className="text-foreground/55 max-w-md mx-auto mb-10 text-lg">
              Open to new opportunities, collaborations, and interesting conversations in tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 glass-card px-6 py-3.5 rounded-full font-medium text-foreground/75 hover:bg-white/70 transition-all hover:scale-105 group"
              >
                <span className="text-lg">📧</span>
                <span className="text-sm">{email}</span>
                <span className="text-xs text-foreground/40 group-hover:text-foreground/60 transition-colors">
                  {copied ? "✓ Copied!" : "Copy"}
                </span>
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: "💼", label: "LinkedIn", href: "#" },
                { icon: "🐙", label: "GitHub", href: "#" },
                { icon: "🐦", label: "Twitter", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-2 glass-card px-5 py-2.5 rounded-full text-sm font-medium text-foreground/70 hover:bg-white/70 transition-all hover:scale-105 hover:shadow-md"
                >
                  <span>{social.icon}</span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-foreground/40">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">Neliswa Mapisa</span>. All rights reserved.
        </p>
        <p className="text-xs text-foreground/30">
          IT Systems Support · AI Prompt Engineer · Software Developer
        </p>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
