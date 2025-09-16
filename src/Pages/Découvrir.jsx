import React, { useEffect, useRef, useState } from "react";
// ⬇️ Keep or remove if unused
import Header1 from "../Components/Header/Header1";

const Découvrir = () => {
  // ---------- DATA ----------
  const modules = [
    {
      id: 1,
      title: "Initiation et Découverte",
      duration: "2 JOURS",
      subtitle: "À la découverte de soi – Les 27 visages de la personnalité",
      description:
        "Ce module est une porte d'entrée vers la connaissance de soi grâce à l'Ennéagramme. Vous y découvrirez que nous fonctionnons avec des mécanismes profonds, des forces et des freins, ainsi qu'avec nos centres d'intelligence et nos instincts dominants.",
      details:
        "La méthode alterne apports théoriques, panels vivants et exercices pratiques, individuels et en groupe, dans un cadre bienveillant. Vous repartirez avec une carte claire du fonctionnement de votre personnalité. Un séminaire transformateur, aussi bien pour le développement personnel que pour les relations professionnelles.",
      icon: "fa-compass",
    },
    {
      id: 2,
      title: "Centres d'intelligence",
      duration: "2 JOURS",
      subtitle: "Explorer vos trois intelligences",
      description:
        "Ce module vous invite à explorer vos trois intelligences : corporelle, émotionnelle et mentale. Vous découvrirez comment elles orientent vos décisions, vos émotions et vos comportements.",
      details:
        "Des panels vivants, exercices pratiques et mises en situation rendent l'expérience concrète et profonde. Vous apprendrez à reconnaître vos déséquilibres et à rééquilibrer vos centres pour plus d'alignement intérieur. Un séminaire puissant pour développer vos ressources, gagner en clarté et enrichir vos relations.",
      icon: "fa-brain",
    },
    {
      id: 3,
      title: "Instincts",
      duration: "2 JOURS",
      subtitle: "Les trois forces vitales qui guident nos comportements",
      description:
        "Ce module explore les trois forces vitales qui guident nos comportements : préservation, social et tête-à-tête. Vous découvrirez votre instinct dominant, ses peurs associées et son impact sur vos choix de vie.",
      details:
        "Grâce à des panels, exercices et mises en situation, vous expérimenterez vos dynamiques instinctives. Vous apprendrez à rééquilibrer vos instincts pour retrouver harmonie et puissance intérieure. Un séminaire essentiel pour mieux comprendre vos élans profonds et enrichir vos relations.",
      icon: "fa-heart",
    },
    {
      id: 4,
      title: "Lumière",
      duration: "2 JOURS",
      subtitle: "Conscience claire de nos mécanismes inconscients",
      description:
        "Ce module donne la lumière sur nos mécanismes limitants de l'ego. Les participants découvrent leurs Compulsions d'évitement, leurs Passions (émotions dominantes), leurs Fixations (schémas mentaux) et leur Attention première (filtre de perception).",
      details:
        "Des exercices pratiques, mises en situation et travaux en binômes rendent l'exploration concrète. Chacun prend conscience de ses automatismes et de la manière dont ils influencent ses relations.",
      icon: "fa-lightbulb",
    },
    {
      id: 5,
      title: "Ombre",
      duration: "2 JOURS",
      subtitle: "Se libérer des fardeaux de l'ego",
      description:
        "Ce module explore l'ego dans ses attachements et ses fragilités. Les participants étudient l'Orgueil, les Pathologies potentielles et les Mécanismes de défense de chaque type.",
      details:
        "Lien est fait avec les instincts et les chemins d'intégration intérieure. Panels, études de cas et exercices d'ancrage favorisent une prise de conscience profonde. Un séminaire de maturité pour transformer ses fragilités en leviers d'évolution.",
      icon: "fa-moon",
    },
    {
      id: 6,
      title: "Profondeur",
      duration: "2 JOURS",
      subtitle: "Être Autonome dans le chemin d'évolution",
      description:
        "Ce module offre une entrée positive et concrète dans les dynamiques de l'Ennéagramme. Les participants découvrent les Vertus (idéal supérieur), leurs Forces principales (talents naturels).",
      details:
        "Une pédagogie vivante alterne apports, panels et exercices d'introspection. Chaque stagiaire identifie sa propre vertu, sa force et son mode d'attention. Un séminaire lumineux pour repartir avec une lecture valorisante et motivante de son type.",
      icon: "fa-gem",
    },
  ];

  // ---------- THEME ----------
  const C = { white: "#fff", black: "#000", red: "#e13734", blue: "#0a83ca" };

  // Media
  const heroImg = `/assets/imgss001/${encodeURIComponent("coaching (53).jpg")}`;
  const OVERLAY_ALPHA = 0.82;
  const IMAGE_OPACITY = 0.7;

  // ---------- HELPERS ----------
  const card = {
    background: C.white,
    border: "1px solid rgba(0,0,0,0.10)",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    height: "100%",
  };
  const pill = (bg, color) => ({
    background: bg,
    color,
    padding: "6px 12px",
    borderRadius: 9999,
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 1,
  });
  const btn = (bg, color) => ({
    ...pill(bg, color),
    padding: "10px 16px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
  });
  const h1 = { fontWeight: 800, letterSpacing: "-0.3px" };
  const h2 = { fontWeight: 800, letterSpacing: "-0.2px" };

  // ---------- (Optional) header measure leftover ----------
  const headerWrapRef = useRef(null);
  const [headerH, setHeaderH] = useState(0);
  useEffect(() => {
    const measure = () =>
      setHeaderH(
        headerWrapRef.current ? headerWrapRef.current.offsetHeight : 0
      );
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const [heroOk, setHeroOk] = useState(true);

  return (
    <div
      className="details-page"
      style={{ background: C.white, color: C.black }}
    >
      {/* preload image */}
      <img
        src={heroImg}
        alt=""
        style={{ display: "none" }}
        onError={() => setHeroOk(false)}
        onLoad={() => setHeroOk(true)}
      />

      {/* ===== Global transitions + hover colors ===== */}
      <style>{`
        :root {
          --c-white: ${C.white};
          --c-black: ${C.black};
          --c-blue: ${C.blue};
          --c-blue-hover: #096fb0;
          --c-blue-active: #065c93;
          --c-red: ${C.red};
          --c-red-hover: #c62f2c;
          --c-red-active: #a82826;
          --shadow-sm: 0 2px 8px rgba(0,0,0,.08);
          --shadow-md: 0 10px 28px rgba(0,0,0,.18);
          --shadow-lg: 0 16px 40px rgba(0,0,0,.22);
          --radius: 16px;
          --ease: cubic-bezier(.2,.7,.2,1);
          --t-fast: .18s var(--ease);
          --t: .25s var(--ease);
        }

        /* Smooth transitions on (almost) everything in this page */
        .details-page * {
          transition:
            background-color var(--t),
            color var(--t),
            border-color var(--t),
            box-shadow var(--t),
            transform var(--t),
            opacity var(--t),
            filter var(--t);
        }

        /* Respect user's reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .details-page * { transition: none !important; }
        }

        /* Cards */
        .hover-card { will-change: transform, box-shadow; }
        .hover-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(0,0,0,.14);
        }

        /* Buttons */
        .btn {
          transition:
            transform var(--t-fast),
            box-shadow var(--t),
            background-color var(--t),
            color var(--t),
            border-color var(--t);
        }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,.18); }
        .btn:active { transform: translateY(0); box-shadow: 0 4px 12px rgba(0,0,0,.12); }
        .btn:focus-visible { outline: 2px solid var(--c-blue); outline-offset: 3px; }

        /* Blue buttons */
        .btn--blue:hover {
          background-color: var(--c-blue-hover) !important;
          color: #fff !important;
          border-color: var(--c-blue-hover) !important;
        }
        .btn--blue:active {
          background-color: var(--c-blue-active) !important;
          border-color: var(--c-blue-active) !important;
        }

        /* White → Blue on hover */
        .btn--white-blue {
          border: 2px solid rgba(10,131,202,.15);
        }
        .btn--white-blue:hover {
          background-color: var(--c-blue) !important;
          color: #fff !important;
          border-color: var(--c-blue) !important;
        }

        /* Pills (we add className="pill" below) */
        .pill { box-shadow: var(--shadow-sm); }
        .pill:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(0,0,0,.16);
        }

        /* Links (non-button) */
        .details-page a:not(.btn) { color: var(--c-blue); }
        .details-page a:not(.btn):hover { color: var(--c-blue-hover); text-decoration: underline; }

        /* Icon nudge on parent hover */
        .hover-card:hover i[class^="fa-"], .hover-card:hover i[class*=" fa-"] {
          color: var(--c-blue);
        }
      `}</style>

      {/* ============ HERO ============ */}
      <section
        style={{
          position: "relative",
          color: C.white,
          padding: `187px 0px 150px`,
          overflow: "hidden",
          backgroundColor: heroOk ? "transparent" : C.blue,
        }}
      >
        {heroOk && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url("${heroImg}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: IMAGE_OPACITY,
              zIndex: 0,
            }}
          />
        )}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(rgba(10,131,202,${OVERLAY_ALPHA}), rgba(10,131,202,${OVERLAY_ALPHA}))`,
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-10 mx-auto text-center">
              <div className="mb-2">
                <span
                  className="pill"
                  style={pill("rgba(255,255,255,0.18)", C.white)}
                >
                  Cycle – Certificat
                </span>
              </div>
              <h1
                className="mb-2"
                style={{
                  ...h1,
                  color: C.white,
                  textShadow: "0 3px 12px rgba(0,0,0,.35)",
                }}
              >
                Découvrir : À la découverte de soi
              </h1>
              <p className="mb-4" style={{ color: C.white }}>
                Les 27 visages de la personnalité
              </p>

              <div
                className="d-flex justify-content-center flex-wrap"
                style={{ gap: 18 }}
              >
                {[
                  { n: "6", t: "Modules" },
                  { n: "12", t: "Jours" },
                  { n: "100%", t: "Pratique" },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div
                      className="pill"
                      style={{
                        ...pill("rgba(255,255,255,0.12)", C.white),
                        padding: "10px 14px",
                      }}
                    >
                      <span style={{ fontWeight: 800, marginRight: 8 }}>
                        {s.n}
                      </span>
                      <span>{s.t}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <a
                  href="/contact"
                  className="btn btn--white-blue"
                  style={btn(C.white, C.blue)}
                >
                  <i className="fas fa-calendar-alt" /> Réserver ma place
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "56px 0 8px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto text-center">
              <span style={{ color: C.blue, fontWeight: 700 }}>
                FORMATION COMPLÈTE
              </span>
              <h2 className="mt-1" style={h2}>
                Programme de Formation en Ennéagramme
              </h2>
              <p className="mt-3" style={{ color: C.black }}>
                Un parcours complet de développement personnel et professionnel
                qui vous accompagne dans la découverte de votre personnalité
                authentique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section style={{ padding: "24px 0 56px" }}>
        <div className="container">
          <div className="row gy-4">
            {modules.map((m) => (
              <div key={m.id} className="col-lg-6">
                <div style={card} className="hover-card">
                  <div
                    className="d-flex justify-content-between align-items-center mb-2"
                    style={{ gap: 12 }}
                  >
                    <div
                      className="d-flex align-items-center"
                      style={{ gap: 12 }}
                    >
                      <div
                        style={{
                          background: C.red,
                          color: C.white,
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i className={`fas ${m.icon}`} />
                      </div>
                      <span style={{ color: C.blue, fontWeight: 700 }}>
                        MODULE {m.id}
                      </span>
                    </div>
                    <span className="pill" style={pill(C.blue, C.white)}>
                      {m.duration}
                    </span>
                  </div>

                  <h3 style={{ fontWeight: 800 }}>{m.title}</h3>
                  <p style={{ color: C.blue, marginTop: 2 }}>{m.subtitle}</p>
                  <p
                    className="mt-2"
                    style={{ color: C.black, lineHeight: 1.6 }}
                  >
                    {m.description}
                  </p>
                  <p style={{ color: C.black, lineHeight: 1.6 }}>{m.details}</p>

                  <div className="mt-3">
                    <a
                      href="#"
                      className="btn btn--blue"
                      style={btn(C.blue, C.white)}
                    >
                      En savoir plus <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO + PRICING */}
      <section style={{ background: "#f7f7f7", padding: "56px 0" }}>
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-6">
              <div>
                <span style={{ color: C.red, fontWeight: 700 }}>
                  INFORMATIONS PRATIQUES
                </span>
                <h2 className="mt-1" style={h2}>
                  Ce qui est inclus dans la formation
                </h2>

                <ul
                  className="mt-3"
                  style={{ paddingLeft: 0, listStyle: "none" }}
                >
                  {[
                    "La formation complète sur 6 modules",
                    "Le livre sur les 9 bases de l'Ennéagramme",
                    "Les pauses café et rafraîchissements",
                    "Certificat de formation",
                  ].map((t, i) => (
                    <li
                      key={i}
                      className="d-flex align-items-start"
                      style={{ gap: 10, marginBottom: 8 }}
                    >
                      <i
                        className="fas fa-check-circle"
                        style={{ color: C.red, marginTop: 2 }}
                      />
                      <span style={{ color: C.black }}>{t}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{ ...card, padding: 16, marginTop: 12 }}
                  className="hover-card"
                >
                  <h4
                    className="mb-2"
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <i
                      className="fas fa-map-marker-alt"
                      style={{ color: C.blue }}
                    />
                    Lieu de Formation
                  </h4>
                  <p
                    className="mb-1"
                    style={{ fontWeight: 700, color: C.black }}
                  >
                    Ferme J'nan Lemonie Sidi Yamani
                  </p>
                  <p style={{ color: C.black, marginBottom: 0 }}>
                    <i className="fas fa-clock" style={{ marginRight: 6 }} />{" "}
                    Horaires : 9H - 17H
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing (ticket cards) */}
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-md-6">
                  <div
                    className="hover-card"
                    style={{
                      ...card,
                      position: "relative",
                      paddingTop: 20,
                      paddingBottom: 16,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 12,
                        background: C.red,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: -6,
                        top: 60,
                        width: 12,
                        height: 12,
                        background: C.white,
                        borderRadius: "50%",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.08)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: -6,
                        bottom: 60,
                        width: 12,
                        height: 12,
                        background: C.white,
                        borderRadius: "50%",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.08)",
                      }}
                    />
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ paddingLeft: 16 }}
                    >
                      <h3 className="mb-1" style={{ fontWeight: 800 }}>
                        Particuliers
                      </h3>
                      <span className="pill" style={pill(C.red, C.white)}>
                        TTC
                      </span>
                    </div>
                    <div
                      style={{
                        margin: "10px 0 14px",
                        padding: "14px 18px",
                        border: "2px dashed rgba(0,0,0,.18)",
                        borderRadius: 14,
                        display: "flex",
                        alignItems: "baseline",
                        gap: 8,
                        justifyContent: "center",
                        background: C.white,
                      }}
                    >
                      <span style={{ fontWeight: 800 }}>DH</span>
                      <span
                        style={{
                          fontSize: 40,
                          fontWeight: 800,
                          letterSpacing: "-0.5px",
                        }}
                      >
                        3000
                      </span>
                    </div>
                    <ul
                      className="mt-2"
                      style={{ paddingLeft: 0, listStyle: "none" }}
                    >
                      {[
                        "Formation complète 6 modules",
                        "Livre inclus",
                        "Pauses café",
                        "Certificat",
                      ].map((t, i) => (
                        <li
                          key={i}
                          style={{
                            marginBottom: 8,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fas fa-check"
                            style={{ color: C.blue, marginRight: 8 }}
                          />
                          <span style={{ color: C.black }}>{t}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className="btn"
                      style={{
                        ...btn(C.red, C.white),
                        width: "100%",
                        justifyContent: "center",
                        marginTop: 8,
                      }}
                    >
                      S'inscrire maintenant
                    </a>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className="hover-card"
                    style={{
                      ...card,
                      position: "relative",
                      paddingTop: 20,
                      paddingBottom: 16,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 12,
                        background: C.blue,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: -6,
                        top: 60,
                        width: 12,
                        height: 12,
                        background: C.white,
                        borderRadius: "50%",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.08)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: -6,
                        bottom: 60,
                        width: 12,
                        height: 12,
                        background: C.white,
                        borderRadius: "50%",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.08)",
                      }}
                    />
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ paddingLeft: 16 }}
                    >
                      <h3 className="mb-1" style={{ fontWeight: 800 }}>
                        Formateurs & Entreprises
                      </h3>
                      <span className="pill" style={pill(C.blue, C.white)}>
                        HTVA
                      </span>
                    </div>
                    <div
                      style={{
                        margin: "10px 0 14px",
                        padding: "14px 18px",
                        border: "2px dashed rgba(0,0,0,.18)",
                        borderRadius: 14,
                        display: "flex",
                        alignItems: "baseline",
                        gap: 8,
                        justifyContent: "center",
                        background: C.white,
                      }}
                    >
                      <span style={{ fontWeight: 800 }}>DH</span>
                      <span
                        style={{
                          fontSize: 40,
                          fontWeight: 800,
                          letterSpacing: "-0.5px",
                        }}
                      >
                        4000
                      </span>
                    </div>
                    <ul
                      className="mt-2"
                      style={{ paddingLeft: 0, listStyle: "none" }}
                    >
                      {[
                        "Formation professionnelle",
                        "Documentation avancée",
                        "Support continu",
                        "Certification pro",
                      ].map((t, i) => (
                        <li
                          key={i}
                          style={{
                            marginBottom: 8,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fas fa-check"
                            style={{ color: C.black, marginRight: 8 }}
                          />
                          <span style={{ color: C.black }}>{t}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className="btn btn--blue"
                      style={{
                        ...btn(C.blue, C.white),
                        width: "100%",
                        justifyContent: "center",
                        marginTop: 8,
                      }}
                    >
                      Demander un devis
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /pricing */}
          </div>
        </div>
      </section>

      {/* CTA + MAP side-by-side */}
      <section
        style={{ background: C.white, padding: "56px 0", position: "relative" }}
      >
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {/* LEFT: CTA */}
            <div className="col-lg-6">
              <div
                className="hover-card"
                style={{
                  background: C.white,
                  color: C.black,
                  borderRadius: 18,
                  boxShadow: "0 10px 28px rgba(0,0,0,0.18)",
                  position: "relative",
                  overflow: "hidden",
                  padding: 24,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 10,
                    background: C.blue,
                  }}
                />
                <div className="row align-items-center g-3">
                  <div className="col-12">
                    <div style={{ marginLeft: 14 }}>
                      <span
                        className="pill"
                        style={{ ...pill(C.blue, C.white) }}
                      >
                        Cycle – Certificat
                      </span>
                      <h2
                        className="mt-2 mb-2"
                        style={{ fontWeight: 800, letterSpacing: "-0.2px" }}
                      >
                        Prêt à commencer votre transformation ?
                      </h2>
                      <p className="mb-0" style={{ color: C.black }}>
                        Rejoignez notre formation complète en Ennéagramme et
                        découvrez les secrets de votre personnalité authentique.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 text-lg-end">
                    <div style={{ marginLeft: 14 }}>
                      <a
                        href="/contact"
                        className="btn btn--blue"
                        style={{
                          ...btn(C.blue, C.white),
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        <i className="fas fa-calendar-alt" /> Réserver ma place
                      </a>
                      <div
                        style={{
                          fontSize: 12,
                          marginTop: 8,
                          textAlign: "center",
                          color: C.black,
                          opacity: 0.9,
                        }}
                      >
                        Réponse rapide • Places limitées
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 6,
                    background: C.blue,
                  }}
                />
              </div>
            </div>

            {/* RIGHT: MAP */}
            <div className="col-lg-6">
              <div
                className="hover-card"
                style={{
                  background: C.white,
                  color: C.black,
                  borderRadius: 18,
                  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                  overflow: "hidden",
                  padding: 16,
                  height: "100%",
                }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <i
                    className="fas fa-map-marker-alt"
                    style={{ color: C.blue }}
                  />
                  Localisation — Jnan Lemonie
                </h3>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%",
                    height: 0,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5305.228879516067!2d-6.009267787231853!3d35.347562472582915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0bbf3da3ad8c9f%3A0x73ff61050e168005!2sJnan%20Lemonie!5e1!3m2!1sfr!2sma!4v1756569486248!5m2!1sfr!2sma"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jnan Lemonie - Google Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Découvrir;
