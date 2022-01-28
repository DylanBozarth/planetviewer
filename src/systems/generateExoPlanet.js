import "./generatePlanet.scss";
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
export const GenerateExoPlanet = (props) => {
  useEffect(() => {
    console.log(`planet should be  ${props.planet}`);
    // shouldnt be undefined 
    let url = window.location.href
    let modifiedUrl = url.split('/')
    console.log(modifiedUrl)
    props.setPlanet(modifiedUrl[4])
  }, []);
  /* planet data */
  let planetData = {
    'Gas-Giant': {
      description: "gas giant",
      moons: 56,
      rings: false,
      clouds: false,
      habitable: false,
    },
    'Desert-world': {
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
    'Toxic-world': {
      description: "britney spears",
      moons: 2,
      rings: false,
      clouds: false,
      habitable: false,
    },
    'Frozen-world': {
      description: "ice ice baby",
      moons: 2,
      rings: false,
      clouds: false,
      habitable: false,
    },
    'Ocean-world': {
      description: "swim baby",
      moons: 56,
      rings: false,
      clouds: false,
      habitable: false,
    },
    'Rocky-world': {
      description: "Adrian",
      moons: 56,
      rings: false,
      clouds: false,
      habitable: false,
    },
    'Molten-world': {
      description: "hot af down here",
      moons: 56,
      rings: false,
      clouds: false,
      habitable: false,
    },
  };
 
  var planetParam = props.planet;
  return (
    <div className="generatedPlanetView row container-fluid">
      <div className="col-sm-4">
        {props.planet ? (
          <div className=" planetView">
            <h4>{planetData[`${planetParam}`].description}</h4>
            <br />
            <h5>Moons: {planetData[planetParam].moons}</h5>
            {planetData[planetParam].habitable === true ? (
              <div className="habitable">Habitable</div>
            ) : (
              <div className="uninhabitable">Uninhabitable</div>
            )}
            {/* true or not soon */}

            <NavLink
              to={`/${props.system}`}
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
        {planetParam ? (
          <div className={` generated-planet ${props.planet}`}>
            {" "}
            {/* RINGS ARE BEING NAUGHTY {planetData[planetParam].rings === true ? (
              <div className="rings"></div>
            ) : (
              <div></div>
            )}{" "} */}
            {planetData[planetParam].clouds === true ? (
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
