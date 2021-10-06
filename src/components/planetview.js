import React from 'react'

import "./components.css"
import { NavLink } from "react-router-dom";

export const PlanetView = (props) => {
    var shock = new Audio ('./sounds/shock.wav')
return( 
    <div className="planetView">
        Name: {props.name} <br />  {props.description}<br />
 <br /> 
 Moons: {props.moons} <br />
<NavLink to="/" className="planetViewBack" onClick={() => shock.play()}>Back to solar view</NavLink>
    </div>
)
}