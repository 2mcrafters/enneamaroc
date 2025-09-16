import { Link } from "react-router-dom";
import blogData from "../../Data/blogData.json";

// Normalize links like "blog-details" -> "/blog/blog-details"
const toPath = (s) => {
  if (!s) return "/blog/blog-details";
  if (s.startsWith("http")) return s; // (optional) external
  if (s.startsWith("/")) return s;
  if (s.startsWith("")) return `/${s}`;
  return `/blog/${s}`;
};

// Inline button styles (center text, arrow on the right)
const btnBase = {
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr", // left spacer | centered text | right icon
  alignItems: "center",
  width: "100%",
  padding: "10px 14px",
  textAlign: "center",
  marginTop: "16px",
  backgroundColor: "#0a83ca", // blue
  color: "#fff",
  borderRadius: "15px",
  textDecoration: "none",
  fontWeight: 600,
  transition: "background-color .2s ease",
};

const cardShadow = "0 6px 24px rgba(0,0,0,.08), 0 2px 8px rgba(0,0,0,.06)";

const BlogCard = ({ blog }) => (
  <article
    className="blog-single-box"
    style={{
      background: "#fff",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: cardShadow, // shadow
    }}
  >
    <div
      className="inner-box"
      style={{ position: "relative", cursor: "pointer" }}
    >
      {/* Full-card clickable overlay (unchanged) */}
      <Link
        to={toPath(blog.link)}
        aria-label={`Voir l’article: ${blog.title}`}
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      />

      {/* Image + category */}
      <div className="blog-image">
        <img src={blog.img} alt={blog.title || "Blog Image"} />
        <div className="category-tag">{blog.category}</div>
      </div>

      {/* Content */}
      <div className="blog-content" style={{ position: "relative", zIndex: 2 }}>
        {/* Title */}
        <h4 className="title" style={{ margin: 0 }}>
          {blog.title}
        </h4>

        {/* Divider */}
        <div className="pt-2 pb-2" style={{ margin: 0 }}>
          <div
            className="border dark"
            style={{ height: 1, background: "rgba(0,0,0,.08)", margin: 0 }}
          />
        </div>

        {/* Text just under the line, no extra spacing */}
        <p style={{ color: "gray", margin: 0 }} className="title mb-10">
          {blog.para}
        </p>

        {/* Button (blue -> red on hover), centered text + arrow on right */}
        <Link
          to={toPath(blog.link)}
          style={btnBase}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#dc3545")
          } // red
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0a83ca")
          } // blue
        >
          {/* Centered text in the middle column */}
          <span style={{ gridColumn: 2, justifySelf: "center" }}>
            Continuer la lecture
          </span>
          {/* Arrow on the right column */}
          <span
            aria-hidden="true"
            style={{
              gridColumn: 3,
              justifySelf: "end",
              transform: "translateY(-1px)",
            }}
          >
            →
          </span>
        </Link>
      </div>
    </div>
  </article>
);

const BlogGrid = () => {
  // Show only 3 cards
  const items = blogData.slice(0, 3);

  return (
    <section
      className="blog-section space" // removed bg-theme3
      style={{ background: "#0a83ca", padding: "60px 0" }} // BLUE BG
    >
      <div className="container">
        {/* Title + description for the section */}
        <div
          className="title-area three text-center"
          style={{ marginBottom: 24 }}
        >
          <div
            className="sub-title"
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,.15)",
              color: "#fff",
              fontWeight: 700,
              letterSpacing: ".06em",
            }}
          >
            Nos modules
          </div>
          <h2
            className="sec-title"
            style={{
              color: "#fff",
              marginTop: 12,
              fontWeight: 800,
            }}
          >
            AU CŒUR DE{" "}
            <span
              style={{
                fontWeight: 900,
              }}
            >
              {" "}
              L'ENNÉAGRAMME{" "}
            </span>{" "}
            ET DE SES PRATIQUES
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,.9)",
              maxWidth: 720,
              margin: "10px auto 0",
            }}
          >
            VALIDATION SCIENTIFIQUE - INNOVATION PÉDAGOGIQUE - PROFESSIONNALISME
            ÉTHIQUE
          </p>
        </div>

        <div className="row gx-25 gy-25">
          {items.map((blog, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,.9)",
          maxWidth: 720,
          margin: "50px auto 0",
        }}
      >
        PARCOURS (Cycle – Certificat ) – ATELIERS – FORMATIONS PROFESSIONNELLES
      </p>
    </section>
  );
};

export default BlogGrid;
