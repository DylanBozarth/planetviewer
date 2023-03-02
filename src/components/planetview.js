import React from 'react'

import "./components.css"
import { NavLink } from "react-router-dom";

export const PlanetView = (props) => {
return( 
    <div className="planetView">
        Name: {props.name} <br />  {props.description}<br />
 <br /> 
 Moons: {props.moons} <br />
<NavLink to="/" className="planetViewBack">Back to solar view</NavLink>
    </div>
)
}