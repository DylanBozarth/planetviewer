import React from 'react'


import { NavLink } from "react-router-dom";

export const PlanetView = (props) => {
return( 
    <div className="planetView">
Planet type: {props.type} <br />Name: {props.name} <br />   <br /> 
<NavLink to="/">Back</NavLink>
    </div>
)
}