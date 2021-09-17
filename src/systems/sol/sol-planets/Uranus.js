import { PlanetView } from "../../../components/planetview";

import { motion } from "framer-motion";
export const Uranus = () => {
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
  return (
    <motion.div initial="out"
    animate="in"
    exit="out"
    transition={pagetransition}
    variants={FadeIn}  className="earthView container-fluid text-center">
      <div className="row">
        <div className="col-lg-4 sidePlanetView">
          <PlanetView
            name="Uranus"
            description="Seventh planet from the Sun rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side."
            moons="27"
          ></PlanetView>
        </div>

        <div className="col-lg-8 planetWrapper">
          <div className="uranusBall"></div>
        </div>
      </div>
    </motion.div>
  );
};
