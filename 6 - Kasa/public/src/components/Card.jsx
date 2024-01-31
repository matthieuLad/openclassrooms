import { Link } from "react-router-dom";
import React from "react";

function Card(props) {
  const logement = props.logement;
  const title = logement.title;
  const id = logement.id;
  const cover = logement.cover;
  return (
    <>
      <div className="card" key={id}>
        <img src={cover} alt="présentation du bien" />
        <div className="background--card">
          <Link to={"/logement/" + id}>{title}</Link>
        </div>
      </div>
    </>
  );
}

export default Card;
