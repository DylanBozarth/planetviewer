import "./stars.css";

import { NavLink } from "react-router-dom";
export const Star = (props) => {
  return (
    <NavLink to={`/${props.starName}?starType=${props.starType}`}  >
     {/*} <p className={`starLabel`}>{props.starName}</p> */}
      <div className={``} >
        <div className={`starBall ${props.starType}`}></div>
      </div>
    </NavLink>
  );
};
