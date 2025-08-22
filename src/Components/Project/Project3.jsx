import { useState } from "react";
import data from "../../Data/project3.json";
import { Link } from "react-router-dom";

const Project3 = () => {
  // UI labels are French; category values stay as in data for filtering
  const categoryMenu = [
    { title: "Finance", category: "Finance" }, // ex: “Coaching individuel” if you also change data
    { title: "Marketing", category: "Marketing" }, // ex: “Ennéagramme”
    { title: "Business", category: "Business" }, // ex: “Entreprise”
  ];

  const [active, setActive] = useState("all");

  return (
    <section className="case-studies-section style-3 space bg-white">
      <div className="container">
        <div className="title-area threeT text-center mb-0">
          <div className="sub-title">
            <span>
              <i className="asterisk"></i>
            </span>
            PROJETS À LA UNE
          </div>
          <h2 className="sec-title fw-bold">Études de cas sélectionnées</h2>
          <p className="sec-text text-gray">
            Découvrez comment nous accompagnons la transformation par le
            coaching et l’Ennéagramme.
          </p>
        </div>

        <div className="case-filter-buttons mb-40 mt-35">
          <ul className="menu-filtering">
            <li
              className={active === "all" ? "active" : ""}
              onClick={() => setActive("all")}
            >
              Tous les projets
            </li>
            {categoryMenu.map((item, index) => (
              <li
                key={index}
                onClick={() => setActive(item.category)}
                className={active === item.category ? "active" : ""}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="row gy-40 image_load">
          {data.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-6 grid-item ${
                active === "all" ? "" : active !== item.category ? "d-none" : ""
              }`}
            >
              <div className="case-single-item overlay-anim1">
                <img className="img" src={item.img} alt="Étude de cas" />
                <div className="case-info">
                  <h4 className="title">
                    <Link to="/project/project-details">{item.title}</Link>
                  </h4>
                  <div className="case-badge">
                    <span>{item.category}</span>
                    <span>{item.category2}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project3;
