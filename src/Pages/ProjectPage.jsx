import BreadCumb from "../Components/Common/BreadCumb";
import Project1 from "../Components/Project/Project1";
import Nwesletter from "../Components/ContactInfo/Nwesletter";

const ProjectPage = () => {
  return (
    <div>
      <BreadCumb
        bg="/assets/images/bg-img/breadcrumb.jpg"
        Title="Nos Projets"
        Content="Découvrez nos réalisations et accompagnements <br> dans le domaine de l'ennéagramme"
      />
      <Project1 />
      <Nwesletter addclass="newsletter-section bg-image3 mt--75" />
    </div>
  );
};

export default ProjectPage;
