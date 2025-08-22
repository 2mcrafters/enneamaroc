import BlogDetails from "../Components/Blog/BlogDetails";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";

const BlogDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Blog Details"
                Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
            ></BreadCumb>      
            <BlogDetails></BlogDetails>
            <Nwesletter addclass="newsletter-section"></Nwesletter>            
        </div>
    );
};

export default BlogDetailsPage;