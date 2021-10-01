import { PlanetView } from "../../../components/planetview";
import {useEffect} from 'react'
import { motion } from "framer-motion";
export const Jupiter = (props) => {
    const FadeIn = {
        in: {
          opacity: 1
        },
        out: {
          opacity: 0,
        },
      };  
      const pagetransition = {
        duration: .7
      };
      useEffect(() => {
        props.setArea('Jupiter')
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
            name="Jupiter"
            description="Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth."
            moons="79"
          ></PlanetView>
        </div>

        <div className="col-lg-8 planetWrapper">
          <div className="juipterBall"></div>
        </div>
      </div>
    </motion.div>
  );
};
