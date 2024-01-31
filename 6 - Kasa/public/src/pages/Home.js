import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CardsList from "../components/CardsList";
import bannerImg from "../assets/home-banner.jpg";

function Home() {
  return (
    <div className="main">
      <Header />
      <Banner
        bannerImg={bannerImg}
        bannerText="Chez vous, partout et ailleurs"
      />
      <div className="cards-background">
        <CardsList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
