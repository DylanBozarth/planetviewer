import React from "react";
import { NavLink } from "react-router-dom";

export const MiniPlanet = (props) => {
  var whoosh = new Audio("./sounds/whoosh.wav");
  var shock = new Audio("./sounds/shock.wav");
  return (
    <div className={`miniPlanet ${props.planetType}`}>
      <NavLink
        to={`planets/${props.planetName}`}
        onClick={() => props.setPlanetParam(`${props.planetName}`)}
      >
        <p className="miniPlanetName">{props.planetName}</p>
      </NavLink>
    </div>
  );
};
