import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
export const Juipter = () => {
  return (
    <div className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
          <PlanetView Name="Juipter" Population="Many" temperture="hot" /></div>
         <div class="col-sm-8">
        <PlanetZoom background="juipter" /></div>
      </div>
      <NavLink to="/">
        <div className="back">Back</div>
      </NavLink>
    </div>
  );
};
