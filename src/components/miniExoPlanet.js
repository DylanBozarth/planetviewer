import React from "react";
import "./components.css"
export const MiniExoPlanet = (props) => {
  return (
    <div className={`miniPlanet ${props.planetType} ${props.position}`}>
     
{/*<p className="miniPlanetName text-center">{props.planetName}</p> 
<p className="miniPlanetType text-center">{props.planetType}</p> */}
    </div>
     
  );
};
