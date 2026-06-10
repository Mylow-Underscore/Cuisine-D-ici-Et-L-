"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";


const fadeUpVariants: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItemVariants: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const popVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "backOut" } },
};


function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}


function StaggerList({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}


function BotanicalDivider() {
  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <svg viewBox="0 0 600 40" className="w-full h-10 block overflow-visible">
        <motion.rect
          x="0" y="19.5" width="220" height="1" fill="#7A8E40"
          style={{ originX: "220px", originY: "20px" }}
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.9, ease: "easeOut", delay: 0.2 } } }}
        />

        <motion.rect
          x="380" y="19.5" width="220" height="1" fill="#7A8E40"
          style={{ originX: "380px", originY: "20px" }}
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.9, ease: "easeOut", delay: 0.2 } } }}
        />
        
        <motion.circle
          cx="300" cy="20" r="4" fill="#C97B3A"
          variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { duration: 0.4, delay: 0.7, type: "spring", stiffness: 300 } } }}
        />

        {[
          { cx: 270, cy: 20, rx: 18, ry: 7, rot: -30 },
          { cx: 330, cy: 20, rx: 18, ry: 7, rot: 30 },
          { cx: 252, cy: 16, rx: 11, ry: 5, rot: -50 },
          { cx: 348, cy: 16, rx: 11, ry: 5, rot: 50 },
        ].map((l, i) => (
          <motion.ellipse
            key={i}
            cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry}
            fill="none" stroke="#7A8E40" strokeWidth="1.2"
            transform={`rotate(${l.rot} ${l.cx} ${l.cy})`}
            variants={{
              hidden:  { opacity: 0, scale: 0.4 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.45, delay: 0.8 + i * 0.08, ease: "backOut" } },
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}


const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.99 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>
);
const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);


const NAV_ITEMS = [
  { label: "Accueil",  id: "hero" },
  { label: "À propos", id: "apropos" },
  { label: "Carte",    id: "carte" },
  { label: "Contact",  id: "contact" },
] as const;

const menuItems = [
  {
    category: "Entrées",
    items: [
      { name: "Soupe du jour",         desc: "Fraîche, de saison, préparée chaque matin", popular: false },
      { name: "Salade du jardin",      desc: "Légumes locaux, vinaigrette aux herbes",    popular: false },
      { name: "Quiche Végétarienne",   desc: "Légumes de saison, pâte maison croustillante", popular: true },
      { name: "Terrine maison",        desc: "Recette traditionnelle, cornichons artisanaux", popular: false },
    ],
  },
  {
    category: "Plats",
    items: [
      { name: "Pâtes fraîches maison",  desc: "Sauce tomate du moment, basilic frais",          popular: false },
      { name: "Tajine de légumes",      desc: "Épices douces, semoule, raisins secs",            popular: false },
      { name: "Poulet rôti aux herbes", desc: "Élevé en plein air, aromates du Lauragais",       popular: false },
    ],
  },
  {
    category: "Desserts & Café",
    items: [
      { name: "Café Gourmand",        desc: "Café accompagné de mignardises maison",            popular: true  },
      { name: "Tarte du jour",        desc: "Fruits de saison, pâte sablée maison",             popular: false },
      { name: "Fondant au chocolat",  desc: "Cœur coulant, crème anglaise à la vanille",        popular: false },
    ],
  },
];

const pillars = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7A8E40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6.5 12C6.5 8 10 4.5 19 3c0 0-1 8-5 11.5-3.5 3-7 1.5-7.5 1.5S2.5 14 6.5 12z" />
        <path d="M12 21s-.5-5 2.5-8.5" />
      </svg>
    ),
    title: "Produits frais",
    desc:  "Nous travaillons avec des producteurs locaux et de saison pour composer des assiettes qui ont du goût et du sens.",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C97B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
        <line x1="6" y1="17" x2="18" y2="17" />
      </svg>
    ),
    title: "Cuisine maison",
    desc:  "Tout est préparé sur place : pâtes fraîches, tartes du jour — chaque plat porte la marque d'un vrai savoir-faire artisanal.",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7A8E40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Accueil chaleureux",
    desc:  "Un service attentionné, une ambiance conviviale — notre traiteur assure aussi buffets et réceptions sur mesure.",
  },
];


function SplashScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(155deg, #5C6B2E 0%, #3A4A1A 50%, #1E1C17 100%)" }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {[140, 280, 420].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full border border-[#C97B3A]/20"
          style={{ width: size, height: size }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
        />
      ))}

      <motion.p
        className="text-[#E8A85A] text-xs font-bold uppercase tracking-[0.28em] mb-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Restaurant · Bram, Aude
      </motion.p>

      <motion.h1
        className="font-bold text-white leading-tight text-center"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(64px,10vw,110px)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
      >
        Ô4
      </motion.h1>

      <motion.h2
        className="italic font-normal text-[#E8A85A] leading-tight text-center"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px,3vw,28px)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        Cuisine d'ici et là
      </motion.h2>

      <div className="mt-12 w-48 h-px bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#C97B3A] rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
}


export default function App() {
  const currentYear = new Date().getFullYear();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [loaded,    setLoaded]    = useState(false);


  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="overflow-x-hidden"
      style={{ fontFamily: "'Lato', sans-serif", background: "#FAF7F0", color: "#2C2A25" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      <AnimatePresence mode="wait">
        {!loaded && <SplashScreen key="splash" onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-[border-color,background] duration-300 ${scrolled ? "border-b" : ""}`}
        style={{
          background:    scrolled ? "rgba(250,247,240,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderColor:   scrolled ? "#EDE8DB" : "transparent",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo("hero")}
            className="text-lg font-bold tracking-wide transition-colors duration-300"
            style={{ fontFamily: "'Playfair Display', serif", color: scrolled ? "#5C6B2E" : "#fff" }}
          >
            Restaurant Ô4
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs font-bold uppercase tracking-widest transition-colors duration-200"
                style={{ color: scrolled ? "#6B6660" : "rgba(255,255,255,0.8)" }}
              >
                {label}
              </button>
            ))}
            <a
              href="tel:0684415681"
              className="bg-[#C97B3A] hover:bg-[#b5692a] text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded transition-colors"
            >
              Réserver
            </a>
          </div>

          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 w-10 h-10"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              className={`block w-6 h-0.5 rounded-full ${scrolled ? "bg-[#2C2A25]" : "bg-white"}`}
              initial={false}
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              transition={{ duration: 0.22 }}
            />
            <motion.span
              className={`block w-6 h-0.5 rounded-full ${scrolled ? "bg-[#2C2A25]" : "bg-white"}`}
              initial={false}
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.22 }}
            />
            <motion.span
              className={`block w-6 h-0.5 rounded-full ${scrolled ? "bg-[#2C2A25]" : "bg-white"}`}
              initial={false}
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              transition={{ duration: 0.22 }}
            />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden bg-[#FAF7F0] border-t border-[#EDE8DB] px-6 py-4 flex flex-col gap-4 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{   height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              {NAV_ITEMS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-sm font-bold uppercase tracking-widest text-left text-[#6B6660] hover:text-[#5C6B2E] transition-colors"
                >
                  {label}
                </button>
              ))}
              <a
                href="tel:0684415681"
                className="bg-[#C97B3A] text-white text-sm font-bold uppercase tracking-wider px-5 py-2 rounded text-center"
              >
                Réserver — 06 84 41 56 81
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-24 pb-20 text-center"
        style={{ background: "linear-gradient(155deg, #5C6B2E 0%, #3A4A1A 50%, #1E1C17 100%)" }}
      >
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: heroY }}>
          <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-[#C97B3A]/15" />
          <div className="absolute -top-10 -right-10 w-[300px] h-[300px] rounded-full border border-[#C97B3A]/10" />
          <div className="absolute bottom-16  -left-28  w-[380px] h-[380px] rounded-full border border-white/5" />
        </motion.div>

        <motion.p
          className="text-[#E8A85A] text-xs font-bold uppercase tracking-[0.22em] mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.4 }}
        >
          Restaurant · Bram, Aude · 20–30 €
        </motion.p>

        <motion.h1
          className="font-bold text-white leading-tight mb-2"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(72px, 12vw, 130px)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Ô4
        </motion.h1>

        <motion.h2
          className="font-normal italic text-[#E8A85A] leading-tight mb-5"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3.5vw, 38px)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.68, ease: [0.22, 1, 0.36, 1] }}
        >
          Cuisine d'ici et là
        </motion.h2>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.78 }}
        >
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full">
            <span className="text-[#E8A85A]">★</span> 4,6
            <span className="font-normal text-white/60 text-xs">(469 avis)</span>
          </span>
          <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full">
            🏳️‍🌈 LGBTQ+ friendly
          </span>
          <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full">
            Sur place · À emporter
          </span>
        </motion.div>

        <motion.p
          className="text-white/65 text-lg leading-relaxed max-w-lg mx-auto mb-10 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.92 }}
        >
          Cuisine raffinée, produits frais et saveurs qui voyagent — sur place ou à emporter, au cœur du Lauragais.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.08 }}
        >
          <motion.button
            onClick={() => scrollTo("carte")}
            className="bg-[#C97B3A] text-white font-bold uppercase tracking-wider text-sm px-9 py-3.5 rounded"
            whileHover={{ scale: 1.04, backgroundColor: "#b5692a" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Voir la carte
          </motion.button>
          <motion.a
            href="https://www.facebook.com/cuisinedicietla?locale=fr_FR"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/30 text-white text-sm px-7 py-3.5 rounded"
            whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.65)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FacebookIcon /> Facebook
          </motion.a>
          <motion.a
            href="https://www.instagram.com/cuisinedicietla/"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/30 text-white text-sm px-7 py-3.5 rounded"
            whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.65)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <InstagramIcon /> Instagram
          </motion.a>
        </motion.div>

        <motion.button
          onClick={() => scrollTo("apropos")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-label="Défiler vers le bas"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 3.2, duration: 0.5 },
            y:       { delay: 3.2, duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "loop" },
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="#C97B3A" strokeWidth="1.5" />
            <path d="M9 12l5 5 5-5" stroke="#C97B3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      </section>

      <section id="apropos" className="py-24 px-6" style={{ background: "#FAF7F0" }}>
        <div className="max-w-6xl mx-auto text-center">
          <FadeUp>
            <p className="text-[#C97B3A] text-xs font-bold uppercase tracking-[0.22em] mb-3">Notre histoire</p>
            <h2
              className="font-bold text-[#2C2A25] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)" }}
            >
              Une table ancrée dans son terroir
            </h2>
          </FadeUp>

          <FadeUp delay={0.1} className="mb-8">
            <BotanicalDivider />
          </FadeUp>

          <FadeUp delay={0.18}>
            <p className="text-[#6B6660] text-lg leading-loose max-w-2xl mx-auto font-light">
              Au cœur de Bram, dans la ZAE du Lauragais, notre restaurant marie la cuisine du terroir
              et les influences du monde. Des produits frais sélectionnés avec soin, une salle chaleureuse
              et un patio pour les beaux jours — ici, chaque repas est une invitation à voyager sans quitter la table.
            </p>
          </FadeUp>

          <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">
            {pillars.map((p) => (
              <motion.div key={p.title} variants={staggerItemVariants}>
                <motion.div
                  className="rounded-lg p-9 text-center border h-full"
                  style={{ background: "#EDE8DB", borderColor: "rgba(92,107,46,0.1)" }}
                  whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(92,107,46,0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div className="flex justify-center mb-4">{p.icon}</div>
                  <h3 className="font-bold text-[#2C2A25] text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {p.title}
                  </h3>
                  <p className="text-[#6B6660] text-sm leading-relaxed font-light">{p.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </StaggerList>
        </div>
      </section>

      <section id="carte" className="py-24 px-6" style={{ background: "#1E1C17" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-[#E8A85A] text-xs font-bold uppercase tracking-[0.22em] mb-3">À table</p>
            <h2
              className="font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)" }}
            >
              Notre carte du moment
            </h2>
            <BotanicalDivider />
          </FadeUp>

          {menuItems.map((cat, ci) => (
            <FadeUp key={cat.category} delay={ci * 0.1} className="mb-14">
              <div className="flex items-center gap-4 mb-7">
                <span className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.09)" }} />
                <h3
                  className="italic text-[#E8A85A] whitespace-nowrap text-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {cat.category}
                </h3>
                <span className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.09)" }} />
              </div>

              <StaggerList className="flex flex-col gap-4">
                {cat.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={staggerItemVariants}
                    className="flex items-start gap-6 pb-4 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.07)", borderStyle: "dashed" }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-white font-bold text-base">{item.name}</p>
                        {item.popular && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C97B3A]/25 text-[#E8A85A] border border-[#C97B3A]/40 px-2 py-0.5 rounded-full">
                            ★ Populaire
                          </span>
                        )}
                      </div>
                      <p className="text-white/40 text-sm italic font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerList>
            </FadeUp>
          ))}

          <FadeUp className="text-center mt-12">
            <motion.a
              href="https://lacarte.menu/restaurants/bram-1/cuisine-dici-et-la-3/menu"
              target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#C97B3A] text-white font-bold uppercase tracking-wider text-sm px-10 py-3.5 rounded"
              whileHover={{ scale: 1.04, backgroundColor: "#b5692a" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Voir la carte complète
            </motion.a>
            <p className="text-white/35 text-xs mt-4 font-light">
              Carte mise à jour selon la saison et les arrivages
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-11 px-6 overflow-hidden" style={{ background: "#5C6B2E" }}>
        <StaggerList className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10">
          {["Sur place", "À emporter", "Traiteur & buffets", "Patio en saison"].map((s) => (
            <motion.span
              key={s}
              variants={popVariants}
              className="text-white font-bold text-sm tracking-wider"
            >
              {s}
            </motion.span>
          ))}
        </StaggerList>
      </section>

      <section id="contact" className="py-24 px-6" style={{ background: "#FAF7F0" }}>
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-[#C97B3A] text-xs font-bold uppercase tracking-[0.22em] mb-3">Nous trouver</p>
            <h2
              className="font-bold text-[#2C2A25]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)" }}
            >
              Venez nous rendre visite
            </h2>
            <div className="mt-6"><BotanicalDivider /></div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="rounded-lg p-10 h-full" style={{ background: "#EDE8DB" }}>
                <h3
                  className="font-bold text-[#2C2A25] text-xl mb-7"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Informations pratiques
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-3 items-start">
                    <span className="text-[#5C6B2E] mt-0.5 shrink-0"><MapPinIcon /></span>
                    <div>
                      <p className="font-bold text-[#2C2A25] text-sm mb-1">Adresse</p>
                      <p className="text-[#6B6660] text-sm leading-relaxed">
                        2 impasse de la Malepère<br />ZAE du Lauragais<br />11150 Bram
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-[#5C6B2E] mt-0.5 shrink-0"><PhoneIcon /></span>
                    <div>
                      <p className="font-bold text-[#2C2A25] text-sm mb-1">Téléphone</p>
                      <a href="tel:0684415681" className="text-[#C97B3A] font-bold text-sm hover:underline">
                        06 84 41 56 81
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="text-[#5C6B2E] mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <div>
                      <p className="font-bold text-[#2C2A25] text-sm mb-1">Horaires</p>
                      <div className="text-[#6B6660] text-sm leading-relaxed space-y-0.5">
                        <p><span className="font-semibold text-[#2C2A25]">Lun – Ven</span> · 12:00 – 13:30</p>
                        <p className="text-[#C97B3A] text-xs font-semibold">Fermé le week-end</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="text-[#C97B3A] mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <div>
                      <p className="font-bold text-[#2C2A25] text-sm mb-1">Note Google</p>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map((s) => (
                            <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= 4 ? "#C97B3A" : "none"} stroke="#C97B3A" strokeWidth="1.5" aria-hidden="true">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="font-bold text-[#2C2A25] text-sm">4,6</span>
                        <span className="text-[#6B6660] text-xs">· 469 avis</span>
                      </div>
                    </div>
                  </div>
                  <hr className="border-[#5C6B2E]/15" />
                  <div>
                    <p className="font-bold text-[#2C2A25] text-sm mb-3">Suivre notre actualité</p>
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href="https://www.facebook.com/cuisinedicietla?locale=fr_FR"
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#1877F2] text-white text-sm font-bold px-5 py-2.5 rounded"
                        whileHover={{ scale: 1.04, backgroundColor: "#1260cc" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <FacebookIcon /> Facebook
                      </motion.a>
                      <motion.a
                        href="https://www.instagram.com/cuisinedicietla/"
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded"
                        style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}
                        whileHover={{ scale: 1.04, opacity: 0.88 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <InstagramIcon /> Instagram
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div
                className="rounded-lg overflow-hidden flex flex-col border"
                style={{ minHeight: 300, borderColor: "rgba(92,107,46,0.12)" }}
              >
                <iframe
                  title="Localisation Cuisine d'ici et là"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856!2d2.105!3d43.237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2+Impasse+de+la+Malepere+11150+Bram!5e0!3m2!1sfr!2sfr!4v1"
                  className="flex-1 w-full border-0"
                  style={{ minHeight: 260 }}
                  allowFullScreen
                  loading="lazy"
                />
                <div className="px-5 py-3.5" style={{ background: "#5C6B2E" }}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2+impasse+de+la+Malepere+ZAE+du+Lauragais+11150+Bram"
                    target="_blank" rel="noopener noreferrer"
                    className="text-white text-sm font-bold tracking-wide hover:underline"
                  >
                    Ouvrir dans Google Maps →
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 text-center" style={{ background: "#1E1C17" }}>
        <FadeUp>
          <div className="max-w-6xl mx-auto">
            <p className="text-white text-2xl italic mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Restaurant Ô4
            </p>
            <p className="text-[#E8A85A]/70 text-sm font-light italic mb-1">Cuisine d'ici et là</p>
            <p className="text-white/45 text-sm mb-6">
              2 impasse de la Malepère · ZAE du Lauragais · 11150 Bram
            </p>
            <div className="flex justify-center gap-5 mb-8">
              {[
                { href: "https://www.facebook.com/cuisinedicietla?locale=fr_FR", label: "Facebook", Icon: FacebookIcon },
                { href: "https://www.instagram.com/cuisinedicietla/",            label: "Instagram", Icon: InstagramIcon },
              ].map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/55 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
              {[
                { href: "https://www.facebook.com/cuisinedicietla",  label: "Facebook"  },
                { href: "https://www.instagram.com/cuisinedicietla/", label: "Instagram" },
                { href: "tel:0684415681",                             label: "06 84 41 56 81" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-white/45 hover:text-white/75 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            <p className="text-white/20 text-xs">
              © {currentYear} Restaurant Ô4 — Cuisine d'ici et là · Tous droits réservés
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
              <p className="text-white/20 text-xs">
                Développeur du site : <a href="https://wailly-mylowann.fr" target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-white/75 transition-colors">Wyloz</a>
              </p>
            </div>
          </div>
        </FadeUp>
      </footer>
    </div>
  );
}