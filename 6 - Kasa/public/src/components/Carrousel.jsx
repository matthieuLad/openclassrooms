import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import { useState } from "react";

const Carrousel = ({ logement }) => {
  const [current, setCurrent] = useState(0);
  const pictures = logement[0].pictures;
  const length = pictures.length;

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="gallery">
      <div className="galleryNav">
        <img
          src={leftArrow}
          className={length === 1 ? "leftArrow hidden" : "leftArrow"}
          alt="left Arrow"
          onClick={prevImg}
        />
        <img
          src={rightArrow}
          className={length === 1 ? "rightArrow hidden" : "rightArrow"}
          alt="right arrow"
          onClick={nextImg}
        />
        <p
          className={length === 1 ? "pictureCounter hidden" : "pictureCounter"}
        >
          {current + 1}/{pictures.length}
        </p>
      </div>
      {pictures.map((picture, index) => {
        return (
          <img
            className={index === current ? "active" : ""}
            key={index}
            src={picture}
            alt="photos logement"
          />
        );
      })}
    </div>
  );
};

export default Carrousel;
