import { useState } from "react";

const Process3 = () => {
  const colors = {
    bg: "#0a83ca", // ← requested background
    primary: "#0a83ca",
    danger: "#dc3545",
    text: "#0e1b25",
    muted: "#5a6f82",
    cardBg: "#ffffff",
    shadow: "0 14px 36px rgba(5, 28, 50, .08)",
    border: "rgba(10,131,202,.25)",

    // clarity on blue background
    onPrimary: "#ffffff",
    mutedOnPrimary: "rgba(255,255,255,.88)",
    borderOnPrimary: "rgba(255,255,255,.45)",
    pillOnPrimary: "rgba(255,255,255,.18)",
  };

  const tabs = [
    {
      id: "essence",
      label: "Essence",
      title: "La recherche de l’essence",
      intro:
        "L’Ennéagramme enseigne que nous ne sommes pas réductibles à nos conditionnements.",
      bullets: [
        "Notre ego est une construction, une stratégie de survie.",
        "Derrière lui, il y a notre essence : une lumière intérieure, unique et universelle à la fois.",
      ],
      note: "Philosophie : apprendre à se libérer des illusions de l’ego pour révéler l’essence.",
    },
    {
      id: "conscience",
      label: "Conscience",
      title: "La transformation par la conscience",
      intro:
        "Chaque type porte une passion (émotion dominante), une fixation (schéma mental) et une compulsion (évitement). Ces mécanismes nous enferment, mais ils sont aussi des portes de transformation.",
      bullets: [],
      note: "Philosophie : l’obstacle est le chemin – prendre conscience de nos conditionnements pour les dépasser.",
    },
    {
      id: "diversite",
      label: "Diversité",
      title: "L’unité dans la diversité",
      intro:
        "Il n’y a pas de « bon » ou de « mauvais » type. Chaque ennéatype exprime une partie du puzzle de l’humanité.",
      bullets: [
        "En se reconnaissant dans son type, on apprend à se respecter.",
        "En découvrant les autres types, on apprend à aimer la différence.",
      ],
      note: "Philosophie : la diversité des personnalités est une richesse et un appel à l’unité.",
    },
    {
      id: "tajalli",
      label: "Fi Takhallî – Tajallî",
      title: "La dynamique de libération : Fi Takhallî – Tajallî",
      intro: "Comme l’a enseigné Rûmî et la tradition soufie :",
      bullets: [
        "Takhallî → se vider, se délester des illusions, des attachements et des automatismes.",
        "Tajallî → se révéler, laisser apparaître la lumière intérieure.",
      ],
      note: "Philosophie : l’Ennéagramme est une pédagogie de dépouillement pour permettre la révélation de l’être.",
    },
    {
      id: "humanisme",
      label: "Humanisme",
      title: "Un humanisme spirituel",
      intro: (
        <>
          L’Ennéagramme relie la <strong>psychologie moderne</strong> et la{" "}
          <strong>sagesse spirituelle ancienne</strong>.
        </>
      ),
      bullets: [
        "Il est un outil pragmatique pour le développement personnel, le leadership, la communication.",
        "Il est aussi une voie de sens, une philosophie de vie tournée vers la liberté intérieure, l’amour et la présence consciente.",
      ],
      note: (
        <>
          La philosophie de l’Ennéagramme est une philosophie de transformation
          et de réconciliation :
          <ul style={{ margin: "8px 0 0 18px" }}>
            <li>Avec soi-même (retrouver son essence),</li>
            <li>Avec les autres (honorer la diversité),</li>
            <li>
              Avec la vie (accueillir ce qui est et s’ouvrir à ce qui se
              révèle).
            </li>
          </ul>
        </>
      ),
    },
  ];

  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active);

  const Tab = ({ id, label, isActive, onClick }) => (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      style={{
        cursor: "pointer",
        background: isActive ? colors.cardBg : "rgba(255,255,255,.08)",
        color: isActive ? colors.primary : colors.onPrimary,
        border: `1px solid ${
          isActive ? colors.primary : colors.borderOnPrimary
        }`,
        padding: "10px 14px",
        borderRadius: 999,
        fontWeight: 700,
        letterSpacing: ".02em",
        boxShadow: isActive ? "0 6px 18px rgba(10,131,202,.15)" : "none",
        transition: "all .2s ease",
        whiteSpace: "nowrap",
        backdropFilter: isActive ? "none" : "blur(4px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = colors.danger;
        e.currentTarget.style.borderColor = colors.danger;
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.boxShadow = "0 8px 22px rgba(220,53,69,.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = isActive
          ? colors.cardBg
          : "rgba(255,255,255,.08)";
        e.currentTarget.style.borderColor = isActive
          ? colors.primary
          : colors.borderOnPrimary;
        e.currentTarget.style.color = isActive
          ? colors.primary
          : colors.onPrimary;
        e.currentTarget.style.boxShadow = isActive
          ? "0 6px 18px rgba(10,131,202,.15)"
          : "none";
      }}
    >
      {label}
    </button>
  );

  return (
    <section style={{ background: colors.bg, padding: "80px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 16px" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: 28 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 12px",
              borderRadius: 999,
              background: colors.pillOnPrimary, // clearer on blue
              color: colors.onPrimary,
              fontWeight: 700,
              letterSpacing: ".06em",
            }}
          >
            PHILOSOPHIE
          </div>
          <h2
            style={{
              margin: "14px 0 6px",
              fontSize: 38,
              lineHeight: 1.15,
              fontWeight: 900,
              color: colors.onPrimary, // white title on blue
              textWrap: "balance",
            }}
          >
            La philosophie{" "}
            <span style={{ opacity: 0.95 }}>de l’Ennéagramme</span>
          </h2>
          <p
            style={{
              maxWidth: 860,
              margin: "0 auto",
              color: colors.mutedOnPrimary, // readable paragraph on blue
            }}
          >
            Sous la lumière de cette définition (spirituelle, humaniste et
            enracinée dans l’histoire), on peut dire que la philosophie de
            l’Ennéagramme repose sur plusieurs piliers.
          </p>
        </header>

        {/* Tabs */}
        <div
          role="tablist"
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 18,
          }}
        >
          {tabs.map((t) => (
            <Tab
              key={t.id}
              id={t.id}
              label={t.label}
              isActive={active === t.id}
              onClick={() => setActive(t.id)}
            />
          ))}
        </div>

        {/* Content Card with bright border on blue */}
        <div
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,.6), rgba(255,255,255,.2))",
            padding: 1.5,
            borderRadius: 18,
            boxShadow: colors.shadow,
            transition: "box-shadow .2s ease, transform .2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 18px 40px rgba(255,255,255,.22)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = colors.shadow;
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <article
            style={{
              background: colors.cardBg, // white card for clarity
              borderRadius: 17,
              padding: 22,
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 12,
            }}
          >
            <h3
              style={{
                margin: "0 0 6px",
                fontWeight: 900,
                lineHeight: 1.2,
                color: colors.primary, // blue heading inside white card
              }}
            >
              {current.title}
            </h3>

            {current.intro && (
              <p style={{ margin: 0, color: colors.text }}>{current.intro}</p>
            )}

            {current.bullets?.length > 0 && (
              <ul style={{ margin: "2px 0 0 18px", color: colors.text }}>
                {current.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            {current.note && (
              <div
                style={{
                  marginTop: 6,
                  padding: "10px 12px",
                  borderRadius: 12,
                  background: "rgba(10,131,202,.06)",
                  borderLeft: `4px solid rgba(10,131,202,.35)`,
                  color: "#2e4a5c",
                  fontStyle: "italic",
                }}
              >
                {current.note}
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Process3;
