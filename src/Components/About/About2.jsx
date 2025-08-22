import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const About2 = () => {

    const [iframeSrc, setIframeSrc] = useState('about:blank');
    const [toggle, setToggle] = useState(false);
  
    const handelClick = () => {
      setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
      setToggle(!toggle);
    };
    const handelClose = () => {
      setIframeSrc('about:blank');
      setToggle(!toggle);
    };

    return (
        <section className="about-section style-2 space bg-theme3">
        <div className="container">
            <div className="row gy-30 align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="experience-wrapper">
                        <div className="experience-years">
                            <div className="inner">
                                <span className="count-number odometer" data-count="30">30</span>
                            </div>
                        </div>
                        <div className="text">
                            <div className="icon spin"><img src="/assets/images/shapes/star2.png" alt="" /></div>
                            <p>Years of <br/> Experiences</p>
                        </div>
                        <a className="popup-video" onClick={handelClick} data-fancybox="video-gallery">
                            <div className="inner-popup">
                                <span className="icon"><i className="bi bi-play-fill"></i></span>
                            </div>
                        </a>
                    </div>
                </div>
        
                <div className="col-lg-5 col-md-6 col-sm-6">
                    <div className="about-content-wrap">
                        <div className="title-area twoT">
                            <div className="sub-title"><span><i className="asterisk"></i></span>ABOUT BENTOL</div>
                            <h2 className="sec-title">Best powerfull business <br/> <span className="bold">consulting agency for</span> <br/> brand success</h2>
                        </div>
                        <ul className="features-list">
                            <li>Authoritatively reinvent resource</li>
                            <li>Globally empower standards</li>
                            <li>Progressively fabricate proactives</li>
                        </ul>
                        <Link to="/about" className="theme-btn bg-dark mt-40">
                            <span className="link-effect">
                                <span className="effect-1">More About</span>
                                <span className="effect-1">More About</span>
                            </span><i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-3 col-md-12">
                    <div className="about-right-wrap">
                        <div className="image-box overlay-anim2">
                            <img src="/assets/images/about/about03.jpg" alt="About Image" className="br-10 w-100" />
                        </div>
                        <div className="achievement-box bg-theme2 br-10">
                            <div className="p-top-left wow slideInLeft" ><img src="/assets/images/about/shape01.png" alt="shape" /></div>
                            <div className="p-bottom-right wow slideInRight" ><img src="/assets/images/about/shape02.png" alt="shape" /></div>
                            <div className="awards mb-50"><span className="count-number odometer" data-count="100">100</span><span className="plus">+</span></div>
                            <div className="content">
                                <p>Award wining company</p>
                                <span className="icon"><i className="icon-mom-star"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
            ></VideoModal>         
    </section>
    );
};

export default About2;