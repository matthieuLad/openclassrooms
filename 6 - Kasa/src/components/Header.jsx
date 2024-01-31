import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo Kasa"></img>
      <div className="navbar">
        <NavLink to="../" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink to="../about" activeclassname="active">
          A Propos
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
