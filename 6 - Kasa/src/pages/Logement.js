import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import redStar from "../assets/redstar.png";
import greyStar from "../assets/greystar.png";
import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";

function Logement() {
  const { linkId } = useParams();

  if (!logements.map((logement) => logement.id).includes(linkId)) {
    return <Navigate to="/pageNotFound" />;
  }

  const logement = logements.filter((logement) => logement.id === linkId);
  const tags = logement[0].tags;
  const redStars = parseInt(logement[0].rating);
  const greyStars = 5 - redStars;
  const equipements = logement[0].equipments;

  const RedStars = () => {
    let redStarsArray = [];
    for (let i = 0; i < redStars; i++) {
      redStarsArray.push(<img src={redStar} key={i} alt="etoile rouge" />);
    }
    return redStarsArray;
  };

  const GreyStars = () => {
    let greyStarsArray = [];
    for (let i = 0; i < greyStars; i++) {
      greyStarsArray.push(<img src={greyStar} key={i} alt="etoile grise" />);
    }
    return greyStarsArray;
  };

  return (
    <div className="main">
      <Header />
      <Carrousel logement={logement} />
      <div className="logement-content">
        <div className="logement-header">
          <div className="logement-header-gauche">
            <h2>{logement[0].title}</h2>
            <p>{logement[0].location}</p>
            <ul className="tags">
              {tags.map((tag) => {
                return <li key={tag}>{tag}</li>;
              })}
            </ul>
          </div>
          <div className="logement-header-droite">
            <div className="user">
              <p>{logement[0].host.name}</p>
              <img src={logement[0].host.picture} alt="host" />
            </div>
            <div className="rating">
              <RedStars />
              <GreyStars />
            </div>
          </div>
        </div>
        <div className="logement-collapses">
          <Collapse
            collapseTitle="Description"
            collapseContent={<p>{logement[0].description}</p>}
          />
          <Collapse
            collapseTitle="Équipements"
            collapseContent={
              <ul className="equipements">
                {equipements.map((equipement) => {
                  return <li key={equipement}>{equipement}</li>;
                })}
              </ul>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logement;
