"use client";

import { useRef, useState, useLayoutEffect, useEffect } from "react";
import Slider from "react-slick";
import data from "../../Data/testimonial1.json";

/* ---------- tiny inline icons (rotates by index) ---------- */
const Icon = ({ i = 0 }) => {
  const which = i % 3;
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none" };
  const stroke = "rgba(255,255,255,0.95)";
  if (which === 0) {
    // Sparkles
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M12 3l1.5 3.8L17 8.5l-3.5 1.7L12 14l-1.5-3.8L7 8.5l3.5-1.7L12 3z"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path
          d="M19 4l.8 2 .8 2-2-.8-2-.8 2-.8 2-.8zM5 14l.8 2 .8 2-2-.8-2-.8 2-.8 2-.8z"
          stroke={stroke}
          strokeWidth="1.2"
        />
      </svg>
    );
  }
  if (which === 1) {
    // Target
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="7.5" stroke={stroke} strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3.5" stroke={stroke} strokeWidth="1.5" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3"
          stroke={stroke}
          strokeWidth="1.5"
        />
      </svg>
    );
  }
  // Book
  return (
    <svg {...common} aria-hidden="true">
      <path
        d="M5 5.5A2.5 2.5 0 0 1 7.5 3H20v14.5A2.5 2.5 0 0 1 17.5 20H7.5A2.5 2.5 0 0 0 5 22V5.5z"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <path
        d="M5 5.5A2.5 2.5 0 0 1 7.5 3h.5V17"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
};

/* ---------- component ---------- */
const TestimonialComponent = () => {
  const sliderRef = useRef(null);

  // equal-height logic (unchanged idea)
  const measureRef = useRef(null);
  const [cardH, setCardH] = useState(null);

  const measureHeights = () => {
    if (!measureRef.current) return;
    const els = measureRef.current.querySelectorAll(".tc-card");
    let max = 0;
    els.forEach((el) => {
      el.style.height = "auto";
      max = Math.max(max, el.scrollHeight);
    });
    if (max) setCardH(Math.ceil(max));
  };

  useLayoutEffect(() => {
    measureHeights();
  }, [data]);

  useEffect(() => {
    const onResize = () => {
      setCardH(null);
      requestAnimationFrame(measureHeights);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 1 } },
      { breakpoint: 1199, settings: { slidesToShow: 1 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  return (
    <section
      style={{
        background: `linear-gradient(135deg, #0a83ca 0%, #0670b3 100%)`,
        padding: "80px 0",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE — unchanged content */}
          <div style={{ flex: "1 1 500px", minWidth: "300px" }}>
            <div style={{ marginBottom: "40px" }}>
              <div style={{ marginBottom: "30px" }}>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "600",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      background: "#e13734",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                  DÉFINITION
                </div>

                <h2
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: "700",
                    lineHeight: "1.2",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontWeight: "800" }}>L'Ennéagramme :</span> Une
                  Carte Vivante de l'Être Humain
                </h2>

                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: "300",
                    opacity: "0.9",
                  }}
                >
                  Plus qu'un outil, une voie de transformation
                </p>
              </div>

              <div
                style={{
                  width: "60px",
                  height: "3px",
                  background: "#e13734",
                  marginBottom: "25px",
                }}
              />

              <div>
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    opacity: "0.9",
                  }}
                >
                  L'Ennéagramme n'est pas seulement un modèle de personnalité.
                  C'est une carte vivante des dynamiques humaines, un miroir qui
                  révèle nos forces, nos fragilités, et les chemins d'évolution
                  possibles. Il nous aide à passer de la survie automatique à la
                  présence consciente, en ouvrant un espace de liberté
                  intérieure.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — slider with blurred red cards + icons */}
          <div style={{ flex: "1 1 500px", minWidth: "300px" }}>
            <div style={{ position: "relative" }}>
              <Slider ref={sliderRef} {...settings}>
                {data.map((item, index) => (
                  <div key={index}>
                    <div
                      className="tc-card"
                      style={{
                        // red tinted glass
                        background: "rgba(225, 55, 52, 0.85)",
                        borderRadius: "20px",
                        padding: "40px 30px",
                        margin: "0 10px",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                        transition:
                          "transform .25s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease",
                        cursor: "pointer",
                        border: "1px solid rgba(255,255,255,0.28)",
                        backdropFilter: "blur(12px) saturate(115%)",
                        WebkitBackdropFilter: "blur(12px) saturate(115%)",
                        // equal height
                        height: cardH ? `${cardH}px` : "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-6px)";
                        e.currentTarget.style.boxShadow =
                          "0 26px 60px rgba(0,0,0,0.25)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.5)";
                        e.currentTarget.style.background =
                          "rgba(225, 55, 52, 0.92)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 20px 40px rgba(0,0,0,0.15)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.28)";
                        e.currentTarget.style.background =
                          "rgba(225, 55, 52, 0.85)";
                      }}
                    >
                      {/* top row: icon + decorative quote */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "16px",
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            display: "grid",
                            placeItems: "center",
                            border: "1px solid rgba(255,255,255,0.4)",
                            background:
                              "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35)",
                          }}
                        >
                          <Icon i={index} />
                        </div>
                        <div
                          style={{
                            fontSize: 40,
                            color: "#fff",
                            marginLeft: 12,
                            fontFamily: "serif",
                            opacity: 0.9,
                          }}
                        >
                          "
                        </div>
                      </div>

                      {/* content */}
                      <h3
                        style={{
                          color: "#ffffff",
                          fontSize: "20px",
                          fontWeight: "600",
                          marginBottom: "12px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          color: "rgba(255, 255, 255, 0.92)",
                          fontSize: "15px",
                          lineHeight: "1.7",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>

              {/* arrows (kept) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  marginTop: "30px",
                }}
              >
                <button
                  onClick={previous}
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    color: "#ffffff",
                    fontSize: "18px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#e13734";
                    e.currentTarget.style.borderColor = "#e13734";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.3)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  ←
                </button>

                <button
                  onClick={next}
                  style={{
                    background: "#e13734",
                    border: "2px solid #e13734",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    color: "#ffffff",
                    fontSize: "18px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    boxShadow: "0 5px 15px rgba(225, 55, 52, 0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(225, 55, 52, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 15px rgba(225, 55, 52, 0.4)";
                  }}
                >
                  →
                </button>
              </div>

              {/* hidden measurer (unchanged) */}
              <div
                ref={measureRef}
                style={{
                  position: "absolute",
                  left: "-99999px",
                  top: "-99999px",
                  width: "100%",
                  visibility: "hidden",
                  pointerEvents: "none",
                  overflow: "visible",
                }}
              >
                {data.map((item, i) => (
                  <div
                    key={`m-${i}`}
                    className="tc-card"
                    style={{
                      background: "rgba(225, 55, 52, 0.85)",
                      borderRadius: "20px",
                      padding: "40px 30px",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                      border: "1px solid rgba(255,255,255,0.28)",
                      backdropFilter: "blur(12px) saturate(115%)",
                      WebkitBackdropFilter: "blur(12px) saturate(115%)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          display: "grid",
                          placeItems: "center",
                          border: "1px solid rgba(255,255,255,0.4)",
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
                        }}
                      >
                        <Icon i={i} />
                      </div>
                      <div
                        style={{
                          fontSize: 40,
                          color: "#fff",
                          marginLeft: 12,
                          fontFamily: "serif",
                          opacity: 0.9,
                        }}
                      >
                        "
                      </div>
                    </div>
                    <h3
                      style={{
                        color: "#ffffff",
                        fontSize: "20px",
                        fontWeight: "600",
                        marginBottom: "12px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.92)",
                        fontSize: "15px",
                        lineHeight: "1.7",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              {/* end measurer */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
