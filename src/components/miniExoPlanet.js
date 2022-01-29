import React from "react";
import "./components.css"
import { NavLink } from "react-router-dom";
export const MiniExoPlanet = (props) => {
  return (
    <NavLink
      to={`exoPlanets/${props.planetType}`}
     
    ><div className={`miniPlanet ${props.planetType} ${props.position}`}>
    
      
   
  </div> </NavLink>
  );
};
