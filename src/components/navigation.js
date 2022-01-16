import "./navigation.css";
import { useHover, useState } from "react";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export const Navigation = (props) => {
  const [hiddenUI, setHiddenUI] = useState(true);
  const [Hovered, setHovered] = useState("");
  const NavToggle = {
    in: {
      opacity: 1,
      duration: 1.2,
    },
    out: {
      opacity: 0,
      y: "-100px",
      // fix this
    },
  };
  const clearBar = () => {
    props.setSystem('')
    props.setPlanet('')
  }
  return (
    <div className="">
      <motion.div
        initial="in"
        enter="in"
        exit="out"
        variants={NavToggle}
        className="navMaster container-fluid"
      >
        <div className="row">
          <div className="navRow col-sm-4">
            <div className={hiddenUI ? "currentLocation" : "hidden"}>
              <NavLink
                to="/interstellar"
                className="navButton"
                onClick={() => props.setSystem('')}
                
              >
                {" "}
               Milky Way
              </NavLink>
            </div>
          </div>
          <div className="navRow col-sm-4">
            <div className={hiddenUI ? "currentLocation" : "hidden"}>
              <NavLink to={`/${props.system}`} className={hiddenUI ? "currentLocation" : "hidden"} onClick={() => props.setPlanet('')}>
              {props.system.length !== 0 ? `${props.system} system` : ''}</NavLink>
            </div>
          </div>
          <div className="navRow col-sm-4">
            <div className={hiddenUI ? "currentLocation" : "hidden"}>
            <NavLink to={`${props.planet}`} className={hiddenUI ? "currentLocation" : "hidden"}>
              {props.system.length !== 0 ? `${props.planet}` : ''}
              </NavLink>
            </div>
          </div>
        </div>
      </motion.div>
     {/*} <div className="navRow  ">
        <div
          className=" text-center toggleNav"
          onClick={() => setHiddenUI(!hiddenUI)}
        >
          Toggle UI
        </div>
  </div> */}
    </div>
  );
};
