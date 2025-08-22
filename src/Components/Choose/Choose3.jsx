import { Link } from "react-router-dom";

const Choose3 = () => {
  return (
    <section className="choose-section style-3 space bg-white">
      <div className="container">
        <div className="row gy-30 align-items-center">
          <div className="col-lg-6">
            <div className="choose-content-wrapper">
              <div className="title-area two dark">
                <div className="sub-title">
                  <span>
                    <i className="asterisk"></i>
                  </span>
                  Pourquoi choisir l’Ennéagramme ?
                </div>
                <h2 className="sec-title">
                  Une approche <br />{" "}
                  <span className="bold">puissante et transformative</span> pour
                  mieux se connaître
                </h2>
                <p className="sec-text" style={{ color: "black" }}>
                  L’Ennéagramme et le coaching offrent une meilleure
                  compréhension de soi et des autres.
                </p>
              </div>
              <ul className="features-list">
                <li>Développer une meilleure connaissance de soi</li>
                <li>Améliorer la communication et les relations humaines</li>
                <li>Renforcer le leadership et la cohésion d’équipe</li>
                <li>Favoriser la croissance personnelle et professionnelle</li>
              </ul>
              <Link to="/contact" className="theme-btn bg-theme3 mt-45">
                <span className="link-effect">
                  <span className="effect-1">Contactez-nous</span>
                  <span className="effect-1">Contactez-nous</span>
                </span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-right-wrapper">
              <img
                src="/assets/imgss001/coaching%20(15).jpg"
                alt="Illustration Ennéagramme"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose3;
