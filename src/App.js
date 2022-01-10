import "./App.scss";
import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Interstellar } from "./interstellar-view/interstellar";
import { SolSystem } from "./systems/sol/solsystem";
import { GenerateSystem } from "./systems/generatesystem";
import { GeneratePlanet } from "./systems/generatePlanet";
import { AnimatePresence } from "framer-motion";
import { Mercury } from "./systems/sol/sol-planets/Mercury";
import { Venus } from "./systems/sol/sol-planets/Venus";
import { Earth } from "./systems/sol/sol-planets/Earth";
import { Mars } from "./systems/sol/sol-planets/Mars";
import { Jupiter } from "./systems/sol/sol-planets/Jupiter";
import { Saturn } from "./systems/sol/sol-planets/Saturn";
import { Uranus } from "./systems/sol/sol-planets/Uranus";
import { Neptune } from "./systems/sol/sol-planets/Neptune";
import { Navigation } from "./components/navigation";
function App() {
  const [area, setArea] = useState("test");
  const [planetParam, setPlanetParam] = useState("");
  const [planetData, setPlanetData] = useState([]);
  useEffect(() => {
    fetch("/planet-info.json").then(result => {
      const json = result.json();
     
      setPlanetData(json.planets);
      
    });
  },[]);

  const location = useLocation();
  return (
    <div>
      <Navigation area={area} setArea={setArea} />
      
      <AnimatePresence className="App" exitBeforeEnter={true}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/interstellar"
            render={(props) => (
              <Interstellar {...props} area={area} setArea={setArea} />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <SolSystem
                {...props}
                area={area}
                setArea={setArea}
                planetParam={planetParam}
                setPlanetParam={setPlanetParam}
              />
            )}
          />
          <Route
            exact
            path="/:id"
            render={(props) => (
              <GenerateSystem {...props} area={area} setArea={setArea} />
            )}
          />
          <Route
            exact
            path="/exoplanets/:id"
            render={(props) => <GeneratePlanet {...props} />}
          />
          <Route
            path="/planets/mercury"
            render={(props) => (
              <Mercury {...props} setArea={setArea} area={area} />
            )}
          />
          <Route
            path="/planets/venus"
            render={(props) => (
              <Venus {...props} setArea={setArea} area={area} />
            )}
          />
          <Route
            path="/planets/earth"
            render={(props) => (
              <Earth {...props} setArea={setArea} area={area} />
            )}
          />
          <Route
            path="/planets/mars"
            render={(props) => (
              <Mars {...props} setArea={setArea} area={area} />
            )}
          />
          <Route
            path="/planets/juipter"
            render={(props) => (
              <Jupiter {...props} setArea={setArea} area={area} />
            )}
          />
          <Route
            path="/planets/saturn"
            render={(props) => (
              <Saturn {...props} setArea={setArea} area={area} />
            )}
          />
          <Route
            path="/planets/uranus"
            render={(props) => (
              <Uranus {...props} setArea={setArea} area={area} />
            )}
          />
          <Route
            path="/planets/neptune"
            render={(props) => (
              <Neptune {...props} setArea={setArea} area={area} />
            )}
          />
          <Route
            path="/planets/test"
            render={(props) => (
              <GeneratePlanet
                {...props}
                planetData={planetData}
                setArea={setArea}
                area={area}
                setPlanetParam={setPlanetParam}
                planetParam={planetParam}
              />
            )}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
