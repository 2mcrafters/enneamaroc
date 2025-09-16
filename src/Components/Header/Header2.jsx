import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { CSS_CLASSES, APP_CONFIG } from "../../utils/constants";

const Header2 = ({ variant = "" }) => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState("");
  const scrollPosRef = useRef(0);
  const [sideNav, setSideNav] = useState(false);

  // Memoized scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    const prev = scrollPosRef.current;

    if (currentScrollPos > prev) {
      // Scrolling down
      setIsSticky(CSS_CLASSES.HEADER.STICKY);
    } else if (currentScrollPos !== 0) {
      // Scrolling up
      setIsSticky(CSS_CLASSES.HEADER.STICKY_SHOW);
    } else {
      setIsSticky("");
    }

    scrollPosRef.current = currentScrollPos;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Memoized toggle handlers
  const toggleMobileMenu = useCallback(() => {
    setMobileToggle((prev) => !prev);
  }, []);

  const toggleSideNav = useCallback(() => {
    setSideNav((prev) => !prev);
  }, []);

  // Computed header class names
  const headerClasses = [
    CSS_CLASSES.HEADER.SITE_HEADER,
    CSS_CLASSES.HEADER.STYLE_1,
    variant,
    CSS_CLASSES.HEADER.STICKY_HEADER,
    CSS_CLASSES.HEADER.FULL_WIDTH,
    mobileToggle ? CSS_CLASSES.HEADER.MOBILE_ACTIVE : "",
    isSticky,
  ]
    .filter(Boolean)
    .join(" ");

  const mobileToggleClass = mobileToggle
    ? CSS_CLASSES.HEADER.MOBILE_TOGGLE_ACTIVE
    : CSS_CLASSES.HEADER.MOBILE_TOGGLE;

  return (
    <div className="header-area2 header_nav_03">
      <header className={headerClasses}>
        <div className="cs_top_header">
          <div className="container-fluid">
            <div className="cs_top_header_in header-style2">
              <div className="cs_top_header_left header-info">
                <ul className="list-style-1">
                  <li>
                    <i className="icon icon-bentol"></i>
                    Découvrez votre ennéagramme et développez votre potentiel
                    personnel.
                  </li>
                  <li>
                    <a href={`mailto:${APP_CONFIG.CONTACT.EMAIL}`}>
                      <i className="bi bi-envelope-fill icon"></i>
                      {APP_CONFIG.CONTACT.EMAIL}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${APP_CONFIG.CONTACT.PHONE_PRIMARY}`}>
                      <i className="bi bi-telephone-fill icon"></i>
                      {APP_CONFIG.CONTACT.PHONE_PRIMARY}
                    </a>
                    &nbsp;|&nbsp;
                    <a href={`tel:${APP_CONFIG.CONTACT.PHONE_SECONDARY}`}>
                      {APP_CONFIG.CONTACT.PHONE_SECONDARY}
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill icon"></i>
                    {APP_CONFIG.CONTACT.LOCATION}
                  </li>
                </ul>
              </div>

              <div className="cs_top_header_right">
                <div className="cs_header_social_links_wrap">
                  <div className="cs_header_social_links top-header-social-icon">
                    <ul className="social-icon-one">
                      <li>
                        <span className="menu-follow_title">Suivez-nous :</span>
                      </li>
                      <li>
                        <a
                          href={APP_CONFIG.SOCIAL_LINKS.FACEBOOK}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={APP_CONFIG.SOCIAL_LINKS.TWITTER}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                        >
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={APP_CONFIG.SOCIAL_LINKS.LINKEDIN}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={APP_CONFIG.SOCIAL_LINKS.INSTAGRAM}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs_main_header cs_accent_bg">
          <div className="container-fluid">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img
                    className="cs-logo"
                    src="/assets/images/logo/ennea logo white.png"
                    alt="Logo"
                  />
                </Link>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={mobileToggleClass}
                    onClick={toggleMobileMenu}
                    role="button"
                    tabIndex={0}
                    aria-label="Toggle mobile menu"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleMobileMenu();
                      }
                    }}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="solutek-btn2 header-2-btn header-right-wrapper">
                  <div className="header-right">
                    <a href="tel:+212600000000" className="header-btn">
                      <span className="fa-solid fa-headphones"></span>+212 600
                      000 000
                    </a>
                    <div
                      className="sidebar-icon"
                      onClick={toggleSideNav}
                      role="button"
                      tabIndex={0}
                      aria-label="Toggle sidebar"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleSideNav();
                        }
                      }}
                    >
                      <button
                        className="sidebar-trigger open"
                        aria-label="Open sidebar"
                      >
                        <span className="fa-solid fa-bars"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="cs_site_header_spacing_140"></div>

      <div
        id="sidebar-area"
        className={`sidebar header-sidebar-area ${sideNav ? "active" : ""}`}
      >
        <button
          className="sidebar-close-btn"
          onClick={toggleSideNav}
          aria-label="Close sidebar"
        >
          <svg
            className="icon-close"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="16px"
            height="12.7px"
            viewBox="0 0 16 12.7"
          >
            <g>
              <rect
                x="0"
                y="5.4"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)"
                width="16"
                height="2"
              ></rect>
              <rect
                x="0"
                y="5.4"
                transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)"
                width="16"
                height="2"
              ></rect>
            </g>
          </svg>
        </button>
        <div className="sidebar-content">
          <div className="sidebar-logo">
            <a className="dark-logo" href="/">
              <img
                className="cs-logo"
                src="/assets/images/logo/enneamaroc-logo.png"
                alt="Ennéagramme Maroc logo"
              />
            </a>
          </div>

          <div className="sidebar-menu-wrap"></div>

          <div className="sidebar-about">
            <div className="sidebar-header">
              <h3>À propos de nous</h3>
            </div>
            <p>
              Ennéagramme Maroc est un centre de formation spécialisé dans
              l'ennéagramme. Nous accompagnons les individus dans leur
              développement personnel et professionnel à travers une meilleure
              connaissance de soi et des autres.
            </p>
            <Link to="/contact" className="theme-btn">
              <span className="link-effect">
                <span className="effect-1">Contactez-nous</span>
                <span className="effect-1">Contactez-nous</span>
              </span>
            </Link>
          </div>

          <div className="sidebar-contact">
            <div className="sidebar-header">
              <h3>Contact</h3>
            </div>
            <ul className="contact-info">
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <p>Maroc</p>
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i>
                <a href="tel:+212662062032">+212 662 06 20 32</a> |{" "}
                <a href="tel:+212661246647">+212 661 24 66 47</a>
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                <a href="mailto:contact@enneamaroc.com">
                  contact@enneamaroc.com
                </a>
              </li>
            </ul>
          </div>

          <ul className="sidebar-social">
            <li className="facebook">
              <a
                href="https://www.facebook.com/enneamaroc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="twitter">
              <a
                href="https://twitter.com/enneamaroc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="instagram">
              <a
                href="https://www.instagram.com/ennea_maroc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="linkedin">
              <a
                href="https://www.linkedin.com/company/ennea-maroc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header2;
