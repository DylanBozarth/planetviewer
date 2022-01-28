import "./generatePlanet.scss";
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
export const GenerateExoPlanet = (props) => {
  useEffect(() => {
    console.log(`planet should be  ${props.planet}`);
    // shouldnt be undefined 
    let url = window.location.href
    let modifiedUrl = url.split('/')
    
    props.setPlanet(modifiedUrl[4])
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
      I didn't plan it
    </div>
  );
};
