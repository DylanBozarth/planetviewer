import "./sol-system.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
export const MiniPlanet = (props) => {
  return (
    <NavLink to={`planets/${props.name}`}>
      <div className="miniPlanet">
        <div className={`${props.className}`}></div>
      </div>
    </NavLink>
  );
};

export const SolSystem = () => {
  useEffect(() => {
    
  });

  return (
    <div className="sol-system-master">
      <div className="sun"></div>

     <MiniPlanet name="Mercury" className="mercuryMini"></MiniPlanet>
      <MiniPlanet name="Venus" className="venusMini"></MiniPlanet>
        <MiniPlanet name="Earth" className="earthMini"></MiniPlanet>
        <MiniPlanet name="Mars" className="marsMini"></MiniPlanet>
        <MiniPlanet name="Asteroid-Belt" className="asteroidBelt"></MiniPlanet>
        <MiniPlanet name="Juipter" className="juipterMini"></MiniPlanet>
        <MiniPlanet name="Saturn" className="saturnMini"></MiniPlanet>
        <MiniPlanet name="Uranus" className="uranusMini"></MiniPlanet>
        <MiniPlanet name="Neptune" className="neptuneMini"></MiniPlanet>
        
       
      
    </div>
  );
};
