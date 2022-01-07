import "./generatePlanet.css";
import React, { useEffect, useState } from "react";
import { PlanetView } from "../components/planetview";
export const GeneratePlanet = (props) => {
 



  return <div className="generatedPlanetView ">
   <PlanetView
            name="Jupiter"
            description="Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth."
            moons="79"
          ></PlanetView>
          <div>
            
          </div>
  </div>;
};
