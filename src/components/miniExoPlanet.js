import React from "react";
import "./components.css"
import { NavLink } from "react-router-dom";
export const MiniExoPlanet = (props) => {
  return (
    <div className={`miniPlanet ${props.planetType} ${props.position}`}>
     <NavLink
        to={props.path}
        
      >
      <p>aaaa</p></NavLink>
    </div>
     
  );
};
