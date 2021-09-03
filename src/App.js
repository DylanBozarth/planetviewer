import "./App.scss";
import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Interstellar } from "./interstellar-view/interstellar";
import { SolSystem } from "./systems/sol/solsystem";
import { GenerateSystem } from "./systems/generatesystem";
import { GeneratePlanet } from "./systems/generatePlanet";
import { AnimatePresence} from "framer-motion";
import { NavLink } from "react-router-dom";
function App() {
  const [starCount, setStarCount] = useState(null)
//https://www.javascripttutorial.net/web-apis/javascript-sessionstorage/
  useEffect(() => {
    localStorage.setItem('variables', "steve")
    if(localStorage.getItem('variables') === true) {
console.log('worked')
    }
    else {
      console.log('naw')
    }
  }, [])
  const location = useLocation();
  return (
    <div>
      <Navigation /> {" "}<AnimatePresence className="App" exitBeforeEnter={true}>
      <Switch location={location} key={location.pathname}>
      <Route
              exact
              path="/interstellar"
              render={(props) => (
                <Interstellar {...props}  />
              )}
            />
        <Route exact path="/" render={(props) => <SolSystem {...props} />} />
        <Route
          exact
          path="/:id"
          render={(props) => <GenerateSystem {...props} />}
        />
        <Route
          exact
          path="/planets/:id"
          render={(props) => <GeneratePlanet {...props} />}
        />
      </Switch>
    </AnimatePresence></div>
  );
}

export default App;

export const Navigation = () => {
  const [Scan, setScan] = useState("Scanner");
  const [open, setOpen] = useState("navbar-open");
  const openNav = () => {
    setOpen("navbar-open");
  };
  const closeNav = () => {
    setOpen("navbar-closed");
  };
  return (
    <div className="navbar-wrapper">
      <div className="button-container">
        {open === "navbar-open" ? (
          <button onClick={() => closeNav()} className="button btn-success">
            make small
          </button>
        ) : (
          <button onClick={() => openNav()} className="button btn-success">
            Make big
          </button>
        )}
      </div>{" "}
      <nav class={`navbar   ${open}`}>
        <div className="nav-left">BOX</div>
        <div className="text-center nav-center">
          <div className="nav-item">
            <NavLink to="/interstellar">Interstellar Space</NavLink>
          </div>
        </div>
        <div className="nav-right">BOX</div>
        <div className="nav-bottom">{Scan}</div>
      </nav>
    </div>
  );
};
