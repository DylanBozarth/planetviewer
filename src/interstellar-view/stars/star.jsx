import "./stars.css";

import { NavLink } from "react-router-dom";
export const Star = (props) => {
  var whoosh = new Audio ('./sounds/whoosh.wav')
  return (
    <NavLink to={`/${props.starName}?starType=${props.starType}`} onClick={() => whoosh.play()} >
     {/*} <p className={`starLabel`}>{props.starName}</p> */}
      <div className={``} >
        <div className={`starBall ${props.starType}`}></div>
      </div>
    </NavLink>
  );
};
