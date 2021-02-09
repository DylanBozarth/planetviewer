import React from "react";
import { PlanetView } from "../planetview";
import { NavLink } from "react-router-dom";
import {PlanetZoom} from './planetZoom'
export const Venus = () => {
  return (
    <div className="planetWrapper container">
      <div className="row">
        <div className="col-sm-4">
          <PlanetView Name="Venus" Population="0" temperture="hot af" /></div>
         <div class="col-sm-8">
        Venus goes here</div>
      </div>
      <NavLink to="/">
        <div className="back">Back</div>
      </NavLink>
    </div>
  );
};
