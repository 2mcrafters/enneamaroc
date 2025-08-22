
const BlogDetails = () => {
    return (
<section className="blog-details-section space bg-white">
            <div className="container">
                <div className="row gy-30 flex-column-reverse flex-lg-row">

                    <div className="col-xl-8 col-lg-8">
                        <div className="blog-details-left">
                            <div className="blog-list-card style-2">
                                <div className="image overlay-anim1">
                                    <img src="/assets/images/blog/blog-thumb01.jpg" alt="Meeting Image" />
                                </div>
                                <div className="card-content">
                                    <span className="category">BUSINESS</span>
                                    <h3 className="title">Quickly reconceptualize strategic e-tailers</h3>
                                    <div className="author-info">
                                        <div className="author">
                                            <img src="/assets/images/blog/social-pr01.jpg" alt="Author Image" />
                                            <span className="name"><span>By</span> Robert Aguilar</span>
                                        </div>
                                        <span className="date"><i className="icon-calender"></i> August 09, 2024</span>
                                    </div>
                                    <div className="pt-20 pb-25"><div className="border dark"></div></div>
                                    <p className="text">Conveniently extend vertical benefits and forward processes. Holisticly impact alternative e-commerce 
                                        through 24/365 paradigms. Enthusiastically enable goal-oriented maximize goal-oriented ideas whereas 
                                        interoperable platforms. Collaboratively enable integrated outsourcing whereas visionary mindshare. 
                                        Compellingly optimize market results via functionalized</p>
                                    <p>Authoritatively build turnkey products for wireless ROI. Seamlessly grow open-source imperative process
                                        leadership skills. Continually reinvent strategic leadership via resource sucking</p>
                                    <h3 className="title mt-45 mb-10">Business Developments</h3>
                                    <p className="mb-35">Credibly myocardinate multidisciplinary supply chains for low-risk high-yield catalysts for change main
                                        leverage others technically sound leadership vis-a-vis business deliverables. Progressively formulate
                                        models before synergistic processes. Interactively restore equity</p>
                                    <div className="blogs-quote">
                                        <p>Completely optimize standards compliant vortals for compelling portals engineer
                                            highly efficient convergence with tactical mindshare intrinsiclye</p>
                                        <span className="name">Linda F. Collins</span>
                                    </div>
                                    <div className="image overlay-anim1">
                                        <img src="/assets/images/blog/blog-thumb05.jpg" alt="Meeting Image" />
                                    </div>
                                    <h3 className="title mt-30 mb-10">5 Most popular marketing tips</h3>
                                    <p className="mb-25">Credibly myocardinate multidisciplinary supply chains for low-risk high-yield catalysts for change main
                                        leverage others technically sound leadership vis-a-vis business deliverables. Progressively formulate
                                        models before synergistic processes. Interactively restore equity</p>
                                    <div className="featured-list-box">
                                        <div className="featured-list">
                                            <ul className="list-style-2">
                                                <li> Appropriately synergize real-time leadership </li>
                                                <li> Rapidiously simplify extensive to data </li>
                                                <li> Synergistically envisioneer go forward </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-details__bottom">
                                        <div className="blog-details__tags">
                                            <span>Tags:</span>
                                            <ul className="blog-details__tags">
                                                <li>BUSINESS</li>
                                                <li>FINANCE</li>
                                            </ul>
                                        </div>
                                        <div className="blog-details__social-list">
                                            <span>Share:</span>
                                            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></a>
                                            <a href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="comment-one">
                                <h3 className="comment-one__title">1 Comment</h3>
                                <div className="comment-one__single">
                                    <div className="comment-one__image"> <img src="/assets/images/blog/comment-1.png" alt="" /> </div>
                                    <div className="comment-one__content">
                                        <div className="title"><h5>James Noel</h5><span>August 18, 2023</span></div>
                                        <p>Globally supply resource maximizing total linkage whereas seamless experiences
                                            resource sucking outsourcing before viral e-services</p>
                                        <a href="#" className="comment-one__btn">
                                            <i className="fa-regular fa-share"></i><span className="btn-title">Reply</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="comment-form">
                                    <h3 className="comment-one__title">Add a Comment</h3>
                                    <form id="comment-form" className="comment-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                        <div className="row">
                                            <div className="mb-20">
                                                <textarea name="form_message" className="form-control" rows="6" placeholder="Write Comments..."></textarea>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-20">
                                                    <input name="form_name" className="form-control" type="text" placeholder="Your Name *" required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-20">
                                                    <input name="form_email" className="form-control" type="email" placeholder="Enter E-Mail *" required />
                                                </div>
                                            </div>
                                            <div className="mb-25">
                                                <input name="form_subject" className="form-control" type="text" placeholder="Subject *" required />
                                            </div>
                                        </div>
                                        <div className="mb-0">
                                            <div className="form-group remember-check mb-0">
                                                <input type="checkbox" id="remember-me" required="" />
                                                <label htmlFor="remember-me">Save my name & email in the Browser</label>
                                            </div>
                                            <button type="submit" className="theme-btn bg-dark mt-25" data-loading-text="Please wait...">
                                                <span className="link-effect">
                                                    <span className="btn-title">Submit Now</span>
                                                </span><i className="fa-regular fa-arrow-right-long"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4">
                        <div className="sidebar-widget blog-sidebar pl-15 lg-pl-0">
                            <div className="widget-box sidebar-search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" name="search" placeholder="Search..." required  />
                                    <button type="submit"><i className="bi bi-search"></i></button>
                                </form>
                            </div>
                            <div className="sidebar-category-list">
                                <h4 className="sidebar-title"> Category </h4>
                                <div className="widget-box">
                                    <ul className="categories">
                                        <li><a href="#">Finance Consulting <span>(5)</span></a></li>
                                        <li><a href="#">Business Consulting <span>(3)</span></a></li>
                                        <li><a href="#">Maketing <span>(6)</span></a></li>
                                        <li><a href="#">Technology <span>(4)</span></a></li>
                                        <li><a href="#">IT Solutions <span>(2)</span></a></li>
                                        <li><a href="#">Artificial Intelligence <span>(3)</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-latest-posts">
                                <h4 className="sidebar-title"> Latest Posts </h4>
                                <div className="widget-box">
                                    <div className="latest-posts">
                                        <div className="post">
                                            <a href="#"><img src="/assets/images/blog/latest-details01.jpg" alt="Post Image" /></a>
                                            <div className="post-content">
                                                <a href="#">Continually monetize open source networks</a>
                                                <p>August 09, 2024</p>
                                            </div>
                                        </div>
                                        <div className="post">
                                            <a href="#"><img src="/assets/images/blog/latest-details02.jpg" alt="Post Image" /></a>
                                            <div className="post-content">
                                                <a href="#">Quickly reconceptualize strategic e-tailers</a>
                                                <p>August 09, 2024</p>
                                            </div>
                                        </div>
                                        <div className="post">
                                            <a href="#"><img src="/assets/images/blog/latest-details03.jpg" alt="Post Image" /></a>
                                            <div className="post-content">
                                                <a href="#">Dramatically benchmarks collaborative growth</a>
                                                <p>August 09, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-tags">
                                <h4 className="sidebar-title"> Latest Posts </h4>
                                <div className="widget-box">
                                    <div className="tag-list">
                                        <span className="tag">BUSINESS</span>
                                        <span className="tag active">FINANCE</span>
                                        <span className="tag">DATA</span>
                                        <span className="tag">CORPORATE</span>
                                        <span className="tag">CONSULTING</span>
                                        <span className="tag">MARKETING</span>
                                        <span className="tag">TRADING</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-newsletter">
                                <h4 className="sidebar-title"> Newsletter </h4>
                                <div className="widget-box mb-0">
                                    <form className="newsletter-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                        <div className="form-group">
                                            <input type="email" name="email" className="email mb-0"  placeholder="Enter email" autoComplete="on" required="" />
                                            <button type="submit">
                                            <i className="bi bi-send"></i>
                                                <span className="btn-title"></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default BlogDetails;