import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import Choose1 from "../Components/Choose/Choose1";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import ContactList from "../Components/ContactInfo/ContactList";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Marquee from "../Components/Marquee/Marquee";
import Partner1 from "../Components/Partner/Partner1";
import Pricing1 from "../Components/Pricing/Pricing1";
import Process from "../Components/Process/Process";
import Services1 from "../Components/Services/Services1";
import Testimonial from "../Components/Testimonial/Testimonial";
// import chafik from "../../../assets/imgss001/chafik.jpg";



const Home = () => {
    return (
      <div>
        <HeroBanner1
          videotext="<strong>Regarder</strong><br>l’histoire de Bentol"
          title="Libérez votre<br> potentiel avec <br><span class='bold'> l’Ennéagramme</span> "
          btnname="Parlons-en avec l’Ennéagramme "
          btnurl="/contact"
          //   mainimg="/assets/imgss001/coaching (25).jpg"
          Clientnumber="5k"
          Client="Nous conseillons des clients "
          customers="Clients satisfaits"
          rating="4.8"
          review="(120K avis)"
        ></HeroBanner1>
        <Marquee></Marquee>
        <About1
          subtitle="À PROPOS D’ENNEAMAROC"
          title="Votre cabinet de <br> <span class='bold'>coaching et de développement</span> <br> personnel pour réussir "
          rotatetext="* IT BUSINESS  *  CONSULTANTIS  *  DEVELOPMENTS"
          subtitle2="DEPUIS 2006"
          content="Nous accompagnons particuliers et entreprises dans la connaissance de soi, la communication et la cohésion d’équipe grâce à l’Ennéagramme et au coaching."
          btnname="En savoir plus"
          expyear="25"
          exptitle="<span class='fw-semibold'>années</span> <br>d’expérience pro"
          avatar="/assets/imgss001/chafik.jpg"
          name="Chafik Harti"
          designation="CEO Founder"
        ></About1>
        <Partner1></Partner1>
        <Services1></Services1>
        <Choose1></Choose1>
        <Process></Process>
        <Testimonial></Testimonial>

        {/* <Pricing1></Pricing1> */}

        <Blog1></Blog1>
        <Marquee></Marquee>
        <ContactInfo1></ContactInfo1>

        {/* <ContactList></ContactList> */}
        <Nwesletter addclass="newsletter-section"></Nwesletter>
      </div>
    );
};

export default Home;