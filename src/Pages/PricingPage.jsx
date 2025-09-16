import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Pricing1 from "../Components/Pricing/Pricing1";

const PricingPage = () => {
  return (
    <div>
      <BreadCumb
        bg="/assets/images/bg-img/breadcrumb.jpg"
        Title="Nos Tarifs"
        Content="Découvrez nos formules d'accompagnement personnalisées <br> pour votre développement avec l'ennéagramme"
      />
      <Pricing1 />
      <Nwesletter addclass="newsletter-section bg-image3 mt--75" />
    </div>
  );
};

export default PricingPage;
