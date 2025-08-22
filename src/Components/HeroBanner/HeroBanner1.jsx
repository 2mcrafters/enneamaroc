import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";

const HeroBanner1 = ({
  videotext = "<strong>Regarder</strong><br>Histoire de Bentol",
  title = "Libérez votre potentiel avec l’Ennéagramme",
  btnname = "Contactez-nous",
  btnurl = "/contact",
  mainimg = "/assets/imgss001/Layer 01.png",
  Clientnumber = "5k",
  Client = "Nous conseillons des clients dans le monde entier",
  customers = "Clients satisfaits",
  rating = "4.8",
  review = "(120K avis)",
}) => {
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  return (
    <div>
      <section className="hero-section overflow-hidden">
        <div
          className="p-top-left wow slideInLeft"
          data-wow-delay="500ms"
          data-wow-duration="1000ms"
        >
          <img src="/assets/images/banner/shape01.png" alt="shape" />
        </div>{" "}
        <div
          className="shape-mockup spin2 d-none d-xxl-block hero-shape-mockup1"
          data-top="23%"
          data-left="48%"
        >
          <img src="/assets/images/shapes/star.png" alt="shape" />
        </div>
        <div className="hero-scroll smooth">
          <a href="#about-section" id="scrollLink">
            <div className="scroll-me">Faites défiler</div>
            <div className="hero-social_arrow">
              <img src="/assets/images/icons/arrow-down-long.png" alt="" />
            </div>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <a
                  className="popup-video"
                  onClick={handelClick}
                  data-fancybox="video-gallery"
                >
                  <div className="inner-popup d-flex align-items-center">
                    <span className="icon">
                      <i className="bi bi-play-fill"></i>
                    </span>
                    <p>{parse(videotext)}</p>
                  </div>
                </a>
                <h1 className="title">{parse(title)}</h1>
                <Link to={btnurl} className="theme-btn">
                  <span className="link-effect">
                    <span className="effect-1">{btnname}</span>
                    <span className="effect-1">{btnname}</span>
                  </span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img p-top-right">
          <img src={mainimg} alt="hero" />
        </div>
        <div className="hero-info-wrapper">
          <div className="client-count-box">
            <div className="count-box">
              <div className="inner-count">
                <span>{Clientnumber}</span>
              </div>
            </div>
            <div className="text">{Client}</div>
            <a href="#!">
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
          <div className="review-block">
            <div className="hero-social-proof">
              <div className="social">
                <img
                  src="/assets/images/social/social-img01.jpg"
                  alt="Client 01"
                />
                <img
                  src="/assets/images/social/social-img02.jpg"
                  alt="Client 02"
                />
                <img
                  src="/assets/images/social/social-img03.jpg"
                  alt="Client 03"
                />
              </div>
              <div className="happy-customers">
                <div className="text">{customers}</div>
                <div className="rating-viewers">
                  <i className="bi bi-star-fill"></i>
                  <span className="rating"> {rating}</span>
                  <span className="count">{review}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      ></VideoModal>
    </div>
  );
};

export default HeroBanner1;