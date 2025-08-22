import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [sideNav, setSideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`cs_site_header header_style_2 cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link to="/" className="cs_site_branding">
                <img className="cs-logo" src="/assets/images/logo/logo.png" alt="Logo" />
              </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            <div className="cs_main_header_right">
              <div className="header-btn header-right-wrapper">
              <div className="header-right">
                  <a href="tel:+181234567" className="header-btn"><span className="fa-solid fa-headphones"></span>+18 123 4567</a>
                  <div className="sidebar-icon" onClick={() => setSideNav(!sideNav)}>
                      <button className="sidebar-trigger open" >
                          <span className="fa-solid fa-bars"></span>
                      </button>
                  </div>
              </div>                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sidebar-area" className={`sidebar header-sidebar-area ${sideNav ? 'active' : ''}`}>
            <button className="sidebar-close-btn" onClick={() => setSideNav(!sideNav)}>
                <svg className="icon-close" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="12.7px" viewBox="0 0 16 12.7">
                    <g>
                        <rect x="0" y="5.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)" width="16" height="2"></rect>
                        <rect x="0" y="5.4" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)" width="16" height="2"></rect>
                    </g>
                </svg>
            </button>
            <div className="sidebar-content">
                <div className="sidebar-logo">
                    <a className="dark-logo" href="/"><img className="cs-logo" src="/assets/images/logo/logo.png" alt="logo" /></a>
                </div>
                <div className="sidebar-menu-wrap"></div>
                <div className="sidebar-about">
                    <div className="sidebar-header">
                        <h3>About Us</h3>
                    </div>
                    <p>Efficient strategies for optimizing operational workflows are essential for business growth. Our team focuses on providing tailored solutions to enhance productivity and drive innovation.</p>
                    <Link to="/contact" className="theme-btn">
                        <span className="link-effect">
                            <span className="effect-1">Contact Us</span>
                            <span className="effect-1">Contact Us</span>
                        </span>
                    </Link>
                </div>
                <div className="sidebar-contact">
                    <div className="sidebar-header">
                        <h3>Contact Us</h3>
                    </div>
                    <ul className="contact-info">
                        <li>
                        <i className="bi bi-geo-alt-fill"></i>
                            <p>Valentin resides at 24 Street Road in New York</p>
                        </li>
                        <li>
                        <i className="bi bi-telephone-fill"></i>
                            <a href="tel:+181234567">+18 123 4567</a>
                        </li>
                        <li>
                        <i className="bi bi-envelope-fill"></i>
                            <a href="mailto:example@gmail.com">example@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <ul className="sidebar-social">
                    <li className="facebook"><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li className="instagram"><a href="#"><i className="bi bi-twitter"></i></a></li>
                    <li className="twitter"><a href="#"><i className="bi bi-instagram"></i></a></li>
                    <li className="g-plus"><a href="#"><i className="bi bi-linkedin"></i></a></li>
                </ul>
            </div>
        </div>        

    </header>




  );
}
