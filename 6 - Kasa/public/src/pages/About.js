import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import bannerImg from "../assets/about-banner.jpg";
import Collapse from "../components/Collapse";

function About() {
  return (
    <div className="main">
      <Header />
      <div className="about-body">
        <Banner bannerImg={bannerImg} />
        <Collapse
          collapseTitle="Fiabilité"
          collapseContent={
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          }
        />
        <Collapse
          collapseTitle="Respect"
          collapseContent={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
        />
        <Collapse
          collapseTitle="Service"
          collapseContent={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
        />
        <Collapse
          collapseTitle="Sécurité"
          collapseContent={
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default About;
