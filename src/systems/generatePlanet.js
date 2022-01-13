import "./generatePlanet.scss";
import React, { useEffect, useState } from "react";
import { PlanetView } from "../components/planetview";

export const GeneratePlanet = (props) => {
  useEffect(() => {
    props.setArea(`${props.planetParam}`)
    console.log(`planetdata ${props.planetdata}`)
    console.log(`planetparam is ${props.planetParam}`)
  }, [])
  return (
    <div className="generatedPlanetView ">
      <div className="row">
        <div className="col-sm-4 planetview">
          <PlanetView
            name={props.planetParam}
            description="ytest"
            moons="-12"
          ></PlanetView>
          </div>
          <div className="generated-planet-container col-sm-4">
<div className={`generated-planet ${props.planetParam}` }>

</div>

          </div>
        
      </div>
    </div>
  );
};
