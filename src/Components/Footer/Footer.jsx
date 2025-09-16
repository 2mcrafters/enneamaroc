import { Link } from "react-router-dom";

const Footer = () => {
  const logoSrc = "/assets/images/logo/ennea%20logo%20white.png";

  const navLinks = [
    { label: "L’Ennéagramme", path: "/enneagramme" },
    { label: "École", path: "/ecole" },
    { label: "Parcours", path: "/parcours" },
    { label: "Solution", path: "/solution" },
    { label: "Agenda", path: "/agenda" },
    { label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com",
      ariaLabel: "Facebook",
      iconClass: "bi-facebook",
      hoverClass: "hover:bg-blue-600",
    },
    {
      href: "https://x.com",
      ariaLabel: "Twitter / X",
      iconClass: "bi-twitter-x",
      hoverClass: "hover:bg-black",
    },
    {
      href: "https://linkedin.com",
      ariaLabel: "LinkedIn",
      iconClass: "bi-linkedin",
      hoverClass: "hover:bg-blue-700",
    },
    {
      href: "https://instagram.com",
      ariaLabel: "Instagram",
      iconClass: "bi-instagram",
      hoverClass: "hover:bg-pink-600",
    },
    {
      href: "https://youtube.com",
      ariaLabel: "YouTube",
      iconClass: "bi-youtube",
      hoverClass: "hover:bg-red-600",
    },
  ];

  const contact = {
    phone: "+212 000 000 000",
    whatsapp: "+212 600 000 000",
    email: "bonjour@enneagrammaroc.ma",
    address: "Casablanca, Maroc",
    hours: "Lun–Ven · 09h–18h",
  };

  const legalLinks = [
    { label: "Conditions générales", path: "#" },
    { label: "Politique de confidentialité", path: "#" },
    { label: "Mentions légales", path: "#" },
  ];

  return (
    <footer className="bg-[#1c8bce] text-white">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + creative copy */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={logoSrc}
                alt="Enneagram Maroc"
                className="h-12 w-auto"
              />
            </Link>

            <p className="max-w-sm text-white">
              <span className="font-semibold">
                Enneagram Maroc – Chemin vers soi.
              </span>
              <br />
              Respirez. Observez. Choisissez. Chaque jour, un pas de plus vers
              une clarté intérieure.
            </p>

            <p className="mt-4 text-sm text-white">
              Outils, formations et accompagnements pour mieux vous comprendre
              et transformer vos relations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white hover:opacity-90 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white">
              <li className="flex items-center gap-2">
                <i className="bi bi-telephone-fill" aria-hidden="true" />
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="text-white hover:opacity-90 transition"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-whatsapp" aria-hidden="true" />
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:opacity-90 transition"
                >
                  {contact.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-envelope-fill" aria-hidden="true" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white hover:opacity-90 transition"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                <a
                  className="text-white hover:opacity-90 transition"
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    contact.address
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact.address}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-clock-fill" aria-hidden="true" />
                <span>{contact.hours}</span>
              </li>
            </ul>

            <p className="mt-4 text-sm text-white">
              Une question rapide ? Écrivez{" "}
              <span className="font-semibold">“Bonjour”</span> — on vous répond
              dans la journée.
            </p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
              Suivez-nous
            </h3>
            <p className="mt-4 text-sm text-white">
              Conseils courts, ateliers et coulisses — on partage le meilleur du
              jour.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ href, ariaLabel, iconClass, hoverClass }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={ariaLabel}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/80 text-white transition ${hoverClass}`}
                >
                  <i className={`bi ${iconClass}`} />
                </a>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to="/parcours"
                className="inline-block rounded-md px-3 py-2 text-sm font-semibold text-white border border-white hover:bg-white/10 transition"
              >
                Prêt·e à explorer votre type ?
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs text-white">
              © {new Date().getFullYear()} Enneagram Maroc — Fait avec{" "}
              <span aria-hidden>♥</span> au Maroc.
            </span>
            <div className="flex items-center gap-x-5 text-xs">
              {legalLinks.map(({ label, path }) => (
                <a
                  key={label}
                  href={path}
                  className="text-white hover:opacity-90 transition"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
