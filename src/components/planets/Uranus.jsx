import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
export const Uranus = () => {
  return (
    <div className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
          <PlanetView Name="Uranus" Population="Many" temperture="hot" /></div>
         <div class="col-sm-8">
        <PlanetZoom background="Uranus" /></div>
      </div>
      <NavLink to="/">
        <div className="back">Back</div>
      </NavLink>
    </div>
  );
};