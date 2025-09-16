import { Link } from "react-router-dom";
import data from "../../Data/blog1.json";

const BlogCard = ({ blog }) => (
  <article className="blog-single-box">
    <div
      className="inner-box"
      style={{ position: "relative", cursor: "pointer" }}
    >
      {/* Full-card clickable overlay */}
      <Link
        to={blog.path || "/blog/blog-details"}
        aria-label={`Voir l’article: ${blog.title}`}
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      />

      {/* Image + catégorie */}
      <div className="blog-image">
        <img src={blog.img} alt="Illustration article" />
        <div className="category-tag">{blog.category}</div>
      </div>

      {/* Contenu */}
      <div className="blog-content" style={{ position: "relative", zIndex: 2 }}>
        <div className="author">
          <img src={blog["social-img"]} alt="Auteur" />
          <span className="name">
            <span>Par</span> {blog.name}
          </span>
        </div>

        <div className="pt-25 pb-20">
          <div className="border dark"></div>
        </div>

        {/* Title not wrapped in a link (whole card is already clickable) */}
        <h4 className="title">{blog.title}</h4>

        <p className="text" style={{ color: "black" }}>
          {blog.desc}
        </p>

        {/* Optional CTA (kept for SEO/UX, same target) */}
        <Link
          to={blog.path || "/blog/blog-details"}
          className="continue-reading"
        >
          {blog["btn-title"] || "Lire la suite"}
        </Link>
      </div>
    </div>
  </article>
);

const Blog1 = () => {
  // Make sure we only render 6 cards (3 per row)
  const row1 = data.slice(0, 3);
  const row2 = data.slice(3, 6);

  return (
    <section className="blog-section space bg-theme3">
      <div className="container">
        {/* Titre de la section */}
        <div className="title-area three text-center">
          <div className="sub-title">
            <span>
              <i className="asterisk"></i>
            </span>
            DERNIERS ARTICLES
          </div>
          <h2 className="sec-title">
            Découvrez nos <span className="bold">publications récentes</span>
          </h2>
        </div>

        {/* Row 1: 3 cards */}
        <div className="row gy-30">
          {row1.map((blog, i) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={`r1-${i}`}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div className="row gy-30 mt-4">
          {row2.map((blog, i) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={`r2-${i}`}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog1;
