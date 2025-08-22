import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section bg-dark">
      <div className="footer-top space">
        <div className="container">
          <div className="row">
            {/* Logo + présentation */}
            <div className="col-lg-4 col-md-4 col-sm-6 footer-brand">
              <div className="brand-header">
                <a href="/" className="footer-logo d-block mb-20">
                  <img
                    className="cs-logo"
                    src="/assets/images/logo/logo-2.png"
                    alt="Logo Enneagram Maroc"
                  />
                </a>
                <p className="text">
                  Enneagram Maroc accompagne particuliers et entreprises dans
                  leur développement personnel et professionnel grâce à
                  l’Ennéagramme et au coaching transformationnel.
                </p>
              </div>
              <div className="footer-social">
                <a href="https://www.facebook.com/" className="social-link">
                  FB.
                </a>
                <a href="https://x.com/" className="social-link">
                  TW.
                </a>
                <a href="https://www.linkedin.com/" className="social-link">
                  LN.
                </a>
                <a href="https://www.instagram.com/" className="social-link">
                  IG
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="col-lg-4 col-md-4">
              <div className="row">
                <div className="col-lg-6 col-md-6 p-0 sm-pl-15">
                  <div className="footer-widget">
                    <h4 className="title">Navigation</h4>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/about">Qui sommes-nous</Link>
                      </li>
                      <li>
                        <Link to="/service">Nos Services</Link>
                      </li>
                      <li>
                        <Link to="/team">Notre Équipe</Link>
                      </li>
                      <li>
                        <Link to="/blog">Actualités & Articles</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 p-0 sm-pl-15">
                  <div className="footer-widget">
                    <h4 className="title">Nos Services</h4>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/service/service-details">
                          Coaching Individuel
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/service-details">
                          Formation Ennéagramme
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/service-details">
                          Coaching d’Équipe
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/service-details">
                          Développement Personnel
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/service-details">
                          Ateliers & Séminaires
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-1 md-d-none"></div>
            <div className="col-lg-3 col-md-4">
              <div className="footer-widget ml-0 mb-0">
                <h4 className="title">Newsletter</h4>
                <p className="text">
                  Recevez nos dernières actualités et conseils sur l’Ennéagramme
                  et le coaching.
                </p>
                <form
                  className="newsletter-form"
                  action="https://formspree.io/f/mzbnjrnb"
                  method="post"
                >
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="email"
                      placeholder="Votre adresse e-mail"
                      autoComplete="on"
                    />
                    <button type="submit">
                      <i className="bi bi-send"></i>
                    </button>
                  </div>
                </form>
                <div className="notify">
                  <div className="icon">
                    <i className="bi bi-bell"></i>
                  </div>
                  Inscrivez-vous pour être informé(e) de nos mises à jour.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">
                &copy;2024 - Tous droits réservés | Enneagram Maroc
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="footer-policy">
                <a href="#">Conditions générales</a>
                <a href="#">Politique de confidentialité</a>
                <a href="#">Mentions légales</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
