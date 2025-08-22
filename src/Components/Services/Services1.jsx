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
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 766,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };   

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      };  
  
    return (
      <section className="service-section overflow-hidden">
        <div className="p-top-left wow slideInLeft">
          <img src="/assets/images/service/shape01.png" alt="Service shape" />
        </div>
        <div className="container space">
          <div className="row align-items-center gy-30">
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
                    Nos Services
                  </div>
                  <div className="title-wrap">
                    <h2
                      className="sec-title"
                      style={{ color: "var(--light-color2)" }}
                    >
                      Offrir les meilleures <br />
                      <span className="bold">
                        <span style={{ color: "var( --light-color2)" }}>
                          solutions
                        </span>{" "}
                        de coaching
                      </span>{" "}
                      <br />
                      et d’Ennéagramme
                    </h2>
                    <p
                      className="sec-text"
                      style={{ color: "var(--light-color2)" }}
                    >
                      Nous accompagnons particuliers et entreprises à développer
                      leur potentiel, renforcer leurs relations et libérer leurs
                      talents.
                    </p>
                  </div>
                </div>
                <div className="service-btn-wrapper">
                  <div className="array-button">
                    <button onClick={previous} className="array-prev">
                      <i className="bi bi-arrow-left"></i>
                    </button>
                    <button onClick={next} className="array-next active">
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                  <div className="service-btn">
                    <Link to="/service" style={{ color: "var(--gray-color2)" }}>
                      TOUS LES SERVICES +
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-6">
              <div className="service-slider swiper">
                <div className="swiper-wrapper cs_slider_gap_301">
                  <Slider ref={sliderRef} {...settings}>
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
                            Coaching Individuel
                          </h4>
                          <p
                            className="text"
                            style={{ color: "var(--gray-color2)" }}
                          >
                            Un accompagnement personnalisé pour mieux vous
                            connaître, surmonter vos blocages et atteindre vos
                            objectifs.
                          </p>
                          <Link
                            to="/service/service-details"
                            className="theme-btn service-btn"
                          >
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

                    <div className="swiper-slide">
                      <div className="service-single-box white bg-theme">
                        <div className="inner-box">
                          <div className="icon">
                            <i className="bi bi-diagram-3"></i>
                          </div>
                          <div className="border mt-50 xs-mt-40 mb-30"></div>
                          <h4
                            className="title"
                            style={{ color: "var(--light-color2)" }}
                          >
                            Formations Ennéagramme
                          </h4>
                          <p
                            className="text"
                            style={{ color: "var(--light-color2)" }}
                          >
                            Découvrez les 9 profils de personnalité et apprenez
                            à développer vos compétences relationnelles et
                            émotionnelles.
                          </p>
                          <Link
                            to="/service/service-details"
                            className="theme-btn service-btn"
                          >
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

                    <div className="swiper-slide">
                      <div className="service-single-box bg-theme2">
                        <div className="inner-box">
                          <div className="icon">
                            <i className="bi bi-briefcase"></i>
                          </div>
                          <div className="border mt-50 xs-mt-40 mb-30"></div>
                          <h4
                            className="title"
                            style={{ color: "var(--theme-color2)" }}
                          >
                            Coaching en Entreprise
                          </h4>
                          <p
                            className="text"
                            style={{ color: "var(--gray-color2)" }}
                          >
                            Développez le leadership, améliorez la cohésion
                            d’équipe et créez un climat de confiance durable.
                          </p>
                          <Link
                            to="/service/service-details"
                            className="theme-btn service-btn"
                          >
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

                    <div className="swiper-slide">
                      <div className="service-single-box white bg-theme">
                        <div className="inner-box">
                          <div className="icon">
                            <i className="bi bi-heart"></i>
                          </div>
                          <div className="border mt-50 xs-mt-40 mb-30"></div>
                          <h4
                            className="title"
                            style={{ color: "var(--light-color2)" }}
                          >
                            Développement Personnel
                          </h4>
                          <p
                            className="text"
                            style={{ color: "var(--light-color2)" }}
                          >
                            Explorez vos forces, transformez vos faiblesses et
                            avancez vers une vie plus équilibrée et authentique.
                          </p>
                          <Link
                            to="/service/service-details"
                            className="theme-btn service-btn"
                          >
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
              </div>
            </div>
          </div>
        </div>

        <div className="container">
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
                    Ensemble, transformons vos défis en opportunités de
                    croissance.
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
        </div>
      </section>
    );
};

export default Services1;