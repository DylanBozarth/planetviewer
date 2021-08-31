import React from "react";
import { NavLink } from "react-router-dom";

export const MiniPlanet = (props) => {
  return (
    <div className={`miniPlanet ${props.className}`}><NavLink to={`planets/${props.name}`} >
     
<p className="miniPlanetName">{props.name}</p>
</NavLink>
    </div>
     
  );
};
