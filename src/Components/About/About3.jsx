import { Link } from "react-router-dom";
import SkillBar from "../Skills/Skills1";
import data from "../../Data/skills1.json";

const About3 = () => {
  return (
    <section className="about-section style-3 space bg-theme3 overflow-hidden">
      <div className="p-top-right wow slideInRight">
        <img src="/assets/images/choose/shape01.png" alt="Forme décorative" />
      </div>
      <div className="bg-path__shape"></div>
      <div className="container">
        <div className="row">
          {/* Image */}
          <div className="col-lg-6 position-relative">
            <div className="about-thumb">
              <img src="/assets/images/about/home3-thumb.jpg" alt="À propos" />
            </div>
            <div className="since-box">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon">
                    <i className="icon-since"></i>
                  </span>
                </div>
                <h5 className="since">Depuis 2007</h5>
                <div className="text">
                  Accompagnement en développement personnel et coaching
                </div>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="col-lg-6">
            <div className="about-content-wrapper ml-40 ml-ml-0">
              <div className="title-area two">
                <div className="sub-title">
                  <span>
                    <i className="asterisk"></i>
                  </span>
                  À propos d’Ennéagramme Maroc
                </div>
                <h2 className="sec-title">
                  Une approche puissante pour <br />
                  <span className="bold">mieux se connaître et évoluer</span>
                </h2>
                <p className="sec-text" style={{ color: "black" }}>
                  L’Ennéagramme est un outil de transformation personnelle et
                  collective. 
                </p>
              </div>

              {/* Compétences ou statistiques */}
              <div className="skills">
                {data.map((skill, index) => (
                  <SkillBar
                    key={index}
                    title={skill.title}
                    percentage={skill.percentage}
                  />
                ))}
              </div>

              {/* Liste des bénéfices */}
              <ul className="features-list">
                <li>Découvrir vos forces et vos talents uniques</li>
                <li>Améliorer la communication et la cohésion</li>
                <li>Développer un leadership authentique</li>
                <li>Avancer vers un épanouissement durable</li>
              </ul>

              <Link to="/about" className="theme-btn bg-dark mt-40">
                <span className="link-effect">
                  <span className="effect-1">En savoir plus</span>
                  <span className="effect-1">En savoir plus</span>
                </span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;
