import "./navigation.css"
import {useHover, useState} from 'react'

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export const Navigation = (props) => {
    const [hiddenUI, setHiddenUI] = useState(true)
    const [Hovered, setHovered] = useState('')
    const NavToggle = {
        in: {
          opacity: 1,
          duration: 1.2
        },
        out: {
          opacity: 0,
          y: '-100px'
          // fix this 
        },
      };  
    return (
        
        <div className="">
            
<motion.div initial="in" enter='in' exit="out" variants={NavToggle} className='navMaster container-fluid'>
<div className="row">

    <div className="navRow col-sm-4"><div className={hiddenUI ? "navIcon" : 'hidden'}><NavLink to="/interstellar"> Interstellar Space</NavLink></div></div>
    <div className="navRow col-sm-4"><div className={hiddenUI ? 'currentLocation' : 'hidden'}>{props.area}</div></div>
    <div className="navRow col-sm-4"><div className={hiddenUI ? 'currentLocation' : 'hidden'}></div></div>
</div>
</motion.div>
<div className="navRow  "><div className="navIcon text-center toggleNav" onClick={() => setHiddenUI(!hiddenUI)}>Toggle UI</div></div>

        </div>
    )
}