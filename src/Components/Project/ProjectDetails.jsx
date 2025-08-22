import { Link } from "react-router-dom";

const ProjectDetails = () => {
    return (
        <section className="project-details space bg-white">
        <div className="container">
            <div className="row gy-30">
                <div className="col-xl-4 col-lg-4">
                    <div className="project-sidebar">
                        <div className="sidebar-widget">
                            <div className="widget-box project-details-box">
                                <h4 className="title">Project Details</h4>
                                <div className="content">
                                    <ul>
                                        <li><strong>Clients :</strong> Theme Vally</li>
                                        <li><strong>Start Date :</strong> 07 July, 2024</li>
                                        <li><strong>End Date :</strong> 07 September, 2024</li>
                                        <li><strong>Tags :</strong> Finance, Marketing</li>
                                        <li><strong>Duration :</strong> 03 months</li>
                                        <li><strong>Client Website :</strong> <a href="http://www.themevally.com" target="_blank">www.themevally.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="widget-box consulting-box">
                                <div className="inner-box">
                                    <h4 className="title">Need any service <br/>Business Consulting?</h4>
                                    <p className="text">Feel free to contact us drop a message</p>
                                    <div className="pt-25 mb-50"><div className="border"></div></div>
                                    <div className="contact-info">
                                        <div className="contact-item">
                                            <div className="icon"><i className="icon-phone-circle-small"></i></div>
                                            <div className="content">
                                                <p>Call Us Now</p>
                                                <a href="tel:+8801234567890">+880 123 (4567) 890</a>
                                            </div>
                                        </div>
                                        <div className="contact-item">
                                            <div className="icon"><i className="bi bi-envelope-fill"></i></div>
                                            <div className="content">
                                                <p>Send E-Mail</p>
                                                <a href="mailto:example@gmail.com">example@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="theme-btn bg-transparent mt-50">
                                        <span className="link-effect">
                                            <span className="effect-1">Contac Us</span>
                                            <span className="effect-1">Contac Us</span>
                                        </span><i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                    <div className="project-details__content">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="details__content-right">
                                    <div className="details-image br-10 overflow-hidden mb-30 overlay-fade"><img src="/assets/images/project/details01.jpg" alt="" /></div>
                                    <h3 className="title">Business Development</h3>
                                    <p className="mb-15">Quickly foster granular communities without error-free manufactured products. Assertively reconceptualize 
                                        cutting-edge vortals whereas team building mindshare. Quickly productivate parallel applications via wireless 
                                        information. Objectively incentivize worldwide metrics with high-quality deliverables. Credibly unleash e-
                                        business e-markets whereas</p>
                                    <p className="mb-40">Quickly foster granular communities without error-free manufactured products. Assertively reconceptualize 
                                        cutting-edge vortals whereas team building mindshare. Quickly productivate parallel</p>
                                    <h3 className="title">Projects Benifits</h3>
                                    <p className="mb-25">Quickly foster granular communities without error-free manufactured products. Assertively reconceptualize 
                                        cutting-edge vortals whereas team building mindshare. Quickly productivate parallel</p>
                                    <div className="featured-list mb-35">
                                        <ul className="list-style-1">
                                            <li> Communities without error-free manufactured products </li>
                                            <li> Interactively mesh prospective outsourcing without </li>
                                            <li> Conveniently engage go forward mindshare and enterprise </li>
                                            <li> Quickly innovate efficient ideas for top-line web </li>
                                        </ul>
                                    </div>
                                    <div className="row gy-30 align-items-center mb-50">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="details-image-box overlay-anim1">
                                                <img className="img1" src="/assets/images/project/project-d1.jpg" alt="" />
                                                <h5 className="title">Competitor Research</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="details-image-box overlay-anim1">
                                                <img className="img1" src="/assets/images/project/project-d2.jpg" alt="" />
                                                <h5 className="title">Curent Market Analysis</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="title">Complete Result</h3>
                                    <p>Conveniently extend vertical benefits and go forward processes. Holisticly impact alternative e-commerce 
                                        through 24/365 paradigms. Enthusiastically e-enable goal-oriented value with equity invested methods of 
                                        empowerment. Phosfluorescently productivate state new markets.</p>
                                    <div className="featured-list">
                                        <ul className="list-style-2">
                                            <li> Appropriately synergize real-time leadership </li>
                                            <li> Rapidiously simplify extensive to data </li>
                                            <li> Synergistically envisioneer go forward </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-40"><div className="border"></div></div>
                                <div className="details__pagination-box">
                                    <ul className="details__pagination">
                                        <li className="previous">
                                            <Link to="/project/project-details" aria-label="Previous"> <i className="bi bi-arrow-left"></i><span>Previous Projects</span></Link>
                                        </li>
                                        <li className="next">
                                            <Link href="/project/project-details" aria-label="Next"><span>Next Projects</span><i className="bi bi-arrow-right"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ProjectDetails;