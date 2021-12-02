import "./generatePlanet.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Sidebar } from "../components/sidebar";

export const GeneratePlanet = () => {
  function useQuery() {
  return new URLSearchParams(useLocation().search);
  
}
useEffect(() => {
  console.log(planetType, planetName)
})
const query = useQuery();
const planetType = query.get("planetType");
  const planetName = query.get("name");

  return <div className={planetType}>
  <Sidebar />
  </div>;
};
