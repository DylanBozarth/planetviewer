import "./navigation.css"
import {useHover, useState} from 'react'

import { NavLink } from "react-router-dom";
export const Navigation = () => {
    const [Hovered, setHovered] = useState('')
    return (
        
        <div className="navMaster">
<div className="container">
<div className="row">

   <NavLink to="/interstellar"> <div className="navRow col-sm-4"> <p className={Hovered ? 'navTitle' : 'hidden'}>Interstellar Space</p><div className="navIcon"></div></div></NavLink>
    <div className="navRow col-sm-4"></div>
    <div className="navRow col-sm-4"></div>
</div>
</div>


        </div>
    )
}