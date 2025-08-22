const Process3 = () => {
  return (
    <section className="process-section style-3 space bg-light2">
      <div className="container">
        <div className="title-area three text-center">
          <div className="sub-title">
            <span>
              <i className="asterisk"></i>
            </span>
            PROCESSUS SIMPLE
          </div>
          <h2 className="sec-title">
            Votre parcours <span className="bold">Ennéagramme</span>
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="process-all">
              {/* ÉTAPE 1 */}
              <div className="process-step">
                <div className="serial">ÉTAPE - 1</div>
                <div className="line">
                  <div className="circle"></div>
                  <div className="line-long">
                    <i className="line-long-arrow"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">
                    Prise de contact
                    <br />{" "}
                    <span className="fw-normal">& cadrage des objectifs</span>
                  </h4>
                  <p className="text mb-0">
                    Nous clarifions votre contexte, vos attentes (perso/pro) et
                    répondons à vos questions pour poser un cadre
                    d’accompagnement pertinent.
                  </p>
                </div>
              </div>

              {/* ÉTAPE 2 */}
              <div className="process-step xs-mt-30">
                <div className="serial">ÉTAPE - 2</div>
                <div className="line">
                  <div className="circle"></div>
                  <div className="line-long">
                    <i className="line-long-arrow"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">
                    Questionnaire Ennéagramme
                    <br /> <span className="fw-normal">et auto-évaluation</span>
                  </h4>
                  <p className="text mb-0">
                    Passage du questionnaire (ou entretien guidé) pour repérer
                    les motivations profondes, tendances dominantes et axes de
                    progrès.
                  </p>
                </div>
              </div>

              {/* ÉTAPE 3 */}
              <div className="process-step md-mt-30">
                <div className="serial">ÉTAPE - 3</div>
                <div className="line">
                  <div className="circle"></div>
                  <div className="line-long">
                    <i className="line-long-arrow"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">
                    Débriefing personnalisé
                    <br />{" "}
                    <span className="fw-normal">& cartographie du profil</span>
                  </h4>
                  <p className="text mb-0">
                    Séance de restitution (60–90 min) : compréhension du type,
                    sous-types et ailes, mécanismes de défense et leviers de
                    développement.
                  </p>
                </div>
              </div>

              {/* ÉTAPE 4 */}
              <div className="process-step md-mt-30">
                <div className="serial">ÉTAPE - 4</div>
                <div className="line">
                  <div className="circle"></div>
                  <div className="line-long">
                    <i className="line-long-arrow"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">
                    Plan d’action
                    <br />{" "}
                    <span className="fw-normal">& suivi de coaching</span>
                  </h4>
                  <p className="text mb-0">
                    Mise en place d’actions concrètes, exercices et
                    accompagnement sur mesure pour ancrer durablement les
                    nouvelles habitudes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process3;
