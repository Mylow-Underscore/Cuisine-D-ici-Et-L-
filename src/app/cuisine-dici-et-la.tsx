import { useState, useEffect } from "react";

/* ── Botanical SVG divider ─────────────────────────────────────────── */
function BotanicalDivider({ dark = false }: { dark?: boolean }) {
  const line = dark ? "#7A8E40" : "#7A8E40";
  return (
    <svg viewBox="0 0 600 40" className="w-full max-w-md h-10 block mx-auto">
      <line x1="0" y1="20" x2="220" y2="20" stroke={line} strokeWidth="1" />
      <circle cx="300" cy="20" r="4" fill="#C97B3A" />
      <ellipse cx="270" cy="20" rx="18" ry="7" fill="none" stroke={line} strokeWidth="1.2" transform="rotate(-30 270 20)" />
      <ellipse cx="330" cy="20" rx="18" ry="7" fill="none" stroke={line} strokeWidth="1.2" transform="rotate(30 330 20)" />
      <ellipse cx="252" cy="16" rx="11" ry="5" fill="none" stroke={line} strokeWidth="1" transform="rotate(-50 252 16)" />
      <ellipse cx="348" cy="16" rx="11" ry="5" fill="none" stroke={line} strokeWidth="1" transform="rotate(50 348 16)" />
      <line x1="380" y1="20" x2="600" y2="20" stroke={line} strokeWidth="1" />
    </svg>
  );
}

/* ── Icons ──────────────────────────────────────────────────────────── */
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.99 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>
);
const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ChevronDown = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" stroke="#C97B3A" strokeWidth="1.5" />
    <path d="M9 12l5 5 5-5" stroke="#C97B3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Data ───────────────────────────────────────────────────────────── */
const menuItems = [
  {
    category: "Entrées",
    items: [
      { name: "Soupe du jour", desc: "Fraîche, de saison, préparée chaque matin" },
      { name: "Salade du jardin", desc: "Légumes locaux, vinaigrette aux herbes" },
      { name: "Terrine maison", desc: "Recette traditionnelle, cornichons artisanaux" },
    ],
  },
  {
    category: "Plats",
    items: [
      { name: "Pâtes fraîches maison", desc: "Sauce tomate du moment, basilic frais" },
      { name: "Tajine de légumes", desc: "Épices douces, semoule, raisins secs" },
      { name: "Poulet rôti aux herbes", desc: "Élevé en plein air, aromates du Lauragais" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Tarte du jour", desc: "Fruits de saison, pâte sablée maison" },
      { name: "Fondant au chocolat", desc: "Cœur coulant, crème anglaise à la vanille" },
    ],
  },
];

const pillars = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7A8E40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 12C6.5 8 10 4.5 19 3c0 0-1 8-5 11.5-3.5 3-7 1.5-7.5 1.5S2.5 14 6.5 12z" />
        <path d="M12 21s-.5-5 2.5-8.5" />
      </svg>
    ),
    title: "Produits frais",
    desc: "Nous travaillons avec des producteurs locaux et de saison pour composer des assiettes qui ont du goût et du sens.",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C97B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
        <line x1="6" y1="17" x2="18" y2="17" />
      </svg>
    ),
    title: "Cuisine maison",
    desc: "Tout est préparé sur place : pâtes fraîches, tartes du jour — chaque plat porte la marque d'un vrai savoir-faire artisanal.",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7A8E40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Accueil chaleureux",
    desc: "Un service attentionné, une ambiance conviviale — notre traiteur assure aussi buffets et réceptions sur mesure.",
  },
];

/* ── App ────────────────────────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-sans overflow-x-hidden" style={{ fontFamily: "'Lato', sans-serif", background: "#FAF7F0", color: "#2C2A25" }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
          scrolled ? "border-b" : ""
        }`}
        style={{
          background: scrolled ? "rgba(250,247,240,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderColor: scrolled ? "#EDE8DB" : "transparent",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="text-lg font-bold tracking-wide transition-colors duration-300"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: scrolled ? "#5C6B2E" : "#ffffff",
            }}
          >
            Cuisine d'ici et là
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {["Accueil", "À propos", "Carte", "Contact"].map((label, i) => {
              const ids = ["hero", "apropos", "carte", "contact"];
              return (
                <button
                  key={label}
                  onClick={() => scrollTo(ids[i])}
                  className="text-xs font-bold uppercase tracking-widest transition-colors duration-200"
                  style={{ color: scrolled ? "#6B6660" : "rgba(255,255,255,0.8)" }}
                >
                  {label}
                </button>
              );
            })}
            <a
              href="tel:0468786883"
              className="bg-[#C97B3A] hover:bg-[#b5692a] text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded transition-colors"
            >
              Réserver
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-[#2C2A25]" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-[#2C2A25]" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-[#2C2A25]" : "bg-white"}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#FAF7F0] border-t border-[#EDE8DB] px-6 py-4 flex flex-col gap-4">
            {["Accueil", "À propos", "Carte", "Contact"].map((label, i) => {
              const ids = ["hero", "apropos", "carte", "contact"];
              return (
                <button
                  key={label}
                  onClick={() => scrollTo(ids[i])}
                  className="text-sm font-bold uppercase tracking-widest text-left text-[#6B6660]"
                >
                  {label}
                </button>
              );
            })}
            <a
              href="tel:0468786883"
              className="bg-[#C97B3A] text-white text-sm font-bold uppercase tracking-wider px-5 py-2 rounded text-center"
            >
              Réserver — 04 68 78 68 83
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-24 pb-20 text-center"
        style={{ background: "linear-gradient(155deg, #5C6B2E 0%, #3A4A1A 50%, #1E1C17 100%)" }}
      >
        {/* Decorative rings */}
        <div className="absolute top-[-100px] right-[-100px] w-[480px] h-[480px] rounded-full border border-[#C97B3A]/15 pointer-events-none" />
        <div className="absolute top-[-40px] right-[-40px] w-[300px] h-[300px] rounded-full border border-[#C97B3A]/10 pointer-events-none" />
        <div className="absolute bottom-16 left-[-110px] w-[380px] h-[380px] rounded-full border border-white/5 pointer-events-none" />

        <p className="text-[#E8A85A] text-xs font-bold uppercase tracking-[0.22em] mb-5">
          Restaurant · Bram, Aude
        </p>

        <h1
          className="font-bold text-white leading-tight mb-1"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(52px, 8vw, 92px)" }}
        >
          Cuisine
        </h1>
        <h2
          className="font-normal italic text-[#E8A85A] leading-tight mb-8"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px, 6vw, 72px)" }}
        >
          d'ici et là
        </h2>

        <p className="text-white/65 text-lg leading-relaxed max-w-lg mx-auto mb-11 font-light tracking-wide">
          Cuisine raffinée, produits frais et saveurs qui voyagent — sur place ou à emporter, au cœur du Lauragais.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => scrollTo("carte")}
            className="bg-[#C97B3A] hover:bg-[#b5692a] text-white font-bold uppercase tracking-wider text-sm px-9 py-3.5 rounded transition-colors"
          >
            Voir la carte
          </button>
          <a
            href="https://www.facebook.com/cuisinedicietla?locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white text-sm px-7 py-3.5 rounded transition-colors"
          >
            <FacebookIcon /> Suivre sur Facebook
          </a>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollTo("apropos")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Défiler vers le bas"
        >
          <ChevronDown />
        </button>
      </section>

      {/* ── À PROPOS ── */}
      <section id="apropos" className="py-24 px-6" style={{ background: "#FAF7F0" }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#C97B3A] text-xs font-bold uppercase tracking-[0.22em] mb-3">Notre histoire</p>
          <h2
            className="font-bold text-[#2C2A25] mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)" }}
          >
            Une table ancrée dans son terroir
          </h2>
          <div className="mb-8">
            <BotanicalDivider />
          </div>
          <p className="text-[#6B6660] text-lg leading-loose max-w-2xl mx-auto font-light">
            Au cœur de Bram, dans la ZAE du Lauragais, notre restaurant marie la cuisine du terroir et les influences du monde. Des produits frais sélectionnés avec soin, une salle chaleureuse et un patio pour les beaux jours — ici, chaque repas est une invitation à voyager sans quitter la table.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-lg p-9 text-center border"
                style={{ background: "#EDE8DB", borderColor: "rgba(92,107,46,0.1)" }}
              >
                <div className="flex justify-center mb-4">{p.icon}</div>
                <h3
                  className="font-bold text-[#2C2A25] text-lg mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-[#6B6660] text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARTE ── */}
      <section id="carte" className="py-24 px-6" style={{ background: "#1E1C17" }}>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#E8A85A] text-xs font-bold uppercase tracking-[0.22em] mb-3">À table</p>
            <h2
              className="font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)" }}
            >
              Notre carte du moment
            </h2>
            <BotanicalDivider />
          </div>

          {/* Menu categories */}
          {menuItems.map((cat) => (
            <div key={cat.category} className="mb-14">
              {/* Category rule */}
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

              {/* Items */}
              <div className="flex flex-col gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start gap-6 pb-4 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.07)", borderStyle: "dashed" }}
                  >
                    <div>
                      <p className="text-white font-bold text-base mb-1">{item.name}</p>
                      <p className="text-white/40 text-sm italic font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://lacarte.menu/restaurants/bram-1/cuisine-dici-et-la-3/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C97B3A] hover:bg-[#b5692a] text-white font-bold uppercase tracking-wider text-sm px-10 py-3.5 rounded transition-colors"
            >
              Voir la carte complète
            </a>
            <p className="text-white/35 text-xs mt-4 font-light">
              Carte mise à jour selon la saison et les arrivages
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section className="py-11 px-6" style={{ background: "#5C6B2E" }}>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10">
          {["Sur place", "À emporter", "Traiteur & buffets", "Patio en saison"].map((s) => (
            <span key={s} className="text-white font-bold text-sm tracking-wider">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6" style={{ background: "#FAF7F0" }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#C97B3A] text-xs font-bold uppercase tracking-[0.22em] mb-3">Nous trouver</p>
            <h2
              className="font-bold text-[#2C2A25]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)" }}
            >
              Venez nous rendre visite
            </h2>
            <div className="mt-6">
              <BotanicalDivider />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Info card */}
            <div className="rounded-lg p-10" style={{ background: "#EDE8DB" }}>
              <h3
                className="font-bold text-[#2C2A25] text-xl mb-7"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Informations pratiques
              </h3>

              <div className="flex flex-col gap-5">
                {/* Address */}
                <div className="flex gap-3 items-start">
                  <span className="text-[#5C6B2E] mt-0.5 shrink-0"><MapPinIcon /></span>
                  <div>
                    <p className="font-bold text-[#2C2A25] text-sm mb-1">Adresse</p>
                    <p className="text-[#6B6660] text-sm leading-relaxed">
                      2 impasse de la Malepère<br />
                      ZAE du Lauragais<br />
                      11150 Bram
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3 items-start">
                  <span className="text-[#5C6B2E] mt-0.5 shrink-0"><PhoneIcon /></span>
                  <div>
                    <p className="font-bold text-[#2C2A25] text-sm mb-1">Téléphone</p>
                    <a
                      href="tel:0468786883"
                      className="text-[#C97B3A] font-bold text-sm hover:underline"
                    >
                      04 68 78 68 83
                    </a>
                  </div>
                </div>

                <hr className="border-[#5C6B2E]/15" />

                {/* Social */}
                <div>
                  <p className="font-bold text-[#2C2A25] text-sm mb-3">Suivre notre actualité</p>
                  <a
                    href="https://www.facebook.com/cuisinedicietla?locale=fr_FR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1260cc] text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
                  >
                    <FacebookIcon /> Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-bold tracking-wide hover:underline"
                >
                  Ouvrir dans Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 text-center" style={{ background: "#1E1C17" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-white text-2xl italic mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cuisine d'ici et là
          </p>
          <p className="text-white/45 text-sm mb-6">
            2 impasse de la Malepère · ZAE du Lauragais · 11150 Bram
          </p>

          <div className="flex justify-center gap-5 mb-8">
            <a
              href="https://www.facebook.com/cuisinedicietla?locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-white transition-colors"
            >
              <FacebookIcon />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a
              href="https://lacarte.menu/restaurants/bram-1/cuisine-dici-et-la-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white/75 transition-colors"
            >
              LaCarte.menu
            </a>
            <a
              href="https://lacarte.menu/restaurants/bram-1/cuisine-dici-et-la-3/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white/75 transition-colors"
            >
              Carte complète
            </a>
            <a href="tel:0468786883" className="text-white/45 hover:text-white/75 transition-colors">
              04 68 78 68 83
            </a>
          </div>

          <p className="text-white/20 text-xs">© 2025 Cuisine d'ici et là · Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}
