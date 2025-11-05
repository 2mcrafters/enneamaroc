import BreadCumb from "../Components/Common/BreadCumb";
import ContactInfo3 from "../Components/ContactInfo/ContactInfo3";

const ContactPage = () => {
  return (
    <div>
      <BreadCumb
        bg="/assets/imgss001/coaching (23).jpg"
        Title="Contactez-nous"
        Content="Parlons de votre parcours avec l’Ennéagramme
Que vous débutiez ou souhaitiez approfondir, notre équipe répond à vos questions,<br> vous aide à choisir le bon module et vous informe sur les dates, tarifs et prérequis.  "
      ></BreadCumb>
      <ContactInfo3></ContactInfo3>
    </div>
  );
};

export default ContactPage;
