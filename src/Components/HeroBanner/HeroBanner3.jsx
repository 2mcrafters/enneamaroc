import { Link } from "react-router-dom";

const HeroBanner3 = () => {
  return (
    <section className="hero-section style-3">
      <div className="outer-box">
        <div className="content-area bg-theme3">
          <div
            className="p-top-left wow slideInLeft"
            data-wow-delay="500ms"
            data-wow-duration="1000ms"
          ></div>

          <div className="container">
            <div className="row align-items-center">
              {/* Contenu texte */}
              <div className="col-lg-6">
                <div className="hero-content md-mb-50">
                  <span className="sub-title">
                    <i className="icon-small-hand"></i> Développez votre
                    potentiel
                  </span>
                  <h1 className="title">
                    Ennéagramme <br /> pour une transformation durable
                  </h1>
                  <div className="pt-30 pb-30">
                    <div className="border"></div>
                  </div>
                  <p className="text" style={{ color: "var(--body-them)" }}>
                    Découvrez comment l’Ennéagramme et le coaching peuvent vous
                    aider à mieux vous connaître, renforcer vos relations et
                    atteindre vos objectifs personnels et professionnels.
                  </p>
                  <div className="hero-btn d-flex gap-15 align-items-center">
                    <Link to="/contact" className="theme-btn bg-dark">
                      <span className="link-effect">
                        <span className="effect-1">
                          Réservez une consultation gratuite
                        </span>
                        <span className="effect-1">
                          Réservez une consultation gratuite
                        </span>
                      </span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                    <a href="tel:+212661246647" className="contact-info">
                      <div className="icon">
                        <i className="icon-phone-circle-small"></i>
                      </div>
                      <div className="number">+212 661 24 66 47</div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Côté visuel */}
              <div className="col-lg-6">
                <div className="hero-right">
                  <div className="image-box">
                    <div className="image-group">
                      <div className="image1">
                        <img
                          className="img br-10"
                          data-tilt
                          src="/assets/images/banner/hero3-img-1.jpg"
                          alt="Atelier de coaching"
                        />
                      </div>
                      <div className="image2">
                        <div className="inner-box">
                          <img
                            className="img"
                            src="/assets/images/banner/home3-img-2.png"
                            alt="Participant"
                          />
                          <div className="ellipse-path"></div>
                          <div className="downloads-card">
                            <h5 className="download">Participants</h5>
                            <span className="count-box">
                              <span
                                className="count"
                                style={{ color: "var(--theme-color3)" }}
                              >
                                <span
                                  className="count-text"
                                  data-speed="2000"
                                  data-stop="500"
                                  style={{ color: "var(--theme-color3)" }}
                                >
                                  500
                                </span>
                                +
                              </span>
                              <span className="icon">
                                <i className="icon-recycle-arrow"></i>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="info-box jump3">
                      <img
                        className="img"
                        src="/assets/images/banner/marketer.jpg"
                        alt="Coach"
                      />
                      <div className="info">
                        <h4 className="name">Enneagram Maroc</h4>
                        <p className="position">Coaching & Formation</p>
                      </div>
                    </div>
                  </div>
                  <div className="agency-info">
                    <span className="icon">
                      <i className="bi bi-send-fill"></i>
                    </span>
                    <p>
                      Coaching <br /> & Ennéagramme
                    </p>
                  </div>
                  <div className="dot-shape jump">
                    <img
                      src="/assets/images/banner/home3-dot-shape.png"
                      alt=""
                    />
                  </div>
                  <div className="circle-path_shape"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner3;
