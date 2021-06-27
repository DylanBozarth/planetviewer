import "./interstellar-space.scss";
import { Star } from "./stars/star";
import { gsap } from "gsap";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export const Interstellar = () => {
 
  const [exoStars, setExoStars] = useState();
  useEffect(() => {
   //var cookies = document.cookie 
   // if (cookies.length === 0) {
      setExoStars(makeStars(RandomNum()));
    EnterSystem();
   // }
   

    // save the results of the first set of this 
  }, []);

  // animations
  /* Depends on the animation but if you are using transform then yea, 
  change transform-origin on mousedown or click. You might thrash layout though by 
  checking w/h so maybe store the w/h using resize observer first, then calculate 
  the new transform-origin w the mouse offset relative to the element
  check if user has already been here? 
   */
  
  const viewStar = {
    exit: {
      scale: 0.01,
      transition: {
        duration: 3,
      },
       in: {
      scale: 0.01,
      transition: {
        duration: 2
      }
    }
    },
  };
  function EnterSystem() {
     gsap.to(".top-warp", { y: -1000, duration: 2.7 });
     gsap.to(".bottom-warp", { y:1000, duration: 2.7 });

   
  }
  // auto generation stuff
  function makeid() {
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
  let posList = [
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
  const makeStars = (num = 5) => {
    if (num > 0 ) {
      return (
        <div className="starWrapper">
          <Star
            name={`${makeid()}`}
            starType={`${starList[Math.floor(Math.random() * 6 + 1)]} ${
              posList[Math.floor(Math.random() * 9 + 1)]
            }`}
          ></Star>
          {makeStars(num - 1)}
        </div>
      );
    }
  };

  return (
    <motion.div variants={viewStar} exit="exit" className="interstellar-space">
      <div className="top-warp warp"></div>
      <Star name="Sol" starType="sol-system" />
      <div className="random-placement">{exoStars}</div>
      <div className="bottom-warp warp"></div>
    </motion.div>
  );
};

// red giant, red supergiant, blue giant, white dwarf, yellow dwarf, red dwarf, brown dwarf
