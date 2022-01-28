import "./stars.css";

import { NavLink } from "react-router-dom";
export const Star = (props) => {
  return (
    
    
      <div className={``} >
        <div className={`starBall ${props.starType} ${props.starPosition}`}></div>
      </div>
    
  );
};
