import { Link } from "react-router-dom";
import blogData from '../../Data/blogData.json';

const BlogGrid = () => {
    return (
        <section className="blog-section space bg-theme3">
            <div className="container">
                <div className="row gx-25 gy-25">
                    {blogData.map((blog, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                            <article className="blog-single-box">
                                <div className="inner-box">
                                    <div className="blog-image">
                                        <img src={blog.img} alt="Blog Image" />
                                        <div className="category-tag">{blog.category}</div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="author">
                                            <img src={blog.socialImg} alt="Author Image" />
                                            <span className="name"><span>By</span> {blog.name}</span>
                                        </div>
                                        <div className="pt-25 pb-20"><div className="border dark"></div></div>
                                        <h4 className="title mb-10">
                                            <Link to={blog.link}>{blog.title}</Link>
                                        </h4>
                                        <Link to={blog.link} className="continue-reading">Continue Reading</Link>
                                    </div>
                                </div>
                            </article> 
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;
