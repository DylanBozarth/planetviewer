import "./generatesystem.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {MiniPlanet} from '../components/miniplanet'

import { motion } from "framer-motion";
import { gsap } from "gsap";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const GenerateSystem = (props) => {
  useEffect(() => {
    EnterSystem();
   return  () => {
ExitSystem();
   }
  });
  //animations 
  const showMeHud = {
    start: {
      scale: .1
    },
    enter: {
      scale: 1,
      transition: {
        duration: 5
      }
    },
    exit: {
      scale: 0.01,
      transition: {
        duration: 3,
      },
    },
  };
  var tl = gsap.timeline({paused: true});
  function ExitSystem() {
    gsap.to(".generatedSystem", { scaleX: .1, scaleY: .1, transformOrigin:"center", duration: 3 });
    setTimeout(() => {
      props.history.push('/')
    })
  }
  function EnterSystem() {
    gsap.from(".generatedSystem", { scaleX: .1, scaleY: .1, transformOrigin:"center", duration: 3 })
    gsap.to(".generatedSystem", { scaleX: 1, scaleY: 1, transformOrigin:"center", duration: 3 });
   
    }
  const { name } = useParams();

  const query = useQuery();
  const starType = query.get("starType");
  const starName= query.get('name')
  const splitCss = starType.split(" ");
  // making planets 
  const [planets, setPlanets] = useState()
  function makeid() {
    let r = Math.random().toString(36).substring(7);

    return r;
  }

  let planetTypes = [
    "Barren",
    "Gas Giant",
    "Earth-like",
    "Toxic world",
    "Frozen world",
    "red-dwarf",
    "brown-dwarf",
  ];
  let posList = [
    1,2,3,4,5,6,7,8,9
  ]
function RandomNum() {
 return Math.floor(Math.random() * 5 + 3);
}
  const makePlanets = (num  = 5) => {
    
    
   if (num > 0) {
        return (
          <div className="starWrapper">
            <MiniPlanet
              name={`${makeid()}`}
            label={``}
              className={`${planetTypes[Math.floor(Math.random() * 6 + 1)]} ${posList[Math.floor(Math.random() * 8 + 1)]}`}
            ></MiniPlanet>
           
           {makePlanets((num - 1))}
          </div>
          
        );
        
   }
      };

    
  return (
    <div className="generatedSystem">
        <Link to="/"  >Back to space</Link>
       <h1>{starName}, {splitCss[0].toUpperCase()} STAR</h1>
      <div className={splitCss[0] + "1"}></div>{" "}
    </div>
  );
};
