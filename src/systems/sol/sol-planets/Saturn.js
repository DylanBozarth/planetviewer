import { PlanetView } from "../../../components/planetview";
import { useEffect } from "react";
import { motion } from "framer-motion";
export const Saturn = (props) => {
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
        props.setArea('Saturn')
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
            name="Saturn"
            description="Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's."
            moons="62"
          ></PlanetView>
        </div>

        <div className="col-lg-8 planetWrapper">
          <div className="saturnBall">
            <div className="rings"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
