import React from "react";
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

const highlights = [
  {
    icon: "fa-solid fa-calendar-check",
    title: "Rencontres mensuelles",
    text: "Panels, ateliers et cercles de dialogue pour explorer l'Ennéagramme en situation réelle.",
  },
  {
    icon: "fa-solid fa-people-line",
    title: "Cohortes accompagnées",
    text: "Groupes d'entreprises, managers et jeunes talents qui avancent ensemble sur 6 à 8 semaines.",
  },
  {
    icon: "fa-solid fa-circle-nodes",
    title: "Réseau EnnéaMaroc",
    text: "Une communauté active d'apprenants, d'alumni et de praticiens pour partager retours et expertises.",
  },
];

const upcoming = [
  {
    tag: "Managers & Leaders",
    title: "Cycle Leadership conscient",
    date: "12 • 13 • 26 février 2026",
    location: "Casa - Business Center Twin 2",
    focus: "Module immersif en 3 temps pour renforcer posture, communication et plan d'impact.",
  },
  {
    tag: "Jeunes talents",
    title: "Bootcamp Orientation & Confiance",
    date: "22 • 23 mars 2026",
    location: "Campus EnnéaMaroc - Rabat",
    focus: "Deux jours pour révéler ses talents, apprivoiser le stress et bâtir sa feuille de route.",
  },
  {
    tag: "Cercle ouvert",
    title: "Espace Dialogue Mensuel",
    date: "4 avril 2026",
    location: "En ligne - Zoom studio EnnéaMaroc",
    focus: "Table ronde sur les neuf profils face aux transformations culturelles des organisations.",
  },
];

const thematicTracks = [
  {
    title: "Parcours entreprises",
    slots: [
      "Panel découverte Ennéagramme (1h30)",
      "Session managers : 3 modules sur 6 semaines",
      "Co-développement et coaching d'équipes",
    ],
  },
  {
    title: "Espace jeunes et alumni",
    slots: [
      "Ateliers weekend : trouver sa boussole intérieure",
      "Cercles d'intégration et mentoring",
      "Pitch forum projets & talents",
    ],
  },
  {
    title: "Communauté praticiens",
    slots: [
      "Masterclass typologies avancées",
      "Supervision de cas clients",
      "Laboratoire expérimental pour nouveaux formats",
    ],
  },
];

function Agenda() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", color: colors.slate }}>
      <section
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
                style={{
                  margin: "26px 0 20px",
                  fontSize: "clamp(36px, 6vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: "#fff",
                }}
              >
                Temps forts, ateliers et espaces de dialogue
              </h1>
              <p
                style={{
                  margin: "0 auto 38px",
                  maxWidth: 720,
                  fontSize: 20,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Retrouvez les événements à venir pour les entreprises, les
                managers et les jeunes talents. Chaque rendez-vous prolonge nos
                parcours Découvrir, Approfondir et Transmettre.
              </p>
              <div
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
                  to="/solution"
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
                  Voir EnnéaMaroc PRO
                  <i className="fa-solid fa-calendar-days" />
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
              <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>
                Ce que vous trouverez sur l'agenda
              </h2>
              <p
                style={{
                  fontSize: 18,
                  color: colors.gray,
                  margin: "0 auto",
                  maxWidth: 760,
                }}
              >
                Des moments pour progresser, pour partager vos pratiques et pour
                ancrer l'Ennéagramme dans vos équipes.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {highlights.map((item) => (
              <div key={item.title} className="col-lg-4">
                <div
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
                    style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}
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

      <section style={{ padding: "80px 20px", background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <div
                style={{
                  color: colors.blue,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Prochains rendez-vous
              </div>
              <h2
                style={{
                  fontSize: 40,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Sélection de sessions ouvertes et de cycles en cours
              </h2>
            </div>
            <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
              <p style={{ color: colors.gray, fontSize: 16, lineHeight: 1.6 }}>
                Inscription prioritaire pour nos partenaires et alumni. Les
                places restantes sont ouvertes 15 jours avant chaque date.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {upcoming.map((event) => (
              <div key={event.title} className="col-lg-4">
                <div
                  style={{
                    border: `1px solid ${colors.lightGray}`,
                    borderRadius: 18,
                    padding: "34px 28px",
                    height: "100%",
                    background: colors.softWhite,
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: colors.red,
                    }}
                  >
                    {event.tag}
                  </span>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: colors.slate,
                      margin: 0,
                    }}
                  >
                    {event.title}
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gap: 10,
                      fontSize: 15,
                      color: colors.gray,
                    }}
                  >
                    <div>
                      <i
                        className="fa-solid fa-clock"
                        style={{ marginRight: 8, color: colors.blue }}
                      />
                      {event.date}
                    </div>
                    <div>
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ marginRight: 8, color: colors.blue }}
                      />
                      {event.location}
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      color: colors.gray,
                      lineHeight: 1.6,
                    }}
                  >
                    {event.focus}
                  </p>
                  <Link
                    to="/contact"
                    style={{
                      marginTop: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      color: colors.blue,
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Demander le programme détaillé
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 20px", background: colors.softWhite }}>
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
                  background: colors.softBlue,
                  color: colors.blue,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Parcours thématiques
              </div>
              <h2
                style={{ fontSize: 34, fontWeight: 800, margin: "18px 0 12px" }}
              >
                Des trajectoires pour chaque public
              </h2>
              <p
                style={{
                  maxWidth: 640,
                  margin: "0 auto",
                  color: colors.gray,
                  fontSize: 16,
                }}
              >
                Choisissez une série d'événements adaptés à vos enjeux. Nos
                équipes peuvent assembler un calendrier sur mesure pour votre
                organisation.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {thematicTracks.map((track) => (
              <div key={track.title} className="col-lg-4">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: "32px 28px",
                    boxShadow: "0 22px 48px rgba(15, 78, 134, 0.08)",
                    borderTop: `3px solid ${colors.blue}`,
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 20,
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
          background:
            "linear-gradient(135deg, rgba(7,118,187,0.95), rgba(10,131,202,0.9))",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.12), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.22)",
              borderRadius: 24,
              padding: "48px 40px",
              backdropFilter: "blur(6px)",
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
                    background: "rgba(255,255,255,0.18)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "#fff",
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
                    color: "#fff",
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
                    color: "rgba(255,255,255,0.9)",
                    marginBottom: 24,
                  }}
                >
                  Privatisation de panels, modules in situ, formats hybrides : nous réglons chaque étape pour vos équipes.
                </p>
                <div style={{ display: "grid", gap: 12, color: "#fff" }}>
                  {[
                    "Sélection de dates adaptées à vos contraintes",
                    "Animations co-brandées avec vos directions internes",
                    "Support logistique et coaching de vos intervenants",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{ display: "flex", alignItems: "center", gap: 12 }}
                    >
                      <span
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.16)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i className="fa-solid fa-check" style={{ color: "#fff" }} />
                      </span>
                      <span style={{ fontSize: 15, lineHeight: 1.5 }}>{item}</span>
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
                  <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
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
  );
}

export default Agenda;
