import { Link } from "react-router-dom";
import data from "../../Data/blog1.json";

const Blog1 = () => {
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

        {/* Grille des articles */}
        <div className="row gy-30">
          {data.map((blog, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
              <article className="blog-single-box">
                <div className="inner-box">
                  {/* Image + catégorie */}
                  <div className="blog-image">
                    <img src={blog.img} alt="Illustration article" />
                    <div className="category-tag">{blog.category}</div>
                  </div>

                  {/* Contenu */}
                  <div className="blog-content">
                    <div className="author">
                      <img src={blog["social-img"]} alt="Auteur" />
                      <span className="name">
                        <span>Par</span> {blog.name}
                      </span>
                    </div>
                    <div className="pt-25 pb-20">
                      <div className="border dark"></div>
                    </div>

                    <h4 className="title">
                      <Link to="/blog/blog-details">{blog.title}</Link>
                    </h4>
                    <p className="text" style={{ color: "black" }}>
                      {blog.desc}
                    </p>

                    <Link to="/blog/blog-details" className="continue-reading">
                      {blog["btn-title"] || "Lire la suite"}
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog1;
