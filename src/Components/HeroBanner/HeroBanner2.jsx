import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Nwesletter from "../ContactInfo/Nwesletter";
import { Link } from "react-router-dom";

const HeroBanner2 = () => {

    const [iframeSrc, setIframeSrc] = useState('about:blank');
    const [toggle, setToggle] = useState(false);
  
    const handelClick = () => {
      setIframeSrc(
        "https://www.youtube.com/embed/QZA2gnIaMQU"
      );
      setToggle(!toggle);
    };
    const handelClose = () => {
      setIframeSrc('about:blank');
      setToggle(!toggle);
    };

    // Simple local subscribe handler (no external API)
    const handleSubscribe = (e) => {
      e.preventDefault();
      const email = e.target.email?.value || '';
      if (!email) return;
      // lightweight acknowledgement — adjust to your preferred behaviour
      // e.g., send to your backend or use formspree if desired
      alert(`Merci — ${email} (subscription simulated)`);
      e.target.reset();
    };

    return (
      <>
        <section className="hero-section style-2">
          <div className="container-fluid">
            <div className="outer-box">
              <div className="row gy-30" style={{ height: "43em" }}>
                <div className="col-lg-6" style={{ height: "43em" }}>
                  <div className="hero-content" style={{ height: "43em" }}>
                    <div
                      className="p-top-right wow slideInRight"
                      data-wow-delay="500ms"
                      data-wow-duration="1000ms"
                    >
                      <img
                        src="/assets/images/banner/shape02.png"
                        alt="shape"
                      />
                    </div>
                    <a
                      className="popup-video"
                      onClick={handelClick}
                      data-fancybox="video-gallery"
                    >
                      <div className="inner-popup d-flex align-items-center">
                        <span className="icon">
                          <i className="bi bi-play-fill"></i>
                        </span>
                        <p>
                          <strong>Watch</strong>
                          <br />
                          Bentol Story
                        </p>
                      </div>
                    </a>
                    <VideoModal
                      isTrue={toggle}
                      iframeSrc={iframeSrc}
                      handelClose={handelClose}
                    />
                    <h1 className="title">
                      Digital{" "}
                      <span className="orange-dot">
                        <i className="asterisk"></i>
                      </span>{" "}
                      Solution <br /> Finance Consulting
                    </h1>
                    <div className="pt-25 pb-30">
                      <div className="border"></div>
                    </div>
                    <p className="text">
                      Collaboratively disintermediate move to impacter <br />{" "}
                      compellingly web architectures
                    </p>
                    <Link to="/team" className="theme-btn bg-theme">
                      <span className="link-effect">
                        <span className="effect-1">Free Consultation</span>
                        <span className="effect-1">Free Consultation</span>
                      </span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                    <div className="since">
                      <span>Since - 2006</span>
                    </div>
                  </div>
                </div>

                <div className="circle-box xs-d-none">
                  <div className="logo-box">
                    <img src="/assets/images/shapes/star2.png" alt="" />
                  </div>
                  <div className="text-inner spin2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="250.5"
                      height="250.5"
                      viewBox="0 0 250.5 250.5"
                    >
                      <path
                        d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                        id="e-path-35ee1b2"
                      ></path>
                      <text>
                        <textPath
                          id="e-text-path-35ee1b2"
                          href="#e-path-35ee1b2"
                          startOffset="0%"
                        >
                          * COACHING * DEVELOPMENTS * direction * enneagram
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>

                <div className="col-lg-6" style={{ height: "43em" }}>
                  <div className="hero-img br-10">
                    <img
                      src="/assets/imgss001/coaching (5).jpg"
                      alt="Consulting Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* removed: container.space hero-info section per request */}
          {/* centered subscribe form on blue background */}

          <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}
          ></VideoModal>
        </section>

        {/* <Nwesletter addclass="newsletter-after-hero" /> */}
      </>
    );
};

export default HeroBanner2;