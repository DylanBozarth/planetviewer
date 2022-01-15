import "./generatePlanet.scss";
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
export const GeneratePlanet = (props) => {
  useEffect(() => {
    //props.setPlanet(`${props.planetParam}`);
  }, []);
  var planetData = {
    Mercury: {
      Name: "Mercury",
      Description:
        "The smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
      Moons: "0",
    },
    Niburu: { Name: "NIBURU", Description: "evil planet" },
  };

  return (
    <div className="generated-planet-view container-fluid text-center">
      <div className="row">
        <div className="col-lg-4 sidePlanetView">
          <div className="planetView">
          
            <NavLink
              to="/"
              className="planetViewBack"
              onClick={() => props.setPlanet("")}
            >
              Back to solar view
            </NavLink>
          </div>
        </div>

        <div className="col-lg-8 planetWrapper">
          <div className={`generated-planet ${props.planet}`}></div>
        </div>
      </div>
    </div>
  );
};
