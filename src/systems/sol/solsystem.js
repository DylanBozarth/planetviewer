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
    
    props.setArea('Sol System')
    props.setPlanetParam('test')
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

     <motion.div initial="out"
    animate="in"
    exit="out"
    transition={pagetransition}
    variants={FadeIn} ><MiniPlanet name="Mercury"  className="mercuryMini" ></MiniPlanet></motion.div>
       <motion.div initial="out"
    animate="in"
    exit="out"
    transition={pagetransition}
    variants={FadeIn} ><MiniPlanet name="Venus" className="venusMini"></MiniPlanet></motion.div>
         <motion.div initial="out"
    animate="in"
    exit="out"
    transition={pagetransition}
    variants={FadeIn} ><MiniPlanet name="Earth" className="earthMini"></MiniPlanet></motion.div>
        <motion.div initial="out"
    animate="in"
    exit="out"
    transition={pagetransition}
    variants={FadeIn} > <MiniPlanet name="Mars" className="marsMini"></MiniPlanet></motion.div>
        {/*<MiniPlanet name="Asteroid-Belt" className="asteroidBelt"></MiniPlanet> */}
        <motion.div initial="out"
    animate="in"
    exit="out"
    transition={pagetransition}
    variants={FadeIn} ><MiniPlanet name="Juipter" className="juipterMini"></MiniPlanet></motion.div>
         <motion.div initial="out"
    animate="in"
    exit="out"
    transition={pagetransition}
    variants={FadeIn} ><MiniPlanet name="Saturn" className="saturnMini"></MiniPlanet></motion.div>
        <motion.div initial="out"
    animate="in"
    exit="out"
    transition={pagetransition}
    variants={FadeIn} > <MiniPlanet name="Uranus" className="uranusMini"></MiniPlanet></motion.div>
        <motion.div initial="out"
    animate="in"
    exit="out"
    transition={pagetransition}
    variants={FadeIn} > <MiniPlanet name="Neptune" className="neptuneMini"></MiniPlanet></motion.div>
        
       
      
    </motion.div>
  );
};
