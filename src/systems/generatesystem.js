import "./generatesystem.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MiniExoPlanet } from "../components/miniExoPlanet";

import { motion } from "framer-motion";


export const GenerateSystem = (props) => {
  const [planets, setPlanets] = useState();
  useEffect(() => {
    setPlanets(makePlanets(RandomNum()));
    let url = window.location.href
    let modifiedUrl = url.split('/')
    console.log(modifiedUrl)
    props.setSystem(modifiedUrl[3])
  }, []);
  

  

  const zoomOut = {
    in: {
      x: 0
    },
    out: {
     opacity: 0
    }
  }

 
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
  let positionList = [ "a3", "a4", "a5", "a6", "a7", "a8"];
  function RandomNum() {
    return Math.floor(Math.random() * 5 + 3);
  }
  let randomPlanetIndex = () => {
   return Math.floor(Math.random() * 55 )
  }
  let randomPositionIndex = () => {
    return Math.floor(Math.random() * 6)
  }

  const makePlanets = (Count = 5) => {
    if (Count > 0) {
      return (
        <div onClick={() => props.setPlanet(`${planetTypes[randomPlanetIndex()]}`)}>
          <MiniExoPlanet
           
            
            path={`exoPlanets/${props.planet}`}
            label={``}
            planetType={`${planetTypes[randomPlanetIndex()] } 
            
           `}position={`${positionList[randomPositionIndex()]}`}
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
      
      <div className={`${props.system}1`}></div>{" "}
     <div className="">{planets}</div>
     
    </motion.div>
  );
};
