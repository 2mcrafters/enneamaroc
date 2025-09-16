// src/components/Header1.jsx
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../services/auth";

export default function Header1({ variant }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null); // mobile submenu key
  const [isSticky, setIsSticky] = useState("");
  const prevScrollPosRef = useRef(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ---- NAV ITEMS
  // NOTE: l’ennéagramme uses `hashTo` so it scrolls to #process-section
  const navItems = [
    { label: "l’ennéagramme", hashTo: "process-section" },
    { label: "école", to: "/ecole" },
    {
      label: "parcours",
      children: [
        { label: "transmettre", to: "/transmettre" },
        { label: "approfondir", to: "/approfondir" },
        { label: "découvrir", to: "/découvrir" },
      ],
    },
    { label: "solution", to: "/solution" },
    { label: "agenda", to: "/agenda" },
    { label: "contact", to: "/contact" },
  ];

  // ---- sticky header behavior
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const prev = prevScrollPosRef.current;
      if (y > prev) setIsSticky("cs-gescout_sticky");
      else if (y !== 0) setIsSticky("cs-gescout_show cs-gescout_sticky");
      else setIsSticky("");
      prevScrollPosRef.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---- Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = auth.isAuthenticated();
      setIsLoggedIn(loggedIn);

      if (loggedIn) {
        try {
          const isAdminUser = await auth.isAdmin();
          setIsAdmin(isAdminUser);
        } catch (error) {
          console.error("Erreur lors de la vérification du rôle admin:", error);
        }
      }
    };
    checkAuth();
  }, []);

  // ---- when hash changes anywhere in the app, scroll smoothly
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    // wait for the page to render
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [location.hash]);

  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 991px)").matches;

  const closeMobileAll = () => {
    setMobileOpen(false);
    setOpenSub(null);
  };

  // Navigate or scroll to a hash target
  const goToHash = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header
      className={`cs_site_header header_style_2 cs_style_1 ${
        variant || ""
      } cs_sticky_header cs_site_header_full_width ${
        mobileOpen ? "cs_mobile_toggle_active" : ""
      } ${isSticky}`}
      style={{ position: "relative", zIndex: 60 }}
    >
      {/* ===== Inline CSS ===== */}
      <style>{`
        :root{
          --brand-primary: #1c8bce;
          --link-base:     #0a83ca;
          --header-h:      72px;
        }
        html { scroll-behavior: smooth; } /* general smooth scrolling */
        /* avoid sticky header overlap when jumping to #process-section */
        #process-section { scroll-margin-top: calc(var(--header-h) + 14px); }

        .hdr-in {
          display:grid; grid-template-columns:auto 1fr auto;
          align-items:center; gap:16px;
        }
        .nav-center { display:flex; justify-content:center; text-transform:lowercase; }
        .nav-center .cs_navbar { width:100%; }
        .nav-center .cs_nav_list {
          display:flex; align-items:center; justify-content:center;
          gap:28px; margin:0; padding:0; list-style:none;
        }
        .nav-center .cs_nav_link {
          text-decoration:none; color:var(--link-base); font-weight:600;
        }

        .cs_main_header, .cs_main_header_in, .cs_navbar { overflow:visible; }

        /* ===== Desktop dropdown ===== */
        @media (min-width: 992px){
          .menu-item { position:relative; }
          .menu-item.has-children > .dropdown{
            position:absolute; left:50%; top:100%; transform:translateX(-50%);
            min-width:220px; background:#fff; border-radius:12px;
            padding:12px 8px 8px; border:1px solid rgba(0,0,0,.06);
            box-shadow:0 16px 40px rgba(0,0,0,.14);
            z-index:9999;

            opacity:0; visibility:hidden; translate:0 6px; pointer-events:none;
            transition:opacity .15s ease, translate .15s ease, visibility .15s;
          }
          .menu-item.has-children:hover > .dropdown,
          .menu-item.has-children:focus-within > .dropdown{
            opacity:1; visibility:visible; translate:0 0; pointer-events:auto;
          }
          .dropdown a{
            display:block; padding:10px 12px; border-radius:8px;
            color:var(--link-base); font-weight:700; text-decoration:none;
          }
          .dropdown a:hover{ background:var(--brand-primary); color:#fff; }

          .cs_parent_label { cursor:default; color:var(--link-base); font-weight:600; }
          .submenu-toggle { display:none; } /* caret hidden on desktop */
        }

        /* ===== Mobile nav ===== */
        .cs-munu_toggle{ display:none; cursor:pointer; }
        @media (max-width: 991px){
          .hdr-in{ grid-template-columns:auto auto auto; }

          .cs-munu_toggle{ display:inline-block; margin-left:12px; }
          .nav-center{ justify-content:flex-end; }

          .nav-center .cs_nav_list{
            position:fixed; left:0; right:0; top:var(--header-h, 72px);
            background:#fff; color:var(--link-base);
            flex-direction:column; gap:6px; padding:14px 16px;
            box-shadow:0 14px 28px rgba(0,0,0,.12);
            max-height:0; overflow:hidden; transition:max-height .25s ease;
            z-index:999; text-align:center;
          }
          .nav-center .cs_nav_list.is-open{ max-height:85vh; }
          .nav-center .cs_nav_link{ color:var(--link-base); display:inline-flex; align-items:center; gap:8px; }

          .menu-item.has-children .dropdown{
            position:static; transform:none; min-width:unset; width:100%;
            background:#fff; border-radius:8px; border:1px solid rgba(0,0,0,.06);
            padding:4px 6px; max-height:0; overflow:hidden; transition:max-height .25s ease;
          }
          .menu-item.has-children.open .dropdown{ max-height:320px; }
          .dropdown a{ color:var(--link-base); padding:10px 10px; border-radius:6px; }
          .dropdown a:hover{ background:#eaf6fd; color:var(--link-base); }

          .cs_parent_label{ cursor:pointer; color:var(--link-base); font-weight:600; }
          .submenu-toggle{
            display:inline-flex; align-items:center; justify-content:center;
            width:28px; height:28px; margin-left:6px; border-radius:6px;
            border:1px solid #d7e7f4; color:var(--link-base); background:#fff;
          }
          .submenu-toggle svg{ transition: transform .2s ease; }
          .menu-item.has-children.open .submenu-toggle svg{ transform: rotate(180deg); }
        }

        /* ===== Sidebar (if you add one later) ===== */
        .sidebar.header-sidebar-area{ display:none; }
      `}</style>

      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in hdr-in">
            {/* Left: Brand */}
            <div className="cs_main_header_left">
              <Link
                to="/"
                className="cs_site_branding"
                onClick={closeMobileAll}
              >
                <img
                  className="cs-logo"
                  src="/assets/images/logo/logo.png"
                  alt="Enneagram Maroc Logo"
                />
              </Link>
            </div>

            {/* Center: Nav */}
            <div className="cs_main_header_center nav-center">
              <div className="cs_nav cs_primary_font fw-medium">
                {/* mobile toggler */}
                <span
                  className={
                    mobileOpen
                      ? "cs-munu_toggle cs_teggle_active"
                      : "cs-munu_toggle"
                  }
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label="Toggle menu"
                  role="button"
                >
                  <span></span>
                </span>

                <nav className="cs_navbar" role="navigation" aria-label="Main">
                  <ul className={`cs_nav_list ${mobileOpen ? "is-open" : ""}`}>
                    {navItems.map((item) => {
                      const hasChildren = !!item.children?.length;
                      const opened = openSub === item.label;

                      return (
                        <li
                          key={item.label}
                          className={`menu-item ${
                            hasChildren ? "has-children" : ""
                          } ${opened ? "open" : ""}`}
                        >
                          {/* 1) HASH items (l’ennéagramme) */}
                          {!hasChildren && item.hashTo && (
                            <a
                              href={`/#${item.hashTo}`}
                              className="cs_nav_link"
                              onClick={(e) => {
                                e.preventDefault();
                                closeMobileAll();
                                goToHash(item.hashTo);
                              }}
                            >
                              {item.label}
                            </a>
                          )}

                          {/* 2) Normal links */}
                          {!hasChildren && item.to && !item.hashTo && (
                            <Link
                              to={item.to}
                              className="cs_nav_link"
                              onClick={closeMobileAll}
                            >
                              {item.label}
                            </Link>
                          )}

                          {/* 3) Parent with dropdown (parcours not clickable) */}
                          {hasChildren && (
                            <>
                              <span
                                className="cs_nav_link cs_parent_label"
                                tabIndex={0}
                                aria-haspopup="true"
                                aria-expanded={opened}
                                onClick={() => {
                                  if (isMobile())
                                    setOpenSub(opened ? null : item.label);
                                }}
                                onKeyDown={(e) => {
                                  if (
                                    isMobile() &&
                                    (e.key === "Enter" || e.key === " ")
                                  ) {
                                    e.preventDefault();
                                    setOpenSub(opened ? null : item.label);
                                  }
                                }}
                              >
                                {item.label}
                              </span>

                              <button
                                type="button"
                                className="submenu-toggle"
                                aria-label={`Ouvrir le sous-menu ${item.label}`}
                                aria-expanded={opened}
                                onClick={() =>
                                  setOpenSub(opened ? null : item.label)
                                }
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M7 10l5 5 5-5" />
                                </svg>
                              </button>

                              <div className="dropdown" role="menu">
                                {item.children.map((sub) => (
                                  <Link
                                    key={sub.to}
                                    to={sub.to}
                                    className="cs_nav_link"
                                    onClick={closeMobileAll}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Right: Profile Icon (conditional route) */}
            <div className="cs_main_header_right">
              <div className="header-btn header-right-wrapper">
                <div className="header-right">
                  <div className="profile-icon">
                    <Link
                      to={isLoggedIn ? "/profile" : "/seconnecter"}
                      aria-label={isLoggedIn ? "Profile" : "Se connecter"}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "#1c8bce",
                        color: "#fff",
                        border: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                      }}
                      onClick={closeMobileAll}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </Link>
                  </div>
                  {/* If you ever need admin-only quick link: */}
                  {/* {isAdmin && <Link to="/admin" className="admin-link">Admin</Link>} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
