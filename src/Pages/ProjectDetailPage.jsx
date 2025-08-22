import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import ProjectDetails from "../Components/Project/ProjectDetails";

const ProjectDetailPage = () => {
    return (
        <div>
             <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Project Details"
                Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
            ></BreadCumb>      
            <ProjectDetails></ProjectDetails>
            <Nwesletter addclass="newsletter-section"></Nwesletter>                        
        </div>
    );
};

export default ProjectDetailPage;