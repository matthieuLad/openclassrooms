import Header from "../components/Header";
import Footer from "../components/Footer";

function PageNotFound() {
  return (
    <div className="main notFound">
      <Header />
      <p className="title">404</p>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <a href="./">Retourner sur la page d'accueil</a>
      <Footer />
    </div>
  );
}

export default PageNotFound;
