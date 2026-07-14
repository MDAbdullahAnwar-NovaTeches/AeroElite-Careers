import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function AeroEliteCareers() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.style.backgroundColor = "rgba(11, 18, 32, 0.9)";
        nav.style.backdropFilter = "blur(16px)";
        nav.style.paddingTop = "12px";
        nav.style.paddingBottom = "12px";
      } else {
        nav.style.backgroundColor = "transparent";
        nav.style.backdropFilter = "none";
        nav.style.paddingTop = "16px";
        nav.style.paddingBottom = "16px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineSteps = [
    { num: "01", title: "Apply", desc: "Submit your credentials and flight hours through our digital portal.", gold: true },
    { num: "02", title: "Interview", desc: "A deep-dive into your technical skills and cultural alignment.", gold: false },
    { num: "03", title: "Training", desc: "Rigorous, paid simulation and safety immersion at our Academy.", gold: false },
    { num: "04", title: "Welcome", desc: "Earn your wings and join the world's most elite aviation family.", gold: false },
  ];

  return (
    <div
      className="overflow-x-hidden"
      style={{ backgroundColor: "#041426", color: "#d4e4fd" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body { font-family: 'Inter', sans-serif; }
        
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          vertical-align: middle;
        }
        
        .material-symbols-filled {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          vertical-align: middle;
        }
        
        .playfair { font-family: 'Playfair Display', serif; }
        .inter { font-family: 'Inter', sans-serif; }
        
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        
        .hero-bg {
          animation: zoom 20s infinite alternate;
        }
        
        .brass-gradient {
          background: linear-gradient(135deg, #D8B571 0%, #B08840 100%);
        }
        
        .scalloped-top {
          mask-image: radial-gradient(circle at 50% 0, transparent 20px, black 21px);
          -webkit-mask-image: radial-gradient(circle at 50% 0, transparent 20px, black 21px);
        }
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .card-hover:hover { transform: translateY(-8px); }
        .card-hover { transition: transform 0.3s ease; }
        
        .btn-hover:hover { transform: scale(1.05); }
        .btn-hover { transition: transform 0.2s ease; }
        
        .nav-link { color: #c6c6cc; text-decoration: none; transition: color 0.2s; }
        .nav-link:hover { color: #c0c6da; }
        
        .footer-link { color: #c6c6cc; text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: #ebc079; }
        
        .social-btn {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          transition: background-color 0.2s;
          text-decoration: none; color: #c6c6cc;
        }
        .social-btn:hover { background-color: rgba(255,255,255,0.05); }
        
        .story-img { transition: transform 0.7s ease; }
        .story-img:hover { transform: scale(1.1); }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .testimonial-card {
          min-width: 0;
          width: 100%;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 52px rgba(0, 0, 0, 0.14);
        }

        /* Timeline Styles */
        .timeline-line {
          position: absolute;
          background-color: rgba(255,255,255,0.2);
          z-index: 0;
        }

        .timeline-desktop { display: none; }
        .timeline-mobile { display: flex; }

        @media (min-width: 769px) {
          .hero-h1 { font-size: 64px; line-height: 72px; }
          .section-h2 { font-size: 48px; line-height: 56px; }
          .hide-mobile { display: flex !important; }
          .timeline-desktop { display: flex; }
          .timeline-mobile { display: none; }
          .testimonial-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .hero-h1 { font-size: 36px; line-height: 44px; }
          .section-h2 { font-size: 32px; line-height: 40px; }
          .hide-mobile { display: none !important; }
          .mobile-full { width: 100% !important; }
          .mobile-col { flex-direction: column !important; }
          .mobile-center { text-align: center !important; }
          .mobile-mx-auto { margin-left: auto !important; margin-right: auto !important; }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 769px) and (max-width: 1100px) {
          .testimonial-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>

      {/* TopNavBar */}
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 50,
          transition: "background-color 0.5s ease, padding 0.5s ease, backdrop-filter 0.5s ease",
          backgroundColor: "transparent",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 5vw, 64px)",
            paddingRight: "clamp(20px, 5vw, 64px)",
          }}
        >
          <div
            className="playfair"
            style={{
              fontSize: "32px",
              lineHeight: "40px",
              color: "#c0c6da",
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            AeroElite Careers
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              fontSize: "16px",
            }}
            className="hide-mobile"
          >
            {["Pilots", "Flight Attendants", "Fleet", "About", "Contact"].map((item) => (
              <a key={item} href="#" className="nav-link inter">
                {item}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              className="hide-mobile inter btn-hover"
              style={{
                padding: "8px 24px",
                border: "1px solid #ebc079",
                color: "#ebc079",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.05em",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = "rgba(201, 161, 93, 0.15)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
              }}
            >
              Pilot Careers
            </button>
            <button
              className="inter btn-hover"
              style={{
                padding: "8px 24px",
                backgroundColor: "#ebc079",
                color: "#422c00",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.05em",
                border: "none",
                cursor: "pointer",
              }}
            >
              Cabin Crew Careers
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          minHeight: "600px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div
            className="hero-bg"
            style={{
              backgroundImage: "url('/AviationHero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, #070B14 0%, rgba(7,11,20,0.4) 50%, transparent 100%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 5vw, 64px)",
            paddingRight: "clamp(20px, 5vw, 64px)",
            width: "100%",
            paddingTop: "80px",
          }}
        >
          <motion.div
            className="inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 16px",
              borderRadius: "9999px",
              backgroundColor: "rgba(201, 161, 93, 0.2)",
              border: "1px solid rgba(201, 161, 93, 0.3)",
              color: "#C9A15D",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              marginBottom: "32px",
            }}
          >
            <span style={{ marginRight: "8px" }}>NOW HIRING</span> •{" "}
            <span style={{ marginLeft: "8px" }}>PILOTS & FLIGHT ATTENDANTS</span>
          </motion.div>

          <motion.h1
            className="playfair hero-h1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              color: "white",
              marginBottom: "32px",
              maxWidth: "768px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Your Career{" "}
            <span style={{ color: "#ebc079", fontStyle: "italic", fontWeight: 400 }}>
              Takes Off
            </span>{" "}
            Here.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              marginBottom: "64px",
            }}
          >
            <button
              className="inter btn-hover"
              style={{
                padding: "16px 32px",
                backgroundColor: "#ebc079",
                color: "#422c00",
                borderRadius: "9999px",
                fontSize: "16px",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Apply as a Pilot <span>→</span>
            </button>
            <button
              className="inter"
              style={{
                padding: "16px 32px",
                border: "1px solid white",
                color: "white",
                borderRadius: "9999px",
                fontSize: "16px",
                fontWeight: 500,
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              }}
            >
              Apply as Flight Attendant <span>→</span>
            </button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "32px",
              padding: "32px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "24px",
            }}
          >
            {[
              { value: "FAA", label: "Certified Training" },
              { value: "1,200+", label: "Crew Hired" },
              { value: "98%", label: "Retention Rate" },
              { value: "6-Week", label: "Hiring Process" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", flexDirection: "column" }}>
                <span
                  className="playfair"
                  style={{ color: "#ebc079", fontSize: "24px", lineHeight: "32px", fontWeight: 500 }}
                >
                  {item.value}
                </span>
                <span
                  className="inter"
                  style={{
                    color: "#c6c6cc",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Two Paths Section */}
      <section style={{ padding: "128px 0", backgroundColor: "#F7F3EA", color: "#070B14" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 5vw, 64px)",
            paddingRight: "clamp(20px, 5vw, 64px)",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <h2
              className="playfair section-h2"
              style={{ marginBottom: "16px", fontStyle: "italic", fontWeight: 500 }}
            >
              Two Careers. One Standard of Excellence.
            </h2>
            <div style={{ width: "96px", height: "4px", backgroundColor: "#C9A15D", margin: "0 auto" }} />
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "48px",
            }}
          >
            <motion.div
              className="card-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "24px",
                height: "600px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "40px",
                backgroundColor: "#070B14",
                color: "white",
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              }}
            >
              <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
                <div
                  className="story-img"
                  style={{
                    backgroundImage: "url('/AviationHero.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                    opacity: 0.6,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, #070B14 0%, rgba(7,11,20,0.2) 50%, transparent 100%)",
                  }}
                />
              </div>
              <div style={{ position: "relative", zIndex: 10 }}>
                <h3
                  className="playfair"
                  style={{ fontSize: "32px", lineHeight: "40px", fontWeight: 500, marginBottom: "24px" }}
                >
                  Pilots
                </h3>
                <ul style={{ listStyle: "none", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  {["Comprehensive Type Ratings", "Accelerated Captain Track", "Modern Ultra-Long-Range Fleet"].map((item) => (
                    <li
                      key={item}
                      className="inter"
                      style={{ display: "flex", alignItems: "center", gap: "12px", color: "#c6c6cc" }}
                    >
                      <span className="material-symbols-outlined" style={{ color: "#ebc079" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  className="inter"
                  style={{
                    width: "100%",
                    padding: "16px",
                    backgroundColor: "#ebc079",
                    color: "#422c00",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "white";
                    (e.currentTarget as HTMLButtonElement).style.color = "#070B14";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ebc079";
                    (e.currentTarget as HTMLButtonElement).style.color = "#422c00";
                  }}
                >
                  Explore Pilot Roles
                </button>
              </div>
            </motion.div>

            <motion.div
              className="card-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "24px",
                height: "600px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "40px",
                backgroundColor: "white",
                color: "#070B14",
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
                <div
                  className="story-img"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfwgV79I842HugfrMMTlDY_V37Qub4i_fIVaLN7Ji8cZAczFNbhcOED_580E7rOQXyGGw1a3ANE6LbDMoqaAGoixhbMRSADpFIe2ofqLUkwG9vonKPI-sVDACzLkcuVFhgOxI7EKGDU17-LD8zRKkSxe12JMuXUI7knQG7IgvLGuNOfMeJ7607gebMxk8zB7v8VGOlZV2QGQIQSCjhTSuWCBuiTMnlMtoXbEyl7wDUCWqdu_2_ZsY2')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                    opacity: 0.6,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, #F7F3EA 0%, rgba(247,243,234,0.2) 50%, transparent 100%)",
                  }}
                />
              </div>
              <div style={{ position: "relative", zIndex: 10 }}>
                <h3
                  className="playfair"
                  style={{ fontSize: "32px", lineHeight: "40px", fontWeight: 500, marginBottom: "24px" }}
                >
                  Flight Attendants
                </h3>
                <ul style={{ listStyle: "none", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  {["Fully Paid Premium Training", "Exclusive Global Layovers", "Full Health & Wellness Perks"].map((item) => (
                    <li
                      key={item}
                      className="inter"
                      style={{ display: "flex", alignItems: "center", gap: "12px", color: "#475569" }}
                    >
                      <span className="material-symbols-outlined" style={{ color: "#C9A15D" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  className="inter"
                  style={{
                    width: "100%",
                    padding: "16px",
                    backgroundColor: "#070B14",
                    color: "white",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#C9A15D";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#070B14";
                  }}
                >
                  Explore Cabin Crew Roles
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Fly With Us */}
      <section style={{ padding: "128px 0", backgroundColor: "#070B14" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 5vw, 64px)",
            paddingRight: "clamp(20px, 5vw, 64px)",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "48px",
            }}
          >
            {[
              {
                icon: "verified_user",
                title: "Safety First",
                desc: "Industry-leading safety protocols and continuous operational training.",
              },
              {
                icon: "trending_up",
                title: "Real Growth",
                desc: "Defined career paths from entry-level to senior command and management.",
              },
              {
                icon: "support_agent",
                title: "Total Support",
                desc: "24/7 crew support network including health, mental well-being, and logistics.",
              },
              {
                icon: "balance",
                title: "Life Balance",
                desc: "Optimized scheduling designed for stability and quality time at home.",
              },
            ].map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    margin: "0 auto 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(235,192,121,0.3)",
                    borderRadius: "16px",
                    transform: "rotate(45deg)",
                    transition: "transform 0.5s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "rotate(90deg)";
                    const icon = (e.currentTarget as HTMLDivElement).querySelector(".rotate-icon") as HTMLElement;
                    if (icon) icon.style.transform = "rotate(-90deg)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "rotate(45deg)";
                    const icon = (e.currentTarget as HTMLDivElement).querySelector(".rotate-icon") as HTMLElement;
                    if (icon) icon.style.transform = "rotate(-45deg)";
                  }}
                >
                  <span
                    className="material-symbols-outlined rotate-icon"
                    style={{
                      color: "#ebc079",
                      fontSize: "28px",
                      transform: "rotate(-45deg)",
                      transition: "transform 0.5s ease",
                    }}
                  >
                    {pillar.icon}
                  </span>
                </div>
                <h4
                  className="playfair"
                  style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500, marginBottom: "16px", color: "#d4e4fd" }}
                >
                  {pillar.title}
                </h4>
                <p className="inter" style={{ color: "#c6c6cc", fontSize: "14px" }}>
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stories from the Sky */}
      <section style={{ padding: "128px 0", backgroundColor: "#F7F3EA", color: "#070B14", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 5vw, 64px)",
            paddingRight: "clamp(20px, 5vw, 64px)",
          }}
        >
          <motion.h2
            className="playfair"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 600,
              marginBottom: "96px",
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            Stories from the Sky
          </motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "128px" }}>
            {/* Story 1 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "64px",
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeLeft}
                style={{ flex: "1 1 300px", position: "relative" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    left: "-40px",
                    width: "160px",
                    height: "160px",
                    backgroundColor: "rgba(201,161,93,0.1)",
                    borderRadius: "50%",
                    zIndex: 0,
                  }}
                />
                <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.2)", position: "relative" }}>
                  <div
                    className="story-img"
                    style={{
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuPwwgFOsS5o3KQLx7fDLeyyLdgilrvG15uJRI4Cw37-ArZkT_zmNsB2_I8ujh-kmi6qnvbYqhtx65sjrpMzVDzcMnklhlj6GpUTYeLu41LzGFzmXbm734q81IQw9ePTWXADoabWylkS517MObeD0Hf5ks5JB5TBlLiig1qcBpo5_CTa4UYguKtdykYtZPDhPVrzv4DikMAAxpUiZmdgJuVb-byImWaLQVWJ7uaxaxnyxJZZfpVKQI')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      aspectRatio: "4/3",
                      width: "100%",
                    }}
                  />
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeRight}
                style={{ flex: "1 1 300px" }}
              >
                <span style={{ color: "#C9A15D", fontSize: "64px", fontFamily: "Georgia, serif", lineHeight: 1 }}>"</span>
                <h3
                  className="playfair"
                  style={{
                    fontSize: "clamp(20px, 3vw, 32px)",
                    lineHeight: "1.3",
                    fontStyle: "italic",
                    marginBottom: "24px",
                    marginTop: "-32px",
                    fontWeight: 500,
                  }}
                >
                  The cockpit at 40,000 feet during sunrise isn't just an office—it's a sanctuary. Every flight reminds me why I chose this life.
                </h3>
                <p className="inter" style={{ fontSize: "18px", lineHeight: "28px", color: "#475569", marginBottom: "32px" }}>
                  Captain Marcus Thorne shares his 15-year journey from a junior first officer to commanding our flagship fleet across the Atlantic.
                </p>
                <div
                  className="inter"
                  style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#C9A15D", textTransform: "uppercase" }}
                >
                  MARCUS THORNE • CAPTAIN
                </div>
              </motion.div>
            </div>

            {/* Story 2 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap-reverse",
                alignItems: "center",
                gap: "64px",
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeLeft}
                style={{ flex: "1 1 300px" }}
              >
                <span style={{ color: "#C9A15D", fontSize: "64px", fontFamily: "Georgia, serif", lineHeight: 1 }}>"</span>
                <h3
                  className="playfair"
                  style={{
                    fontSize: "clamp(20px, 3vw, 32px)",
                    lineHeight: "1.3",
                    fontStyle: "italic",
                    marginBottom: "24px",
                    marginTop: "-32px",
                    fontWeight: 500,
                  }}
                >
                  We don't just transport passengers; we create memories. Seeing a child's face light up at 30,000 feet is the highlight of my day.
                </h3>
                <p className="inter" style={{ fontSize: "18px", lineHeight: "28px", color: "#475569", marginBottom: "32px" }}>
                  Lead Flight Attendant Elena Russo discusses the art of bespoke service and the global community she's built within AeroElite.
                </p>
                <div
                  className="inter"
                  style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#C9A15D", textTransform: "uppercase" }}
                >
                  ELENA RUSSO • CABIN SERVICE LEAD
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeRight}
                style={{ flex: "1 1 300px", position: "relative" }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "-40px",
                    right: "-40px",
                    width: "160px",
                    height: "160px",
                    backgroundColor: "rgba(7,11,20,0.05)",
                    borderRadius: "50%",
                    zIndex: 0,
                  }}
                />
                <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}>
                  <div
                    className="story-img"
                    style={{
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCudf8ZKjJe0nryn0K3nMiYra7ArajXrjjVdfg9WqPDkfgX8lC1k1YSRrY0kdnqZttcN0gx_Sx0ISgN5gAjh9NFCyps_Tm-jqwOa3pCUN-TbXSayrGUS45fVxV2nIppQzMrDWeoqdgyx5qTiTS504Z8ZFHdRugIlfi4lUdkta2Q-2mreoO_IVPv76r471MyZnkIbgItEVdSd-kITUN_Q4FaIQjj7tqnDtDa4RzxIv8VbwUQEsEN9305')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      aspectRatio: "4/3",
                      width: "100%",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Training */}
      <section style={{ position: "relative", padding: "160px 0", overflow: "hidden", color: "white" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDr5oc5vUYIpWqm6kBFSbdQ3QbGuY69cXnzQXScPqwWyqTCgP2b8Xu4Uqu0BMyald24Qq-WP1lS9D43l-LUVnyLd7IGdhci0pZIslqMgCG9DnoKPNKLrGkkrht86ZEOMdos_coQLqe7oXmvhd5qJWUGnfyVxFiF9R8tWVYsHe-nXfeHmQhr6av6w9bxCRH378zHm4ql-HU2a_mqm5bk_xsm4PL1ckCybJQ2IqGd5sQGjuChukcLQF58')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(7,11,20,0.2)",
              backdropFilter: "blur(1px)",
            }}
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleUp}
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 5vw, 64px)",
            paddingRight: "clamp(20px, 5vw, 64px)",
            textAlign: "center",
          }}
        >
          <h2
            className="playfair"
            style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 600, marginBottom: "32px", letterSpacing: "-0.02em" }}
          >
            World-Class Facilities. <br />
            Future-Ready Training.
          </h2>
          <p
            className="inter"
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              color: "#c6c6cc",
              maxWidth: "672px",
              margin: "0 auto 48px",
            }}
          >
            Our Academy features the latest Full Flight Simulators (FFS) and a dedicated learning environment designed to push the boundaries of excellence.
          </p>
          <button
            className="inter"
            style={{
              padding: "16px 40px",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.05em",
              backgroundColor: "transparent",
              color: "white",
              cursor: "pointer",
              backdropFilter: "blur(12px)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "white";
              (e.currentTarget as HTMLButtonElement).style.color = "#070B14";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "white";
            }}
          >
            Tour Our Training Center
          </button>
        </motion.div>
      </section>

      {/* Testimonials Carousel */}
      <section
        style={{
          padding: "128px 0",
          background:
            "radial-gradient(circle at top left, rgba(201,161,93,0.14), transparent 28%), linear-gradient(180deg, #f8f3e8 0%, #f4eddf 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 5vw, 64px)",
            paddingRight: "clamp(20px, 5vw, 64px)",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "40px",
              gap: "16px",
            }}
          >
            <div>
              <h2
                className="playfair"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontStyle: "italic",
                  color: "#070B14",
                  fontWeight: 500,
                  lineHeight: 1.1,
                }}
              >
                Join the Elite.
              </h2>
              <p className="inter" style={{ color: "#64748b", maxWidth: "520px", marginTop: "12px" }}>
                Hear from those who've made AeroElite their home.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px" }} className="hide-mobile">
              {["arrow_back", "arrow_forward"].map((icon) => (
                <button
                  key={icon}
                  style={{
                    padding: "16px",
                    border: "1px solid #422c00",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(66, 44, 0, 0.3)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    color: "#422c00",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#422c00";
                    (e.currentTarget as HTMLButtonElement).style.color = "#D8B571";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(66, 44, 0, 0.3)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#422c00";
                  }}
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="testimonial-grid"
            style={{ paddingBottom: "16px" }}
          >
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0SYSar7UtQubwsR0JNv9y12g09qiFyv-KveZ3MsUpuy7WbIEDob2vVf3FVubPHYZgMPprmQRTetlshJjMsF4nIzxFCCNibobDcqRb2yhRgcGj40X5-GTeAc6kG9TUsFvIY5yU8TTQDZsN5_2BeKNK3UJekgSx2MjiHBNg4qKf833S-GaCD6fJV5YM_eBZiciWa8iHsj37gK-hvSawb225LeUiFXTfp2P_SQBevBa-xD5GXrMWZWHU",
                quote: "The support system here is unparalleled. I've never felt more valued as a professional aviator.",
                name: "SARAH JENKINS • FIRST OFFICER",
                initials: "SJ",
                accent: "linear-gradient(135deg, #d6b273 0%, #9a6f2f 100%)",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8h-5Cst2B42UeiLIuCL0n7SyBVUyjAuDMmTJA3KXVWyrPabiJoj7jaoiAJLhn4CPEMyKmEhFZp1mqxBMg8kMAbnTCj9bT_Dv1Tn_J1b38o0yLzWHRWQjuok6Yofn89tS87gGrUlTYijp2zzub3H75NBrUsbcxV4kT6DiZcz6vYzXO7o-_9EkKX3Bdt3HS01g8KCvATqSGWXL97tMKmpkqFF5LUaYUjLaBmsC8-QJJ-n0d6DoqaqO",
                quote: "Every day is a new adventure. The destinations are incredible, but the people make it a career.",
                name: "DAVID CHEN • CABIN CREW",
                initials: "DC",
                accent: "linear-gradient(135deg, #94a3b8 0%, #475569 100%)",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn9Krk44w5cvoOWCNxTuxqVXxkWw29jGGKz-2xnsNrguFAMeQY6W9nkcT3jSCekf9Fm0iKDZ-z8_PIwxkKi2BICy2F_1UWZUMkvIgoLrfQeKDtgLUv8h-1o__xy6IAfSGmVmfcUUpEyx0wwiL05R7m7pklai6OT1yZAgbX0mOAwuHB6mWG_usIJ4kgI_B-AOa75hFVTvVPiJKuIIHV5ORRBpiw9D4du-1VptHcjvLtQ5VuVzaEu-nW",
                quote: "AeroElite doesn't just hire pilots; they invest in commanders. The training here is best-in-class.",
                name: "CAPT. ROBERT VANCE • CHIEF PILOT",
                initials: "RV",
                accent: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
              },
            ].map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="testimonial-card"
                style={{
                  backgroundColor: "white",
                  padding: "56px clamp(20px, 3vw, 40px) 36px",
                  borderRadius: "28px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(15, 23, 42, 0.05)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      border: "4px solid white",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      background: t.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                    }}
                  >
                    <span style={{ position: "absolute", fontSize: "18px", zIndex: 0 }}>{t.initials}</span>
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      style={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div style={{ paddingTop: "26px", textAlign: "center" }}>
                  <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "16px" }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-filled" style={{ color: "#C9A15D" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p
                    className="inter"
                    style={{
                      color: "#475569",
                      fontStyle: "italic",
                      marginBottom: "24px",
                      fontSize: "16px",
                      lineHeight: 1.7,
                    }}
                  >
                    "{t.quote}"
                  </p>
                  <div
                    className="inter"
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#070B14",
                      textTransform: "uppercase",
                    }}
                  >
                    {t.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section style={{ padding: "128px 0", backgroundColor: "#070B14", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 5vw, 64px)",
            paddingRight: "clamp(20px, 5vw, 64px)",
          }}
        >
          <motion.h2
            className="playfair"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 600,
              marginBottom: "96px",
              textAlign: "center",
              color: "#d4e4fd",
              letterSpacing: "-0.02em",
            }}
          >
            Your Journey to the Sky
          </motion.h2>

          {/* Desktop Timeline */}
          <div className="timeline-desktop" style={{ position: "relative", justifyContent: "space-between" }}>
            <div
              className="timeline-line"
              style={{
                top: "40px",
                left: "12.5%",
                right: "12.5%",
                height: "2px",
              }}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              style={{ display: "flex", justifyContent: "space-between", width: "100%" }}
            >
              {timelineSteps.map((step) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "25%",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: step.gold ? "#C9A15D" : "#070B14",
                      color: step.gold ? "#422c00" : "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      fontWeight: 500,
                      fontFamily: "Playfair Display, serif",
                      border: step.gold ? "2px solid #C9A15D" : "2px solid rgba(255,255,255,0.2)",
                      marginBottom: "32px",
                      transition: "all 0.3s ease",
                      cursor: "default",
                      boxShadow: step.gold ? "0 0 20px rgba(201,161,93,0.3)" : "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#C9A15D";
                      (e.currentTarget as HTMLDivElement).style.color = step.gold ? "#422c00" : "#C9A15D";
                      (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
                      if (!step.gold) (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 20px rgba(201,161,93,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = step.gold ? "#C9A15D" : "rgba(255,255,255,0.2)";
                      (e.currentTarget as HTMLDivElement).style.color = step.gold ? "#422c00" : "white";
                      (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                      if (!step.gold) (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    {step.num}
                  </div>
                  <h4
                    className="playfair"
                    style={{ fontSize: "24px", fontWeight: 500, marginBottom: "16px", color: "#d4e4fd", textAlign: "center" }}
                  >
                    {step.title}
                  </h4>
                  <p className="inter" style={{ color: "#c6c6cc", fontSize: "14px", textAlign: "center", maxWidth: "200px" }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Timeline */}
          <div className="timeline-mobile" style={{ position: "relative", paddingLeft: "40px" }}>
            <div
              className="timeline-line"
              style={{
                top: 0,
                bottom: 0,
                left: "19px",
                width: "2px",
              }}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              style={{ display: "flex", flexDirection: "column", gap: "48px" }}
            >
              {timelineSteps.map((step) => (
                <motion.div
                  key={step.num}
                  variants={fadeRight}
                  style={{
                    display: "flex",
                    gap: "24px",
                    position: "relative",
                    zIndex: 1,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      minWidth: "40px",
                      backgroundColor: step.gold ? "#C9A15D" : "#070B14",
                      color: step.gold ? "#422c00" : "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: 600,
                      fontFamily: "Playfair Display, serif",
                      border: step.gold ? "2px solid #C9A15D" : "2px solid rgba(255,255,255,0.2)",
                      position: "absolute",
                      left: "-49px",
                      boxShadow: step.gold ? "0 0 15px rgba(201,161,93,0.3)" : "none",
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h4
                      className="playfair"
                      style={{ fontSize: "20px", fontWeight: 500, marginBottom: "8px", color: "#d4e4fd" }}
                    >
                      {step.title}
                    </h4>
                    <p className="inter" style={{ color: "#c6c6cc", fontSize: "14px" }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="brass-gradient" style={{ padding: "96px 0", color: "#422c00" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 5vw, 64px)",
            paddingRight: "clamp(20px, 5vw, 64px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          <div>
            <h2
              className="playfair"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 600, marginBottom: "16px", letterSpacing: "-0.02em" }}
            >
              Ready for Takeoff?
            </h2>
            <p className="inter" style={{ fontSize: "20px", fontWeight: 500, opacity: 0.8 }}>
              Start your career journey with AeroElite today.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <button
              className="inter btn-hover"
              style={{
                padding: "20px 40px",
                backgroundColor: "#070B14",
                color: "white",
                borderRadius: "9999px",
                fontSize: "16px",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
              }}
            >
              Apply as a Pilot
            </button>
            <button
              className="inter"
              style={{
                padding: "20px 40px",
                border: "2px solid #070B14",
                color: "#070B14",
                borderRadius: "9999px",
                fontSize: "16px",
                fontWeight: 500,
                backgroundColor: "transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#070B14";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#070B14";
              }}
            >
              Apply as Flight Attendant
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#070B14", paddingTop: "96px", paddingBottom: "48px", color: "#c6c6cc" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "clamp(20px, 5vw, 64px)",
            paddingRight: "clamp(20px, 5vw, 64px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "24px",
              marginBottom: "80px",
            }}
          >
            <div style={{ gridColumn: "span 1" }}>
              <div
                className="playfair"
                style={{ fontSize: "32px", color: "#c0c6da", fontWeight: 500, marginBottom: "32px" }}
              >
                AeroElite
              </div>
              <p className="inter" style={{ fontSize: "14px", maxWidth: "280px", marginBottom: "32px" }}>
                Setting the global standard for luxury aviation and professional career excellence since 2004.
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                {["public", "photo_camera", "work"].map((icon) => (
                  <a key={icon} href="#" className="social-btn">
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      {icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5
                className="inter"
                style={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "32px",
                }}
              >
                OPPORTUNITIES
              </h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Pilot Careers", "Cabin Crew", "Maintenance", "Corporate"].map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link inter" style={{ fontSize: "14px" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5
                className="inter"
                style={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "32px",
                }}
              >
                COMPANY
              </h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
                {["About Us", "Our Fleet", "Values", "Culture"].map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link inter" style={{ fontSize: "14px" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5
                className="inter"
                style={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "32px",
                }}
              >
                RESOURCES
              </h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Training Center", "Safety", "Contact Us", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link inter" style={{ fontSize: "14px" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              opacity: 0.6,
              textTransform: "uppercase",
            }}
            className="inter"
          >
            <div>© 2024 AEROELITE AVIATION. ALL RIGHTS RESERVED.</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
              {["TERMS OF SERVICE", "DIVERSITY & INCLUSION", "GLOBAL OFFICES"].map((item) => (
                <a key={item} href="#" style={{ color: "#c6c6cc", textDecoration: "none" }}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
