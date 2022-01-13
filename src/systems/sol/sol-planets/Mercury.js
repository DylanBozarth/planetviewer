import { PlanetView } from "../../../components/planetview";
import {useEffect} from 'react'
import { motion } from "framer-motion";
export const Mercury = (props) => {
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
        props.setArea('Mercury')
       
      }, [])
  return (
    <motion.div  initial="out"
    animate="in"
    exit="out"
    transition={pagetransition}
    variants={FadeIn}  className="earthView container-fluid text-center">
      <div className="row">
        <div className="col-lg-4 sidePlanetView">
          <PlanetView
            name="Mercury"
            moons="0"
            description="The smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days."
          ></PlanetView>
        </div>

        <div className="col-lg-8 planetWrapper">
          <div className="mercuryBall"></div>
        </div>
      </div>
    </motion.div>
  );
};
