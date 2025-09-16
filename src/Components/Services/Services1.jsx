import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Services1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 991, settings: { slidesToShow: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 766, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext();
  const previous = () => sliderRef.current.slickPrev();

  return (
    <section className="service-section overflow-hidden">
      <style>{`
        /* ================== Equal card heights ================== */
        .service-slider { --card-equal-h: 560px; }          /* desktop default */
        .service-slider .slick-track { display:flex !important; align-items:stretch; }
        .service-slider .slick-slide { height:auto !important; }
        .service-slider .slick-slide > div { height:100%; }
        .service-single-box { height:100%; display:flex; }
        .service-single-box .inner-box {
          display:flex; flex-direction:column; height:100%;
          min-height: var(--card-equal-h);
          padding-bottom: 24px;
        }
        .service-single-box .theme-btn.service-btn { margin-top:auto; } /* pin CTA at bottom */

        /* Tweak equal height across breakpoints */
        @media (max-width: 1199.98px) { .service-slider { --card-equal-h: 540px; } }
        @media (max-width: 991.98px)  { .service-slider { --card-equal-h: 520px; } }
        @media (max-width: 767.98px)  { .service-slider { --card-equal-h: 480px; } }

        /* ================== Bottom controls (white & blue) ================== */
        .slider-bottom-controls {
          display:flex; justify-content:flex-end; gap:12px; margin-top:16px;
        }
        .slider-ctrl {
          display:inline-flex; align-items:center; gap:8px;
          padding:10px 16px; border-radius:9999px; font-weight:700; letter-spacing:.2px;
          border:2px solid var(--theme-color2);
          transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease, color .2s ease;
          box-shadow:0 6px 18px rgba(0,0,0,.08);
        }
        /* Blue button (white text) */
        .slider-ctrl--primary {
          background: var(--theme-color2); color:#fff;
        }
        .slider-ctrl--primary:hover { transform: translateY(-2px); box-shadow:0 10px 24px rgba(0,0,0,.16); }
        /* White button (blue text) */
        .slider-ctrl--white {
          background:#fff; color: var(--theme-color2);
        }
        .slider-ctrl--white:hover { background:#f7fbff; transform: translateY(-2px); box-shadow:0 10px 24px rgba(0,0,0,.12); }
      `}</style>

      <div className="p-top-left wow slideInLeft">
        <img src="/assets/images/service/shape01.png" alt="Service shape" />
      </div>

      <div className="container space">
        <div className="row align-items-center gy-30">
          {/* LEFT: PHILOSOPHIE intro (unchanged text) */}
          <div className="col-lg-4 col-md-6">
            <div className="service-content-wrap">
              <div className="title-area two white">
                <div
                  className="sub-title"
                  style={{ color: "var( --gray-color2)" }}
                >
                  <span>
                    <i className="asterisk"></i>
                  </span>
                  PHILOSOPHIE
                </div>

                <div className="title-wrap">
                  <h2
                    className="sec-title"
                    style={{ color: "var(--light-color2)" }}
                  >
                    Philosophie <br />
                    <span className="bold">
                      <span style={{ color: "var(--light-color2)" }}>
                        de l’Ennéagramme
                      </span>
                    </span>
                  </h2>

                  <p
                    className="sec-text"
                    style={{ color: "var(--light-color2)" }}
                  >
                    Sous la lumière de cette définition (spirituelle, humaniste
                    et enracinée dans l’histoire), on peut dire que la
                    philosophie de l’Ennéagramme repose sur plusieurs piliers :
                  </p>

                  <p
                    className="sec-text"
                    style={{ color: "var(--light-color2)", marginTop: 10 }}
                  >
                    <strong>Un humanisme spirituel</strong> — L’Ennéagramme
                    relie la psychologie moderne et la sagesse spirituelle
                    ancienne.
                  </p>
                  <ul
                    style={{
                      color: "var(--light-color2)",
                      paddingLeft: 18,
                      marginTop: 6,
                    }}
                  >
                    <li>
                      Il est un outil pragmatique pour le développement
                      personnel, le leadership, la communication.
                    </li>
                    <li>
                      Il est aussi une voie de sens, une philosophie de vie
                      tournée vers la liberté intérieure, l’amour et la présence
                      consciente.
                    </li>
                  </ul>

                  <p
                    className="sec-text"
                    style={{ color: "var(--light-color2)", marginTop: 14 }}
                  >
                    La philosophie de l’Ennéagramme est une philosophie de
                    transformation et de réconciliation :
                  </p>
                  <ul style={{ color: "var(--light-color2)", paddingLeft: 18 }}>
                    <li>Avec soi-même (retrouver son essence),</li>
                    <li>Avec les autres (honorer la diversité),</li>
                    <li>
                      Avec la vie (accueillir ce qui est et s’ouvrir à ce qui se
                      révèle).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Slider */}
          <div className="col-lg-8 col-md-6">
            <div className="service-slider swiper">
              <div className="swiper-wrapper cs_slider_gap_301">
                <Slider ref={sliderRef} {...settings}>
                  {/* 01 — La recherche de l’essence */}
                  <div className="swiper-slide">
                    <div className="service-single-box bg-theme2">
                      <div className="inner-box">
                        <div className="icon">
                          <i className="bi bi-gem"></i>
                        </div>
                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                        <h4
                          className="title"
                          style={{ color: "var(--theme-color2)" }}
                        >
                          La recherche de l’essence
                        </h4>
                        <p
                          className="text"
                          style={{ color: "var(--gray-color2)" }}
                        >
                          L’Ennéagramme enseigne que nous ne sommes pas
                          réductibles à nos conditionnements.
                        </p>
                        <ul
                          style={{
                            color: "var(--gray-color2)",
                            paddingLeft: 18,
                          }}
                        >
                          <li>
                            Notre ego est une construction, une stratégie de
                            survie.
                          </li>
                          <li>
                            Derrière lui, il y a notre essence : une lumière
                            intérieure, unique et universelle à la fois.
                          </li>
                        </ul>
                        <p
                          style={{
                            color: "var(--theme-color2)",
                            fontWeight: 600,
                            marginTop: 6,
                          }}
                        >
                          Philosophie : apprendre à se libérer des illusions de
                          l’ego pour révéler l’essence.
                        </p>

                        <Link to="#" className="theme-btn service-btn">
                          <i className="bi bi-plus-lg"></i>
                          <span
                            className="link-text"
                            style={{ color: "var(--theme-color2)" }}
                          >
                            Voir Détails
                          </span>
                        </Link>
                        <span
                          className="serial"
                          style={{ color: "var(--light-color2)" }}
                        >
                          01.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 02 — La transformation par la conscience */}
                  <div className="swiper-slide">
                    <div className="service-single-box white bg-theme">
                      <div className="inner-box">
                        <div className="icon">
                          <i className="bi bi-arrow-repeat"></i>
                        </div>
                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                        <h4
                          className="title"
                          style={{ color: "var(--light-color2)" }}
                        >
                          La transformation par la conscience
                        </h4>
                        <p
                          className="text"
                          style={{ color: "var(--light-color2)" }}
                        >
                          Chaque type porte une passion (émotion dominante), une
                          fixation (schéma mental) et une compulsion
                          (évitement).
                        </p>
                        <p
                          className="text"
                          style={{ color: "var(--light-color2)" }}
                        >
                          Ces mécanismes nous enferment, mais ils sont aussi des
                          portes de transformation.
                        </p>
                        <p
                          style={{
                            color: "var(--light-color2)",
                            fontWeight: 600,
                            marginTop: 6,
                          }}
                        >
                          Philosophie : l’obstacle est le chemin – prendre
                          conscience de nos conditionnements pour les dépasser.
                        </p>

                        <Link to="#" className="theme-btn service-btn">
                          <i className="bi bi-plus-lg"></i>
                          <span
                            className="link-text"
                            style={{ color: "var(--light-color2)" }}
                          >
                            Voir Détails
                          </span>
                        </Link>
                        <span
                          className="serial"
                          style={{ color: "var(--light-color2)" }}
                        >
                          02.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 03 — L’unité dans la diversité */}
                  <div className="swiper-slide">
                    <div className="service-single-box bg-theme2">
                      <div className="inner-box">
                        <div className="icon">
                          <i className="bi bi-people"></i>
                        </div>
                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                        <h4
                          className="title"
                          style={{ color: "var(--theme-color2)" }}
                        >
                          L’unité dans la diversité
                        </h4>
                        <p
                          className="text"
                          style={{ color: "var(--gray-color2)" }}
                        >
                          Il n’y a pas de « bon » ou de « mauvais » type. Chaque
                          ennéatype exprime une partie du puzzle de l’humanité.
                        </p>
                        <ul
                          style={{
                            color: "var(--gray-color2)",
                            paddingLeft: 18,
                          }}
                        >
                          <li>
                            En se reconnaissant dans son type, on apprend à se
                            respecter.
                          </li>
                          <li>
                            En découvrant les autres types, on apprend à aimer
                            la différence.
                          </li>
                        </ul>
                        <p
                          style={{
                            color: "var(--theme-color2)",
                            fontWeight: 600,
                            marginTop: 6,
                          }}
                        >
                          Philosophie : la diversité des personnalités est une
                          richesse et un appel à l’unité.
                        </p>

                        <Link to="#" className="theme-btn service-btn">
                          <i className="bi bi-plus-lg"></i>
                          <span
                            className="link-text"
                            style={{ color: "var(--theme-color2)" }}
                          >
                            Voir Détails
                          </span>
                        </Link>
                        <span
                          className="serial"
                          style={{ color: "var(--light-color2)" }}
                        >
                          03.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 04 — Fi Takhallî – Tajallî */}
                  <div className="swiper-slide">
                    <div className="service-single-box white bg-theme">
                      <div className="inner-box">
                        <div className="icon">
                          <i className="bi bi-stars"></i>
                        </div>
                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                        <h4
                          className="title"
                          style={{ color: "var(--light-color2)" }}
                        >
                          La dynamique de libération : Fi Takhallî – Tajallî
                        </h4>
                        <p
                          className="text"
                          style={{ color: "var(--light-color2)" }}
                        >
                          Comme l’a enseigné Rûmî et la tradition soufie :
                        </p>
                        <ul
                          style={{
                            color: "var(--light-color2)",
                            paddingLeft: 18,
                          }}
                        >
                          <li>
                            Takhallî → se vider, se délester des illusions, des
                            attachements et des automatismes.
                          </li>
                          <li>
                            Tajallî → se révéler, laisser apparaître la lumière
                            intérieure.
                          </li>
                        </ul>
                        <p
                          style={{
                            color: "var(--light-color2)",
                            fontWeight: 600,
                            marginTop: 6,
                          }}
                        >
                          Philosophie : l’Ennéagramme est une pédagogie de
                          dépouillement pour permettre la révélation de l’être.
                        </p>

                        <Link to="#" className="theme-btn service-btn">
                          <i className="bi bi-plus-lg"></i>
                          <span
                            className="link-text"
                            style={{ color: "var(--light-color2)" }}
                          >
                            Voir Détails
                          </span>
                        </Link>
                        <span
                          className="serial"
                          style={{ color: "var(--light-color2)" }}
                        >
                          04.
                        </span>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>

              {/* Bottom controls: white & blue */}
              <div className="slider-bottom-controls">
                <button
                  type="button"
                  className="slider-ctrl slider-ctrl--white"
                  onClick={previous}
                  aria-label="Précédent"
                >
                  <i className="bi bi-arrow-left" />
                  <span>Précédent</span>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Suivant"
                  style={{
                    background: "var(--theme-color)",
                    color: "#fff",
                    border: "2px solid var(--theme-color)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 16px",
                    borderRadius: 9999,
                    fontWeight: 700,
                    letterSpacing: ".2px",
                    boxShadow: "0 6px 18px rgba(0,0,0,.08)",
                    cursor: "pointer",
                    transition:
                      "transform .2s ease, box-shadow .2s ease, filter .2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 24px rgba(0,0,0,.16)";
                    e.currentTarget.style.filter = "brightness(0.95)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow =
                      "0 6px 18px rgba(0,0,0,.08)";
                    e.currentTarget.style.filter = "none";
                  }}
                >
                  <span>Suivant</span>
                  <i className="bi bi-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;

{
  /* <div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="service-contact">
        <div className="social-proof">
          <div className="social">
            <img
              src="/assets/images/service/social-img01.jpg"
              alt="Client 01"
            />
            <img
              src="/assets/images/service/social-img02.jpg"
              alt="Client 02"
            />
          </div>
          <p className="text" style={{ color: "var(--light-color2)" }}>
            Ensemble, transformons vos défis en opportunités de croissance.
          </p>
        </div>
        <div className="contact-btn">
          <Link to="/contact" className="theme-btn">
            <span className="link-effect">
              <span
                className="effect-1"
                style={{ color: "var(--light-color2)" }}
              >
                Contactez-nous dès maintenant
              </span>
              <span
                className="effect-1"
                style={{ color: "var(--light-color1)" }}
              >
                Contactez-nous dès maintenant
              </span>
            </span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
