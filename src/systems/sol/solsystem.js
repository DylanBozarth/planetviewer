import "./sol-system.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export const MiniPlanet = (props) => {
  return (
    <NavLink to={`planets/${props.name}`}>
      <div className="miniPlanet">
        <div className={`${props.className}`}></div>
      </div>
    </NavLink>
  );
};

function RandomNum() {
    return Math.floor(Math.random() * 3 );
  }
 
  const pagetransition = {
  duration: 1.1
};
export const SolSystem = (props) => {
  useEffect(() => {
    
    props.setSystem('Sol System')
  });
const FadeIn = {
  in: {
    opacity: 1,
    duration: RandomNum()
  },
  out: {
    opacity: 0,
  },
};  
/* sun effects */
const zoomOut = {
  in: {
    x: 0
  },
  out: {
   opacity: 0
  }
}
  return (
    <motion.div initial="in" animate="in" exit="out" variants={zoomOut}   className="sol-system-master">
      <div className="sun"  ></div>

      <div onClick={() => props.setPlanet('Mercury')}><MiniPlanet name="Mercury"   className="mercuryMini" /></div>
     
      <div onClick={() => props.setPlanet('Venus')}><MiniPlanet name="Venus" className="venusMini"></MiniPlanet></div>
      <div onClick={() => props.setPlanet('Earth')}><MiniPlanet name="Earth" className="earthMini"></MiniPlanet></div>
      <div onClick={() => props.setPlanet('Mars')}><MiniPlanet name="Mars" className="marsMini"></MiniPlanet></div>
        {/*<MiniPlanet name="Asteroid-Belt" className="asteroidBelt"></MiniPlanet> */}
        <div onClick={() => props.setPlanet('Juipter')}><MiniPlanet name="Juipter" className="juipterMini"></MiniPlanet></div>
        <div onClick={() => props.setPlanet('Saturn')}><MiniPlanet name="Saturn" className="saturnMini"></MiniPlanet></div>
        <div onClick={() => props.setPlanet('Uranus')}><MiniPlanet name="Uranus" className="uranusMini"></MiniPlanet></div>
        <div onClick={() => props.setPlanet('Neptune')}><MiniPlanet name="Neptune" className="neptuneMini"></MiniPlanet></div>
        
       
        <div onClick={() => props.setPlanet('Niburu')}><MiniPlanet name="Nibiru" className="neptuneMini2" /></div></motion.div>
    
  );
};
