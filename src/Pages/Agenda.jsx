import React from "react";
import Seo from "../Components/Seo/Seo";
import { Link } from "react-router-dom";

const colors = {
  blue: "#0a83ca",
  deepBlue: "#0776bb",
  red: "#e13734",
  softBlue: "#e8f4fd",
  softWhite: "#f5fbff",
  slate: "#1d1c1a",
  gray: "#5b6a75",
  lightGray: "#dde7f1",
};

const tabLabels = ["Découvrir", "Approfondir", "À la maîtrise"];

const highlights = [
  {
    icon: "fa-solid fa-layer-group",
    title: "3 niveaux certifiants",
    text: "Retrouvez les parcours Découvrir, Approfondir et Transmettre, tels que détaillés sur nos pages dédiées, avec leurs 18 modules cumulés.",
  },
  {
    icon: "fa-solid fa-calendar-days",
    title: "Calendrier continu",
    text: "Un planning de 14 mois couvrant chaque module, de novembre à décembre de l’année suivante, directement relié aux données des tableaux ci-dessous.",
  },
  {
    icon: "fa-solid fa-people-arrows",
    title: "Accompagnement sur mesure",
    text: "Construisez des parcours intra-entreprise en combinant les modules des niveaux et les formats décrits sur les pages Solution et École.",
  },
];

const agendaMonths = [
  "nov-25",
  "déc-25",
  "janv-26",
  "fév-26",
  "mars-26",
  "avr-26",
  "mai-26",
  "juin-26",
  "juil-26",
  "août-26",
  "sept-26",
  "oct-26",
  "nov-26",
  "déc-26",
];

const scheduleLevels = [
  {
    id: "niveau-1",
    title: "Niveau 1 – Découvrir : A la découverte de soi",
    codePrefix: "D",
    totalDays: 12,
    totalCost: "18 000 €",
    modules: [
      {
        code: "D1",
        name: "Initiation et Découverte",
        days: 2,
        hours: "9h-17h",
        prereq: "-",
        price: "3 000 €",
        sessions: ["nov-25", "mars-26", "juin-26", "sept-26", "déc-26"],
      },
      {
        code: "D2",
        name: "Centres d’intelligence",
        days: 2,
        hours: "9h-17h",
        prereq: "D1",
        price: "3 000 €",
        sessions: ["déc-25", "avr-26", "juil-26", "oct-26"],
      },
      {
        code: "D3",
        name: "Instincts",
        days: 2,
        hours: "9h-17h",
        prereq: "D1 - D2",
        price: "3 000 €",
        sessions: ["janv-26", "mai-26", "août-26", "nov-26"],
      },
      {
        code: "D4",
        name: "Lumière – Conscience claire de nos mécanismes inconscients",
        days: 2,
        hours: "9h-17h",
        prereq: "D3",
        price: "3 000 €",
        sessions: ["fév-26", "juin-26", "sept-26"],
      },
      {
        code: "D5",
        name: "Ombre – Se libérer des fardeaux de l’ego",
        days: 2,
        hours: "9h-17h",
        prereq: "D3",
        price: "3 000 €",
        sessions: ["mars-26", "août-26", "nov-26"],
      },
      {
        code: "D6",
        name: "Profondeur – Être autonome dans le chemin d’évolution",
        days: 2,
        hours: "9h-17h",
        prereq: "D3",
        price: "3 000 €",
        sessions: ["avr-26", "sept-26", "déc-26"],
      },
    ],
  },
  {
    id: "niveau-2",
    title: "Niveau 2 – Approfondir",
    codePrefix: "V",
    totalDays: 15,
    totalCost: "25 500 €",
    modules: [
      {
        code: "V1",
        name: "Ressemblance et confusion",
        days: 2,
        hours: "9h-17h",
        prereq: "D",
        price: "3 400 €",
        sessions: ["mars-26", "juin-26", "sept-26", "déc-26"],
      },
      {
        code: "V2",
        name: "Relations en Ennéagramme",
        days: 2,
        hours: "9h-17h",
        prereq: "V1",
        price: "3 400 €",
        sessions: ["avr-26", "juil-26", "oct-26"],
      },
      {
        code: "V3",
        name: "Pathologie et ombres",
        days: 2,
        hours: "9h-17h",
        prereq: "V1",
        price: "3 400 €",
        sessions: ["mai-26", "août-26", "nov-26"],
      },
      {
        code: "V4",
        name: "Grand Panel & pistes de développements",
        days: 2,
        hours: "9h-17h",
        prereq: "V2 - V3",
        price: "3 400 €",
        sessions: ["juin-26", "sept-26", "déc-26"],
      },
      {
        code: "V5",
        name: "Intégration : Ennéagramme et profils jungiens",
        days: 2,
        hours: "9h-17h",
        prereq: "V2",
        price: "3 400 €",
        sessions: ["juil-26", "oct-26"],
      },
      {
        code: "V6",
        name: "Retraite enneagrammiste",
        days: 5,
        hours: "9h-17h",
        prereq: "V2 - V3",
        price: "8 500 €",
        sessions: ["août-26", "nov-26"],
      },
    ],
  },
  {
    id: "niveau-3",
    title: "Niveau 3 – À la maîtrise",
    codePrefix: "M",
    totalDays: 20,
    totalCost: "34 000 €",
    modules: [
      {
        code: "M1",
        name: "Conduite et Animation de Panels",
        days: 3,
        hours: "9h-17h",
        prereq: "V",
        price: "5 100 €",
        sessions: ["nov-26"],
      },
      {
        code: "M2",
        name: "DEVENIR PROFILEUR : Processus de l’Entretien Typologique",
        days: 3,
        hours: "9h-17h",
        prereq: "M1",
        price: "5 100 €",
        sessions: ["nov-26", "déc-26"],
      },
      {
        code: "M3",
        name: "Superviser, co-développer : 5 cas pratiques filmés",
        days: 3,
        hours: "9h-17h",
        prereq: "M2",
        price: "5 100 €",
        sessions: ["déc-26"],
      },
      {
        code: "M4",
        name: "En croisant l’ennéagramme et la thérapie brève",
        days: 3,
        hours: "9h-17h",
        prereq: "B1 - B2 - B3",
        price: "5 100 €",
        sessions: ["nov-26"],
      },
      {
        code: "M5",
        name: "Certification à la méthode Ennea-Pro HRH (Devenir formateur HRH)",
        days: 3,
        hours: "9h-17h",
        prereq: "M2 - M4",
        price: "5 100 €",
        sessions: ["déc-26"],
      },
      {
        code: "M6",
        name: "Projet : Ancrer une approche adaptée à son public avec soutenance",
        days: 5,
        hours: "9h-17h",
        prereq: "M4",
        price: "8 500 €",
        sessions: ["déc-26"],
      },
    ],
  },
];
function Agenda() {
  const [activeTab, setActiveTab] = React.useState(0);

  const levelRoutes = ["/découvrir", "/approfondir", "/transmettre"];

  const levelMeta = scheduleLevels.map((level, index) => {
    const moduleCount = level.modules.length;
    const firstCode = level.modules[0]?.code ?? "";
    const lastCode = level.modules[level.modules.length - 1]?.code ?? firstCode;
    const uniqueDurations = Array.from(
      new Set(level.modules.map((module) => module.days))
    ).sort((a, b) => a - b);

    return {
      index,
      label: tabLabels[index] ?? level.title,
      modules: moduleCount,
      totalDays: level.totalDays,
      totalCost: level.totalCost,
      codeRange:
        firstCode === lastCode ? firstCode : `${firstCode} – ${lastCode}`,
      durationsLabel: uniqueDurations
        .map((day) => `${day} jour${day > 1 ? "s" : ""}`)
        .join(" • "),
      route: levelRoutes[index] ?? "/agenda",
    };
  });

  const thematicTracks = levelMeta.map((meta) => ({
    title: scheduleLevels[meta.index]?.title ?? meta.label,
    slots: [
      `${meta.modules} modules du ${meta.codeRange}`,
      `${meta.totalDays} jours cumulés (${meta.durationsLabel})`,
      `Investissement indicatif : ${meta.totalCost}`,
    ],
    route: meta.route,
  }));

  return (
    <main role="main">
      <Seo page="agenda" path="/agenda" />
      <div style={{ fontFamily: "system-ui, sans-serif", color: colors.slate }}>
        <style>
          {`
          @media (max-width: 768px) {
            .hero-section {
              padding: 100px 15px 60px !important;
            }
            .hero-title {
              font-size: 32px !important;
              line-height: 1.2 !important;
            }
            .hero-description {
              font-size: 16px !important;
            }
            .hero-buttons {
              flex-direction: column !important;
              width: 100%;
            }
            .hero-buttons a {
              width: 100% !important;
              justify-content: center !important;
            }
            .section-title {
              font-size: 28px !important;
            }
            .highlight-cards {
              padding: 24px 20px !important;
            }
            .level-header {
              padding: 16px 20px !important;
            }
            .level-title {
              font-size: 18px !important;
              flex: 1 1 100% !important;
            }
            .level-info {
              flex: 1 1 100% !important;
              justify-content: flex-start !important;
            }
            .tab-button {
              padding: 12px 20px !important;
              font-size: 12px !important;
            }
            .tab-button-text {
              font-size: 12px !important;
            }
            .nav-button {
              min-width: 140px !important;
              padding: 12px 20px !important;
              font-size: 12px !important;
            }
            .nav-text-full {
              display: none !important;
            }
            .nav-text-short {
              display: inline !important;
            }
            .thematic-card {
              padding: 24px 20px !important;
            }
            .thematic-title {
              font-size: 18px !important;
            }
          }
          
          @media (min-width: 769px) {
            .nav-text-full {
              display: inline !important;
            }
            .nav-text-short {
              display: none !important;
            }
          }
          
          @media (max-width: 480px) {
            .hero-section {
              padding: 80px 10px 40px !important;
            }
            .hero-title {
              font-size: 28px !important;
            }
            .tab-separator {
              display: none !important;
            }
            .level-header {
              padding: 12px 16px !important;
            }
            .level-title {
              font-size: 16px !important;
            }
            .nav-button {
              min-width: 120px !important;
              padding: 10px 16px !important;
            }
          }
        `}
        </style>
        <section
          className="hero-section"
          style={{
            padding: "160px 20px 100px",
            backgroundImage:
              "linear-gradient(rgba(7, 118, 187, 0.88), rgba(10, 131, 202, 0.9)), url('/assets/imgss001/freid (2).jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "#fff",
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-9">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 22px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.16)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  Agenda EnnéaMaroc
                </div>
                <h1
                  className="hero-title"
                  style={{
                    margin: "26px 0 20px",
                    fontSize: "clamp(28px, 6vw, 56px)",
                    fontWeight: 800,
                    flexWrap: "wrap",
                    color: "#fff",
                    lineHeight: 1.2,
                  }}
                >
                  Calendrier des parcours EnnéaMaroc
                </h1>
                <p
                  className="hero-description"
                  style={{
                    margin: "0 auto 38px",
                    maxWidth: 720,
                    fontSize: "clamp(16px, 3vw, 20px)",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.92)",
                    textAlign: "center",
                  }}
                >
                  Explorez en un coup d'oeil les dates confirmées pour nos
                  parcours certifiants. Chaque niveau renvoie vers les contenus
                  détaillés des pages Découvrir, Approfondir et Transmettre.
                </p>
                <div
                  className="hero-buttons"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    to="/contact"
                    style={{
                      background: "#fff",
                      color: colors.blue,
                      padding: "16px 36px",
                      borderRadius: 10,
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    Réserver une place
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                  <Link
                    to="/découvrir"
                    style={{
                      border: "2px solid rgba(255,255,255,0.6)",
                      color: "#fff",
                      padding: "16px 36px",
                      borderRadius: 10,
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    Voir le détail des niveaux
                    <i className="fa-solid fa-layer-group" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "80px 20px", background: colors.softWhite }}>
          <div className="container">
            <div className="row text-center mb-5">
              <div className="col-lg-10 mx-auto">
                <h2
                  className="section-title"
                  style={{
                    fontSize: "clamp(28px, 5vw, 36px)",
                    fontWeight: 800,
                    marginBottom: 12,
                  }}
                >
                  Les essentiels du calendrier des niveaux
                </h2>
                <p
                  style={{
                    fontSize: "clamp(16px, 3vw, 18px)",
                    color: colors.gray,
                    margin: "0 auto",
                    maxWidth: 760,
                  }}
                >
                  Une lecture synthétique des niveaux Découvrir, Approfondir et
                  Transmettre, fidèle aux contenus des pages programmes et aux
                  données chiffrées des tableaux qui suivent.
                </p>
              </div>
            </div>
            <div className="row g-4">
              {highlights.map((item) => (
                <div key={item.title} className="col-lg-4 col-md-6">
                  <div
                    className="highlight-cards"
                    style={{
                      background: "#fff",
                      borderRadius: 16,
                      padding: "36px 30px",
                      height: "100%",
                      boxShadow: "0 18px 45px rgba(8, 68, 120, 0.08)",
                      borderTop: `3px solid ${colors.blue}`,
                    }}
                  >
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 14,
                        background: colors.softBlue,
                        color: colors.blue,
                        fontSize: 26,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 18,
                      }}
                    >
                      <i className={item.icon} />
                    </div>
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        marginBottom: 12,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        color: colors.gray,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "80px 20px", background: colors.softWhite }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-9">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 18px",
                    borderRadius: 999,
                    background: colors.softBlue,
                    color: colors.blue,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  Parcours certifiants
                </div>
                <h2
                  className="section-title"
                  style={{
                    fontSize: "clamp(28px, 5vw, 36px)",
                    fontWeight: 800,
                    margin: "0 0 14px",
                    color: colors.slate,
                  }}
                >
                  Calendrier 2025 – 2026 par niveaux
                </h2>
                <p
                  style={{
                    maxWidth: 760,
                    fontSize: "clamp(15px, 3vw, 17px)",
                    lineHeight: 1.6,
                    color: colors.gray,
                    marginBottom: 12,
                  }}
                >
                  Les tableaux ci-dessous reprennent les modules issus des
                  niveaux Découvrir, Approfondir et Transmettre. Ils peuvent
                  être affichés sur mobile&nbsp;: faites simplement glisser
                  horizontalement pour consulter toutes les dates proposées.
                </p>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div style={{ marginBottom: 48 }}>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
                className="tabs-container"
              >
                {scheduleLevels.map((level, index) => {
                  return (
                    <React.Fragment key={level.id}>
                      <button
                        onClick={() => setActiveTab(index)}
                        className="tab-button"
                        style={{
                          padding: "16px 32px",
                          background:
                            activeTab === index
                              ? "linear-gradient(135deg, #0a83ca 0%, #09538f 100%)"
                              : "#fff",
                          border:
                            activeTab === index
                              ? "2px solid rgba(10, 131, 202, 0.3)"
                              : `2px solid ${colors.lightGray}`,
                          borderRadius: 8,
                          color: activeTab === index ? "#fff" : colors.slate,
                          fontSize: 14,
                          fontWeight: 600,
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          transition: "all 0.3s ease",
                          boxShadow:
                            activeTab === index
                              ? "0 4px 16px rgba(10, 131, 202, 0.25)"
                              : "0 2px 6px rgba(0, 0, 0, 0.06)",
                          transform:
                            activeTab === index ? "translateY(-1px)" : "none",
                        }}
                        onMouseEnter={(e) => {
                          if (activeTab !== index) {
                            e.currentTarget.style.borderColor = colors.blue;
                            e.currentTarget.style.transform =
                              "translateY(-1px)";
                            e.currentTarget.style.boxShadow =
                              "0 3px 12px rgba(10, 131, 202, 0.15)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeTab !== index) {
                            e.currentTarget.style.borderColor =
                              colors.lightGray;
                            e.currentTarget.style.transform = "none";
                            e.currentTarget.style.boxShadow =
                              "0 2px 6px rgba(0, 0, 0, 0.06)";
                          }
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <span
                            className="tab-button-text"
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                              opacity: 0.85,
                            }}
                          >
                            Niveau {index + 1}
                          </span>
                          <span
                            className="tab-button-text"
                            style={{ fontSize: 14, fontWeight: 500 }}
                          >
                            {tabLabels[index]}
                          </span>
                        </div>
                      </button>
                      {index < scheduleLevels.length - 1 && (
                        <i
                          className="fa-solid fa-circle tab-separator"
                          style={{
                            color: colors.lightGray,
                            fontSize: 6,
                          }}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {scheduleLevels.map((level, index) => (
              <div
                id={level.id}
                key={level.id}
                style={{
                  marginBottom: 64,
                  display: activeTab === index ? "block" : "none",
                  animation:
                    activeTab === index ? "fadeIn 0.4s ease-in" : "none",
                }}
              >
                <div
                  className="level-header"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 18,
                    alignItems: "baseline",
                    marginBottom: 24,
                    padding: "20px 24px",
                    background:
                      "linear-gradient(135deg, #e13734 0%, #c92a27 100%)",
                    borderRadius: 14,
                    border: "1px solid rgba(225, 55, 52, 0.3)",
                    boxShadow: "0 6px 20px rgba(225, 55, 52, 0.2)",
                  }}
                >
                  <h3
                    className="level-title"
                    style={{
                      margin: 0,
                      fontSize: "clamp(18px, 4vw, 22px)",
                      fontWeight: 800,
                      color: "#fff",
                      flex: "1 1 340px",
                    }}
                  >
                    {level.title}
                  </h3>
                  <div
                    className="level-info"
                    style={{
                      display: "flex",
                      gap: 20,
                      fontSize: 14,
                      color: "#fff",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <i
                        className="fa-solid fa-calendar-days"
                        style={{ color: "#fff" }}
                      />
                      <strong style={{ color: "#fff" }}>
                        {level.totalDays} jours
                      </strong>
                    </span>
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <strong style={{ color: "#fff" }}>
                        {level.totalCost}
                      </strong>
                    </span>
                  </div>
                </div>

                <div
                  className="table-scroll-wrapper"
                  style={{
                    overflowX: "auto",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: 18,
                    boxShadow: "0 18px 40px rgba(9, 83, 143, 0.08)",
                    background: "#fff",
                    border: `1px solid ${colors.lightGray}`,
                  }}
                >
                  <table
                    style={{
                      width: "100%",
                      minWidth: 1200,
                      borderCollapse: "separate",
                      borderSpacing: 0,
                    }}
                  >
                    <thead>
                      <tr>
                        {[
                          "Module",
                          "Jours",
                          "Horaires",
                          "Prérequis",
                          "Tarif",
                          ...agendaMonths,
                        ].map((header, idx) => (
                          <th
                            key={header}
                            style={{
                              background:
                                idx === 0 ? colors.blue : colors.softBlue,
                              color: idx === 0 ? "#fff" : colors.blue,
                              fontSize: idx === 0 ? 13 : 11,
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              padding: idx === 0 ? "16px 20px" : "12px 14px",
                              borderBottom: `1px solid ${colors.lightGray}`,
                              borderRight: `1px solid ${colors.lightGray}`,
                              whiteSpace: "nowrap",
                              textAlign: idx === 0 ? "left" : "center",
                              minWidth: idx === 0 ? 260 : idx < 5 ? 90 : 80,
                            }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {level.modules.map((module) => (
                        <tr key={module.code}>
                          <td
                            style={{
                              padding: "18px 20px",
                              borderRight: `2px solid ${colors.lightGray}`,
                              borderBottom: `1px solid ${colors.lightGray}`,
                              minWidth: 260,
                              textAlign: "left",
                              color: colors.slate,
                              fontWeight: 600,
                              background: "#fff",
                            }}
                          >
                            <div
                              style={{
                                fontSize: 12,
                                color: colors.blue,
                                marginBottom: 8,
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                              }}
                            >
                              {module.code}
                            </div>
                            <div
                              style={{
                                fontSize: 15,
                                fontWeight: 700,
                                lineHeight: 1.4,
                                marginBottom: 4,
                              }}
                            >
                              {module.name}
                            </div>
                          </td>
                          {[
                            module.days,
                            module.hours,
                            module.prereq,
                            module.price,
                          ].map((value, index) => (
                            <td
                              key={`${module.code}-meta-${index}`}
                              style={{
                                padding: "16px 14px",
                                borderRight: `1px solid ${colors.lightGray}`,
                                borderBottom: `1px solid ${colors.lightGray}`,
                                fontSize: 13,
                                color: colors.gray,
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                fontWeight:
                                  index === 0 || index === 3 ? 700 : 400,
                                background:
                                  index === 3 ? colors.softBlue : "#fff",
                              }}
                            >
                              {value}
                            </td>
                          ))}
                          {agendaMonths.map((month) => {
                            const hasSession = module.sessions.includes(month);
                            return (
                              <td
                                key={`${module.code}-${month}`}
                                style={{
                                  padding: "14px 12px",
                                  borderRight: `1px solid ${colors.lightGray}`,
                                  borderBottom: `1px solid ${colors.lightGray}`,
                                  background: hasSession
                                    ? "rgba(10, 131, 202, 0.2)"
                                    : "#fff",
                                  color: hasSession ? colors.blue : "#ddd",
                                  fontWeight: hasSession ? 700 : 400,
                                  textAlign: "center",
                                  fontSize: 16,
                                  minWidth: 80,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {hasSession ? "✓" : "—"}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td
                          colSpan={5 + agendaMonths.length}
                          style={{
                            padding: "20px",
                            borderTop: `2px solid ${colors.lightGray}`,
                            background: "#fff",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 16,
                              padding: "16px 20px",
                              background: colors.softBlue,
                              borderRadius: 12,
                              border: `1px solid ${colors.lightGray}`,
                            }}
                          >
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  fontSize: 14,
                                  fontWeight: 600,
                                  color: colors.slate,
                                  marginBottom: 4,
                                }}
                              >
                                <strong style={{ color: colors.blue }}>
                                  Parcours complet
                                </strong>
                                &nbsp;: {level.totalDays} jours –{" "}
                                <span style={{ color: "#e13734" }}>
                                  {level.totalCost}
                                </span>
                              </div>
                              <div style={{ fontSize: 13, color: colors.gray }}>
                                Planning modulable sur demande (intra ou
                                inter-entreprises).
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div
                  className="agenda-level-navigation"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    flexWrap: "nowrap",
                    marginTop: 24,
                    width: "100%",
                    overflowX: "auto",
                    paddingBottom: 8,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab(Math.max(index - 1, 0))}
                    disabled={index === 0}
                    className="nav-button"
                    style={{
                      flex: "0 0 auto",
                      padding: "14px 28px",
                      borderRadius: 12,
                      border: `2px solid ${colors.blue}`,
                      background:
                        index === 0 ? "rgba(10, 131, 202, 0.08)" : "#fff",
                      color:
                        index === 0 ? "rgba(10, 131, 202, 0.4)" : colors.blue,
                      fontSize: 14,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor: index === 0 ? "not-allowed" : "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      minWidth: 180,
                      transition: "all 0.3s ease",
                      boxShadow:
                        index === 0
                          ? "none"
                          : "0 8px 20px rgba(10, 131, 202, 0.15)",
                    }}
                    aria-label="Voir le niveau précédent"
                  >
                    <i className="fa-solid fa-arrow-left" />
                    <span className="nav-text-full">Niveau précédent</span>
                    <span className="nav-text-short">Précédent</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTab(
                        Math.min(index + 1, scheduleLevels.length - 1)
                      )
                    }
                    disabled={index === scheduleLevels.length - 1}
                    className="nav-button"
                    style={{
                      flex: "0 0 auto",
                      padding: "14px 28px",
                      borderRadius: 12,
                      border:
                        index === scheduleLevels.length - 1
                          ? "2px solid rgba(10, 131, 202, 0.2)"
                          : "2px solid transparent",
                      background:
                        index === scheduleLevels.length - 1
                          ? "rgba(10, 131, 202, 0.15)"
                          : "linear-gradient(135deg, #0a83ca 0%, #09538f 100%)",
                      color:
                        index === scheduleLevels.length - 1
                          ? "rgba(255,255,255,0.7)"
                          : "#fff",
                      fontSize: 14,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor:
                        index === scheduleLevels.length - 1
                          ? "not-allowed"
                          : "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      minWidth: 180,
                      transition: "all 0.3s ease",
                      boxShadow:
                        index === scheduleLevels.length - 1
                          ? "none"
                          : "0 10px 24px rgba(9, 83, 143, 0.3)",
                    }}
                    aria-label="Voir le niveau suivant"
                  >
                    <span className="nav-text-full">Niveau suivant</span>
                    <span className="nav-text-short">Suivant</span>
                    <i className="fa-solid fa-arrow-right" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <style>
            {`
            /* Bold red scrollbar styling */
            .table-scroll-wrapper::-webkit-scrollbar {
              height: 14px;
            }
            
            .table-scroll-wrapper::-webkit-scrollbar-track {
              background: rgba(225, 55, 52, 0.15);
              border-radius: 8px;
            }
            
            .table-scroll-wrapper::-webkit-scrollbar-thumb {
              background: #e13734;
              border-radius: 8px;
              border: 3px solid rgba(255, 255, 255, 0.4);
            }
            
            .table-scroll-wrapper::-webkit-scrollbar-thumb:hover {
              background: #c92a27;
            }
            
            /* Firefox */
            .table-scroll-wrapper {
              scrollbar-width: auto;
              scrollbar-color: #e13734 rgba(225, 55, 52, 0.15);
            }

            /* Mobile center tabs */
            @media (max-width: 768px) {
              .tabs-container {
                justify-content: center !important;
              }
              .agenda-level-navigation {
                justify-content: flex-start !important;
              }
            }

            @media (max-width: 568px) {
              .agenda-level-navigation button {
                padding: 12px 20px !important;
                min-width: 150px !important;
                font-size: 12px !important;
                border-radius: 10px !important;
              }
            }
          `}
          </style>
        </section>

        <section
          style={{
            padding: "100px 20px",
            background: "linear-gradient(135deg, #0a83ca 0%, #09538f 100%)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 18px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.18)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Parcours thématiques
                </div>
                <h2
                  className="section-title"
                  style={{
                    fontSize: "clamp(28px, 5vw, 34px)",
                    fontWeight: 800,
                    margin: "18px 0 12px",
                    color: "#fff",
                  }}
                >
                  Des trajectoires pour chaque public
                </h2>
                <p
                  style={{
                    maxWidth: 640,
                    margin: "0 auto",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "clamp(14px, 3vw, 16px)",
                  }}
                >
                  Ces cartes reprennent les grandes lignes des niveaux présentés
                  dans les pages Découvrir, Approfondir et Transmettre. Elles
                  vous aident à sélectionner rapidement le bloc le plus adapté à
                  vos équipes.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {thematicTracks.map((track) => (
                <div key={track.title} className="col-lg-4 col-md-6">
                  <div
                    className="thematic-card"
                    style={{
                      background: "#fff",
                      borderRadius: 16,
                      padding: "32px 28px",
                      boxShadow: "0 24px 46px rgba(5, 46, 82, 0.18)",
                      borderTop: `3px solid ${colors.deepBlue}`,
                      height: "100%",
                    }}
                  >
                    <h3
                      className="thematic-title"
                      style={{
                        fontSize: "clamp(18px, 4vw, 20px)",
                        fontWeight: 800,
                        color: colors.slate,
                        marginBottom: 20,
                      }}
                    >
                      {track.title}
                    </h3>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "grid",
                        gap: 14,
                      }}
                    >
                      {track.slots.map((slot) => (
                        <li
                          key={slot}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            color: colors.gray,
                          }}
                        >
                          <span
                            style={{
                              color: colors.blue,
                              fontSize: 16,
                              marginTop: 2,
                            }}
                          >
                            •
                          </span>
                          <span style={{ lineHeight: 1.6 }}>{slot}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={track.route}
                      style={{
                        marginTop: 20,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontWeight: 700,
                        color: colors.blue,
                        textDecoration: "none",
                      }}
                    >
                      Consulter la page programme
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            position: "relative",
            padding: "96px 20px",
            background: "#fff",
            overflow: "hidden",
          }}
        >
          <div className="container" style={{ position: "relative" }}>
            <div
              style={{
                background: colors.softBlue,
                border: `1px solid ${colors.lightGray}`,
                borderRadius: 24,
                padding: "48px 40px",
                boxShadow: "0 24px 56px rgba(11, 83, 135, 0.08)",
              }}
            >
              <div className="row align-items-center g-4">
                <div className="col-lg-7">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 18px",
                      borderRadius: 999,
                      background: "#fff",
                      border: `1px solid ${colors.lightGray}`,
                      color: colors.blue,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      marginBottom: 18,
                    }}
                  >
                    Sur mesure
                  </div>
                  <h2
                    style={{
                      fontSize: "clamp(30px, 5vw, 44px)",
                      fontWeight: 800,
                      color: colors.blue,
                      lineHeight: 1.15,
                      marginBottom: 20,
                    }}
                  >
                    Co-construisons votre calendrier privilégié EnnéaMaroc
                  </h2>
                  <p
                    style={{
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: colors.gray,
                      marginBottom: 24,
                    }}
                  >
                    Privatisation de panels, modules in situ, formats hybrides :
                    nous réglons chaque étape pour vos équipes.
                  </p>
                  <div
                    style={{ display: "grid", gap: 12, color: colors.slate }}
                  >
                    {[
                      "Sélection de dates adaptées à vos contraintes",
                      "Animations co-brandées avec vos directions internes",
                      "Support logistique et coaching de vos intervenants",
                    ].map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <span
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: "50%",
                            background: "#fff",
                            border: `1px solid ${colors.lightGray}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <i
                            className="fa-solid fa-check"
                            style={{ color: colors.blue }}
                          />
                        </span>
                        <span style={{ fontSize: 15, lineHeight: 1.5 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-5">
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 20,
                      padding: "36px 32px",
                      boxShadow: "0 30px 60px rgba(6, 52, 92, 0.25)",
                      color: colors.slate,
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "6px 16px",
                        borderRadius: 999,
                        background: colors.softBlue,
                        color: colors.blue,
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: 18,
                      }}
                    >
                      Exemple d'accompagnement
                    </div>
                    <h3
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        marginBottom: 14,
                      }}
                    >
                      Programme corporate clé en main
                    </h3>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "grid",
                        gap: 12,
                        color: colors.gray,
                        fontSize: 14,
                      }}
                    >
                      {[
                        "Audition des enjeux et cadrage des objectifs",
                        "Design des séquences Découvrir / Approfondir / Transmettre",
                        "Pilotage des invitations et reporting post-session",
                      ].map((step) => (
                        <li key={step} style={{ display: "flex", gap: 10 }}>
                          <span style={{ color: colors.blue }}>•</span>
                          <span style={{ lineHeight: 1.6 }}>{step}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      style={{
                        marginTop: 28,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "14px 28px",
                        borderRadius: 10,
                        background: colors.blue,
                        color: "#fff",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      Planifier un échange
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Agenda;
