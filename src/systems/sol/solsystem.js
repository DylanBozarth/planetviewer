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
      <div className="sun">Sun</div>

     
        
        <MiniPlanet name="mercury" className=" mercuryMini ">Mercury</MiniPlanet>
         
        
          <div className="orbit-container2">
            <MiniPlanet name="venus" className=" venusMini " />
            Venus
          </div>
        
        <div className="orbit-container3">
          <MiniPlanet name="earth" className=" earthMini " />
          Earth
        </div>
        <div className="orbit-container4">
          <MiniPlanet name="mars" className="  marsMini " />
          Mars
        </div>
        <div className="orbit-container5">
          <MiniPlanet name="juipter" className=" juipterMini " />
          Juipter
        </div>
        <div className="orbit-container6">
          <MiniPlanet name="saturn" className=" saturnMini " />
          Saturn{" "}
        </div>
        <div className="orbit-container7">
          <MiniPlanet name="uranus" className=" uranusMini " />
          Uranus
        </div>
        <div className="orbit-container8">
          <MiniPlanet name="neptune" className=" neptuneMini " />
          Neptune{" "}
        </div>
      
    </div>
  );
};
