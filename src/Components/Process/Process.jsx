import { useEffect, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/process1.json";
import parse from "html-react-parser";

const Process = () => {
  const items = data.slice(0, 2); // exactly 2 cards
  const cardRefs = useRef([]);

  // Equalize heights based on tallest card
  useEffect(() => {
    const equalize = () => {
      const els = cardRefs.current.filter(Boolean);
      if (!els.length) return;
      // reset then measure
      els.forEach((el) => (el.style.minHeight = "auto"));
      const max = Math.max(...els.map((el) => el.scrollHeight));
      els.forEach((el) => (el.style.minHeight = `${max}px`));
    };

    equalize();
    window.addEventListener("resize", equalize);
    return () => window.removeEventListener("resize", equalize);
  }, [items.length]);

  return (
    <section
      className="process-section space bg-white overflow-hidden"
      id="process-section"
    >
      <div className="container">
        <div className="title-area three text-center">
          <SectionTitle
            SubTitle="AU CŒUR DE L'ENNÉAGRAMME"
            Title="L'ennéagramme est un outil puissant qui vous aide à mieux comprendre votre personnalité"
          />
        </div>

        <div className="row gy-30 justify-content-center">
          {items.map((item, index) => (
            <div
              key={index}
              className={`col-lg-6 col-md-6 col-sm-12 wow ${
                index % 2 ? "fadeInRight" : "fadeInLeft"
              }`}
            >
              <div className={item.addclass} style={{ height: "100%" }}>
                <div
                  className="inner-box"
                  ref={(el) => (cardRefs.current[index] = el)}
                  style={{
                    // make content fill full height and keep footer at bottom
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div className="header">
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <h4 className="title m-0">{parse(item.title)}</h4>
                  </div>

                  <p style={{ color: "var(--body-color)" }}>{item.desc}</p>

                  <div className="box-footer" style={{ marginTop: "auto" }}>
                    <div className="box-count">
                      <span>{item.number}</span>
                    </div>
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

export default Process;
