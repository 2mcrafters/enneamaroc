import { Link } from "react-router-dom";

const Choose1 = () => {
  return (
    <section className="choose-section space bg-theme3 overflow-hidden">
      <div className="p-top-right wow slideInRight">
        <img src="/assets/images/choose/shape01.png" alt="Choose shape" />
      </div>
      <div className="container">
        <div className="row">
          {/* Image + boîte "Depuis" */}
          <div className="col-lg-6 position-relative">
            <div className="choose-thumb">
              <img
                src="/assets/images/choose/choose01.jpg"
                alt="Choose Thumb"
              />
            </div>
            {/* <div className="since-box">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon">
                    <i className="bi bi-compass"></i>
                  </span>
                </div>
                <h5 className="since" style={{ color: "var(--theme-color1)" }}>
                  DEPUIS 2007
                </h5>
                <div className="text" style={{ color: "var(--dark-color2)" }}>
                  Plus de 15 ans d’accompagnement en coaching et développement
                  humain
                </div>
              </div>
            </div> */}
          </div>

          {/* Contenu texte */}
          <div className="col-lg-6">
            <div className="choose-content-wrapper">
              <div className="title-area two">
                <div
                  className="sub-title"
                  style={{ color: "var(--gray-color2)" }}
                >
                  <span>
                    <i className="asterisk"></i>
                  </span>
                  Pourquoi Enneamaroc
                </div>
                <h2
                  className="sec-title"
                  style={{ color: "var(--theme-color2)" }}
                >
                  Nous créons des solutions <br />
                  <span className="bold">humaines et innovantes</span>
                </h2>
                <p
                  className="sec-text "
                  style={{ color: "var(--theme-color2)" }}
                >
                  Grâce à l’Ennéagramme et au coaching, nous aidons individus et
                  organisations à libérer leur potentiel, renforcer leurs
                  relations et évoluer de manière durable.
                </p>
              </div>

              {/* Liste des atouts */}
              <div className="feature-grid">
                <div className="feature-item">
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                  <p style={{ color: "var(--body-color)" }}>
                    Une équipe d’experts passionnés
                  </p>
                </div>
                <div className="feature-item">
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                  <p style={{ color: "var(--body-color)" }}>
                    Des outils puissants pour votre évolution
                  </p>
                </div>
              </div>

              <div className="py-25">
                <div className="border"></div>
              </div>

              <div className="feature-grid">
                <div className="feature-item">
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                  <p style={{ color: "var(--body-color)" }}>
                    Stratégies innovantes de coaching
                  </p>
                </div>
                <div className="feature-item">
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                  <p style={{ color: "var(--body-color)" }}>
                    Un accompagnement centré sur l’humain
                  </p>
                </div>
              </div>

              {/* Bouton */}
              <Link to="/contact" className="theme-btn bg-dark mt-35">
                <span className="link-effect">
                  <span className="effect-1">Rencontrez notre équipe</span>
                  <span className="effect-1">Rencontrez notre équipe</span>
                </span>
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose1;
