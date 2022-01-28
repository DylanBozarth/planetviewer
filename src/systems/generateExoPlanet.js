import "./generatePlanet.scss";
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
export const GenerateExoPlanet = (props) => {
  useEffect(() => {
    console.log(`planet should be  ${props.planet}`);
    
  }, []);
  /* planet data */
  let planetData = {
    GasGiant: {
      description: "gas giant",
      moons: 56,
      rings: false,
      clouds: false,
      habitable: false,
    },
    Desert: {
      description: "Desert planet",
      moons: 2,
      rings: false,
      clouds: false,
      habitable: false,
    },
    EarthLike: {
      description: "Earth Like",
      moons: 0,
      rings: false,
      clouds: false,
      habitable: true,
    },
    Toxic: {
      description: "britney spears",
      moons: 2,
      rings: false,
      clouds: false,
      habitable: false,
    },
    Frozen: {
      description: "ice ice baby",
      moons: 2,
      rings: false,
      clouds: false,
      habitable: false,
    },
    Ocean: {
      description: "swim baby",
      moons: 56,
      rings: false,
      clouds: false,
      habitable: false,
    },
    Rocky: {
      description: "Adrian",
      moons: 56,
      rings: false,
      clouds: false,
      habitable: false,
    },
    Molten: {
      description: "hot af down here",
      moons: 56,
      rings: false,
      clouds: false,
      habitable: false,
    },
  };
 
  return (
    <div className="generatedPlanetView row container-fluid">
      <div className="col-sm-4">
        {props.planet !== undefined ? (
          <div className=" planetView">
            <h4>{planetData[`${props.planet}`].description}</h4>
            <br />
            <h5>Moons: {planetData[props.planet].moons}</h5>
            {planetData[props.planet].habitable === true ? (
              <div className="habitable">Habitable</div>
            ) : (
              <div className="uninhabitable">Uninhabitable</div>
            )}
            {/* true or not soon */}

            <NavLink
              to={`${props.system}`}
              className="planetViewBack"
              onClick={() => props.setPlanet("")}
            >
              Back to solar view
            </NavLink>
          </div>
        ) : (
          <div>problem with data</div>
        )}
      </div>
      <div className="col-sm-8">
        {props.planet ? (
          <div className={` generated-planet ${props.planet}`}>
            {" "}
            {/* RINGS ARE BEING NAUGHTY {planetData[props.planet].rings === true ? (
              <div className="rings"></div>
            ) : (
              <div></div>
            )}{" "} */}
            {planetData[props.planet].clouds === true ? (
              <div className={`planetClouds`}></div>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          "Data issue"
        )}
      </div>
    </div>
  );
};
