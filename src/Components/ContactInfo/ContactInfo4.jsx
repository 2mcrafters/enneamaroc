import { Link } from "react-router-dom";

const ContactInfo4 = () => {
  return (
    <section className="cta-section space-bottom bg-theme3">
      <div className="container border-top space-top">
        <div className="row gy-30 align-items-center">
          {/* Texte */}
          <div className="col-lg-6">
            <div className="cta-content-wrapper">
              <div className="title-area two">
                <h2 className="sec-title">
                  Avançons <span className="bold">ensemble</span> sur votre
                  chemin de transformation
                </h2>
                <p className="sec-text" style={{ color: "black" }}>
                  L’Ennéagramme et le coaching ouvrent de nouvelles perspectives
                  pour mieux se comprendre, renforcer ses relations et libérer
                  son potentiel. Rejoignez-nous pour écrire le prochain chapitre
                  de votre évolution.
                </p>
              </div>
              <Link to="/contact" className="theme-btn bg-dark">
                <span className="link-effect">
                  <span className="effect-1">Contactez-nous</span>
                  <span className="effect-1">Contactez-nous</span>
                </span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Image / illustration */}
          <div className="col-lg-6">
            <div className="image-grid">
              <div className="lines">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i}></span>
                ))}
              </div>
              <div className="lines2">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span key={i}></span>
                ))}
              </div>
              <div className="image-box">
                <div className="image-item">
                  <img
                    src="/assets/images/cta/img01.jpg"
                    alt="Participant atelier"
                  />
                </div>
                <div className="image-item">
                  <div className="icon">
                    <i className="icon-handshake"></i>
                  </div>
                </div>
                <div className="image-item">
                  <img
                    src="/assets/images/cta/img02.jpg"
                    alt="Séance de coaching"
                  />
                </div>
                <div className="image-item">
                  <img
                    src="/assets/images/cta/img03.jpg"
                    alt="Partage et apprentissage"
                  />
                </div>
                <div className="image-item">
                  <img
                    src="/assets/images/cta/img04.jpg"
                    alt="Travail en groupe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo4;
