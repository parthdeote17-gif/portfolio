import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

// Project Screens (Ensure these exist in your assets folder)
import gcLogin1 from "../assets/gc1.png";
import gcLogin2 from "../assets/gc2.png";
import gcProduct from "../assets/gc3.png";
import gcAI from "../assets/gc4.png";
import gcList1 from "../assets/gc5.png";
import gcList2 from "../assets/gc6.png";

/* ─────────────────────────────────────────────────────────────
   Hook – mobile detection  (UNCHANGED)
───────────────────────────────────────────────────────────── */
const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setIsMobile(event.matches);
    mediaQueryList.addEventListener("change", listener);
    setIsMobile(mediaQueryList.matches);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);
  return isMobile;
};

/* ─────────────────────────────────────────────────────────────
   Floating Particle  (decorative)
───────────────────────────────────────────────────────────── */
const Particle = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width:  style.size,
      height: style.size,
      background: "rgba(255,255,255,0.22)",
      animation: `floatUp ${style.duration}s linear ${style.delay}s infinite`,
      left:   style.left,
      bottom: "-10px",
    }}
  />
);

/* ─────────────────────────────────────────────────────────────
   Main Component
───────────────────────────────────────────────────────────── */
export default function Project() {
  const isMobile = useIsMobile();
  const sceneRef  = useRef(null);

  /* ── Features data  (UNCHANGED) ── */
  const gocartFeatures = useMemo(() => [
    {
      feature:   "Secure Auth & Login",
      tag:       "Authentication",
      bgColor:   "#0f0c29",
      accent:    "#a855f7",
      accentRgb: "168,85,247",
      image:     gcLogin1,
    },
    {
      feature:   "User Credentials",
      tag:       "User Management",
      bgColor:   "#1a1040",
      accent:    "#8b5cf6",
      accentRgb: "139,92,246",
      image:     gcLogin2,
    },
    {
      feature:   "Dynamic Product Listing",
      tag:       "Catalog",
      bgColor:   "#0d1b4b",
      accent:    "#6366f1",
      accentRgb: "99,102,241",
      image:     gcList1,
    },
    {
      feature:   "Curated Recommendations",
      tag:       "Personalization",
      bgColor:   "#0a2540",
      accent:    "#3b82f6",
      accentRgb: "59,130,246",
      image:     gcList2,
    },
    {
      feature:   "Detailed Product View",
      tag:       "Product Detail",
      bgColor:   "#12003e",
      accent:    "#c084fc",
      accentRgb: "192,132,252",
      image:     gcProduct,
    },
    {
      feature:   "Gemini AI Assistant",
      tag:       "AI Powered",
      bgColor:   "#000000",
      accent:    "#0bf8ea",
      accentRgb: "11,248,234",
      image:     gcAI,
    },
  ], []);

  /* ── Scroll logic  (UNCHANGED) ── */
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * gocartFeatures.length),
      gocartFeatures.length - 1
    );
    setActiveIndex(index);
  });

  const activeFeature = gocartFeatures[activeIndex];
  const projectLink   = "https://github.com/parthdeote17-gif/GoCart";
  const progressWidth = ((activeIndex + 1) / gocartFeatures.length) * 100 + "%";

  /* ── Particles seed ── */
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        left:     `${(i * 5.8 + 3) % 100}%`,
        duration: 6 + (i % 5),
        delay:    (i * 0.7) % 4,
        size:     `${1.5 + (i % 2.5)}px`,
      })),
    []
  );

  /* ════════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════════ */
  return (
    <>
      {/* ── Global keyframes injected once (Fonts removed to match other pages) ── */}
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1);   opacity: 0; }
          10%  { opacity: 0.5; }
          90%  { opacity: 0.15; }
          100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.9); opacity: 0.7; }
          100% { transform: scale(1.18); opacity: 0; }
        }
        @keyframes scanline {
          0%   { top: -4%; }
          100% { top: 104%; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.10; }
          50%       { opacity: 0.22; }
        }
      `}</style>

      <section
        id="projects"
        ref={sceneRef}
        className="relative text-white w-full font-sans"
        style={{
          height:          `${gocartFeatures.length * 100}vh`,
          backgroundColor: activeFeature.bgColor,
          transition:      "background-color 0.8s cubic-bezier(0.4,0,0.2,1)",
        }}
      >

        {/* ── Floating particles ── */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {particles.map((p, i) => <Particle key={i} style={p} />)}
        </div>

        {/* ── Ambient radial glow  (tracks accent colour) ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse 70% 55% at 50% 60%, rgba(${activeFeature.accentRgb},0.09) 0%, transparent 75%)`,
            transition: "background 0.9s ease",
            animation:  "glowPulse 4s ease-in-out infinite",
          }}
        />

        {/* ── Noise grain overlay ── */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize:  "180px",
          }}
        />

        {/* ════════ STICKY SCENE ════════ */}
        <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-between overflow-hidden pb-6 sm:pb-8">

          {/* ── Progress bar  ── */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-white/5 z-40">
            <motion.div
              style={{
                height:     "100%",
                width:      progressWidth,
                background: `linear-gradient(90deg, rgba(${activeFeature.accentRgb},0.4), rgba(${activeFeature.accentRgb},1))`,
                boxShadow:  `0 0 16px rgba(${activeFeature.accentRgb},0.8)`,
                transition: "width 0.5s ease-in-out, background 0.9s ease, box-shadow 0.9s ease",
              }}
            />
          </div>

          {/* ── Header (Shrink 0 to ensure it takes required space) ── */}
          <div className={`z-10 text-center px-4 shrink-0 ${isMobile ? "mt-6" : "mt-8"}`}>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.45em] mb-2 font-semibold"
              style={{ color: `rgba(${activeFeature.accentRgb},0.55)` }}
            >
              ◈ Portfolio Project ◈
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-none">
              GoCart{" "}
              <span
                className="italic font-light"
                style={{ color: `rgba(${activeFeature.accentRgb},0.85)`, transition: "color 0.9s ease" }}
              >
                AI
              </span>{" "}
              E-Commerce
            </h2>

            {/* Step counter pill */}
            <div className="mt-3 flex justify-center">
              <span
                className="font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full border"
                style={{
                  color:       `rgba(${activeFeature.accentRgb},0.75)`,
                  borderColor: `rgba(${activeFeature.accentRgb},0.2)`,
                  background:  `rgba(${activeFeature.accentRgb},0.06)`,
                  transition:  "all 0.6s ease",
                }}
              >
                {String(activeIndex + 1).padStart(2, "0")} / {String(gocartFeatures.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ── Cards area (Takes remaining height without pushing button out) ── */}
          <div className="relative w-full flex-1 flex items-center justify-center min-h-0 my-4">
            {gocartFeatures.map((featureObj, index) => (
              <div
                key={featureObj.feature}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${
                  activeIndex === index
                    ? "opacity-100 z-20 scale-100"
                    : "opacity-0 z-0 sm:z-10 scale-95"
                }`}
                style={{ width: "85%", maxWidth: "1200px" }}
              >

                {/* Feature label + title */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={featureObj.feature}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="mb-4"
                    >
                      {/* Tag chip */}
                      <span
                        className="font-mono text-[10px] font-medium px-2.5 py-1 rounded-sm uppercase tracking-[0.2em] border inline-block mb-2"
                        style={{
                          color:       featureObj.accent,
                          borderColor: `rgba(${featureObj.accentRgb},0.3)`,
                          background:  `rgba(${featureObj.accentRgb},0.08)`,
                        }}
                      >
                        {featureObj.tag}
                      </span>

                      <h3
                        className={`text-[clamp(1.5rem,4vw,3rem)] font-bold leading-none tracking-tight italic ${
                          isMobile ? "text-center" : ""
                        }`}
                      >
                        {featureObj.feature}
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Image frame (Height adjusted to fit neatly) ── */}
                <div
                  className={`relative w-full overflow-hidden ${
                    isMobile ? "rounded-xl" : "rounded-2xl"
                  } h-[45vh] sm:h-[60vh] max-h-[600px]`}
                  style={{
                    background:     "rgba(255,255,255,0.02)",
                    border:         `1px solid rgba(${featureObj.accentRgb},0.18)`,
                    boxShadow:      `0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05), 0 32px 80px rgba(0,0,0,0.6)`,
                    backdropFilter: "blur(10px)",
                    zIndex:         10,
                  }}
                >

                  {/* Corner bracket accents */}
                  {[0, 1, 2, 3].map((ci) => {
                    const isRight  = ci % 2 === 1;
                    const isBottom = ci >= 2;
                    return (
                      <div
                        key={ci}
                        className="absolute w-4 h-4 pointer-events-none"
                        style={{
                          zIndex: 20,
                          top:    isBottom ? "auto" : 0,
                          bottom: isBottom ? 0 : "auto",
                          left:   isRight  ? "auto" : 0,
                          right:  isRight  ? 0 : "auto",
                        }}
                      >
                        <div style={{ position:"absolute", width:"12px", height:"1.5px", background: featureObj.accent, opacity:0.65,
                          top:    isBottom ? "auto" : 0, bottom: isBottom ? 0 : "auto",
                          left:   isRight  ? "auto" : 0, right:  isRight  ? 0 : "auto" }}
                        />
                        <div style={{ position:"absolute", width:"1.5px", height:"12px", background: featureObj.accent, opacity:0.65,
                          top:    isBottom ? "auto" : 0, bottom: isBottom ? 0 : "auto",
                          left:   isRight  ? "auto" : 0, right:  isRight  ? 0 : "auto" }}
                        />
                      </div>
                    );
                  })}

                  {/* Scanline sweep */}
                  <div
                    className="absolute left-0 w-full h-[2px] pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(${featureObj.accentRgb},0.14), transparent)`,
                      animation:  "scanline 5s linear infinite",
                      zIndex:     15,
                    }}
                  />

                  {/* Image */}
                  <img
                    src={featureObj.image}
                    alt={featureObj.feature}
                    className="w-full h-full object-contain"
                    style={{ position:"relative", zIndex:10, objectPosition:"top center" }}
                    loading="lazy"
                  />

                  {/* Top-bottom vignette */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      zIndex:     11,
                      background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.2) 100%)",
                    }}
                  />

                  {/* Glow orbs */}
                  <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
                    style={{ backgroundColor:featureObj.accent, filter:"blur(100px)", opacity:0.1, animation:"glowPulse 4s ease-in-out infinite" }}
                  />
                  <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none"
                    style={{ backgroundColor:featureObj.accent, filter:"blur(80px)", opacity:0.06 }}
                  />
                </div>

              </div>
            ))}
          </div>

          {/* ── Right-side dot indicators ── */}
          <div className="absolute right-3 sm:right-7 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 items-center">
            {gocartFeatures.map((feature, index) => (
              <div key={index} className="relative flex items-center justify-center">
                {activeIndex === index && (
                  <div
                    className="absolute rounded-full"
                    style={{
                      width:  "20px",
                      height: "20px",
                      border: `1px solid ${feature.accent}`,
                      animation: "pulseRing 1.5s ease-out infinite",
                    }}
                  />
                )}
                <div
                  className="rounded-full transition-all duration-500"
                  style={{
                    width:           activeIndex === index ? "10px" : "5px",
                    height:          activeIndex === index ? "10px" : "5px",
                    backgroundColor: activeIndex === index ? feature.accent : "rgba(255,255,255,0.18)",
                    boxShadow:       activeIndex === index ? `0 0 12px ${feature.accent}, 0 0 4px ${feature.accent}` : "none",
                  }}
                />
              </div>
            ))}
          </div>

          {/* ── GitHub button (Positioned below the images via flex layout) ── */}
          <div className="relative z-30 shrink-0">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Project on GitHub"
              className="group relative flex items-center gap-2.5 px-7 py-3 font-bold rounded-full overflow-hidden"
              style={{
                background:     "rgba(255,255,255,0.04)",
                border:         `1px solid rgba(${activeFeature.accentRgb},0.35)`,
                boxShadow:      `0 0 24px rgba(${activeFeature.accentRgb},0.12), inset 0 1px 0 rgba(255,255,255,0.07)`,
                backdropFilter: "blur(12px)",
                color:          "white",
                transition:     "all 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background  = `rgba(${activeFeature.accentRgb},0.14)`;
                e.currentTarget.style.boxShadow   = `0 0 40px rgba(${activeFeature.accentRgb},0.3), inset 0 1px 0 rgba(255,255,255,0.1)`;
                e.currentTarget.style.transform   = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background  = "rgba(255,255,255,0.04)";
                e.currentTarget.style.boxShadow   = `0 0 24px rgba(${activeFeature.accentRgb},0.12), inset 0 1px 0 rgba(255,255,255,0.07)`;
                e.currentTarget.style.transform   = "scale(1)";
              }}
            >
              {/* Shimmer layer */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(105deg, transparent 40%, rgba(${activeFeature.accentRgb},0.12) 50%, transparent 60%)`,
                  transition: "opacity 0.4s ease",
                }}
              />

              {/* GitHub icon */}
              <svg className="relative z-10" style={{ width:"18px", height:"18px" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>

              <span className="relative z-10 font-mono text-sm" style={{ letterSpacing:"0.08em" }}>
                View on GitHub
              </span>

              {/* Accent dot */}
              <span
                className="relative z-10 w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: activeFeature.accent,
                  boxShadow:       `0 0 6px ${activeFeature.accent}`,
                  transition:      "background-color 0.9s ease, box-shadow 0.9s ease",
                }}
              />
            </a>
          </div>

          {/* ── Bottom-left watermark step number ── */}
          <div
            className="absolute bottom-7 left-6 z-10 pointer-events-none hidden sm:block"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize:   "7rem",
              lineHeight: 1,
              color:      `rgba(${activeFeature.accentRgb},0.05)`,
              transition: "color 0.9s ease",
              userSelect: "none",
            }}
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </div>

        </div>
      </section>
    </>
  );
}