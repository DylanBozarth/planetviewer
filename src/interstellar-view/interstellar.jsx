import "./interstellar-space.scss";
import { Star } from "./stars/star";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export const Interstellar = (props) => {
  const [exoStars, setExoStars] = useState();
  useEffect(() => {
   
    setExoStars(makeStars(RandomNum()));
    
   props.setArea('Interstellar Space')
   
   
  }, []);

  // animations
  /* Depends on the animation but if you are using transform then yea, 
  change transform-origin on mousedown or click. You might thrash layout though by 
  checking w/h so maybe store the w/h using resize observer first, then calculate 
  the new transform-origin w the mouse offset relative to the element
  check if user has already been here? 
   */
 
  // auto generation stuff
  function makeStarName() {
    let r = Math.random().toString(36).substring(7);

    return r;
  }

  let starList = [
    "red-giant",
    "red-supergiant",
    "blue-giant",
    "white-dwarf",
    "yellow-dwarf",
    "red-dwarf",
    "brown-dwarf",
  ];
  let positionList = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  function RandomNum() {
    return Math.floor(Math.random() * 5 + 3);
  }
  const makeStars = (Count = 5) => {
    if (Count > 0) {
      return (
        <div className="starWrapper">
          <Star
            starName={`${makeStarName()}`}
            starType={`${starList[Math.floor(Math.random() * 6 + 1)]} ${
              positionList[Math.floor(Math.random() * 9 + 1)]
            }`}
          ></Star>
          {makeStars(Count - 1)}
        </div>
      );
    }
  };
  
  const FadeIn = {
    in: {
      opacity: 1,
      duration: 1.2
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
  return (
    <motion.div initial="in" animate="in" exit="out" variants={FadeIn} className="interstellar-space">
      {/*} <div className="top-warp warp"></div> */}
     <NavLink to="/" className="sol-system"><div className="sol-system"></div></NavLink>
      <div className="random-placement">{exoStars}</div>

      {/*<div className="bottom-warp warp"></div> */}
    </motion.div>
  );
};
