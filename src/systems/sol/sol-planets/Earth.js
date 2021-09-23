import "./planetView.scss";
import { PlanetView } from "../../../components/planetview";
import {useEffect} from 'react'
import { motion } from "framer-motion";

export const Earth = (props) => {
    const FadeIn = {
        in: {
          opacity: 1,
        },
        out: {
          opacity: 0,
        },
      };  
      const pagetransition = {
        duration: .7
      };
useEffect(() => {
  props.setArea('Earth')
})
  return (
    <motion.div initial="out"
    animate="in"
    exit="out"
    transition={pagetransition}
    variants={FadeIn}  className="earthView container-fluid text-center">
      <div className="row">
        <div className="col-lg-4 sidePlanetView">
          <PlanetView
            name="Earth"
            description="Our home planet, is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface."
            moons="1"
          ></PlanetView>
        </div>

        <div className="col-lg-8 planetWrapper">
          <div className="earthBall">
            <div className="planetClouds"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
