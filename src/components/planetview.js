import React from 'react'



export const PlanetView = (props) => {
return( 
    <div className="planetView">
Name: {props.Name} <br /> Population: {props.Population}
    </div>
)
}