import { Link } from "react-router-dom";
import data from '../../Data/services3.json';

const Services4 = () => {
    return (
        <section className="service-section style-3 bg-white">
            <div className="container space">
                <div className="title-area three text-center">
                    <div className="sub-title"><span><i className="asterisk"></i></span>OUR SOLUTIONS</div>
                    <h2 className="sec-title">Providing the best <span className="bold">solutions</span> <br/> for your business</h2>
                </div>
                <div className="row gy-30">

                {data.map((item, index)=>(
                    <div key={index} className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft">
                        <div className="service-single-box">
                            <div className="inner-box">
                                <div className="icon"><i className={item.icon}></i></div>
                                <div className="border mt-50 xs-mt-40 mb-30"></div>
                                <h4 className="title">{item.title}</h4>
                                <p className="text">{item.desc}</p>
                                <Link to={item.btnLink} className="theme-btn service-btn">
                                <i className="bi bi-plus-lg"></i>
                                    <span className="link-text">View Details</span>
                                </Link>
                                <span className="serial">{item.number}</span>
                                <div className="path__shape"></div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services4;