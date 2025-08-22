const Counter1 = () => {
  return (
    <section className="counter-section py-80 bg-theme2">
      <div className="p-top-left wow slideInLeft">
        <img src="/assets/images/counter/shape01.png" alt="Décoratif" />
      </div>
      <div className="p-bottom-right wow slideInRight">
        <img src="/assets/images/counter/shape02.png" alt="Décoratif" />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="title-area mb-0 md-mb-40">
              <h2
                className="sec-title mb-0"
                style={{ color: "var(--theme-color2)" }}
              >
                Nos réalisations en <br />
                <span className="bold" style={{ color: "var(--theme-color2)" }}>
                  coaching & Ennéagramme
                </span>
              </h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="achievement-stats">
              <div className="stat-item">
                <div className="count-box">
                  <span
                    className="count-number odometer"
                    data-count="500"
                    style={{ color: "var(--theme-color3)" }}
                  >
                    {" "}
                    500+
                  </span>
                </div>
                <p className="text" style={{ color: "var(--theme-color3)" }}>
                  Personnes 
                </p>
              </div>
              <div className="stat-item">
                <div className="count-box">
                  <span
                    className="count-number odometer"
                    data-count="95"
                  ></span>
                  <span style={{ color: "var(--theme-color3)" }}> 95%</span>
                </div>
                <p className="text" style={{ color: "var(--theme-color3)" }}>
                  Taux de satisfaction
                </p>
              </div>
              <div className="stat-item">
                <div className="count-box">
                  <span
                    className="count-number odometer"
                    data-count="50"
                    style={{ color: "var(--theme-color3)" }}
                  >
                    50+
                  </span>
                </div>
                <p style={{ color: "var(--theme-color3)" }} className="text">
                  formations animés
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter1;
