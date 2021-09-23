import "./generatesystem.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MiniExoPlanet } from "../components/miniExoPlanet";

import { motion } from "framer-motion";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const GenerateSystem = (props) => {
  const [planets, setPlanets] = useState();
  useEffect(() => {
    setPlanets(makePlanets(RandomNum()));
  }, []);
  
  useEffect(() => {
    
    if (planets) {
      
      //Orbit();
    }
  
  }, [planets]);
  // orbits 
  /*function Orbit() {
    gsap.set(".wrapper", {xPercent: 0, yPercent: -50, x: 0, y: 0, transformOrigin: "20vw center"});

gsap.to(".wrapper", {rotation: 360, ease: "none", repeat: -1, duration: 3});
gsap.to(".a1", {rotation: -360, ease: "none", repeat: -1, duration: gsap.utils.random(20, 60),});

  
  
  }
   const perfectOrbit = () => {
    gsap.set(".wrapper", {
      xPercent: 0,
      yPercent: -50,
      x: 0,
      y: 0,
      transformOrigin: "20vw center",
    })} */
  //animations
  const backToInterstellar = {
    leaveSystem: {
      scale: 0.01,
      transition: {
        duration: 3,
      },
    },
  };

  const FadeIn = {
    in: {
      opacity: 1,
      duration: '1.5s'
    },
    out: {
      opacity: 0,
    },
  };  
  const zoomOut = {
    in: {
      x: 0
    },
    out: {
     opacity: 0
    }
  }

  const query = useQuery();
  const starType = query.get("starType");
  const starName = query.get("name");
  const splitCss = starType.split(" ");
  // making planets

  function makePlanetName() {
    let r = Math.random().toString(36).substring(7);

    return r;
  }

  let planetTypes = [
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Gas-giant",
    "Desert-world",
    "Desert-world",
    "Desert-world",
    
    "Desert-world",
    "Desert-world",
    "Desert-world",
    "Earth-like-world",

    "Earth-like-world",
    "Toxic-world",
    "Frozen-world",
    "Ocean-world",
    "Rocky-world",
    "Toxic-world",
    "Frozen-world",
    "Ocean-world",
    "Rocky-world",
    "Toxic-world",
    "Frozen-world",
    "Ocean-world",
    "Rocky-world",
    "Toxic-world",
    "Frozen-world",
    "Ocean-world",
    "Rocky-world",
    "Toxic-world",
    "Frozen-world",
    "Ocean-world",
    "Rocky-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
    "Molten-world",
  ];
  let positionList = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"];
  function RandomNum() {
    return Math.floor(Math.random() * 5 + 3);
  }
  let randomPlanetIndex = () => {
   return Math.floor(Math.random() * 56 )
  }
  let randomPositionIndex = () => {
    return Math.floor(Math.random() * 8 + 1)
  }
  const makePlanets = (Count = 5) => {
    if (Count > 0) {
      return (
        <div
          className={`${positionList[randomPositionIndex()]}`}
        >
          <MiniExoPlanet
            planetName={`${makePlanetName()}`}
            label={``}
            planetType={`${planetTypes[randomPlanetIndex()]} 
           `}
          >
            
            {" "}
          </MiniExoPlanet>
          {makePlanets(Count - 1)}
        </div>
      );
    }
  };
  
    
  
  

  return (
    <motion.div 
    initial="in" animate="in" exit="out" variants={zoomOut}
      className="generatedSystem"
    >
      
      <div className={splitCss[0] + "1" }></div>{" "}
     <div className="">{planets}</div>
     
    </motion.div>
  );
};
