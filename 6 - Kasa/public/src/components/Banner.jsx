function Banner({ bannerImg, bannerText }) {
  return (
    <div className="banner">
      <img src={bannerImg} alt="paysage" />
      <h1>{bannerText}</h1>
    </div>
  );
}

export default Banner;
