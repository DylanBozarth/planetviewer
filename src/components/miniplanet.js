import React from "react";
import { NavLink } from "react-router-dom";

export const MiniPlanet = (props) => {
  return (
    <div className={`miniPlanet ${props.planetType}`}><NavLink to={`planets/${props.planetName}`} >
     
<p className="miniPlanetName">{props.planetName}</p>
</NavLink>
    </div>
     
  );
};
