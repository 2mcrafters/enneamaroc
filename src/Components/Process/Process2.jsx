import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";

const Process2 = () => {
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(!toggle);
  };
  const handleClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  return (
    <section className="process-section style-2 space bg-white">
      <div className="container">
        <div className="row gy-30 align-items-center">
          {/* Vidéo / Illustration */}
          <div className="col-lg-6">
            <div className="process-thumb mr-75 xxl-mr-0">
              <div className="image-box">
                <img
                  className="wow img-custom-anim-left"
                  src="/assets/images/process/home3-img01.jpg"
                  alt="Illustration Ennéagramme"
                />
                <div className="video-box">
                  <div className="circle-box">
                    <a
                      className="popup-video"
                      onClick={handleClick}
                      data-fancybox="video-gallery"
                    >
                      <i className="bi bi-play-fill"></i>
                    </a>
                    <div className="text-inner spin2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="250.5"
                        height="250.5"
                        viewBox="0 0 250.5 250.5"
                      >
                        <path
                          d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                          id="e-path-ennea"
                        ></path>
                        <text>
                          <textPath
                            id="e-text-path-ennea"
                            href="#e-path-ennea"
                            startOffset="0%"
                          >
                            * ENNÉAGRAMME * COACHING * TRANSFORMATION *
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu Process */}
          <div className="col-lg-6">
            <div className="process-right-wrapper">
              <div className="title-area two">
                <div className="sub-title">
                  <span>
                    <i className="asterisk"></i>
                  </span>
                  PARCOURS ENNÉAGRAMME
                </div>
                <h2 className="sec-title">
                  Un chemin <br />
                  <span className="bold">simple et structuré</span> pour mieux
                  se connaître
                </h2>
              </div>

              <div className="process-list">
                <div className="process-item">
                  <div className="number">01.</div>
                  <h3 className="title">Découverte & intentions</h3>
                  <p className="description">
                    Clarifier vos attentes, vos objectifs et poser le cadre de
                    l’accompagnement.
                  </p>
                </div>
                <div className="process-item">
                  <div className="number">02.</div>
                  <h3 className="title">Questionnaire Ennéagramme</h3>
                  <p className="description">
                    Identifier vos motivations profondes et vos dynamiques
                    intérieures.
                  </p>
                </div>
                <div className="process-item">
                  <div className="number">03.</div>
                  <h3 className="title">Débriefing personnalisé</h3>
                  <p className="description">
                    Explorer ensemble votre type, vos sous-types et leviers de
                    croissance.
                  </p>
                </div>
                <div className="process-item">
                  <div className="number">04.</div>
                  <h3 className="title">Plan d’action & suivi</h3>
                  <p className="description">
                    Mettre en place des actions concrètes pour transformer vos
                    relations et votre développement personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Vidéo */}
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handleClose}
      />
    </section>
  );
};

export default Process2;
