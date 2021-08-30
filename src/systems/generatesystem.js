import "./generatesystem.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MiniPlanet } from "../components/miniplanet";

import { motion } from "framer-motion";
import { gsap } from "gsap";
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
      EnterSystem();
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

 
  function ExitSystem() {
    gsap.to(".generatedSystem", {
      scaleX: 0.1,
      scaleY: 0.1,
      transformOrigin: "center",
      duration: 3,
    });
    setTimeout(() => {
      props.history.push("/");
    });
  }
  function EnterSystem() {
    gsap.from(".generatedSystem", {
      scaleX: 0.1,
      scaleY: 0.1,
      transformOrigin: "center",
      duration: 3,
    });
    gsap.to(".generatedSystem", {
      scaleX: 1,
      scaleY: 1,
      transformOrigin: "center",
      duration: 3,
    });
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
   return Math.floor(Math.random() * 56 + 1)
  }
  let randomPositionIndex = () => {
    return Math.floor(Math.random() * 8 + 1)
  }
  const makePlanets = (Count = 5) => {
    if (Count > 0) {
      return (
        <div
          className={`planetWrap ${positionList[randomPositionIndex()]}`}
        >
          <MiniPlanet
            name={`${makePlanetName()}`}
            label={``}
            className={`${planetTypes[randomPlanetIndex()]} 
          `}
          >
            {" "}
          </MiniPlanet>
          {makePlanets(Count - 1)}
        </div>
      );
    }
  };
  
    
  
  

  return (
    <motion.div
      variants={backToInterstellar}
      exit="leaveSystem"
      className="generatedSystem"
    >
      
      <div className={splitCss[0] + "1 centerOfSystem" }></div>{" "}
      <div className="random-placement wrapper">{planets} </div>
     
    </motion.div>
  );
};
