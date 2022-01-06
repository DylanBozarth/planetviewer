import "./generatePlanet.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Sidebar } from "../components/sidebar";

export const GeneratePlanet = () => {
  function useQuery() {
  return new URLSearchParams(useLocation().search);
  
}



  return <div className="generatedPlanetView">
  <Sidebar />
  </div>;
};
