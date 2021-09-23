import { PlanetView } from "../../../components/planetview";
import {useEffect} from 'react'
import { motion } from "framer-motion";
export const Mars = (props) => {
    const FadeIn = {
        in: {
          opacity: 1,
          duration: 1.5
        },
        out: {
          opacity: 0,
        },
      };  
      const pagetransition = {
        duration: .7
      };
      useEffect(() => {
        props.setArea('Mars')
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
            name="Mars"
            description="Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was billions of years ago wetter and warmer, with a thicker atmosphere."
            moons="2"
          ></PlanetView>
        </div>

        <div className="col-lg-8 planetWrapper">
          <div className="marsBall"></div>
        </div>
      </div>
    </motion.div>
  );
};
