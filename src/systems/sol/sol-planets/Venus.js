import { PlanetView } from "../../../components/planetview"

import { motion } from "framer-motion";
export const Venus = () => {
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
            <div className="col-lg-4 sidePlanetView"><PlanetView name="Venus" moons="0" description="Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system."></PlanetView></div>
            
            <div className="col-lg-8 planetWrapper">  
       
          <div className="venusBall">
          
          </div>
          <div className="venusClouds"></div>
      </div>
            
           
        </div>
        
        
        
        
        
        </motion.div>
    )
}