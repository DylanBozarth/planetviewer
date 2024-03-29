import "./interstellar-space.scss";
import { Star } from "../components/star.jsx";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export const Interstellar = (props) => {
  const [exoStars, setExoStars] = useState();
  useEffect(() => {
    setExoStars(makeStars(RandomNum()));
    props.setSystem("");
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
    "Red-Giant",
    "Red-Supergiant",
    "Blue-Giant",
    "White-Dwarf",
    "Yellow-Dwarf",
    "Red-Dwarf",
    "Brown-Dwarf",
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
    let randomTypeVariable = starList[Math.floor(Math.random() * 6 + 1)];
    if (Count > 0) {
      return (
     
        <NavLink
          to={`/${randomTypeVariable}`}
          
          className="starWrapper"
        >
          <Star
          
            starName={`${makeStarName()}`}
            starPosition={positionList[Math.floor(Math.random() * 9 + 1)]}
            starType={`${randomTypeVariable}`}
          ></Star>
          {makeStars(Count - 1)}
        </NavLink>
      );
    }
  };

  const FadeIn = {
    in: {
      opacity: 1,
      duration: 1.2,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial="in"
      animate="in"
      exit="out"
      variants={FadeIn}
      className="interstellar-space"
    >
      <NavLink to="/" className="sol-system">
        <div className="sol-system">
          <p className="sunLabel text-center">Our Sun</p>
        </div>
      </NavLink>
      <div className="random-placement">{exoStars}</div>
    </motion.div>
  );
};
