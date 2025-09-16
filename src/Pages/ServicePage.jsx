import Choose4 from "../Components/Choose/Choose4";
import BreadCumb from "../Components/Common/BreadCumb";
import ContactInfo4 from "../Components/ContactInfo/ContactInfo4";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Marquee from "../Components/Marquee/Marquee";
import Pricing3 from "../Components/Pricing/Pricing3";
import Process from "../Components/Process/Process";
import Services4 from "../Components/Services/Services4";

const ServicePage = () => {
  return (
    <div>
      <BreadCumb
        bg="/assets/images/bg-img/breadcrumb.jpg"
        Title="Services"
        Content="Completely restore extensive materials interactive solutions. <br> Progressively myocardinate viral paradigms"
      ></BreadCumb>
      <Choose4></Choose4>
      <Marquee></Marquee>
      <Services4></Services4>
      <Process></Process>
      <Pricing3></Pricing3>
      <ContactInfo4></ContactInfo4>
      <Nwesletter addclass="newsletter-section"></Nwesletter>
    </div>
  );
};

export default ServicePage;