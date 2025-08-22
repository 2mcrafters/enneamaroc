const ContactInfo3 = () => {
  return (
    <div>
      <section className="contact-section style-2 space bg-theme3">
        <div className="container">
          <div className="row gy-30">
            {/* Bloc infos */}
            <div className="col-lg-5">
              <div className="contact-content-wrap">
                <div className="title-area twoT">
                  <div className="sub-title">
                    <span>
                      <i className="asterisk"></i>
                    </span>
                    CONTACT
                  </div>
                  <h2 className="sec-title">
                    Contactez l’équipe <br />{" "}
                    <span className="bold">Enneagram Maroc</span>
                  </h2>
                  <p className="sec-text text-gray">
                    Une question sur nos formations, le coaching ou
                    l’ennéagramme ? Écrivez-nous, on vous répond rapidement.
                  </p>
                </div>

                <div className="contact-info">
                  <div className="contact-item">
                    <div className="icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="info">
                      <h4 className="title">Adresse</h4>
                      <p>
                        Enneagram Maroc (Horizon RH) <br />
                        Casablanca, Maroc
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="icon">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="info">
                      <h4 className="title">Appelez-nous</h4>
                      <div className="content">
                        Coaching :{" "}
                        <a href="tel:+212661246647">+212 661 24 66 47</a>
                        <br />
                        Entreprises :{" "}
                        <a href="tel:+212661246647">+212 661 24 66 47</a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="icon">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="info">
                      <h4 className="title">E-mail</h4>
                      <div className="content">
                        <a href="mailto:contact@enneagrammaroc.ma">
                          contact@enneagrammaroc.ma
                        </a>
                        <br />
                        <a href="mailto:support@enneagrammaroc.ma">
                          support@enneagrammaroc.ma
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <a href="#">
                    <span className="link-effect">
                      <span className="effect-1">Facebook</span>
                      <span className="effect-1">Facebook</span>
                    </span>
                  </a>
                  <a href="#">
                    <span className="link-effect">
                      <span className="effect-1">Twitter/X</span>
                      <span className="effect-1">Twitter/X</span>
                    </span>
                  </a>
                  <a href="#">
                    <span className="link-effect">
                      <span className="effect-1">LinkedIn</span>
                      <span className="effect-1">LinkedIn</span>
                    </span>
                  </a>
                  <a href="#">
                    <span className="link-effect">
                      <span className="effect-1">Instagram</span>
                      <span className="effect-1">Instagram</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="col-lg-7">
              <div className="contact-form">
                <h2 className="title mt--5 mb-35">Envoyez-nous un message</h2>
                <form
                  id="contact_form"
                  className="contact_form"
                  action="https://formspree.io/f/mzbnjrnb"
                  method="post"
                >
                  <div className="form-grid">
                    <div className="form-group">
                      <span className="icon">
                        <i className="bi bi-person-fill"></i>
                      </span>
                      <input
                        type="text"
                        id="fullName"
                        name="name"
                        placeholder="Votre nom complet"
                        required
                        autoComplete="on"
                      />
                    </div>
                    <div className="form-group">
                      <span className="icon">
                        <i className="bi bi-envelope-fill"></i>
                      </span>
                      <input
                        type="email"
                        id="userEmail"
                        name="email"
                        placeholder="Adresse e-mail"
                        required
                        autoComplete="on"
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <span className="icon">
                        <i className="bi bi-telephone-fill"></i>
                      </span>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Téléphone"
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="custom-select"
                        id="service"
                        name="service"
                        autoComplete="off"
                      >
                        <option>Quel service vous intéresse ?</option>
                        <option value="coaching-individuel">
                          Coaching individuel
                        </option>
                        <option value="formation-enneagramme">
                          Formation Ennéagramme
                        </option>
                        <option value="coaching-equipe">
                          Coaching d’équipe
                        </option>
                        <option value="atelier-developpement">
                          Atelier développement personnel
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea
                      id="msg"
                      name="msg"
                      placeholder="Votre message"
                      required
                    ></textarea>
                  </div>

                  <div className="form-group terms">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                      J’accepte les conditions générales.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="theme-btn bg-dark mt-35"
                    data-loading-text="Veuillez patienter..."
                  >
                    <span className="link-effect">
                      <span className="btn-title">Envoyer</span>
                    </span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte */}
      <div className="contact-map">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="map-box">
              <iframe
                className="map-canvas"
                // Remplace l'embed ci-dessous par la carte de ton adresse (Casablanca)
                src="https://www.google.com/maps?q=Casablanca%2C%20Maroc&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo3;
