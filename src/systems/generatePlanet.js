import "./generatePlanet.css";
import React, { useEffect, useState } from "react";
import { PlanetView } from "../components/planetview";

export const GeneratePlanet = (props) => {
  useEffect(() => {
    props.setArea('Testing zone')
    console.log(`planetdata ${props.planetdata}`)
    console.log(`planetparam is ${props.planetParam}`)
  }, [])
  return (
    <div className="generatedPlanetView ">
      <div className="row">
        <div className="col-sm-4 planetview">
          <PlanetView
            name="a"
            description="Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth."
            moons="-12"
          ></PlanetView>
          </div>
          <div className="generated-planet-container col-sm-4">
<div className="generated-planet">

</div>

          </div>
        
      </div>
    </div>
  );
};
