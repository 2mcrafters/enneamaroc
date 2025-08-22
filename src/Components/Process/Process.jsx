import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/process1.json';
import parse from 'html-react-parser';

const Process = () => {
    return (
      <section className="process-section space bg-white overflow-hidden">
        <div className="container">
          <div className="title-area three text-center">
            <SectionTitle
              SubTitle="AU CŒUR DE L'ENNÉAGRAMME"
              Title="L'ennéagramme est un outil puissant qui vous aide à mieux comprendre votre personnalité"
            ></SectionTitle>
          </div>
          <div className="row gy-30">
            {data.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft"
              >
                <div className={item.addclass}>
                  <div className="inner-box">
                    <div className="header">
                      <div className="icon">
                        <i className={item.icon}></i>
                      </div>
                      <h4 className="title m-0">{parse(item.title)}</h4>
                    </div>
                    <p style={{ color: "var(--body-color)" }}>{item.desc}</p>
                    <div className="box-footer">
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