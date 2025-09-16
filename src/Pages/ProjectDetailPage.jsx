import BreadCumb from "../Components/Common/BreadCumb";
import ProjectDetails from "../Components/Project/ProjectDetails";
import Nwesletter from "../Components/ContactInfo/Nwesletter";

const ProjectDetailPage = () => {
  return (
    <div>
      <BreadCumb
        bg="/assets/images/bg-img/breadcrumb.jpg"
        Title="Détails du Projet"
        Content="Découvrez les détails de ce projet <br> et son impact dans le développement personnel"
      />
      <ProjectDetails />
      <Nwesletter addclass="newsletter-section bg-image3 mt--75" />
    </div>
  );
};

export default ProjectDetailPage;
