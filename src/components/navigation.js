import "./navigation.css"
import {useHover, useState} from 'react'

export const Navigation = () => {
    const [Hovered, setHovered] = useState('')
    return (
        
        <div className="navMaster">
<div className="container">


    <div className="navRow"> <p className={Hovered ? 'hidden' : 'navTitle'}>Interstellar Space</p><div className="navIcon"></div></div>
    <div className="navRow"></div>
    <div className="navRow"></div>
</div>



        </div>
    )
}