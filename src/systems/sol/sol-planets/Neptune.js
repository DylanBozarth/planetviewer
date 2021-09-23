import { PlanetView } from "../../../components/planetview";
import {useEffect} from 'react'
import { motion } from "framer-motion";
export const Neptune = (props) => {
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
        props.setArea('Neptune')
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
            description="The eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope."
            moons="14"
          ></PlanetView>
        </div>

        <div className="col-lg-8 planetWrapper">
          <div className="neptuneBall"></div>
        </div>
      </div>
    </motion.div>
  );
};
