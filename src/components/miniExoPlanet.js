import React from "react";

export const MiniExoPlanet = (props) => {
  return (
    <div className={`miniPlanet ${props.planetType}`}>
     
<p className="miniPlanetName text-center">{props.planetName}</p> 
<p className="miniPlanetType text-center">{props.planetType}</p>
    </div>
     
  );
};
