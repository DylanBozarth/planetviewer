import "./navigation.css"
import {useHover, useState} from 'react'

import { NavLink } from "react-router-dom";
export const Navigation = (props) => {
    const [hiddenUI, setHiddenUI] = useState(true)
    const [Hovered, setHovered] = useState('')
    return (
        
        <div className="">
            
<div className='navMaster container-fluid'>
<div className="row">

    <div className="navRow col-sm-4"><div className={hiddenUI ? "navIcon" : 'hidden'}><NavLink to="/interstellar"> Interstellar Space</NavLink></div></div>
    <div className="navRow col-sm-4">{props.area}</div>
    <div className="navRow col-sm-4 "><div className="navIcon text-center right" onClick={() => setHiddenUI(!hiddenUI)}>Toggle UI</div></div>
</div>
</div>


        </div>
    )
}