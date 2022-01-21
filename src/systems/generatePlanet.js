import "./generatePlanet.scss";
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
export const GeneratePlanet = (props) => {
  useEffect(() => {
    
    var planetParam = props.planet.toString()
    console.log(`planetparam is ${planetParam}`)
    console.log(`planetparam and planetdata  ${planetData.planetParam}`)
    if (props.planet.length === 0) {
      Redirect('/')
    }

  }, []);
  /* planet data */
  let planetData = {
    Mercury: {
      description: "It's not a nice place"
    }
  }
  return (
    <div className="generated-planet-view container-fluid text-center">
      <div className="row">
        <div className="col-lg-4 sidePlanetView">
          <div className="planetView">
          {planetData.planetParam}
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
