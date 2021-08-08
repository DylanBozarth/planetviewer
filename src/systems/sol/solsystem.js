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

     
        
        <MiniPlanet name="mercury" className=" mercuryMini "><p>Mercury</p></MiniPlanet>
         
        
          
            <MiniPlanet name="venus" className=" venusMini ">venus</MiniPlanet>
          
         
        
       
      
    </div>
  );
};
