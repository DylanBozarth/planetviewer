import "./generateExoPlanet.scss";
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
    'Gas-giant': {
      description: "This vast planet is entirely made of gas. The core however is solid due to the immense pressure, but is likely only the size of a small planet. ",
      moons: 56,
      rings: false,
      clouds: false,
      habitable: false,
    },
    'Desert-world': {
      description: "This planet is consists primarily of a vast desert. Liquid water is all but impossible to find on the surface. Scorching temptures during the day and frigid tempertures at night make this planet uninhabitable.",
      moons: 2,
      rings: false,
      clouds: false,
      habitable: false,
    },
    'Earth-like': {
      description: "This planet's atmosphere's contains the proper ratios of Carbon Dioxide, Nitrogen, and Oxygen to allow humans to breathe without assistance. Further exploration is needed ",
      moons: 3,
      rings: false,
      clouds: false,
      habitable: true,
    },
    'Toxic-world': {
      description: "With an atmosphere comprised of toxic chemicals and extremely high pressure; any attempt to settle or even explore this planet would be met with failure. ",
      moons: 2,
      rings: false,
      clouds: false,
      habitable: false,
    },
    'Frozen-world': {
      description: "This planet is far from the heat source of its home star, thus the surface is almost entirely made of ice. This planet is simply too cold to support animal or plant life.",
      moons: 2,
      rings: false,
      clouds: false,
      habitable: false,
    },
    'Ocean-world': {
      description: "This planet has a surface, that is underneath a massive planet-spanning ocean that is hundreds kilometers deep. Due to micro organisms in the vast ocean the planet's air is breatable. Possible canidate for colonization. ",
      moons: 1,
      rings: false,
      clouds: true,
      habitable: false,
    },
    'Rocky-world': {
      description: "Barren and desolate, the defining features of this planet are its abundance of mineral and metal deposits.",
      moons: 1,
      rings: false,
      clouds: false,
      habitable: false,
    },
    'Molten-world': {
      description: "With a surface that is constantly at the mercy of the planet's chaotic tectonics, a surface temperture that can melt metal, and frequent asteroid impacts. The surface of planet is incapable of supporting life. ",
      moons: 4,
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
          <div className={` generated-planet ${props.planet}1`}>
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
