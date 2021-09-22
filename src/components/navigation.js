import "./navigation.css"
import {useHover, useState} from 'react'

import { NavLink } from "react-router-dom";
export const Navigation = () => {
    const [hiddenUI, setHiddenUI] = useState(false)
    const [Hovered, setHovered] = useState('')
    return (
        
        <div className={hiddenUI ? 'hidden': 'navMaster' }>
<div className="container-fluid">
<div className="row">

    <div className="navRow col-sm-4"><NavLink to="/interstellar"> <p className={Hovered ? 'navTitle' : 'hidden'}>Interstellar Space</p><div className="navIcon"></div></NavLink></div>
    <div className="navRow col-sm-4"></div>
    <div className="navRow col-sm-4"><div className="navIcon text-center" onClick={() => setHiddenUI(true)}>Hide UI</div></div>
</div>
</div>


        </div>
    )
}