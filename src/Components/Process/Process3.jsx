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
            Votre parcours <span className="bold">avec l’Ennéagramme</span>
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
                    <span className="fw-normal">
                      et clarification des objectifs
                    </span>
                  </h4>
                  <p className="text mb-0">
                    Première rencontre pour comprendre votre contexte, vos
                    attentes (personnelles ou professionnelles) et définir un
                    cadre clair d’accompagnement.
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
                    Passage d’un questionnaire (ou entretien guidé) pour
                    identifier vos motivations profondes, vos schémas dominants
                    et vos axes d’évolution.
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
                    <span className="fw-normal">
                      et cartographie de votre profil
                    </span>
                  </h4>
                  <p className="text mb-0">
                    Séance de restitution (60–90 min) : découverte de votre
                    type, de vos sous-types et ailes, compréhension des
                    mécanismes de défense et de vos leviers de développement.
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
                    <span className="fw-normal">et suivi de coaching</span>
                  </h4>
                  <p className="text mb-0">
                    Élaboration d’un plan personnalisé avec des actions
                    concrètes, exercices pratiques et un suivi sur mesure pour
                    ancrer durablement de nouvelles habitudes et progresser.
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
