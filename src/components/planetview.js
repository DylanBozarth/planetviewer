import React from 'react'


import { NavLink } from "react-router-dom";

export const PlanetView = (props) => {
return( 
    <div className="planetView">
        Name: {props.name} <br />  {props.description}<br />
 <br /> 
 Moons: {props.moons} <br />
<NavLink to="/">Back</NavLink>
    </div>
)
}