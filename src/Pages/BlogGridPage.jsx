import BlogGrid from "../Components/Blog/BlogGrid";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";

const BlogGridPage = () => {
    return (
        <div>
             <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Blog Grid"
                Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
            ></BreadCumb>      
            <BlogGrid></BlogGrid>
            <Nwesletter addclass="newsletter-section"></Nwesletter>       
        </div>
    );
};

export default BlogGridPage;