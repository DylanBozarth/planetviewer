import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
import { motion } from "framer-motion";
export const Neptune = (props) => {
  const routeTransition = {
    start: {
      scale: .05
    },

    animate: {
      scale: 1,
      transition: {
        duration: 3
      }
    },

    exit: {
      
      scale: .05,
      transition: {
        duration: 2
      }
    }
  };
  return (
    <motion.div variants={routeTransition}
    initial="start"
    animate="animate"
    exit="exit" className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4"><NavLink to="/sol">
        <div className="back">Back</div>
      </NavLink>
          <PlanetView Name="Neptune" Population="Many" temperture="-200°C" fact="A Neptune year last 165 Earth years" /></div>
         <div class="col-sm-8" onMouseOver={() => props.setBar("Uninhabitable")}
        onMouseLeave={() => props.setBar(`...`)}>
        <PlanetZoom background="Neptune" /></div>
      </div>
      
    </motion.div>
  );
};