import "./generatePlanet.scss";
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
export const GeneratePlanet = (props) => {
  useEffect(() => {
    console.log(`Planet component  ${planetData.planetParam}`);
    
  }, []);
  /* planet data */
  let planetData = {
    Mercury: {
      description:
        "The smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
      moons: 0,
      rings: false,
      clouds: false,
      habitable: false,
    },
    Venus: {
      description:
        "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
      moons: 0,
      rings: false,
      clouds: true,
      habitable: false,
    },
    Earth: {
      description:
        "Our home planet, is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
      moons: 1,
      rings: false,
      clouds: true,
      habitable: true,
    },
    Mars: {
      description:
        "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was billions of years ago wetter and warmer, with a thicker atmosphere.",
      moons: 2,
      rings: false,
      clouds: false,
      habitable: false,
    },
    Juipter: {
      description:
        "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.",
      moons: 79,
      rings: false,
      clouds: false,
      habitable: false,
    },
    Saturn: {
      description:
        "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
      moons: 62,
      rings: true,
      clouds: false,
      habitable: false,
    },
    Uranus: {
      description:
        "Seventh planet from the Sun rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
      moons: 27,
      rings: false,
      clouds: false,
      habitable: false,
    },
    Neptune: {
      description:
        "The eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.",
      moons: 14,
      rings: false,
      clouds: false,
      habitable: false,
    },
    Nibiru: {
      description: "THE MYSTERY PLANET X",
      moons: "??",
      rings: false,
      clouds: false,
      habitable: false,
    },
  };
  var planetParam = props.planet;
  return (
    <div className="generatedPlanetView row container-fluid">
      <div className="col-sm-4">
        {planetParam ? (
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
              to="/"
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
