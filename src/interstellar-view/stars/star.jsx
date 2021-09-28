import "./stars.css";

import { NavLink } from "react-router-dom";
export const Star = (props) => {
  return (
    <NavLink to={`/${props.name}?starType=${props.starType}`}  >
      <p className={`starLabel`}>{props.name}</p>
      <div className={``} >
        <div className={`starBall ${props.starType}`}></div>
      </div>
    </NavLink>
  );
};
