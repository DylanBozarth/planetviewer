import "./generatePlanet.scss";
import React, { useEffect, useState } from "react";
import { PlanetView } from "../components/planetview";

export const GeneratePlanet = (props) => {
  useEffect(() => {
    props.setArea(`${props.planetParam}`)
    console.log(`planetparam is ${props.planetParam}`)
  }, [])

  return (
    <div className="generated-planet-view container-fluid text-center">
      <div className="row">
        <div className="col-lg-4 sidePlanetView">
          <PlanetView
            name=""
            description=""
            moons=""
          ></PlanetView>
        </div>

        <div className="col-lg-8 planetWrapper">
          <div className={`generated-planet ${props.planetParam}`}></div>
        </div>
      </div>
    </div>
  );
};
